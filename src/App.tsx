import Details from './components/Details'
import Gifts from './components/Gifts'
import Hero from './components/Hero'
import Rsvp from './components/Rsvp'

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <Details />
        <Gifts />
        <Rsvp />
      </main>
      <footer>Con muchas ganas de veros, Samanta, Toni y Gael 🍼</footer>
    </>
  )
}
