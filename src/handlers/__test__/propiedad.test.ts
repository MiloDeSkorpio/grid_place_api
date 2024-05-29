import request from "supertest";
import server from "../../server";

describe('POST /api/propiedades', () => {
  it('should display validation errors', async () => {
    const response = await request(server).post('/api/propiedades').send({})
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(25)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(2)
  })
  it('should display that the titulo is not empty', async () => {
    const response = await request(server).post('/api/propiedades').send({
      titulo: '',
      descripcion:'Es una pequeña casa de cmapo muy comoda con las habitaciones necesarias para pasar un fin de semana agradable.',
      habitaciones: 2,
      estacionamiento: 2,
      wc: 1,
      areac: 41,
      areat: 42,
      precio: 1700,
      calle: 'Los Remedios',
      lat: 19.31855286,
      lng: -99.4116723
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(2)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(3)
  })
  it('should display that the titulo is length than 10', async () => {
    const response = await request(server).post('/api/propiedades').send({
      titulo: 'La Casa',
      descripcion:'Es una pequeña casa de cmapo muy comoda con las habitaciones necesarias para pasar un fin de semana agradable.',
      habitaciones: 2,
      estacionamiento: 2,
      wc: 1,
      areac: 41,
      areat: 42,
      precio: 1700,
      calle: 'Los Remedios',
      lat: 19.31855286,
      lng: -99.4116723
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(1)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(3)
  })
  it('should display that the description is more length than 40', async () => {
    const response = await request(server).post('/api/propiedades').send({
      titulo: 'La Casa de Campo',
      descripcion:'Es una pequeña casa ',
      habitaciones: 2,
      estacionamiento: 2,
      wc: 1,
      areac: 41,
      areat: 42,
      precio: 1700,
      calle: 'Los Remedios',
      lat: 19.31855286,
      lng: -99.4116723
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(1)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(3)
  })
  it('should display that the description is not empty', async () => {
    const response = await request(server).post('/api/propiedades').send({
      titulo: 'La Casa de Campo',
      descripcion:'',
      habitaciones: 2,
      estacionamiento: 2,
      wc: 1,
      areac: 41,
      areat: 42,
      precio: 1700,
      calle: 'Los Remedios',
      lat: 19.31855286,
      lng: -99.4116723
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(2)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(3)
  })
  it('should display that the habitaciones is not empty', async () => {
    const response = await request(server).post('/api/propiedades').send({
      titulo: 'La Casa de Campo',
      descripcion:'Es una pequeña casa de cmapo muy comoda con las habitaciones necesarias para pasar un fin de semana agradable.',
      habitaciones: '',
      estacionamiento: 2,
      wc: 1,
      areac: 41,
      areat: 42,
      precio: 1700,
      calle: 'Los Remedios',
      lat: 19.31855286,
      lng: -99.4116723
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(3)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(2)
  })
  it('should display that the habitaciones is greater than 0 ', async () => {
    const response = await request(server).post('/api/propiedades').send({
      titulo: 'La Casa de Campo',
      descripcion:'Es una pequeña casa de cmapo muy comoda con las habitaciones necesarias para pasar un fin de semana agradable.',
      habitaciones: 0,
      estacionamiento: 2,
      wc: 1,
      areac: 41,
      areat: 42,
      precio: 1700,
      calle: 'Los Remedios',
      lat: 19.31855286,
      lng: -99.4116723
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(1)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(2)
  })
  it('should display that the habitaciones is numeric ', async () => {
    const response = await request(server).post('/api/propiedades').send({
      titulo: 'La Casa de Campo',
      descripcion:'Es una pequeña casa de cmapo muy comoda con las habitaciones necesarias para pasar un fin de semana agradable.',
      habitaciones: 'a',
      estacionamiento: 2,
      wc: 1,
      areac: 41,
      areat: 42,
      precio: 1700,
      calle: 'Los Remedios',
      lat: 19.31855286,
      lng: -99.4116723
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(2)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(3)
  })
  it('should display that the estacionamiento is numeric ', async () => {
    const response = await request(server).post('/api/propiedades').send({
      titulo: 'La Casa de Campo',
      descripcion:'Es una pequeña casa de cmapo muy comoda con las habitaciones necesarias para pasar un fin de semana agradable.',
      habitaciones: 3,
      estacionamiento: 'b',
      wc: 1,
      areac: 41,
      areat: 42,
      precio: 1700,
      calle: 'Los Remedios',
      lat: 19.31855286,
      lng: -99.4116723
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(2)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(3)
  })
  it('should display that the estacionamiento is anumber greather than 0', async () => {
    const response = await request(server).post('/api/propiedades').send({
      titulo: 'La Casa de Campo',
      descripcion:'Es una pequeña casa de cmapo muy comoda con las habitaciones necesarias para pasar un fin de semana agradable.',
      habitaciones: 3,
      estacionamiento: 0,
      wc: 1,
      areac: 41,
      areat: 42,
      precio: 1700,
      calle: 'Los Remedios',
      lat: 19.31855286,
      lng: -99.4116723
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(1)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(3)
  })
  it('should display that the estacionamiento is empty', async () => {
    const response = await request(server).post('/api/propiedades').send({
      titulo: 'La Casa de Campo',
      descripcion:'Es una pequeña casa de cmapo muy comoda con las habitaciones necesarias para pasar un fin de semana agradable.',
      habitaciones: 3,
      estacionamiento: '',
      wc: 1,
      areac: 41,
      areat: 42,
      precio: 1700,
      calle: 'Los Remedios',
      lat: 19.31855286,
      lng: -99.4116723
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(3)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(2)
  })
  it('should display that the wc is empty', async () => {
    const response = await request(server).post('/api/propiedades').send({
      titulo: 'La Casa de Campo',
      descripcion:'Es una pequeña casa de cmapo muy comoda con las habitaciones necesarias para pasar un fin de semana agradable.',
      habitaciones: 3,
      estacionamiento: 2,
      wc: '',
      areac: 41,
      areat: 42,
      precio: 1700,
      calle: 'Los Remedios',
      lat: 19.31855286,
      lng: -99.4116723
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(3)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(2)
  })
  it('should display that the wc is a number greather than 0', async () => {
    const response = await request(server).post('/api/propiedades').send({
      titulo: 'La Casa de Campo',
      descripcion:'Es una pequeña casa de cmapo muy comoda con las habitaciones necesarias para pasar un fin de semana agradable.',
      habitaciones: 3,
      estacionamiento: 2,
      wc: 0,
      areac: 41,
      areat: 42,
      precio: 1700,
      calle: 'Los Remedios',
      lat: 19.31855286,
      lng: -99.4116723
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(1)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(2)
  })
  it('should display that the wc is a number', async () => {
    const response = await request(server).post('/api/propiedades').send({
      titulo: 'La Casa de Campo',
      descripcion:'Es una pequeña casa de cmapo muy comoda con las habitaciones necesarias para pasar un fin de semana agradable.',
      habitaciones: 3,
      estacionamiento: 2,
      wc: 'r',
      areac: 41,
      areat: 42,
      precio: 1700,
      calle: 'Los Remedios',
      lat: 19.31855286,
      lng: -99.4116723
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(2)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(4)
  })
  it('should display that the areac is a number', async () => {
    const response = await request(server).post('/api/propiedades').send({
      titulo: 'La Casa de Campo',
      descripcion:'Es una pequeña casa de cmapo muy comoda con las habitaciones necesarias para pasar un fin de semana agradable.',
      habitaciones: 3,
      estacionamiento: 2,
      wc: 2,
      areac: 'bv',
      areat: 42,
      precio: 1700,
      calle: 'Los Remedios',
      lat: 19.31855286,
      lng: -99.4116723
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(2)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(4)
  })
  it('should display that the areac is a numbber greather than 40', async () => {
    const response = await request(server).post('/api/propiedades').send({
      titulo: 'La Casa de Campo',
      descripcion:'Es una pequeña casa de cmapo muy comoda con las habitaciones necesarias para pasar un fin de semana agradable.',
      habitaciones: 3,
      estacionamiento: 2,
      wc: 2,
      areac: 40,
      areat: 42,
      precio: 1700,
      calle: 'Los Remedios',
      lat: 19.31855286,
      lng: -99.4116723
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(1)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(4)
  })
  it('should display that the areac is not empty', async () => {
    const response = await request(server).post('/api/propiedades').send({
      titulo: 'La Casa de Campo',
      descripcion:'Es una pequeña casa de cmapo muy comoda con las habitaciones necesarias para pasar un fin de semana agradable.',
      habitaciones: 3,
      estacionamiento: 2,
      wc: 2,
      areac: '',
      areat: 42,
      precio: 1700,
      calle: 'Los Remedios',
      lat: 19.31855286,
      lng: -99.4116723
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(3)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(4)
  })
  it('should display that the areat is a number', async () => {
    const response = await request(server).post('/api/propiedades').send({
      titulo: 'La Casa de Campo',
      descripcion:'Es una pequeña casa de cmapo muy comoda con las habitaciones necesarias para pasar un fin de semana agradable.',
      habitaciones: 3,
      estacionamiento: 2,
      wc: 2,
      areac: 41,
      areat: 'bh',
      precio: 1700,
      calle: 'Los Remedios',
      lat: 19.31855286,
      lng: -99.4116723
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(2)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(4)
  })
  it('should display that the areat is a numbber greather than 40', async () => {
    const response = await request(server).post('/api/propiedades').send({
      titulo: 'La Casa de Campo',
      descripcion:'Es una pequeña casa de cmapo muy comoda con las habitaciones necesarias para pasar un fin de semana agradable.',
      habitaciones: 3,
      estacionamiento: 2,
      wc: 2,
      areac: 42,
      areat: 40,
      precio: 1700,
      calle: 'Los Remedios',
      lat: 19.31855286,
      lng: -99.4116723
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(1)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(4)
  })
  it('should display that the areat is not empty', async () => {
    const response = await request(server).post('/api/propiedades').send({
      titulo: 'La Casa de Campo',
      descripcion:'Es una pequeña casa de cmapo muy comoda con las habitaciones necesarias para pasar un fin de semana agradable.',
      habitaciones: 3,
      estacionamiento: 2,
      wc: 2,
      areac: 43,
      areat: '',
      precio: 1700,
      calle: 'Los Remedios',
      lat: 19.31855286,
      lng: -99.4116723
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(3)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(4)
  })
  it('should display that the precio is not empty', async () => {
    const response = await request(server).post('/api/propiedades').send({
      titulo: 'La Casa de Campo',
      descripcion:'Es una pequeña casa de cmapo muy comoda con las habitaciones necesarias para pasar un fin de semana agradable.',
      habitaciones: 3,
      estacionamiento: 2,
      wc: 2,
      areac: 43,
      areat: 44,
      precio: '',
      calle: 'Los Remedios',
      lat: 19.31855286,
      lng: -99.4116723
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(3)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(4)
  })
  it('should display that the precio is numeric', async () => {
    const response = await request(server).post('/api/propiedades').send({
      titulo: 'La Casa de Campo',
      descripcion:'Es una pequeña casa de cmapo muy comoda con las habitaciones necesarias para pasar un fin de semana agradable.',
      habitaciones: 3,
      estacionamiento: 2,
      wc: 2,
      areac: 43,
      areat: 44,
      precio: '6df3',
      calle: 'Los Remedios',
      lat: 19.31855286,
      lng: -99.4116723
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(2)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(4)
  })
  it('should display that the precio is greather  than 1500', async () => {
    const response = await request(server).post('/api/propiedades').send({
      titulo: 'La Casa de Campo',
      descripcion:'Es una pequeña casa de cmapo muy comoda con las habitaciones necesarias para pasar un fin de semana agradable.',
      habitaciones: 3,
      estacionamiento: 2,
      wc: 2,
      areac: 43,
      areat: 44,
      precio: 999,
      calle: 'Los Remedios',
      lat: 19.31855286,
      lng: -99.4116723
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(1)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(4)
  })
  it('should display that the calle is not empty', async () => {
    const response = await request(server).post('/api/propiedades').send({
      titulo: 'La Casa de Campo',
      descripcion:'Es una pequeña casa de cmapo muy comoda con las habitaciones necesarias para pasar un fin de semana agradable.',
      habitaciones: 3,
      estacionamiento: 2,
      wc: 2,
      areac: 43,
      areat: 44,
      precio: 1700,
      calle: '',
      lat: 19.31855286,
      lng: -99.4116723
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(1)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(4)
  })
  it('should display that the lat is not empty', async () => {
    const response = await request(server).post('/api/propiedades').send({
      titulo: 'La Casa de Campo',
      descripcion:'Es una pequeña casa de cmapo muy comoda con las habitaciones necesarias para pasar un fin de semana agradable.',
      habitaciones: 3,
      estacionamiento: 2,
      wc: 2,
      areac: 43,
      areat: 44,
      precio: 1700,
      calle: 'Las Flores',
      lat: '',
      lng: -99.4116723
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(1)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(4)
  })
  it('should display that the lng is not empty', async () => {
    const response = await request(server).post('/api/propiedades').send({
      titulo: 'La Casa de Campo',
      descripcion:'Es una pequeña casa de cmapo muy comoda con las habitaciones necesarias para pasar un fin de semana agradable.',
      habitaciones: 3,
      estacionamiento: 2,
      wc: 2,
      areac: 43,
      areat: 44,
      precio: 1700,
      calle: 'Las Flores',
      lat: 19.31855286,
      lng: ''
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors).toHaveLength(1)

    expect(response.status).not.toBe(404)
    expect(response.body.errors).not.toHaveLength(4)
  })
  it('should create a new propiedad', async () => {
    const response = await request(server).post('/api/propiedades').send({
      titulo: 'La Casa de Campo',
      descripcion:'Es una pequeña casa de cmapo muy comoda con las habitaciones necesarias para pasar un fin de semana agradable.',
      habitaciones: 3,
      estacionamiento: 2,
      wc: 2,
      areac: 43,
      areat: 44,
      precio: 1700,
      calle: 'Las Flores',
      lat: 19.31855286,
      lng: -99.4116723,
      
    })
    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty('data')

    expect(response.status).not.toBe(404)
    expect(response.status).not.toBe(202)
    expect(response.status).not.toHaveProperty('error')

  })

})