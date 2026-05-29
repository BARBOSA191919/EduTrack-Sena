import { Controller, Get, UseGuards, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FichasService } from './fichas.service';
import { CreateFichaDto } from './dto/create-ficha.dto';
import { UpdateFichaDto } from './dto/update-ficha.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth/jwt-auth.guard';


@Controller('fichas')
@UseGuards(JwtAuthGuard)
export class FichasController {
  constructor(private readonly fichasService: FichasService) {}

  @Get()
  findAll() {
    return this.fichasService.findAll();
  }

  @Post()
  create(@Body() createFichaDto: CreateFichaDto) {
    return this.fichasService.create(createFichaDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fichasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFichaDto: UpdateFichaDto) {
    return this.fichasService.update(+id, updateFichaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fichasService.remove(+id);
  }
}
