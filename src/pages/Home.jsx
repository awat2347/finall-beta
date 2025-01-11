import React from 'react'
import About from '../components/About/About'
import Our_service from '../components/About/our_service/our_service'
import RecentArticles from '../components/RecentArticles/RecentArticles'
import Footer from '../components/Footer/Footer'
import Contact from '../components/Contact_Us/Contact'
import Touch from '../components/Touch/Touch'


const Home = () => {
  return (
    <>

   
    <About/>
    <Our_service/>
    <RecentArticles/>
    <Contact/>
    <Touch/>
    <Footer/>

    </>
  )
}

export default Home