var words = ['cayde', 'ikora', 'zavala', 'xol', 'crucible'];
var randomNum = math.floor(math.random()*words.length);
var randomWord = words[randNum];
var underscores = [];
var rightLetter = [];
var wrongLetter = [];

var underscoregenerator = () => {
    for (let i = 0; i < randomWord.length; i++) {
        underscores.push('_'); 
    }
    return underscores;
}
document.addEventListener('keypress', (event) => {
    var keyword = String.fromCharCode(event.KeyCode);
    if(randomWord.indexOf(keyword) > -1) {
        rightLetter.push(keyword);
    }
    else {
        wrongLetter.push(keyword);
    }
    underscores[randomWord.indexOf(keyword)] = keyword;

    if(underscores.join('') == randomWord) {
        alert("you win!")
    }
});