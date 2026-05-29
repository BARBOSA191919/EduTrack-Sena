import { SeguimientoService } from './seguimiento.service';
export declare class SeguimientoController {
    private readonly seguimientoService;
    constructor(seguimientoService: SeguimientoService);
    findAll(): import("./entities/seguimiento.entity").Seguimiento[];
    findByAprendiz(aprendizId: string): import("./entities/seguimiento.entity").Seguimiento[];
}
