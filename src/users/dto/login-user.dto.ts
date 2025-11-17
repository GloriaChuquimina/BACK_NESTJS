
// src/users/dto/login-user.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty({ example: 'usuario@example.com' })
  email: string;

  @ApiProperty({ example: 'password123' })
  password: string;
}
