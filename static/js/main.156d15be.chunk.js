(this.webpackJsonpbabyTracker=this.webpackJsonpbabyTracker||[]).push([[0],{130:function(e,a,t){e.exports=t(237)},135:function(e,a,t){},237:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(10),c=t.n(o),l=(t(135),t(27)),i=t(33),s=t(292),m=t(291),d=t(6),u=t(122),b=t(282),p=t(283),g=t(281),f=t(284),h=t(114),E=t.n(h),O=t(121),v=t(298),j=t(4),k=Object(j.a)({paper:{border:"1px solid #d3d4d5"}})((function(e){return r.a.createElement(O.a,Object.assign({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))}));function C(e){var a=e.children,t=Object(g.a)({disableHysteresis:!0,threshold:0});return r.a.cloneElement(a,{elevation:t?4:0})}function x(e){var a=e.location.app,t=e.location.client,o=e.location.mongodbClient,c=e.location.db,l=Object(n.useState)(null),s=Object(d.a)(l,2),m=s[0],g=s[1],h=Object(n.useState)(!1),O=Object(d.a)(h,2),j=O[0],x=O[1],S=Object(n.useState)(""),w=Object(d.a)(S,2),y=w[0],N=w[1];return j?r.a.createElement(i.a,{to:{pathname:y,app:a,client:t,mongodbClient:o,db:c}}):r.a.createElement(C,e,r.a.createElement(b.a,null,r.a.createElement(p.a,null,r.a.createElement(f.a,{edge:"start",color:"inherit","aria-label":"menu"},r.a.createElement(E.a,{onClick:function(e){g(e.currentTarget)}}),r.a.createElement(k,{id:"simple-menu",anchorEl:m,keepMounted:!0,open:Boolean(m),onClose:function(){g(null)}},r.a.createElement(v.a,{onClick:function(e){g(e.currentTarget),x(!0),N("/add")}},"Add Data"),r.a.createElement(v.a,{onClick:function(e){g(e.currentTarget),x(!0),N("/dashboard")}},"Dashboard"),r.a.createElement(v.a,{onClick:function(e){g(e.currentTarget),x(!0),N("/logout")}},"Logout"))),r.a.createElement(u.a,{variant:"h5",component:"div"},"BabyTracker App"))))}var S=t(115),w=t.n(S),y=t(290),N=t(297),B=t(289),D=t(287),A=t(288),W=t(286),H=t(285),T=t(29),z=t(14),F=t.n(z);function R(e){var a=Object(n.useState)(!1),t=Object(d.a)(a,2),o=t[0],c=t[1],l=Object(T.a)(),i=Object(H.a)(l.breakpoints.down("sm")),s=e.dataType;Object(n.useEffect)((function(){c(e.openDialog)}),[e.openDialog]);var m=F()().format("MMMM Do YYYY, h:mm:ss a");return r.a.createElement("div",null,r.a.createElement(N.a,{fullScreen:i,open:o,onClose:e.handleClose,"aria-labelledby":"responsive-dialog-title"},r.a.createElement(W.a,{id:"responsive-dialog-title"},"Data Added!"),r.a.createElement(D.a,null,r.a.createElement(A.a,null,"Baldy ",s," at ",m,".")),r.a.createElement(B.a,null,r.a.createElement(y.a,{autoFocus:!0,onClick:e.handleClose,color:"primary"},"Close!"))))}var M=Object(m.a)((function(e){return{icon:{fontSize:"8rem",color:"#7164f9"},text:{fontSize:"2rem",borderBottomStyle:"solid",borderBottomColor:"grey",borderBottom:"1px",width:"75%",marginLeft:"14.5%"}}}));function Y(e){var a=M(),t=Object(n.useState)(!1),o=Object(d.a)(t,2),c=o[0],l=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{onClick:function(){var a=e.location.mongodbClient.db("baldyData").collection("sleepData"),t=e.location.user,n={month:F()().format("MMMM"),date:F()().format("dddd Do"),year:F()().format("YYYY"),time:F()().format("h:mm:ss a")};l(!0),a.insertOne({sleep:!0,timeStamp:n,user:t}).catch(console.error)}},r.a.createElement(w.a,{className:a.icon})),r.a.createElement(u.a,{className:a.text},"Sleep"),r.a.createElement(R,{openDialog:c,handleClose:function(){l(!1)},dataType:"sleep"}))}var I=t(116),L=t.n(I),q=Object(m.a)((function(e){return{icon:{fontSize:"8rem",color:"#b23f3f"},text:{fontSize:"2rem",borderBottomStyle:"solid",borderBottomColor:"grey",borderBottom:"1px",width:"75%",marginLeft:"14.5%"}}}));function J(e){var a=q(),t=Object(n.useState)(!1),o=Object(d.a)(t,2),c=o[0],l=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{onClick:function(){var a=e.location.mongodbClient.db("baldyData").collection("sleepData"),t=e.location.user,n={month:F()().format("MMMM"),date:F()().format("dddd Do"),year:F()().format("YYYY"),time:F()().format("h:mm:ss a")};l(!0),a.insertOne({sleep:!1,timeStamp:n,user:t}).catch(console.error)}},r.a.createElement(L.a,{className:a.icon})),r.a.createElement(u.a,{className:a.text},"Wake"),r.a.createElement(R,{openDialog:c,handleClose:function(){l(!1)},dataType:"wake"}))}var U=Object(m.a)((function(e){return{button:{marginTop:"15%",padding:e.spacing(1),textAlign:"center"}}}));var P=function(e){var a=U();return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,e),r.a.createElement(s.a,{container:!0,spacing:2},r.a.createElement(s.a,{item:!0,xs:12,sm:2,md:3}),r.a.createElement(s.a,{item:!0,xs:12,sm:4,md:3,className:a.button},r.a.createElement(Y,e)),r.a.createElement(s.a,{item:!0,xs:12,sm:4,md:3,className:a.button},r.a.createElement(J,e)),r.a.createElement(s.a,{item:!0,xs:12,sm:2,md:3})))};function _(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Help"))}var V=t(15),G=t(293),$=t(294),K=t(239),Q=t(300),X=t(295),Z=t(39),ee=t.n(Z),ae=t(18),te=Object(m.a)((function(e){var a,t;return{text:(a={padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary},Object(V.a)(a,e.breakpoints.down("sm"),{width:"85%",margin:"0 10%"}),Object(V.a)(a,e.breakpoints.up("md"),{width:"65%",margin:"0 15%"}),Object(V.a)(a,e.breakpoints.up("lg"),{width:"50%",margin:"0 25%"}),a),box:{backgroundColor:"whitesmoke",borderRadius:"5px",width:"50%",marginTop:e.spacing(8),marginLeft:"25%",display:"flex",flexDirection:"column",alignItems:"center",alignSelf:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main,border:"solid",borderColor:"lightgrey",borderWidth:"1px"},loginButton:{color:"white",border:"solid",borderColor:"black",borderWidth:"1px",margin:e.spacing(3,0,2)},loginHeader:(t={width:"40%",color:"black",textAlign:"center",alignContent:"center"},Object(V.a)(t,e.breakpoints.down("sm"),{fontSize:"22px"}),Object(V.a)(t,e.breakpoints.up("md"),{fontSize:"36px"}),Object(V.a)(t,e.breakpoints.up("lg"),{fontSize:"52px"}),t),link:{padding:"5%"},errorHeader:{width:"40%",color:"white",backgroundColor:"#f28c82",textAlign:"center",alignContent:"center",border:"none",borderRadius:"5px",margin:"0 25%",padding:e.spacing(1)},form:{width:"100%",marginTop:e.spacing(1)},signupButton:{color:"white",border:"solid",borderColor:"black",borderWidth:"1px",margin:e.spacing(1)}}}));var ne=function(){var e=Object(n.useState)(""),a=Object(d.a)(e,2),t=a[0],o=a[1],c=Object(n.useState)(""),s=Object(d.a)(c,2),m=s[0],b=s[1],p=Object(n.useState)(""),g=Object(d.a)(p,2),f=g[0],h=g[1],E=Object(n.useState)(""),O=Object(d.a)(E,2),v=O[0],j=O[1],k=Object(n.useState)(""),C=Object(d.a)(k,2),x=C[0],S=C[1],w=Object(n.useState)(""),N=Object(d.a)(w,2),B=N[0],D=N[1],A=Object(n.useState)(""),W=Object(d.a)(A,2),H=W[0],T=W[1],z=Object(n.useState)(!1),F=Object(d.a)(z,2),R=F[0],M=F[1],Y=Object(n.useState)(""),I=Object(d.a)(Y,2),L=I[0],q=I[1],J=te();return Object(n.useEffect)((function(){var e=ae.b.initializeDefaultAppClient("baldytracker-vlawr"),a=e.getServiceClient(ae.a.factory,"mongodb-atlas"),t=a.db("baldyData").collection("userCreds"),n=ae.b.defaultAppClient;b(e),j(t),h(a),o(n)}),[]),R?r.a.createElement(i.a,{to:{pathname:"/add",app:t,client:m,db:v,mongodbClient:f,user:L}}):r.a.createElement(G.a,{maxWidth:"lg"},r.a.createElement($.a,null),r.a.createElement(K.a,{className:J.box},r.a.createElement(Q.a,{className:J.avatar},r.a.createElement(ee.a,null)),r.a.createElement(u.a,{className:J.loginHeader,variant:"h2"},"Sign In"),r.a.createElement("form",{className:J.form,noValidate:!0},r.a.createElement(X.a,{className:J.text,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:B,onChange:function(e){D(e.target.value)},autoFocus:!0}),r.a.createElement(X.a,{className:J.text,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",value:H,onChange:function(e){T(e.target.value)},type:"password",id:"password",autoComplete:"current-password"})),x?r.a.createElement(u.a,{className:J.errorHeader},"Invalid Credentials"):null,r.a.createElement(y.a,{type:"submit",variant:"contained",color:"primary",className:J.loginButton,onClick:function(){var e=new ae.d(B,H);t.auth.loginWithCredential(e).then((function(e){console.log("successfully logged in with id: ".concat(e.id)),q(e.id),M(!0)})).catch((function(e){console.error("login failed with error: ".concat(e)),S(e)}))}},"Sign In"),r.a.createElement(l.b,{to:{pathname:"/signup",app:t,client:m,db:v,mongodbClient:f},className:J.link},"First time user? Click here to Sign Up")))},re=t(40),oe=Object(m.a)((function(e){return{container:{margin:"15% 5% 5% 5%",backgroundColor:"#eceff1",padding:"5px",border:"none",borderRadius:"2px"},flex:{flexGrow:1,paddingTop:".4rem",margin:".4rem"},heading:{fontSize:"2rem",textAlign:"center",color:"#1a237e",margin:"2% 0 2% 0"},name:{backgroundColor:"whitesmoke",margin:"1px",color:"#1a237e",borderStyle:"solid",borderColor:"#78909c",borderWidth:"1px"}}}));function ce(e){var a=Object(n.useState)(void 0),t=Object(d.a)(a,2),o=t[0],c=t[1],l=e.location.app;Object(n.useEffect)((function(){l.getServiceClient(ae.a.factory,"mongodb-atlas").db("baldyData").collection("sleepData").find({}).toArray().then((function(e){c(e)})).catch((function(e){return e}))}),[o]);var i=oe(),s=function(){if(o){for(var e=0,a=0;a<o.length;a++)"5e698b195dabe06755978529"===o[a].user&&e++;var t=e/o.length*100;return[(100-t).toFixed(2),t.toFixed(2)]}return[0,0]}(),m=Object(d.a)(s,2),b={labels:["Ashley Effort","Jack Effort"],datasets:[{data:[m[0],m[1]],backgroundColor:["#FF6384","#36A2EB"],hoverBackgroundColor:["#FF6384","#36A2EB"]}]};return r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,{elevation:3,className:i.container},r.a.createElement(u.a,{className:i.heading},"Effort"),r.a.createElement(re.b,{data:b})))}var le=Object(m.a)((function(e){return{container:{margin:"2.5% 5% 5% 5%",backgroundColor:"#eceff1",padding:"5px",border:"none",borderRadius:"2px"},heading:{fontSize:"2rem",textAlign:"center",color:"#1a237e",margin:"2% 0 2% 0"}}}));function ie(e){var a=Object(n.useState)(void 0),t=Object(d.a)(a,2),o=t[0],c=t[1],l=Object(n.useState)(void 0),s=Object(d.a)(l,2),m=s[0],b=s[1],p=e.location.app;Object(n.useEffect)((function(){!function(){var e={sort:{current_date:-1}},a=p.getServiceClient(ae.a.factory,"mongodb-atlas").db("baldyData").collection("sleepData");a.find({sleep:!0},e).toArray().then((function(e){c(e)})).catch((function(e){return e})),a.find({sleep:!1},e).toArray().then((function(e){b(e)})).catch((function(e){return e}))}()}),[o]);var g=function(){if(o&&m){for(var e=[],a=[],t=0;t<o.length;t++){a.push(o[t].timeStamp.date);var n=o[t].timeStamp.time,r=m[t].timeStamp.time,c=F.a.duration(F()(r,"h:mm:ss a").diff(F()(n,"h:mm:ss a"))).asSeconds()/60;e.push(c)}return[e,a]}return[[],[]]}(),f=Object(d.a)(g,2),h=f[0],E={labels:f[1],datasets:[{label:"Sleep Duration",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:h}]},O=le();return p?r.a.createElement(K.a,{elevation:3,className:O.container},r.a.createElement(u.a,{className:O.heading},"Sleep Timeline"),o&&m?r.a.createElement(re.a,{data:E}):r.a.createElement(u.a,null,"Loading...")):r.a.createElement(i.a,{to:{pathname:"/logout"}})}var se=Object(m.a)((function(e){return{container:{margin:"2.5% 5% 5% 5%",backgroundColor:"#eceff1",padding:"5px",border:"none",borderRadius:"2px"},heading:{fontSize:"2rem",textAlign:"center",color:"#1a237e",margin:"2% 0 2% 0"}}}));function me(e){var a=Object(n.useState)(void 0),t=Object(d.a)(a,2),o=t[0],c=t[1],l=Object(n.useState)(void 0),s=Object(d.a)(l,2),m=s[0],b=s[1],p=Object(n.useState)([]),g=Object(d.a)(p,2),f=(g[0],g[1]),h=Object(n.useState)(!1),E=Object(d.a)(h,2),O=E[0],v=E[1],j=Object(n.useState)(void 0),k=Object(d.a)(j,2),C=k[0],x=k[1],S=e.location.app;Object(n.useEffect)((function(){!function(){var e={sort:{current_date:-1}},a=S.getServiceClient(ae.a.factory,"mongodb-atlas").db("baldyData").collection("sleepData");a.find({sleep:!0},e).toArray().then((function(e){c(e)})).catch((function(e){return e})),a.find({sleep:!1},e).toArray().then((function(e){b(e)})).catch((function(e){return e}))}(),function(){if(o&&m&&!O){for(var e=[],a=0,t=0,n=0,r=0,c=0,l=0,i=0,s=0,d=0,u=0,b=0,p=0,g=0,h=0,E=0,j=0,k=0,C=0,S=0,w=0,y=0,N=0,B=0,D=0,A=0;A<o.length;A++){switch(F()(o[A].timeStamp.time,"h:mm:ss a").format("HH")){case"00":a++;break;case"01":t++;break;case"02":n++;break;case"03":r++;break;case"04":c++;break;case"05":l++;break;case"06":i++;break;case"07":s++;break;case"08":d++;break;case"09":u++;break;case"10":b++;break;case"11":p++;break;case"12":g++;break;case"13":h++;break;case"14":E++;break;case"15":j++;break;case"16":k++;break;case"17":C++;break;case"18":S++;break;case"19":w++;break;case"20":y++;break;case"21":N++;break;case"22":B++;break;case"23":D++}}e.push(a,t,n,r,c,l,i,s,d,u,b,p,g,h,E,j,k,C,S,w,y,N,B,D),f(e),x({labels:["12 a.m.","1 a.m.","2 a.m.","3 a.m.","4 a.m.","5 a.m.","6 a.m.","7 a.m.","8 a.m.","9 a.m.","10 a.m.","11 a.m.","12 p.m.","1 p.m.","2 p.m.","3 p.m.","4 p.m.","5 p.m.","6  p.m.","7 p.m.","8 p.m.","9 p.m.","10 p.m.","11 p.m."],datasets:[{label:"Sleep Frequency",fill:!0,lineTension:.25,backgroundColor:"rgba(134, 191, 214, 0.27)",borderColor:"rgba(62, 93, 214, 1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(62, 93, 214, 1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:e}]}),v(!0)}else{f([0])}}()}),[o]);var w=se();return S?r.a.createElement(K.a,{elevation:3,className:w.container},r.a.createElement(u.a,{className:w.heading},"When does he sleep?"),C&&O?r.a.createElement(re.a,{data:C}):r.a.createElement(u.a,null,"Loading...")):r.a.createElement(i.a,{to:{pathname:"/logout"}})}function de(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,e),r.a.createElement(s.a,{container:!0,spacing:2},r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:6,lg:6},r.a.createElement(ce,e)),r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:6,lg:6},r.a.createElement(ie,e)),r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:6,lg:6},r.a.createElement(me,e))))}var ue=Object(m.a)((function(e){var a,t;return{text:(a={padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary},Object(V.a)(a,e.breakpoints.down("sm"),{width:"85%",margin:"0 10%"}),Object(V.a)(a,e.breakpoints.up("md"),{width:"50%",margin:"0 25%"}),Object(V.a)(a,e.breakpoints.up("lg"),{width:"50%",margin:"0 25%"}),a),box:{backgroundColor:"whitesmoke",borderRadius:"5px",width:"50%",marginTop:e.spacing(8),marginLeft:"25%",display:"flex",flexDirection:"column",alignItems:"center",alignSelf:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main,border:"solid",borderColor:"lightgrey",borderWidth:"1px"},loginButton:{color:"white",border:"solid",borderColor:"black",borderWidth:"1px",margin:e.spacing(3,0,2)},loginHeader:(t={width:"40%",color:"black",textAlign:"center",alignContent:"center"},Object(V.a)(t,e.breakpoints.down("sm"),{fontSize:"22px"}),Object(V.a)(t,e.breakpoints.up("md"),{fontSize:"36px"}),Object(V.a)(t,e.breakpoints.up("lg"),{fontSize:"52px"}),t),errorHeader:{width:"40%",color:"white",backgroundColor:"#f28c82",textAlign:"center",alignContent:"center",border:"none",borderRadius:"5px",margin:"0 25%",padding:e.spacing(1)},form:{width:"100%",marginTop:e.spacing(1)}}}));var be=function(e){var a=Object(n.useState)(""),t=Object(d.a)(a,2),o=t[0],c=t[1],l=Object(n.useState)(""),s=Object(d.a)(l,2),m=s[0],b=s[1],p=Object(n.useState)(""),g=Object(d.a)(p,2),f=g[0],h=g[1],E=Object(n.useState)(""),O=Object(d.a)(E,2),v=O[0],j=O[1],k=Object(n.useState)(!1),C=Object(d.a)(k,2),x=(C[0],C[1]),S=Object(n.useState)(!1),w=Object(d.a)(S,2),N=w[0],B=w[1],D=Object(n.useState)(""),A=Object(d.a)(D,2),W=A[0],H=A[1],T=Object(n.useState)(""),z=Object(d.a)(T,2),F=z[0],R=z[1],M=Object(n.useState)(""),Y=Object(d.a)(M,2),I=Y[0],L=Y[1],q=Object(n.useState)(!1),J=Object(d.a)(q,2),U=J[0],P=J[1],_=Object(n.useState)(""),V=Object(d.a)(_,2),Z=V[0],te=V[1],ne=ue();Object(n.useEffect)((function(){b(e.location.client),h(e.location.mongdbClient),j(e.location.db),c(e.location.app)}),[e.location]);var re=function(e){v.insertOne({owner_id:e,email:F,password:I}).then((function(){P(!0)})).catch((function(e){console.log("Create User Error "+e),B(!0),H(e)}))};return U?r.a.createElement(i.a,{to:{pathname:"/add",app:o,client:m,db:v,mongodbClient:f,user:Z}}):r.a.createElement(G.a,{maxWidth:"lg"},r.a.createElement($.a,null),r.a.createElement(K.a,{className:ne.box},r.a.createElement(Q.a,{className:ne.avatar},r.a.createElement(ee.a,null)),r.a.createElement(u.a,{className:ne.loginHeader,variant:"h3"},"New User Sign In"),r.a.createElement("form",{className:ne.form,noValidate:!0},r.a.createElement(X.a,{className:ne.text,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:F,onChange:function(e){R(e.target.value)},autoFocus:!0}),r.a.createElement(X.a,{className:ne.text,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",value:I,onChange:function(e){L(e.target.value)},type:"password",id:"password",autoComplete:"current-password"})),N?r.a.createElement(u.a,{className:ne.errorHeader},W.message):null,r.a.createElement(y.a,{type:"submit",variant:"contained",color:"primary",className:ne.loginButton,onClick:function(){m.auth.getProviderClient(ae.c.factory).registerWithEmail(F,I).then((function(){!function(){var e=new ae.d(F,I);o.auth.loginWithCredential(e).then((function(e){console.log("successfully logged in with id: ".concat(e.id)),te(e.id),re(e.id)})).catch((function(e){console.error("login failed with error: ".concat(e)),x(e)}))}()})).catch((function(e){B(!0),H(e)}))}},"Create User")))},pe=Object(m.a)((function(e){var a;return{box:{backgroundColor:"whitesmoke",borderRadius:"5px",width:"50%",marginTop:e.spacing(8),marginLeft:"25%",display:"flex",flexDirection:"column",alignItems:"center",alignSelf:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main,border:"solid",borderColor:"lightgrey",borderWidth:"1px"},loginHeader:(a={width:"40%",color:"black",textAlign:"center",alignContent:"center",paddingBottom:"10%"},Object(V.a)(a,e.breakpoints.down("sm"),{fontSize:"22px"}),Object(V.a)(a,e.breakpoints.up("md"),{fontSize:"36px"}),Object(V.a)(a,e.breakpoints.up("lg"),{fontSize:"52px"}),a)}}));var ge=function(){var e=pe();return r.a.createElement(G.a,{maxWidth:"lg"},r.a.createElement($.a,null),r.a.createElement(K.a,{className:e.box},r.a.createElement(Q.a,{className:e.avatar},r.a.createElement(ee.a,null)),r.a.createElement(u.a,{className:e.loginHeader,variant:"h3"},"You have signed out.")))};var fe=function(){return r.a.createElement(l.a,{basename:window.location.pathname||""},r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",component:ne}),r.a.createElement(i.b,{exact:!0,path:"/signup",component:be}),r.a.createElement(i.b,{exact:!0,path:"/add",component:P}),r.a.createElement(i.b,{exact:!0,path:"/dashboard",component:de}),r.a.createElement(i.b,{exact:!0,path:"/help",component:_}),r.a.createElement(i.b,{exact:!0,path:"/logout",component:ge})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[130,1,2]]]);
//# sourceMappingURL=main.156d15be.chunk.js.map