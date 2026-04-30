import services from '../../data/services.json'
import { writeFileSync } from 'fs'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  body.id = Date.now() 

  services.push(body)
  writeFileSync('server/data/services.json', JSON.stringify(services, null, 2))

  return body
})
