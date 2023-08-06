import Link from 'next/link'

export default function FourOhFour() {
  return <>
    <h1>500 - Server Error</h1>
    <Link href="/">
      <a>
        Go back home
      </a>
    </Link>
  </>
}