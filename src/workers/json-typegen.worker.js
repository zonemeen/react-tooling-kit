import { run } from 'json_typegen_wasm'
import { initializeWorkerListener } from '../hooks/useWorker'

initializeWorkerListener((args) => {
  const { input, options } = args
  const result = run('Root', input, JSON.stringify(options))
  return result
})
