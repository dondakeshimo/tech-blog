import Container from './container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-l items-center contents-center">
          <div className="mx-s">
            <FontAwesomeIcon icon={faGithub} size="3x" />
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
