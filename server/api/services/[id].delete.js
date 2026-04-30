import services from '../../data/services.json'
import { writeFileSync } from 'fs'
import { getRouterParams } from 'h3'

export default defineEventHandler((event) => {
  const { id } = getRouterParams(event)
  const numericId = Number(id)

  const index = services.findIndex(s => s.id === numericId)
  if (index === -1) {
    return { error: "Service not found" }
  }

 
  services[index].status = "disabled"

 
  writeFileSync('server/data/services.json', JSON.stringify(services, null, 2))

  return { success: true, service: services[index] }
})
