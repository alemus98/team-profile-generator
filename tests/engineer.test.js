const Engineer = require("../lib/Engineer");

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Lilith", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

