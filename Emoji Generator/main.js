let ShowEmoji = document.querySelector(".Emoji-view");
let sadbtn = document.querySelector(".sad"); 
let happybtn = document.querySelector(".happy"); 
let angrybtn = document.querySelector(".angry"); 

let sadGroup = ["🥺","☹️","😔","🥲","😞","😟","😖"]
let happyGroup = ["😀","😁","😆","😂","😊","😃","😸"]
let angryGroup = ["😡","😠","👿","😤","😒","🤬","😈"]

sadbtn.addEventListener("click",function(){
    let randomIndex = Math.floor((Math.random() * sadGroup.length));
    console.log(randomIndex);
    ShowEmoji.innerHTML = sadGroup[randomIndex];
})

happybtn.addEventListener("click",function(){
    let randomIndex = Math.floor((Math.random() * happyGroup.length));
    ShowEmoji.innerHTML = happyGroup[randomIndex];
})
angrybtn.addEventListener("click",function(){
    let randomIndex = Math.floor((Math.random() * angryGroup.length));
    ShowEmoji.innerHTML = angryGroup[randomIndex];
})
