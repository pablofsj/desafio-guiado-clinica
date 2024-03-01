const arrayRadiologias = [
    {
        hora: '11:00',
        especialista: 'IGNACIO SCHULZ',
        paciente: 'FRANCISCA ROJAS',
        rut: '9878782-1',
        prevision: 'FONASA'
    },
    {
        hora: '11:30',
        especialista: 'FEDERICO SUBERCASEAUX',
        paciente: 'PAMELA ESTRADA',
        rut: '15345241-3',
        prevision: 'ISAPRE'
    },
    {
        hora: '15:00',
        especialista: 'FERNANDO WURTHZ',
        paciente: 'ARMANDO LUNA',
        rut: '16445345-9',
        prevision: 'ISAPRE'
    },
    {
        hora: '15:30',
        especialista: 'ANA MARIA GODOY',
        paciente: 'MANUEL GODOY',
        rut: '17666419-0',
        prevision: 'FONASA'
    },
    {
        hora: '16:00',
        especialista: 'PATRICIA SUAZO',
        paciente: 'RAMON ULLOA',
        rut: '14989389-K',
        prevision: 'FONASA'
    }
];

const arrayTraumatologias = [
    {
        hora: '8:00',
        especialista: 'MARIA PAZ ALTUZARRA',
        paciente: 'PAULA SANCHEZ',
        rut: '15554774-5',
        prevision: 'FONASA'
    },
    {
        hora: '10:00',
        especialista: 'RAUL ARAYA',
        paciente: 'ANGÉLICA NAVAS',
        rut: '15444147-9',
        prevision: 'ISAPRE'
    },
    {
        hora: '10:30',
        especialista: 'MARIA ARRIAGADA',
        paciente: 'ANA KLAPP',
        rut: '17879423-9',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:00',
        especialista: 'ALEJANDRO BADILLA',
        paciente: 'FELIPE MARDONES',
        rut: '1547423-6',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:30',
        especialista: 'CECILIA BUDNIK',
        paciente: 'DIEGO MARRE',
        rut: '16554741-K',
        prevision: 'FONASA'
    },
    {
        hora: '12:00',
        especialista: 'ARTURO CAVAGNARO',
        paciente: 'CECILIA MENDEZ',
        rut: '9747535-8',
        prevision: 'ISAPRE'
    },
    {
        hora: '12:30',
        especialista: 'ANDRES KANACRI',
        paciente: 'MARCIAL SUAZO',
        rut: '11254785-5',
        prevision: 'ISAPRE'
    }
];

const arrayDentales = [
    {
        hora: '8:30',
        especialista: 'ANDREA ZUÑIGA',
        paciente: 'MARCELA RETAMAL',
        rut: '11123425-6',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:00',
        especialista: 'MARIA PIA ZAÑARTU',
        paciente: 'ANGEL MUÑOZ',
        rut: '9878789-2',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:30',
        especialista: 'SCARLETT WITTING',
        paciente: 'MARIO KAST',
        rut: '7998789-5',
        prevision: 'FONASA'
    },
    {
        hora: '13:00',
        especialista: 'FRANCISCO VON TEUBER',
        paciente: 'KARIN FERNANDEZ',
        rut: '18887662-K',
        prevision: 'FONASA'
    },
    {
        hora: '13:30',
        especialista: 'EDUARDO VIÑUELA',
        paciente: 'HUGO SANCHEZ',
        rut: '17665461-4',
        prevision: 'FONASA'
    },
    {
        hora: '14:00',
        especialista: 'RAQUEL VILLASECA',
        paciente: 'ANA SEPULVEDA',
        rut: '14441281-0',
        prevision: 'ISAPRE'
    }
];


const radiologia = document.querySelector('#radiologia')
const traumatologia = document.querySelector('#traumatologia')
const dental = document.querySelector('#dental')

radiologia.textContent = `Primera atencion: ${arrayRadiologias[0].paciente} - ${arrayRadiologias[0].prevision} | Ultima atencion: ${arrayRadiologias[arrayRadiologias.length - 1].paciente} - ${arrayRadiologias[arrayRadiologias.length - 1].prevision}`

traumatologia.textContent = `Primera atencion: ${arrayTraumatologias[0].paciente} - ${arrayTraumatologias[0].prevision} | Ultima atencion: ${arrayTraumatologias[arrayTraumatologias.length - 1].paciente} - ${arrayTraumatologias[arrayTraumatologias.length - 1].prevision}`

dental.textContent = `Primera atencion: ${arrayDentales[0].paciente} - ${arrayDentales[0].prevision} | Ultima atencion: ${arrayDentales[arrayDentales.length - 1].paciente} - ${arrayDentales[arrayDentales.length - 1].prevision}`


const tRadio = document.querySelector('#tableRadiologia')
const tTrauma = document.querySelector('#tableTraumatologia')
const tDental = document.querySelector('#tableDental')


function generaTabla(array, tabla) {
    array.forEach(e => {
        tabla.innerHTML += 
        `<tr>
        <td>${e.hora}</td>
        <td>${e.especialista}</td>
        <td>${e.paciente}</td>
        <td>${e.rut}</td>
        <td>${e.prevision}</td>
        </tr>`;
    });
}

generaTabla(arrayRadiologias, tRadio)
generaTabla(arrayTraumatologias, tTrauma)
generaTabla(arrayDentales, tDental)








