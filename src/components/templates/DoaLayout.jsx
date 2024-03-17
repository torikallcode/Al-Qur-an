import React, { useState, useEffect } from 'react'
import { CardDoa } from '../molecules/card'
import { getDoa } from '../../sevices/Doa'
import { ButtomNavbar } from '../organism/ButtomNavbar'
import { DetailDoa } from '../organism/detailDoa'

export const DoaLayout = () => {

  // const [doa, setDoa] = useState([])

  // useEffect(() => {
  //   getDoa((data) => {
  //     setDoa(data)
  //   })
  // }, [])
  // console.log(doa)

  return (
    <div>
      <DetailDoa></DetailDoa>
      <ButtomNavbar></ButtomNavbar>
    </div>
  )
}
