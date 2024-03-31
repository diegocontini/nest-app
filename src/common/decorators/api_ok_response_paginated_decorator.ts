import { Type, applyDecorators } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse } from '@nestjs/swagger/dist/decorators';
import { getSchemaPath } from '@nestjs/swagger/dist/utils/get-schema-path.util';

export const ApiOkResponsePaginatedDecorator = <DataDto extends Type<unknown>>(
  dataDto: DataDto,
) =>
  applyDecorators(
    ApiExtraModels(dataDto),
    ApiOkResponse({
      schema: {
        allOf: [
          //{ $ref: getSchemaPath(PaginatedResponseDTO) },
          {
            properties: {
              page: {
                type: 'number',
              },
              limit: {
                type: 'number',
              },
              error: {
                type: 'string',
              },
              docs: {
                type: 'array',
                items: { $ref: getSchemaPath(dataDto) },
              },
            },
          },
        ],
      },
    }),
  );
