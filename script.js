c=console.log.bind(" ");
console.log("Tic-Tac-Toe");
let turn ="X"
let gameover=false

const changeTurn=()=>{
        return turn==="X"?"0":"X";
}

// Function to check for a win

const checkWin=()=>{
    let boxtexts= document.getElementsByClassName('boxtext');

    let wins = [
        [0,1,2,5,0,0],
        [3,4,5,15,0,0],
        [6,7,8,25,0,0],
        [0,3,6,15,90,10],
        [1,4,7,15,90,0],
        [2,5,8,15,90,-10],
        [0,4,8,15,45,0],
        [2,4,6,15,135,0]
    ]
    wins.forEach(e=>{
        if(boxtexts[e[0]].innerText ===boxtexts[e[1]].innerText && boxtexts[e[2]].innerText ===boxtexts[e[1]].innerText &&boxtexts[e[0]].innerText !==""  ){
            document.querySelector('.info').innerHTML ='<h1 style="color:red";><marquee>'+ boxtexts[e[0]].innerText + " Won" +'</marquee>';
            gameover=true;
            document.querySelector('.line').style.width="30vw";
            document.querySelector('.line').style.visibility='visible';
            document.querySelector('.line').style.transform =`translateY(${e[3]}vw) rotate(${e[4]}deg) translateY(${e[5]}vw)`;
        }
    })

}

// Game Logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.boxtext')
    element.addEventListener('click',()=>{
        if(boxtext.innerText ===''){
            boxtext.innerText=turn;
           turn=  changeTurn();
           if(turn==='X'){
           }
            checkWin();
            if(!gameover){
            document.getElementsByClassName("info")[0].innerText ="Turn for "+ turn;}
        }
    })
})

reset.addEventListener('click',()=>{
    window.location.reload();

})