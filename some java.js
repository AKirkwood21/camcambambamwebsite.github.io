var myImage = document.querySelector("img");

myImage.onclick = function(){
  var mySrc = myImage.getAttribute("src");
  alert("I work!");
  if(mySrc === "images/camaroon bookleh.jpg") {
    myImage.setAttribute("src", "images/mothbro.gif")
  }
  else {
    myImage.setAttribute("src", "images/camaroon bookleh.jpg")
  }
}
