var allforms=document.forms;
function fun()
{
    var val=document.querySelectorAll("input")
    var sel=document.querySelectorAll("select")
    var fname=val[0].value;
    var lname=val[1].value;
    var MobileEmail=val[2].value;
    var Pass=val[3].value;
    var Gender=val[4].value;
    var Date=sel[0].value;
    var Month=sel[1].value;
    var Year=sel[2].value;
    localStorage.setItem("Fname",fname)
    localStorage.setItem("Lname",lname)
    localStorage.setItem("Mobile-Email",MobileEmail)
    sessionStorage.setItem("Mobile-Email",MobileEmail)
    localStorage.setItem("Pass",Pass)
    sessionStorage.setItem("Pass",Pass)
    localStorage.setItem("Gender",Gender)
    localStorage.setItem("Date",Date)
    localStorage.setItem("Month",Month)
    localStorage.setItem("Year",Year)
    allforms[0].action="../html/login.html";
    allforms[0].target="_blank";
}