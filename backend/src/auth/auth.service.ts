import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usuariosService: UsuariosService) {}

  login(loginDto: LoginDto) {
    const usuario = this.usuariosService.findByEmail(loginDto.email);
    if (!usuario || usuario.password !== loginDto.password) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const { password, ...result } = usuario;
    return {
      message: 'Login exitoso',
      user: result,
      access_token: 'mock-jwt-token-for-evidence', // In a real app, use @nestjs/jwt
    };
  }
}
