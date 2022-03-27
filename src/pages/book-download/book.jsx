import React, { useState } from 'react'
import clsx from 'clsx'
import axios from 'axios'
import { saveAs } from 'file-saver'
import { Layout } from '@/components/Layout'
import { Column, TwoColumns } from '@/components/TwoColumns'
import Loading from '@/components/Loading'
import { bookList } from '@/utils/bookList'

export default function Zip() {
  const [editions, setEditions] = useState(null)
  const [curIndex, setCurIndex] = useState(null)
  const [isDownloaded, setIsDownloaded] = useState(false)
  const download = async ({ name }) => {
    setIsDownloaded(true)
    const { default: src } = await import(`@/assets/bookList/${name}`)
    const { data } = await axios.get(src, {
      responseType: 'blob',
    })
    saveAs(data, name)
    setIsDownloaded(false)
  }
  const handleClick = ({ editions }, index) => {
    setEditions(editions)
    setCurIndex(index)
  }
  return (
    <Layout>
      <TwoColumns>
        <Column title="BookList">
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
        </Column>
        <Column title="Download">
          <div>
            <div className="grid md:grid-cols-3 gap-5">
              {!isDownloaded &&
                editions &&
                editions.map((item) => {
                  return (
                    <a
                      className="text-blue-600 underline cursor-pointer"
                      key={item.lang}
                      onClick={() => download(item)}
                    >
                      {item.lang}
                    </a>
                  )
                })}
              {isDownloaded && <Loading />}
            </div>
          </div>
        </Column>
      </TwoColumns>
    </Layout>
  )
}
