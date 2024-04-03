import { Injectable } from '@nestjs/common';

/**
 * @description esses services vão ser aplicados nos nossos controllers, aqui que estará contido a lógica
  
 * @dev visão geral dos operadores de arrays:
 * - map : varre array e retorna o mesmo tamanho
 * - filter : varre array e retorna apenas aos que satisfazem o filtro
 * - find : retorna o primeiro elemento que satisfaz o filtro, caso não encontre retorna undefined
 */

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Lucas',
      email: 'lucas@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 2,
      name: 'Alex',
      email: 'alex@gmail.com',
      role: 'INTERN',
    },
    {
      id: 3,
      name: 'Tejero',
      email: 'tejero@gmail.com',
      role: 'ENGINEER',
    },
  ];

  // encontra todos usuários que possuem a determinada role
  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  // encontra o único usuário que possui aquele id
  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  // cria novo usuário
  create(user: {
    name: string;
    email: string;
    role: 'INTERN' | 'ENGINEER' | 'ADMIN';
  }) {
    // copia users e organiza em ordem decrescente
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);

    // cria novo usuário com base no que foi passado e no novo id
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...user,
    };

    // adiciona novo usuário no json de usuários
    this.users.push(newUser);
    return newUser;
  }

  // atualiza usuário de determinado id para o que foi passado
  update(
    id: number,
    updatedUser: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    // atualiza os dados do usuário
    this.users = this.users.map((user) => {
      // encontra usuário e retorna informações antigas e atualizadas
      if (user.id === id) {
        return { ...user, ...updatedUser };
      }

      // se não encontrar
      return user;
    });

    // retorna usuário atualizado
    return this.findOne(id);
  }

  // deleta usuário com base no id dele
  delete(id: number) {
    const removeduser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removeduser;
  }
}
