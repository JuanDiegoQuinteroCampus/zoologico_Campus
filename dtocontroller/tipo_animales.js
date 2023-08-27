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
export class TipoAnimales {
    constructor(data) {
        Object.assign(this, data);
        this._id = 0;
        this.nombre = "";
        this.especie = "";
        this.descripcion = "";
        this.comportamiento = "";
        this.conservacion = "";
    }
}
__decorate([
    Expose({ name: '_id' }),
    IsDefined({ message: 'El parametro "_id" es Obligatorio' }),
    IsInt({ message: 'El parametro "_id" es de tipo Number' }),
    __metadata("design:type", Number)
], TipoAnimales.prototype, "_id", void 0);
__decorate([
    Expose({ name: 'nombre' }),
    IsDefined({ message: 'El parametro "nombre" es Obligatorio' }),
    IsString({ message: 'El parametro "nombre" es de tipo String' }),
    __metadata("design:type", String)
], TipoAnimales.prototype, "nombre", void 0);
__decorate([
    Expose({ name: 'especie' }),
    IsDefined({ message: 'El parametro "especie" es Obligatorio' }),
    IsString({ message: 'El parametro "especie" es de tipo String' }),
    __metadata("design:type", String)
], TipoAnimales.prototype, "especie", void 0);
__decorate([
    Expose({ name: 'descripcion' }),
    IsDefined({ message: 'El parametro "descripcion" es Obligatorio' }),
    IsString({ message: 'El parametro "descripcion" es de tipo String' }),
    __metadata("design:type", String)
], TipoAnimales.prototype, "descripcion", void 0);
__decorate([
    Expose({ name: 'comportamiento' }),
    IsDefined({ message: 'El parametro "comportamiento" es Obligatorio' }),
    IsString({ message: 'El parametro "comportamiento" es de tipo String' }),
    __metadata("design:type", String)
], TipoAnimales.prototype, "comportamiento", void 0);
__decorate([
    Expose({ name: 'conservacion' }),
    IsDefined({ message: 'El parametro "conservacion" es Obligatorio' }),
    IsString({ message: 'El parametro "conservacion" es de tipo String' }),
    __metadata("design:type", String)
], TipoAnimales.prototype, "conservacion", void 0);
