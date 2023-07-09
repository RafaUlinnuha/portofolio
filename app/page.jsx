import Header from './header';
import Nav from './nav';
import Achievements from './achievements';
import Projects from './projects';

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="my-40 space-y-28">
        <Header />
        <Achievements />
        <Projects />
      </div>
    </div>
  )
}
