
// Get Our Artwork Data
// async function waits to get the data from the url
// console.log(response.data) will log the data from the database
// axios lets us pull data from the url
const getData = async () => {
    let response = await axios.get(`https://api.artic.edu/api/v1/artworks`)
    console.log(response.data)
    return response.data
}

// create Constants to hold DOM Elements
// DOM is document object model -- programming interface for web docs -- allows programming lang to interact with page
// key : value pair
const DOM_Elements = {
    art_list: '.art-data',
}

// Creation of the art title List HTML
// takes id and name as input, then styles them with bootstrap and inserts the html into a certain place
// document is referencing html
// querySelector will look for ranger_list (which is ranger-list)..
// then insertAdjacentHTML will insert the <a href..> into that place
// insertAdjacentHTML(position, text)
const create_list = (id, title) => {
    const html = `<a href ="#" class="list-group-item list-group-item-action list-group-item-light" id="${id}"> ${title} </a>`;
    document.querySelector(DOM_Elements.art_list).insertAdjacentHTML('beforeend', html)
}


// Functions to Load Data and display HTML 
// Waits for the button to be clicked before loading data
// gets data from getData() function from top
const load_data = async () => {
    const artTitle = await getData();
    // loops through and for each element, it will run create list from above, and pass in the element id and name
    artTitle.forEach(element => create_list(element.id, element.title))
}


// clears the data
// looks for ranger-list, then replaces what it is with an empty string
const clear_data = () => {
    document.querySelector(DOM_Elements.create_list).innerHTML = '';
}