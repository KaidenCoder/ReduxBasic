(this.webpackJsonpreduxapi=this.webpackJsonpreduxapi||[]).push([[0],{13:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);n(0);var c=n(3),r=n.n(c),s=(n(13),n(2)),i=n(7),o=n(8);var a=Object(i.b)((function(e,t){switch(t.type){case"STAR_WARS":case"RANDOM_JOKE":return t.payload;default:return e}}),Object(i.a)(o.a));a.subscribe((function(){return console.log(a.getState())}));var h=a,j=(n(18),n(1));var d=function(){var e=Object(s.c)((function(e){return e})),t=Object(s.b)();return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h2",{className:"title",children:"Redux fetch API project  "}),void 0!==e&&Object.keys(e).length>4?Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Star Wars Character"}),Object(j.jsxs)("p",{children:["Name: ",e.name]}),Object(j.jsxs)("p",{children:["Height: ",e.height]}),Object(j.jsxs)("p",{children:["Mass: ",e.mass]}),Object(j.jsxs)("p",{children:["Birth Year: ",e.birth_year]}),Object(j.jsxs)("p",{children:["Gender: ",e.gender]})]}):void 0!==e&&4==Object.keys(e).length?Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Random Joke"}),Object(j.jsxs)("p",{children:["Type: ",e.type]}),Object(j.jsxs)("p",{children:["Question: ",e.setup]}),Object(j.jsxs)("p",{children:["Punchline: ",e.punchline]})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Click the button to see changes"}),Object(j.jsx)("p",{children:"It is a redux based project. The libraries used are react-redux, redux, redux-thunk."}),Object(j.jsx)("p",{children:"This project is a demonstration of how redux works and how we can apply it in large projects."})]}),Object(j.jsx)("button",{className:"btn",onClick:function(){return t((function(e,t){var n=Math.floor(81*Math.random())+1;fetch("https://swapi.dev/api/people/"+n+"/").then((function(e){return e.json()})).then((function(t){console.log(t),e({type:"STAR_WARS",payload:t})}))}))},children:"Star Wars"}),Object(j.jsx)("button",{className:"btn",onClick:function(){return t((function(e,t){fetch("https://official-joke-api.appspot.com/random_joke").then((function(e){return e.json()})).then((function(t){console.log(t),e({type:"RANDOM_JOKE",payload:t})}))}))},children:"Random Joke"}),Object(j.jsx)("p",{children:Object(j.jsx)("a",{href:"https://github.com/Kurosakicoder/ReduxBasic",children:"Github Link"})})]})},l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};r.a.render(Object(j.jsx)(s.a,{store:h,children:Object(j.jsx)(d,{})}),document.getElementById("root")),l()}},[[20,1,2]]]);
//# sourceMappingURL=main.5f5398da.chunk.js.map