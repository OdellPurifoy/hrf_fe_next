import Image from 'next/image'
import Link from "next/link"

const Lounges = () => {
  return (
    <div>
      <Link href='/'>Back Home</Link>
      <h1>Here will be a list of all lounges</h1>
      <Image src='/next.svg' alt='logo image' width={200} height={200} />
    </div>
  )
}

export default Lounges