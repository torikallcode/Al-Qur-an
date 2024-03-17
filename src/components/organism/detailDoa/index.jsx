import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDetailDoa } from '../../../sevices/Doa'

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
    <div>
      {doa ? (
        <div key={doa.id}>
          <h1>{doa.judul}</h1>
          <h1>{doa.latin}</h1>
          <h1>{doa.arab}</h1>
          <h1>{doa.terjemah}</h1>
        </div>
      ) : (
        <div className="w-full flex justify-center items-center h-[50vh]">
          <span className="loading loading-infinity loading-lg"></span>
        </div>
      )}
    </div>
  )
}
