// book-search-parameters.dto.ts
export class BookSearchParametersDto {
  constructor(
    public titles: string[],
    public authors: string[]
  ) {}
}
