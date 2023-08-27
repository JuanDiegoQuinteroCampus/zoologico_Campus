import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsString, Matches, IsInt } from 'class-validator';

export class Animales {

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

    @Expose({ name: 'dieta' })
    @IsDefined({ message: 'El parametro "dieta" es Obligatorio' })
    @IsString({ message: 'El parametro "dieta" es de tipo String' })
    dieta: string;

    @Expose({ name: 'peso' })
    @IsDefined({ message: 'El parametro "peso" es Obligatorio' })
    @IsInt({ message: 'El parametro "peso" es de tipo Number' })
    peso: number;

    @Expose({ name: 'id_habitat' })
    @IsDefined({ message: 'El parametro "id_habitat" es Obligatorio' })
    @IsInt({ message: 'El parametro "id_habitat" es de tipo Number' })
    id_habitat: number;

    constructor(data: Partial<Animales>) {
        Object.assign(this, data);
        this._id = 0;
        this.nombre = "";
        this.id_tipo_animal = 0;
        this.dieta = "";
        this.peso = 0;
        this.id_habitat = 0;
    }
}