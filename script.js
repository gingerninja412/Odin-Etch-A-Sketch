const sizeSelector = document.getElementById("size-change")
const indicator = document.getElementById("sizeIndicator")
const grid = document.getElementById("grid")
function fillGrid(size){
    while(grid.lastChild){
        grid.removeChild(grid.lastChild)
    }
    let tileWidth = 800/size
    tileWidth = tileWidth
    console.log(tileWidth)
    let amountOfTiles = size*size
    let tileList = []
    while(tileList.length != amountOfTiles){
        let newTile = document.createElement("div")
        newTile.setAttribute("style", `width: ${tileWidth}px; height: ${tileWidth}px;`)
        newTile.classList.add("tile")
        grid.appendChild(newTile)
        tileList.push(newTile)
    }
}

function changeIndicator(){
    let sizeValue = sizeSelector.value
    console.log(sizeValue)
    fillGrid(sizeValue)
    indicator.textContent = `${sizeValue} X ${sizeValue}`
}

