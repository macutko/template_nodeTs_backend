import * as dummyService from '../../../services/dummy';
import {NextFunction, Request, Response} from 'express';
import {logger} from '../../../util/logger';

export function dummyRequest(req: Request, res: Response, next: NextFunction): void {
    dummyService.dummyRequest()
        .then((dummyInfo) => {
            res.status(200).json({dummyInfo});
        })
        .catch((err) => {
            logger.error(err.message);
            err.data && err.data.statusCode ? res.sendStatus(err.data.statusCode) : res.sendStatus(500);
            next();
        });
}
