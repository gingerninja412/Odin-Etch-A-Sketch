//all html components
const sizeSelector = document.getElementById("size-change")
const indicator = document.getElementById("sizeIndicator")
const grid = document.getElementById("grid")
const colorPicker = document.getElementById("color-selector")

//variables used to store color settings
let random = false
let erase = false
let color = colorPicker.value

function setEraser(){
    erase = true
    random = false
}

function setRandom(){
    erase = false
    random = true
}

function clearGrid() {
    console.log(grid.childNodes)
    grid.childNodes.forEach(item => {
        item.style.background = "#FFFFFF"
    })
}

function pickColor(){
    if(colorPicker.value != color){
        color = colorPicker.value
        erase = false
        random = false
        console.log(color)
        return colorPicker.value
    } else if (erase == true){
        return "#FFFFFF"
    } else if (random == true){
        let rainbowList = ["#E81416", "#FFA500", "#FAEB36", "#79C314", "#487DE7", "#4B369D", "#70369D"]
        let selector = Math.floor(Math.random() * 6)
        return rainbowList[selector]
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
    console.log(sizeValue)
    fillGrid(sizeValue)
    indicator.textContent = `${sizeValue} X ${sizeValue}`
}

window.onload = () => {
    fillGrid(16)
}
    
