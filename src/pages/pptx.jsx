import OfficeFile from '../components/OfficeFile'

export default function Pptx() {
  const mimeType =
    'application/vnd.openxmlformats-officedocument.presentationml.presentation'
  return <OfficeFile mimeType={mimeType} fileType="pptx" />
}
