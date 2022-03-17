import Link from 'next/link'
import { Layout } from '../components/Layout'
import { files } from '../files'

export default function HomePage() {
  return (
    <Layout>
      <div className="p-5 max-w-screen-lg">
        <a
          target="_blank"
          rel="noopener nofollow"
          href="https://github.com/sponsors/zonemeen"
          className="mb-5 border-2 border-pink-400 text-pink-500 font-bold flex items-center justify-center p-5 rounded-lg text-xl space-x-2 hover:bg-pink-50"
        >
          <span>Sponsor this project on GitHub.</span>
        </a>
        <div className="bg-cyan-100 text-cyan-700 font-bold p-5 rounded-lg space-y-3">
          <p>
            File-preview is a collection of useful file-preview-tools for
            developers, it works locally mostly, no data will be uploaded to any
            server unless otherwise noted.
          </p>
          <p className="">
            I'm keeping adding new file-preview-tools to this website, you can
            also suggest ideas on{' '}
            <a
              href="https://github.com/zonemeen/react-file-preview/issues"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-5 p-5 max-w-screen-lg">
        {files.map((file) => {
          return (
            <Link href={file.link} key={file.name}>
              <a className="border rounded-lg p-5 font-bold hover:bg-zinc-100">
                {file.name}
              </a>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}
