import { SystemDto} from "src/dto/systemDto";

export class IncomeDto extends SystemDto {
   incomeId: number
   incomeName: string;
   incomeMin: number;
   incomeMax: number;
}