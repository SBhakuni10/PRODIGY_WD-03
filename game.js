let turn="X";
let gameOver= false;
//function to change the turn
const changeTurn=()=>{
    return turn==="X"? "0" : "X"

}
//function to decide the winner
const checkWin=()=>{
    let boxTexts= document.getElementsByClassName("myText")
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e=>{
        if((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[2]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText=boxTexts[e[0]].innerText +" won"
            gameOver= true;
            document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width ="400px"
        }
    })

}
//gamelogic
let boxes= document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let myText=element.querySelector('.myText');
    element.addEventListener('click',()=>{
        if( myText.innerText===""){
         myText.innerText=turn;
            turn = changeTurn();
            checkWin();
            if(!gameOver){
            document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
            }
        }
    })
})
//reset btn

  document.querySelector('.reset').addEventListener('click',()=>{
    let myText=document.querySelectorAll('.myText');
    Array.from(myText).forEach(element =>{
        element.innerText = "";
    });
    turn="X";
    gameOver= false;
    document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
    document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width ="0px"

})

