import { CreateFichaDto } from './dto/create-ficha.dto';
import { UpdateFichaDto } from './dto/update-ficha.dto';
export declare class FichasService {
    create(createFichaDto: CreateFichaDto): string;
    findAll(): {
        id: number;
        codigo: string;
        programa: string;
    }[];
    findOne(id: number): string;
    update(id: number, updateFichaDto: UpdateFichaDto): string;
    remove(id: number): string;
}
