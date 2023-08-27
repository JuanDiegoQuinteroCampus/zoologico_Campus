import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsString, Matches, IsInt } from 'class-validator';

export class Incidentes {

    @Expose({ name: '_id' })
    @IsDefined({ message: 'El parametro "_id" es Obligatorio' })
    @IsInt({ message: 'El parametro "_id" es de tipo Number' })
    _id: number;

    @Expose({ name: 'id_area' })
    @IsDefined({ message: 'El parametro "id_area" es Obligatorio' })
    @IsInt({ message: 'El parametro "id_area" es de tipo Number' })
    id_area: number;

    @Expose({ name: 'fecha_incidente' })
    @IsDefined({ message: 'El parametro "fecha_incidente" es Obligatorio' })
    @IsString({ message: 'El parametro "fecha_incidente" es de tipo String' })
    @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'El parametro "fecha_incidente" tiene un Formato Invalido' })
    fecha_incidente: Date;

    @Expose({ name: 'descripcion' })
    @IsDefined({ message: 'El parametro "descripcion" es Obligatorio' })
    @IsString({ message: 'El parametro "descripcion" es de tipo string' })
    descripcion: string;

    constructor(data: Partial<Incidentes>) {
        Object.assign(this, data);
        this._id = 0;
        this.id_area = 0;
        this.fecha_incidente = new Date();
        this.descripcion = "";
    }
}