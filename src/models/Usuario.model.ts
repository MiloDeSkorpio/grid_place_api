import { Table, Column, Model, DataType, Default } from 'sequelize-typescript'

@Table({
    tableName: 'usuarios'
})

class Usuario extends Model {
    @Column({
        type: DataType.STRING
    })
    declare nombre: string
    @Column({
        type: DataType.STRING
    })
    declare apellidoP: string
    @Column({
        type: DataType.STRING
    })
    declare apellidoM: string
    @Column({
        type: DataType.STRING
    })
    declare email: string
    @Column({
        type: DataType.STRING
    })
    declare telefono: string

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
    @Default(false)
    @Column({
        type: DataType.BOOLEAN
    })
    declare confirmado: boolean
    @Default(2)
    @Column({
        type: DataType.INTEGER
    })
    declare rolId: number
    @Default(false)
    @Column({
        type: DataType.BOOLEAN
    })
    declare prueba: number
}

export default Usuario
