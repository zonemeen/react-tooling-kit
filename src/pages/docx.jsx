import OfficeFile from '../components/OfficeFile'

export default function Docx() {
  const mimeType =
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  return <OfficeFile mimeType={mimeType} fileType="docx" />
}
