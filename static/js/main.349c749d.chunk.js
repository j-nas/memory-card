(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],{14:function(e,t,i){},15:function(e,t,i){},16:function(e,t,i){},18:function(e,t,i){},19:function(e,t,i){},25:function(e,t,i){"use strict";i.r(t);var c=i(1),a=i.n(c),r=i(8),n=i.n(r),s=(i(14),i(2)),o=(i(15),i(16),i(0));var d=function(e){return Object(o.jsxs)("div",{className:"titleBar",children:[Object(o.jsx)("div",{className:"title",children:Object(o.jsx)("h1",{children:"Total Rickall"})}),Object(o.jsx)("div",{className:"scoreBoard",children:Object(o.jsxs)("p",{children:["Score: ",e.score,Object(o.jsx)("br",{}),"HiScore: ",e.hiScore]})})]})},m=i(9);i(18),i(19);var l=function(e){return Object(o.jsxs)("div",{className:"card",id:e.setId,onClick:e.clickHandler,children:[Object(o.jsx)("div",{}),Object(o.jsx)("img",{id:e.setId,src:e.imgUrl,alt:""}),Object(o.jsx)("div",{id:e.setId,className:"cardName",children:e.name})]})},j=i(6),g=i.n(j),h=[{charName:"Mr. PBH",imgUrl:"https://static.wikia.nocookie.net/rickandmorty/images/5/52/S2e4_mr_poopybutthole.png",id:1},{charName:"Uncle Steve",imgUrl:"https://static.wikia.nocookie.net/rickandmorty/images/5/50/UncleSteve.png",id:2},{charName:"Cousin Nicky",imgUrl:"https://static.wikia.nocookie.net/rickandmorty/images/f/fa/Cousin_Nicky.png",id:3},{charName:"Mr. Beauregard",imgUrl:"https://static.wikia.nocookie.net/rickandmorty/images/9/97/MrBeauregard.png",id:4},{charName:"Frankenstein's Monster",imgUrl:"https://static.wikia.nocookie.net/rickandmorty/images/a/a7/Frankenstein%27s_Monster.png",id:5},{charName:"Sleepy Gary",imgUrl:"https://static.wikia.nocookie.net/rickandmorty/images/9/9c/Sleepy_Gary_Better_Image.png",id:6},{charName:"Photography Raptor",imgUrl:"https://static.wikia.nocookie.net/rickandmorty/images/c/c8/PhotogRaptor.jpg",id:7},{charName:"Pencilvester",imgUrl:"https://static.wikia.nocookie.net/rickandmorty/images/7/7f/Pensylvester.png",id:8},{charName:"Hamurai",imgUrl:"https://static.wikia.nocookie.net/rickandmorty/images/b/bd/Shut_Up_Hamurai.png",id:10},{charName:"Mrs. Refridgerator",imgUrl:"https://static.wikia.nocookie.net/rickandmorty/images/c/cb/Mrs._Refridgerator.png",id:11}];var k=function(e){var t=Object(c.useState)(g()(h)),i=Object(s.a)(t,2),a=i[0],r=i[1],n=Object(c.useState)([]),d=Object(s.a)(n,2),j=d[0],k=d[1];function p(){r(g()(h))}function u(t){t.preventDefault();var i=t.target.id;if(j.find((function(e){return e===i})))return e.resetScore(),k([]),void p();k([].concat(Object(m.a)(j),[i])),console.log(j),e.addScore(),p()}var b=a.map((function(e){return Object(o.jsx)(l,{name:e.charName,imgUrl:e.imgUrl,setId:e.id,clickHandler:u},e.id)}));return Object(o.jsxs)("div",{className:"container",children:["Click the parasites only once. ",Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"gameArea",children:b})]})};var p=function(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),i=t[0],a=t[1],r=Object(c.useState)(0),n=Object(s.a)(r,2),m=n[0],l=n[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(d,{score:i,hiScore:m}),Object(o.jsx)(k,{addScore:function(){m>i?a(i+1):(a(i+1),l(m+1))},resetScore:function(){a(i-i)}})]})};n.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.349c749d.chunk.js.map