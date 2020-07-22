var allList=document.querySelectorAll("li");
var list1=document.querySelector(".list1");
var list2 = document.querySelector(".list2");
var list3 = document.querySelector(".list3");
var span=document.querySelectorAll("span");
var listName = ["list1", "list2", "list3", "list4", "list5", "list6"];
var index=0;
var imgList=document.querySelector(".imgList");

function setLineColor(){
    for(i=0 ;i< span.length ;i++){
        span[i].style.background="black";
    }
    span[index].style.background="green";
}
setLineColor();

function next(){
    listName.unshift(listName[5]);
    listName.pop();
    for(var i=0;i<allList.length;i++){
        allList[i].setAttribute("class",listName[i]);
    }
    index++;
    if(index>5){
        index=0;
    }
    setLineColor();
}

function prev(){
    listName.push(listName[0]);
    listName.shift(listName[0]);
    for (var i = 0; i < allList.length; i++) {
        allList[i].setAttribute("class", listName[i]);
    }
    index--;
    if (index < 0) {
        index = 5;
    }
    setLineColor();
}

imgList.addEventListener("click",function(e){
    if (e.target.parentNode.getAttribute("class") === "list3"){
        next(); 
    } else if (e.target.parentNode.getAttribute("class") === "list1"){
        prev();
    }
})
   