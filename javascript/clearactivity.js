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

document.getElementById("discover-btn").addEventListener("click", function () {
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
    for (let i = 0; i < 5; i++) {
        colors.push(getRandomColor());
    }
    for (const color of colors) {
        document.body.style.backgroundColor = color;
        
    }
}