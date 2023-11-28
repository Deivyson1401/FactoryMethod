import { structure_computador } from "./interface";

class type_Server implements structure_computador {
    RAM: Number;
    HDD: Number;
    CPU: Number;
    type: string;
    constructor(RAM: Number, HDD: Number, CPU: Number, type: string){
        RAM = this.RAM,
        HDD = this.HDD,
        CPU = this.CPU
        type = this.type
    }

    toString(): string{
        return `COMPUTADOR TIPO ${this.type}
        -----------------
        RAM: ${this.RAM} GB
        HDD: ${this.HDD} GB
        CPU: ${this.CPU} GHz`
        
    }
}
export {type_Server}