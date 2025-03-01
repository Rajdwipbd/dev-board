function getInnerText(id) {
    const innerText = document.getElementById(id).innerText;
    const convertedInnerText = parseInt(innerText);
    return convertedInnerText;
}
// getInnerText("taskAssined-text");

function clickCompletebtn(id) {
    document.getElementById(id)
        .addEventListener("click", function (event) {
            alert("Borad Updated Sucessfully");
            document.getElementById(id).disabled = true;

            // all task completed alert 
            const taskAssinedText = document.getElementById("taskAssinedText").innerText;
            const convertedcount = parseInt(taskAssinedText);
            if (convertedcount === 1) {
                alert("Congrats!! You Have Completed All the Task")
            }


            const my_result = getInnerText("taskAssinedText");
            const substrac = my_result - 1;
            document.getElementById("taskAssinedText").innerText = "0" + substrac;

            const NavCounter = getInnerText("nav-counter");
            // console.log(NavCounter);
            const sum = NavCounter + 1;
            document.getElementById("nav-counter").innerText = sum;

            // emty div selected 
            const emty = document.getElementById("emty-div");

            // helped By Google  to get div an element
            let parentDiv = this.closest(".task");
            let taskTitle = parentDiv.querySelector(".exact").innerText;


            const newP = document.createElement("p");
            newP.innerText = "You Have Completed The Task " + taskTitle + " ";
            newP.classList.add("activity_logStyle");

            const spanTag = document.createElement("span");
            const now = new Date();
            spanTag.innerText = `at: ${now.toLocaleTimeString()}`;

            emty.appendChild(newP).appendChild(spanTag);


            // if (document.getElementById("completeBtn6").disabled) {
            //     alert("Congrats!! You Have Completed All the Task");
            // }

        })
}




