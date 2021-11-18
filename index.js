/**--------------------------------Radiología--------------------------------- */

let radiologia = [{
            hora: '11:00',
            especialistaNombre: 'Ignacio Schulz',
            nombrePaciente: 'Francisca Rojas',
            rut: '9878782-1',
            prevision: 'Fonasa'

        },
        {
            hora: '11:30',
            especialistaNombre: 'Federico Subercaseaux',
            nombrePaciente: 'Pamela Estrada',
            rut: '15345241-3',
            prevision: 'Isapre'

        },
        {
            hora: '15:00',
            especialistaNombre: 'Fernando Wurtgz',
            nombrePaciente: 'Armando Luna',
            rut: '16445345-9',
            prevision: 'Isapre'
        },
        {
            hora: '15:30',
            especialistaNombre: 'Ana Maria Godoy',
            nombrePaciente: 'Manuel Godoy',
            rut: '17666419-0',
            prevision: 'Fonasa'

        },
        {
            hora: '16:00',
            especialistaNombre: 'Patricia Suazo',
            nombrePaciente: 'Ramon Ulloa',
            rut: '14989389-k',
            prevision: 'Fonasa'

        }
    ]
    /**NUMERO 2.-ELIMINAR EL PRIMER PUESTO Y EL ULTIMO PUESTO */
radiologia.pop(length - 1)
radiologia.shift(1)

/**----------------------------Traumatología--------------------------------- */
let traumatologia = [{
            hora: '8:00',
            especialistaNombre: 'Maria Paz Altuzarra',
            nombrePaciente: 'Paula Sanchez',
            rut: '15554774-5',
            prevision: 'Fonasa'
        },
        {
            hora: '10:00',
            especialistaNombre: 'Raul Araya',
            nombrePaciente: 'Angélica Navaz',
            rut: '15444147-9',
            prevision: 'Isapre'
        },
        {
            hora: '10:30',
            especialistaNombre: 'Maria Arriagada',
            nombrePaciente: 'Ana Klapp',
            rut: '17879423-9',
            prevision: 'Isapre'
        },
        {
            hora: '11:00',
            especialistaNombre: 'Alejandro Badilla',
            nombrePaciente: 'Felipe Mardones',
            rut: '1547423-6',
            prevision: 'Isapre'
        },
        {
            hora: '11:30',
            especialistaNombre: 'Cecilia Budnik',
            nombrePaciente: 'Diego Marre',
            rut: '16554741-k',
            prevision: 'Fonasa'
        },
        {
            hora: '12:00',
            especialistaNombre: 'Arturo Cavagnaro',
            nombrePaciente: 'Cecilia Mendez',
            rut: '947535-8',
            prevision: 'Isapre'
        },
        {
            hora: '12:30',
            especialistaNombre: 'Andres Kanacri',
            nombrePaciente: 'Marcial Suazo',
            rut: '11254785-5',
            prevision: 'Isapre'
        },

    ]
    /**NUMERO 1.-AGREGAR GENTE AL LISTADO DE TRAUMATOLOGIA */
    /**nuevas personas */
let addGente = [{
    hora: '9:00',
    especialistaNombre: 'René Poblete',
    nombrePaciente: 'Ana Gellona',
    rut: '13123329-7',
    prevision: 'Isapre'
}, {
    hora: '9:30',
    especialistaNombre: 'Maria Solar',
    nombrePaciente: 'Ramiro Andrade',
    rut: '12221451-k',
    prevision: 'Fonasa'
}, {
    hora: '10:00',
    especialistaNombre: 'Raul Loyola',
    nombrePaciente: 'Carmen Isla',
    rut: '10112348-3',
    prevision: 'Isapre'
}, {
    hora: '10:30',
    especialistaNombre: 'Antonio Larenas',
    nombrePaciente: 'Pablo Loayza',
    rut: '13453234-1',
    prevision: 'Isapre'
}, {
    hora: '12:00',
    especialistaNombre: 'Matias Aravena',
    nombrePaciente: 'Susana Poblete',
    rut: '14345656-6',
    prevision: 'Fonasa'
}];
/**NUMERO 1.-AGREGAR GENTE AL LISTADO DE TRAUMATOLOGIA */
let gente = traumatologia.concat(addGente)





/**--------------------------------------Dental------------------------------------------ */
let dental = [{
        hora: '8:30',
        especialistaNombre: 'Andres Zuñiga',
        nombrePaciente: 'Marcela Retamal',
        rut: '11123425-6',
        prevision: 'Isapre'
    },
    {
        hora: '11:00',
        especialistaNombre: 'Maria Pia Zañartu',
        nombrePaciente: 'Angel Muñoz',
        rut: '9878789-2',
        prevision: 'Isapre'
    },
    {
        hora: '11:30',
        especialistaNombre: 'Sarlett Witting',
        nombrePaciente: 'Mario Kast G',
        rut: '7998789-5',
        prevision: 'Fonasa'
    },
    {
        hora: '13:00',
        especialistaNombre: 'Francisco Von Teuber',
        nombrePaciente: 'Karin Fernandez',
        rut: '18887662-k',
        prevision: 'Fonasa'
    },
    {
        hora: '13:30',
        especialistaNombre: 'Eduardo Viñuela',
        nombrePaciente: 'Hugo Sanchez',
        rut: '17665461-4',
        prevision: 'Fonasa'
    },
    {
        hora: '14:00',
        especialistaNombre: 'Raquel Villaseca',
        nombrePaciente: 'Ana Sepulveda',
        rut: '14441281-0',
        prevision: 'Isapre'
    },

]



document.write('<h2>Atenciónes</h2>')
document.write('<hr>')
document.write('<p> Primera atención: ' + radiologia[0].nombrePaciente + '-' + radiologia[0].prevision + ' | Última atención: ' + radiologia[radiologia.length - 1].nombrePaciente + '-' + radiologia[radiologia.length - 1].prevision + '</p>')
document.write('<hr>')
document.write('<p> Primera atención: ' + traumatologia[0].nombrePaciente + '-' + traumatologia[0].prevision + ' | Última atención: ' + traumatologia[traumatologia.length - 1].nombrePaciente + '-' + traumatologia[traumatologia.length - 1].prevision + '</p>')
document.write('<hr>')
document.write('<p> Primera atención: ' + dental[0].nombrePaciente + '-' + dental[0].prevision + ' | Última atención: ' + dental[dental.length - 1].nombrePaciente + '-' + dental[dental.length - 1].prevision + '</p>')
document.write('<hr>')
    /**------------------------Radiologia------------------------------*/
document.write('<h2>Radiología</h2>')
document.write('<hr>')
document.write('<table>')
document.write('<tr>')
document.write('<th>HORA</th>')
document.write('<th>Doctor</th>')
document.write('<th>Paciente</th>')
document.write('<th>Rut</th>')
document.write('<th>Prevision</th>')
document.write('</tr>')
radiologia.forEach(radiologia => {
    document.write('<tr>')
    document.write('<td>' + radiologia.hora + '</td>')
    document.write('<td>' + radiologia.especialistaNombre + '</td>')
    document.write('<td>' + radiologia.nombrePaciente + '</td>')
    document.write('<td>' + radiologia.rut + '</td>')
    document.write('<td>' + radiologia.prevision + '</td>')
    document.write('</tr>')
});
document.write('</table>')
document.write('<hr>')

/**-------------------------------Traumatologia--------------------------------------------- */
document.write('<h2>Traumatología</h2>')
document.write('<hr>')
document.write('<table>')
document.write('<tr>')
document.write('<th>HORA</th>')
document.write('<th>Doctor</th>')
document.write('<th>Paciente</th>')
document.write('<th>Rut</th>')
document.write('<th>Prevision</th>')
document.write('</tr>')
gente.forEach(traumatologia => {
    document.write('<tr>')
    document.write('<td>' + traumatologia.hora + '</td>')
    document.write('<td>' + traumatologia.especialistaNombre + '</td>')
    document.write('<td>' + traumatologia.nombrePaciente + '</td>')
    document.write('<td>' + traumatologia.rut + '</td>')
    document.write('<td>' + traumatologia.prevision + '</td>')
    document.write('</tr>')
});
document.write('</table>')
document.write('<hr>')

/**------------------------Tabla Dental------------------------------*/
document.write('<h2>Dental</h2>')
document.write('<hr>')
document.write('<table>')
document.write('<tr>')
document.write('<th>HORA</th>')
document.write('<th>Doctor</th>')
document.write('<th>Paciente</th>')
document.write('<th>Rut</th>')
document.write('<th>Prevision</th>')
document.write('</tr>')
dental.forEach(dental => {
    document.write('<tr>')
    document.write('<td>' + dental.hora + '</td>')
    document.write('<td>' + dental.especialistaNombre + '</td>')
    document.write('<td>' + dental.nombrePaciente + '</td>')
    document.write('<td>' + dental.rut + '</td>')
    document.write('<td>' + dental.prevision + '</td>')
    document.write('</tr>')
});
document.write('</table>')
document.write('<hr>')
document.write('<hr>')
    /**NUMERO 3.-LISTAR CONSULTAS DENTAL */
document.write('<h2>Listado dental</h2>')
dental.forEach(function(item) {
    document.write('<p> ' + item.hora + '- ' + item.especialistaNombre + '- ' + item.nombrePaciente + '- ' + item.rut + '- ' + item.prevision + '</p>')

});
/**NUMERO 4.-LISTAR Total de gente */
document.write('<hr>')
document.write('<hr>')
document.write('<h2>Total gente atendida</h2>')
let totalGente = gente.concat(radiologia, dental)
totalGente.forEach(function(persona) {
    document.write('<p> ' + persona.nombrePaciente + '</p>')
});
/**NUMERO 5.-LISTAR Total de gente fonasa */
document.write('<hr>')
document.write('<hr>')
document.write('<h2>Total gente Fonasa</h2>')
let fonasaPersona = totalGente.filter(function(item) {
    return item.prevision === 'Fonasa'
});
fonasaPersona.forEach(function(persona) {
    document.write('<p>' + persona.nombrePaciente + '- ' + persona.prevision + '</p>');
});
/**NUMERO 6.-LISTAR Total de gente ISAPRE */
document.write('<hr>')
document.write('<hr>')
document.write('<h2>Total gente Isapre</h2>')
let isaprePersona = totalGente.filter(function(item) {
    return item.prevision === 'Isapre'
});
isaprePersona.forEach(function(persona) {
    document.write('<p>' + persona.nombrePaciente + '- ' + persona.prevision + '</p>');
});