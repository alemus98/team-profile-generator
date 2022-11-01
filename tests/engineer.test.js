const Engineer = require('../lib/Engineer');

test('Engineer constructor arguments should log', () => {
    const engineer = new Engineer('https://github.com/jonwong2020', 'Jon', 1, 'Jon@gmail.com');

    expect(engineer.github).toBe('https://github.com/jonwong2020');
    expect(engineer.name).toBe('Jon');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('Jon@gmail.com');
})

test('Engineer method results', () => {
    const engineer = new Engineer('https://github.com/jonwong2020', 'Jon', 2, 'Jon@gmail.com');

    expect(engineer.getGitHub()).toBe('https://github.com/jonwong2020');
    expect(engineer.getName()).toBe('Jon');
    expect(engineer.getId()).toBe(2);
    expect(engineer.getEmail()).toBe('Jon@gmail.com');
    expect(engineer.getRole()).toBe('Engineer')
})