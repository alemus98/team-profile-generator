const Manager = require('../lib/Manager');

test('Manager constructor arguments should log', () => {
    const manager = new Manager(5, 'Jon', 1, 'Jon@gmail.com');

    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.name).toBe('Jon');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('Jon@gmail.com');
})

test('Manager method results', () => {
    const manager = new Manager(5, 'Jon', 1, 'Jon@gmail.com');

    expect(manager.getOfficeNumber()).toBe(5);
    expect(manager.getName()).toBe('Jon');
    expect(manager.getId()).toBe(1);
    expect(manager.getEmail()).toBe('Jon@gmail.com');
    expect(manager.getRole()).toBe('Manager')
})