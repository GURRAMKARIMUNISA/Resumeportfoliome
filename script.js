var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
    // function openmenu(){
    //     sidemenu.style.right="0";
    // }
    // function closemenu(){
    //     sidemenu.style.right="200px";
    // }
}
// var open=document.getElementsByClassName(" fa-xmark");
// var close=document.getElementsByClassName("fa-bars");
// open.onclick=()=>{
//     sidemenu.classList.toggle("open")
// }
// close.onclick=()=>{
// sidemenu.classList.toggle("close");
// }

hamburger=document.querySelector(".hamburger");
hamburger.onclick=function(){
    navbar=document.querySelector(".nav-bar")
    navbar.classList.toggle("active")
}