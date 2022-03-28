import Link from 'next/link'
import { Layout } from '@/components/Layout'
import { tools } from '@/tools'
import React from 'react'

export default function HomePage() {
  return (
    <Layout>
      <div className="p-5 max-w-screen-lg">
        <a
          target="_blank"
          rel="noopener nofollow"
          href="https://github.com/zonemeen/react-tooling-kit"
          className="mb-5 border-2 border-blue-400 text-blue-500 font-bold flex items-center justify-center p-5 rounded-lg text-xl space-x-2 hover:bg-blue-50"
        >
          <span>View this project on GitHub.</span>
        </a>
        <div className="bg-cyan-100 text-cyan-700 font-bold p-5 rounded-lg space-y-3">
          <p>
            Tooling-kit is a collection of useful tools for developers, it works
            in pure frontend, no data will be uploaded to any server.
          </p>
          <p className="">
            I'm keeping adding new tools to this website, you can also suggest
            ideas on{' '}
            <a
              href="https://github.com/zonemeen/react-tooling-kit/issues"
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
      <div>
        {tools.map((file) => (
          <div key={file.title}>
            <div className="pl-6 text-lg text-zinc-500">{file.title}:</div>
            <div className="grid md:grid-cols-4 gap-5 p-4 max-w-screen-lg">
              {file.path.map((item) => {
                return (
                  <Link href={item.link} key={item.name}>
                    <a className="border rounded-lg p-5 font-bold hover:bg-zinc-100">
                      {item.name}
                    </a>
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}
