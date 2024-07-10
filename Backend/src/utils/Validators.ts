import { body,ValidationChain, validationResult } from 'express-validator'
import { Request,Response,NextFunction } from 'express'

export const SignupValidator = [
    body('name').isString().isLength({ min: 5 }).withMessage('Name must be at least 5 characters long'),
    body('email').isEmail().withMessage('Email is mandatory'),
    body('password').isString().isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
]

export const LoginValidator = [
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').isString().isLength({ min: 8 }).withMessage('Password is not valid')
]

export const validateUser = (validators:ValidationChain[]) => {
    return async (req:Request,res:Response,next:NextFunction) => {
        for (let validator of validators) {
            const result = await validator.run(req);
            if (!result.isEmpty()) {
                break;
            }
        }
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
        return res.status(400).json({ errors: errors.array() });
    }
}