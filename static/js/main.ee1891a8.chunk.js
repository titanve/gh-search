(this["webpackJsonpgh-search"]=this["webpackJsonpgh-search"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(9),c=n.n(s),o=(n(15),n(2)),i=n(3),u=n.n(i),l=n(5),p=n(4),h=(n(17),n(18),n(0)),d=function(e){var t=e.user;return Object(h.jsx)("li",{className:"UserItem-item-container",children:Object(h.jsxs)("div",{className:"UserItem-info-block",children:[Object(h.jsxs)("div",{className:"UserItem-user-info",children:[Object(h.jsxs)("span",{children:[t.name,Object(h.jsx)("a",{className:"UserItem-link",href:t.html_url,target:"_blank",rel:"noreferrer",children:t.login})]}),Object(h.jsx)("span",{children:t.bio}),Object(h.jsxs)("span",{children:["Followers: ",t.followers]}),Object(h.jsxs)("span",{children:["Following: ",t.following]}),Object(h.jsxs)("span",{children:["Stars: ",t.stars]}),Object(h.jsxs)("span",{children:["Starred: ",t.starred]})]}),Object(h.jsx)("div",{className:"UserItem-avatar",children:Object(h.jsx)("img",{className:"UserItem-img-responsive",alt:t.avatar_url,src:t.avatar_url})})]})})},j=n(10),b=n.n(j),f={border:"1px solid #ccc",background:"#fff",fontSize:"1em",padding:10,margin:5,width:70},g=function(e){var t=e.users,n=a.a.useState([]),r=Object(p.a)(n,2),s=r[0],c=r[1];return a.a.useEffect((function(){var e=t.map((function(e,t){return Object(h.jsx)(d,{user:e},t)}));c(e)}),[t]),Object(h.jsx)(h.Fragment,{children:t.length>0?Object(h.jsx)(m,{itemsperpage:5,items:s,pagesspan:4}):null})},m=function(e){var t=e.itemsperpage,n=e.nocolumns,r=void 0===n?0:n,a=e.items,s=e.pagesspan;return Object(h.jsx)(b.a,{itemsperpage:t,nocolumns:r,items:a,pagesspan:s,children:function(e){var t=e.getBackButtonProps,n=e.getFastBackButtonProps,r=e.getFwdButtonProps,s=e.getFastFwdButtonProps,c=e.getSelPageButtonProps,i=(e.nopages,e.inipagearray),u=e.pagesforarray,l=e.currentpage,p=e.noitems,d=e.initialitem,j=e.lastitem,b=e.goBackBdisabled,g=e.goFastBackBdisabled,m=e.goFwdBdisabled,O=e.goFastFwdBdisabled;return Object(h.jsxs)("ul",{style:{listStyle:"none"},children:[a.slice(d,j).map((function(e){return e})),p>0?[Object(h.jsxs)("li",{children:[Object(h.jsx)("button",Object(o.a)(Object(o.a)({style:f},n()),{},{disabled:g,children:"<<"})),Object(h.jsx)("button",Object(o.a)(Object(o.a)({style:f},t()),{},{disabled:b,children:"<"})),Array.from({length:u},(function(e,t){return t+i})).map((function(e){return Object(h.jsx)("button",Object(o.a)(Object(o.a)({},c({page:e})),{},{disabled:l==e,children:e}),e)})),Object(h.jsx)("button",Object(o.a)(Object(o.a)({style:f},r()),{},{disabled:m,children:">"})),Object(h.jsx)("button",Object(o.a)(Object(o.a)({style:f},s()),{},{disabled:O,children:">>"}))]},"pagingrow100")]:null]})}})};var O=function(){var e=a.a.useState(""),t=Object(p.a)(e,2),n=t[0],r=t[1],s=a.a.useState([]),c=Object(p.a)(s,2),i=c[0],d=c[1],j=a.a.useState([]),b=Object(p.a)(j,2),f=b[0],m=b[1],O=a.a.useState(0),x=Object(p.a)(O,2),v=x[0],k=x[1],w=a.a.useState("idle"),S=Object(p.a)(w,2),y=S[0],A=S[1],T=a.a.useRef(0),N=function(){var e=Object(l.a)(u.a.mark((function e(){var t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.github.com/search/users?q=".concat(n),{method:"GET",mode:"cors",headers:{Authorization:"token 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","Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:r=e.sent,console.log("res",r),d(r.items),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("ghSearch",e.t0),A("idle");case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.github.com/users/".concat(t),{method:"GET",mode:"cors",headers:{Authorization:"token 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","Content-Type":"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.error("ghUserSearch",e.t0),A("idle");case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.github.com/users/".concat(t,"/starred"),{method:"GET",mode:"cors",headers:{Authorization:"token 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","Content-Type":"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r.length);case 10:e.prev=10,e.t0=e.catch(0),console.error("ghUserSearch",e.t0),A("idle");case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.github.com/users/".concat(t,"/repos"),{method:"GET",mode:"cors",headers:{Authorization:"token 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","Content-Type":"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,a=0,r.forEach((function(e){a+=e.stargazers_count})),e.abrupt("return",a);case 12:e.prev=12,e.t0=e.catch(0),console.error("ghUserSearch",e.t0),A("idle");case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),P=function(e){return null!=e&&e.length>0};a.a.useEffect((function(){return T.current=setTimeout((function(){P(n)&&(A("loading"),N())}),800),function(){clearTimeout(T.current),T.current=0}}),[n]);var z=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,r,a,s,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],n=0;case 2:if(!(n<i.length)){e.next=17;break}return r=i[n],e.next=6,F(r.login);case 6:return a=e.sent,e.next=9,E(r.login);case 9:return s=e.sent,e.next=12,B(r.login);case 12:c=e.sent,t.push(Object(o.a)(Object(o.a)({},c),{},{starred:a,stars:s}));case 14:n++,e.next=2;break;case 17:console.log("newarr",t),m(t),A("idle");case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.useEffect((function(){P(i)&&(k(i.length),z())}),[i]),Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)("span",{children:"GitHub Search"}),Object(h.jsxs)("div",{className:"App-search-block",children:[Object(h.jsx)("input",{className:"App-input-search",value:n,onChange:function(e){return r(e.target.value)}}),Object(h.jsxs)("span",{className:"App-total-count",children:["Total count: ",v]}),"idle"===y?Object(h.jsx)(g,{users:f}):"loading"===y?Object(h.jsx)("span",{className:"App-appstate-loading",children:"Loading ..."}):null]})]})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};c.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root")),x()}},[[36,1,2]]]);
//# sourceMappingURL=main.ee1891a8.chunk.js.map