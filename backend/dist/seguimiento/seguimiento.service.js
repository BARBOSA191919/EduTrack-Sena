"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeguimientoService = void 0;
const common_1 = require("@nestjs/common");
let SeguimientoService = class SeguimientoService {
    seguimientos = [
        {
            id: 's1',
            aprendizId: '1',
            competencia: 'Desarrollo de Software',
            avance: 75,
            estado: 'En proceso',
            fechaUltimaActualizacion: new Date().toISOString(),
        },
        {
            id: 's2',
            aprendizId: '1',
            competencia: 'Servicios en la Nube',
            avance: 100,
            estado: 'Aprobado',
            fechaUltimaActualizacion: new Date().toISOString(),
        },
    ];
    findAllByAprendiz(aprendizId) {
        return this.seguimientos.filter((s) => s.aprendizId === aprendizId);
    }
    findAll() {
        return this.seguimientos;
    }
};
exports.SeguimientoService = SeguimientoService;
exports.SeguimientoService = SeguimientoService = __decorate([
    (0, common_1.Injectable)()
], SeguimientoService);
//# sourceMappingURL=seguimiento.service.js.map