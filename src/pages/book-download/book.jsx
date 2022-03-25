import React from 'react'
import { Layout } from '@/components/Layout'
import { Column, TwoColumns } from '@/components/TwoColumns'
import NinjaCN from './booklist/Secrets of the JavaScript Ninja-CN.pdf'

export default function Zip() {
  console.log('NinjaCN', NinjaCN)
  return (
    <Layout>
      <TwoColumns>
        <Column title="Book Download">
          <div>Book Download</div>
        </Column>
        <Column title="Result">
          <div className="pt-4"></div>
        </Column>
      </TwoColumns>
    </Layout>
  )
}
