import { Injectable, Logger, UnauthorizedException, ExecutionContext, CanActivate } from '@nestjs/common';

@Injectable()
export class AdminGuard implements CanActivate {
  private readonly logger = new Logger(AdminGuard.name); // Crée une instance de Logger

  canActivate(
    context: ExecutionContext,
  ): boolean {
    const request = context.switchToHttp().getRequest();
    const isAdmin = request.headers.isadmin; // Récupère le header isAdmin

    // Log pour vérifier la présence du header isAdmin
    this.logger.log(`Checking admin access for request to ${request.url}`);
    this.logger.debug(`Headers - IsAdmin: ${JSON.stringify(request.headers.isadmin)}`); // Log le header IsAdmin pour le débogage

    if (!isAdmin) {
      this.logger.warn(`Access denied for non-admin user. Headers: ${JSON.stringify(request.headers)}`); // Log d'avertissement
      throw new UnauthorizedException('Access denied for non-admin users');
    }

    this.logger.log(`Admin access granted for request to ${request.url}`); // Log de succès
    return true;
  }
}