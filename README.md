# Timeline component in React

This is a React component that displays a timeline of events by order of occurance, bottom to top. On Desktop, the events are staggered inbetween two branches, whereas on mobile they collapse to a single branch.


Every 20 seconds a new event is added on top of the Timeline, up to a defined max 5 elements. After the cap has been reached, the last event is removed also. To demonstrate there is a pre-defined array of events.

Each Event is made of a:

- time
- title
- description
