import Link from 'next/link'

export default function FourOhFour() {
  return <>
    <h1>401 - Error Occurred</h1>
    <Link href="/">
      <a>
        Go back home
      </a>
    </Link>
  </>
}