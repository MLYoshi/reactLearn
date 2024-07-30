import React from 'react'
import Hero from '../components/Hero'
import HomeCard from '../components/HomCard'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const homepage = () => {
  return (
    <>
      <Hero title="i am title" subtitle='wo shi sub' />
      <HomeCard/>
      <JobListings/>
      <ViewAllJobs/>
    </>
  )
}

export default homepage