let date = document.getElementById('myDate')
date.DatePickerX.init();
date.format('dd/mm/yyyy')

window.addEventListener('DOMContentLoaded', function()
        {
            var $min = document.querySelector('.real [name="realDPX-min"]'),
                $max = document.querySelector('.real [name="realDPX-max"]');

            $min.DatePickerX.init({
                mondayFirst: true,
                minDate    : new Date(2021, 5, 9),
                maxDate    : $max
            });

            $max.DatePickerX.init({
                mondayFirst: true,
                minDate    : $min,
                maxDate    : function()
                {
                    var date = new Date();
                    return new Date().setDate(date.getDate() + 10);
                },
                clearButton: false
            });

        });

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
];

const siglas = 
[
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MS',
    'MT',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO'
]
