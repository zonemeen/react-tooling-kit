import html2pdf from 'html2pdf.js'
import XLSX from 'xlsx'

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

const csv2Table = (csv) => {
  let html = '<table>'
  let rows = csv.split('\n')
  rows.pop()
  rows.forEach(function (row, idx) {
    let columns = row.split(',')
    columns.unshift(idx + 1)
    if (idx === 0) {
      html += '<tr>'
      for (let i = 0; i < columns.length; i++) {
        html +=
          '<th>' + (i === 0 ? '' : String.fromCharCode(65 + i - 1)) + '</th>'
      }
      html += '</tr>'
    }
    html += '<tr>'
    columns.forEach((column) => {
      html += '<td>' + column + '</td>'
    })
    html += '</tr>'
  })
  html += '</table>'
  return html
}

export const readWorkbook = (workbook) => {
  const sheetNames = workbook.SheetNames
  const worksheet = workbook.Sheets[sheetNames[0]]
  const csv = XLSX.utils.sheet_to_csv(worksheet)
  const html = csv2Table(csv)
  const opt = {
    margin: 1,
    image: { type: 'jpeg', quality: 1 },
    jsPDF: { unit: 'cm', format: 'a4', orientation: 'p' },
  }
  return htmlToPdf(html, opt)
}
