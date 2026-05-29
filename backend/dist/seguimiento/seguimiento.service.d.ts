import { Seguimiento } from './entities/seguimiento.entity';
export declare class SeguimientoService {
    private seguimientos;
    findAllByAprendiz(aprendizId: string): Seguimiento[];
    findAll(): Seguimiento[];
}
