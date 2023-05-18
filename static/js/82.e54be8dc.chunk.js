"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[82],{4082:function(n,r,t){t.r(r),t.d(r,{default:function(){return E}});var e,a,c,u,i,o,s=t(5861),p=t(9439),f=t(4687),l=t.n(f),x=t(7689),d=t(2791),v=t(4390),h=t(168),g=t(5706),m=g.Z.li(e||(e=(0,h.Z)(["\n  padding-bottom: 10px;\n  background-color: #444950;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),b=g.Z.img(a||(a=(0,h.Z)(["\n  background-color: #444950;\n  width: 100%;\n  height: 320px;\n"]))),w=g.Z.p(c||(c=(0,h.Z)(["\n  color: var(--color-acceent);\n  margin-top: 10px;\n  margin-left: 10px;\n  font-size: 22px;\n"]))),Z=g.Z.p(u||(u=(0,h.Z)(["\n  margin-left: 10px;\n  margin-top: 5px;\n  font-size: 20px;\n"]))),k=t(2323),j=t(184),y=function(n){var r=n.cast;return(0,j.jsxs)(m,{children:[(0,j.jsx)(b,{className:"img",alt:r.name,src:r.profile_path?"https://image.tmdb.org/t/p/w200".concat(r.profile_path):k,onError:function(n){n.target.src=k}}),(0,j.jsx)(w,{children:"Name:"}),(0,j.jsx)(Z,{children:r.name}),(0,j.jsx)(w,{children:"Character:"}),(0,j.jsx)(Z,{children:r.character})]})},_=g.Z.ul(i||(i=(0,h.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 20px;\n"]))),z=g.Z.h2(o||(o=(0,h.Z)(["\n  padding: 10px 0;\n  font-size: 30px;\n  font-weight: 500;\n"]))),C=t(4044),E=function(){var n=(0,x.UO)().movieId,r=(0,d.useState)(null),t=(0,p.Z)(r,2),e=t[0],a=t[1],c=(0,d.useState)(null),u=(0,p.Z)(c,2),i=u[0],o=u[1],f=(0,d.useState)(!1),h=(0,p.Z)(f,2),g=h[0],m=h[1],b=(0,d.useRef)(new AbortController).current;(0,d.useEffect)((function(){return m(!0),w(n,b.signal),function(){b.abort()}}),[b,n]);var w=function(){var n=(0,s.Z)(l().mark((function n(r,t){var e;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,v.zv)(r,t);case 3:e=n.sent,a((null===e||void 0===e?void 0:e.cast)||null),o((null===e||void 0===e?void 0:e.message)||null),m(!1),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),o(n.t0),m(!1);case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(r,t){return n.apply(this,arguments)}}();return(0,j.jsxs)(j.Fragment,{children:[e&&(0,j.jsx)(_,{children:e.map((function(n){return(0,j.jsx)(y,{cast:n},n.cast_id)}))}),g&&(0,j.jsx)(C.a,{}),i&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(z,{children:"Oops, something went wrong, please try again later."}),(0,j.jsxs)("p",{children:["Error: ",i]})]})]})}},4390:function(n,r,t){t.d(r,{E9:function(){return l},HI:function(){return s},e2:function(){return o},tx:function(){return f},zv:function(){return p}});var e=t(5861),a=t(4687),c=t.n(a),u=t(1243),i="?api_key=27e5bdbb5762b6b3d8731f5c3cd1f0f4";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var n=(0,e.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="/trending/all/day".concat(i),n.next=3,x(t,{signal:r});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(c().mark((function n(r,t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(r).concat(i),n.next=3,x(e,{signal:t});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(r,t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(r,"/credits").concat(i),n.next=3,x(e,{signal:t});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(r,t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(r,"/reviews").concat(i),n.next=3,x(e,{signal:t});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(c().mark((function n(r,t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/search/movie".concat(i,"&query=").concat(r),n.next=3,x(e);case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}(),x=function(){var n=(0,e.Z)(c().mark((function n(r){var t,e,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:{},n.prev=1,n.next=4,u.Z.get(r,t);case 4:return e=n.sent,n.abrupt("return",e.data);case 8:return n.prev=8,n.t0=n.catch(1),n.abrupt("return",n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(r){return n.apply(this,arguments)}}()},2323:function(n,r,t){n.exports=t.p+"static/media/movie.6ae3259ee34bb35d8e78.png"}}]);
//# sourceMappingURL=82.e54be8dc.chunk.js.map