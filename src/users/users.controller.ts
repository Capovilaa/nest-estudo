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
  // retorna todos os users
  @Get()
  findAll() {
    return [];
  }

  // exemplo de que 'interns' entraria na função abaixo que espera o id
  @Get('interns')
  findAllInterns() {
    return [];
  }

  // retorna user por id
  // @Param pega os parâmetros que vieram por parâmetros, é necessário
  // tipar o mesmo
  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }
}
