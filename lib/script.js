console.log("Good to go!")

const imageURL = "https://images-api.nasa.gov/search?media_type=image"

let grabImage = document.querySelector(".first-image")
let setImageDescription = document.querySelector('.first-image-description')
let setImageTitle = document.querySelector('.first-image-title')
let grabSecondImage = document.querySelector(".second-image")
let imageHoldingDiv = document.querySelector('.image-holder')

fetch(imageURL)
    .then(res => res.json())
    .then(res => {
        console.log(res)

        let itemsObject = res.collection.items

        // console.log(itemsObject)
        grabImage.setAttribute("src", res.collection.items[0].links[0].href)



        setImageDescription.innerHTML = res.collection.items[0].data[0].description
        setImageTitle.innerHTML = res.collection.items[0].data[0].title



        for (let item in itemsObject) {

            // This grabs all image urls from API call
            let links = itemsObject[item].links
            for (let url in links) {
                let imageUrl = links[url].href

                let createImage = document.createElement('img')
                // This sets the Image's URL src and Class
                createImage.setAttribute('src', links[url].href)
                createImage.setAttribute('class', url)

                imageHoldingDiv.appendChild(createImage)
            }

            let createDiv = document.createElement('div')
            let createPara = document.createElement('p')


            // This grabs all the descriptions from my API call
            let dataEntryPoint = itemsObject[item].data
            for (let dataObjects in dataEntryPoint) {
                console.log(dataEntryPoint[dataObjects].description)
            }
            createDiv.appendChild(createPara)
            // createPara.innerHTML = itemsObject[item].data[item].description

            // console.log(itemsObject[item].data[item].description)
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