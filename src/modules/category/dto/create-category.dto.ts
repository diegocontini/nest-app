export class CreateCategoryDto {
  id: number;
  name: string;
  constructor(name: string) {
    this.name = name;
  }

}
