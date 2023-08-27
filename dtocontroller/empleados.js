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
export class Empleados {
    constructor(data) {
        Object.assign(this, data);
        this._id = 0;
        this.nombre = "";
        this.cedula = 0;
        this.fecha_nac = new Date();
        this.id_area = 0;
        this.cargo = "";
    }
}
__decorate([
    Expose({ name: '_id' }),
    IsDefined({ message: 'El parametro "_id" es Obligatorio' }),
    IsInt({ message: 'El parametro "_id" es de tipo Number' }),
    __metadata("design:type", Number)
], Empleados.prototype, "_id", void 0);
__decorate([
    Expose({ name: 'nombre' }),
    IsDefined({ message: 'El parametro "nombre" es Obligatorio' }),
    IsString({ message: 'El parametro "nombre" es de tipo String' }),
    __metadata("design:type", String)
], Empleados.prototype, "nombre", void 0);
__decorate([
    Expose({ name: 'cedula' }),
    IsDefined({ message: 'El parametro "cedula" es Obligatorio' }),
    IsInt({ message: 'El parametro "cedula" es de tipo Number' }),
    __metadata("design:type", Number)
], Empleados.prototype, "cedula", void 0);
__decorate([
    Expose({ name: 'fecha_nac' }),
    IsDefined({ message: 'El parametro "fecha_nac" es Obligatorio' }),
    IsString({ message: 'El parametro "fecha_nac" es de tipo String' }),
    Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'El parametro "fecha_nac" tiene un Formato Invalido' }),
    __metadata("design:type", Date)
], Empleados.prototype, "fecha_nac", void 0);
__decorate([
    Expose({ name: 'id_area' }),
    IsDefined({ message: 'El parametro "id_area" es Obligatorio' }),
    IsInt({ message: 'El parametro "id_area" es de tipo Number' }),
    __metadata("design:type", Number)
], Empleados.prototype, "id_area", void 0);
__decorate([
    Expose({ name: 'cargo' }),
    IsDefined({ message: 'El parametro "cargo" es Obligatorio' }),
    IsString({ message: 'El parametro "cargo" es de tipo string' }),
    __metadata("design:type", String)
], Empleados.prototype, "cargo", void 0);
