

function upDate(previewPic){

    let imagediv = document.getElementById("image");
    imagediv.style.backgroundImage = "url('"+ previewPic.src+"')";
    imagediv.innerHTML = previewPic.alt;

}
   
function unDo(){

    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('original-image.jpg')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
           
}