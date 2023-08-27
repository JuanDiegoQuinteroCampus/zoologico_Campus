import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsString, Matches, IsInt } from 'class-validator';

export class Visitantes {

    @Expose({ name: '_id' })
    @IsDefined({ message: 'El parametro "_id" es Obligatorio' })
    @IsInt({ message: 'El parametro "_id" es de tipo Number' })
    _id: number;

    @Expose({ name: 'nombre' })
    @IsDefined({ message: 'El parametro "nombre" es Obligatorio' })
    @IsString({ message: 'El parametro "nombre" es de tipo String' })
    nombre: string;

    @Expose({ name: 'cedula' })
    @IsDefined({ message: 'El parametro "cedula" es Obligatorio' })
    @IsInt({ message: 'El parametro "cedula" es de tipo Number' })
    cedula: number;

    @Expose({ name: 'telefono' })
    @IsDefined({ message: 'El parametro "telefono" es Obligatorio' })
    @IsString({ message: 'El parametro "telefono" es de tipo string' })
    telefono: string;

    @Expose({ name: 'num_ticket' })
    @IsDefined({ message: 'El parametro "num_ticket" es Obligatorio' })
    @IsInt({ message: 'El parametro "num_ticket" es de tipo Number' })
    num_ticket: number;


    constructor(data: Partial<Visitantes>) {
        Object.assign(this, data);
        this._id = 0;
        this.nombre = "";
        this.cedula = 0;
        this.telefono = "";
        this.num_ticket = 0;
    }
}