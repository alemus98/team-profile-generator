const Employee = require('../lib/Employee');

test('Employee constructor arguments should log', () => {
    const employee = new Employee('Jon', 1, 'Jon@gmail.com');

    expect(employee.name).toBe('Jon');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('Jon@gmail.com');
})

test('Employee method results', () => {
    const employee = new Employee('Jon', 2, 'Jon@gmail.com');

    expect(employee.getName()).toBe('Jon');
    expect(employee.getId()).toBe(2);
    expect(employee.getEmail()).toBe('Jon@gmail.com');
    expect(employee.getRole()).toBe('Employee')
})