//all html components
const sizeSelector = document.getElementById("size-change")
const indicator = document.getElementById("sizeIndicator")
const grid = document.getElementById("grid")
const colorPicker = document.getElementById("color-selector")

//variables used to store color settings
let random = false
let erase = false
let shade = false
let color = colorPicker.value

function setEraser(){
    erase = true
    shade = false
    random = false
}

function pickColor(){
    if (erase == true){
        return "#FFFFFF"
    }else if(colorPicker.value != color){
        color = colorPicker.value
        return colorPicker.value
    }
    return colorPicker.value
}

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
        newTile.addEventListener("click", function (e) {
            e.target.style.background = pickColor()
        })
        tileList.push(newTile)
    }
}

function changeIndicator(){
    let sizeValue = sizeSelector.value
    console.log(sizeValue)
    fillGrid(sizeValue)
    indicator.textContent = `${sizeValue} X ${sizeValue}`
}

