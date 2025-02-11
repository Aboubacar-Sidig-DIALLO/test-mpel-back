import { ArgumentMetadata, BadRequestException, Injectable, Logger, PipeTransform } from '@nestjs/common';

@Injectable()
export class PageNumberPipe implements PipeTransform {
  private readonly logger = new Logger(PageNumberPipe.name);
  transform(value: any) {
    this.logger.debug(`Vérrification de la valeur fournie : ${value}`);
    const page = parseInt(value, 10);
    if (isNaN(page) || page < 1) {
      this.logger.warn(`Validation échouée pour la valeur : ${value}`);
      throw new BadRequestException("Le numéro de page doit être un entier supérieur ou égal à 1.")
    }
    this.logger.debug(`Valeur validée et transformée : ${page}`);
    return page;
  }
}
