

function fillGrid(size){
    let tileWidth = 800/size
    console.log(tileWidth)
    let amountOfTiles = size*size
    let grid = document.getElementById("grid")
    let tileList = []
    while(tileList.length != amountOfTiles){
        let newTile = document.createElement("div")
        newTile.setAttribute("style", `width: ${tileWidth}px; height: ${tileWidth}px;`)
        newTile.classList.add("tile")
        grid.appendChild(newTile)
        tileList.push(newTile)
    }
}

fillGrid(2)