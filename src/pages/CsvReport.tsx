import React from 'react'
import { Banner } from '../componets/Banner'
import { useLocation } from 'react-router-dom';

export default function CsvReport() {

  const location = useLocation()
  

  return (
    <div>
        <Banner currentPage="report" title="Feedback Report" />
        <div className='whitespace-pre-wrap p-10 mt-3 mb-6'>
          {location.state.report}
        </div>
    </div>
  )
}
