var nome = document.querySelector("#nome")
var nivel = document.querySelector("#nivel")
var forca = document.querySelector("#forca")
var agilidade = document.querySelector("#agilidade")
var armadura = document.querySelector("#armadura")
var poder = document.querySelector("#poder")
var defesa = document.querySelector("#defesa")
var dados = document.querySelector("#dados")

let novonome
let label = ""

nome.addEventListener("change",lerNome)
nivel.addEventListener("change",addPrefixo)
nivel.addEventListener("change",addPoder)
forca.addEventListener("change",addPoder)
armadura.addEventListener("change",addDef)
agilidade.addEventListener("change",addDef)
// dados.addEventListener("click", defineResultado)


function lerNome() {
    novonome = nome.value
}

function addPrefixo() {
    if(nivel.value < 0)
    {
        label = "[HACKER] "
    }
    else if(nivel.value > 0 && nivel.value <= 5)
    {
        label = "[NOOBASSO] "
    }
    else if(nivel.value > 5 && nivel.value <= 10)
    {
        label = "[DECENTE] "
    }
    else if(nivel.value > 10)
    {
        label = "[SEM VIDA] "
    }
    nome.value = label + novonome
}

function addPoder() {
    let forcadim = forca.value - 10
    let niveldiv = nivel.value / 2
    poder.value = forcadim / 2 + niveldiv
}

function addDef() {
    defesa.value = parseInt(armadura.value) + parseInt(agilidade.value)
}

function vcrolacomomeurolo(dado) {
        let result = Math.floor(Math.random() * dado) + 1
        // switch(result){
        //     case 1:
        //         addimg("1.jpg")
        //     break;
        //     case 2:
        //         addimg("2.jpg")
        //     break;
        //     case 3:
        //         addimg("3.webp")
        //     break;
        //     case 4:
        //         addimg("4.jpg")
        //     break;
        //     case 5:
        //         addimg("5.jpg")
        //     break;
        //     case 6:
        //         addimg("6.jpg")
        //     break;
        //     case 7:
        //         addimg("7.jfif")
        //     break;
        //     case 8:
        //         addimg("8.png")
        //     break;
        //     case 9:
        //         addimg("9.jfif")
        //     break;
        //     case 10:
        //         addimg("10.png")
        //     break;
        //     case 11:
        //         addimg("11.png")
        //     break;
        //     case 12:
        //         addimg("12.jfif")
        //     break;
        //     case 13:
        //         addimg("13.jfif")
        //     break;
        //     case 14:
        //         addimg("14.jfif")
        //     break;
        //     case 15:
        //         addimg("15.jfif")
        //     break;
        //     case 16:
        //         addimg("16.jfif")
        //     break;
        //     case 17:
        //         addimg("17.jfif")
        //     break;
        //     case 18:
        //         addimg("18.jpg")
        //     break;
        //     case 19:
        //         addimg("19.jfif")
        //     break;
        //     case 20:
        //         addimg("20.jpg")
        //     break;
        // }
        return result
}

// function addimg(source){
//     let image = document.createElement("img")
//     image.src = source
//     image.id = "picture"
//     image.style.height = "25px"
//     image.style.height = "25px"
// }