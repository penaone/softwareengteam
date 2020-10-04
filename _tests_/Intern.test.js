const Intern = require("../lib/Intern");
test("Can set school using a constructor", () => {
  const testValue = "ASU";
  const e = new Intern("Ghost", 1, "test@email.com", testValue);
  expect(e.school).toBe(testValue);
});
test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Ghost", 1, "test@email.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});
test("Can get school via getSchool()", () => {
  const testValue = "ASU";
  const e = new Intern("Ghost", 1, "test@email.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});