function setupListeners(){
	getById("intro").addEventListener("click",startGame);
}

function startGame(){
	hideObject("intro");
	showObject("game");

}

/* function loadGameBoard(){
	getById("accueil").style.display="block";
	getById("sonette").style.display="block";
}
 */


function callReceptionist(){
	console.log("ping");
	let bell=getById("ding");
	bell.play();
	
	let num=Math.floor(Math.random()*99)+1;
	console.log(num);

	if (70<=num && 100>=num){
		window.alert("Il y a quelqu'un qui arrive...");
		let recept=document.createElement("img");
		recept.id="recept";
		recept.src="./reception-clipart-2.png";
		getById("game").appendChild(recept);
		Conversation();
	}
	
}

function Conversation(){
	hideObject("desk");
	console.log("test");
	let conver=["","Salut jeune homme/fille!!", "Il me faut quelques réponses pour que je te donne les clés.", "Tu es prêt-e?"];
	let bulle=document.createElement("p");
	bulle.className="speech";
	getById("game").appendChild(bulle);
	bulle.innerHTML=conver[0];
	getById("game").addEventListener("click",()=>{
		conver.shift();
		bulle.innerHTML=conver[0];
		if (conver.length==1){ 
			bulle.parentNode.removeChild(bulle);
			Questions_Answers();
		}	
	});
}

function Questions_Answers(){
	var choco=prompt("Chocolatine ou pain au chocolat?","");
	if (choco=="Chocolatine" || choco==""){
		Found_keys("Félicitations. Tu as récuperé les clés!!!");
	}
	else{
		Mauvaise_Reponse();
	}
}

function Found_keys(answer){
	hideObject("recept");
	let final_test=document.createElement("p");
	final_test.innerHTML=answer;
	getById("game").appendChild(final_test);
}

function Mauvaise_Reponse(){
	hideObject("recept");
	window.alert("Mauvaise réponse. Cliquer sur le bouton pour recommencer");	
	window.location.reload();
}
function deskGame(){
	let coordinates=getClickPosition(event);
	console.log(coordinates);
	if (543<=coordinates[0] && coordinates[0]<=785 && 455<=coordinates[1] && 581>=coordinates[1]){
		spyonLaptop();
	}

}

function spyonLaptop(){
	let continuer=window.confirm("Au pire, on trouvera quelque chose d'utile sur cet ordinateur...");
	if (continuer===true){
		hideObject("desk");
		let pass=window.prompt("Saisir mot de passe");
		if (pass=="1234"){
			Found_keys("Félicitations. Tu viens de découvrir sur l'ordi où se trouvent les clés!!!")
		}
		else{
			Mauvaise_Reponse()
		}
	}
	else{
		window.alert("Tu as bien joué. Ce n'est pas à toi de fouiller dans les affaires d'autres personnes.")
		window.location.reload();
	}
}
function getClickPosition(e){
	return [e.clientX,e.clientY];	
	//541-784 281 398  
}
function getById(id_){
	return document.getElementById(id_);
}

function hideObject(sId){
	var b=getById(sId);
	if(b){
		b.style.display='none';
	}
}

function showObject(sId){
		var b=getById(sId);
		if(b){
			b.style.display='block';
		}
}


document.addEventListener("onload",setupListeners);