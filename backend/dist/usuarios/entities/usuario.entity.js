"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = exports.UserRole = void 0;
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["DOCENTE"] = "docente";
    UserRole["APRENDIZ"] = "aprendiz";
})(UserRole || (exports.UserRole = UserRole = {}));
class Usuario {
    id;
    nombre;
    email;
    password;
    rol;
    ficha;
    estado;
}
exports.Usuario = Usuario;
//# sourceMappingURL=usuario.entity.js.map