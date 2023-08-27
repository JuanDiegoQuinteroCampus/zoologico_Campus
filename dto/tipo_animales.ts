import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsString, Matches, IsInt } from 'class-validator';

export class TipoAnimales {

    @Expose({ name: '_id' })
    @IsDefined({ message: 'El parametro "_id" es Obligatorio' })
    @IsInt({ message: 'El parametro "_id" es de tipo Number' })
    _id: number;

    @Expose({ name: 'nombre' })
    @IsDefined({ message: 'El parametro "nombre" es Obligatorio' })
    @IsString({ message: 'El parametro "nombre" es de tipo String' })
    nombre: string;

    @Expose({ name: 'especie' })
    @IsDefined({ message: 'El parametro "especie" es Obligatorio' })
    @IsString({ message: 'El parametro "especie" es de tipo String' })
    especie: string;

    @Expose({ name: 'descripcion' })
    @IsDefined({ message: 'El parametro "descripcion" es Obligatorio' })
    @IsString({ message: 'El parametro "descripcion" es de tipo String' })
    descripcion: string;

    @Expose({ name: 'comportamiento' })
    @IsDefined({ message: 'El parametro "comportamiento" es Obligatorio' })
    @IsString({ message: 'El parametro "comportamiento" es de tipo String' })
    comportamiento: string;

    @Expose({ name: 'conservacion' })
    @IsDefined({ message: 'El parametro "conservacion" es Obligatorio' })
    @IsString({ message: 'El parametro "conservacion" es de tipo String' })
    conservacion: string;

    constructor(data: Partial<TipoAnimales>) {
        Object.assign(this, data);
        this._id = 0;
        this.nombre = "";
        this.especie = "";
        this.descripcion = "";
        this.comportamiento = "";
        this.conservacion = "";
    }
}