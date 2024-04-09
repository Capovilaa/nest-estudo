import { Injectable, NestMiddleware } from '@nestjs/common';

/**
 * @description isso aqui é um middleware, ele será executado nas chamadas de cada rota especificiada
 * no arquivo app.module.
  
 * @dev todos middlewares precisam herdar a classe NestMiddleware.
 * Eu criei esse arquivo com o seguinte comando: nest g mi common/middleware/logger --no-spec --no-flat.
 */

@Injectable()
export class LoggerPostMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log(
      'Isso é um middleware chamado apenas pelo post na rota employee, request ... ',
      new Date().toDateString(),
    );

    // aqui que ele prossegue para os próximos middlewares na pilha, ou para os serviços em si.
    next();
  }
}
