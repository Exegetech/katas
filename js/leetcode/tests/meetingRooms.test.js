const { canAttendMeetings } = require('../src/meetingRooms');

const cases = [
  {
    intervals: [
      [0, 30],
      [5, 10],
      [15, 20],
    ],
    output: false,
  },
  {
    intervals: [
      [7, 10],
      [2, 4],
    ],
    output: true,
  },
];

test.each(cases)('canAttendMeetings', ({ intervals, output }) => {
  expect(canAttendMeetings(intervals)).toEqual(output);
});
