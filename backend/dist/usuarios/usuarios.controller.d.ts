import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    create(createUsuarioDto: CreateUsuarioDto): {
        id: string;
        nombre: string;
        email: string;
        rol: import("./entities/usuario.entity").UserRole;
        ficha?: string;
        estado: boolean;
    };
    findAll(): {
        id: string;
        nombre: string;
        email: string;
        rol: import("./entities/usuario.entity").UserRole;
        ficha?: string;
        estado: boolean;
    }[];
    findOne(id: string): {
        id: string;
        nombre: string;
        email: string;
        rol: import("./entities/usuario.entity").UserRole;
        ficha?: string;
        estado: boolean;
    };
    update(id: string, updateUsuarioDto: UpdateUsuarioDto): {
        id: string;
        nombre: string;
        email: string;
        rol: import("./entities/usuario.entity").UserRole;
        ficha?: string;
        estado: boolean;
    };
    remove(id: string): {
        message: string;
    };
}
