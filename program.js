function verificar() {
    var n1 = window.document.querySelector('input#media1')
    var n2 = window.document.querySelector('input#media2')
    var n3 = window.document.querySelector('input#media3')
    var n4 = window.document.querySelector('input#media4')
    var n5 = window.document.querySelector('input#media5')

    var res = document.querySelector('div#res')

    var nota1 = Number(n1.value)
    var nota2 = Number(n2.value)
    var nota3 = Number(n3.value)
    var nota4 = Number(n4.value)
    var nota5 = Number(n5.value)


    var totalmedia = (nota1+nota2+nota3+nota4+nota5)/5
    res.innerHTML = (`Sua média é ${totalmedia}`)
    

    if (totalmedia < 5)
        res.innerHTML += ('REPROVADO')
}