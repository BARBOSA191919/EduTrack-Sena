import { Injectable } from '@nestjs/common';
import { Seguimiento } from './entities/seguimiento.entity';

@Injectable()
export class SeguimientoService {
  private seguimientos: Seguimiento[] = [
    {
      id: 's1',
      aprendizId: '1', // Admin also works as test
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

  findAllByAprendiz(aprendizId: string) {
    return this.seguimientos.filter((s) => s.aprendizId === aprendizId);
  }

  findAll() {
    return this.seguimientos;
  }
}
