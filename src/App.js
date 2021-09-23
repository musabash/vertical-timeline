import VerticalTimeline from './components'
import { events } from "./components/events"

function App() {
  return (
    <>
      <VerticalTimeline events={events} interval={3000} />
    </>
  )
}

export default App;
