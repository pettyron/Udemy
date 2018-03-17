// Example 1
class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

class Snake extends Monster {
  constructor(options) {
    super(options);
  }
  bite(enemy) {
    return enemy.health -= 10;
  }
}

const snake = new Snake({name: 'Water Moccasin'});
const weakSnake = new Snake({name: 'Blue Racer'});
snake.bite(weakSnake);
