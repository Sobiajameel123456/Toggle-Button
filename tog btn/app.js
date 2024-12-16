// const btn=document.getElementById("btn");
// btn.onclick = () =>{
//     if(document.body.style.backgroundcolor === "white"){
//         document.body.style.backgroundcolor = "Black";
//         head.style.color="white";
//         btn.textContent = "switch to light mode";
//     }
//     else{
//         document.body.style.backgroundcolor = "white";
//         head.style.color = "black";
//         btn.textContent = "switch to Dark mode";

//     }
// }
const btn = document.getElementById("btn");
btn.onclick = ()=>{
    if(document.body.style.backgroundColor === "white"){
        document.body.style.backgroundColor = "black";
        head.style.color = "white";
        btn.textContent = "Switch to light mode";
    }
    else{
        document.body.style.backgroundColor = "white";
        head.style.color = "black";
        btn.textContent = "Switch to Dark mode";
    }
}