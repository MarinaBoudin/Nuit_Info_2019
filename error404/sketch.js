// noprotect
var lettres;
var ListLettres = [];
var flag = 0;
var speedrandom = Math.floor(Math.random()*(300 - 100) + 100);
var score;
var bestScores = [0,0,0];


var div = document.createElement("div");
document.body.appendChild(div);

function setup() {
  var cnv = createCanvas(400, 400);
  score =0;
  cnv.position(0,height/2);
}

function draw() {
  if(!flag){

    background(220);


    if (frameCount % speedrandom == 0){

     ListLettres.push( new Lettres());
     speedrandom = Math.floor(Math.random()*(250 - 50) + 50);
    }

    for(var i=ListLettres.length-1 ; i > -1 ; i--){

      ListLettres[i].update();
      ListLettres[i].show();
      score = KeyPressed(ListLettres,i,score);

      if (ListLettres.length != i && ListLettres[i].y > height){
        flag = GameOver();
        display_scores(manage_scores(score,bestScores));
      }
    if (flag) break;
  }

  text(score,0.9*width,0.1*height);

  }
}

function KeyPressed(list,idx,score){
    if(key == list[idx].l.toLowerCase()){
      score += list[idx].vitesse;
      list.splice(idx,1);
      key = '&$';
    }

  return score;
}

function GameOver(){
    background(220);
    text("GameOver",(width/2)-8,height/2);

    var btn = document.createElement("BUTTON");
    btn.innerHTML = "Replay";
    btn.onclick = function (){
      flag = 0;
      score = 0;
      ListLettres = [];
      document.body.removeChild(btn);
    }
    document.body.appendChild(btn);


    return 1;
}
function tri(l){
    for(var i= 0 ; i< l.length; i++){
        for(var j=i+1; j< l.length; j++){
               if(l[j] <l[i]){
                   var temp = l[j];
                   l[j]=l[i];
                   l[i]=temp;
                }
        }
    }
    return l ;
}

function manage_scores(score,bestScores){

  tri(bestScores);
  if(bestScores[0] < score){
    bestScores[0] = score;
    }

  return bestScores;
}

function display_scores(bestScores){
  //div = document.getElementById("scores");
  div.innerHTML = "";

  tri(bestScores);

  div.innerHTML = `Best Scores :<br/>
                  ${bestScores[2].toString()}<br/>
                  ${bestScores[1].toString()}<br/>
                  ${bestScores[0].toString()}`;


 // div.textContent = bestScores[2].toString()+'<br>'+bestScores[2].toString()+"\n"+bestScores[2].toString()+"\n";
}
