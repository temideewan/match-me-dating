import { CardBody, CardHeader, Divider } from '@nextui-org/react'
import React from 'react'

export default function page() {
  return (
    <>
    <CardHeader className='text-2xl font-semibold text-secondary-700'>
        Chat
      </CardHeader>
      <Divider />
      <CardBody>Chatting happens here</CardBody></>
  )
}
