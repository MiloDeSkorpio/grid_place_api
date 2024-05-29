import express from 'express'
import router from './routes/router'
import db from './config/db'
import colors from 'colors'
import routerProps from './routes/propiedadRoutes'
import routerUser from './routes/usuarioRoutes'
//Conexión DB
export async function connectDB(){
    try {
        await db.authenticate()
        db.sync()
        // console.log(colors.green.bold('Conexion Exitosa a DB'))
    } catch (error) {
        // console.log(error)
        console.log(colors.red.bold( 'Hubo un error al conectar a la BD'))
    }
}
connectDB ()
// Instancia de express
const server = express()
//Leer datos de formualrios
server.use(express.json())
//Routing
server.use('/api/products',router)
server.use('/api/propiedades',routerProps)
server.use('/api/usuarios',routerUser)



export default server
