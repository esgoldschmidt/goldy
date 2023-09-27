'use client';
import React from 'react'
import { Spinner } from 'flowbite-react';

type Props = {}

function Loader({}: Props) {
  return (
    <div className='w-full justify-center h-48 items-center'>
        <Spinner aria-label="Default status example" color="warning" />
    </div>
  )
}

export default Loader