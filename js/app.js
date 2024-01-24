const cells = document.querySelectorAll(".cell")

let currentPlayer = 'X'
let gameOver = false

cells.forEach(cell => {
    cell.addEventListener('click', handleClick)
})

function handleClick(e){
    const cell = e.target
    
    if(cell.textContent || gameOver){
        return
    }

    cell.textContent = currentPlayer

    if (checkWin()){
        gameOver = true
        setTimeout(() => alert(currentPlayer + ' wins!'), 100); 
    } else if(checkDraw()){
        gameOver = true;
        setTimeout(() => alert("It's a draw!"), 100); 
    }else{

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
    }
}

function checkWin(){
    const combos = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]

    for(const combo of combos){
        // const a = combo[0]
        // const b = combo[1]
        // const c = combo[2]
    
        const [a,b,c] = combo;

        if(cells[a].textContent && 
            cells[a].textContent === cells[b].textContent && 
            cells[b].textContent && cells[a].textContent === cells[c].textContent)
            {
                return true;
            }
    }
    return false

}

function checkDraw(){
    for(const cell of cells){
        if(!cell.textContent){
            return false;
        }
    }
    return true
}