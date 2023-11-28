import { type_PC } from "./pc";
import { type_Server } from "./server";

class fabric_Computador {
    static create_computador (RAM: Number, HDD: Number, CPU: Number, type: string){
        switch (type) {
            case 'pc':
                return new type_PC(RAM,HDD,CPU,type);
                break;
            case 'server':
                return new type_Server(RAM,HDD,CPU,type)
                break;
            default:
                return '\nTipo inválido. informe "pc" ou "server" para criar um novo computador';
                break;
        }
    }
}

export {fabric_Computador}