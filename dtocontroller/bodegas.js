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
export class Bodegas {
    constructor(data) {
        Object.assign(this, data);
        this._id = 0;
        this.nombre = "";
        this.descripcion = "";
        this.contenido = "";
        this.fecha_revision = new Date();
    }
}
__decorate([
    Expose({ name: '_id' }),
    IsDefined({ message: 'El parametro "_id" es Obligatorio' }),
    IsInt({ message: 'El parametro "_id" es de tipo Number' }),
    __metadata("design:type", Number)
], Bodegas.prototype, "_id", void 0);
__decorate([
    Expose({ name: 'nombre' }),
    IsDefined({ message: 'El parametro "nombre" es Obligatorio' }),
    IsString({ message: 'El parametro "nombre" es de tipo string' }),
    __metadata("design:type", String)
], Bodegas.prototype, "nombre", void 0);
__decorate([
    Expose({ name: 'descripcion' }),
    IsDefined({ message: 'El parametro "descripcion" es Obligatorio' }),
    IsString({ message: 'El parametro "descripcion" es de tipo string' }),
    __metadata("design:type", String)
], Bodegas.prototype, "descripcion", void 0);
__decorate([
    Expose({ name: 'contenido' }),
    IsDefined({ message: 'El parametro "contenido" es Obligatorio' }),
    IsString({ message: 'El parametro "contenido" es de tipo string' }),
    __metadata("design:type", String)
], Bodegas.prototype, "contenido", void 0);
__decorate([
    Expose({ name: 'fecha_revision' }),
    IsDefined({ message: 'El parametro "fecha_revision" es Obligatorio' }),
    IsString({ message: 'El parametro "fecha_revision" es de tipo String' }),
    Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'El parametro "fecha_revision" tiene un Formato Invalido' }),
    __metadata("design:type", Date)
], Bodegas.prototype, "fecha_revision", void 0);
