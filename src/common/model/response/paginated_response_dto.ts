import { ApiProperty } from '@nestjs/swagger';

export class PaginatedResponseDTO<T> {
  page: number;

  limit: number;
  error: string;
  docs: Array<T>;

  constructor({
    page: pPage,
    limit: pLimit,
    error: pError,
    docs: pDocs,
  }: {
    page: number;
    limit: number;
    error: string;
    docs: Array<T>;
  }) {
    this.page = pPage;
    this.limit = pLimit;
    this.error = pError;
    this.docs = pDocs;
  }
}
