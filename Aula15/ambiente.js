let num = [5, 4, 3, 2, 1]
num[5] = 6
num.sort()
//console.log(num) //forma padrão de mostrar
/*
console.log(num[0]){
console.log(num[1])      Sem colchetes
console.log(num[2])  forma burra de se mostrar  
console.log(num[3])
console.log(num[4])}
*/
//for (pos =0; pos<num.length; pos++) //forma personalizavel sem os colchetes
let ident = num.indexOf(3)

console.log(`o array tem ${num.length} elementos`)
//for(let pos in num) { //forma mais atualizada e mais simplificada.
console.log(`o valor esta na posição ${ident}`)
//console.log(`a posição tem ${pos} tem valor ${num[pos]}`)

//}