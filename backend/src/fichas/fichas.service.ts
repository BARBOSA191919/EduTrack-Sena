import { Injectable } from '@nestjs/common';
import { CreateFichaDto } from './dto/create-ficha.dto';
import { UpdateFichaDto } from './dto/update-ficha.dto';

@Injectable()
export class FichasService {
  create(createFichaDto: CreateFichaDto) {
    return 'This action adds a new ficha';
  }

  findAll() {
    return [
      { 
        "id": 1, 
        "codigo": "220501", 
        "programa": "Tecnólogo en Análisis y Desarrollo de Software" 
      },
      { 
        "id": 2, 
        "codigo": "220502", 
        "programa": "Técnico en Control de Procesos Electrónicos" 
      }
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} ficha`;
  }

  update(id: number, updateFichaDto: UpdateFichaDto) {
    return `This action updates a #${id} ficha`;
  }

  remove(id: number) {
    return `This action removes a #${id} ficha`;
  }
}
