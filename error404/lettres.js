
function Lettres(){
  this.l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random() * 26)];
  this.vitesse = Math.floor(Math.random() * (2 - 1) + 1);
  this.y = 0;
  this.x = Math.floor(Math.random() * ((width-10) - 0) + 0);

  this.show = function(){
    text(this.l,this.x,this.y);
  }

  this.update = function(){
    this.y += this.vitesse;

  }



}
