import { run } from 'json_typegen_wasm'
import { initializeWorkerListener } from '@/hooks/useWorker'

initializeWorkerListener((args: { input: string; options: string }) => {
  const { input, options } = args
  const result = run('Root', input, JSON.stringify(options))
  return result
})
