import services from '../../data/services.json'
import { writeFileSync } from 'fs'
import { readBody, getRouterParams } from 'h3'

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)
  const numericId = Number(id)

  const body = await readBody(event)

  const index = services.findIndex(s => s.id === numericId)
  if (index === -1) return { error: "Service not found" }

 
  services[index] = { ...services[index], ...body, id: numericId }

  
  writeFileSync('server/data/services.json', JSON.stringify(services, null, 2))

  return services[index]
})
