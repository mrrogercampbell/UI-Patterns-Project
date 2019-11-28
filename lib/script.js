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
        console.log(res.collection.items[0])
        grabImage.setAttribute("src", res.collection.items[0].links[0].href)
        setImageDescription.innerHTML = res.collection.items[0].data[0].description
        setImageTitle.innerHTML = res.collection.items[0].data[0].title
        // grabSecondImage.setAttribute("src", res.collection.items[1].links[0].href)
    })