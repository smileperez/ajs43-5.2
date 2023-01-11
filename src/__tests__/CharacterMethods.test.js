import Character from '../js/Character';
import Bowman from '../js/Bowman';

test('5.1. Должен увеличится уровень и характеристики', () => {
  const newPlayer = new Bowman('testName');
  newPlayer.levelUp();

  const expected = {
    attack: 30,
    defence: 30,
    health: 100,
    level: 2,
    name: "testName",
    type: "Bowman"
  }

  expect(newPlayer).toEqual(expected);
});

test('5.2. Должен нанестись урон и уменьшиться здоровье', () => {
  const newPlayer = new Bowman('testName');
  newPlayer.damage(15);

  const expected = {
    attack: 25,
    defence: 25,
    health: 89,
    level: 1,
    name: "testName",
    type: "Bowman"
  }
  expect(newPlayer).toEqual(expected);
});

test('5.3. Должна быть ошибка так как нельзя повысить уровень умершего', () => {
  expect(() => {
    const newPlayer = new Bowman('testName');
    newPlayer.damage(1000);
    newPlayer.levelUp();
  }).toThrow(Error('Нельзя повысить левел умершего'));
});

test('5.4. Должна быть ошибка так как нельзя нанести урон умершему', () => {
  expect(() => {
    const newPlayer = new Bowman('testName');
    newPlayer.damage(1000);
    newPlayer.damage(200);
  }).toThrow(Error('Нельзя нанести урон умершему'));
});

