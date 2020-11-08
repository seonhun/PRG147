const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer = [0,0,0,0];
var interval; //for setInterval function and passing value to it so that the time stops. 
var timerRunning = false; //prevent the timer from running again when erasing text without starting a new interval



// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {
    if (time <= 9) { //makes sure a zero is added if it is less than 10; a helper function
        time = "0" + time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]); //" + ":" + leadingZero(timer[2])" taken out
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60); //used to carry over each slot; minutes defined
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60)); //second part makes sure it returns to 0 every time it carries over
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000)); //commented so that only minutes and seconds will show
}

// Match the text entered with the provided text on the page:
function spellCheck() { //test for accuracy (red of wrong and green if all correct); must also have an option of yellow for correct but not complete
    let textEntered = testArea.value;
    let originTextMatch = originText.substring(0,textEntered.length); //return the amount returned (length of text entered)
    neutral();
    // neutral.style.display = "block";
    // smiling.style.display = "none";
    // questionable.style.display = "none";
    // tiresome.style.display = "none";

    if (textEntered == originText) {
        clearInterval(interval);
        testWrapper.style.borderColor = "#429890"; //exactly matching text; supercedes in priority compared to the incomplete but correct condition
        if (Math.floor(timer[3]) < 500) {
            happy();
            alert("Congradulations on your mediocre typing speed!");
        }
        else {
            annoyed();
            alert("Even monkeys can do better than you!");
        }
    } else {
        if (textEntered == originTextMatch) {
            neutral();
            testWrapper.style.borderColor = "#65CCf3"; //matching text
        } else {
            wrong();
            testWrapper.style.borderColor = "#E95D0F"; //wrong text
        }
    }

}

function neutral() {
    document.querySelectorAll("img").forEach(el =>el.remove());
    const img = new Image();
    img.src = "Neutral.png";
    document.querySelector(".emoji").appendChild(img);
}

function happy() {
    document.querySelectorAll("img").forEach(el =>el.remove());
    const img = new Image();
    img.src = "Happy.png";
    document.querySelector(".emoji").appendChild(img);
}

function annoyed() {
    document.querySelectorAll("img").forEach(el =>el.remove());
    const img = new Image();
    img.src = "Annoyed.png";
    document.querySelector(".emoji").appendChild(img);
}

function wrong() {
    document.querySelectorAll("img").forEach(el =>el.remove());
    const img = new Image();
    img.src = "Wrong.png";
    document.querySelector(".emoji").appendChild(img);
}

// Start the timer:
function start() {
    let textEnterdLength = testArea.value.length;
    if (textEnterdLength === 0 && !timerRunning) {//timer will not run if timer was already running
        timerRunning = true;
        interval = setInterval(runTimer, 10);
    }
    console.log(textEnterdLength);
    
}

// Reset everything:
function reset() { //needs to reset every single state
    clearInterval(interval); //clear interval in start function
    interval = null; //prevent running multiple instances of interval
    timer = [0,0,0,0];
    timerRunning = false; //reset timerunning state

    testArea.value = ""; //must clear the test area
    theTimer.innerHTML = "00:00"; //must reset timer before starting it
    testWrapper.style.borderColor = "grey"; //must reset border
}

// Event listeners for keyboard input and the reset
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false); //detect after key has been pressed
resetButton.addEventListener("click", reset, false); //resets using the resetbutton when it is clicked






