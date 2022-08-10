// const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

const leastInterval = function (tasks, n) {
  // const taskQueue = buildTaskQueue(tasks)
  // let time = 0
  // while (taskQueue.size() > 0) {
  //   const task = taskQueue.dequeue().element
  //   task.delay = n
  //   task.count -= 1
  //   for (const t in taskMap) {
  //     if (t !== taskCanBeCompleted) {
  //       if (taskMap[t].delay > 0) {
  //         taskMap[t].delay -= 1
  //       }
  //     }
  //   }
  //   if (taskCanBeCompleted !== null) {
  //     taskMap[taskCanBeCompleted].delay = n
  //     taskMap[taskCanBeCompleted].count -= 1
  //     i++
  //   }
  //   time++
  // }
  // return time
  // };
  // function buildTaskQueue(tasks) {
  // const minQ = new MinPriorityQueue({
  //   priority: (node) => node.delay
  // })
  // const taskMap = {}
  // tasks.forEach((t) => {
  //   if (t in taskMap) {
  //     taskMap[t].count += 1
  //   } else {
  //     taskMap[t] = {
  //       count: 1,
  //       delay: 0,
  //     }
  //   }
  // })
  // for (const task of taskMap) {
  //   minQ.enqueue({
  //     task,
  //     count: taskMap[task].count,
  //     delay: taskMap[task].delay,
  //   })
  // }
  // return minQ
};

module.exports = { leastInterval };
