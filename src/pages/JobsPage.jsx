import React from 'react'
import JobListings from '../components/JobListings'

const Jobs = () => {
  return (
    <section className='bg-blue-50 px-4 py-6'>
      <JobListings isAll={true} />
    </section>
  )
}

export default Jobs