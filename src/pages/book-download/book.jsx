import React, { useState } from 'react'
import { Layout } from '@/components/Layout'
import { Column, TwoColumns } from '@/components/TwoColumns'
import { list } from '@/assets/bookList/list.js'
import axios from 'axios'
import { saveAs } from 'file-saver'

export default function Zip() {
  const [editions, setEditions] = useState(null)
  const download = async ({ name }) => {
    const { default: src } = await import(`@/assets/bookList/${name}`)
    const { data } = await axios.get(src, {
      responseType: 'blob',
    })
    saveAs(data, name)
  }
  return (
    <Layout>
      <TwoColumns>
        <Column title="BookList">
          <div className="grid md:grid-cols-1 max-w-screen-lg">
            {list.map((item) => {
              return (
                <div
                  className="border rounded-lg p-3 font-bold hover:bg-zinc-100 cursor-pointer"
                  key={item.name}
                  onClick={() => setEditions(item.editions)}
                >
                  {item.name}
                </div>
              )
            })}
          </div>
        </Column>
        <Column title="Download">
          <div>
            <div className="grid md:grid-cols-3 gap-5">
              {editions &&
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
            </div>
          </div>
        </Column>
      </TwoColumns>
    </Layout>
  )
}
