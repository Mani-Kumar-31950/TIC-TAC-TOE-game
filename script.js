console.log("Welcome to the TIC TAC TOE")
let turn="X"
let gameover=false;
const changeTurn= ()=>{
    return turn==="X"?"0":"X"
}
const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2,5,7,0],
        [3,4,5,5,22,0],
        [6,7,8,5,38,0],
        [0,3,6,-10,22,90],
        [1,4,7,5,22,90],
        [2,5,8,20,22,90],
        [0,4,8,5,22,45],
        [2,4,6,5,22,135],

    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !=="")){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText+" Won"
            gameover=true
            document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector('.line').style.width="35vw";
            return 1;
            
        }

    })
}

let bxs=document.getElementsByClassName("box")
Array.from(bxs).forEach(element=>{
    let boxtext=element.querySelector('.boxtext')
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            checkWin();
            if(!gameover){
                document.getElementsByClassName('info')[0].innerText="Turn for "+turn
            }
            
            
        }
    })

})

reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(e=>{
        e.innerText=""
    });
    document.querySelector('.line').style.width="0vw";
    turn="X";
    gameover=false;
    document.getElementsByClassName('info')[0].innerText="Turn for "+turn;
    
})

