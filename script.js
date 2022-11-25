//ouvrir burger
function openMenu() {
  document.getElementById("bur").style.height = '100%'
  
}
//fermer burger
function closeMenu() {
  document.getElementById("bur").style.height = '0%'
  
}

// card

function toggle(){
  var blur = document.getElementById('blur')
  blur.classList.toggle('active');
  var popup = document.getElementById('popup')
  popup.classList.toggle('active');
  
}


function togglee(){
  var blurr = document.getElementById('blur')
  blurr.classList.toggle('active');
  var popupp = document.getElementById('popupp')
  popupp.classList.toggle('active');
}

document.addEventListener("mousemove", function(e){
  const bg = document.querySelector('.bg');
  const yu = document.querySelector('.yu');
  const content = document.querySelector('.content');

  bg.style.width = 100 + e.pageX/100 + '%';
  bg.style.height = 100 + e.pageX/100 + '%';

  yu.style.right = 100 + e.pageX/2 + 'px';

  content.style.left = 100 + e.pageX/3 + 'px';
})