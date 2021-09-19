# Timeline component in React

This is a React component that displays a timeline of events by order of occurance, bottom to top. On Desktop, the events are staggered inbetween two branches, whereas on mobile they collapse to a single branch.

![CPT2109192337-577x677](https://user-images.githubusercontent.com/64317827/133946169-a46bb755-5b91-434b-ae80-0caec1dd34c4.png)
![CPT2109192339-250x446](https://user-images.githubusercontent.com/64317827/133946188-1bdcb09b-7c1d-400c-b21a-7b881c93d741.png)


Every 20 seconds a new event is added on top of the Timeline, up to a defined max 5 elements. After the cap has been reached, the last event is removed also. To demonstrate there is a pre-defined array of events.

Each Event is made of a:

- time
- title
- description
