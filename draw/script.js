//text display
// var string = "Hello Super Baby";
// var str = string.split("");
// var el = document.getElementById('str');
// (function animate() {
// str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
// var running = setTimeout(animate, 90);
// })();

////////////////////////////////////////////////////
//change color///
var i = 0;
function change() {
  var doc = document.getElementById("background");
  var color = ["#ffc996", "#ff8474", "#9ddfd3", "#f05945"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 1000);
//////////////////////////////////
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


/*change language*/



/*********************************/