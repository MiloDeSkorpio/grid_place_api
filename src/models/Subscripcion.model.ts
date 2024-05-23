import { Table, Column,Model,DataType} from 'sequelize-typescript'

@Table({
  tableName:'subscripciones'
})
class Subscripcion extends Model {
    @Column({
      type: DataType.DATE
  })
  declare endSub: string
}

export default Subscripcion