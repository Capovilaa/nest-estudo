import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { EmployeeModule } from './employee/employee.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { LoggerPostMiddleware } from './common/middleware/logger/loggerPost.middleware';

/**
 * @description aqui é onde organizamos a aplicação, note que é bem separado entre o que é necessário, as rotas, serviços
 * e também os exports caso seja necessário (aqui não estamos usando ainda mas seria para outros módulos terem acesso ao que ocorre aqui).
 */

@Module({
  imports: [UsersModule, DatabaseModule, EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})

/**
 * @description neste mesmo arquivo é possível criar também os middlewares, que são chamados em uma lógica conforme
 * as rotas. Para isso devemos criar os middlewares em um local separado, aqui faremos apenas a conexão do middleware
 * com a rota específica.

 * @dev para ter acesso aos middlewares, precisamos herdar a classe NestModule.
 */
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // especifica qual rota será usado determinado middleware

    // nesse caso vai ser chamado toda vez que essa rota for chamada
    consumer.apply(LoggerMiddleware).forRoutes('employee');

    // aqui estou especificando o método http, para o middleware ser chamado apenas no POST
    consumer
      .apply(LoggerPostMiddleware)
      .forRoutes({ path: 'employee', method: RequestMethod.POST });
  }
}
