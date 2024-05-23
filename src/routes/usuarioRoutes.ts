import { Router } from "express";
import {  getUsuarios, getUsuarioById,createUsuario} from '../handlers/usuario'
import { body, param } from "express-validator";
import { handleInputErrors } from "../middleware";


const routerUser = Router()

routerUser.get('/',
  getUsuarios
)
routerUser.get('/:id',
  param('id').isInt().withMessage('ID no Válido'),
  handleInputErrors,
  getUsuarioById
)
routerUser.post('/',
  body('nombre')
    .isEmpty().withMessage('El nombre no puede ir vacio')
    .isString().withMessage('Agrega un nombre Valido')
    .custom(value => value.length > 2).withMessage('El nombre es muy corto'),
  body('email')
    .isEmpty().withMessage('El email es Necesario')
    .isEmail().withMessage('Se requiere un Email Valido'),
  body('password')
    .isEmpty().withMessage('El password no puede ir vacio')
)
export default routerUser