/**
 * @dev nós podemos criar esses modelos da estrutura dos dados que vão compor a aplicação.
 * Esses ajudam para controlar os dados de entrada e de saída da aplicação.
 
 * @description assim como podemos criar esses modelos de dados, também conseguimos validá-los usando
 * class-validator e class-transformer com diversos tipos de decorators.
 */
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'], { message: 'Valid role required' })
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}
