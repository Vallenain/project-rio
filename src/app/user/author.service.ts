import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {

  constructor() { }

}

export interface Author {
  name: string;
  picture: string;
  description: string;
}
