import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsString, Matches, IsInt } from 'class-validator';

export class Areas {

    @Expose({ name: '_id' })
    @IsDefined({ message: 'El parametro "_id" es Obligatorio' })
    @IsInt({ message: 'El parametro "_id" es de tipo Number' })
    _id: number;

    @Expose({ name: 'nombre' })
    @IsDefined({ message: 'El parametro "nombre" es Obligatorio' })
    @IsString({ message: 'El parametro "nombre" es de tipo String' })
    nombre: string;

    @Expose({ name: 'descripcion' })
    @IsDefined({ message: 'El parametro "descripcion" es Obligatorio' })
    @IsString({ message: 'El parametro "descripcion" es de tipo String' })
    descripcion: string;

    @Expose({ name: 'id_encargado' })
    @IsDefined({ message: 'El parametro "id_encargado" es Obligatorio' })
    @IsInt({ message: 'El parametro "id_encargado" es de tipo Number' })
    id_encargado: number;

    constructor(data: Partial<Areas>) {
        Object.assign(this, data);
        this._id = 0;
        this.nombre = "";
        this.descripcion = "";
        this.id_encargado = 0;
    }
}