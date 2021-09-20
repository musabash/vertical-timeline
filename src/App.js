import VerticalTimeline from './components'
import { events } from "./components/events"

function App() {
  return <VerticalTimeline events={events} interval={20000}/>
}

export default App;
