console.log("Work.....");

const element1 = document.getElementById("msg");
console.log(element1);
console.log(element1.innerHTML);
console.log(element1.innerText);

const element2 = document.getElementsByClassName("msg1");
console.log(element2);
console.log(element2[0].innerHTML);
console.log(element2[0].innerText);
console.log(element2[1].innerHTML);
console.log(element2[1].innerText);

const element3 = document.getElementsByTagName("h1");
console.log(element3);
console.log(element3[0].innerHTML);
console.log(element3[0].innerText);
console.log(element3[1].innerHTML);
console.log(element3[1].innerText);

function changeText(){
    const changeText = document.getElementsByTagName("h1");
    changeText[0].innerText ="Hello Everyone"
    console.log(changeText[0].innerText);
}

function changeColor(){
    let changeColor = document.getElementsByClassName("msg1");
    
    let changeColor1 = document.getElementById("msg");
    console.log(changeColor[0].style.color ="red");
    console.log(changeColor1.style.color ="yellow");
}

// function changeText() {
//     const changeText = document.getElementsByTagName("h1");
//     changeText[0].innerText = "Hello World!!"
//     console.log(changeText[0].innerText);
// }

// function changeColor() {
//     const changeColor = document.getElementsByClassName("impMessage");
//     const changeColor1 = document.getElementById("message");
//     changeColor[0].style.color = "red";
//     changeColor1.style.color = "orange"; 
// }