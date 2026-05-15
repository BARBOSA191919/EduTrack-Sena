import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario, UserRole } from './entities/usuario.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsuariosService {
  // Simulamos una base de datos en memoria usando un array.
  // Más adelante reemplazaremos esto con TypeORM y PostgreSQL.
  private usuarios: Usuario[] = [
    {
      id: '1',
      nombre: 'Admin EduTrack',
      email: 'admin@sena.edu.co',
      password: 'admin123', // Contraseña quemada para pruebas
      rol: UserRole.ADMIN,
      estado: true,
    },
  ];

  // Método para crear un nuevo usuario (Ej: Aprendiz)
  create(createUsuarioDto: CreateUsuarioDto) {
    const nuevoUsuario: Usuario = {
      // Generamos un ID único usando la librería uuid
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      id: uuidv4() as string,
      ...createUsuarioDto,
      estado: true, // Por defecto el usuario se crea activo
    };

    this.usuarios.push(nuevoUsuario); // Guardamos en nuestro array (nuestra BD temporal)

    // Extraemos la contraseña para no devolverla en la respuesta (por seguridad)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = nuevoUsuario;
    return result;
  }

  // Método para listar todos los usuarios
  findAll() {
    // Mapeamos el array para quitar la contraseña de cada usuario antes de enviarlos
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return this.usuarios.map(({ password, ...rest }) => rest);
  }

  // Método para buscar un usuario por su ID
  findOne(id: string) {
    const usuario = this.usuarios.find((u) => u.id === id);
    if (!usuario) throw new NotFoundException('Usuario no encontrado');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = usuario;
    return result;
  }

  // Método auxiliar usado por el AuthService para validar credenciales
  findByEmail(email: string) {
    return this.usuarios.find((u) => u.email === email);
  }

  // Método para actualizar datos de un usuario
  update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    const index = this.usuarios.findIndex((u) => u.id === id);
    if (index === -1) throw new NotFoundException('Usuario no encontrado');

    // Actualizamos solo los campos que vengan en el DTO
    this.usuarios[index] = { ...this.usuarios[index], ...updateUsuarioDto };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = this.usuarios[index];
    return result;
  }

  // Método para eliminar un usuario (en memoria)
  remove(id: string) {
    const index = this.usuarios.findIndex((u) => u.id === id);
    if (index === -1) throw new NotFoundException('Usuario no encontrado');

    this.usuarios.splice(index, 1); // Lo borramos del array
    return { message: 'Usuario eliminado correctamente' };
  }
}
