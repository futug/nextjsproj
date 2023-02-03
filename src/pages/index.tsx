import Head from 'next/head'
import { Header } from '../components/header/header'
import { SectionHome } from '../components/section-home/section-home'
import { SectionAbout } from '../components/section-about/section-about'
import { SectionSkills } from '../components/section-skills/section-skills'
import { SectionPortfolioMain } from '../components/section-portfolio-main/section-portfolio-main'
import { SectionContacts } from '../components/section-contacts/section-contacts'
import { Footer } from '../components/footer/footer'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
          <Head>
              <title>Create Next App</title>
              <meta name="description" content="Generated by create next app" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header></Header>
          <SectionHome></SectionHome>
          <SectionAbout></SectionAbout>
          <SectionSkills></SectionSkills>
          <SectionPortfolioMain></SectionPortfolioMain>
          <SectionContacts></SectionContacts>
          <Footer></Footer>
    </>
  )
}
