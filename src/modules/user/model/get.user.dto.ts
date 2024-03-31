import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";


export class GetUserDTO {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  login: string;
  @ApiProperty()
  password: string;
  constructor({ id: pId }: { id: number }) {}
}
