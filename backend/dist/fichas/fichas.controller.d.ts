import { FichasService } from './fichas.service';
import { CreateFichaDto } from './dto/create-ficha.dto';
import { UpdateFichaDto } from './dto/update-ficha.dto';
export declare class FichasController {
    private readonly fichasService;
    constructor(fichasService: FichasService);
    findAll(): {
        id: number;
        codigo: string;
        programa: string;
    }[];
    create(createFichaDto: CreateFichaDto): string;
    findOne(id: string): string;
    update(id: string, updateFichaDto: UpdateFichaDto): string;
    remove(id: string): string;
}
