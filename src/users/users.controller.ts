import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

/**
 * @description controllers são as rotas que a aplicação vai chamar pelo front para acessar os métodos HTTP.
 *
 * @dev a ordem em que os métodos são criados pode influenciar no desenvolvimento, pois uma mesma rota pode corresponder para outra.
 * Se tiver uma rota dinâmica, o parâmetro pode acabar sendo qualquer valor, mesmo algum inesperado.
 */

@Controller('users')
export class UsersController {
  // cria a instância da classe de services, isso é uma injeção
  constructor(private readonly usersService: UsersService) {}

  /**
  * @description rotas para GET
   
  * @Params é bem usado para pegar os dados que vêm por parâmetro, esses que precisam ser tipados.
  
  * @Query permite passar 'variáveis' pela url, tendo um nome e um valor,sendo reconhecido por '?', essa query precisa ser definida e
  * tipada pelo typescript. Podemos passar ainda um sinal de '?' em sua definição para dizer que não é um campo obrigatório.
  
  * @dev ParseIntPipe deixar que os @Param apenas recebam números, este retorna um erro caso não seja um tipo permitido
  */

  // retorna todos os users
  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.usersService.findAll(role);
  }

  // retorna user por id
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  /**
   * @description rota para POST
   * @Body é tudo que vem do corpo da requisição, no caso json
   */

  // cria novo usuário
  // defini o tipo em que o user vem do body
  @Post()
  create(
    @Body(ValidationPipe)
    createUserDto: CreateUserDto,
  ) {
    return this.usersService.create(createUserDto);
  }

  /**
   * @description rota para PATCH
   * @Param qual que queremos atualizar
   * @Body é tudo que vem do corpo da requisição, no caso json
   */

  // atualiza um usuário que foi passado por parâmetro
  // defini o tipo em que o updateUserDto vem do body
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe)
    updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  /**
   * @description rota para DELETE
   * @Param qual que queremos atualizar
   */

  // deleta determinado id
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }
}
