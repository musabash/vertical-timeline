# Vertical Timeline component in React

This is a React component that displays a timeline of events by order of occurance, bottom to top. On Desktop, the events are staggered inbetween two branches, whereas on mobile they collapse to a single branch.

[<img src="https://user-images.githubusercontent.com/64317827/133950381-6301c1ba-5f79-421c-9d04-dd4ca9449b4b.png" width="600"/>](timeline-desktop.jpg) 
[<img src="https://user-images.githubusercontent.com/64317827/133950383-1d858b8d-d8ca-4472-b99f-3af77825a406.png" width="295"/>](timeline-mobile.jpg)

Every 20 seconds a new event is added on top of the Timeline, up to a defined max 5 elements. After the cap has been reached, the last event is removed also.

To demonstrate there is a pre-defined array of events was used in the app which you can check at https://vertical-timeline-component.netlify.app/.

Each Event is made of an object having values of:
- id
- time
- title
- description

## Vertical Timeline Props

### events={ Array }
Array should consist of objects having key values: `time`, `title`, `description` and a unique `id`
```js
events = [
  {id: 0, time: "09:53 am", title: "First event", description: "Sth happened"},
  {id: 1, time: "10:27 am", title: "Second event", description: "Sth another happened"}
]
```
### interval={ number }
Interval is the time delay in milliseconds after every element is added. It should be not less than `3000`. 

## For development
### Get the component
Copy and insert `components` folder into your project's `src` folder. Import and use the component as follows:
```js
import VerticalTimeline from './components'
import { events } from "./components/events"

function App() {
  return <VerticalTimeline events={events} interval={5000}/>
}
```

### Install dependencies
For styling, [styled-components](https://styled-components.com/docs) was used. 
To install run this command: `npm install --save styled-components`

or

1. Add this line to your dependencies in the `package.json` file: `"styled-components": "^5.3.0",`
2. Run this command `npm install`

## If you want to run this app on your computer:
1. `$ git clone https://github.com/musabash/vertical-timeline.git`
2. `$ npm install`
3. `$ npm run start`
