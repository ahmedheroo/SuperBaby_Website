//our elements

var myActiveButton=document.querySelector(".btn_group #active");

//to start our journey //ابدا التصفح
/*myActiveButton.addEventListener('click',function(){
  myActiveButton.setAttribute('href',"#ourwebsiteconten");
 

})*/

var mytogllerbtn=document.querySelector(".navbar-toggler");
mytogllerbtn.addEventListener('click',function(){


  
})

/***************up to top button*************/
var upBtn=document.getElementById("up");
window.onscroll=function(){
    console.log(window.pageYOffset);
    if(window.pageYOffset>100){
    upBtn.style.display="block"
    
}else{
    upBtn.style.display="none"
}
}
/***up event*/
upBtn.addEventListener('click',function(){
  
    window.scrollTo({ top:0, behavior: 'smooth' });
  
   
    
})

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
} 
/***************box animation******************* */
/**************animation************** */
/*var movingbox=document.getElementById("appmoving");
window.onscroll=function(){
    console.log(window.pageYOffset);
    if(window.pageYOffset>352 ||window.pageYOffset<552 ){
        movingbox.style.animationName="slide";
    
}
}*/

