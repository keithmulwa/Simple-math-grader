const form = document.getElementById("gradeForm");
const marksInput = document.getElementById("mks");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", function(event){
    event.preventDefault();//stops page refresh

    const marks = Number(marksInput.value);
    let grade = "";

    if (marks >= 90){
        grade = "A";
    } else if(marks >= 80){
        grade = "B";
    } else if(marks >= 70){
        grade = "C";
    } else if(marks >= 60){
        grade = "D";
    } else {
        grade = "F";
    }

    resultDiv.textContent = `Your grade is: ${grade}`;
});
const button = document.getElementById("my-button")
button.addEventListener("click",doSth)

function doSth(){
    const overlay = document.createElement("div");
    overlay.className = "fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center";

    const box = document.createElement("div");
    box.className = "bg-white p-6 rounded-lg shadow-lg text-xl text-center"
    box.textContent="By Mulwa ★"

    overlay.appendChild(box);
    document.body.appendChild(overlay);

  overlay.addEventListener("click", () => overlay.remove());
}