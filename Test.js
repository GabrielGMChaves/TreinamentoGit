const txt1 = document.getElementById('suaFrase');
const btn1 = document.getElementById('btn1');
const out1 = document.getElementById('output1');

function aparecerTexto() {

    out1.innerHTML = txt1.value;
}

btn1.addEventListener('click', aparecerTexto);