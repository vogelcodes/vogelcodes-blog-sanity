import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-12 flex flex-col lg:flex-row items-center justify-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            VogelCodes.com - {new Date().getFullYear()}
          </h3>
          
        </div>
      </Container>
    </footer>
  )
}
