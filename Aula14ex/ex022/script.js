function tabuada() {
    let nume = document.getElementById('num')
    let tab = document.getElementById('tabu')
    if (nume.value.length == 0) {
        alert('Por favor digite um número')
    } else {
        let n = Number(nume.value)
        tab.innerHTML= ''
        for(let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            
         }   
        
     }   
        
}
    
