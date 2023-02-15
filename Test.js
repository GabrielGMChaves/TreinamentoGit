const txt1 = document.getElementById('suaFrase');
const btn1 = document.getElementById('btn1');
const out1 = document.getElementById('output1');

function aparecerTexto() {

    out1.innerHTML = txt1.value;
}

btn1.addEventListener('click', aparecerTexto);



//funcionalidades do botão esverdeou

var button = document.getElementById("button");
var text = document.getElementById("output1")

function changeColor() {
    return "#00FF00";

};

button.addEventListener("click", () => {
    text.style.color = changeColor()

})