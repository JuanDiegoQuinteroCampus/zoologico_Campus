import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsString, Matches, IsInt } from 'class-validator';

export class Mantenimientos {

    @Expose({ name: '_id' })
    @IsDefined({ message: 'El parametro "_id" es Obligatorio' })
    @IsInt({ message: 'El parametro "_id" es de tipo Number' })
    _id: number;

    @Expose({ name: 'id_area' })
    @IsDefined({ message: 'El parametro "id_area" es Obligatorio' })
    @IsInt({ message: 'El parametro "id_area" es de tipo Number' })
    id_area: number;

    @Expose({ name: 'fecha_mantenimiento' })
    @IsDefined({ message: 'El parametro "fecha_mantenimiento" es Obligatorio' })
    @IsString({ message: 'El parametro "fecha_mantenimiento" es de tipo String' })
    @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'El parametro "fecha_mantenimiento" tiene un Formato Invalido' })
    fecha_mantenimiento: Date;

    @Expose({ name: 'descripcion' })
    @IsDefined({ message: 'El parametro "descripcion" es Obligatorio' })
    @IsString({ message: 'El parametro "descripcion" es de tipo string' })
    descripcion: string;

    @Expose({ name: 'id_responsable' })
    @IsDefined({ message: 'El parametro "id_responsable" es Obligatorio' })
    @IsInt({ message: 'El parametro "id_responsable" es de tipo Number' })
    id_responsable: number;

    constructor(data: Partial<Mantenimientos>) {
        Object.assign(this, data);
        this._id = 0;
        this.id_area = 0;
        this.fecha_mantenimiento = new Date();
        this.descripcion = "";
        this.id_responsable = 0;
    }
}