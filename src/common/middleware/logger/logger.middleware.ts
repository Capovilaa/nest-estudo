import { Injectable, NestMiddleware } from '@nestjs/common';

/**
 * @description isso aqui é um middleware, ele será executado nas chamadas de cada rota especificiada
 * no arquivo app.module.
  
 * @dev todos middlewares precisam herdar a classe NestMiddleware.
 * Eu criei esse arquivo com o seguinte comando: nest g mi common/middleware/logger --no-spec --no-flat.
 */

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log(
      'Isso é um middleware, request ... ',
      new Date().toDateString(),
    );
    next();
  }
}
