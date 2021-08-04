import Container from './container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="py-m svg-center">
          <div className="mx-s">
            <FontAwesomeIcon icon={faGithub} size="sm" />
          </div>
          <div className="mx-s">
            <FontAwesomeIcon icon={faTwitter} size="3x" />
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
