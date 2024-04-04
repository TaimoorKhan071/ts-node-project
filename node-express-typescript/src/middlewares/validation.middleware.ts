import { NextFunction , Request, Response} from "express";
import { z } from "zod";

export function validator(schema: z.ZodObject<any, any>) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
        res.json({
            error
        })
    }
  };
}
