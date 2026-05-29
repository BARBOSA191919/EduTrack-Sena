import { Controller, Get, Param } from '@nestjs/common';
import { SeguimientoService } from './seguimiento.service';

@Controller('seguimiento')
export class SeguimientoController {
  constructor(private readonly seguimientoService: SeguimientoService) {}

  @Get()
  findAll() {
    return this.seguimientoService.findAll();
  }

  @Get(':aprendizId')
  findByAprendiz(@Param('aprendizId') aprendizId: string) {
    return this.seguimientoService.findAllByAprendiz(aprendizId);
  }
}
