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
import { IsDefined, IsString, IsInt } from 'class-validator';
export class Visitantes {
    constructor(data) {
        Object.assign(this, data);
        this._id = 0;
        this.nombre = "";
        this.cedula = 0;
        this.telefono = "";
        this.num_ticket = 0;
    }
}
__decorate([
    Expose({ name: '_id' }),
    IsDefined({ message: 'El parametro "_id" es Obligatorio' }),
    IsInt({ message: 'El parametro "_id" es de tipo Number' }),
    __metadata("design:type", Number)
], Visitantes.prototype, "_id", void 0);
__decorate([
    Expose({ name: 'nombre' }),
    IsDefined({ message: 'El parametro "nombre" es Obligatorio' }),
    IsString({ message: 'El parametro "nombre" es de tipo String' }),
    __metadata("design:type", String)
], Visitantes.prototype, "nombre", void 0);
__decorate([
    Expose({ name: 'cedula' }),
    IsDefined({ message: 'El parametro "cedula" es Obligatorio' }),
    IsInt({ message: 'El parametro "cedula" es de tipo Number' }),
    __metadata("design:type", Number)
], Visitantes.prototype, "cedula", void 0);
__decorate([
    Expose({ name: 'telefono' }),
    IsDefined({ message: 'El parametro "telefono" es Obligatorio' }),
    IsString({ message: 'El parametro "telefono" es de tipo string' }),
    __metadata("design:type", String)
], Visitantes.prototype, "telefono", void 0);
__decorate([
    Expose({ name: 'num_ticket' }),
    IsDefined({ message: 'El parametro "num_ticket" es Obligatorio' }),
    IsInt({ message: 'El parametro "num_ticket" es de tipo Number' }),
    __metadata("design:type", Number)
], Visitantes.prototype, "num_ticket", void 0);
