window.setTimeout(function(){

useless_element = document.createElement('p');
useless_element.innerText = "Quel est le sens de l'open vie ?";

useless_element_text = document.createElement('input');
useless_element.append(useless_element_text);

document.getElementById('app').append(useless_element);

}, 2000);
