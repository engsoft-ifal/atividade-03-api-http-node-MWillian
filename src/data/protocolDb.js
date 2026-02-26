import {Protocol} from '../entities/protocol.js'

export const protocols = [
    new Protocol(1,"Administrativo","Conclusão de curso", new Date("11/06/2025")),
    new Protocol(2,"Emissão de diploma","Emissão de documento", new Date("02/05/2021")),
    new Protocol(3,"Trancamento de matrícula","Modificação de registro" ,new Date("12/01/2019"))
]
