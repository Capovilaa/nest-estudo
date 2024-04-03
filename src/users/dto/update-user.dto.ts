import { CreateUserDto } from './create-user.dto';
import { PartialType } from '@nestjs/mapped-types';

/**
 * @dev classe PartialType permite usar modelos parcialmente prontos, deixando este dto mais simples.
 * Como essa é uma classe dto de update, nem todos os campos são exigidos para fazer a atualização de algum
 * registro, ou seja, podemos passar apenas o nome, email ou cargo.
 * As validações feitas previamente também são consideradas nesta classe.
 */

export class UpdateUserDto extends PartialType(CreateUserDto) {}
