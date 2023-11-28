import { structure_computador } from "./interface";

class type_PC implements structure_computador {
    RAM: Number;
    HDD: Number;
    CPU: Number;
    type: string;
    constructor( RAM: Number, HDD: Number, CPU: Number, type: string){
        this.RAM = RAM
        this.HDD = HDD
        this.CPU = CPU
        this.type = this.type
    }

    toString(): string{
        return `COMPUTADOR TIPO ${this.type}
        -----------------
        RAM: ${this.RAM} GB
        HDD: ${this.HDD} GB
        CPU: ${this.CPU} GHz`
        
    }
}
export {type_PC}