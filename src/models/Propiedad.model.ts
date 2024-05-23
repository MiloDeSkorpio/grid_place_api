import { Table, Column,Model,DataType,Default} from 'sequelize-typescript'

@Table({
  tableName:'propiedades'
})
class Propiedad extends Model {
    @Column({
      type: DataType.STRING(100)
  })
  declare titulo: string
    @Column({
      type: DataType.STRING(200)
  })
  declare descripcion: string
    @Column({
      type: DataType.INTEGER
  })
  declare habitaciones: number
    @Column({
      type: DataType.INTEGER
  })
  declare estacionamiento: number
    @Column({
      type: DataType.INTEGER
  })
  declare wc: number
    @Column({
      type: DataType.INTEGER
  })
  declare areac: number
    @Column({
      type: DataType.INTEGER
  })
  declare areat: number
    @Column({
      type: DataType.INTEGER
  })
  declare precio: number
    @Column({
      type: DataType.STRING(100)
  })
  declare calle: string
    @Column({
      type: DataType.STRING
  })
  declare lat: string
    @Column({
      type: DataType.STRING
  })
  declare lng: string
    @Column({
      type: DataType.ARRAY(DataType.STRING)
  })
  declare imagenes: string
  @Default(true)
    @Column({
      type: DataType.BOOLEAN
  })
  declare publicado: boolean
  @Default(false)
    @Column({
      type: DataType.BOOLEAN
  })
  declare verificado: boolean
}

export default Propiedad