"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[81],{81:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var o,c,r,i,u,a,l=t(439),f=t(791),p=t(87),s=t(689),h=t(979),d=t(766),x=t(402),m=x.Z.form(o||(o=(0,d.Z)(["\n  padding: 30px;\n  display: flex;\n  align-items: center;\n  max-width: 300px;\n  \n"]))),v=x.Z.button(c||(c=(0,d.Z)(["\n  display: inline-block;\n  height: 36px;\n  border-color: blue;\n  opacity: 0.5;\n  cursor: pointer;\n     &:hover {\n      opacity: 1;\n}\n"]))),g=x.Z.input(r||(r=(0,d.Z)(["\n  display: inline-block;\n  height: 30px;\n  width: 100%;\n  font: inherit;\n  font-size: 16px;\n  border-color: blue;\n  outline: blue;\n  padding-left: 10px;\n  padding-right: 4px;\n  &::placeholder {\n  font: inherit;\n  font-size: 16px;\n}\n"]))),Z=t(184),y=function(){var n,e=(0,f.useState)(""),t=(0,l.Z)(e,2),o=t[0],c=t[1],r=(0,p.lr)(),i=(0,l.Z)(r,2),u=i[0],a=i[1],s=null!==(n=u.get("query"))&&void 0!==n?n:"";console.log(s);return(0,Z.jsxs)(m,{onSubmit:function(n){n.preventDefault();var e=o;if(""===e)return a({});a({query:e}),c("")},children:[(0,Z.jsx)(v,{type:"submit",children:"Search"}),(0,Z.jsx)(g,{type:"text",autocomplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:function(n){c(n.currentTarget.value)},value:o})]})},b=t(959),k=x.Z.ol(i||(i=(0,d.Z)(["\n  \n  display: flex;\n  flex-direction: column;\n  margin-bottom: 50px;\n  font-weight: 500;\n  font-size: 18px;\n  \n"]))),j=x.Z.li(u||(u=(0,d.Z)(["\n  gap: 5px;\n  padding: 10px;\n   \n  "]))),w=(0,x.Z)(p.rU)(a||(a=(0,d.Z)(["\n\n  color: black;\n  font-size: 15px;\n  text-decoration: none;\n  :hover {\n    color: blue;\n  }\n  \n"]))),_=function(){var n,e=(0,p.lr)(),t=(0,l.Z)(e,1)[0],o=(0,s.TH)(),c=(0,f.useState)(null),r=(0,l.Z)(c,2),i=r[0],u=r[1],a=(0,f.useState)(!1),d=(0,l.Z)(a,2),x=d[0],m=d[1],v=(0,f.useState)(null),g=(0,l.Z)(v,2),_=g[0],S=g[1],z=null!==(n=t.get("query"))&&void 0!==n?n:"";return(0,f.useEffect)((function(){z&&(0,h.V0)(z).then((function(n){return n.json()})).then((function(n){return u(n.results)})).catch((function(n){return S(n.message)})).finally(m(!1))}),[z]),(0,Z.jsxs)("div",{children:[(0,Z.jsx)(y,{}),x&&(0,Z.jsx)(b.Z,{}),(0,Z.jsx)(k,{children:i&&i.map((function(n){return(0,Z.jsx)(j,{children:(0,Z.jsx)(w,{to:"".concat(n.id),state:{from:o},children:n.title})},n.id)}))}),_&&(0,Z.jsx)("p",{children:"Something went wrong"})]})}},979:function(n,e,t){t.d(e,{TP:function(){return u},V0:function(){return i},oU:function(){return r},tx:function(){return l},zv:function(){return a}});var o="fae442014c974ac619f95851fb255ed7",c="https://api.themoviedb.org/3",r=function(){return fetch("".concat(c,"/trending/movie/week?api_key=").concat(o))},i=function(n){return fetch("".concat(c,"/search/movie?query=").concat(n,"&api_key=").concat(o))},u=function(n){return fetch("".concat(c,"/movie/").concat(n,"?api_key=").concat(o))},a=function(n){return fetch("".concat(c,"/movie/").concat(n,"/credits?api_key=").concat(o))},l=function(n){return fetch("".concat(c,"/movie/").concat(n,"/reviews?api_key=").concat(o))}}}]);
//# sourceMappingURL=81.d8bd52ea.chunk.js.map