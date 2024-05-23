import { Table, Column,Model,DataType} from 'sequelize-typescript'

@Table({
  tableName:'roles'
})
class Rol extends Model {
    @Column({
      type: DataType.STRING(200)
  })
  declare nombre: string
}

export default Rol