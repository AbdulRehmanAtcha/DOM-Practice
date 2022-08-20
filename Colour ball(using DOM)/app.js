var body = document.getElementById("body");
var firstButton = document.createElement("button");
firstButton.setAttribute("onClick", "change()");
firstButton.style.height = "40px";
firstButton.style.width = "150px";
firstButton.style.fontSize = "18px";
firstButton.style.cursor = "pointer";
firstButton.innerHTML = "Change Colour";
body.append(firstButton);

// Creating Container
var container = document.createElement("div");
container.setAttribute("class", "container");
body.append(container);

// Creating Left Box.
var leftBox = document.createElement("div");
leftBox.setAttribute("class", "left");
container.append(leftBox);
// Filling Content In Left Box.
var leftBoxHeading = document.createElement("h2");
leftBoxHeading.innerHTML = "Choose Colour:";
var leftBoxParagraph = document.createElement("p");
leftBoxParagraph.setAttribute("id", "colour");
leftBoxParagraph.style.height = "120px";
leftBoxParagraph.style.width = "90px";
leftBoxParagraph.style.borderRadius = "50%";
leftBoxParagraph.style.position = "relative";
leftBoxParagraph.style.top = "5px";
// leftBoxParagraph.innerText = randomColourPicker2;
leftBox.append(leftBoxHeading);
leftBox.append(leftBoxParagraph);

// Creating Middle Box.
var midBox = document.createElement("div");
midBox.setAttribute("class", "mid");
midBox.setAttribute("id", "main");
midBox.style.fontSize = "40px";
midBox.style.textAlign = "center";
container.append(midBox);

// Filling Middle Box.
// Line1
var line1 = document.createElement("div");
line1.setAttribute("class", "line1");
midBox.append(line1);
// Filling Line1.
var line1Box1 = document.createElement("div");
line1Box1.setAttribute("class", "ball");
line1Box1.setAttribute("id", "1");
line1Box1.setAttribute("onClick", "choose('1')");

var line1Box2 = document.createElement("div");
line1Box2.setAttribute("class", "ball");
line1Box2.setAttribute("id", "2");
line1Box2.setAttribute("onClick", "choose('2')");

var line1Box3 = document.createElement("div");
line1Box3.setAttribute("class", "ball");
line1Box3.setAttribute("id", "3");
line1Box3.setAttribute("onClick", "choose('3')");

var line1Box4 = document.createElement("div");
line1Box4.setAttribute("class", "ball");
line1Box4.setAttribute("id", "4");
line1Box4.setAttribute("onClick", "choose('4')");

var line1Box5 = document.createElement("div");
line1Box5.setAttribute("class", "ball");
line1Box5.setAttribute("id", "5");
line1Box5.setAttribute("onClick", "choose('5')");

var line1Box6 = document.createElement("div");
line1Box6.setAttribute("class", "ball");
line1Box6.setAttribute("id", "6");
line1Box6.setAttribute("onClick", "choose('6')");

line1.append(line1Box1);
line1.append(line1Box2);
line1.append(line1Box3);
line1.append(line1Box4);
line1.append(line1Box5);
line1.append(line1Box6);


// Line2
var line2 = document.createElement("div");
line2.setAttribute("class", "line2");
midBox.append(line2);
// Filling Line2.
var line2Box1 = document.createElement("div");
line2Box1.setAttribute("class", "ball2");
line2Box1.setAttribute("id", "7");
line2Box1.setAttribute("onClick", "choose('7')");

var line2Box2 = document.createElement("div");
line2Box2.setAttribute("class", "ball2");
line2Box2.setAttribute("id", "8");
line2Box2.setAttribute("onClick", "choose('8')");

var line2Box3 = document.createElement("div");
line2Box3.setAttribute("class", "ball2");
line2Box3.setAttribute("id", "9");
line2Box3.setAttribute("onClick", "choose('9')");

var line2Box4 = document.createElement("div");
line2Box4.setAttribute("class", "ball2");
line2Box4.setAttribute("id", "10");
line2Box4.setAttribute("onClick", "choose('10')");

var line2Box5 = document.createElement("div");
line2Box5.setAttribute("class", "ball2");
line2Box5.setAttribute("id", "11");
line2Box5.setAttribute("onClick", "choose('11')");

var line2Box6 = document.createElement("div");
line2Box6.setAttribute("class", "ball2");
line2Box6.setAttribute("id", "12");
line2Box6.setAttribute("onClick", "choose('12')");

line2.append(line2Box1);
line2.append(line2Box2);
line2.append(line2Box3);
line2.append(line2Box4);
line2.append(line2Box5);
line2.append(line2Box6);

// Line3
var line3 = document.createElement("div");
line3.setAttribute("class", "line3");
midBox.append(line3);
// Filling Line3.
var line3Box1 = document.createElement("div");
line3Box1.setAttribute("class", "ball3");
line3Box1.setAttribute("id", "13");
line3Box1.setAttribute("onClick", "choose('13')");

var line3Box2 = document.createElement("div");
line3Box2.setAttribute("class", "ball3");
line3Box2.setAttribute("id", "14");
line3Box2.setAttribute("onClick", "choose('14')");

var line3Box3 = document.createElement("div");
line3Box3.setAttribute("class", "ball3");
line3Box3.setAttribute("id", "15");
line3Box3.setAttribute("onClick", "choose('15')");

var line3Box4 = document.createElement("div");
line3Box4.setAttribute("class", "ball3");
line3Box4.setAttribute("id", "16");
line3Box4.setAttribute("onClick", "choose('16')");

var line3Box5 = document.createElement("div");
line3Box5.setAttribute("class", "ball3");
line3Box5.setAttribute("id", "17");
line3Box5.setAttribute("onClick", "choose('17')");

var line3Box6 = document.createElement("div");
line3Box6.setAttribute("class", "ball3");
line3Box6.setAttribute("id", "18");
line3Box6.setAttribute("onClick", "choose('18')");

line3.append(line3Box1);
line3.append(line3Box2);
line3.append(line3Box3);
line3.append(line3Box4);
line3.append(line3Box5);
line3.append(line3Box6);

// Line4
var line4 = document.createElement("div");
line4.setAttribute("class", "line4");
midBox.append(line4);
// Filling Line4.
var line4Box1 = document.createElement("div");
line4Box1.setAttribute("class", "ball3");
line4Box1.setAttribute("id", "19");
line4Box1.setAttribute("onClick", "choose('19')");

var line4Box2 = document.createElement("div");
line4Box2.setAttribute("class", "ball3");
line4Box2.setAttribute("id", "20");
line4Box2.setAttribute("onClick", "choose('20')");

var line4Box3 = document.createElement("div");
line4Box3.setAttribute("class", "ball3");
line4Box3.setAttribute("id", "21");
line4Box3.setAttribute("onClick", "choose('21')");

var line4Box4 = document.createElement("div");
line4Box4.setAttribute("class", "ball3");
line4Box4.setAttribute("id", "22");
line4Box4.setAttribute("onClick", "choose('22')");

var line4Box5 = document.createElement("div");
line4Box5.setAttribute("class", "ball3");
line4Box5.setAttribute("id", "23");
line4Box5.setAttribute("onClick", "choose('23')");

var line4Box6 = document.createElement("div");
line4Box6.setAttribute("class", "ball3");
line4Box6.setAttribute("id", "24");
line4Box6.setAttribute("onClick", "choose('24')");

line4.append(line4Box1);
line4.append(line4Box2);
line4.append(line4Box3);
line4.append(line4Box4);
line4.append(line4Box5);
line4.append(line4Box6);


// Line5
var line5 = document.createElement("div");
line5.setAttribute("class", "line5");
midBox.append(line5);
// Filling Line5.
var line5Box1 = document.createElement("div");
line5Box1.setAttribute("class", "ball4");
line5Box1.setAttribute("id", "25");
line5Box1.setAttribute("onClick", "choose('25')");

var line5Box2 = document.createElement("div");
line5Box2.setAttribute("class", "ball4");
line5Box2.setAttribute("id", "26");
line5Box2.setAttribute("onClick", "choose('26')");

var line5Box3 = document.createElement("div");
line5Box3.setAttribute("class", "ball4");
line5Box3.setAttribute("id", "27");
line5Box3.setAttribute("onClick", "choose('27')");

var line5Box4 = document.createElement("div");
line5Box4.setAttribute("class", "ball4");
line5Box4.setAttribute("id", "28");
line5Box4.setAttribute("onClick", "choose('28')");

var line5Box5 = document.createElement("div");
line5Box5.setAttribute("class", "ball4");
line5Box5.setAttribute("id", "29");
line5Box5.setAttribute("onClick", "choose('29')");

var line5Box6 = document.createElement("div");
line5Box6.setAttribute("class", "ball4");
line5Box6.setAttribute("id", "30");
line5Box6.setAttribute("onClick", "choose('30')");

line5.append(line5Box1);
line5.append(line5Box2);
line5.append(line5Box3);
line5.append(line5Box4);
line5.append(line5Box5);
line5.append(line5Box6);

// Creating Right Box.
var rightBox = document.createElement("div");
rightBox.setAttribute("class", "right");
container.append(rightBox);
// Filling Right Box.
var rightBoxHeading = document.createElement("h2");
rightBoxHeading.innerHTML = "Your Score: ";
rightBox.append(rightBoxHeading);
var rightBoxParagraph = document.createElement("p");
rightBoxParagraph.setAttribute("id", "score");
rightBox.append(rightBoxParagraph);





var colours = ["red", "blue", "green", "orange", "yellow", "brown", "indigo"];
for (var i = 1; i < 31; i++) {
    var randomNumber = Math.round(Math.random() * 6);
    var randomColour = colours[randomNumber];
    document.getElementById(`${i}`).style.backgroundColor = randomColour;
}
function randomColourGenerating() {
    var randomColourPicker = Math.round(Math.random() * 6);
    window.randomColourPicker2 = colours[randomColourPicker];
    document.getElementById("colour").style.backgroundColor = window.randomColourPicker2;
}
randomColourGenerating();
var userScore = 0;
document.getElementById("score").innerText = userScore;
function choose(args) {
    if(args === "1"){
        if(document.getElementById("1").style.backgroundColor === randomColourPicker2) {
            document.getElementById("1").style.visibility = "hidden";
            userScore = userScore + 1;
            document.getElementById("score").innerText = userScore;
            randomColourGenerating();
            if(userScore === 30) {
                document.querySelector(".right").style.display = "none";
                document.querySelector(".left").style.display = "none";
                document.getElementById("main").innerText = "Congratulations!";
            }
        }
        else{
            document.getElementById("1").style.visibility = "visible";
        }
    }
    if(args === "2"){
        if(document.getElementById("2").style.backgroundColor === randomColourPicker2) {
            document.getElementById("2").style.visibility = "hidden";
            userScore = userScore + 1;
            document.getElementById("score").innerText = userScore;
            randomColourGenerating();
            if(userScore === 30) {
                document.querySelector(".right").style.display = "none";
                document.querySelector(".left").style.display = "none";
                document.getElementById("main").innerText = "Congratulations!";
            }
        }
        else{
            document.getElementById("2").style.visibility = "visible";
        }
    }
    if(args === "3"){
        if(document.getElementById("3").style.backgroundColor === randomColourPicker2) {
            document.getElementById("3").style.visibility = "hidden";
            userScore = userScore + 1;
            document.getElementById("score").innerText = userScore;
            randomColourGenerating();
            if(userScore === 30) {
                document.querySelector(".right").style.display = "none";
                document.querySelector(".left").style.display = "none";
                document.getElementById("main").innerText = "Congratulations!";
            }
        }
        else{
            document.getElementById("3").style.visibility = "visible";
        }
    }
    if(args === "4"){
        if(document.getElementById("4").style.backgroundColor === randomColourPicker2) {
            document.getElementById("4").style.visibility = "hidden";
            userScore = userScore + 1;
            document.getElementById("score").innerText = userScore;
            randomColourGenerating();
            if(userScore === 30) {
                document.querySelector(".right").style.display = "none";
                document.querySelector(".left").style.display = "none";
                document.getElementById("main").innerText = "Congratulations!";
            }
        }
        else{
            document.getElementById("4").style.visibility = "visible";
        }
    }
    if(args === "5"){
        if(document.getElementById("5").style.backgroundColor === randomColourPicker2) {
            document.getElementById("5").style.visibility = "hidden";
            userScore = userScore + 1;
            document.getElementById("score").innerText = userScore;
            randomColourGenerating();
            if(userScore === 30) {
                document.querySelector(".right").style.display = "none";
                document.querySelector(".left").style.display = "none";
                document.getElementById("main").innerText = "Congratulations!";
            }
        }
        else{
            document.getElementById("5").style.visibility = "visible";
        }
    }
    if(args === "6"){
        if(document.getElementById("6").style.backgroundColor === randomColourPicker2) {
            document.getElementById("6").style.visibility = "hidden";
            userScore = userScore + 1;
            document.getElementById("score").innerText = userScore;
            randomColourGenerating();
            if(userScore === 30) {
                document.querySelector(".right").style.display = "none";
                document.querySelector(".left").style.display = "none";
                document.getElementById("main").innerText = "Congratulations!";
            }
        }
        else{
            document.getElementById("6").style.visibility = "visible";
        }
    }
    if(args === "7"){
        if(document.getElementById("7").style.backgroundColor === randomColourPicker2) {
            document.getElementById("7").style.visibility = "hidden";
            userScore = userScore + 1;
            document.getElementById("score").innerText = userScore;
            randomColourGenerating();
            if(userScore === 30) {
                document.querySelector(".right").style.display = "none";
                document.querySelector(".left").style.display = "none";
                document.getElementById("main").innerText = "Congratulations!";
            }
        }
        else{
            document.getElementById("7").style.visibility = "visible";
        }
    }
    if(args === "8"){
        if(document.getElementById("8").style.backgroundColor === randomColourPicker2) {
            document.getElementById("8").style.visibility = "hidden";
            userScore = userScore + 1;
            document.getElementById("score").innerText = userScore;
            randomColourGenerating();
            if(userScore === 30) {
                document.querySelector(".right").style.display = "none";
                document.querySelector(".left").style.display = "none";
                document.getElementById("main").innerText = "Congratulations!";
            }
        }
        else{
            document.getElementById("8").style.visibility = "visible";
        }
    }
    if(args === "9"){
        if(document.getElementById("9").style.backgroundColor === randomColourPicker2) {
            document.getElementById("9").style.visibility = "hidden";
            userScore = userScore + 1;
            document.getElementById("score").innerText = userScore;
            randomColourGenerating();
            if(userScore === 30) {
                document.querySelector(".right").style.display = "none";
                document.querySelector(".left").style.display = "none";
                document.getElementById("main").innerText = "Congratulations!";
            }
        }
        else{
            document.getElementById("9").style.visibility = "visible";
        }
    }
    if(args === "10"){
        if(document.getElementById("10").style.backgroundColor === randomColourPicker2) {
            document.getElementById("10").style.visibility = "hidden";
            userScore = userScore + 1;
            document.getElementById("score").innerText = userScore;
            randomColourGenerating();
            if(userScore === 30) {
                document.querySelector(".right").style.display = "none";
                document.querySelector(".left").style.display = "none";
                document.getElementById("main").innerText = "Congratulations!";
            }
        }
        else{
            document.getElementById("10").style.visibility = "visible";
        }
    }
    if(args === "11"){
        if(document.getElementById("11").style.backgroundColor === randomColourPicker2) {
            document.getElementById("11").style.visibility = "hidden";
            userScore = userScore + 1;
            document.getElementById("score").innerText = userScore;
            randomColourGenerating();
            if(userScore === 30) {
                document.querySelector(".right").style.display = "none";
                document.querySelector(".left").style.display = "none";
                document.getElementById("main").innerText = "Congratulations!";
            }
        }
        else{
            document.getElementById("11").style.visibility = "visible";
        }
    }
    if(args === "12"){
        if(document.getElementById("12").style.backgroundColor === randomColourPicker2) {
            document.getElementById("12").style.visibility = "hidden";
            userScore = userScore + 1;
            document.getElementById("score").innerText = userScore;
            randomColourGenerating();
            if(userScore === 30) {
                document.querySelector(".right").style.display = "none";
                document.querySelector(".left").style.display = "none";
                document.getElementById("main").innerText = "Congratulations!";
            }
        }
        else{
            document.getElementById("12").style.visibility = "visible";
        }
    }
    if(args === "13"){
        if(document.getElementById("13").style.backgroundColor === randomColourPicker2) {
            document.getElementById("13").style.visibility = "hidden";
            userScore = userScore + 1;
            document.getElementById("score").innerText = userScore;
            randomColourGenerating();
            if(userScore === 30) {
                document.querySelector(".right").style.display = "none";
                document.querySelector(".left").style.display = "none";
                document.getElementById("main").innerText = "Congratulations!";
            }
        }
        else{
            document.getElementById("13").style.visibility = "visible";
        }
    }
    if(args === "14"){
        if(document.getElementById("14").style.backgroundColor === randomColourPicker2) {
            document.getElementById("14").style.visibility = "hidden";
            userScore = userScore + 1;
            document.getElementById("score").innerText = userScore;
            randomColourGenerating();
            if(userScore === 30) {
                document.querySelector(".right").style.display = "none";
                document.querySelector(".left").style.display = "none";
                document.getElementById("main").innerText = "Congratulations!";
            }
        }
        else{
            document.getElementById("14").style.visibility = "visible";
        }
    }
    if(args === "15"){
        if(document.getElementById("15").style.backgroundColor === randomColourPicker2) {
            document.getElementById("15").style.visibility = "hidden";
            userScore = userScore + 1;
            document.getElementById("score").innerText = userScore;
            randomColourGenerating();
            if(userScore === 30) {
                document.querySelector(".right").style.display = "none";
                document.querySelector(".left").style.display = "none";
                document.getElementById("main").innerText = "Congratulations!";
            }
        }
        else{
            document.getElementById("15").style.visibility = "visible";
        }
    }
    if(args === "16"){
        console.log("hello");
        if(document.getElementById("16").style.backgroundColor === randomColourPicker2) {
            document.getElementById("16").style.visibility = "hidden";
            userScore = userScore + 1;
            document.getElementById("score").innerText = userScore;
            randomColourGenerating();
            if(userScore === 30) {
                document.querySelector(".right").style.display = "none";
                document.querySelector(".left").style.display = "none";
                document.getElementById("main").innerText = "Congratulations!";
            }
        }
        else{
            document.getElementById("16").style.visibility = "visible";
        }
    }
    if(args === "17"){
        if(document.getElementById("17").style.backgroundColor === randomColourPicker2) {
            document.getElementById("17").style.visibility = "hidden";
            userScore = userScore + 1;
            document.getElementById("score").innerText = userScore;
            randomColourGenerating();
            if(userScore === 30) {
                document.querySelector(".right").style.display = "none";
                document.querySelector(".left").style.display = "none";
                document.getElementById("main").innerText = "Congratulations!";
            }
        }
        else{
            document.getElementById("17").style.visibility = "visible";
        }
    }
    if(args === "18"){
        if(document.getElementById("18").style.backgroundColor === randomColourPicker2) {
            document.getElementById("18").style.visibility = "hidden";
            userScore = userScore + 1;
            document.getElementById("score").innerText = userScore;
            randomColourGenerating();
            if(userScore === 30) {
                document.querySelector(".right").style.display = "none";
                document.querySelector(".left").style.display = "none";
                document.getElementById("main").innerText = "Congratulations!";
            }
        }
        else{
            document.getElementById("18").style.visibility = "visible";
        }
    }
    if(args === "19"){
        if(document.getElementById("19").style.backgroundColor === randomColourPicker2) {
            document.getElementById("19").style.visibility = "hidden";
            userScore = userScore + 1;
            document.getElementById("score").innerText = userScore;
            randomColourGenerating();
            if(userScore === 30) {
                document.querySelector(".right").style.display = "none";
                document.querySelector(".left").style.display = "none";
                document.getElementById("main").innerText = "Congratulations!";
            }
        }
        else{
            document.getElementById("19").style.visibility = "visible";
        }
    }
    if(args === "20"){
        if(document.getElementById("20").style.backgroundColor === randomColourPicker2) {
            document.getElementById("20").style.visibility = "hidden";
            userScore = userScore + 1;
            document.getElementById("score").innerText = userScore;
            randomColourGenerating();
            if(userScore === 30) {
                document.querySelector(".right").style.display = "none";
                document.querySelector(".left").style.display = "none";
                document.getElementById("main").innerText = "Congratulations!";
            }
        }
        else{
            document.getElementById("20").style.visibility = "visible";
        }
    }
    if(args === "21"){
        if(document.getElementById("21").style.backgroundColor === randomColourPicker2) {
            document.getElementById("21").style.visibility = "hidden";
            userScore = userScore + 1;
            document.getElementById("score").innerText = userScore;
            randomColourGenerating();
            if(userScore === 30) {
                document.querySelector(".right").style.display = "none";
                document.querySelector(".left").style.display = "none";
                document.getElementById("main").innerText = "Congratulations!";
            }
        }
        else{
            document.getElementById("21").style.visibility = "visible";
        }
    }
    if(args === "22"){
        if(document.getElementById("22").style.backgroundColor === randomColourPicker2) {
            document.getElementById("22").style.visibility = "hidden";
            userScore = userScore + 1;
            document.getElementById("score").innerText = userScore;
            randomColourGenerating();
            if(userScore === 30) {
                document.querySelector(".right").style.display = "none";
                document.querySelector(".left").style.display = "none";
                document.getElementById("main").innerText = "Congratulations!";
            }
        }
        else{
            document.getElementById("22").style.visibility = "visible";
        }
    }if(args === "23"){
        if(document.getElementById("23").style.backgroundColor === randomColourPicker2) {
            document.getElementById("23").style.visibility = "hidden";
            userScore = userScore + 1;
            document.getElementById("score").innerText = userScore;
            randomColourGenerating();
            if(userScore === 30) {
                document.querySelector(".right").style.display = "none";
                document.querySelector(".left").style.display = "none";
                document.getElementById("main").innerText = "Congratulations!";
            }
        }
        else{
            document.getElementById("23").style.visibility = "visible";
        }
    }
    if(args === "24"){
        if(document.getElementById("24").style.backgroundColor === randomColourPicker2) {
            document.getElementById("24").style.visibility = "hidden";
            userScore = userScore + 1;
            document.getElementById("score").innerText = userScore;
            randomColourGenerating();
            if(userScore === 30) {
                document.querySelector(".right").style.display = "none";
                document.querySelector(".left").style.display = "none";
                document.getElementById("main").innerText = "Congratulations!";
            }
        }
        else{
            document.getElementById("24").style.visibility = "visible";
        }
    }
    if(args === "25"){
        if(document.getElementById("25").style.backgroundColor === randomColourPicker2) {
            document.getElementById("25").style.visibility = "hidden";
            userScore = userScore + 1;
            document.getElementById("score").innerText = userScore;
            randomColourGenerating();
            if(userScore === 30) {
                document.querySelector(".right").style.display = "none";
                document.querySelector(".left").style.display = "none";
                document.getElementById("main").innerText = "Congratulations!";
            }
        }
        else{
            document.getElementById("25").style.visibility = "visible";
        }
    }
    if(args === "26"){
        if(document.getElementById("26").style.backgroundColor === randomColourPicker2) {
            document.getElementById("26").style.visibility = "hidden";
            userScore = userScore + 1;
            document.getElementById("score").innerText = userScore;
            randomColourGenerating();
            if(userScore === 30) {
                document.querySelector(".right").style.display = "none";
                document.querySelector(".left").style.display = "none";
                document.getElementById("main").innerText = "Congratulations!";
            }
        }
        else{
            document.getElementById("26").style.visibility = "visible";
        }
    }
    if(args === "27"){
        if(document.getElementById("27").style.backgroundColor === randomColourPicker2) {
            document.getElementById("27").style.visibility = "hidden";
            userScore = userScore + 1;
            document.getElementById("score").innerText = userScore;
            randomColourGenerating();
            if(userScore === 30) {
                document.querySelector(".right").style.display = "none";
                document.querySelector(".left").style.display = "none";
                document.getElementById("main").innerText = "Congratulations!";
            }
        }
        else{
            document.getElementById("27").style.visibility = "visible";
        }
    }
    if(args === "28"){
        if(document.getElementById("28").style.backgroundColor === randomColourPicker2) {
            document.getElementById("28").style.visibility = "hidden";
            userScore = userScore + 1;
            document.getElementById("score").innerText = userScore;
            randomColourGenerating();
            if(userScore === 30) {
                document.querySelector(".right").style.display = "none";
                document.querySelector(".left").style.display = "none";
                document.getElementById("main").innerText = "Congratulations!";
            }
        }
        else{
            document.getElementById("28").style.visibility = "visible";
        }
    }
    if(args === "29"){
        if(document.getElementById("29").style.backgroundColor === randomColourPicker2) {
            document.getElementById("29").style.visibility = "hidden";
            userScore = userScore + 1;
            document.getElementById("score").innerText = userScore;
            randomColourGenerating();
            if(userScore === 30) {
                document.querySelector(".right").style.display = "none";
                document.querySelector(".left").style.display = "none";
                document.getElementById("main").innerText = "Congratulations!";
            }
        }
        else{
            document.getElementById("29").style.visibility = "visible";
        }
    }
    if(args === "30"){
        if(document.getElementById("30").style.backgroundColor === randomColourPicker2) {
            document.getElementById("30").style.visibility = "hidden";
            userScore = userScore + 1;
            document.getElementById("score").innerText = userScore;
            if(userScore === 30) {
                document.querySelector(".right").style.display = "none";
                document.querySelector(".left").style.display = "none";
                document.getElementById("main").innerText = "Congratulations!";
            }
            randomColourGenerating();
        }
        else{
            document.getElementById("30").style.visibility = "visible";
        }
    }
}
function change() {
    randomColourGenerating();
}