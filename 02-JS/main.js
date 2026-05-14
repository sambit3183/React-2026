import age from "./import.js";

// console.log(age(2006));


let btn = document.getElementById("btn");
btn.addEventListener("click" , getOutput);


function getOutput(){

    let curr_age = age(2001);
    alert `My current age is : $(curr_age)`;

}

// window.getOutput = getOutput; // bypass method(donkey method) 




