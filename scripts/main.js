var userInput=[];
document.getElementById("formbtn").addEventListener("click", function(){
    Array.from(document.querySelectorAll(".input")).forEach(element =>{
        userInput[userInput.length] = element.value;
    })
    userInput[userInput.length]= "radio";
    var radio = document.getElementsByName("answer");
    (radio[0].checked)?userInput[userInput.length-1] = "yes":userInput[userInput.length-1] = "no";
    localStorage.setItem("storyData", userInput);
    console.log(userInput)
    console.log(localStorage.getItem("storyData"));
});

console.log(userInput);