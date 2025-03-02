clickCompletebtn("completeBtn1");
clickCompletebtn("completeBtn2");
clickCompletebtn("completeBtn3");
clickCompletebtn("completeBtn4");
clickCompletebtn("completeBtn5");
clickCompletebtn("completeBtn6");

document.getElementById("clearActivity")
    .addEventListener("click", function () {
        document.getElementById("emty-div").innerText = "";
    });

document.getElementById("discover-btn")
    .addEventListener("click", function () {
        window.location.href = "secondPage.html"
    })

// color change 
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeRandomBackgroundColor() {
    const colors = [];
    // Generate 5 random colors and add them to the array
    for (let i = 0; i < 5; i++) {
        colors.push(getRandomColor());
    }

    // Use for...of loop to iterate over colors and set a random background color
    for (const color of colors) {
        document.body.style.backgroundColor = color;
        break; // Exit the loop after changing the background color to one of the random colors
    }
}