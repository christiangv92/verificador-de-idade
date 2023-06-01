function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('ERRO: Verifique os dados e tente novamente')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade <= 10) {
                //CRIANÇA
                img.setAttribute('src', 'bebehomem.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'jovemhomem.png')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'adultohomem.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'idosohomem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade <= 10) {
                //CRIANÇA
                img.setAttribute('src', 'bebemulher.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'jovemmulher.png')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'adultomulher.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'idosomulher.png')
            }
        }
res.innerHTML = `Detectado ${genero} de ${idade} anos`
res.appendChild(img)
}
}