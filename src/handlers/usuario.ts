import { Request, Response } from "express"
import Usuario from "../models/Usuario.model"

export const getUsuarios = async (req: Request, res: Response) => {
 try {
  const usuarios = await Usuario.findAll({
    // order:[
    //   ['id','ASC']
    // ]
    
  })
  res.json({data: usuarios})
 } catch (error) {
  console.log(error)
 }
}
export const getUsuarioById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const usuario = await Usuario.findByPk(id)
    if(!usuario){
      return res.status(404).json({
        error: 'Usuario No Encontrado'
      });
        
    }
    res.json({data: usuario})
  } catch (error) {
   console.log(error)
  }
 }

export const createUsuario = async (req: Request, res: Response) => {
  try {
    const usuario = await Usuario.create(req.body)
    res.status(201).json({data: usuario})
  } catch (error) {
    console.log(error)
  }
}

export const updateUsuario = async  (req: Request, res: Response) => {
  const { id } = req.params
    const usuario = await Usuario.findByPk(id)
    if(!usuario){
      return res.status(404).json({
        error: 'Usuario No Encontrada'
      });
        
    }
    //Actualizar
    await usuario.update(req.body)
    await usuario.save()
    console.log(req.body)
    res.json({data: usuario})
}

// export const updatePublicado = async  (req: Request, res: Response) => {
//   const { id } = req.params
//     const usuario = await Usuario.findByPk(id)
//     if(!usuario){
//       return res.status(404).json({
//         error: 'Usuarioo No Encontrado'
//       });
//     }
//     //Actualizar
//     usuario.publicado = !usuario.dataValues.publicado
//     await usuario.save()
//     console.log()
//     res.json({data: usuario})
// }

export const deleteUsuario = async  (req: Request, res: Response) => {
  const { id } = req.params
    const usuario = await Usuario.findByPk(id)
    if(!usuario){
      return res.status(404).json({
        error: 'Usuarioo No Encontrado'
      });        
    }
    await usuario.destroy()
    res.json({data: 'Usuarioo Eliminado' })
}