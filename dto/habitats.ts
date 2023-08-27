import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsString, Matches, IsInt } from 'class-validator';

export class Habitats {

    @Expose({ name: '_id' })
    @IsDefined({ message: 'El parametro "_id" es Obligatorio' })
    @IsInt({ message: 'El parametro "_id" es de tipo Number' })
    _id: number;

    @Expose({ name: 'nombre' })
    @IsDefined({ message: 'El parametro "nombre" es Obligatorio' })
    @IsString({ message: 'El parametro "nombre" es de tipo String' })
    nombre: string;

    @Expose({ name: 'id_tipo_animal' })
    @IsDefined({ message: 'El parametro "id_tipo_animal" es Obligatorio' })
    @IsInt({ message: 'El parametro "id_tipo_animal" es de tipo Number' })
    id_tipo_animal: number;

    @Expose({ name: 'capacidad' })
    @IsDefined({ message: 'El parametro "capacidad" es Obligatorio' })
    @IsInt({ message: 'El parametro "capacidad" es de tipo Number' })
    capacidad: number;

    @Expose({ name: 'dimensiones' })
    @IsDefined({ message: 'El parametro "dimensiones" es Obligatorio' })
    @IsString({ message: 'El parametro "dimensiones" es de tipo String (Numerico)' })
    dimensiones: string;

    constructor(data: Partial<Habitats>) {
        Object.assign(this, data);
        this._id = 0;
        this.nombre = "";
        this.id_tipo_animal = 0;
        this.capacidad = 0;
        this.dimensiones = "";
    }
}