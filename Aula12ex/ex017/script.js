alert('Oloco')
function carregar () {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var date = new Date()
var hora = date.getHours()
var minuto = date.getMinutes()
msg.innerHTML = `Agora são ${hora}:${minuto} minutos.`
if (minuto < 10) {
    msg.innerHTML = `Agora são ${hora}:0${minuto} minutos.`
}
if (hora >= 5 && hora < 12) {
    // BOM DIA!
    img.src ='fotomanha.png'
    document.body.style.background = '#f8d8a7'
} else if (hora >= 12 && hora < 18) {
    //BOA TARDE
    img.src ='fototarde.png'
    document.body.style.background = '#bb814f'
} else if (hora >= 18 && hora <= 23 ){
    //BOA NOITE
    img.src ='fotonoite.png'
    document.body.style.background = '#000b2c'
} else if (hora >= 0 && hora <= 4) {
    //BOA NOITE
    img.src ='madrugada.png'
    document.body.style.background = '#131b22'
}
}