// document.getElementById("cs").addEventListener("click",()=>{
//     window.location.href="localhost/Cs"
// });
// document.getElementById("ece").addEventListener("click",()=>{
//     window.location.href="localhost/ece"
// });
// document.getElementById("me").addEventListener("click",()=>{
//     window.location.href="localhost/me"
// });

// document.getElementById("subjects").addEventListener("click",(e)=>{
//     // console.log(e)
//     window.location.href=e.target.id;
//     console.log("http://localhost/" + e.target.id);
// })

// document.getElementById("subjects").addEventListener("click", (e) => {
//     window.location.href = "http://localhost/" + e.target.id;
//     console.log("http://localhost/" + e.target.id);
// });

document.getElementById("searchbox").addEventListener("input",debouncing);
let whichcall=0;
function fetchData(){
console.log("fetching api data",whichcall++);
}


function debouncing(){
    setTimeout(fetchData,2000);
}