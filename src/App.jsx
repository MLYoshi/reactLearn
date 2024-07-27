import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import HomCard from './components/HomCard'
import JobListings from './components/JobListings'
import ViewAllJobs from './components/ViewAllJobs'
const App = () => {
  return (
    <>
    <NavBar/>
    <Hero title='The title' subtitle ='this is sub title'/>
    <HomCard/>
    <JobListings/>
    <ViewAllJobs/>
    </>
  )
}

export default App