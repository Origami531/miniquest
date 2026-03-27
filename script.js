// script.js

// Game Engine

// Keybinds
const keybinds = {
    moveUp: 'W',
    moveDown: 'S',
    moveLeft: 'A',
    moveRight: 'D',
};

// Player Class
class Player {
    constructor(name) {
        this.name = name;
        this.position = { x: 0, y: 0 };
    }

    move(direction) {
        switch(direction) {
            case 'up':
                this.position.y -= 1;
                break;
            case 'down':
                this.position.y += 1;
                break;
            case 'left':
                this.position.x -= 1;
                break;
            case 'right':
                this.position.x += 1;
                break;
        }
        console.log(`${this.name} moved to (${this.position.x}, ${this.position.y})`);
    }
}

// Map System
const areas = {
    village: {
        description: "A peaceful village.",
    },
    forest: {
        description: "A dense and dark forest.",
    },
    dungeon: {
        description: "A dark and eerie dungeon.",
    }
};

function changeArea(area) {
    if (areas[area]) {
        console.log(`You are now in the ${area}: ${areas[area].description}`);
    } else {
        console.log('Area not found.');
    }
}

// Collision Detection
function checkCollision(player1, player2) {
    return player1.position.x === player2.position.x && player1.position.y === player2.position.y;
}

// Combat System
class Enemy {
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }

    takeDamage(amount) {
        this.health -= amount;
        console.log(`${this.name} took ${amount} damage. Remaining health: ${this.health}`);
        if (this.health <= 0) {
            console.log(`${this.name} has been defeated!`);
        }
    }
}

// Example usage
const player = new Player("Hero");
const boss = new Enemy("Dragon", 100);

// Player movement handling (WASD)
document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case keybinds.moveUp:
            player.move('up');
            break;
        case keybinds.moveDown:
            player.move('down');
            break;
        case keybinds.moveLeft:
            player.move('left');
            break;
        case keybinds.moveRight:
            player.move('right');
            break;
    }
    // Check for collision with boss
    if (checkCollision(player, boss)) {
        console.log('You encountered a boss!');
        boss.takeDamage(20);
    }
});

// Starting area
changeArea('village');
