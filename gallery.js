let images = ["A310.jpg", "A320.jpg", "A330.jpg", "A340.jpg", "A350.jpg", "A380.jpg"];
let cnt = 0;

function schimbaimg() {
    cnt++;
    if (cnt >= images.length) {
        cnt = 0;
    }
    document.getElementById("imageDisplay").src = images[cnt];
}

function upDate(idimg)
{
    let imgalt = document.getElementById(idimg);
    document.getElementById("par") = imgalt;
    alert("ba")
}
