import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

/**
 * @description controllers são as rotas que a aplicação vai chamar pelo front
 * para acessar os métodos HTTP.
 *
 * @dev a ordem em que os métodos são criados pode influenciar no desenvolvimento,
 * pois uma mesma rota pode corresponder para outra. Se tiver uma rota dinâmica, o
 * parâmetro pode acabar sendo qualquer valor, mesmo algum inesperado
 */

@Controller('users')
export class UsersController {
  /**
  * @description rotas para GET
   
  * @Params é bem usado para pegar os dados que vêm por parâmetro,
  * esses que precisam ser tipados .
  
  * @Query permite passar 'variáveis' pela url, tendo um nome e um valor,
  sendo reconhecido por '?', essa query precisa ser definida e tipada pelo typescript.
  Podemos passar ainda um sinal de '?' em sua definição para dizer que não é um campo
  obrigatório.
  */

  // retorna todos os users
  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return [];
  }

  // retorna user por id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  /**
   * @description rota para POST
   * @Body é tudo que vem do corpo da requisição, no caso json
   */

  // cria novo usuário
  @Post()
  create(@Body() user: {}) {
    return user;
  }

  /**
   * @description rota para PATCH
   * @Param qual que queremos atualizar
   * @Body é tudo que vem do corpo da requisição, no caso json
   */

  // atualiza um usuário que foi passado por parâmetro
  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  /**
   * @description rota para DELETE
   * @Param qual que queremos atualizar
   */

  // deleta determinado id
  @Delete(':id')
  delete(@Param('id') id: string) {
    return { id };
  }
}
