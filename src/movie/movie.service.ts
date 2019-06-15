import { Injectable } from '@nestjs/common';

@Injectable()
export class MovieService {
    constructor (){}
    getHello(): string {
        return 'Hello World!';
      }
}
