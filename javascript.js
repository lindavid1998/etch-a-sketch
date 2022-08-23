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
    // let randomColor = Math.floor(Math.random()*16777215).toString(16);
    // e.target.style.backgroundColor = '#' + randomColor;
    
    // if background color is blank, initialize as 90% transparent black
    if (e.target.style.backgroundColor === '') {
        e.target.style.opacity = '0.1'
        e.target.style.backgroundColor = 'black'
        // e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'
    } else { // otherwise, increase opacity by 0.1        
        let newOpacity = Number(e.target.style.opacity) + 0.1 
        e.target.style.opacity = `${newOpacity}`
    }

    // e.target.style.backgroundColor = 'black'
}

createGrid()

let boxes = document.querySelectorAll('.box')
boxes.forEach(box => box.addEventListener('mouseover', updateBackgroundColor))

let clearButton = document.querySelector('.clear')
clearButton.addEventListener('click', () => {
    boxes.forEach(box => box.style.backgroundColor = '')
})

let button = document.querySelector('.set-size')
button.addEventListener('click', () => {
    let input;
    do {
        input = prompt('Enter a grid size (max: 100)')
    } while (input > 100);

    // remove all existing boxes
    // boxes.forEach(box => box.remove());
    let container = document.querySelector('.container')
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }

    // create new grid using input
    createGrid(input);

    // add mouseover event listener to each box on new grid
    boxes = document.querySelectorAll('.box')
    boxes.forEach(box => box.addEventListener('mouseover', updateBackgroundColor))

})