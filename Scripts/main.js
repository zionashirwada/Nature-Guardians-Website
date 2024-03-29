// Get the button:
const mybutton=document.getElementById('myBtn')

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = 'flex';
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}
console.log(mybutton)