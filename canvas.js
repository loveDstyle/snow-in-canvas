class SnowCanvas {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
        this.onResize();
        window.addEventListener('resize', this.onResize)
        this.createFlakes();
        requestAnimationFrame(this.animate)

    }
    onResize = () => {
        this.width = window.innerWidth;
        this.height = window.innerHeight
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }
    createFlakes = () => {
        const num = window.innerWidth / 4;
        this.snowFlakes = [];
        for (let i = 0; i < num; i++) {
            this.snowFlakes.push(new SnowFlake())
        }
    }
    animate = () => {
        this.ctx.clearRect(0, 0, this.width, this.height);
        for (const flake of this.snowFlakes) {
            flake.update();
            this.ctx.save();
            this.ctx.fillStyle = '#fff';
            this.ctx.globalAlpha = flake.alpha;
            this.ctx.beginPath();
            this.ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2)
            this.ctx.closePath();
            this.ctx.fill();
            this.ctx.restore();
        }
        requestAnimationFrame(this.animate)
    }
}
new SnowCanvas();