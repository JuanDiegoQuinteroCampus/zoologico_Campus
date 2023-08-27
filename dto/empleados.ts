import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsString, Matches, IsInt } from 'class-validator';

export class Empleados {

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

    @Expose({ name: 'fecha_nac' })
    @IsDefined({ message: 'El parametro "fecha_nac" es Obligatorio' })
    @IsString({ message: 'El parametro "fecha_nac" es de tipo String' })
    @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'El parametro "fecha_nac" tiene un Formato Invalido' })
    fecha_nac: Date;

    @Expose({ name: 'id_area' })
    @IsDefined({ message: 'El parametro "id_area" es Obligatorio' })
    @IsInt({ message: 'El parametro "id_area" es de tipo Number' })
    id_area: number;

    @Expose({ name: 'cargo' })
    @IsDefined({ message: 'El parametro "cargo" es Obligatorio' })
    @IsString({ message: 'El parametro "cargo" es de tipo string' })
    cargo: string;

    constructor(data: Partial<Empleados>) {
        Object.assign(this, data);
        this._id = 0;
        this.nombre = "";
        this.cedula = 0;
        this.fecha_nac = new Date();
        this.id_area = 0;
        this.cargo = "";
    }
}