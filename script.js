
const container = document.getElementById('play-area');

const circle = document.createElement("div")
circle.className = "circle"

const targerSize = 80
const activeTargets = []


// spawn(circle, 824 - 1, 346 - 1)
// spawn(circle, randomX, randomY)
// console.log(`container x: ${container.offsetWidth - 80}, container y: ${container.offsetHeight - 80}`);

// container.appendChild(circle)

// showCircleCoordinates(circle)

function spawn(element, x, y, ) {
    
    element.style.left = `${x}px`
    element.style.top = `${y}px`
}

let startTimestamp = null
const duration = 4000
// const initialSize = 50


function shrink(timestamp) {

    if (!startTimestamp) startTimestamp = timestamp

    const elspsed = timestamp - startTimestamp
    const progress = Math.min(elspsed / duration, 1)
    // console.log(progress);


    const currentScale = 1 - progress
    // console.log(currentScale);

    circle.style.transform = `scale(${currentScale})`

    if (progress < 1) {
        requestAnimationFrame(shrink)
    } else {
        circle.remove()
    }
}


function getNonOverlappingPosition() {
    let x, y
    let overlapped = false

    const maxX = container.offsetWidth - 80
    const maxY = container.offsetHeight - 80

    do {
        x = Math.floor(Math.random() * (maxX - 1)) + 1
        y = Math.floor(Math.random() * (maxY - 1)) + 1

        overlapped = activeTargets.some(p => {
            const dx = p.x - x
            const dy = p.y - y

            const distance = Math.sqrt(dx * dx + dy * dy)
            return distance < 80
        })

    } while (overlapped);

    return { x, y }
}

container.addEventListener('click', (e) => {
    console.log(`x: ${e.offsetX}, y: ${e.offsetY}`)
})


// requestAnimationFrame(shrink);
// showCircleCoordinates(circle)

function showCircleCoordinates(element) {
    console.log(`x coordinate: ${element.offsetLeft}`)
    console.log(`y coordinate: ${element.offsetTop}`)
}