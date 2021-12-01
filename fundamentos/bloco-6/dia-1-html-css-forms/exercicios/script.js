

    // console.dir(estadosSiglas.estados);
    
function criaOption() {
    let select = document.getElementById('input-select');
    const estados = 
    [
        'Acre',
        'Alagoas',
        'Amapá',
        'Amazonas',
        'Bahia',
        'Ceará',
        'Distrito Federal',
        'Espirito Santo',
        'Goiás',
        'Maranhão',
        'Mato Grosso do Sul',
        'Mato Grosso',
        'Minas Gerais',
        'Pará',
        'Paraíba',
        'Paraná',
        'Pernambuco',
        'Piauí',
        'Rio de Janeiro',
        'Rio Grande do Norte',
        'Rio Grande do Sul',
        'Rondônia',
        'Roraima',
        'Santa Catarina',
        'São Paulo',
        'Sergipe',
        'Tocantins'
    ]
    for (let i = 0; i < estados.length; i++) {
        let option = document.createElement('option');
        option.innerText = estados[i];
        option.value = estados[i];
        select.appendChild(option);
    }
}
criaOption();

var arr = [];

function calendario() {
    let myDate = document.getElementById('myDate');
    
    if (myDate.value === '') {
        arr.push('Preencha o campo de data!');
    }

    const dd = myDate.value.match(/\d+/g)[0];
    const mm = myDate.value.match(/\d+/g)[1];
    const aaaa = myDate.value.match(/\d+/g)[2];

    if (myDate.value.match(/(\d{2}\/){2}\d{4}/)) {
        if (dd > 31 || dd < 0) {
            myDate.push('Data inválida');
        } else if (mm > 12 || mm < 0) {
            myDate.push('Data inválida');
        } else if (aaaa < 0) {
            myDate.push('Data inválida');
        }
    }
}
// calendario();