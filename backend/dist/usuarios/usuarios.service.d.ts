import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario, UserRole } from './entities/usuario.entity';
export declare class UsuariosService {
    private usuarios;
    create(createUsuarioDto: CreateUsuarioDto): {
        id: string;
        nombre: string;
        email: string;
        rol: UserRole;
        ficha?: string;
        estado: boolean;
    };
    findAll(): {
        id: string;
        nombre: string;
        email: string;
        rol: UserRole;
        ficha?: string;
        estado: boolean;
    }[];
    findOne(id: string): {
        id: string;
        nombre: string;
        email: string;
        rol: UserRole;
        ficha?: string;
        estado: boolean;
    };
    findByEmail(email: string): Usuario | undefined;
    update(id: string, updateUsuarioDto: UpdateUsuarioDto): {
        id: string;
        nombre: string;
        email: string;
        rol: UserRole;
        ficha?: string;
        estado: boolean;
    };
    remove(id: string): {
        message: string;
    };
}
