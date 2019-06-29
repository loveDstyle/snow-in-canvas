const randBetween = (min, max) => {
    return min + Math.random() * (max - min)
}
class SnowFlake {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.radius = 0;
        this.alpha = 0;
        this.reset();
    }
    reset = () => {
        this.x = randBetween(0, window.innerWidth);
        this.y = randBetween(0, -window.innerHeight);
        this.vx = randBetween(-3, 3);
        this.vy = randBetween(2, 5);
        this.radius = randBetween(1, 4);
        this.alpha = (0.1, 0.9)
    }
    update = () => {
        this.x += this.vx;
        this.y += this.vy;
        if (this.y > window.innerHeight) {
            this.reset();
        }
    }
}