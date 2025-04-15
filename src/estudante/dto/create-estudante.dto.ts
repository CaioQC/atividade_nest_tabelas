import { isEmail, isString } from "class-validator"

export class CreateEstudanteDto {
    @isString()
    name: string

    @isEmail()
    email: string
    
    @isString()
    matricula: string
}
