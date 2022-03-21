import React from 'react'
import { Sidebar } from './Sidebar'
import Head from 'next/head'
import { files } from '../files'
import { useRouter } from 'next/router'

export const Layout = ({ children, title }) => {
  const router = useRouter()
  const file = React.useMemo(
    () => files.find((t) => t.link === router.asPath),
    [router.asPath]
  )

  const documentTitle = title || (file && file.name)

  return (
    <>
      <Head>
        <title>
          {documentTitle ? `${documentTitle} - Tooling Kit` : `Tooling Kit`}
        </title>
        <meta
          name="description"
          content="All the files you need in one place!"
        />
      </Head>
      <div className="bg-gray-50 pt-12 md:pt-0">
        <Sidebar />
        <main className="flex-1 md:ml-72 min-h-screen">{children}</main>
      </div>
    </>
  )
}