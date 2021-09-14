import { Viewer } from './components'

const viewer = typeof window !== 'undefined' ? Viewer : null

export default viewer
