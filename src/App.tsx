import Countdown from './components/Countdown'
import Details from './components/Details'
import Footer from './components/Footer'
import Gifts from './components/Gifts'
import Hero from './components/Hero'
import Rsvp from './components/Rsvp'
import ThemeToggle from './components/ThemeToggle'
import Wave from './components/Wave'

export default function App() {
  return (
    <>
      <ThemeToggle />
      <Hero />
      <main>
        <div className="band band--sun">
          <Countdown />
          <Details />
        </div>
        <Wave from="var(--band-1)" to="var(--band-2)" />
        <div className="band band--peach">
          <Gifts />
        </div>
        <Wave from="var(--band-2)" to="var(--band-3)" flip />
        <div className="band band--mint">
          <Rsvp />
        </div>
      </main>
      <Footer />
    </>
  )
}
