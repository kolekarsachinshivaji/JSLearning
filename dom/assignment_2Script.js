console.log("====== API getElementsByTagName() to select element by tag name  =====");
const h2Element = document.getElementsByTagName("h2");
console.log(h2Element[1].innerHTML);
h2Element[1].innerHTML = "My Hobbies";

const favColor=document.querySelector("h2");
favColor.style.color="purple";


console.log('=========Changing the CSS properties of an element =====')
const elementTechstack = document.querySelector("#techstack");
elementTechstack.style.color = "red";


console.log("====== Remove Element =====");
const elementDivProject = document.querySelector("#divProject");
const elementProject = document.querySelector("#project");
elementDivProject.removeChild(elementProject);

console.log("removeChild=document.querySelector");
 const unorderd= document.querySelector("#unorderd");
const list=document.querySelector("#list");
unorderd.removeChild(list)



console.log("====== Adding Element =====");
const elementDiv = document.querySelector("#divProject");
const elementP = document.createElement("p");
const elementText = document.createTextNode("Team Size - 7");
elementP.appendChild(elementText);
elementDiv.appendChild(elementP);

const elementAdress = document.querySelector("#adress")
elementAdress.addEventListener("click",()=>{
    console.log("Listening click event....");
})



function show(){
    console.log("event click.........");
}




const selectbutton = document.querySelector("#myhobbies");
selectbutton.addEventListener("click",()=>{
    const selectDiv=document.querySelector(".div");
    const paragrapTag=document.createElement("p");
    const hobbie=document.createTextNode("programing")
   selectDiv.appendChild(paragrapTag);
   paragrapTag.appendChild(hobbie);
   
})

selectbutton.addEventListener("click",()=>{
    const selectDiv=document.querySelector(".div");
    const paragrapTag=document.createElement("p");
    const hobbie=document.createTextNode("Reading")
   selectDiv.appendChild(paragrapTag);
   paragrapTag.appendChild(hobbie);
   
})
selectbutton.addEventListener("click",()=>{
    const selectDiv=document.querySelector(".div");
    const paragrapTag=document.createElement("p");
    const hobbie=document.createTextNode("Dancing")
   selectDiv.appendChild(paragrapTag);
   paragrapTag.appendChild(hobbie);
   
})




const isprimebutton=document.querySelector("#isprime");

isprimebutton.addEventListener("click",()=>{

const number = prompt("please enter the number",0)
let c=0;
for (let index = 1; index <=number; index++) {
    
    if (number%index==0) {
        c++
    }   
}
if (c==2) {
    alert(`${number}: is prime`);
}
else{
    alert(`${number}: is Not prime`);
}
})