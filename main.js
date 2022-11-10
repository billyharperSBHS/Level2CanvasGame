const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 700;
canvas.height= 500;

let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gamespeed = 3;

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillrect(10, 10, 50, 50);
    requestAnimationFrame(animate);
}

animate();

window.addEventListener('keydown', function(e){
    console.log(e.code)

})