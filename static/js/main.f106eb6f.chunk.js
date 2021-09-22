(this["webpackJsonpvertical-timeline"]=this["webpackJsonpvertical-timeline"]||[]).push([[0],{22:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var i,r,o,a,c,s,m=n(0),u=n.n(m),l=n(14),d=n.n(l),b=(n(22),n(6)),f=n(12),j=n(2),p=n(8),v=n(3),O=n(4),h=O.a.div(i||(i=Object(v.a)(["\n  --timeline: 50%;\n  --box-shadow: -0.3em -0.3em 0.5em #fff,\n                0.3em 0.3em 0.5em #a3b1c6;\n  --background: #e0e5ec;\n  display: flex;\n  position: relative;\n  overflow: hidden;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  margin-top: 0;\n  padding-top: 0;\n  background: var(--background);\n  width: 100%;\n  height: 100vh;\n\n  &>* {\n    font-size: clamp(0.5rem, 0.3rem + 0.6vw, 1.5rem);\n  }\n\n  &:before {\n    position: absolute;\n    content: '';\n    width: 0.5em;\n    height: 100vh;\n    background: #f8f2f2;\n    box-shadow: inset -0.3em -0.3em 0.5em #fff,\n                inset 0.3em 0.3em 0.5em #a3b1c6;\n    left: var(--timeline);\n    transform: translateX(-50%)\n  }\n\n  @media(max-width: 320px) {\n    --timeline: 10%;\n  }\n"]))),g=O.a.div(r||(r=Object(v.a)(["\n  z-index: 1;\n  --left: 60%;\n  --right: -59%;\n  --text-align: ",";\n  top: 0;\n  position: absolute;\n  display: flex;\n  opacity: ",";\n  flex-direction: column;\n  text-align: var(--text-align);\n  background: var(--background);\n  border-radius: 0.5em;\n  box-shadow: var(--box-shadow);\n  width: 16em;\n  min-height: 6em;\n  padding: 0.5em;\n  overflow: hidden;\n  transform: ",';\n  transition: opacity 2s ease-in-out, transform 1.4s ease-in-out;\n  \n  @media(max-width: 320px) {\n    --left: 2em;\n    --right: 2em;\n    left: var(--timeline);\n    --text-align: "left";\n  }\n\n  &>* {\n    margin: 0.2em;\n  }\n'])),(function(e){return e.isOnLeft?"left":"right"}),(function(e){var t=e.verPos;return t>=51||t<0?0:1}),(function(e){var t=e.verPos,n=e.isOnLeft;return"translate(".concat(n?"var(--left)":"var(--right)",", ").concat(t,"em)")})),x=O.a.div(o||(o=Object(v.a)(["\n  font-weight: 700;\n  color: #010831;\n\n  & span{\n    background: rgba(255, 255, 255, 0.4);\n    padding: 0.3em 0.5em;\n    border-radius: 0.5em;\n    box-shadow: inset -0.15em -0.15em 0.3em #fff,\n                inset 0.2em 0.2em 0.3em #a3b1c6;\n  }\n"]))),w=O.a.h3(a||(a=Object(v.a)(["\n  color: red;\n"]))),S=O.a.p(c||(c=Object(v.a)(["\n  color: #010831;\n"]))),k=O.a.div(s||(s=Object(v.a)(["\n  left: var(--timeline);\n  opacity: ",";\n  position: absolute;\n  width: 0.6em;\n  height: 0.6em;\n  border-radius: 50%;\n  border: 1.5px solid white;\n  box-shadow: 0.3em 0.3em 0.5em #fb8e8e inset,\n              -0.3em -0.3em 0.3em red inset,\n              -0.3em -0.3em 0.5em #fff,\n              0.3em 0.3em 0.5em #a3b1c6;\n  transform: ",";\n  transition: opacity 2.5s ease-in-out, transform 1.4s ease-in-out;\n"])),(function(e){var t=e.verPos;return t>=49||t<0?0:1}),(function(e){var t=e.verPos;return"translate(-50%, ".concat(t,"em)")})),L=n(1),y=["event","isOnLeft"];function P(e){var t=e.event,n=e.isOnLeft,i=(Object(p.a)(e,y),Object(m.useState)(-17)),r=Object(j.a)(i,2),o=r[0],a=r[1],c=Object(m.useContext)(C).tick;return Object(m.useEffect)((function(){a((function(e){return e+10}))}),[c]),Object(L.jsxs)(g,{verPos:o,isOnLeft:n,children:[Object(L.jsx)(x,{children:Object(L.jsx)("span",{children:t.time})}),Object(L.jsx)(w,{children:t.title}),Object(L.jsx)(S,{children:t.description})]})}function q(e){var t=Object.assign({},e),n=Object(m.useState)(-15),i=Object(j.a)(n,2),r=i[0],o=i[1],a=Object(m.useContext)(C).tick;return Object(m.useEffect)((function(){o((function(e){return e+10}))}),[a]),Object(L.jsx)(k,Object(b.a)({verPos:r},t))}var E=["events","interval"],C=Object(m.createContext)();function F(e){var t=e.events,n=e.interval,i=Object(p.a)(e,E),r=Object(m.useState)(0),o=Object(j.a)(r,2),a=o[0],c=o[1],s=Object(m.useState)(!0),u=Object(j.a)(s,2),l=u[0],d=u[1],v=Object(m.useState)(3e3),O=Object(j.a)(v,2),g=O[0],x=O[1],w=Object(m.useState)(!0),S=Object(j.a)(w,2),k=S[0],y=S[1],F=Object(m.useState)([]),z=Object(j.a)(F,2),I=z[0],J=z[1],M=Object(m.useState)([]),B=Object(j.a)(M,2),Q=B[0],T=B[1];return Object(m.useEffect)((function(){t&&setTimeout((function(){y((function(e){return!e})),T((function(e){return[Object(L.jsx)(q,{},t[a].id)].concat(Object(f.a)(e.slice(0,5)))})),J((function(e){return[Object(L.jsx)(P,{isOnLeft:k,event:t[a]},t[a].id)].concat(Object(f.a)(e.slice(0,5)))})),c((function(e){return e<t.length-1?e+1:0}))}),g),l&&(x(Math.max(3e3,n||0)),d(!1))}),[a]),Object(L.jsx)(C.Provider,{value:{tick:a},children:Object(L.jsxs)(h,Object(b.a)(Object(b.a)({},i),{},{children:[I,Q]}))})}var z=[{id:0,time:"09:53 am",title:"Lorem",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:1,time:"10:27 am",title:"Fugit",description:"Fugit quis eos eligendi corporis doloremque."},{id:2,time:"11:35 am",title:"Sit velit",description:"Sit velit, porro ullam vero nihil fuga voluptatem"},{id:3,time:"12:42 pm",title:"Ipsum",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:4,time:"1:21 pm",title:"Quis",description:"Fugit quis eos eligendi corporis doloremque."},{id:5,time:"2:38 pm",title:"Porro ullam",description:"Sit velit, porro ullam vero nihil fuga voluptatem"},{id:6,time:"2:55 pm",title:"Sit amet",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:7,time:"3:14 pm",title:"Eligendi corporis",description:"Fugit quis eos eligendi corporis doloremque"},{id:8,time:"4:44 pm",title:"Cupiditate doloribus",description:"Sit velit, porro ullam vero nihil fuga"}];var I=function(){return Object(L.jsx)(F,{events:z,interval:2e4})};d.a.render(Object(L.jsx)(u.a.StrictMode,{children:Object(L.jsx)(I,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.f106eb6f.chunk.js.map