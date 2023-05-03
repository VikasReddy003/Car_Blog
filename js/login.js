var password=localStorage.getItem("Pass")
var EmailorPassword=localStorage.getItem("Mobile-Email")
var allforms=document.forms
var img=document.images;
function passValid()
{
    var inputTags=document.querySelectorAll("input")
    var userEmail=inputTags[0].value;
    var userPassword=inputTags[1].value;
    var borders=document.getElementsByClassName("inputDiv")
    if(userEmail!=EmailorPassword && userPassword!=password)
    {
        document.body.style.backgroundImage="linear-gradient(75deg,red ,red)";
        borders[0].style.borderColor="red";
        borders[1].style.borderColor="red";
        document.getElementById("passValid").innerHTML="Email id & password you entered is incorrect"
    }
    else if(userEmail!=EmailorPassword && userPassword==password)
    {
        document.body.style.backgroundImage="linear-gradient(to right, rgba(71, 37, 205, 0.717) ,purple,rgb(229, 32, 32)";
        borders[0].style.borderColor="red";
        borders[1].style.borderColor="royalblue";
        document.getElementById("passValid").innerHTML="Email id you entered is incorrect";

    }
    else if(userEmail==EmailorPassword && userPassword!=password)
    {
        document.body.style.backgroundImage="linear-gradient(to left, rgba(71, 37, 205, 0.717) ,purple,rgb(229, 32, 32)";
        borders[0].style.borderColor="royalblue";
        borders[1].style.borderColor="red";
        document.getElementById("passValid").innerHTML="Password you entered is incorrect";
    }
    else{
        allforms[0].action="../index.html";
        allforms[0].elements[2].type="submit";
    }
}
function passwordImage()
{
    img[0].src="../asst/images/mnk-normal.jpeg";
    allforms[0].elements[1].type="text";
    document.getElementById("passwordImg").style.transform="rotateY(180deg)";
    document.getElementById("passwordImg").style.transition="transform 0.3s";
}
function passwordsImg()
{
    img[0].src="../asst/images/mnk-eyeClosing.jpeg";
    allforms[0].elements[1].type="password";
    document.getElementById("passwordImg").style.transform="rotateY(0deg)";
    document.getElementById("passwordImg").style.transition="transform 0.3s";
}