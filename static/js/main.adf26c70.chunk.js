(this["webpackJsonpclick-click"]=this["webpackJsonpclick-click"]||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('[{"name":"Aquaman","img":"assets/image/aquaman.jpg","clicked":true},{"name":"Batman","img":"assets/image/batman.png","clicked":false},{"name":"Cyborg","img":"assets/image/cyborg.jpg","clicked":false},{"name":"Flash","img":"assets/image/flash.jpg","clicked":false},{"name":"Green Lantern","img":"assets/image/greenlantern.jpg","clicked":false},{"name":"Harley Quinn","img":"assets/image/harleyquinn.jpg","clicked":false},{"name":"Iceman","img":"assets/image/iceman.jpg","clicked":false},{"name":"Joker","img":"assets/image/joker.jpg","clicked":false},{"name":"Shazam","img":"assets/image/shazam.jpg","clicked":false},{"name":"Spawn","img":"assets/image/spawn.jpg","clicked":false},{"name":"Superman","img":"assets/image/superman.jpg","clicked":false},{"name":"Wonder Woman","img":"assets/image/wonderwoman.jpg","clicked":false}]')},,,function(e,a,n){e.exports=n(17)},,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),i=n(3),s=n.n(i),r=(n(15),n(1)),l=n(4),m=n(5),o=n(8),g=n(6),d=n(9);n(16);function u(e){return c.a.createElement("nav",{class:"nav"},c.a.createElement("div",{className:"navbar-brand"}),c.a.createElement("ul",{className:"nav justify-content-center"},c.a.createElement("li",{className:"nav-item"},"Click an image to begin!!!"),c.a.createElement("li",{className:"nav-item"},"score: ",e.score," | Top Score: ",e.topScore)))}var k=function(e){return c.a.createElement("img",{src:e.image,alt:e.alt,className:"img",onClick:function(){return e.handleClick(e.name)}})},p=n(7),f=function(e){function a(){var e,n;Object(l.a)(this,a);for(var t=arguments.length,c=new Array(t),i=0;i<t;i++)c[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(c)))).state={friends:p,score:0,topScore:0,clicked:[]},n.handleClick=function(e){if(-1===n.state.clicked.map((function(e){return e.name})).indexOf(e)){var a=Object(r.a)(n.state.clicked);a.push({name:e});var t=Object(r.a)(n.state.friends);t.sort((function(){return Math.random()-.5})),n.setState({clicked:a,friends:t,score:n.state.score+1})}else alert("its been clicked")},n}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"App"},c.a.createElement(u,{score:this.state.score,topScore:this.state.topScore}),c.a.createElement("header",{class:"header"},c.a.createElement("h1",null,"Click Game!"),c.a.createElement("h2",null,"Click on an image to earn points, but don't click on any more than once")),c.a.createElement("div",{class:"content"},this.state.friends.map((function(a){return c.a.createElement(k,{image:a.img,alt:a.name,name:a.name,clicked:a.clicked,handleClick:e.handleClick})}))))}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.adf26c70.chunk.js.map