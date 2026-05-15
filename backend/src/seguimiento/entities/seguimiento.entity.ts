export class Seguimiento {
  id: string;
  aprendizId: string;
  competencia: string;
  avance: number; // 0 to 100
  estado: 'Aprobado' | 'En proceso' | 'No aprobado';
  fechaUltimaActualizacion: string;
}
