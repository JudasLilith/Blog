var title = document.getElementById("titleName");

setTimeout(() => {console.log("halleigluha");}, 100);


changeTitle = function(){
   var letter = title[0];
   blurPageTitle = title.substr(1) + letter;
   title = title;
   changeTitleTimer = setTimeout(changeTitle(), 500);
}

//this is a fucking travestu