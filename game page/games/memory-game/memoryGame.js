var main=document.getElementById("main");
let alldivs=document.getElementsByTagName("div");
let imgs=["resources/1.gif",
          "resources/2.gif",
          "resources/3.gif",
          "resources/4.gif",
          "resources/5.gif",
          "resources/6.gif",
          "resources/6.gif",
          "resources/1.gif",
          "resources/3.gif",
          "resources/5.gif",
          "resources/4.gif",
          "resources/2.gif"]
          
var count = 0;
var play =document.getElementById('play');




let rightAudio=new Audio('resources/right.wav');
let wrongAudio=new Audio("resources/wrong.wav");
let grid=[];
pressed=[];


//random
function random(){
   
    for(var i = 0;i<12; i++){
      var temp = Math.floor((Math.random()*12));
      
      if(grid.indexOf(temp) == -1){
          grid.push(temp);
          console.log(grid)
         
      }
      else
       i--;
   }
}
random();
/**** use random too get image*/  
function drawimg(){
    
    for(let i=0;i<imgs.length;i++){
        //to add images
        console.log(imgs[grid[i]])
        main.innerHTML +=`<div id=${i}><img src=${imgs[grid[i]]}></div>`;
    }
}
drawimg()

//to prevent user click more than two
var flag=true;
//to hold this
var arr=[];
//to appear img when click on image
for(let i=0;i<alldivs.length;i++){
    
    alldivs[i].addEventListener('click',function(){
       
        if(flag){
            
            this.firstChild.style.opacity="1";
          
            if(arr.length==0){
                
                arr[0]=this;
                
               }else if(arr.length==1){
               
                arr[1]=this
               
               }
            if(arr.length==2){
                flag=false;
                setTimeout(checkImg,100);
            }
           
        }else{//flag if
            return false;
        }
        
        
    })
}
//to check if two image identical or not
function checkImg(){

    //to prevent one img add more tahn one time to array
    var id1=arr[0].getAttribute("id");
    var id2=arr[1].getAttribute("id");

    if(arr[0].firstChild.getAttribute("src")== arr[1].firstChild.getAttribute("src") && id1!=id2)
    {
     rightAudio.play();
    
       count++;
      }else{
          arr[0].firstChild.style.opacity=0;
          arr[1].firstChild.style.opacity=0;
          wrongAudio.play();
       }
      arr=[];
      flag=true;
       if(count > 5) {
         
          alert('congratulation you win!');

          play.textContent = "Play Again"

      }

    
}
//button play
function reloadImg(){
    location.reload();
}
//button close
 function close() {
    window.close();
}
