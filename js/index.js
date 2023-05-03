var scrolingText=document.querySelector("#Heading")
var ScrolingImage=document.querySelector("#superScroolingCar")
var upperText=document.querySelector("#headerInfo")
function onLoad()
{
    scrolingText.style.left="33vw"
    ScrolingImage.style.left="68vw"
    upperText.style.bottom="40vh"
    scrolingText.style.transition="All 3s"
    ScrolingImage.style.transition="All 3s"
    upperText.style.transition="All 3s"
}