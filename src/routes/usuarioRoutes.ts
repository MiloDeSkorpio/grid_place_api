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
    .notEmpty().withMessage('El nombre no puede ir vacio')
    .isString().withMessage('Agrega un nombre Valido')
    .custom(value => value.length > 2).withMessage('El nombre es muy corto'),
  body('apellidoP')
    .notEmpty().withMessage('El Apellido Paterno no puede ir vacio')
    .isString().withMessage('Agrega un Apellido Paterno Valido')
    .custom(value => value.length > 3).withMessage('El Apellido Paterno es muy corto'),
  body('apellidoM')
    .notEmpty().withMessage('El Apellido Materno no puede ir vacio')
    .isString().withMessage('Agrega un Apellido Materno Valido')
    .custom(value => value.length > 3).withMessage('El Apellido Materno es muy corto'),
  body('email')
    .notEmpty().withMessage('El email es Necesario')
    .isEmail().withMessage('Se requiere un Email Valido'),
  body('telefono')
    .notEmpty().withMessage('El telefono es Necesario')
    .custom( value => value.length > 9 && value.length < 11).withMessage('Se requiere un telefono Valido'),
  body('password')
    .notEmpty().withMessage('El password no puede ir vacio')
    .custom( value => value.length > 5).withMessage('Se requiere un Password con una longitud de 6 caracteres o mayor'),
  handleInputErrors,
  createUsuario
)
export default routerUser