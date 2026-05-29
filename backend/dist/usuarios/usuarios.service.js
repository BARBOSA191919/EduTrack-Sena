"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const usuario_entity_1 = require("./entities/usuario.entity");
const uuid_1 = require("uuid");
let UsuariosService = class UsuariosService {
    usuarios = [
        {
            id: '1',
            nombre: 'Admin EduTrack',
            email: 'admin@sena.edu.co',
            password: 'admin123',
            rol: usuario_entity_1.UserRole.ADMIN,
            estado: true,
        },
    ];
    create(createUsuarioDto) {
        const nuevoUsuario = {
            id: (0, uuid_1.v4)(),
            ...createUsuarioDto,
            estado: true,
        };
        this.usuarios.push(nuevoUsuario);
        const { password, ...result } = nuevoUsuario;
        return result;
    }
    findAll() {
        return this.usuarios.map(({ password, ...rest }) => rest);
    }
    findOne(id) {
        const usuario = this.usuarios.find((u) => u.id === id);
        if (!usuario)
            throw new common_1.NotFoundException('Usuario no encontrado');
        const { password, ...result } = usuario;
        return result;
    }
    findByEmail(email) {
        return this.usuarios.find((u) => u.email === email);
    }
    update(id, updateUsuarioDto) {
        const index = this.usuarios.findIndex((u) => u.id === id);
        if (index === -1)
            throw new common_1.NotFoundException('Usuario no encontrado');
        this.usuarios[index] = { ...this.usuarios[index], ...updateUsuarioDto };
        const { password, ...result } = this.usuarios[index];
        return result;
    }
    remove(id) {
        const index = this.usuarios.findIndex((u) => u.id === id);
        if (index === -1)
            throw new common_1.NotFoundException('Usuario no encontrado');
        this.usuarios.splice(index, 1);
        return { message: 'Usuario eliminado correctamente' };
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)()
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map