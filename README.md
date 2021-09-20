# Vertical Timeline component in React

This is a React component that displays a timeline of events by order of occurance, bottom to top. On Desktop, the events are staggered inbetween two branches, whereas on mobile they collapse to a single branch.

[<img src="https://user-images.githubusercontent.com/64317827/133946169-a46bb755-5b91-434b-ae80-0caec1dd34c4.png" width="304"/>](timeline-desktop.jpg)
[<img src="https://user-images.githubusercontent.com/64317827/133946188-1bdcb09b-7c1d-400c-b21a-7b881c93d741.png" width="200"/>](timeline-mobile.jpg)

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
### 1. Get the component
Copy and insert `components` folder into your project's `src` folder. Import and use the component as follows:
```js
import VerticalTimeline from './components'
import { events } from "./components/events"

function App() {
  return <VerticalTimeline events={events} interval={5000}/>
}
```

### 2. Install dependencies
For styling, [styled-components](https://styled-components.com/docs) was used. 
To install run this command: `npm install --save styled-components`

or

1. Add this line to your dependencies in the `package.json` file: `"styled-components": "^5.3.0",`
2. Run this command `npm install`

## Clone this repo and run in your computer
1. `$ git clone https://github.com/musabash/vertical-timeline.git`
2. `$ npm install`
3. `$ npm run start`
