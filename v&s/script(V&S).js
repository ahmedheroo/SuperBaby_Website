 
// moving letters
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 100*i
   
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1600,
    easing: "easeOutExpo",
    delay: 1600
    
  });
 
   /*Magicline*/
  $(function() {
  'use strict';
  var leftPos, newWidth, $magicLine;
  $('.tabs').append("<li id='magic-line'></li>");
  $magicLine = $('#magic-line');
  $magicLine.width($('.active').width())
    .css('left', $('.active a').position().left)
    .data('origLeft', $magicLine.position().left)
    .data('origWidth', $magicLine.width());

  $('.tabs li a').click(function() {
    var $this = $(this);
    $this.parent().addClass('active').siblings().removeClass('active');
    $magicLine
      .data('origLeft', $this.position().left)
      .data('origWidth', $this.parent().width());
    return false;
  }); 
  $('.tabs li').find('a').hover(function() {
    var $thisBar = $(this);
    leftPos = $thisBar.position().left;
    newWidth = $thisBar.parent().width();
    $magicLine.css({
      "left": leftPos,
      "width": newWidth
    });
  }, function() {
    $magicLine.css({
      "left": $magicLine.data('origLeft'),
      "width": $magicLine.data('origWidth')
    });
  });
});

//show and hide buttons
var showritebtn=document.getElementById("showwrite");
showritebtn.addEventListener('click' ,function(){
  for(let i=1;i<7;i++)
{
  document.getElementById("R"+i).style.display="none";
  document.getElementById("W"+i).style.display="block";

}  
});

var showwreadbtn=document.getElementById("showread");
showwreadbtn.addEventListener('click' ,function(){
  for(let i=1;i<7;i++)
{
  document.getElementById("W"+i).style.display="none";
  document.getElementById("R"+i).style.display="block";

}  
});

var showallbtn=document.getElementById("showall");
showallbtn.addEventListener('click' ,function(){
  for(let i=1;i<7;i++)
{
  document.getElementById("W"+i).style.display="block";
  document.getElementById("R"+i).style.display="block";

}  
});

// video hover 
var img=document.getElementById("i1");
var vid=document.getElementById("v1");
var maindiv=document.getElementById("R1");
document.onload=function()
{
  img.style.display="block";
  vid.style.display="none";
}
maindiv.onmouseover=function(){

  img.style.display="none";
  vid.style.display="block";
}
maindiv.onmouseleave=function(){

img.style.display="block";
vid.style.display="none";
}
//////////////////////////////
var img1=document.getElementById("i2");
var vid1=document.getElementById("v2");
var maindiv1=document.getElementById("W1");
document.onload=function()
{
  img1.style.display="block";
  vid1.style.display="none";
}
maindiv1.onmouseover=function(){

  img1.style.display="none";
  vid1.style.display="block";
}
maindiv1.onmouseleave=function(){

img1.style.display="block";
vid1.style.display="none";
}

///////////////////////////

var img2=document.getElementById("i3");
var vid2=document.getElementById("v3");
var maindiv2=document.getElementById("R2");
document.onload=function()
{
  img2.style.display="block";
  vid2.style.display="none";
}
maindiv2.onmouseover=function(){

  img2.style.display="none";
  vid2.style.display="block";
}
maindiv2.onmouseleave=function(){

img2.style.display="block";
vid2.style.display="none";
}

///////////////////////////
var img3=document.getElementById("i4");
var vid3=document.getElementById("v4");
var maindiv3=document.getElementById("R3");
document.onload=function()
{
  img3.style.display="block";
  vid3.style.display="none";
}
maindiv3.onmouseover=function(){

  img3.style.display="none";
  vid3.style.display="block";
}
maindiv3.onmouseleave=function(){

img3.style.display="block";
vid3.style.display="none";
}

///////////////////////////
var img4=document.getElementById("i5");
var vid4=document.getElementById("v5");
var maindiv4=document.getElementById("W2");
document.onload=function()
{
  img4.style.display="block";
  vid4.style.display="none";
}
maindiv4.onmouseover=function(){

  img4.style.display="none";
  vid4.style.display="block";
}
maindiv4.onmouseleave=function(){

img4.style.display="block";
vid4.style.display="none";
}

///////////////////////////
var img5=document.getElementById("i6");
var vid5=document.getElementById("v6");
var maindiv5=document.getElementById("W3");
document.onload=function()
{
  img5.style.display="block";
  vid5.style.display="none";
}
maindiv5.onmouseover=function(){

  img5.style.display="none";
  vid5.style.display="block";
}
maindiv5.onmouseleave=function(){

img5.style.display="block";
vid5.style.display="none";
}

///////////////////////////
var img6=document.getElementById("i7");
var vid6=document.getElementById("v7");
var maindiv6=document.getElementById("R4");
document.onload=function()
{
  img6.style.display="block";
  vid6.style.display="none";
}
maindiv6.onmouseover=function(){

  img6.style.display="none";
  vid6.style.display="block";
}
maindiv6.onmouseleave=function(){

img6.style.display="block";
vid6.style.display="none";
}

///////////////////////////
var img7=document.getElementById("i8");
var vid7=document.getElementById("v8");
var maindiv7=document.getElementById("W4");
document.onload=function()
{
  img7.style.display="block";
  vid7.style.display="none";
}
maindiv7.onmouseover=function(){

  img7.style.display="none";
  vid7.style.display="block";
}
maindiv7.onmouseleave=function(){

img7.style.display="block";
vid7.style.display="none";
}

///////////////////////////
var img8=document.getElementById("i8");
var vid8=document.getElementById("v8");
var maindiv8=document.getElementById("W");
document.onload=function()
{
  img8.style.display="block";
  vid8.style.display="none";
}
maindiv8.onmouseover=function(){

  img8.style.display="none";
  vid8.style.display="block";
}
maindiv8.onmouseleave=function(){

img8.style.display="block";
vid8.style.display="none";
}

