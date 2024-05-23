import { Table, Column,Model,DataType, Default} from 'sequelize-typescript'


@Table({
  tableName:'estados'
})
class Estado extends Model {
  @Column({
    type:DataType.STRING(60)
  })
  declare nombre: string
  @Column({
    type:DataType.STRING(60)
  })
  declare lat: string
  @Column({
    type:DataType.STRING(60)
  })
  declare lng: string
  @Column({
    type:DataType.STRING(60)
  })
  declare zoom: string

}

export default Estado