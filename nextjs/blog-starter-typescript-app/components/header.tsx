import Link from 'next/link'
import { BLOG_NAME } from '../lib/constants'

const Header = () => {
  return (
    <h2 className="text-l font-bold text-tight mb-xl mt-l">
      <Link href="/">
        <a>{BLOG_NAME}</a>
      </Link>
    </h2>
  )
}

export default Header
