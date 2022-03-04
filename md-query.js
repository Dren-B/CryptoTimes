function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img-800").src = images[x];
}

function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("img-800").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 5000);
}

var images = [], x = -1;

images[0] = "headline2.jpg";
images[1] = "headline3.png";
images[2] = "headline4.png";
images[3] = "headline1.jpg"