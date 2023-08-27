import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsString, Matches, IsInt } from 'class-validator';

export class Bodegas {

    @Expose({ name: '_id' })
    @IsDefined({ message: 'El parametro "_id" es Obligatorio' })
    @IsInt({ message: 'El parametro "_id" es de tipo Number' })
    _id: number;

    @Expose({ name: 'nombre' })
    @IsDefined({ message: 'El parametro "nombre" es Obligatorio' })
    @IsString({ message: 'El parametro "nombre" es de tipo string' })
    nombre: string;

    @Expose({ name: 'descripcion' })
    @IsDefined({ message: 'El parametro "descripcion" es Obligatorio' })
    @IsString({ message: 'El parametro "descripcion" es de tipo string' })
    descripcion: string;

    @Expose({ name: 'contenido' })
    @IsDefined({ message: 'El parametro "contenido" es Obligatorio' })
    @IsString({ message: 'El parametro "contenido" es de tipo string' })
    contenido: string;

    @Expose({ name: 'fecha_revision' })
    @IsDefined({ message: 'El parametro "fecha_revision" es Obligatorio' })
    @IsString({ message: 'El parametro "fecha_revision" es de tipo String' })
    @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'El parametro "fecha_revision" tiene un Formato Invalido' })
    fecha_revision: Date;

    constructor(data: Partial<Bodegas>) {
        Object.assign(this, data);
        this._id = 0;
        this.nombre = "";
        this.descripcion = "";
        this.contenido = "";
        this.fecha_revision = new Date();
    }
}