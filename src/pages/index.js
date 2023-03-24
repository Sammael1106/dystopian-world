import { useState, useEffect } from 'react'
import Head from 'next/head'
import ImageSlider from './components/ImageSlider'

const socials = ['instagram', 'facebook', 'youtube', 'linkedin', 'tiktok']

export default function Home() {
  const [images, setImages] = useState([])
  useEffect(
    () => {
      if (images.length === 0) {
        fetch('/api/images')
          .then((res) => res.json())
          .then((data) => {
            setImages(data)
          })
        }
      }, []
    )

  return (
    <>
      <Head>
        <title>Front-end Assignment</title>
        <meta name="description" content="An escape form a dystopian world" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>An escape from <br/> a dystopian world</h1>
        <ImageSlider images={images}/>
        <footer>
          <div>
            <h2>More about</h2>
            <div className='footerLinks'>
              <a href="www.shop.gruppemagazine.com" target='_blank' className='link'>www.shop.gruppemagazine.com</a>
              <a href="www.shop.gruppemagazine.com" target='_blank'><img src={`/icons/vector.svg`} style={{position: 'relative', inset: '5px 0 0 2px'}}/></a>
            </div>
            <div className='socialLinks'>{socials.map(link => <a key={link} href={`#${link}`} ><img src={`/icons/${link}.svg`} /></a>)}</div>
          </div>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis vehicula sapien et iaculis. Donec eu erat ipsum. Nulla lorem velit, fermentum vitae dui in, fermentum congue dolor. Vestibulum rutrum condimentum est, sed tincidunt orci egestas id.</div>
        </footer>
      </main>
    </>
  )
}
