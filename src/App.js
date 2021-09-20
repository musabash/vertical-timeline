import VerticalTimeline from './components'
import { events } from "./components/events"

function App() {
  return <VerticalTimeline events={events} interval={5000}/>
}

export default App;
