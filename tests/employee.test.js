const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});


test("Can get name from getName()", () => {
  const testValue = "Lilith";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});


test("Can get email from getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Lilith", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Lilith", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});