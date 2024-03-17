import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDetailDoa } from '../../../sevices/Doa'
import { BackSvg } from '../../atoms/BackSvg'

export const DetailDoa = () => {
  const { id } = useParams()
  const [doa, setDoa] = useState([])

  useEffect(() => {
    getDetailDoa(id, (data) => {
      setDoa(data)
    })
  }, [id])
  console.log(doa)

  return (
    <div className='w-full flex justify-center items-center'>
      {doa ? (
        <div key={doa.id} className='flex flex-col justify-center items-center gap-y-3 w-full h-[100dvh]'>
          <div className='w-full bg-primary py-5 px-2 fixed top-0'>
            <button className='absolute top-4 left-3  w-9 h-9' onClick={() => window.history.back()}>
              <BackSvg className="w-full h-full" warna={'#EEEEEE'}></BackSvg>
            </button>
            <h1 className='text-center font-inter text-lg font-semibold text-putih uppercase'>{doa.judul}</h1>
          </div>
          <div className='px-4 max-w-xl flex flex-col justify-center items-center gap-y-2'>
            <h1 className='text-center font-utama text-5xl'>{doa.arab}</h1>
            <h1 className='font-inter text-center text-sm mb-5'>({doa.latin})</h1>
            <h1 className='font-inter text-center font-medium'>terjemahan : <br /> "{doa.terjemah}"</h1>
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-center items-center h-[50vh]">
          <span className="loading loading-infinity loading-lg"></span>
        </div>
      )}
    </div>
  )
}
