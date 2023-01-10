import Character from '../js/superClassCharacter';
import Bowman from '../js/classBowman';

test('5.1. Должен увеличится уровень и характеристики', () => {
  const newPlayer = new Bowman('testName');
  const levelUp = newPlayer.levelUp;
  const received = levelUp().call(newPlayer);

  // let doMethod = bind(user);

  // const received = player1.levelUp();
  const expected = {
    _name: 'testName',
    _type: 'Bowman',
    attack: 30,
    defence: 30,
    health: 100,
    level: 2
  }

  expect(received).toEqual(expected);
});

// test('5.2. Должен увеличится уровень и характеристики', () => {
//   const received = {};

//   expect(() => {
//     received = new Character('');
//   }).toThrow(Error('Имя не может быть пустым'));
// });

