import OfficeFile from '../components/OfficeFile'

export default function Pdf() {
  const mimeType = 'application/pdf'
  return <OfficeFile mimeType={mimeType} fileType="pdf" />
}
