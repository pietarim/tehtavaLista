(this["webpackJsonpmaterial-form"]=this["webpackJsonpmaterial-form"]||[]).push([[0],{106:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(9),c=a.n(i),s=(a(80),a(14)),o=a.n(s),u=a(22),l=a(12),j=a(141),d=a(146),b=a(150),h=a(144),p=a(147),O=a(152),x=a(28),v=a.n(x),m=function(){var t=Object(u.a)(o.a.mark((function t(e){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.post("http://localhost:3001/api/kirjautuminen",e);case 2:return a=t.sent,console.log(a.data),console.log(a.data.token),console.log("t\xe4ss\xe4 on palautettu kirjautumisesta"),t.abrupt("return",a.data);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=null,k=(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).URL,function(){var t=Object(u.a)(o.a.mark((function t(e){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e._id,{otsikko:e.otsikko,kuvaus:e.kuvaus,tekija:e.tekija},t.next=4,v.a.put("http://localhost:3001/api/tehtavat/".concat(a),e);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),g=function(){var t=Object(u.a)(o.a.mark((function t(e){var a,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={headers:{Authorization:f}},t.next=3,v.a.post("http://localhost:3001/api/tehtavat",e,a);case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y={muokkaa:k,poista:function(){var t=Object(u.a)(o.a.mark((function t(e){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={headers:{Authorization:f}},t.next=3,v.a.delete("http://localhost:3001/api/tehtavat/".concat(e),a);case 3:t.sent.then(console.log("poistettu"));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),lisaa:g,setToken:function(t){f="bearer ".concat(t)}},S=a(3);var w=function(t){var e=t.setKayttaja,a=Object(n.useState)(""),r=Object(l.a)(a,2),i=r[0],c=r[1],s=Object(n.useState)(""),x=Object(l.a)(s,2),v=x[0],f=x[1],k=Object(n.useState)(""),g=Object(l.a)(k,2),w=g[0],T=(g[1],Object(n.useRef)()),C=Object(n.useState)("none"),_=Object(l.a)(C,2),K=_[0],E=_[1],N=Object(j.a)((function(t){return{root:{flexGrow:1},paper:{backgroundColor:"#dce2e8",padding:t.spacing(2),margin:"auto",marginTop:"25px",maxWidth:500},input:{margin:"10px"},image:{width:128,height:128}}})),D=function(){var t=Object(u.a)(o.a.mark((function t(a){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n={tunnus:i,salasana:v},t.prev=2,t.next=5,m(n);case 5:r=t.sent,window.localStorage.setItem("kirjautunutTunnus",JSON.stringify(r)),e(r),y.setToken(r.token),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(2),E("wrap"),clearTimeout(T.current),T.current=setTimeout((function(){E("none")}),1e3);case 16:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}(),W=N();return Object(S.jsx)("div",{className:W.root,children:Object(S.jsx)("form",{onSubmit:D,children:Object(S.jsxs)(h.a,{className:W.paper,children:[Object(S.jsx)(d.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:Object(S.jsx)("h1",{children:"Teht\xe4v\xe4lista"})}),Object(S.jsx)(O.a,{style:{display:K},severity:"warning",children:"V\xe4\xe4r\xe4 salasana tai k\xe4ytt\xe4j\xe4tunnus"}),Object(S.jsxs)(d.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:[Object(S.jsx)(b.a,{xs:6,className:W.input,label:"K\xe4ytt\xe4j\xe4tunnus",value:i,error:!1,helperText:w,onChange:function(t){t.preventDefault();var e=t.target.value;c(e)}}),Object(S.jsx)(b.a,{xs:6,className:W.input,label:"Salasana",value:v,onChange:function(t){t.preventDefault();var e=t.target.value;f(e)},type:"password"})]}),Object(S.jsx)(d.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:Object(S.jsx)(p.a,{type:"submit",variant:"contained",color:"primary",style:{margin:"25px 0"},children:"Kijaudu"})})]})})})},T=a(148),C=function(t){var e=t.tehtava,a=t.tehtavaPoistaminenKasittelija,r=t.kayttaja,i=t.muokkaaState,c=Object(n.useState)(!0),s=Object(l.a)(c,2),o=s[0],u=s[1],d=Object(n.useState)("n\xe4yt\xe4"),h=Object(l.a)(d,2),O=h[0],x=h[1],v=Object(n.useState)(!1),m=Object(l.a)(v,2),f=m[0],k=m[1],g=Object(n.useState)(),w=Object(l.a)(g,2),C=w[0],_=w[1];var K=Object(j.a)((function(t){return{root:{flexGrow:1,maxWidth:900,margin:"0 auto"}}}))();function E(){"n\xe4yt\xe4"===O?x("piilota"):"piilota"===O&&x("n\xe4yt\xe4"),u(!o)}var N=function(t){_(t.target.value)},D=function(t){t.preventDefault();var a={_id:e._id,otsikko:e.otsikko,kommentti:C,tekija:e.tekija};y.muokkaa(a),i(a)};return Object(S.jsx)("div",{children:o?Object(S.jsxs)("div",{children:[Object(S.jsxs)("p",{children:[Object(S.jsx)("b",{children:"Otsikko: "}),e.otsikko," ",Object(S.jsx)(p.a,{variant:"contained",onClick:function(){return E()},children:O})]}),Object(S.jsx)("hr",{})]},e._id):Object(S.jsxs)("div",{children:[Object(S.jsxs)("p",{children:[Object(S.jsx)("b",{children:"Otsikko: "}),e.otsikko," ",Object(S.jsx)(p.a,{variant:"contained",onClick:function(){return E()},children:O})]}),Object(S.jsxs)(T.a,{children:[Object(S.jsx)("b",{children:"Kuvaus: "}),e.kommentti]}),Object(S.jsxs)("p",{children:[Object(S.jsx)("b",{children:"Omistaja: "}),e.tekija]}),function(){if(e.tekija===r)return Object(S.jsx)("div",{children:f?Object(S.jsxs)("div",{children:[Object(S.jsxs)("form",{onSubmit:D,children:[Object(S.jsx)(b.a,{fullWidth:!0,className:K.textFiled,id:"outlined-multiline-static",label:"Teht\xe4v\xe4n kuvaus",multiline:!0,rows:5,defaultValue:"Kuvaus",value:C,onChange:N,variant:"outlined",style:{margin:"25px 0"}}),Object(S.jsx)(p.a,{type:"submit",primary:!0,variant:"contained",style:{margin:"25px 15px"},children:"Muokkaa"})]}),Object(S.jsx)(p.a,{onClick:function(){return k(!f)},variant:"contained",style:{margin:"25px 15px"},children:"Peruuta"}),Object(S.jsx)(p.a,{variant:"contained",color:"secondary",onClick:function(){return a(e._id)},children:"poista"})]}):Object(S.jsx)(p.a,{variant:"contained",onClick:function(){return k(!f)},children:"muokkaa"})})}(),Object(S.jsx)("hr",{})]},e._id)})},_=function(t){var e=t.tehtavat,a=t.tehtavaPoistaminenKasittelija,r=t.kayttaja,i=t.muokkaaState,c=Object(n.useState)(!1),s=Object(l.a)(c,2),o=(s[0],s[1],Object(n.useState)("n\xe4yt\xe4")),u=Object(l.a)(o,2);u[0],u[1];var d=Object(j.a)((function(t){return{root:{flexGrow:1,maxWidth:900,margin:"0 auto"},paper:{padding:t.spacing(2),margin:"auto",maxWidth:500},image:{width:128,height:128},img:{margin:"auto",display:"block",maxWidth:"100%",maxHeight:"100%"}}}))();return Object(S.jsxs)("div",{className:d.root,children:[Object(S.jsx)("h1",{style:{textAlign:"center",margin:"60px auto"},children:"Teht\xe4v\xe4t"}),Object(S.jsx)("hr",{}),e.map((function(t){return Object(S.jsx)(C,{muokkaaState:i,kayttaja:r,tehtavaPoistaminenKasittelija:a,tehtava:t})}))]})};var K=function(t){var e=t.tehtava,a=t.setTehtava,r=Object(n.useState)(""),i=Object(l.a)(r,2),c=i[0],s=i[1],O=Object(n.useState)(""),x=Object(l.a)(O,2),v=x[0],m=x[1],f=(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).URL,Object(j.a)((function(t){return{root:{flexGrow:1},paper:{backgroundColor:"#dce2e8",padding:t.spacing(2),margin:"auto",marginTop:"25px",maxWidth:500},input:{margin:"10px"},textField:{marginTop:"25px"}}}))),k=function(){var t=Object(u.a)(o.a.mark((function t(n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,y.lisaa({otsikko:c,kommentti:v});case 3:r=t.sent,a(e.concat(r)),s(""),m("");case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=f();return Object(S.jsx)("div",{className:g.root,children:Object(S.jsx)("form",{onSubmit:k,children:Object(S.jsxs)(h.a,{className:g.paper,children:[Object(S.jsx)(d.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:Object(S.jsx)("h1",{children:"Lis\xe4\xe4 teht\xe4v\xe4"})}),Object(S.jsx)(d.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:Object(S.jsx)(b.a,{xs:6,className:g.input,label:"Otsikko",onChange:function(t){s(t.target.value)},value:c})}),Object(S.jsx)(b.a,{fullWidth:!0,className:g.textFiled,id:"outlined-multiline-static",label:"Kommentti",multiline:!0,rows:5,defaultValue:"Kuvaus",variant:"outlined",style:{margin:"25px 0"},onChange:function(t){m(t.target.value)},value:v}),Object(S.jsx)(d.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:Object(S.jsx)(p.a,{type:"submit",variant:"contained",color:"primary",style:{margin:"25px 15px"},children:"L\xe4het\xe4"})})]})})})},E=a(151),N=a(149),D=a(41),W=a(11);var I=function(){var t=r.a.useState(2),e=Object(l.a)(t,2),a=e[0],i=e[1],c=Object(n.useState)(),s=Object(l.a)(c,2),j=s[0],d=s[1],b=Object(n.useState)(),p=Object(l.a)(b,2),O=(p[0],p[1],Object(n.useState)([])),x=Object(l.a)(O,2),m=x[0],f=x[1],k=function(t){var e=[];m.map((function(a){e=a._id===t._id?e.concat(t):e.concat(a)})),f(e),e=[]},g=function(){var t=Object(u.a)(o.a.mark((function t(e){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:y.poista(e),a=[],m.map((function(t){t._id!==e&&(a=a.concat(t))})),f(a);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){v.a.get("http://localhost:3001/api/tehtavat").then((function(t){return f(t.data)}))}),[]),Object(n.useEffect)((function(){var t=window.localStorage.getItem("kirjautunutTunnus");if(t){var e=JSON.parse(t);y.setToken(e.token),d(e)}}),[]),Object(S.jsx)("div",{children:j?Object(S.jsxs)("div",{children:[Object(S.jsxs)("p",{children:[j.nimi,": Kirjautunut sis\xe4\xe4n"]}),Object(S.jsxs)(D.a,{children:[Object(S.jsx)(h.a,{square:!0,style:{width:"500px",margin:"0 auto"},children:Object(S.jsxs)(E.a,{value:a,indicatorColor:"primary",textColor:"primary",onChange:function(t,e){i(e)},"aria-label":"disabled tabs example",children:[Object(S.jsx)(D.b,{to:"/",children:Object(S.jsx)(N.a,{label:"Teht\xe4v\xe4t",style:{margin:"0 auto"}})}),Object(S.jsx)(D.b,{to:"/lomake",children:Object(S.jsx)(N.a,{label:"Lis\xe4\xe4 teht\xe4v\xe4",style:{margin:"0 auto"}})}),Object(S.jsx)(D.b,{to:"/",children:Object(S.jsx)(N.a,{onClick:function(){return window.localStorage.removeItem("kirjautunutTunnus"),void d(null)},label:"kirjaudu ulos",style:{margin:"0 auto"}})})]})}),Object(S.jsxs)(W.c,{children:[Object(S.jsx)(W.a,{exact:!0,path:"/",render:function(){return Object(S.jsx)(_,{muokkaaState:k,tehtavaPoistaminenKasittelija:g,tehtavat:m,kayttaja:j.nimi})}}),Object(S.jsx)(W.a,{path:"/lomake",render:function(){return Object(S.jsx)(K,{tehtava:m,setTehtava:f})}})]})]})]}):Object(S.jsx)("div",{children:Object(S.jsx)(w,{setKayttaja:d})})})},P=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,153)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,i=e.getLCP,c=e.getTTFB;a(t),n(t),r(t),i(t),c(t)}))};c.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(I,{})}),document.getElementById("root")),P()},80:function(t,e,a){}},[[106,1,2]]]);
//# sourceMappingURL=main.af6dd5d6.chunk.js.map