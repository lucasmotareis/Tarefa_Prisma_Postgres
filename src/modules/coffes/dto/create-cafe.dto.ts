// src/modules/coffee/dto/create-cafe.dto.ts
import { IsString, IsNumber, IsArray } from 'class-validator';

export class CreateCafeDto {
  @IsString()
  nome: string;

  @IsString()
  tipo: string;

  @IsNumber()
  precoUnitario: number;

  @IsString()
  descricao: string;

  @IsArray()
  @IsString({ each: true })
  tags: string[];
}
