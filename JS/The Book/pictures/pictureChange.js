window.onload = init;
function init() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = showAnswer;
    }
};

function showAnswer(eventObj) {
    var image = eventObj.target;
    var name = image.id;
    name = name + ".jpg";
    image.src = name;

    function reblur(image) {
        var name = image.id;
        name = name + "blur.jpg";
        image.src = name;
    }
}

var andReblur = reblur();
setTimeout(andreblur, 2000);