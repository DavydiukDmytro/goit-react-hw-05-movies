"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[951],{2951:function(n,r,t){t.r(r),t.d(r,{default:function(){return k}});var e,a,u,c,s=t(5861),o=t(9439),i=t(4687),p=t.n(i),f=t(7689),l=t(2791),x=t(4390),v=t(168),d=t(5706),h=d.Z.h2(e||(e=(0,v.Z)(["\n  padding: 10px 0;\n  font-size: 30px;\n  font-weight: 500;\n"]))),g=d.Z.li(a||(a=(0,v.Z)(["\n  padding: 15px;\n  margin-top: 10px;\n  background-color: #444950;\n  border-radius: 10px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),b=d.Z.p(u||(u=(0,v.Z)(["\n  color: var(--color-acceent);\n  font-size: 22px;\n  margin-bottom: 5px;\n  &.sub {\n    margin-top: 10px;\n  }\n"]))),m=d.Z.p(c||(c=(0,v.Z)(["\n  font-size: 20px;\n"]))),w=t(4044),Z=t(184),k=function(){var n=(0,f.UO)().movieId,r=(0,l.useState)(null),t=(0,o.Z)(r,2),e=t[0],a=t[1],u=(0,l.useState)(null),c=(0,o.Z)(u,2),i=c[0],v=c[1],d=(0,l.useState)(!1),k=(0,o.Z)(d,2),y=k[0],j=k[1],_=(0,l.useRef)(new AbortController).current;(0,l.useEffect)((function(){return j(!0),z(n,_.signal),function(){_.abort()}}),[_,n]);var z=function(){var n=(0,s.Z)(p().mark((function n(r,t){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,x.tx)(r);case 3:e=n.sent,a((null===e||void 0===e?void 0:e.results)||null),v((null===e||void 0===e?void 0:e.message)||null),j(!1),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),v(n.t0),j(!1);case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(r,t){return n.apply(this,arguments)}}();return(0,Z.jsxs)(Z.Fragment,{children:[e&&(e.length<1?(0,Z.jsx)(m,{style:{marginTop:"10px"},children:"We don`t have any reviews for this movie"}):(0,Z.jsx)("ul",{children:e.map((function(n){return(0,Z.jsxs)(g,{children:[(0,Z.jsx)(b,{children:"Author:"}),(0,Z.jsx)(m,{children:n.author}),(0,Z.jsx)(b,{className:"sub",children:"Content:"}),(0,Z.jsx)(m,{children:n.content})]},n.id)}))})),y&&(0,Z.jsx)(w.a,{}),i&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(h,{children:"Oops, something went wrong, please try again later."}),(0,Z.jsxs)("p",{children:["Error: ",i]})]})]})}},4390:function(n,r,t){t.d(r,{E9:function(){return l},HI:function(){return i},e2:function(){return o},tx:function(){return f},zv:function(){return p}});var e=t(5861),a=t(4687),u=t.n(a),c=t(1243),s="?api_key=27e5bdbb5762b6b3d8731f5c3cd1f0f4";c.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var n=(0,e.Z)(u().mark((function n(r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="/trending/all/day".concat(s),n.next=3,x(t,{signal:r});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),i=function(){var n=(0,e.Z)(u().mark((function n(r,t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(r).concat(s),n.next=3,x(e,{signal:t});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(r,t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(r,"/credits").concat(s),n.next=3,x(e,{signal:t});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(r,t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(r,"/reviews").concat(s),n.next=3,x(e,{signal:t});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(u().mark((function n(r,t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/search/movie".concat(s,"&query=").concat(r),n.next=3,x(e);case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}(),x=function(){var n=(0,e.Z)(u().mark((function n(r){var t,e,a=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:{},n.prev=1,n.next=4,c.Z.get(r,t);case 4:return e=n.sent,n.abrupt("return",e.data);case 8:return n.prev=8,n.t0=n.catch(1),n.abrupt("return",n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=951.227ff9c0.chunk.js.map