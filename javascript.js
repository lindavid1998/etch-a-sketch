function createGrid() {
    let container = document.querySelector('.container')
    
    for (let i = 0; i < 16; i++) {
        let row = document.createElement('div')
        row.className = 'row'
        for (let j = 0; j < 16; j++) {
            let div = document.createElement('div')
            div.className = 'box'
            div.style.cssText = 'flex: none; width: 50px; height: 50px; border: 1px solid black; padding: 2px;'
            row.appendChild(div)
        }
        row.style.cssText = 'display: flex; gap: 3px; justify-content: center;'
        container.appendChild(row)
    }
    container.style.cssText = 'display: flex; flex-direction: column; gap: 5px;'
}

createGrid()

let boxes = document.querySelectorAll('.box')

boxes.forEach(box => box.addEventListener('mouseover', updateBackgroundColor))

function updateBackgroundColor(e) {
    e.target.style.backgroundColor = 'black'
}