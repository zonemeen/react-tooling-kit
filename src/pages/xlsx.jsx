import OfficeFile from '../components/OfficeFile'

export default function Xlsx() {
  const mimeType =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  return <OfficeFile mimeType={mimeType} fileType="xlsx" />
}
