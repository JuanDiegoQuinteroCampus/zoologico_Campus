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
export class Animales {
    constructor(data) {
        Object.assign(this, data);
        this._id = 0;
        this.nombre = "";
        this.id_tipo_animal = 0;
        this.dieta = "";
        this.peso = 0;
        this.id_habitat = 0;
    }
}
__decorate([
    Expose({ name: '_id' }),
    IsDefined({ message: 'El parametro "_id" es Obligatorio' }),
    IsInt({ message: 'El parametro "_id" es de tipo Number' }),
    __metadata("design:type", Number)
], Animales.prototype, "_id", void 0);
__decorate([
    Expose({ name: 'nombre' }),
    IsDefined({ message: 'El parametro "nombre" es Obligatorio' }),
    IsString({ message: 'El parametro "nombre" es de tipo String' }),
    __metadata("design:type", String)
], Animales.prototype, "nombre", void 0);
__decorate([
    Expose({ name: 'id_tipo_animal' }),
    IsDefined({ message: 'El parametro "id_tipo_animal" es Obligatorio' }),
    IsInt({ message: 'El parametro "id_tipo_animal" es de tipo Number' }),
    __metadata("design:type", Number)
], Animales.prototype, "id_tipo_animal", void 0);
__decorate([
    Expose({ name: 'dieta' }),
    IsDefined({ message: 'El parametro "dieta" es Obligatorio' }),
    IsString({ message: 'El parametro "dieta" es de tipo String' }),
    __metadata("design:type", String)
], Animales.prototype, "dieta", void 0);
__decorate([
    Expose({ name: 'peso' }),
    IsDefined({ message: 'El parametro "peso" es Obligatorio' }),
    IsInt({ message: 'El parametro "peso" es de tipo Number' }),
    __metadata("design:type", Number)
], Animales.prototype, "peso", void 0);
__decorate([
    Expose({ name: 'id_habitat' }),
    IsDefined({ message: 'El parametro "id_habitat" es Obligatorio' }),
    IsInt({ message: 'El parametro "id_habitat" es de tipo Number' }),
    __metadata("design:type", Number)
], Animales.prototype, "id_habitat", void 0);
