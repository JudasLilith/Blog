var title = document.getElementById("title");

setTimeout(() => {console.log("halleigluha");



}, 100);


changeTitle = function(){
   var letter = title[0];
   blurPageTitle = title.substr(1) + letter;
   title = title;
   changeTitleTimer = setTimeout(changeTitle, 500);
}




/*
'''
while (true){


}
'''
*/
