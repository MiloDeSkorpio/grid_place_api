import { Table, Column,Model,DataType, Default} from 'sequelize-typescript'

@Table({
    tableName:'usuarios'
})

class Usuario extends Model {
    @Column({
        type: DataType.STRING(100)
    })
    declare nombre: string
    @Column({
        type: DataType.STRING   
    })
    declare email: string

    @Column({
        type: DataType.STRING
   })
   declare password: string
    @Column({
        type: DataType.STRING
   })
   declare imgPerfil: string
    @Column({
        type: DataType.STRING
   })
   declare token: string
    @Column({
        type: DataType.BOOLEAN
   })
   declare confirmado: boolean
    @Column({
        type: DataType.INTEGER
   })
   declare rolId: number
    @Column({
        type: DataType.INTEGER
   })
   declare prueba: number
}

export default Usuario
