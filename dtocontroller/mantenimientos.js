var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from 'class-transformer';
import { IsDefined, IsString, Matches, IsInt } from 'class-validator';
export class Mantenimientos {
    constructor(data) {
        Object.assign(this, data);
        this._id = 0;
        this.id_area = 0;
        this.fecha_mantenimiento = new Date();
        this.descripcion = "";
        this.id_responsable = 0;
    }
}
__decorate([
    Expose({ name: '_id' }),
    IsDefined({ message: 'El parametro "_id" es Obligatorio' }),
    IsInt({ message: 'El parametro "_id" es de tipo Number' }),
    __metadata("design:type", Number)
], Mantenimientos.prototype, "_id", void 0);
__decorate([
    Expose({ name: 'id_area' }),
    IsDefined({ message: 'El parametro "id_area" es Obligatorio' }),
    IsInt({ message: 'El parametro "id_area" es de tipo Number' }),
    __metadata("design:type", Number)
], Mantenimientos.prototype, "id_area", void 0);
__decorate([
    Expose({ name: 'fecha_mantenimiento' }),
    IsDefined({ message: 'El parametro "fecha_mantenimiento" es Obligatorio' }),
    IsString({ message: 'El parametro "fecha_mantenimiento" es de tipo String' }),
    Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'El parametro "fecha_mantenimiento" tiene un Formato Invalido' }),
    __metadata("design:type", Date)
], Mantenimientos.prototype, "fecha_mantenimiento", void 0);
__decorate([
    Expose({ name: 'descripcion' }),
    IsDefined({ message: 'El parametro "descripcion" es Obligatorio' }),
    IsString({ message: 'El parametro "descripcion" es de tipo string' }),
    __metadata("design:type", String)
], Mantenimientos.prototype, "descripcion", void 0);
__decorate([
    Expose({ name: 'id_responsable' }),
    IsDefined({ message: 'El parametro "id_responsable" es Obligatorio' }),
    IsInt({ message: 'El parametro "id_responsable" es de tipo Number' }),
    __metadata("design:type", Number)
], Mantenimientos.prototype, "id_responsable", void 0);
