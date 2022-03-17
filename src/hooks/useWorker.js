import mitt from 'mitt'
import { useCallback, useMemo } from 'react'

const randomId = () => Math.random().toString(36).substring(2, 15)

export const useWorker = (createWorker) => {
  const emitter = useMemo(() => mitt(), [])

  const [resolveWait, waitPromise] = useMemo(() => {
    let resolve
    const p = new Promise()((_resolve) => {
      resolve = _resolve
    })
    return [resolve, p]
  }, [])

  const worker = useMemo(() => {
    if (typeof Worker === 'undefined') {
      return null
    }
    const worker = createWorker()
    worker.onmessage = (e) => {
      const { id, result } = e.data
      if (id === 'init') {
        return resolveWait(true)
      }
      emitter.emit(id, result)
    }
    return worker
  }, [])

  const run = useCallback(
    async (args) => {
      const id = randomId()
      await waitPromise

      const result = new Promise()((resolve) => {
        emitter.on(id, (data) => {
          emitter.off(id)
          resolve(data)
        })
        worker.postMessage({ id, args })
      })

      return result
    },
    [worker]
  )

  return { run }
}

export const initializeWorkerListener = (listener) => {
  postMessage({ id: 'init' })

  onmessage = async (e) => {
    const { id, args } = e.data

    const result = await listener(args)
    postMessage({ id, result })
  }
}
