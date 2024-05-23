import { Table, Column,Model,DataType} from 'sequelize-typescript'

@Table({
  tableName:'categorias'
})
class Categoria extends Model {
    @Column({
      type: DataType.STRING(100)
  })
  declare nombre: string
}

export default Categoria