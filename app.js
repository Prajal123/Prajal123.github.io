let id = ["box1", "box2", "box3", "box4", "box5", "box6", "box7", "box8", "box9", "box10", "box11", "box12", "box13", "box14", "box15", "box16", "box17", "box18", "box19", "box20", "box21", "box22", "box23", "box24", "box25"];

let classname = ["green", "green", "green", "green", "blue", "blue", "blue", "blue", "orange", "orange", "orange", "orange", "white", "white", "white", "white", "red", "red", "red", "red", "yellow", "yellow", "yellow", "yellow"];

let id1 = ["smallbox1", "smallbox2", "smallbox3", "smallbox4", "smallbox5", "smallbox6", "smallbox7", "smallbox8", "smallbox9"];

let classname1 = ["green", "green", "green", "green", "blue", "blue", "blue", "blue", "orange", "orange", "orange", "orange", "white", "white", "white", "white", "red", "red", "red", "red", "yellow", "yellow", "yellow", "yellow"];

shuffle(classname1);
shuffle(classname);

for (let i = 0; i < 24; i++) {
    document.getElementById(id[i]).setAttribute("class", classname[i]);
}
for (let i = 0; i < 9; i++) {
    document.getElementById(id1[i]).setAttribute("class", classname1[i]);
}


function shuffle(array) {
    var currentIndex = array.length, randomIndex;


    while (0 !== currentIndex) {


        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

let n = 0;
function check1() {
    if (classname1[0] == classname[6] && classname1[1] == classname[7] && classname1[2] == classname[8] && classname1[3] == classname[11] && classname1[4] == classname[12] && classname1[5] == classname[13] && classname1[6] == classname[16] && classname1[7] == classname[17] && classname1[8] == classname[18]) {
        n = 1;
        addclass1();
        clearTimeout(t);
        score1();
    }
}
const addclass = document.querySelector('.container4');
const scorecard = document.querySelector('.container6');
function addclass1() {

    addclass.classList.add('show');
}


function reset() {
    alert("You are in Prajal's website game. Are you sure you want to reset?");
    location.reload();
}


var seconds = 0;
var tens = 0;
var appendTens = document.getElementById('tens');
var appendseconds = document.getElementById('seconds');

var interval;
var score = 0;
function startTimer() {
    tens++;

    if (tens < 9)
        appendTens.innerHTML = "0" + tens;

    if (tens > 9)
        appendTens.innerHTML = tens;

    if (tens > 99) {
        seconds++;
        appendseconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 99) {
        appendseconds.innerHTML = seconds;
    }
}
var t = setInterval(startTimer);


let a = 24;
document.getElementById(id[24]).setAttribute("class", "black");
function check(i) {

    if (i >= 6 && i <= 8 || i >= 11 && i <= 13 || i >= 16 && i <= 18) {
        if (id[i + 1] == id[a] || id[i - 1] == id[a] || id[i + 5] == id[a] || id[i - 5] == id[a]) {
            document.getElementById(id[i]).removeAttribute("class", classname[i]);
            document.getElementById(id[a]).removeAttribute("class", "black");
            document.getElementById(id[a]).setAttribute("class", classname[i]);
            document.getElementById(id[i]).setAttribute("class", "black");
            let temp = classname[i];
            classname[i] = "black";
            classname[a] = temp;
            a = i;
            movestaken();
            check1();
        }
    }
    else if (i >= 1 && i <= 3) {
        if (id[i + 1] == id[a] || id[i - 1] == id[a] || id[i + 5] == id[a]) {
            document.getElementById(id[i]).removeAttribute("class", classname[i]);
            document.getElementById(id[a]).removeAttribute("class", "black");
            document.getElementById(id[a]).setAttribute("class", classname[i]);
            document.getElementById(id[i]).setAttribute("class", "black");
            let temp = classname[i];
            classname[i] = "black";
            classname[a] = temp;
            a = i;
            movestaken();
            check1();
        }
    }
    else if (i == 5 || i == 10 || i == 15) {
        if (id[i + 1] == id[a] || id[i + 5] == id[a] || id[i - 5] == id[a]) {
            document.getElementById(id[i]).removeAttribute("class", classname[i]);
            document.getElementById(id[a]).removeAttribute("class", "black");
            document.getElementById(id[a]).setAttribute("class", classname[i]);
            document.getElementById(id[i]).setAttribute("class", "black");
            let temp = classname[i];
            classname[i] = "black";
            classname[a] = temp;
            a = i;
            check1();
            movestaken();

        }
    }
    else if (i == 9 || i == 14 || i == 19) {
        if (id[i - 1] == id[a] || id[i + 5] == id[a] || id[i - 5] == id[a]) {
            document.getElementById(id[i]).removeAttribute("class", classname[i]);
            document.getElementById(id[a]).removeAttribute("class", "black");
            document.getElementById(id[a]).setAttribute("class", classname[i]);
            document.getElementById(id[i]).setAttribute("class", "black");
            let temp = classname[i];
            classname[i] = "black";
            classname[a] = temp;
            a = i;
            check1();
            movestaken();
        }
    }
    else if (i == 21 || i == 22 || i == 23) {
        if (id[i + 1] == id[a] || id[i - 1] == id[a] || id[i - 5] == id[a]) {
            document.getElementById(id[i]).removeAttribute("class", classname[i]);
            document.getElementById(id[a]).removeAttribute("class", "black");
            document.getElementById(id[a]).setAttribute("class", classname[i]);
            document.getElementById(id[i]).setAttribute("class", "black");
            let temp = classname[i];
            classname[i] = "black";
            classname[a] = temp;
            a = i;
            check1();
            movestaken();
        }
    }
    else if (i == 0) {
        if (id[i + 1] == id[a] || id[i + 5] == id[a]) {
            document.getElementById(id[i]).removeAttribute("class", classname[i]);
            document.getElementById(id[a]).removeAttribute("class", "black");
            document.getElementById(id[a]).setAttribute("class", classname[i]);
            document.getElementById(id[i]).setAttribute("class", "black");
            let temp = classname[i];
            classname[i] = "black";
            classname[a] = temp;
            a = i;
            movestaken();
            check1();
        }
    }
    else if (i == 20) {
        if (id[i + 1] == id[a] || id[i - 5] == id[a]) {
            document.getElementById(id[i]).removeAttribute("class", classname[i]);
            document.getElementById(id[a]).removeAttribute("class", "black");
            document.getElementById(id[a]).setAttribute("class", classname[i]);
            document.getElementById(id[i]).setAttribute("class", "black");
            let temp = classname[i];
            classname[i] = "black";
            classname[a] = temp;
            a = i;
            movestaken();
            check1();
        }
    }
    else if (i == 4) {
        if (id[i - 1] == id[a] || id[i + 5] == id[a]) {
            document.getElementById(id[i]).removeAttribute("class", classname[i]);
            document.getElementById(id[a]).removeAttribute("class", "black");
            document.getElementById(id[a]).setAttribute("class", classname[i]);
            document.getElementById(id[i]).setAttribute("class", "black");
            let temp = classname[i];
            classname[i] = "black";
            classname[a] = temp;
            a = i;
            movestaken();
            check1();
        }
    }
    else {
        if (id[i - 1] == id[a] || id[i - 5] == id[a]) {
            document.getElementById(id[i]).removeAttribute("class", classname[i]);
            document.getElementById(id[a]).removeAttribute("class", "black");
            document.getElementById(id[a]).setAttribute("class", classname[i]);
            document.getElementById(id[i]).setAttribute("class", "black");
            let temp = classname[i];
            classname[i] = "black";
            classname[a] = temp;
            a = i;
            movestaken();
            check1();
        }
    }

}
var moves = 0;
var appendmoves = document.getElementById('moves');
function movestaken() {
    moves++;

    if (moves < 9) {
        appendmoves.innerHTML = "0" + moves;
    }
    if (moves > 9) {
        appendmoves.innerHTML = moves;
    }
    if (moves > 99) {
        appendmoves.innerHTML = "0" + moves;
    }

}
var appendscore = document.getElementById('score');
function score1() {
    score = 500;
    if ((moves > 50 && moves < 100) && (seconds > 0 && seconds < 200)) {
        appendscore.innerHTML = "500";
    }
    if ((moves > 50 && moves < 100) || (seconds > 0 && seconds < 200)) {
        appendscore.innerHTML = "460";
    }
    if ((moves > 100 && moves < 150) && (seconds > 0 && seconds < 400)) {
        appendscore.innerHTML = "400";
    }
    if ((moves > 100 && moves < 150) || (seconds > 0 && seconds < 400)) {
        appendscore.innerHTML = "350";
    }
    else {
        appendscore.innerHTML = "300";
    }
    scorecard.classList.add('show');
}
