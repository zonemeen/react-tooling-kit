import React, { useState } from 'react'
import clsx from 'clsx'
import { Layout } from '@/components/Layout'
import { Column, TwoColumns } from '@/components/TwoColumns'
import { BackButton, DownloadButton } from '@/components/Button'
import Viewer from '@/components/Viewer'
import { bookList } from '@/utils/bookList'

interface EditionType {
  lang: string
  name: string
}
interface ResultType {
  src: string
  name: string
}

export default function Zip() {
  const [editions, setEditions] = useState<EditionType[] | null>(null)
  const [curIndex, setCurIndex] = useState<number | null>(null)
  const [result, setResult] = useState<ResultType | null>(null)
  const handleClick = (
    item: { title?: string; editions: EditionType[] },
    index: number
  ) => {
    setEditions(item.editions)
    setCurIndex(index)
  }
  const handlePreview = async ({ name }: EditionType) => {
    const { default: src } = await import(`@/assets/bookList/${name}`)
    setResult({ src, name })
  }
  return (
    <Layout>
      <TwoColumns>
        <Column
          title="BookList"
          renderRight={
            editions
              ? () => (
                  <BackButton
                    onClick={() => {
                      setEditions(null)
                      setResult(null)
                    }}
                  />
                )
              : undefined
          }
        >
          {editions ? (
            <div className="grid md:grid-cols-3 gap-5">
              {editions &&
                editions.map((item) => {
                  return (
                    <a
                      className="text-blue-600 underline cursor-pointer"
                      key={item.lang}
                      onClick={() => handlePreview(item)}
                    >
                      {item.lang}
                    </a>
                  )
                })}
            </div>
          ) : (
            <div className="grid md:grid-cols-1 gap-4 max-w-screen-lg">
              {bookList.map((item, index) => {
                return (
                  <div
                    className={clsx(
                      `border rounded-lg p-3 font-bold cursor-pointer`,
                      curIndex === index && `bg-light-blue text-white`
                    )}
                    key={item.title}
                    onClick={() => handleClick(item, index)}
                  >
                    {item.title}
                  </div>
                )
              })}
            </div>
          )}
        </Column>
        <Column
          title="Result"
          renderRight={
            result ? () => <DownloadButton fileName={result.name} /> : undefined
          }
        >
          {result && (
            <Viewer
              className="w-full"
              style={{ height: 'calc(100vh - 100px)' }}
              fileType="pdf"
              src={result.src}
            />
          )}
        </Column>
      </TwoColumns>
    </Layout>
  )
}
