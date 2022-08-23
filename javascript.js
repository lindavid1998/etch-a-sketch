function createGrid(dim = 16) {
    let container = document.querySelector('.container')
    
    for (let i = 0; i < dim; i++) {
        let row = document.createElement('div')
        row.className = 'row'
        for (let j = 0; j < dim; j++) {
            let div = document.createElement('div')
            div.className = 'box'
            div.style.cssText = 'flex: 1 1 0; border: 1px solid black; padding: 2px;'
            row.appendChild(div)
        }
        row.style.cssText = 'display: flex; gap: 2px; justify-content: center; flex: 1 1 0;'
        container.appendChild(row)
    }
    container.style.cssText = 'display: flex; flex-direction: column; gap: 5px;'
}

function updateBackgroundColor(e) {
    // if background color is blank, initialize as black with 0.1 opacity
    if (e.target.style.backgroundColor === '') {
        e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'
    } else { // otherwise, increase opacity by 0.1   
        let curOpacity = window.getComputedStyle(e.target).getPropertyValue('background-color').match(/[0-9.]+/gi)[3]     
        let newOpacity = Number(curOpacity) + 0.1 
        e.target.style.backgroundColor = `rgba(0, 0, 0, ${newOpacity})`
    }
}

function clearGrid() {
    boxes.forEach(box => {
        box.style.backgroundColor = ''
        box.style.opacity = '1'
    })
}

function changeGridSize() {
    let input;
    do {
        input = prompt('Enter a grid size (max: 100)')
    } while (input > 100);

    let container = document.querySelector('.container')
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }

    createGrid(input);
    boxes = document.querySelectorAll('.box')
    boxes.forEach(box => box.addEventListener('mouseover', updateBackgroundColor))
}

createGrid()

let boxes = document.querySelectorAll('.box')
let clearButton = document.querySelector('.clear')
let button = document.querySelector('.set-size')

boxes.forEach(box => box.addEventListener('mouseover', updateBackgroundColor))
clearButton.addEventListener('click', clearGrid)
button.addEventListener('click', changeGridSize)