import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
