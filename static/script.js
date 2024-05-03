var points = 0
function incrementCounter(newPoints) {
    // Check if the 'pointsCounter' key exists in localStorage
    if (localStorage.getItem('pointsCounter') === null) {
        // If it doesn't exist, set it to 0
        localStorage.setItem('pointsCounter', 0);
    }

    // Get the current value, increment it, and update localStorage
    let currentCount = parseInt(localStorage.getItem('pointsCounter'));
    console.log(currentCount);
    console.log(newPoints);
    currentCount += newPoints;
    console.log("New:" + currentCount);


    localStorage.setItem('pointsCounter', currentCount);

    return currentCount;
}

document.addEventListener("DOMContentLoaded", function () {
    var lesson1 = document.querySelector(".lesson1");
    var lesson2 = document.querySelector(".lesson2");
    var quiz = document.querySelector(".quiz");

    if (!lesson2 || !quiz) {
        console.error("Lesson 2 or Quiz element not found. Please check class names.");
        return;
    }

    // Get the first element with the class name
    var lesson1Button = document.querySelector(".lesson1");
    var lesson2Button = document.querySelector(".lesson2");
    var quizButton = document.querySelector(".quiz");

    if (!lesson2Button || !quizButton) {
        console.error("Lesson 2 or Quiz button not found.");
        return;
    }

    var currentPath = window.location.pathname;

    if (currentPath === "/") {
        var isLesson2Unlocked = localStorage.getItem("lesson2Unlocked") === "true";

        if (isLesson2Unlocked) {
            lesson2Button.disabled = false; // Enable button
            lesson2.classList.remove("greyed");
            lesson1.classList.add("clicked");
        } else {
            lesson2Button.disabled = true; // Disable button
            lesson2.classList.add("greyed");
        }

        var isQuizUnlocked = localStorage.getItem("quizUnlocked") === "true";

        if (isQuizUnlocked) {
            quizButton.disabled = false; // Enable button
            quiz.classList.remove("greyed");
            lesson2.classList.add("clicked");
        } else {
            quizButton.disabled = true; // Disable button
            quiz.classList.add("greyed");
            quiz.classList.remove("")
        }
    }

    var homeButton = document.getElementById("homeButton");

    if (homeButton) {
        homeButton.addEventListener("click", function () {
            localStorage.setItem("lesson2Unlocked", "false");
            localStorage.setItem("quizUnlocked", "false");
            console.log("Resetting to only Lesson 1 being unlocked.");
        });
    }
});


//lesson1 slides
var currentSlide = 0;
var slides = document.getElementsByClassName("slide");
var nextButton = document.getElementById("nextButton");

function nextSlide() {
    if (currentSlide === slides.length - 1) {
        // If all slides have been viewed, remove the slides and show different content
        for (var i = 0; i < slides.length; i++) {
            lesson1Slides.style.display = "none";
        }
        // Show different content here
        document.getElementById("lesson1abbr").style.display = "block";
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
    abbrButtons.style.display = "none";
    document.getElementById("lesson1abbr").style.display = "none";
    // Show content #3
    document.getElementById("content3").style.display = "block";
    document.getElementById("boatContent1").style.display = "none";
    document.getElementById("boatContent2").style.display = "none";
    document.getElementById("boatContent3").style.display = "none";
    document.getElementById("boatContent4").style.display = "none";
    document.getElementById("boatContent5").style.display = "none";
    document.getElementById("boatContent6").style.display = "none";
}

var abbrXClicked = false;
var abbrPlusClicked = false;
var abbrMinusClicked = false;

function action1() {
    abbrXClicked = true;
    document.getElementById("abbrXButton").classList.add("clicked");
    document.getElementById("abbrButtons").style.display = "none";
    document.getElementById("abbrX").style.display = "block";
    document.getElementById("returnButton").style.display = "block";
}

function action2() {
    abbrPlusClicked = true;
    document.getElementById("abbrPlusButton").classList.add("clicked");
    document.getElementById("abbrButtons").style.display = "none";
    document.getElementById("abbrPlus").style.display = "block";
    document.getElementById("returnButton").style.display = "block";
}

function action3() {
    abbrMinusClicked = true;
    document.getElementById("abbrMinusButton").classList.add("clicked");
    document.getElementById("abbrButtons").style.display = "none";
    document.getElementById("abbrMinus").style.display = "block";
    document.getElementById("returnButton").style.display = "block";
}

function returnToAbbr() {
    document.getElementById("abbrButtons").style.display = "block";
    document.getElementById("returnButton").style.display = "none";
    document.getElementById("abbrX").style.display = "none";
    document.getElementById("abbrPlus").style.display = "none";
    document.getElementById("abbrMinus").style.display = "none";
    checkButtons();
}

function checkButtons() {

    if (abbrXClicked && abbrPlusClicked && abbrMinusClicked) {
        document.getElementById("differentContentButton").style.display = "block";
    }
}

function returnToButtons(buttonId) {
    document.getElementById(buttonId).style.display = "none";
    document.getElementById("abbrButtons").style.display = "block";
    if (abbrXClicked) {
        console.log("x clicked")
    }
    if (abbrPlusClicked) {
        console.log("plus clicked")
    }
    if (abbrMinusClicked) {
        console.log("minus clicked")
    }
}
var boatButton1Clicked = false;
var boatButton2Clicked = false;
var boatButton3Clicked = false;
var boatButton4Clicked = false;
var boatButton5Clicked = false;
var boatButton6Clicked = false;

var greenButtonsClicked = 0;

function actionBoat1() {
    // Show boat content 1 and hide others
    hideAllBoatContent()
    document.getElementById("boat_directions").style.display = "none";
    document.getElementById("single").style.display = "block";
    hideAllBoatButtons()
    hideAllBoatImages()
    boatButton1Clicked = true;
    greenButtonsClicked = 0;
    checkNextLessonButton();

}

function actionBoat2() {
    hideAllBoatContent()
    document.getElementById("double").style.display = "block";
    hideAllBoatButtons()
    hideAllBoatImages()
    boatButton2Clicked = true;
    greenButtonsClicked = 0;
    checkNextLessonButton();
}

function actionBoat3() {
    // Show boat content 1 and hide others
    hideAllBoatContent()
    document.getElementById("four").style.display = "block";
    document.getElementById("returnBoatButton").style.display = "block";
    hideAllBoatButtons()
    hideAllBoatImages()
    boatButton3Clicked = true;
    greenButtonsClicked = 0;
    checkNextLessonButton();
}

function actionBoat4() {
    hideAllBoatContent()
    document.getElementById("pair").style.display = "block";
    document.getElementById("returnBoatButton").style.display = "block";
    hideAllBoatButtons()
    hideAllBoatImages()
    boatButton4Clicked = true;
    greenButtonsClicked = 0;
    checkNextLessonButton();
}

function actionBoat5() {
    hideAllBoatContent()
    document.getElementById("quad").style.display = "block";
    document.getElementById("returnBoatButton").style.display = "block";
    hideAllBoatButtons()
    hideAllBoatImages()
    boatButton5Clicked = true;
    greenButtonsClicked = 0;
    checkNextLessonButton();
}

function actionBoat6() {
    hideAllBoatContent()
    document.getElementById("eight").style.display = "block";
    document.getElementById("returnBoatButton").style.display = "block";
    hideAllBoatButtons()
    hideAllBoatImages()
    boatButton6Clicked = true;
    greenButtonsClicked = 0;
    checkNextLessonButton();
}

function returnToBoatButtons() {
    // Hide all boat content and show boat buttons
    hideAllBoatContent()
    showAllBoatButtons()
    showAllBoatImages()
    document.getElementById("returnBoatButton").style.display = "none";
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
function hideAllBoatContent() {
    document.getElementById("single").style.display = "none";
    document.getElementById("double").style.display = "none";
    document.getElementById("pair").style.display = "none";
    document.getElementById("quad").style.display = "none";
    document.getElementById("four").style.display = "none";
    document.getElementById("eight").style.display = "none";

}

function hideAllBoatImages() {
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

function showAllBoatImages() {
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
    if (boatButton1Clicked) {
        document.getElementById("boatButton1").classList.add("clicked");
    }
    if (boatButton2Clicked) {
        document.getElementById("boatButton2").classList.add("clicked");
    }
    if (boatButton3Clicked) {
        document.getElementById("boatButton3").classList.add("clicked");
    }
    if (boatButton4Clicked) {
        document.getElementById("boatButton4").classList.add("clicked");
    }
    if (boatButton5Clicked) {
        document.getElementById("boatButton5").classList.add("clicked");
    }
    if (boatButton6Clicked) {
        document.getElementById("boatButton6").classList.add("clicked");
    }
}

function checkAnswer(event) {
    // Get the button that was clicked
    const clickedButton = event.target; // The button that triggered the click event

    // Check if the clicked button has the 'correct' class
    const hasCorrectClass = clickedButton.classList.contains("correct"); // True if it has the 'correct' class

    if (hasCorrectClass) {
        // If the button has the 'correct' class, turn it green
        clickedButton.style.backgroundColor = "green";
        greenButtonsClicked++;
    } else {
        // If it doesn't, turn it red
        clickedButton.style.backgroundColor = "red";
    }
    if (greenButtonsClicked == 5) {
        document.getElementById("returnBoatButton").style.display = "block";
    }
}


function nextLesson() {
    var lesson2Link = localStorage.setItem('lesson2Unlocked', 'true'); // Store the unlock state
    window.location.href = "/";
}

function toQuiz() {
    var quizLink = localStorage.setItem('quizUnlocked', 'true'); // Store the unlock state
    window.location.href = "/";
}

var allButtonsClicked = false;
var clickedButtons = new Set();

function showInfo(item) {
    var infoDiv = document.getElementById("info");
    var backButton = document.getElementById("backButton");

    backButton.style.display = "block";


    var buttons = document.getElementsByClassName("diagram_button");

    clickedButtons.add(item);
    if (clickedButtons.size === buttons.length) {
        allButtonsClicked = true;
    }

    for (var i = 0; i < buttons.length; i++) {
        // Add the 'clicked' class to the clicked button, remove from others
        if (buttons[i].innerText === item) {
            buttons[i].classList.add("clicked");
        } else {
            buttons[i].style.display = "none"; // Hide other buttons
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

    var newImageSrc = {
        'Stern': '/static/images/stern_diagram_blank.png',
        'Rigger': '/static/images/rigger_diagram_blank.png',
        'Bow': '/static/images/bow_diagram_blank.png',
        'Oarlock': '/static/images/oarlock_diagram_blank.png',
        'Footstretcher': '/static/images/footstretcher_diagram_blank.png',
        'Seat': '/static/images/seat_diagram_blank.png',
        'Deck': '/static/images/deck_diagram_blank.png',
    };
    var diagramImage = document.querySelector(".diagram_image"); // Make sure this matches your <img> class

    diagramImage.src = newImageSrc[item] || diagramImage.src;
    infoDiv.style.display = "block";


}

function back() {
    var infoDiv = document.getElementById("info");
    var backButton = document.getElementById("backButton");
    var nextButton = document.getElementById("diagram_next_button");

    var diagramImage = document.querySelector(".diagram_image"); // Get the diagram image
    diagramImage.src = "/static/images/single_diagram.jpeg"; // Set to the original image

    // Hide the "back" button
    backButton.style.display = "none";

    // Clear info
    infoDiv.innerHTML = "";
    infoDiv.style.display = "none";

    // Show all buttons
    var buttons = document.getElementsByClassName("diagram_button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.display = "block";
    }

    if (allButtonsClicked) {
        nextButton.style.display = "block"; // Show the "Next" button
    }

}
var currentDiagram = "";

// Transition to review (drag-and-drop) when 'Next' is clicked
function next() {
    var diagramDiv = document.getElementById('diagram');
    var reviewDiv = document.getElementById('review');
    var directionsDiv = document.getElementById('diagram_directions');

    diagramDiv.style.display = 'none';
    directionsDiv.style.display = 'none';
    reviewDiv.style.display = 'block';
}
function allowDrop(event) {
    event.preventDefault(); // Allow dropping on the drop zone
}

function drag(event) {
    if (window.location.pathname.includes("/learn/2")) {
        const elementId = event.target.id;
        event.dataTransfer.setData("text/plain", elementId); // Store the dragged element's ID
    } else if (window.location.pathname.includes("/quiz/1")) {
        event.dataTransfer.setData("text", event.target.getAttribute("data-id")); // Sets the dragged data
    } else {
        console.error("Drag not allowed on this page.");
    }
}

var wordBank = 7;

function drop(event) {
    if (window.location.pathname.includes("/learn/2")) {
        event.preventDefault();
        const draggedElementId = event.dataTransfer.getData("text/plain"); // Retrieve the ID
        const draggedElement = document.getElementById(draggedElementId); // Get the dragged element
        const dropZone = event.target; // The drop zone where it's dropped

        const expectedDropZoneId = "drop-" + draggedElement.textContent.toLowerCase(); // Expected drop zone ID

        if (dropZone.classList.contains("drop-zone")) {
            if (dropZone.id === expectedDropZoneId) {
                draggedElement.style.display = "none"; // Hide original word
                dropZone.textContent = draggedElement.textContent; // Replace content
                dropZone.style.borderColor = "green"; // Set border to green
                wordBank--;
                console.log(wordBank)
            } else {
                const originalColor = dropZone.style.borderColor;
                dropZone.style.borderColor = "red"; // Flash red
                setTimeout(() => {
                    dropZone.style.borderColor = originalColor; // Revert back to original color
                }, 500); // Flash red for 500ms
            }
        }

        if (wordBank == 0) {
            document.getElementById("go_to_quiz").style.display = "block";
            document.getElementById("wordBank").style.display = "none";
        }

    } else if (window.location.pathname.includes("/quiz/1")) {
        event.preventDefault();
        const draggedElementId = event.dataTransfer.getData("text/plain");
        const draggedElement = document.getElementById(draggedElementId); // Get the dragged element
        const dropZone = event.target; // The drop zone where it's dropped
        const dropZoneId = dropZone.getAttribute("data-id");
        if (draggedElement) {
            console.log(dropZoneId);
            const draggedElementSrc = draggedElement.getAttribute("src"); // Get the src
            draggedElement.style.display = "none";
            dropZone.innerHTML = `<img src="${draggedElementSrc}" alt="${draggedElement.alt}" class="matching_image_dropped"/>`; // Update the drop zone with the image
        }
        if (draggedElementId === dropZoneId) {
            points += 1; // Increment points
        }

    } else {
        console.error("Drag not allowed on this page.");

    }
}
// Attach event listeners for dragging and dropping
document.querySelectorAll('.word').forEach(word => {
    word.addEventListener('dragstart', drag); // When dragging starts
});

document.querySelectorAll('.drop-zone').forEach(dropZone => {
    dropZone.addEventListener('dragover', allowDrop); // Allow dragging over the drop zone
    dropZone.addEventListener('drop', drop); // Handle the drop event
});
document.querySelectorAll('.matching_image').forEach((element) => {
    element.addEventListener('dragstart', (event) => {
        const dataId = element.getAttribute("data-id");
        event.dataTransfer.setData("text/plain", dataId);
        console.log("Drag started with data-id:", dataId); // For debugging
    });
});

document.querySelectorAll(".matching_box").forEach((element) => {
    element.addEventListener("dragover", allowDrop); // Allow drop on matching boxes
    element.addEventListener("drop", drop); // Handle drop events
});



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

var selectedCountry = null;
var selectedBoat = null;

function selectOption(type, element) {
    var option = element.innerText; // Extract the text of the clicked item

    if (type === 'country') {
        selectedCountry = option; // Save the selected country
        var countryButton = document.getElementById("countryButton");
        countryButton.innerText = "Selected: " + option; // Update button text
        countryButton.classList.add("clicked"); // Add 'selected' class
        document.getElementById("dropdown").style.display = 'none';
        localStorage.setItem("selectedCountry", selectedCountry);
    } else if (type === 'boat') {
        selectedBoat = option; // Save the selected boat
        var boatButton = document.getElementById("boatButton");
        boatButton.innerText = "Selected: " + option; // Update button text
        boatButton.classList.add("clicked"); // Add 'selected' class
        document.getElementById("dropdown").style.display = 'none';
        localStorage.setItem("selectedBoat", selectedBoat);
    }

    if (selectedCountry && selectedBoat) {
        var playGameButton = document.getElementById("playGameButton");
        playGameButton.style.display = "block";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    applyStoredPositions();
    updateUserBoatImage();
});

function updateUserBoatImage() {
    console.log("Running");
    selectedCountry = localStorage.getItem("selectedCountry") || ""; // Retrieve saved country
    selectedBoat = localStorage.getItem("selectedBoat") || ""; // Retrieve saved boat
    const userBoatDiv = document.getElementById('user_boat');
    const npc1Div = document.getElementById('npc1');
    const npc2Div = document.getElementById('npc2');

    if (!userBoatDiv) {
        console.error("user_boat element not found");
        return;
    }
    if (selectedCountry === 'United States') {
        if (selectedBoat === 'Single sculls') {
            userBoatDiv.innerHTML = '<img src="/static/images/raceboats/single_usa.png" alt="Single USA Boat" class="raceboat">';
            npc1Div.innerHTML = '<img src="/static/images/raceboats/single_can.png" alt="Single USA Boat" class="raceboat">';
            npc2Div.innerHTML = '<img src="/static/images/raceboats/single_gb.png" alt="Single USA Boat" class="raceboat">';
        }
        if (selectedBoat === 'Double sculls') {
            userBoatDiv.innerHTML = '<img src="/static/images/raceboats/double_usa.png" alt="Single USA Boat">';
            npc1Div.innerHTML = '<img src="/static/images/raceboats/double_can.png" alt="Single USA Boat">';
            npc2Div.innerHTML = '<img src="/static/images/raceboats/double_gb.png" alt="Single USA Boat">';
        }
        if (selectedBoat === 'Quad sculls') {
            userBoatDiv.innerHTML = '<img src="/static/images/raceboats/quad_usa.png" alt="Single USA Boat">';
            npc1Div.innerHTML = '<img src="/static/images/raceboats/quad_can.png" alt="Single USA Boat">';
            npc2Div.innerHTML = '<img src="/static/images/raceboats/quad_gb.png" alt="Single USA Boat">';
        }
        if (selectedBoat === 'Coxless four') {
            userBoatDiv.innerHTML = '<img src="/static/images/raceboats/four_usa.png" alt="Single USA Boat">';
            npc1Div.innerHTML = '<img src="/static/images/raceboats/four_can.png" alt="Single USA Boat">';
            npc2Div.innerHTML = '<img src="/static/images/raceboats/four_gb.png" alt="Single USA Boat">';
        }
        if (selectedBoat === 'Coxless pair') {
            userBoatDiv.innerHTML = '<img src="/static/images/raceboats/pair_usa.png" alt="Single USA Boat">';
            npc1Div.innerHTML = '<img src="/static/images/raceboats/pair_can.png" alt="Single USA Boat">';
            npc2Div.innerHTML = '<img src="/static/images/raceboats/pair_gb.png" alt="Single USA Boat">';
        }
        if (selectedBoat === 'Eight') {
            userBoatDiv.innerHTML = '<img src="/static/images/raceboats/eight_usa.png" alt="Single USA Boat">';
            npc1Div.innerHTML = '<img src="/static/images/raceboats/eight_can.png" alt="Single USA Boat">';
            npc2Div.innerHTML = '<img src="/static/images/raceboats/eight_gb.png" alt="Single USA Boat">';
        }
    } else if (selectedCountry === 'Canada') {
        if (selectedBoat === 'Single sculls') {
            userBoatDiv.innerHTML = '<img src="/static/images/raceboats/single_can.png" alt="Single USA Boat">';
            npc1Div.innerHTML = '<img src="/static/images/raceboats/single_usa.png" alt="Single USA Boat">';
            npc2Div.innerHTML = '<img src="/static/images/raceboats/single_gb.png" alt="Single USA Boat">';
        }
        if (selectedBoat === 'Double sculls') {
            userBoatDiv.innerHTML = '<img src="/static/images/raceboats/double_can.png" alt="Single USA Boat">';
            npc1Div.innerHTML = '<img src="/static/images/raceboats/double_usa.png" alt="Single USA Boat">';
            npc2Div.innerHTML = '<img src="/static/images/raceboats/double_gb.png" alt="Single USA Boat">';
        }
        if (selectedBoat === 'Quad sculls') {
            userBoatDiv.innerHTML = '<img src="/static/images/raceboats/quad_can.png" alt="Single USA Boat">';
            npc1Div.innerHTML = '<img src="/static/images/raceboats/quad_usa.png" alt="Single USA Boat">';
            npc2Div.innerHTML = '<img src="/static/images/raceboats/quad_gb.png" alt="Single USA Boat">';
        }
        if (selectedBoat === 'Coxless four') {
            userBoatDiv.innerHTML = '<img src="/static/images/raceboats/four_can.png" alt="Single USA Boat">';
            npc1Div.innerHTML = '<img src="/static/images/raceboats/four_usa.png" alt="Single USA Boat">';
            npc2Div.innerHTML = '<img src="/static/images/raceboats/four_gb.png" alt="Single USA Boat">';
        }
        if (selectedBoat === 'Coxless pair') {
            userBoatDiv.innerHTML = '<img src="/static/images/raceboats/pair_can.png" alt="Single USA Boat">';
            npc1Div.innerHTML = '<img src="/static/images/raceboats/pair_usa.png" alt="Single USA Boat">';
            npc2Div.innerHTML = '<img src="/static/images/raceboats/pair_gb.png" alt="Single USA Boat">';
        }
        if (selectedBoat === 'Eight') {
            userBoatDiv.innerHTML = '<img src="/static/images/raceboats/eight_can.png" alt="Single USA Boat">';
            npc1Div.innerHTML = '<img src="/static/images/raceboats/eight_usa.png" alt="Single USA Boat">';
            npc2Div.innerHTML = '<img src="/static/images/raceboats/eight_gb.png" alt="Single USA Boat">';
        }
    } else if (selectedCountry === 'Great Britain') {
        if (selectedBoat === 'Single sculls') {
            userBoatDiv.innerHTML = '<img src="/static/images/raceboats/single_gb.png" alt="Single USA Boat">';
            npc1Div.innerHTML = '<img src="/static/images/raceboats/single_can.png" alt="Single USA Boat">';
            npc2Div.innerHTML = '<img src="/static/images/raceboats/single_usa.png" alt="Single USA Boat">';
        }
        if (selectedBoat === 'Double sculls') {
            userBoatDiv.innerHTML = '<img src="/static/images/raceboats/double_gb.png" alt="Single USA Boat">';
            npc1Div.innerHTML = '<img src="/static/images/raceboats/double_can.png" alt="Single USA Boat">';
            npc2Div.innerHTML = '<img src="/static/images/raceboats/double_usa.png" alt="Single USA Boat">';
        }
        if (selectedBoat === 'Quad sculls') {
            userBoatDiv.innerHTML = '<img src="/static/images/raceboats/quad_gb.png" alt="Single USA Boat">';
            npc1Div.innerHTML = '<img src="/static/images/raceboats/quad_can.png" alt="Single USA Boat">';
            npc2Div.innerHTML = '<img src="/static/images/raceboats/quad_usa.png" alt="Single USA Boat">';
        }
        if (selectedBoat === 'Coxless four') {
            userBoatDiv.innerHTML = '<img src="/static/images/raceboats/four_gb.png" alt="Single USA Boat">';
            npc1Div.innerHTML = '<img src="/static/images/raceboats/four_can.png" alt="Single USA Boat">';
            npc2Div.innerHTML = '<img src="/static/images/raceboats/four_usa.png" alt="Single USA Boat">';
        }
        if (selectedBoat === 'Coxless pair') {
            userBoatDiv.innerHTML = '<img src="/static/images/raceboats/pair_gb.png" alt="Single USA Boat">';
            npc1Div.innerHTML = '<img src="/static/images/raceboats/pair_can.png" alt="Single USA Boat">';
            npc2Div.innerHTML = '<img src="/static/images/raceboats/pair_usa.png" alt="Single USA Boat">';
        }
        if (selectedBoat === 'Eight') {
            userBoatDiv.innerHTML = '<img src="/static/images/raceboats/eight_gb.png" alt="Single USA Boat">';
            npc1Div.innerHTML = '<img src="/static/images/raceboats/eight_can.png" alt="Single USA Boat">';
            npc2Div.innerHTML = '<img src="/static/images/raceboats/eight_usa.png" alt="Single USA Boat">';
        }
    } else {
        userBoatDiv.innerHTML = '';
        console.log("wrong");
    }
}



function navigateToQuiz() {
    window.location.href = "/quiz/1"; // Replace "/quiz/1" with the desired URL
    updateUserBoatImage();
    localStorage.setItem('pointsCounter', 0);
    localStorage.setItem('npc1_position', 'translateX(0px)');
    localStorage.setItem('npc2_position', 'translateX(0px)');
    localStorage.setItem('user_boat_position', 'translateX(0px)');
}

function submitMatching() {
    nextBtn.style.display = 'block';
    const quiz1score = document.getElementById("quiz1score");
    points = points / 2;
    incrementCounter(points);
    let currentPoints = parseInt(localStorage.getItem('pointsCounter'));
    quiz1score.innerText = `Score: ${currentPoints} / 3`; // Display the score
    quiz1score.style.display = "block"; // Make the score div visible
    moveNPC1();
    moveNPC2();
    moveUser(points, 1)
}

var currentSelectedOption = null; // Variable to track the current selected option

function selectAnswer(optionId) {
    if (currentSelectedOption) {
        currentSelectedOption.style.backgroundColor = ''; // Reset to default
    }
    currentSelectedOption = document.getElementById(optionId);
    currentSelectedOption.style.backgroundColor = 'lightblue'; // Change to blue
}

function submitAnswer() {
    if (window.location.pathname.includes("/quiz/2")) {
        if (currentSelectedOption === document.getElementById("2c")) {
            currentSelectedOption.style.backgroundColor = 'green';
            points += 1;
        }
        else {
            currentSelectedOption.style.backgroundColor = 'red';
        }
        var nextBtn = document.getElementById('nextBtn');
        incrementCounter(points);
        let currentPoints = parseInt(localStorage.getItem('pointsCounter'));
        quiz2score.innerText = `Score: ${currentPoints} / 4`; // Display the score
        quiz2score.style.display = "block"; // Make the score div visible
        nextBtn.style.display = 'block';
        moveNPC1();
        moveNPC2();
        moveUser(points, 2)
    } else if (window.location.pathname.includes("/quiz/3")) {
        if (currentSelectedOption === document.getElementById("3a")) {
            currentSelectedOption.style.backgroundColor = 'green';
            points += 1
        }
        else {
            currentSelectedOption.style.backgroundColor = 'red';
        }
        var nextBtn = document.getElementById('nextBtn');
        incrementCounter(points);
        let currentPoints = parseInt(localStorage.getItem('pointsCounter'));
        quiz3score.innerText = `Score: ${currentPoints} / 5`; // Display the score
        quiz3score.style.display = "block"; // Make the score div visible
        nextBtn.style.display = 'block';
        moveNPC1();
        moveNPC2();
        moveUser(points, 3)
    }
}

// Object to define correct matches
const correctMatches = {
    term1: "def3", // Rigger to The triangular metal device...
    term2: "def5", // Deck to The part of the shell...
    term3: "def1", // Coxswain to The person in the boat...
    term4: "def2", // Oarlock to A brace that attaches an oar...
    term5: "def4", // Oar to The device one uses to pull...
};
var selectedCount = 0;
// Global object to track selected matches
let selectedMatches = {}; // Key: term ID, Value: definition ID

function selectMatch(selectedId) {
    const selectedElement = document.getElementById(selectedId); // Get the clicked element
    console.log("clicked");
    selectedElement.classList.add("selected");
    // Determine if it's a term or a definition
    if (selectedElement.parentNode.classList.contains("terms")) {
        console.log("term selected");
        // If a term is selected
        const previousTerm = Object.keys(selectedMatches).find(term => selectedMatches[term] === selectedMatches[selectedId]);

        if (previousTerm) {
            delete selectedMatches[previousTerm]; // Remove previous assignment if it conflicts
        }

        selectedMatches[selectedId] = null; // Add it to selections
    } else if (selectedElement.parentNode.classList.contains("defs")) {
        // If a definition is selected        console.log("term selected");
        console.log("def selected");
        const lastTerm = Object.keys(selectedMatches).find(term => !selectedMatches[term]);

        if (lastTerm) {
            selectedMatches[lastTerm] = selectedId; // Assign the definition to the last term
            selectedCount++;
        }
    }
}

function submitMatches() {
    // Check if all terms have been matched with a definition
    if (selectedCount != 5) {
        alert("Please complete all matches before submitting."); // Ensure all terms are matched
        return;
    }
    else {
        // Validate each match
        for (const [term, def] of Object.entries(selectedMatches)) {
            const termElement = document.getElementById(term);
            const defElement = document.getElementById(def);

            if (correctMatches[term] === def) { // Correct match
                termElement.classList.add("correct_match");
                defElement.classList.add("correct_match");
                points += 1; // Increment points
            } else { // Incorrect match
                termElement.classList.add("incorrect");
                defElement.classList.add("incorrect");
            }
        }

        // Show the "Next" button after validation
        document.getElementById("nextBtn").style.display = "block"; // Enable "Next" button 
        incrementCounter(points);
        let currentPoints = parseInt(localStorage.getItem('pointsCounter'));
        quiz4score.innerText = `Score: ${currentPoints} / 10`; // Display the score
        quiz4score.style.display = "block"; // Make the score div visible
        moveNPC1();
        moveNPC2();
        moveUser(points, 4)

    }
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
 
 
// Function to handle submitting the answer
 
 
*/

// Function to navigate to the next question
function goToQuestion2(points) {
    window.location.href = "/quiz/2";
}
function goToQuestion3(points) {
    window.location.href = "/quiz/3";
}
function goToQuestion4(points) {
    window.location.href = "/quiz/4";

}
function goToResults(points) {
    var score = parseInt(localStorage.getItem('pointsCounter'));
    ; // Assuming this is where you get the score
    score = parseInt(score); // Convert score to integer
    window.location.href = "/quiz_results?score=" + score;
}


function moveNPC1() {
    var boat = document.getElementById('npc1');
    var currentTransform = localStorage.getItem('npc1_position') || 'translateX(0px)';
    var currentX = getCurrentX(currentTransform);
    var newPosition;
    if (boat) {
        newPosition = incrementPosition(currentX, 33); // Increment by 33px
        boat.style.transform = newPosition;
        localStorage.setItem('npc1_position', newPosition); // Save position to localStorage
    }
    else {
        console.log("Can't find npc1")
    }
}

function moveNPC2() {
    var boat = document.getElementById('npc2');
    var currentTransform = localStorage.getItem('npc2_position') || 'translateX(0px)';
    var currentX = getCurrentX(currentTransform);
    var newPosition;
    if (boat) {
        newPosition = incrementPosition(currentX, 66); // Increment by 66px
        boat.style.transform = newPosition;
        localStorage.setItem('npc2_position', newPosition); // Save position to localStorage
    }
    else {
        console.log("Can't find npc2")
    }
}

function moveUser(points, question) {
    var boat = document.getElementById('user_boat');
    if (!boat) return;

    var currentTransform = localStorage.getItem('user_boat_position') || 'translateX(0px)';
    var currentX = getCurrentX(currentTransform);
    var newPosition;

    if (boat) {
        if (question == 1) {
            if (points == 1) {
                newPosition = incrementPosition(currentX, 33); // Increment by 33px
            } else if (points == 2) {
                newPosition = incrementPosition(currentX, 66); // Increment by 66px
            } else if (points == 3) {
                newPosition = incrementPosition(currentX, 100); // Increment by 100px
            }
        } else if (question == 4) {
            if (points == 1) {
                newPosition = incrementPosition(currentX, 20); // Increment by 66px
            } else if (points == 2) {
                newPosition = incrementPosition(currentX, 40); // Increment by 66px
            } else if (points == 3) {
                newPosition = incrementPosition(currentX, 60); // Increment by 66px
            } else if (points == 4) {
                newPosition = incrementPosition(currentX, 80); // Increment by 66px
            } else if (points == 5) {
                newPosition = incrementPosition(currentX, 100); // Increment by 100px
            }
        } else {
            if (points == 1) {
                newPosition = incrementPosition(currentX, 100); // Increment by 33px
            }
            else{
                newPosition = incrementPosition(currentX, 0); // Increment by 33px
            }
        }

        boat.style.transform = newPosition;
        localStorage.setItem('user_boat_position', newPosition); // Save transformation
    }
    else {
        console.log("Can't find user")
    }
}



function applyStoredPositions() {
    var npc1Position = localStorage.getItem('npc1_position');
    var npc2Position = localStorage.getItem('npc2_position');


    var npc1Element = document.getElementById('npc1');
    var npc2Element = document.getElementById('npc2');

    var storedPosition = localStorage.getItem('user_boat_position') || 'translateX(0px)'; // Get stored position
    var boat = document.getElementById('user_boat');
    if (boat) {
        boat.style.transform = storedPosition; // Apply stored position
    }



    if (npc1Element && npc1Position) {
        npc1Element.style.transform = npc1Position;
        console.log("NPC1 position:", localStorage.getItem('npc1_position'));
    } else if (boat) {
        console.log("no stored position");
    } else {
        console.log("no boat");
    }


    if (npc2Element && npc2Position) {
        npc2Element.style.transform = npc2Position; // Reapply saved position
        console.log("NPC2 position:", localStorage.getItem('npc2_position'));
    } else if (boat) {
        console.log("no stored position");
    } else {
        console.log("no boat");
    }
}

function getCurrentX(transformString) {
    // Remove the text and get the numerical value
    return parseInt(transformString.replace('translateX(', '').replace('px)', ''), 10);
}
function incrementPosition(currentX, increment) {
    return `translateX(${currentX + increment}px)`;
}
