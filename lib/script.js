console.log("Good to go!")

const imageURL = "https://images-api.nasa.gov/search?media_type=image"

let grabImage = document.querySelector(".first-image")
let setImageDescription = document.querySelector('.first-image-description')
let setImageTitle = document.querySelector('.first-image-title')
let grabSecondImage = document.querySelector(".second-image")


fetch(imageURL)
    .then(res => res.json())
    .then(res => {
        console.log(res)
        // console.log(res.collection.items[0])
        grabImage.setAttribute("src", res.collection.items[0].links[0].href)
        setImageDescription.innerHTML = res.collection.items[0].data[0].description
        setImageTitle.innerHTML = res.collection.items[0].data[0].title

        witchHeadImage = res.collection.items[0].links[0].href
        // grabSecondImage.setAttribute("src", res.collection.items[1].links[0].href)

        // This grabs all the descriptions from my API call
        let items = res.collection.items
        for (item in items) {
            // console.log(items[item].data)
            let dataEntryPoint = items[item].data
            for (data in dataEntryPoint) {
                console.log(dataEntryPoint[data].description)
            }
            let createDiv = document.createElement('div')
            let createPara = document.createElement('p')
            // createDiv.appendChild(createPara)
            // console.log(createDiv)
            // createPara.innerHTML = items[item].data[item].description
            // console.log(`item var: ${item}; items var: ${items}`)
        }
    })




let popUp = document.querySelector(".pop-up");

var span = document.querySelector(".close");

grabImage.onclick = function () {
    popUp.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    popUp.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == popUp) {
        popUp.style.display = "none";
    }
}