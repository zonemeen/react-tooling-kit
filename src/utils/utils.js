import html2pdf from 'html2pdf.js'

const base64ToBlob = (code) => {
  const arr = code.split(',')
  const rawData = window.atob(arr[1])
  const rawLength = rawData.length
  const uInt8Array = new Uint8Array(rawLength)
  for (let i = 0; i < rawLength; i++) {
    uInt8Array[i] = rawData.charCodeAt(i)
  }
  return new Blob([uInt8Array], { type: 'application/pdf' })
}

export const htmlToPdf = async (html, opt) => {
  const pdf = html2pdf().set(opt).from(html)
  const res = await pdf.output('datauristring')
  const blob = base64ToBlob(res)
  return URL.createObjectURL(blob)
}
