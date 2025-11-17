import { PartialType } from "@nestjs/swagger";
import { createPuntoVentaDto } from "./create-puntoventa-dto";

export class UpdatePuntoVentaDto extends PartialType(createPuntoVentaDto) {}   