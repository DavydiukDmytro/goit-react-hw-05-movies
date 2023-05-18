"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[925],{2295:function(n,t,r){r.d(t,{s:function(){return b}});var e,i,a,o,c,s=r(168),u=r(5706),l=u.Z.ul(e||(e=(0,s.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),p=r(1087),d=u.Z.li(i||(i=(0,s.Z)(["\n  background-color: #444950;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),h=(0,u.Z)(p.rU)(a||(a=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n"]))),f=u.Z.img(o||(o=(0,s.Z)(["\n  background-color: #1c1e21;\n  width: 100%;\n  height: 195px;\n"]))),x=u.Z.h2(c||(c=(0,s.Z)(["\n  padding: 10px 0;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  font-size: 24px;\n"]))),v=r(2323),m=r(184),g=function(n){var t=n.movie,r=n.location,e=n.linkTo;return(0,m.jsx)(d,{children:(0,m.jsxs)(h,{to:"".concat(e).concat(t.id),state:{from:r},children:[(0,m.jsx)(f,{className:"img",alt:t.title,width:"400px",src:"https://image.tmdb.org/t/p/w300".concat(t.backdrop_path),onError:function(n){n.target.src=v}}),(0,m.jsxs)(x,{children:[" ",t.title||"No name"]})]})})},b=function(n){var t=n.moviesArr,r=n.location,e=n.linkTo;return(0,m.jsx)(l,{children:t.map((function(n){return(0,m.jsx)(g,{movie:n,location:r,linkTo:e},n.id)}))})}},6925:function(n,t,r){r.r(t),r.d(t,{default:function(){return z}});var e,i,a,o,c=r(5861),s=r(9439),u=r(4687),l=r.n(u),p=r(2791),d=r(4390),h=r(1087),f=r(7689),x=r(2295),v=r(5705),m=r(168),g=r(5706),b=(0,g.Z)(v.l0)(e||(e=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #444950;\n  border-radius: 10px;\n  overflow: hidden;\n  margin: 0 auto;\n  margin-bottom: 30px;\n"]))),w=g.Z.button(i||(i=(0,m.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  color: var(--color-acceent);\n  background-color: #444950;\n  &:hover {\n    background-color: var(--color-acceent);\n    color: #444950;\n  }\n"]))),Z=g.Z.span(a||(a=(0,m.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),k=(0,g.Z)(v.gN)(o||(o=(0,m.Z)(["\n  display: inline-block;\n  width: 100%;\n  height: 48px;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  color: var(--color-acceent);\n  background-color: #444950;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),y=r(2134),j=r(184),_=function(n){var t=n.searchWord,r=n.handleSubmit;return(0,j.jsx)(v.J9,{initialValues:{searchWord:t},onSubmit:r,children:(0,j.jsxs)(b,{children:[(0,j.jsxs)(w,{type:"submit",children:[(0,j.jsx)(y.RB5,{className:"img",style:{width:"80%",height:"auto"}}),(0,j.jsx)(Z,{children:"Search"})]}),(0,j.jsx)(k,{type:"text",name:"searchWord"})]})})},z=function(){var n,t=(0,p.useState)([]),r=(0,s.Z)(t,2),e=r[0],i=r[1],a=(0,h.lr)(),o=(0,s.Z)(a,2),u=o[0],v=o[1],m=(0,p.useState)(null!==(n=u.get("name"))&&void 0!==n?n:""),g=(0,s.Z)(m,2),b=g[0],w=g[1],Z=(0,p.useState)(null),k=(0,s.Z)(Z,2),y=k[0],z=k[1],S=(0,f.TH)(),E=(0,p.useRef)(new AbortController).current;(0,p.useEffect)((function(){return""!==b?N(b,E.signal):i([]),function(){E.abort()}}),[E,b]);var N=function(){var n=(0,c.Z)(l().mark((function n(t,r){var e,a;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,d.E9)(t,r);case 3:a=n.sent,i((null===a||void 0===a?void 0:a.results)||[]),z((null===a||void 0===a?void 0:a.message)||null),(null===(e=a.results)||void 0===e?void 0:e.length)<1&&z("We didn't find anything behind this word"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),z((null===n.t0||void 0===n.t0?void 0:n.t0.message)||"Error");case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(t,r){return n.apply(this,arguments)}}();return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(_,{searchWord:b,handleSubmit:function(n){var t=n.searchWord.trim();v(""!==t?{name:t}:{}),w(t)}}),e.length>0?(0,j.jsx)(x.s,{moviesArr:e,location:S,linkTo:""}):(0,j.jsx)("p",{className:"sub-title",children:"Enter a keyword and hit search"}),y&&(0,j.jsx)("h1",{className:"title",children:y})]})}},4390:function(n,t,r){r.d(t,{E9:function(){return d},HI:function(){return u},e2:function(){return s},tx:function(){return p},zv:function(){return l}});var e=r(5861),i=r(4687),a=r.n(i),o=r(1243),c="?api_key=27e5bdbb5762b6b3d8731f5c3cd1f0f4";o.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="/trending/all/day".concat(c),n.next=3,h(r,{signal:t});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),u=function(){var n=(0,e.Z)(a().mark((function n(t,r){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(t).concat(c),n.next=3,h(e,{signal:r});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(a().mark((function n(t,r){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(t,"/credits").concat(c),n.next=3,h(e,{signal:r});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(a().mark((function n(t,r){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(t,"/reviews").concat(c),n.next=3,h(e,{signal:r});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(a().mark((function n(t,r){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/search/movie".concat(c,"&query=").concat(t),n.next=3,h(e);case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),h=function(){var n=(0,e.Z)(a().mark((function n(t){var r,e,i=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},n.prev=1,n.next=4,o.Z.get(t,r);case 4:return e=n.sent,n.abrupt("return",e.data);case 8:return n.prev=8,n.t0=n.catch(1),n.abrupt("return",n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(t){return n.apply(this,arguments)}}()},2323:function(n,t,r){n.exports=r.p+"static/media/movie.6ae3259ee34bb35d8e78.png"}}]);
//# sourceMappingURL=925.7e142e19.chunk.js.map