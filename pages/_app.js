import Link from 'next/link'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav>
        <ul className='nav'>
          <Link href={'/'}><li>Home</li></Link>
          <Link href={'/about'}><li>About</li></Link>
          <Link href={'/blog'}><li>Blog</li></Link>
          <Link href={'/contact'}><li>Contact</li></Link>
        </ul>
      </nav>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
