import { Body, Controller, Get, Query, Req } from '@nestjs/common';
import { ApiOkResponsePaginatedDecorator } from 'src/common/decorators/api_ok_response_paginated_decorator';
import { GetUserDTO } from './model/get.user.dto';
import { ProdutoDTO } from 'src/dto/produto/produto_dto';

import { PaginatedResponseDTO } from 'src/dto/response/paginated_response_dto';

@Controller()
export class UserController {
  
  @Get('/v1/user')
  @ApiOkResponsePaginatedDecorator(GetUserDTO)
  async get(): Promise<GetUserDTO> {
    let user: GetUserDTO = {
      id: 1,
      name: 'bastiao',
      login: 'zedasporca',
      password: 'showdebolamarcio',
    };
    return user;
  }

  
}
