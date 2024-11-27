import { Spinner } from '@nextui-org/react'
import React from 'react'

export default function loading() {
  return (
    <div className="flex justify-center vertical-center">
      <Spinner label="Loading...." color='default' />
    </div>
  )
}
