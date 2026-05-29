import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt'; // 1. <-- NUEVO IMPORT

@Injectable()
export class AuthService {
  // 2. <-- Inyectamos el JwtService en el constructor
  constructor(
    private readonly usuariosService: UsuariosService,
    private readonly jwtService: JwtService 
  ) {}

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

    // Creamos el "payload" (la información pública que irá dentro del token)
    // Nota: 'result.id' depende de cómo se llame el ID en tu entidad de usuario
    const payload = { sub: result.id, email: result.email };

    // 4. Retornamos el usuario y el token REAL firmado
    return {
      message: 'Login exitoso',
      user: result,
      // Usamos el servicio para firmar el token con tu clave 'admin123'
      access_token: this.jwtService.sign(payload), 
    };
  }
}
