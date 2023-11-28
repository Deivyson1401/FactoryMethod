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
        this.type = type
    }

    toString(): string{
        return `\nCOMPUTADOR TIPO ${this.type}\n-----------------\nRAM: ${this.RAM} GB\nHDD: ${this.HDD} GB\nCPU: ${this.CPU} GHz`
        
    }
}
export {type_PC}