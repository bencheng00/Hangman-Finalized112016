//Javascript file for Ben Cheng's Hangman Game

//Randomly chooses a song from song list to use for game
var queensongs=["bohemian rhapsody", "we will rock you", "we are the champions", "under pressure", "another one bites the dust", "show must go on", "killer queen", "fat bottomed girls", "somebody to love", "i want it all", "who wants to live forever", "i want to break free", "radio ga ga", "a kind of magic", "tie your mother down", "love of my life", "hammer to fall", "seven seas of rhye", "tear it up", "crazy little thing called love", "flash", "one vision", "death on two legs","dragon attack","bicycle race","in the lap of the gods","princes of the universe","sheer heart attack"];
var songlistlength=queensongs.length
console.log("Number of songs in list is "+songlistlength); 
console.log("___________________________");
var randomnumber=Math.floor(Math.random()*songlistlength);
var randomsong=queensongs[randomnumber];
console.log("Randomly chosen song is: "+randomsong);
console.log("___________________________");
var initialdisplay=randomsong.replace(/a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|0|1|2|3|4|5|6|7|8|9/g,"_");
console.log("Randomly chosen song displayed as: "+initialdisplay);
console.log("___________________________");

function songlist(arr){
	for (var i=0; i < arr.length; i++){
		console.log(arr[i]);
	}
}
songlist(queensongs);
console.log("___________________________");

var lettersguessed=""
var guessesleft=6
var wins=0
var losses=0




function startgame(){
		document.getElementById("start").style.display="none";
		document.getElementById("initialdisplay").innerHTML=initialdisplay;
		document.getElementById("lettersguessed").innerHTML="Letters Guessed: "+lettersguessed;
		document.getElementById("guessesleft").innerHTML="Guesses remaining: "+guessesleft;
		activatekeyboard();
}


function activatekeyboard(){


document.onkeyup=function(event){
		var key = String.fromCharCode(event.keyCode).toLowerCase();
		var position = randomsong.indexOf(key);
		var notrepeat=(lettersguessed.indexOf(key)==(-1))
		console.log(position);

		if(key!="a" && key!="b" && key!="c" && key!="d" && key!="e" && key!="f" && key!="g" && key!="h" && key!="i" && key!="j" && key!="k" && key!="l" && key!="m" && key!="n" && key!="o" && key!="p" && key!="q" && key!="r" && key!="s" && key!="t" && key!="u" && key!="v" && key!="w" && key!="x" && key!="y" && key!="z"){
			alert("Hey dumbass, your guess has to be a LETTER.");
			document.getElementById("sadtrombone").play();
			document.getElementById("line1").innerHTML="Dumbass.";
			document.getElementById("line1").style.color="red";
		}
		else {

		//Determines if we add latest guess to "Letters Guessed" list, depending on whether it's a repeat of a past guess
		if (notrepeat){
			lettersguessed=lettersguessed+" "+key+" ";
			console.log("Not a repeated guess: "+notrepeat);
		}
		else {
			lettersguessed=lettersguessed;
			console.log("Not a repeated guess: "+notrepeat);
			alert("Hey dumbass, you already guessed "+key.toUpperCase()+".")
			document.getElementById("sadtrombone").play();
		}
		

		//Determines if guessed letter is correct
		document.getElementById("lettersguessed").innerHTML="Letters GUessed: "+lettersguessed;
		if (position==-1 && notrepeat){
			document.getElementById("line1").innerHTML="WRONG!";
			document.getElementById("line1").style.color="red";
			guessesleft = guessesleft -= 1;
			console.log("Guesses left = "+guessesleft);
			document.getElementById("guessesleft").innerHTML="Guesses remaining: "+guessesleft;
			document.getElementById("fart").play();
		}	
		else if (position==-1){
			document.getElementById("line1").innerHTML="Idiot.";
			document.getElementById("line1").style.color="red";
			guessesleft = guessesleft;
			console.log("Guesses left = "+guessesleft);
			document.getElementById("guessesleft").innerHTML="Guesses remaining: "+guessesleft;
		}
		else if (position!==-1 && notrepeat){
			document.getElementById("line1").innerHTML="CORRECT!";
			document.getElementById("line1").style.color="green";
			document.getElementById("mariocoin").play();
			
			for (var i=0; i<randomsong.length;i++){
				var letter=randomsong.charAt(i);
				console.log(letter==key);
					if (letter==key){
					initialdisplay=initialdisplay.substring(0,i)+key+initialdisplay.substring(i+1);
					document.getElementById("initialdisplay").innerHTML=initialdisplay;
				}
			}
		}

		else {
			document.getElementById("line1").innerHTML="Idiot."
			document.getElementById("line1").style.color="red";
		}
	}
			if(guessesleft==0 || guessesleft<0){
				var spoiler="P.S. - The correct answer was "+randomsong.toUpperCase()+".";
				console.log(spoiler);
				document.getElementById("hangmantitle").src="images/noose.gif";
				document.getElementById("hangmantitle").style.width="100%";
				document.getElementById("theme").innerHTML="<h1>GAME OVER</h1><br><p>You should just give up on life.</p>";
				document.getElementById("theme").style.color="red";
				document.getElementById("line3").innerHTML=spoiler;
				document.getElementById("line3").style.color="red";
				document.getElementById("hangman1").src="images/Blood2.gif";
				document.getElementById("hangman1").style.width="50%";
				document.getElementById("hangman1").style.position="absolute";
				document.getElementById("hangman1").style.top="380px";
				document.getElementById("hangman1").style.right="15px";
				document.getElementById("queen").src="images/Blood2.gif";
				document.getElementById("queen").style.width="50%";
				document.getElementById("queen").style.position="absolute";
				document.getElementById("queen").style.top="380px";
				document.getElementById("line1").style.display="none";
				document.getElementById("line2").style.display="none";
				document.getElementById("break6").style.display="none";
				document.getElementById("break7").style.display="none";
				document.getElementById("lettersguessed").style.display="none";
				document.getElementById("guessesleft").style.display="none";
				document.getElementById("initialdisplay").style.display="none";
				document.getElementById("blood1").style.display="none";
				document.getElementById("startagain").style.display="block";
				document.getElementById("startagain").style.position="absolute";
				document.getElementById("startagain").style.top="-70px";
				document.getElementById("startagain").style.right="50px";
				document.getElementById("mariodie").play();
				losses=losses+1;
				console.log("Wins: "+wins+" Losses: "+losses)
				document.onkeyup=function(event){
					console.log("No more guesses allowed")
				}
			}
	
			if(initialdisplay.indexOf("_")==-1){
				document.getElementById("hangmantitle").src="images/carlton.gif";
				document.getElementById("hangmantitle").style.width="100%";
				document.getElementById("theme").innerHTML="<h3>CONGRATULATIONS</h3><br><p>Your life must feel so complete.</p>";
				document.getElementById("theme").style.color="white";
				document.getElementById("hangman1").src="images/elmo.gif";
				document.getElementById("hangman1").style.width="70%";
				document.getElementById("hangman1").style.position="absolute";
				document.getElementById("hangman1").style.top="150px";
				document.getElementById("hangman1").style.right="15px";
				document.getElementById("queen").src="images/elmo.gif";
				document.getElementById("queen").style.width="70%";
				document.getElementById("queen").style.position="absolute";
				document.getElementById("queen").style.top="150px";
				document.getElementById("line1").style.display="none";
				document.getElementById("line2").style.display="none";
				document.getElementById("break6").style.display="none";
				document.getElementById("break7").style.display="none";
				document.getElementById("lettersguessed").style.display="none";
				document.getElementById("guessesleft").style.display="none";
				document.getElementById("initialdisplay").style.display="none";
				document.getElementById("blood1").style.display="none";
				document.getElementById("startagain").style.display="block";
				document.getElementById("startagain").style.position="absolute";
				document.getElementById("startagain").style.top="-70px";
				document.getElementById("startagain").style.right="50px";
				document.getElementById("champs").play();
				wins=wins+1;
				console.log("Wins: "+wins+" Losses: "+losses)
				document.onkeyup=function(event){
					console.log("No more guesses allowed")
				}
			}
	}
	}

function startagain(){

	window.location.reload(true);
}

