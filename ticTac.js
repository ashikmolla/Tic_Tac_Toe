const gameSingleBox = document.querySelectorAll('.game-single-box');
let value = "x";
let gameOver = false;

const playButton= document.getElementById('play-again');
playButton.addEventListener('click',()=>{
    location.reload();
})

// for(singleBox of gameSingleBox)
gameSingleBox.forEach(singleBox => {
    // console.log(singleBox)
    singleBox.innerHTML = "";
    singleBox.addEventListener("click", () => {
        if (!gameOver && singleBox.innerHTML === "") {
            singleBox.innerHTML = value;
            chackWiner()
            // chwakDraw()
            changValu()


        }
    })

})

function changValu() {
    if (value === "x") {
        value = "0";
        document.querySelector(".bg").style.left = "80px";
    } else {
        value = "x";
        
        document.querySelector(".bg").style.left = "0";
    }
}


function chackWiner(){
    let rowAndCall=[
        [0, 1, 2],[3, 4, 5],[6, 7, 8],
        [0, 3, 6],[1, 4, 7],[2, 5, 8],
        [0, 4, 8],[2, 4, 6]
    ]
    for(let i=0; i<rowAndCall.length; i++){
        console.log(i)
        let firstChack=gameSingleBox[rowAndCall[i][0]].innerHTML;
        let secondChack=gameSingleBox[rowAndCall[i][1]].innerHTML;
        let thairdChack=gameSingleBox[rowAndCall[i][2]].innerHTML;
         
        if(firstChack != "" && firstChack===secondChack && firstChack === thairdChack){
           const winOption= document.getElementById('win');
           winOption.innerHTML='This is winning :- '+" " +value;
        //    winOption.style.display='inline';


           playButton.style.backgroundColor="green";
        }
    }

}