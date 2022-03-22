import XLSX from 'xlsx'
import xlsxStyle from '../utils/xlsxStyle'

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
  html += xlsxStyle
  return html
}

export const workbookToHtml = (workbook) => {
  const sheetNames = workbook.SheetNames
  const worksheet = workbook.Sheets[sheetNames[0]]
  const csv = XLSX.utils.sheet_to_csv(worksheet)
  return csv2Table(csv)
}

export const readText = async (buffer) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (loadEvent) => resolve(loadEvent.target.result)
    reader.onerror = (e) => reject(e)
    reader.readAsText(new Blob([buffer]), 'utf-8')
  })
}
