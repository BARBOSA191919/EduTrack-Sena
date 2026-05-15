import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario, UserRole } from './entities/usuario.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsuariosService {
  private usuarios: Usuario[] = [
    {
      id: '1',
      nombre: 'Admin EduTrack',
      email: 'admin@sena.edu.co',
      password: 'admin123',
      rol: UserRole.ADMIN,
      estado: true,
    },
  ];

  create(createUsuarioDto: CreateUsuarioDto) {
    const nuevoUsuario: Usuario = {
      id: uuidv4(),
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

  findOne(id: string) {
    const usuario = this.usuarios.find((u) => u.id === id);
    if (!usuario) throw new NotFoundException('Usuario no encontrado');
    const { password, ...result } = usuario;
    return result;
  }

  findByEmail(email: string) {
    return this.usuarios.find((u) => u.email === email);
  }

  update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    const index = this.usuarios.findIndex((u) => u.id === id);
    if (index === -1) throw new NotFoundException('Usuario no encontrado');
    this.usuarios[index] = { ...this.usuarios[index], ...updateUsuarioDto };
    const { password, ...result } = this.usuarios[index];
    return result;
  }

  remove(id: string) {
    const index = this.usuarios.findIndex((u) => u.id === id);
    if (index === -1) throw new NotFoundException('Usuario no encontrado');
    this.usuarios.splice(index, 1);
    return { message: 'Usuario eliminado' };
  }
}
