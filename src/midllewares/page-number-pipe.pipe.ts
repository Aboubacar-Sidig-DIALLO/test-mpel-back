import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class PageNumberPipe implements PipeTransform {
  transform(value: any) {
    const page = parseInt(value, 10);
    if (isNaN(page) || page < 1) {
      throw new BadRequestException("Le numéro de page doit être un entier supérieur ou égal à 1.")
    }
    return page;
  }
}
