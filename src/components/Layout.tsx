import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Sidebar } from './Sidebar'
import { tools } from '@/tools'

interface LayoutProps {
  children: JSX.Element | JSX.Element[]
  title?: string
}
export const Layout = ({ children, title }: LayoutProps) => {
  const router = useRouter()
  const tool = React.useMemo(
    () => tools.find((t) => t.path[0].link === router.asPath),
    [router.asPath]
  )
  const documentTitle = title || (tool && tool.title)

  return (
    <>
      <Head>
        <title>
          {documentTitle ? `${documentTitle} - Tooling Kit` : `Tooling Kit`}
        </title>
        <meta
          name="description"
          content="All the tools you need in one place!"
        />
      </Head>
      <div className="bg-gray-50 pt-12 md:pt-0">
        <Sidebar />
        <main className="flex-1 md:ml-72 min-h-screen">{children}</main>
      </div>
    </>
  )
}
