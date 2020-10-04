const Engineer = require("../lib/Engineer");
test("Can set GitHUb account using a constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Ghost", 1, "test@email.com", testValue);
  expect(e.github).toBe(testValue);
});
test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Ghost", 1, "test@email.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});
test("Can get GitHub username using getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Ghost", 1, "test@email.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});