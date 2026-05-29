import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  // Inyectamos el servicio de usuarios para poder buscar el usuario que intenta hacer login
  constructor(private readonly usuariosService: UsuariosService) {}

  // Método de login
  login(loginDto: LoginDto) {
    // 1. Buscamos el usuario por su correo
    const usuario = this.usuariosService.findByEmail(loginDto.email);

    // 2. Validamos que el usuario exista y que la contraseña coincida
    if (!usuario || usuario.password !== loginDto.password) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    // 3. Extraemos la contraseña para no devolverla por seguridad
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = usuario;

    // 4. Retornamos el usuario y un token falso (simulado) para la evidencia
    return {
      message: 'Login exitoso',
      user: result,
      access_token: 'mock-jwt-token-for-evidence', // En una app real, usaríamos @nestjs/jwt para generar un token real
    };
  }
}
