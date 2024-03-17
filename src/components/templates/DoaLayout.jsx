import React, { useState, useEffect } from 'react'
import { CardDoa } from '../molecules/card'
import { getDoa } from '../../sevices/Doa'
import { ButtomNavbar } from '../organism/ButtomNavbar'
import { DetailDoa } from '../organism/detailDoa'

export const DoaLayout = () => {
  return (
    <div>
      <DetailDoa></DetailDoa>
      <ButtomNavbar></ButtomNavbar>
    </div>
  )
}
