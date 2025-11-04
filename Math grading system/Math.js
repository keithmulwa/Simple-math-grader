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
