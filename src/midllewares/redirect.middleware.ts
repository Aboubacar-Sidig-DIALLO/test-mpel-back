import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RedirectMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        if (req.url === '/') {
            res.redirect(301, '/product?page=1'); // Redirection permanente
        } else {
            next();
        }
    }
}