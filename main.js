
// just testing out features


/*
let answer = window.prompt("what is your name good sir")
*/

//Different button bindings
let GameManualRedirect = document.getElementById("GameManualRedirect"); 
GameManualRedirect.onclick = function(){
    window.location.href = "GameManualNotes.html";
}

let ArticleDirectoryRedirect = document.getElementById("ArticleDirectoryRedirect"); 
ArticleDirectoryRedirect.onclick = function(){
    window.location.href = "ArticleDirectory.html";
}

let GalleryDirectoryRedirect = document.getElementById("GalleryDirectoryRedirect"); 
GalleryDirectoryRedirect.onclick = function(){
    window.location.href = "GalleryDirectory.html";
};

const para = document.createElement("p");
const node = document.createTextNode("This is a new paragraph.");


/*
let AndrewScroll = d; 
window.addEventListener("scroll", ()=> {
    if (window.scrollY == )
})
*/

let scrollObserver = new IntersectionObserver((e)=>{
    e.forEach((divBox)=>{
        divBox.getElementById("mainBody").style.color = "blue";
    })
})

const allDivs = document.querySelectorAll(".ball");
scrollObserver.observe(allDivs);










let MouseHoverButton = document.getElementsByClassName("button"); 
MouseHoverButton.addEventListener("hover", ()=> {
    console.log("alright this is now hovering, please stop bugging me FireFox");
});


