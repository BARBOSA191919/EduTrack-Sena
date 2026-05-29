import { UsuariosService } from '../usuarios/usuarios.service';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly usuariosService;
    private readonly jwtService;
    constructor(usuariosService: UsuariosService, jwtService: JwtService);
    login(loginDto: LoginDto): {
        message: string;
        user: {
            id: string;
            nombre: string;
            email: string;
            rol: import("../usuarios/entities/usuario.entity").UserRole;
            ficha?: string;
            estado: boolean;
        };
        access_token: string;
    };
}
