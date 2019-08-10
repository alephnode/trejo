import {Request, Response} from 'express';

/**
 * Home controller
 */
export const home = (req: Request, res: Response) => res.send('Trejo API - make it happen 💥');
