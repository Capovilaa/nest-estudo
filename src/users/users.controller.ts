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
import { UsersService } from './users.service';

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
  */

  // retorna todos os users
  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.usersService.findAll(role);
  }

  // retorna user por id
  // todo @Param é do tipo string, mas a função espera do tipo number. Podemos resolver isso convertendo para number usando '+id' que é chamado de Unary plus.
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  /**
   * @description rota para POST
   * @Body é tudo que vem do corpo da requisição, no caso json
   */

  // cria novo usuário
  // defini o tipo em que o user vem do body
  @Post()
  create(
    @Body()
    user: {
      name: string;
      email: string;
      role: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    return this.usersService.create(user);
  }

  /**
   * @description rota para PATCH
   * @Param qual que queremos atualizar
   * @Body é tudo que vem do corpo da requisição, no caso json
   */

  // atualiza um usuário que foi passado por parâmetro
  // defini o tipo em que o userUpdate vem do body
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    userUpdate: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    return this.usersService.update(+id, userUpdate);
  }

  /**
   * @description rota para DELETE
   * @Param qual que queremos atualizar
   */

  // deleta determinado id
  // estamos usando o Unary plus novamente
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}
