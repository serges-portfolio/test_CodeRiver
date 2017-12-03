var zoomedPicBack = document.getElementById('back-zoom');
document.getElementById('back-thumb').addEventListener("mouseover", function(){
    zoomedPicBack.style.zIndex = "10"; this.addEventListener("mouseout", function(){
        zoomedPicBack.style.zIndex = "1";});
});
var zoomedPicFront = document.getElementById('front-zoom');
document.getElementById('front-thumb').addEventListener("mouseover", function(){
    zoomedPicFront.style.zIndex = "10"; this.addEventListener("mouseout", function(){
        zoomedPicFront.style.zIndex = "1";});
});