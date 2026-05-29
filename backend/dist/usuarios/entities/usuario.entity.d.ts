export declare enum UserRole {
    ADMIN = "admin",
    DOCENTE = "docente",
    APRENDIZ = "aprendiz"
}
export declare class Usuario {
    id: string;
    nombre: string;
    email: string;
    password?: string;
    rol: UserRole;
    ficha?: string;
    estado: boolean;
}
