export default class Character {
  constructor(name, type, attack, defence) {
    Character.validateName(name);
    Character.validateType(type);
    this.name = name;
    this.type = type;
    this.attack = attack;
    this.defence = defence;
    this.health = 100;
    this.level = 1;
  }

  static validateName(name) {
    if (name === '') {
      throw new Error('Имя не может быть пустым');
    } else if (typeof name !== 'string') {
      throw new Error('Имя должно быть строкой');
    } else if (name.length < 2) {
      throw new Error('Имя должно быть не менее 2 символов');
    } else if (name.length > 10) {
      throw new Error('Имя должно быть не более 10 символов');
    }
  }

  static validateType(type) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (type === '') {
      throw new Error('Тип персонажа не может быть пустым');
    } else if (typeof type !== 'string') {
      throw new Error('Тип персонажа должен быть строкой');
    } else if (types.includes(type) === false) {
      throw new Error('Возможные типы персонажей: Bowerman, Swordsman, Magician, Daemon, Undead, Zombie');
    }
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить левел умершего');
    }
    this.level += 1;
    this.attack = Math.trunc(this.attack * 1.2);
    this.defence = Math.trunc(this.defence * 1.2);
    this.health = 100;
  }

  damage(points) {
    if (this.health <= 0) {
      throw new Error('Нельзя нанести урон умершему');
    }
    const damage = Math.trunc(points * (1 - this.defence / 100));
    if (damage > this.health) {
      // Защита от чрезвычайного урона, чтобы не было отрицательного здоровья
      this.health = 0;
    } else {
      this.health -= damage;
    }
  }
}
