import services from '../../data/services.json'
import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  
  return services.filter(s => s.status !== 'disabled')
})
