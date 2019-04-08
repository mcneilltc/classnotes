 /*function Particle{
    constructor(startX, startY){
     this.x = startX;
     this.y = startY;
     this.velocity = {x:0, y:0};}
}
const particles=[];
 for( let i = 0; i<100; i++){
      particles.push(new particle( i, Math.random()*500).toFixed(3));
 }
  
console.log(particles);*/

class Particle {
     constructor(startX, startY){
          this.x = startX;
          this.y = startY;
          this.velocity = {x:0, y:0};
     };
}
const particles =[];
     for (let i = 0; i<100; i++){
          particles.push(new Particle(i, Math.random()*500).toFixed(3));

         }
console.log(particles);
