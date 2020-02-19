function gamedisplay() {
    document.getElementById("logo_pic").style.display = 'none';
    document.getElementById("gameSource").style.display = 'block';
    document.getElementById('logo_control').style.display="block";
    
    
}
function hover(element) {
  element.setAttribute('src', 'img/logo1_hover.png');
}

function unhover(element) {
  element.setAttribute('src', 'img/logo1.png');
}
