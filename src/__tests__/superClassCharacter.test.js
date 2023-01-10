import Character from '../js/superClassCharacter';

test('2.1. Должна быть ошибка про пустое имя', () => {
  const received = {};

  expect(() => {
    received = new Character('');
  }).toThrow(Error('Имя не может быть пустым'));
});

test('2.2. Должна быть ошибка про тип данных name = строка ', () => {
  const received = {};

  expect(() => {
    received = new Character(12345);
  }).toThrow(Error('Имя должно быть строкой'));
});

test('2.3. Должна быть ошибка из-за длины имени <2', () => {
  const received = {};

  expect(() => {
    received = new Character('1');
  }).toThrow(Error('Имя должно быть не менее 2 символов'));
});

test('2.4. Должна быть ошибка из-за длины имени >10', () => {
  const received = {};

  expect(() => {
    received = new Character('12345678910');
  }).toThrow(Error('Имя должно быть не более 10 символов'));
});


test('3.1. Должна быть ошибка про пустые данные в type', () => {
  const received = {};

  expect(() => {
    received = new Character('Test', '');
  }).toThrow(Error('Тип персонажа не может быть пустым'));
});

test('3.2. Должна быть ошибка про тип данных type = строка', () => {
  const received = {};

  expect(() => {
    received = new Character('Test', 1122);
  }).toThrow(Error('Тип персонажа должен быть строкой'));
});

test('3.3. Должна вылезти ошибка о том, что возможны только конкретные значения type', () => {
  const received = {};

  expect(() => {
    received = new Character('Test', 'Killer');
  }).toThrow(Error('Возможные типы персонажей: Bowerman, Swordsman, Magician, Daemon, Undead, Zombie'));
});


test('4.1. ', () => {
  const received = {};

  expect(() => {
    received = new Character('Test', 'Killer');
  }).toThrow(Error('Возможные типы персонажей: Bowerman, Swordsman, Magician, Daemon, Undead, Zombie'));
});