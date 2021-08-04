import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BLOG_NAME } from '../lib/constants'
import { faHandPointUp } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <a className="text-l font-bold text-tight mb-xl mt-l">
      <FontAwesomeIcon icon={faHandPointUp} className="svg-l" />
      <Link href="/">
        <a className="logo">{BLOG_NAME}</a>
      </Link>
    </a>
  )
}

export default Header
