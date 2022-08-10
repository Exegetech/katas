const numUniqueEmails = function (emails) {
  const buckets = {};

  emails.forEach((e) => {
    const hashed = hash(e);

    if (typeof buckets[hashed] === 'undefined') {
      buckets[hashed] = [e];
      return;
    }

    buckets[hashed].push(e);
  });

  return Object.keys(buckets).length;
};

function hash(email) {
  const [local, domain] = email.split('@');
  const chrArr = [];

  for (let i = 0; i < local.length && local[i] !== '+'; i++) {
    if (local[i] !== '.') {
      chrArr.push(local[i]);
    }
  }

  const newLocal = chrArr.join('');

  return `${newLocal}@${domain}`;
}

module.exports = { numUniqueEmails };
