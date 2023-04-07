const a= document.getElementsByTagName("h1");
console.log(a[0].innerHTML);
a[0].innerHTML="Sachin Shivaji Kolekar";




const para = document.querySelector("p")

const abc=document.querySelector("#myName");

abc.addEventListener("click",()=>{
    const name = document.querySelector("#myName");
    name.style.color="purple"
})

para.addEventListener("click",()=>{
    para.style.color="red"
});

const xyz=document.querySelector("#mybutton");
xyz.addEventListener("click",()=>{
  
const a= prompt("enter the number")
if (a<0) {
    alert(`${a} Is negative`)
}else{
    alert(`${a} Is positive`)
}
})




const ankerTag = document.getElementsByTagName("a");


ankerTag.setAttribute("href","https://www.facebook.com/");
