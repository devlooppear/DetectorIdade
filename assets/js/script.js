function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('iano');
    var res = document.querySelector('div#res');
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var artindef = '';
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem';
            artindef = 'um';
            if (idade >=0 && idade < 10) {
                //Crianca
                img.setAttribute('src','assets/img/homem-crianca.jpg');
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','assets/img/homem-adolescente.jpg');
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src','assets/img/homem-adulto.jpg');
            } else {
                //Idoso
                img.setAttribute('src','assets/img/homem-velho.jpg');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            artindef = 'uma';
            if (idade >=0 && idade < 10) {
                //Crianca
                img.setAttribute('src','assets/img/mulher-jovem.jpg');
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','assets/img/mulher-adolescente.jpg');
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src','assets/img/mulher-adulta.jpg');
            } else {
                //Idoso
                img.setAttribute('src','assets/img/mulher-velha.jpg');
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos que você é ${artindef} ${genero} com ${idade} anos!`;
        res.appendChild(img)
        res.sty
    }
}
