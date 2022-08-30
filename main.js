// Broken and restored
const brokenRestored = fetch(`https://api.artic.edu/api/v1/artworks/134050`)

    .then((res) => {
        console.log("RESOLVED", res);
        return res.json();
    })

    .then((data) => {
        console.log(data.data['title']);
        document.getElementById('brokenrest').innerHTML = data.data['title'];

    })

    .catch((e) => {
        console.log("ERROR", e)
    })


// Red-Haired Girl
const redHairedGirl = fetch(`https://api.artic.edu/api/v1/artworks/118978`)

    .then((res) => {
        console.log("RESOLVED", res);
        return res.json();
    })

    .then((data) => {
        console.log(data.data['title']);
        document.getElementById('redgirl').innerHTML = data.data['title'];

    })

    .catch((e) => {
        console.log("ERROR", e)
    })


// Forest
const forestSun = fetch(`https://api.artic.edu/api/v1/artworks/185760`)

    .then((res) => {
        console.log("RESOLVED", res);
        return res.json();
    })

    .then((data) => {
        console.log(data.data['title']);
        document.getElementById('forest').innerHTML = data.data['title'];

    })

    .catch((e) => {
        console.log("ERROR", e)
    })



// Bottle Rack
const bottleRack = fetch(`https://api.artic.edu/api/v1/artworks/238749`)

    .then((res) => {
        console.log("RESOLVED", res);
        return res.json();
    })

    .then((data) => {
        console.log(data.data['title']);
        document.getElementById('bottle').innerHTML = data.data['title'];

    })

    .catch((e) => {
        console.log("ERROR", e)
    })