"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFichaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_ficha_dto_1 = require("./create-ficha.dto");
class UpdateFichaDto extends (0, mapped_types_1.PartialType)(create_ficha_dto_1.CreateFichaDto) {
}
exports.UpdateFichaDto = UpdateFichaDto;
//# sourceMappingURL=update-ficha.dto.js.map