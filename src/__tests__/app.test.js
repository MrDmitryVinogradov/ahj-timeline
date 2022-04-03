import Timeline from '../js/Timeline';

const app = new Timeline();

test('should return false on verify', () => {
  expect(app.verifyCoords('vvvv')).toBe(false);
});

test('should return true on verify', () => {
  expect(app.verifyCoords('[11.111, 11.111]')).toBe(true);
});
