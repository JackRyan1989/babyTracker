(this.webpackJsonpbabyTracker=this.webpackJsonpbabyTracker||[]).push([[0],{130:function(e,t,a){e.exports=a(237)},135:function(e,t,a){},237:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),l=a.n(o),c=(a(135),a(35)),i=a(32),d=a(291),m=a(290),s=a(6),u=a(122),b=a(281),p=a(282),g=a(280),f=a(283),h=a(114),E=a.n(h),O=a(121),v=a(297),j=a(4),x=Object(j.a)({paper:{border:"1px solid #d3d4d5"}})((function(e){return r.a.createElement(O.a,Object.assign({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))}));function C(e){var t=e.children,a=Object(g.a)({disableHysteresis:!0,threshold:0});return r.a.cloneElement(t,{elevation:a?4:0})}function S(e){var t=e.location.app,a=e.location.client,o=e.location.mongodbClient,l=e.location.db,c=Object(n.useState)(null),d=Object(s.a)(c,2),m=d[0],g=d[1],h=Object(n.useState)(!1),O=Object(s.a)(h,2),j=O[0],S=O[1],k=Object(n.useState)(""),w=Object(s.a)(k,2),y=w[0],N=w[1];return j?r.a.createElement(i.a,{to:{pathname:y,app:t,client:a,mongodbClient:o,db:l}}):r.a.createElement(C,e,r.a.createElement(b.a,null,r.a.createElement(p.a,null,r.a.createElement(f.a,{edge:"start",color:"inherit","aria-label":"menu"},r.a.createElement(E.a,{onClick:function(e){g(e.currentTarget)}}),r.a.createElement(x,{id:"simple-menu",anchorEl:m,keepMounted:!0,open:Boolean(m),onClose:function(){g(null)}},r.a.createElement(v.a,{onClick:function(e){g(e.currentTarget),S(!0),N("/add")}},"Add Data"),r.a.createElement(v.a,{onClick:function(e){g(e.currentTarget),S(!0),N("/dashboard")}},"Dashboard"),r.a.createElement(v.a,{onClick:function(e){g(e.currentTarget),S(!0),N("/logout")}},"Logout"))),r.a.createElement(u.a,{variant:"h5",component:"div"},"BabyTracker App"))))}var k=a(115),w=a.n(k),y=a(289),N=a(296),B=a(288),D=a(286),A=a(287),W=a(285),T=a(284),z=a(28),H=a(15),F=a.n(H);function M(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),o=a[0],l=a[1],c=Object(z.a)(),i=Object(T.a)(c.breakpoints.down("sm")),d=e.dataType;Object(n.useEffect)((function(){l(e.openDialog)}),[e.openDialog]);var m=F()().format("MMMM Do YYYY, h:mm:ss a");return r.a.createElement("div",null,r.a.createElement(N.a,{fullScreen:i,open:o,onClose:e.handleClose,"aria-labelledby":"responsive-dialog-title"},r.a.createElement(W.a,{id:"responsive-dialog-title"},"Data Added!"),r.a.createElement(D.a,null,r.a.createElement(A.a,null,"Baldy ",d," at ",m,".")),r.a.createElement(B.a,null,r.a.createElement(y.a,{autoFocus:!0,onClick:e.handleClose,color:"primary"},"Close!"))))}var Y=Object(m.a)((function(e){return{icon:{fontSize:"8rem",color:"#7164f9"},text:{fontSize:"2rem",borderBottomStyle:"solid",borderBottomColor:"grey",borderBottom:"1px",width:"75%",marginLeft:"14.5%"}}}));function R(e){var t=Y(),a=Object(n.useState)(!1),o=Object(s.a)(a,2),l=o[0],c=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{onClick:function(){var t=e.location.mongodbClient.db("baldyData").collection("sleepData"),a=e.location.user,n={month:F()().format("MMMM"),date:F()().format("dddd Do"),year:F()().format("YYYY"),time:F()().format("h:mm:ss a")};c(!0),t.insertOne({sleep:!0,timeStamp:n,user:a}).catch(console.error)}},r.a.createElement(w.a,{className:t.icon})),r.a.createElement(u.a,{className:t.text},"Sleep"),r.a.createElement(M,{openDialog:l,handleClose:function(){c(!1)},dataType:"sleep"}))}var I=a(116),L=a.n(I),q=Object(m.a)((function(e){return{icon:{fontSize:"8rem",color:"#b23f3f"},text:{fontSize:"2rem",borderBottomStyle:"solid",borderBottomColor:"grey",borderBottom:"1px",width:"75%",marginLeft:"14.5%"}}}));function J(e){var t=q(),a=Object(n.useState)(!1),o=Object(s.a)(a,2),l=o[0],c=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{onClick:function(){var t=e.location.mongodbClient.db("baldyData").collection("sleepData"),a=e.location.user,n={month:F()().format("MMMM"),date:F()().format("dddd Do"),year:F()().format("YYYY"),time:F()().format("h:mm:ss a")};c(!0),t.insertOne({sleep:!1,timeStamp:n,user:a}).catch(console.error)}},r.a.createElement(L.a,{className:t.icon})),r.a.createElement(u.a,{className:t.text},"Wake"),r.a.createElement(M,{openDialog:l,handleClose:function(){c(!1)},dataType:"wake"}))}var U=Object(m.a)((function(e){return{button:{marginTop:"15%",padding:e.spacing(1),textAlign:"center"}}}));var P=function(e){var t=U();return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,e),r.a.createElement(d.a,{container:!0,spacing:2},r.a.createElement(d.a,{item:!0,xs:12,sm:2,md:3}),r.a.createElement(d.a,{item:!0,xs:12,sm:4,md:3,className:t.button},r.a.createElement(R,e)),r.a.createElement(d.a,{item:!0,xs:12,sm:4,md:3,className:t.button},r.a.createElement(J,e)),r.a.createElement(d.a,{item:!0,xs:12,sm:2,md:3})))};function V(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Help"))}var _=a(14),G=a(292),$=a(293),K=a(239),Q=a(299),X=a(294),Z=a(39),ee=a.n(Z),te=a(19),ae=Object(m.a)((function(e){var t,a;return{text:(t={padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary},Object(_.a)(t,e.breakpoints.down("sm"),{width:"85%",margin:"0 10%"}),Object(_.a)(t,e.breakpoints.up("md"),{width:"50%",margin:"0 25%"}),Object(_.a)(t,e.breakpoints.up("lg"),{width:"50%",margin:"0 25%"}),t),box:{backgroundColor:"whitesmoke",borderRadius:"5px",width:"50%",marginTop:e.spacing(8),marginLeft:"25%",display:"flex",flexDirection:"column",alignItems:"center",alignSelf:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main,border:"solid",borderColor:"lightgrey",borderWidth:"1px"},loginButton:{color:"white",border:"solid",borderColor:"black",borderWidth:"1px",margin:e.spacing(3,0,2)},loginHeader:(a={width:"40%",color:"black",textAlign:"center",alignContent:"center"},Object(_.a)(a,e.breakpoints.down("sm"),{fontSize:"22px"}),Object(_.a)(a,e.breakpoints.up("md"),{fontSize:"36px"}),Object(_.a)(a,e.breakpoints.up("lg"),{fontSize:"52px"}),a),link:{padding:"5%"},errorHeader:{width:"40%",color:"white",backgroundColor:"#f28c82",textAlign:"center",alignContent:"center",border:"none",borderRadius:"5px",margin:"0 25%",padding:e.spacing(1)},form:{width:"100%",marginTop:e.spacing(1)},signupButton:{color:"white",border:"solid",borderColor:"black",borderWidth:"1px",margin:e.spacing(1)}}}));var ne=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(""),d=Object(s.a)(l,2),m=d[0],b=d[1],p=Object(n.useState)(""),g=Object(s.a)(p,2),f=g[0],h=g[1],E=Object(n.useState)(""),O=Object(s.a)(E,2),v=O[0],j=O[1],x=Object(n.useState)(""),C=Object(s.a)(x,2),S=C[0],k=C[1],w=Object(n.useState)(""),N=Object(s.a)(w,2),B=N[0],D=N[1],A=Object(n.useState)(""),W=Object(s.a)(A,2),T=W[0],z=W[1],H=Object(n.useState)(!1),F=Object(s.a)(H,2),M=F[0],Y=F[1],R=Object(n.useState)(""),I=Object(s.a)(R,2),L=I[0],q=I[1],J=ae();return Object(n.useEffect)((function(){var e=te.b.initializeDefaultAppClient("baldytracker-vlawr"),t=e.getServiceClient(te.a.factory,"mongodb-atlas"),a=t.db("baldyData").collection("userCreds"),n=te.b.defaultAppClient;b(e),j(a),h(t),o(n)}),[]),M?r.a.createElement(i.a,{to:{pathname:"/add",app:a,client:m,db:v,mongodbClient:f,user:L}}):r.a.createElement(G.a,{maxWidth:"lg"},r.a.createElement($.a,null),r.a.createElement(K.a,{className:J.box},r.a.createElement(Q.a,{className:J.avatar},r.a.createElement(ee.a,null)),r.a.createElement(u.a,{className:J.loginHeader,variant:"h2"},"Sign In"),r.a.createElement("form",{className:J.form,noValidate:!0},r.a.createElement(X.a,{className:J.text,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:B,onChange:function(e){D(e.target.value)},autoFocus:!0}),r.a.createElement(X.a,{className:J.text,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",value:T,onChange:function(e){z(e.target.value)},type:"password",id:"password",autoComplete:"current-password"})),S?r.a.createElement(u.a,{className:J.errorHeader},"Invalid Credentials"):null,r.a.createElement(y.a,{type:"submit",variant:"contained",color:"primary",className:J.loginButton,onClick:function(){var e=new te.d(B,T);a.auth.loginWithCredential(e).then((function(e){console.log("successfully logged in with id: ".concat(e.id)),q(e.id),Y(!0)})).catch((function(e){console.error("login failed with error: ".concat(e)),k(e)}))}},"Sign In"),r.a.createElement(c.b,{to:{pathname:"/signup",app:a,client:m,db:v,mongodbClient:f},className:J.link},"First time user? Click here to Sign Up")))},re=a(75),oe=Object(m.a)((function(e){return{container:{margin:"15% 5% 5% 5%",backgroundColor:"#eceff1",padding:"5px",border:"none",borderRadius:"2px"},flex:{flexGrow:1,paddingTop:".4rem",margin:".4rem"},heading:{fontSize:"2rem",textAlign:"center",color:"#1a237e",margin:"2% 0 2% 0"},name:{backgroundColor:"whitesmoke",margin:"1px",color:"#1a237e",borderStyle:"solid",borderColor:"#78909c",borderWidth:"1px"}}}));function le(e){var t=Object(n.useState)(void 0),a=Object(s.a)(t,2),o=a[0],l=a[1],c=e.location.app;Object(n.useEffect)((function(){c.getServiceClient(te.a.factory,"mongodb-atlas").db("baldyData").collection("sleepData").find({}).toArray().then((function(e){l(e)})).catch((function(e){return e}))}),[o]);var i=oe(),d=function(){if(o){for(var e=0,t=0;t<o.length;t++)"5e698b195dabe06755978529"===o[t].user&&e++;var a=e/o.length*100;return[(100-a).toFixed(2),a.toFixed(2)]}return[0,0]}(),m=Object(s.a)(d,2),b={labels:["Ashley Effort","Jack Effort"],datasets:[{data:[m[0],m[1]],backgroundColor:["#FF6384","#36A2EB"],hoverBackgroundColor:["#FF6384","#36A2EB"]}]};return r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,{elevation:3,className:i.container},r.a.createElement(u.a,{className:i.heading},"Effort"),r.a.createElement(re.b,{data:b})))}var ce=Object(m.a)((function(e){return{container:{margin:"15% 5% 5% 5%",backgroundColor:"#eceff1",padding:"5px",border:"none",borderRadius:"2px"},heading:{fontSize:"2rem",textAlign:"center",color:"#1a237e",margin:"2% 0 2% 0"}}}));function ie(e){var t=Object(n.useState)(void 0),a=Object(s.a)(t,2),o=a[0],l=a[1],c=Object(n.useState)(void 0),d=Object(s.a)(c,2),m=d[0],b=d[1],p=e.location.app;Object(n.useEffect)((function(){!function(){var e={sort:{current_date:-1}},t=p.getServiceClient(te.a.factory,"mongodb-atlas").db("baldyData").collection("sleepData");t.find({sleep:!0},e).toArray().then((function(e){l(e)})).catch((function(e){return e})),t.find({sleep:!1},e).toArray().then((function(e){b(e)})).catch((function(e){return e}))}()}),[o]);var g=function(){if(o&&m){for(var e=[],t=[],a=0;a<o.length;a++){t.push(o[a].timeStamp.date);var n=o[a].timeStamp.time,r=m[a].timeStamp.time,l=F.a.duration(F()(r,"h:mm:ss a").diff(F()(n,"h:mm:ss a"))).asSeconds();e.push(l)}return[e,t]}return[[],[]]}(),f=Object(s.a)(g,2),h=f[0],E={labels:f[1],datasets:[{label:"Sleep Duration",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:h}]},O=ce();return p?r.a.createElement(K.a,{elevation:3,className:O.container},r.a.createElement(u.a,{className:O.heading},"Sleep Timeline"),o&&m?r.a.createElement(re.a,{data:E}):r.a.createElement(u.a,null,"Loading...")):r.a.createElement(i.a,{to:{pathname:"/logout"}})}Object(m.a)((function(e){return{paper:{margin:"15% 5% 5% 5%",backgroundColor:"#eceff1",padding:"5px",border:"none",borderRadius:"2px"}}}));function de(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,e),r.a.createElement(d.a,{container:!0,spacing:2},r.a.createElement(d.a,{item:!0,xs:12,sm:12,md:6,lg:6},r.a.createElement(le,e)),r.a.createElement(d.a,{item:!0,xs:12,sm:12,md:6,lg:6},r.a.createElement(ie,e))))}var me=Object(m.a)((function(e){var t,a;return{text:(t={padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary},Object(_.a)(t,e.breakpoints.down("sm"),{width:"85%",margin:"0 10%"}),Object(_.a)(t,e.breakpoints.up("md"),{width:"50%",margin:"0 25%"}),Object(_.a)(t,e.breakpoints.up("lg"),{width:"50%",margin:"0 25%"}),t),box:{backgroundColor:"whitesmoke",borderRadius:"5px",width:"50%",marginTop:e.spacing(8),marginLeft:"25%",display:"flex",flexDirection:"column",alignItems:"center",alignSelf:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main,border:"solid",borderColor:"lightgrey",borderWidth:"1px"},loginButton:{color:"white",border:"solid",borderColor:"black",borderWidth:"1px",margin:e.spacing(3,0,2)},loginHeader:(a={width:"40%",color:"black",textAlign:"center",alignContent:"center"},Object(_.a)(a,e.breakpoints.down("sm"),{fontSize:"22px"}),Object(_.a)(a,e.breakpoints.up("md"),{fontSize:"36px"}),Object(_.a)(a,e.breakpoints.up("lg"),{fontSize:"52px"}),a),errorHeader:{width:"40%",color:"white",backgroundColor:"#f28c82",textAlign:"center",alignContent:"center",border:"none",borderRadius:"5px",margin:"0 25%",padding:e.spacing(1)},form:{width:"100%",marginTop:e.spacing(1)}}}));var se=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),o=a[0],l=a[1],c=Object(n.useState)(""),d=Object(s.a)(c,2),m=d[0],b=d[1],p=Object(n.useState)(""),g=Object(s.a)(p,2),f=g[0],h=g[1],E=Object(n.useState)(""),O=Object(s.a)(E,2),v=O[0],j=O[1],x=Object(n.useState)(!1),C=Object(s.a)(x,2),S=(C[0],C[1]),k=Object(n.useState)(!1),w=Object(s.a)(k,2),N=w[0],B=w[1],D=Object(n.useState)(""),A=Object(s.a)(D,2),W=A[0],T=A[1],z=Object(n.useState)(""),H=Object(s.a)(z,2),F=H[0],M=H[1],Y=Object(n.useState)(""),R=Object(s.a)(Y,2),I=R[0],L=R[1],q=Object(n.useState)(!1),J=Object(s.a)(q,2),U=J[0],P=J[1],V=Object(n.useState)(""),_=Object(s.a)(V,2),Z=_[0],ae=_[1],ne=me();Object(n.useEffect)((function(){b(e.location.client),h(e.location.mongdbClient),j(e.location.db),l(e.location.app)}),[e.location]);var re=function(e){v.insertOne({owner_id:e,email:F,password:I}).then((function(){P(!0)})).catch((function(e){console.log("Create User Error "+e),B(!0),T(e)}))};return U?r.a.createElement(i.a,{to:{pathname:"/add",app:o,client:m,db:v,mongodbClient:f,user:Z}}):r.a.createElement(G.a,{maxWidth:"lg"},r.a.createElement($.a,null),r.a.createElement(K.a,{className:ne.box},r.a.createElement(Q.a,{className:ne.avatar},r.a.createElement(ee.a,null)),r.a.createElement(u.a,{className:ne.loginHeader,variant:"h3"},"New User Sign In"),r.a.createElement("form",{className:ne.form,noValidate:!0},r.a.createElement(X.a,{className:ne.text,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:F,onChange:function(e){M(e.target.value)},autoFocus:!0}),r.a.createElement(X.a,{className:ne.text,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",value:I,onChange:function(e){L(e.target.value)},type:"password",id:"password",autoComplete:"current-password"})),N?r.a.createElement(u.a,{className:ne.errorHeader},W.message):null,r.a.createElement(y.a,{type:"submit",variant:"contained",color:"primary",className:ne.loginButton,onClick:function(){m.auth.getProviderClient(te.c.factory).registerWithEmail(F,I).then((function(){!function(){var e=new te.d(F,I);o.auth.loginWithCredential(e).then((function(e){console.log("successfully logged in with id: ".concat(e.id)),ae(e.id),re(e.id)})).catch((function(e){console.error("login failed with error: ".concat(e)),S(e)}))}()})).catch((function(e){B(!0),T(e)}))}},"Create User")))},ue=Object(m.a)((function(e){var t;return{box:{backgroundColor:"whitesmoke",borderRadius:"5px",width:"50%",marginTop:e.spacing(8),marginLeft:"25%",display:"flex",flexDirection:"column",alignItems:"center",alignSelf:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main,border:"solid",borderColor:"lightgrey",borderWidth:"1px"},loginHeader:(t={width:"40%",color:"black",textAlign:"center",alignContent:"center",paddingBottom:"10%"},Object(_.a)(t,e.breakpoints.down("sm"),{fontSize:"22px"}),Object(_.a)(t,e.breakpoints.up("md"),{fontSize:"36px"}),Object(_.a)(t,e.breakpoints.up("lg"),{fontSize:"52px"}),t)}}));var be=function(){var e=ue();return r.a.createElement(G.a,{maxWidth:"lg"},r.a.createElement($.a,null),r.a.createElement(K.a,{className:e.box},r.a.createElement(Q.a,{className:e.avatar},r.a.createElement(ee.a,null)),r.a.createElement(u.a,{className:e.loginHeader,variant:"h3"},"You have signed out.")))};var pe=function(){return r.a.createElement(c.a,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",component:ne}),r.a.createElement(i.b,{exact:!0,path:"/signup",component:se}),r.a.createElement(i.b,{exact:!0,path:"/add",component:P}),r.a.createElement(i.b,{exact:!0,path:"/dashboard",component:de}),r.a.createElement(i.b,{exact:!0,path:"/help",component:V}),r.a.createElement(i.b,{exact:!0,path:"/logout",component:be})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[130,1,2]]]);
//# sourceMappingURL=main.c3c79eb0.chunk.js.map