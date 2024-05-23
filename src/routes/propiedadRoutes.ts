import { Router } from "express";
import { getPropiedades,getPropiedadById,createPropiedad, updatePropiedad, updatePublicado, deletePropiedad } from "../handlers/propiedad";
import { body, param } from "express-validator";
import { handleInputErrors } from "../middleware";



const routerProps = Router()
//Routing
routerProps.get('/',
  getPropiedades
)
routerProps.get('/:id',
  param('id').isInt().withMessage('ID no Válido'),
  handleInputErrors,
getPropiedadById
)
routerProps.post('/',
  // Validacion
  body('titulo')
    .notEmpty().withMessage('Es necesario agregar un titulo para la propiedad')
    .custom(value => value.length > 10).withMessage('El titulo es demasiado corto'),
  body('descripcion')
    .notEmpty().withMessage('Es necesario agregar una descripcion')
    .custom(value => value.length > 40).withMessage('Descripcion muy corta'),
  body('habitaciones')
    .notEmpty().withMessage('Es necesario agregar un numero de habitaciones')
    .isNumeric().withMessage('Agrega un valor valido')
    .custom(value => value > 0).withMessage('Numero de habitaciones invalido'),
    body('estacionamiento')
    .notEmpty().withMessage('Es necesario agregar un numero de espacios en estacionamiento')
    .isNumeric().withMessage('Agrega un valor valido')
    .custom(value => value > 0).withMessage('Numero de habitaciones invalido'),
    body('wc')
    .notEmpty().withMessage('Es necesario agregar un numero de wc')
    .isNumeric().withMessage('Agrega un valor valido')
    .custom(value => value > 0).withMessage('Numero de habitaciones invalido'),
  body('areac')
      .notEmpty().withMessage('Es necesario agregar el area de construccion')
      .isNumeric().withMessage('Agrega un valor valido')
      .custom(value => value > 40).withMessage('Area muy pequeña'),
  body('areat')
      .notEmpty().withMessage('Es necesario agregar el area total del terreno')
      .isNumeric().withMessage('Agrega un valor valido')
      .custom(value => value > 40).withMessage('Area muy pequeña'),
  body('precio')
      .notEmpty().withMessage('Es necesario agregar el precio')
      .isNumeric().withMessage('Agrega un valor valido')
      .custom(value => value > 1500).withMessage('Precio muy bajo'),
  body('calle')
      .notEmpty().withMessage('Es necesario agregar una calle'),
  body('lat')
      .notEmpty().withMessage('Es necesario agregar latitud'),
  body('lng')
      .notEmpty().withMessage('Es necesario agregar longitud'),
  handleInputErrors,
  createPropiedad
)
routerProps.put('/:id',
body('titulo')
.notEmpty().withMessage('Es necesario agregar un titulo para la propiedad')
.custom(value => value.length > 10).withMessage('El titulo es demasiado corto'),
body('descripcion')
.notEmpty().withMessage('Es necesario agregar una descripcion')
.custom(value => value.length > 40).withMessage('Descripcion muy corta'),
body('habitaciones')
  .notEmpty().withMessage('Es necesario agregar un numero de habitaciones')
  .isNumeric().withMessage('Agrega un valor valido'),
body('estacionamiento')
  .notEmpty().withMessage('Es necesario agregar un numero de espacios en estacionamiento')
  .isNumeric().withMessage('Agrega un valor valido'),
body('wc')
  .notEmpty().withMessage('Es necesario agregar un numero de wc')
  .isNumeric().withMessage('Agrega un valor valido'),
body('areac')
  .notEmpty().withMessage('Es necesario agregar el area de construccion')
  .isNumeric().withMessage('Agrega un valor valido')
  .custom(value => value > 40).withMessage('Area muy pequeña'),
body('areat')
  .notEmpty().withMessage('Es necesario agregar el area total del terreno')
  .isNumeric().withMessage('Agrega un valor valido')
  .custom(value => value > 40).withMessage('Area muy pequeña'),
body('precio')
  .notEmpty().withMessage('Es necesario agregar el precio')
  .isNumeric().withMessage('Agrega un valor valido')
  .custom(value => value > 1500).withMessage('Precio muy bajo'),
body('calle')
  .notEmpty().withMessage('Es necesario agregar una calle'),
body('lat')
  .notEmpty().withMessage('Es necesario agregar latitud'),
body('lng')
  .notEmpty().withMessage('Es necesario agregar longitud'),
  body('publicado')
    .isBoolean().withMessage('Valor para la disponibilidad no válido'),
  handleInputErrors,
  updatePropiedad
)
routerProps.patch('/:id',
  param('id').isInt().withMessage('ID no Válido'),
  handleInputErrors,
  updatePublicado
)
routerProps.delete('/:id',
  param('id').isInt().withMessage('ID no Válido'),
  handleInputErrors,
  deletePropiedad
)
export default routerProps