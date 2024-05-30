import request from "supertest";
import server from "../../server";

describe('POST /api/usuarios', () => {
  it('should display validation errors', async () => {
    const response = await request(server).post('/api/usuarios').send({})
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(15)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(10)
  })
  it('Should display that the nombre is not empty', async () => {
    const response = await request(server).post('/api/usuarios').send({
      nombre: '',
      apellidoP: 'Ramirez',
      apellidoM: 'Perez',
      email: 'correo@correo.com',
      telefono: 5510552055,
      password: '54f56as&'       
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(3)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(2)
  })
  it('Should display that the nombre is greather length than 2', async () => {
    const response = await request(server).post('/api/usuarios').send({
      nombre: 'Pe',
      apellidoP: 'Ramirez',
      apellidoM: 'Perez',
      email: 'correo@correo.com',
      telefono: '5510552055',
      password: '54f56as&'       
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(1)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(2)
  })
  it('Should display that the nombre is type string', async () => {
    const response = await request(server).post('/api/usuarios').send({
      nombre: 79845,
      apellidoP: 'Ramirez',
      apellidoM: 'Perez',
      email: 'correo@correo.com',
      telefono: '5510552055',
      password: '54f56as&'       
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(2)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(1)
  })
  it('Should display that the apellidoP is type string', async () => {
    const response = await request(server).post('/api/usuarios').send({
      nombre: 'Pedro',
      apellidoP: 54528785,
      apellidoM: 'Perez',
      email: 'correo@correo.com',
      telefono: '5510552055',
      password: '54f56as&'       
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(2)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(1)
  })
  it('Should display that the apellidoP is greather length than 3', async () => {
    const response = await request(server).post('/api/usuarios').send({
      nombre: 'Pedro',
      apellidoP: 'Ram',
      apellidoM: 'Perez',
      email: 'correo@correo.com',
      telefono: '5510552055',
      password: '54f56as&'       
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(1)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(2)
  })
  it('Should display that the apellidoP is not empty', async () => {
    const response = await request(server).post('/api/usuarios').send({
      nombre: 'Pedro',
      apellidoP: '',
      apellidoM: 'Perez',
      email: 'correo@correo.com',
      telefono: '5510552055',
      password: '54f56as&'       
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(2)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(3)
  })
  it('Should display that the apellidoM is not empty', async () => {
    const response = await request(server).post('/api/usuarios').send({
      nombre: 'Pedro',
      apellidoP: 'Ramirez',
      apellidoM: '',
      email: 'correo@correo.com',
      telefono: '5510552055',
      password: '54f56as&'       
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(2)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(3)
  })
  it('Should display that the apellidoM is greather length than 3', async () => {
    const response = await request(server).post('/api/usuarios').send({
      nombre: 'Pedro',
      apellidoP: 'Ramirez',
      apellidoM: 'Per',
      email: 'correo@correo.com',
      telefono: '5510552055',
      password: '54f56as&'       
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(1)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(3)
  })
  it('Should display that the apellidoM is type string', async () => {
    const response = await request(server).post('/api/usuarios').send({
      nombre: 'Pedro',
      apellidoP: 'Ramirez',
      apellidoM: 42424548,
      email: 'correo@correo.com',
      telefono: '5510552055',
      password: '54f56as&'       
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(2)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(3)
  })
  it('Should display that the email is valid email', async () => {
    const response = await request(server).post('/api/usuarios').send({
      nombre: 'Pedro',
      apellidoP: 'Ramirez',
      apellidoM: 'Perez',
      email: 'correo-correo.com',
      telefono: '5510552055',
      password: '54f56as&'       
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(1)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(3)
  })
  it('Should display that the email is not empty', async () => {
    const response = await request(server).post('/api/usuarios').send({
      nombre: 'Pedro',
      apellidoP: 'Ramirez',
      apellidoM: 'Perez',
      email: '',
      telefono: '5510552055',
      password: '54f56as&'       
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(2)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(3)
  })
  it('Should display that the telefono is not empty', async () => {
    const response = await request(server).post('/api/usuarios').send({
      nombre: 'Pedro',
      apellidoP: 'Ramirez',
      apellidoM: 'Perez',
      email: 'correo@correo.com',
      telefono: '',
      password: '54f56as&'       
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(2)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(3)
  })
  it('Should display that the telefono is length equal to 10', async () => {
    const response = await request(server).post('/api/usuarios').send({
      nombre: 'Pedro',
      apellidoP: 'Ramirez',
      apellidoM: 'Perez',
      email: 'correo@correo.com',
      telefono: '551055205',
      password: '54f56as&'       
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(1)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(3)
  })
  it('Should display that the password is length greather than to 5', async () => {
    const response = await request(server).post('/api/usuarios').send({
      nombre: 'Pedro',
      apellidoP: 'Ramirez',
      apellidoM: 'Perez',
      email: 'correo@correo.com',
      telefono: '5510552052',
      password: '54f'       
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(1)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(3)
  })
  it('Should display that the password is not empty', async () => {
    const response = await request(server).post('/api/usuarios').send({
      nombre: 'Pedro',
      apellidoP: 'Ramirez',
      apellidoM: 'Perez',
      email: 'correo@correo.com',
      telefono: '5510552052',
      password: ''       
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(2)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(3)
  })
  it('Should create a new Usuario', async () => {
    const response = await request(server).post('/api/usuarios').send({
      nombre: 'Pedro',
      apellidoP: 'Ramirez',
      apellidoM: 'Perez',
      email: 'correo@correo.com',
      telefono: '5510552052',
      password: '54f56as&'       
    })
    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty('data')

    expect(response.status).not.toBe(404)
    expect(response.status).not.toBe(202)
    expect(response.status).not.toHaveProperty('error')
  })

})