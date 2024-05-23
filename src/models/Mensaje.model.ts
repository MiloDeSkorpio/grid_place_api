import { Table, Column,Model,DataType} from 'sequelize-typescript'

@Table({
  tableName:'mensajes'
})
class Mensaje extends Model {
    @Column({
      type: DataType.STRING(200)
  })
  declare mensaje: string
}

export default Mensaje