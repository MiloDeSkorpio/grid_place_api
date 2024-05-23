import { Request, Response } from "express"
import Propiedad from "../models/Propiedad.model"

export const getPropiedades = async (req: Request, res: Response) => {
 try {
  const propiedades = await Propiedad.findAll({
    // order:[
    //   ['id','ASC']
    // ]
    
  })
  res.json({data: propiedades})
 } catch (error) {
  console.log(error)
 }
}
export const getPropiedadById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const propiedad = await Propiedad.findByPk(id)
    if(!propiedad){
      return res.status(404).json({
        error: 'Propiedado No Encontrado'
      });
        
    }
    res.json({data: propiedad})
  } catch (error) {
   console.log(error)
  }
 }

export const createPropiedad = async (req: Request, res: Response) => {
  try {
    const propiedad = await Propiedad.create(req.body)
    res.status(201).json({data: propiedad})
  } catch (error) {
    console.log(error)
  }
}

export const updatePropiedad = async  (req: Request, res: Response) => {
  const { id } = req.params
    const propiedad = await Propiedad.findByPk(id)
    if(!propiedad){
      return res.status(404).json({
        error: 'Propiedad No Encontrada'
      });
        
    }
    //Actualizar
    await propiedad.update(req.body)
    await propiedad.save()
    console.log(req.body)
    res.json({data: propiedad})
}

export const updatePublicado = async  (req: Request, res: Response) => {
  const { id } = req.params
    const propiedad = await Propiedad.findByPk(id)
    if(!propiedad){
      return res.status(404).json({
        error: 'Propiedado No Encontrado'
      });
    }
    //Actualizar
    propiedad.publicado = !propiedad.dataValues.publicado
    await propiedad.save()
    console.log()
    res.json({data: propiedad})
}

export const deletePropiedad = async  (req: Request, res: Response) => {
  const { id } = req.params
    const propiedad = await Propiedad.findByPk(id)
    if(!propiedad){
      return res.status(404).json({
        error: 'Propiedado No Encontrado'
      });        
    }
    await propiedad.destroy()
    res.json({data: 'Propiedado Eliminado' })
}