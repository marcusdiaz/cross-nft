import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

import Header from '../components/Header/Header'
import SectionOne from '../components/SectionOne/SectionOne'
import SectionTwo from '../components/SectionTwo/SectionTwo'

import Shop from '../components/Shop/Shop'
import Visit from '../components/Visit/Visit'
import Subscribe from '../components/Subscribe/Subscribe'


export default function Home() {
  return (
  <div className="relative min-h-screen w-screen flex flex-col items-center justify-top bg-brown"> 
    <Header/>
    <p>Home</p>
    {/*<SectionTwo/>*/}
  </div>
  )
}
