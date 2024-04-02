import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

/**
 * @description esse modulo/service/controller foi criado pelo "nest g ... users",
 * ele já criou e colocou esses atributos automaticamente.
 */

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
