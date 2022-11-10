Class Player {
constructor(){
 this.x = 150;
 this.y = 200;
 this.vy = 0;
 this.width = 20;
 this.height = 20;
 this.weight = 1.5;
}
update(){
    this.vy += this.weight;
    this.y += this.vy;
}
draw(){
ctx.fillStyle = 'green';
ctx.fillRect(this.x, this.y, this.width, this.height);
}
flap(){
   this.vy -= 2;

   }
}

const player = new Player();