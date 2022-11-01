const Intern = require('../lib/Intern');

test('Intern constructor arguments should log', () => {
    const intern = new Intern('UCLA', 'Jon', 1, 'Jon@gmail.com');

    expect(intern.school).toBe('UCLA');
    expect(intern.name).toBe('Jon');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('Jon@gmail.com');
})

test('Intern method results', () => {
    const intern = new Intern('UCLA', 'Jon', 2, 'Jon@gmail.com');

    expect(intern.getSchool()).toBe('UCLA')
    expect(intern.getName()).toBe('Jon');
    expect(intern.getId()).toBe(2);
    expect(intern.getEmail()).toBe('Jon@gmail.com');
    expect(intern.getRole()).toBe('Intern')
})