let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        let item = document.createElement('option')
        valores.push(Number(num.value))
        item.text = `Valor ${(num.value)} adicionado`
        lista.appendChild(item)
        res.innerHTML =''
        
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
num.value =''
num.focus()    
}
function Finalizar() {
    if (valores.length == 0) {
        alert('Adicione algum valor para ser analisado')
    } else {
    let soma = 0
    for (let p = 0; p < valores.length; p++) {
        soma += valores[p]
    }
    res.innerHTML += `Ao todo temos ${valores.length} números cadastrados<br>`
    res.innerHTML += `A média dos valores digitados é ${soma / lista.length}<br>`
    res.innerHTML += `O maior valor informado foi ${Math.max(...valores)}<br>`
    res.innerHTML += `O menor valor informado foi ${Math.min(...valores)}<br>`
    res.innerHTML += `A soma de todos os valores é ${soma}`
}
} 


