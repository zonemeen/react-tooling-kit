export const readText = async (buffer: BlobPart) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (loadEvent) => resolve(loadEvent.target!.result)
    reader.onerror = (e) => reject(e)
    reader.readAsText(new Blob([buffer]), 'utf-8')
  })
}
