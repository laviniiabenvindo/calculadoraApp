const resultado = document.getElementById('resultado');

function calcular(tipo, valor){
    if(tipo === 'acao'){
     if(valor === 'c'){
        resultado.value = ''
     }
     if(valor === '+' || valor === '-' || valor === '*' || valor ==='/' || valor === '.'){
        resultado.value += valor
     }
     if(valor === '='){
        const valor_campo = eval(resultado.value)
        resultado.value = valor_campo
     }
    }else if(tipo === 'valor'){
     resultado.value += valor
    }
 }