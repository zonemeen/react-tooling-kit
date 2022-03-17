import NotOfficeFile from '../components/NotOfficeFile'

export default function Docx() {
  const mimeType = 'image/*'
  return <NotOfficeFile mimeType={mimeType} fileType="photo" />
}
