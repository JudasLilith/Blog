
// just testing out features
let answer = window.prompt("what is your name good sir")


//Different button bindings
let GameManualRedirect = document.getElementById("GameManualRedirect"); 
GameManualRedirect.addEventListener("click", ()=> {
    window.location.href = "2026GameManual.pdf";
});

let ArticleDirectoryRedirect = document.getElementById("ArticleDirectoryRedirect"); 
ArticleDirectoryRedirect.addEventListener("click", ()=> {
    window.location.href = "ArticleDirectory.html";
});

const para = document.createElement("p");
const node = document.createTextNode("This is a new paragraph.");
para.appendChild(node)





let scrollObserver = new IntersectionObserver((e)=>{
    e.forEach((divBox)=>{
        divBox.getElementById("mainBody").style.color = "blue";
    })
})

const allDivs = document.querySelectorAll("div");
scrollObserver.observe(allDivs);










let MouseHoverButton = document.getElementsByClassName("button"); 
MouseHoverButton.addEventListener("hover", ()=> {
    console.log("alright this is now hovering, please stop bugging me FireFox");
});


