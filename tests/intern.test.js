const Intern = require("../lib/Intern");


test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Lilith", 1, "test@test.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school from getSchool()", () => {
  const testValue = "UCLA";
  const e = new Intern("Lilith", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});