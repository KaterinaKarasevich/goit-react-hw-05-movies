"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{387:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var c,r,o=e(439),i=e(791),u=e(689),a=e(979),f=e(766),s=e(402),h=s.Z.ul(c||(c=(0,f.Z)(["\n  list-style: none;\n  margin-left: -40px;\n  font-size: 16px;\n"]))),p=s.Z.li(r||(r=(0,f.Z)(["\n  padding: 10px; \n"]))),d=e(184),l=function(){var n=(0,i.useState)([]),t=(0,o.Z)(n,2),e=t[0],c=t[1],r=(0,u.UO)().movieId;return(0,i.useEffect)((function(){(0,a.tx)(r).then((function(n){return n.json()})).then((function(n){return c(n.results)}))}),[r]),(0,d.jsxs)(h,{children:[e.length<1&&(0,d.jsx)("p",{children:"We dont have any reviews for this movie"}),e&&e.map((function(n){return(0,d.jsxs)(p,{children:[(0,d.jsxs)("h4",{children:["Author: ",n.author]}),(0,d.jsx)("p",{children:n.content})]},n.id)}))]})}},979:function(n,t,e){e.d(t,{TP:function(){return u},V0:function(){return i},oU:function(){return o},tx:function(){return f},zv:function(){return a}});var c="fae442014c974ac619f95851fb255ed7",r="https://api.themoviedb.org/3",o=function(){return fetch("".concat(r,"/trending/movie/week?api_key=").concat(c))},i=function(n){return fetch("".concat(r,"/search/movie?query=").concat(n,"&api_key=").concat(c))},u=function(n){return fetch("".concat(r,"/movie/").concat(n,"?api_key=").concat(c))},a=function(n){return fetch("".concat(r,"/movie/").concat(n,"/credits?api_key=").concat(c))},f=function(n){return fetch("".concat(r,"/movie/").concat(n,"/reviews?api_key=").concat(c))}}}]);
//# sourceMappingURL=387.e3ebcbf5.chunk.js.map