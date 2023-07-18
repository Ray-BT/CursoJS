function Contar() {
let txt1 = document.getElementById('txtn1')
let txt2 = document.getElementById('txtn2')
let txt3 = document.getElementById('txtn3')
let res = document.querySelector('div#res')
if (txt1.value.length == 0 || txt2.value.length == 0 || txt3.value.length == 0) {
   alert('[ERRO] preencha os dados faltantes')
   res.innerHTML += 'impossivel contar'
} else { 
  res.innerHTML = 'Contando:'
  let t1 = Number(txt1.value)
  let t2 = Number(txt2.value)
  let t3 = Number(txt3.value)
  if (t3 <=0){
    alert('Passo invalido, passo minimo =1')
    t3 = 1
  }
  if (t1 < t2){
    for(let c = t1; c <= t2; c += t3){
    res.innerHTML += `${c} \u{1f449}`
  }
  } else {
    for (let c= t1; c >= t2; c -= t3){
      res.innerHTML += `${c} \u{1f449}`
    }
  }
  res.innerHTML += `\u{1f3c1}`
  }
   
}
