import { Table, Column,Model,DataType} from 'sequelize-typescript'

@Table({
  tableName:'tiposubs'
})
class TipoSub extends Model {
    @Column({
      type: DataType.STRING(100)
  })
  declare nombre: string
    @Column({
      type: DataType.INTEGER
  })
  declare precio: number
    @Column({
      type: DataType.INTEGER
  })
  declare duracion: number
    @Column({
      type: DataType.BIGINT
  })
  declare limite: number
}

export default TipoSub