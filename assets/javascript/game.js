var doubleWord = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
                  
var wordBank =['cayde','zavala','ikora', 'xol','crucible','gaurdian','ghost', 'shaxx', 'fallen', 'vex', 'cabal', 'hive', 'scorn', 'taken', 'hunter', 'warlock', 'titan'];
var choosenWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses =[];
var wrongLetters = [];

var winCount = 0;
var loseCount = 0;
var guessesLeft = 9;
var rightGuessCounter = 0;

function reset()
{
	choosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	lettersInWord = choosenWord.split('');
	numBlanks = lettersInWord.length;
	

	letterGuessed = 0;
	rightGuessCounter = 0;
	guessesLeft = 9;
	wrongLetters =[];
	blanksAndSuccesses =[];
	doubleWord = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	test=false;
	startGame();
}
function startGame()
{
	choosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	lettersInWord = choosenWord.split('');
	numBlanks = lettersInWord.length;
	rightGuessCounter = 0;
	guessesLeft = 9;
	wrongLetters =[];
	blanksAndSuccesses =[];
	doubleWord = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

	for(var i = 0; i< numBlanks; i++)
	{
		blanksAndSuccesses.push('_');
		document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses;
	}

	document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
	document.getElementById('numGuesses').innerHTML = guessesLeft;
	document.getElementById('winCounter').innerHTML = winCount;
	document.getElementById('lossCounter').innerHTML = loseCount;
	document.getElementById('wrongGuesses').innerHTML = wrongLetters;
}

function compareLetters(userKey)
{
				if(choosenWord.indexOf(userKey) > -1)
				{
					for(var i = 0; i < numBlanks; i++)
					{
						if(lettersInWord[i] === userKey)
						{
							rightGuessCounter++;
							blanksAndSuccesses[i] = userKey;
							document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
						}	
					}
				}
				else
				{
					wrongLetters.push(userKey);
					guessesLeft--;
					document.getElementById('numGuesses').innerHTML = guessesLeft;
					document.getElementById('wrongGuesses').innerHTML = wrongLetters;
					console.log('Wrong Letters = ' + wrongLetters);
					console.log('Guesses left are ' + guessesLeft);
				}
			
			
		
}
function winLose()
{
	if(rightGuessCounter === numBlanks)
	{ 
		winCount++;
		document.getElementById('winCounter').innerHTML = winCount;
		alert('haha! Is that what victory smells like? - Shaxx');
		reset();
	}
	else if(guessesLeft === 0)
	{
		loseCount++;
		document.getElementById('lossCounter').innerHTML = loseCount;
		alert('Let the sting from this defeat fuel your fire! - Shaxx');
		reset();
	}
}

startGame();

document.onkeyup = function(event)
{
	test = true;
	var letterGuessed = event.key;
	for(var i = 0; i < doubleWord.length; i++)
	{	
		if(letterGuessed === doubleWord[i] && test === true)
		{
			var splicedWord = doubleWord.splice(i,1);
        compareLetters(letterGuessed);
			winLose();
		}
	}		
		
}