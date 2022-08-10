const minimumSemesters = function (n, relations) {
  const prereqDict = buildPrereqDict(n, relations);

  const takenCourse = new Set();
  const queue = [];

  for (const course in prereqDict) {
    const prereqs = prereqDict[course];
    if (prereqs.size === 0) {
      queue.push(parseInt(course));
      takenCourse.add(parseInt(course));
    }
  }

  let semesters = 0;

  while (queue.length > 0) {
    const qlen = queue.length;
    semesters++;

    for (let i = 0; i < qlen; i++) {
      const course = queue.shift();

      for (let nextCourse = 1; nextCourse <= n; nextCourse++) {
        if (!takenCourse.has(nextCourse)) {
          prereqDict[nextCourse].delete(course);

          if (prereqDict[nextCourse].size === 0) {
            queue.push(nextCourse);
            takenCourse.add(nextCourse);
          }
        }
      }
    }
  }

  if (takenCourse.size === n) {
    return semesters;
  }

  return -1;
};

function buildPrereqDict(n, relations) {
  const prereqDict = {};
  for (let course = 1; course <= n; course++) {
    prereqDict[course] = new Set();
  }

  relations.forEach((relation) => {
    const [prereq, course] = relation;

    prereqDict[course].add(prereq);
  });

  return prereqDict;
}

module.exports = { minimumSemesters };
