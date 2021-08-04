import { BLOG_NAME } from '../lib/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Intro = () => {
  return (
    <section className="">
      <h1 className="title text-xl font-bold text-center leading-tight mt-l">
        {BLOG_NAME}
      </h1>

      <h5 className="text-center">
        マルタ島は最高
      </h5>

      <div className="py-m svg-center mb-l">
        <div className="mx-s">
          <FontAwesomeIcon icon={faGithub} size="sm" />
        </div>
        <div className="mx-s">
          <FontAwesomeIcon icon={faTwitter} size="3x" />
        </div>
      </div>

      <h4 className="text-center border-b-intro">
        Softwear Engineerのブログ
      </h4>
    </section>
  )
}

export default Intro
