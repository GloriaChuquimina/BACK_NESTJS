import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductoDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  sigla: string;

  @IsNotEmpty()
  @IsNumber()
  precio: number;

  @IsOptional() // la imagen se asigna desde el backend
  @IsString()
  imagen?: string;
}
