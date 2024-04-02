import { Controller, Get, Param } from '@nestjs/common';

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
 * esses que precisam ser tipados 
 */

  // retorna todos os users
  @Get()
  findAll() {
    return [];
  }

  // retorna user por id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }
}
