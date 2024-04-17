//lesson1 slides
var currentSlide = 0;
var slides = document.getElementsByClassName("slide");
var nextButton = document.getElementById("nextButton");

function nextSlide() {
    if (currentSlide === slides.length - 1) {
        // If all slides have been viewed, remove the slides and show different content
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        // Show different content here
        document.getElementById("differentContent").style.display = "block";
        // Remove border around slide content
        document.getElementById("slideShow").style.border = "none";
        // Change button text to something else or hide it
        nextButton.style.display = "none"; // For example, hide the button
    } else {
        // If there are more slides to view, show the next slide
        slides[currentSlide].style.display = "none";
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.display = "block";

        if (currentSlide === slides.length - 1) {
            nextButton.innerText = "Next";
        }
    }
}

function nextDifferentContent() {
    // Hide different content button
    differentContentButton.style.display = "none";
    document.getElementById("differentContent").style.display = "none";
    // Show content #3
    document.getElementById("content3").style.display = "block";
    document.getElementById("boatContent1").style.display = "none";
    document.getElementById("boatContent2").style.display = "none";
    document.getElementById("boatContent3").style.display = "none";
    document.getElementById("boatContent4").style.display = "none";
    document.getElementById("boatContent5").style.display = "none";
    document.getElementById("boatContent6").style.display = "none";
}

var button1Clicked = false;
var button2Clicked = false;
var button3Clicked = false;

function action1() {
    button1Clicked= true;
    document.getElementById("buttonsContent3").style.display = "none";
    document.getElementById("button1").style.display = "block";
    document.getElementById("returnButton").style.display = "block";
}

function action2() {
    button2Clicked = true;
    document.getElementById("buttonsContent3").style.display = "none";
    document.getElementById("button2").style.display = "block";
    document.getElementById("returnButton").style.display = "block";
}

function action3() {
    button3Clicked = true;
    document.getElementById("buttonsContent3").style.display = "none";
    document.getElementById("button3").style.display = "block";
    document.getElementById("returnButton").style.display = "block";
}

function returnToAbbr() {
    document.getElementById("buttonsContent3").style.display = "block";
    document.getElementById("returnButton").style.display = "none";
    document.getElementById("button1").style.display = "none";
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
    checkButtons();
}

function checkButtons() {
    if (button1Clicked && button2Clicked && button3Clicked) {
        document.getElementById("differentContentButton").style.display = "block";
    }
}


function returnToButtons(buttonId) {
    document.getElementById(buttonId).style.display = "none";
    document.getElementById("buttonsContent3").style.display = "block";
}
var boatButton1Clicked = false;
var boatButton2Clicked = false;
var boatButton3Clicked = false;
var boatButton4Clicked = false;
var boatButton5Clicked = false;
var boatButton6Clicked = false;

function actionBoat1() {
    // Show boat content 1 and hide others
    hideAllBoatContent()
    document.getElementById("single").style.display = "block";
    document.getElementById("returnButton").style.display = "block";
    hideAllBoatButtons()
    hideAllBoatImages()
    boatButton1Clicked = true;
    checkNextLessonButton();
}

function actionBoat2() {
    hideAllBoatContent()
    document.getElementById("double").style.display = "block";
    document.getElementById("returnButton").style.display = "block";
    hideAllBoatButtons()
    hideAllBoatImages()
    boatButton2Clicked = true;
    checkNextLessonButton();
}

function actionBoat3() {
    // Show boat content 1 and hide others
    hideAllBoatContent()
    document.getElementById("four").style.display = "block";
    document.getElementById("returnButton").style.display = "block";
    hideAllBoatButtons()
    hideAllBoatImages()
    boatButton3Clicked = true;
    checkNextLessonButton();
}

function actionBoat4() {
    hideAllBoatContent()
    document.getElementById("pair").style.display = "block";
    document.getElementById("returnButton").style.display = "block";
    hideAllBoatButtons()
    hideAllBoatImages()
    boatButton4Clicked = true;
    checkNextLessonButton();
}

function actionBoat5() {
    hideAllBoatContent()
    document.getElementById("quad").style.display = "block";
    document.getElementById("returnButton").style.display = "block";
    hideAllBoatButtons()
    hideAllBoatImages()
    boatButton5Clicked = true;
    checkNextLessonButton();
}

function actionBoat6() {
    hideAllBoatContent()
    document.getElementById("eight").style.display = "block";
    document.getElementById("returnButton").style.display = "block";
    hideAllBoatButtons()
    hideAllBoatImages()
    boatButton6Clicked = true;
    checkNextLessonButton();
}

function returnToButtons() {
    // Hide all boat content and show boat buttons
    hideAllBoatContent()
    showAllBoatButtons()
    showAllBoatImages()
    document.getElementById("returnButton").style.display = "none";
}

function hideAllBoatButtons() {
    // Hide all boat buttons
    document.getElementById("boatButton1").style.display = "none";
    document.getElementById("boatButton2").style.display = "none";
    document.getElementById("boatButton3").style.display = "none";
    document.getElementById("boatButton4").style.display = "none";
    document.getElementById("boatButton5").style.display = "none";
    document.getElementById("boatButton6").style.display = "none";
}
function hideAllBoatContent(){
    document.getElementById("single").style.display = "none";
    document.getElementById("double").style.display = "none";
    document.getElementById("pair").style.display = "none";
    document.getElementById("quad").style.display = "none";
    document.getElementById("four").style.display = "none";
    document.getElementById("eight").style.display = "none";

}

function hideAllBoatImages(){
    document.getElementById("boatImage1").style.display = "none";
    document.getElementById("boatImage2").style.display = "none";
    document.getElementById("boatImage3").style.display = "none";
    document.getElementById("boatImage4").style.display = "none";
    document.getElementById("boatImage5").style.display = "none";
    document.getElementById("boatImage6").style.display = "none";
}

function showAllBoatButtons() {
    // Hide all boat buttons
    document.getElementById("boatButton1").style.display = "block";
    document.getElementById("boatButton2").style.display = "block";
    document.getElementById("boatButton3").style.display = "block";
    document.getElementById("boatButton4").style.display = "block";
    document.getElementById("boatButton5").style.display = "block";
    document.getElementById("boatButton6").style.display = "block";
}

function showAllBoatImages(){
    document.getElementById("boatImage1").style.display = "block";
    document.getElementById("boatImage2").style.display = "block";
    document.getElementById("boatImage3").style.display = "block";
    document.getElementById("boatImage4").style.display = "block";
    document.getElementById("boatImage5").style.display = "block";
    document.getElementById("boatImage6").style.display = "block";
}

function checkNextLessonButton() {
    // Check if all boat buttons have been clicked
    if (boatButton1Clicked && boatButton2Clicked && boatButton3Clicked &&
        boatButton4Clicked && boatButton5Clicked && boatButton6Clicked) {
        document.getElementById("nextLessonButton").style.display = "block";
    } else {
        document.getElementById("nextLessonButton").style.display = "none";
    }
}

function nextLesson() {
    window.location.href = "/";
}

function showInfo(item) {
    var infoDiv = document.getElementById("info");
    var backButton = document.getElementById("backButton");

    backButton.style.display = "block";

    var buttons = document.getElementsByClassName("diagram_button");
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].innerText !== item) {
            buttons[i].style.display = "none";
        }
    }


    // Fetch the information from the server
    fetch('/info/' + item)
        .then(response => response.json())
        .then(data => {
            // Display the retrieved info in the infoDiv
            infoDiv.innerText = data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function back() {
    var infoDiv = document.getElementById("info");
    var backButton = document.getElementById("backButton");

    // Hide the "back" button
    backButton.style.display = "none";

    // Clear info
    infoDiv.innerHTML = "";

    // Show all buttons
    var buttons = document.getElementsByClassName("diagram_button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.display = "block";
    }
}

function next() {
    document.getElementById('diagram').style.display = 'none';
    document.getElementById('review').style.display = 'block';
}

function toggleDropdown() {
    var dropdown = document.getElementById("dropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

function selectCountry(country) {
    var countryButton = document.getElementById("country");
    countryButton.innerText = country;
    toggleDropdown(); // Hide dropdown after selection
}

function hideDropdown(event) {
    var dropdown = document.getElementById("dropdown");
    var countryButton = document.getElementById("country");
    if (!dropdown.contains(event.target) && event.target !== countryButton) {
        dropdown.style.display = "none";
    }
}


var selectedCountry = false;
var selectedBoat = false;

function toggleDropdown(id) {
    var dropdown = document.getElementById(id);
    dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
}

function selectOption(type, element) {
    var option = element.innerText;
    if (type === 'country') {
        selectedCountry = option;
        document.getElementById("countryButton").innerText = "Selected: " + option;
    } else if (type === 'boat') {
        selectedBoat = option;
        document.getElementById("boatButton").innerText = "Selected: " + option;
    }
    if (selectedCountry && selectedBoat) {
        document.getElementById("playGameButton").style.display = "block";
    }
}

function navigateToQuiz() {
    window.location.href = "/quiz/1"; // Replace "/quiz/1" with the desired URL
}
/*
function selectOption(optionId) {
    // Remove 'selected' class from all options
    var options = document.querySelectorAll('.option');
    options.forEach(function (option) {
        option.classList.remove('selected');
    });

    // Add 'selected' class to the clicked option
    var selectedOption = document.getElementById(optionId);
    selectedOption.classList.add('selected');

    // Show the submit button
    var submitBtn = document.getElementById('submitBtn');
    submitBtn.style.display = 'block';
}

*/
// Function to handle submitting the answer
function submitAnswer() {
    var nextBtn = document.getElementById('nextBtn');
    nextBtn.style.display = 'block';
}

function submitMatching() {
    nextBtn.style.display = 'block';
}

// Function to navigate to the next question
function goToQuestion2() {
    window.location.href = "/quiz/2";
}
function goToQuestion3() {
    window.location.href = "/quiz/3";
}
function goToQuestion4() {
    window.location.href = "/quiz/4";
}
function goToResults() {
    var score = 10; // Assuming this is where you get the score
    score = parseInt(score); // Convert score to integer
    window.location.href = "/quiz_results?score=" + score;
}