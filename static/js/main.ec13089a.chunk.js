(this.webpackJsonpbabyTracker=this.webpackJsonpbabyTracker||[]).push([[0],{150:function(e,a,t){e.exports=t(257)},155:function(e,a,t){},257:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(10),o=t.n(i),c=(t(155),t(41)),l=t(39),m=t(7),s=t(86),d=t(2),p=t(4),b=t(309),g=t(22),u=t(322),f=t(313),h=t(314),k=t(311),O=t(317),j=t(318),E=t(319),x=t(312),S=t(53),v=t(316),w=t(315),C=t(137),y=t.n(C),z=t(131),D=t.n(z),T=t(133),B=t.n(T),A=t(132),N=t.n(A),H=t(134),W=t.n(H),R=t(135),F=t.n(R),I=t(136),M=t.n(I),L=t(310),Y=t(117),X=t.n(Y),V=t(118),J=t.n(V),q=t(119),G=t.n(q),_=t(308),$=t(302),P=t(307),K=t(305),Q=t(306),U=t(304),Z=t(301),ee=t(11),ae=t.n(ee);function te(e){var a=Object(n.useState)(!1),t=Object(m.a)(a,2),i=t[0],o=t[1],c=Object(g.a)(),l=Object(Z.a)(c.breakpoints.down("sm")),s=e.dataType;Object(n.useEffect)((function(){o(e.openDialog)}),[e.openDialog]);var d=ae()().format("MMMM Do YYYY, h:mm:ss a");return r.a.createElement("div",null,r.a.createElement($.a,{fullScreen:l,open:i,onClose:e.handleClose,"aria-labelledby":"responsive-dialog-title"},r.a.createElement(U.a,{id:"responsive-dialog-title"},"Data Added!"),r.a.createElement(K.a,null,r.a.createElement(Q.a,null,"Baldy ",s," at ",d,".")),r.a.createElement(P.a,null,r.a.createElement(_.a,{autoFocus:!0,onClick:e.handleClose,color:"primary"},"Close!"))))}var ne=Object(b.a)((function(e){var a;return{sleep:Object(d.a)({color:"#7164f9",fontSize:"8rem"},e.breakpoints.down("sm"),{border:"solid lightgrey 1px",borderRadius:"5px"}),wake:Object(d.a)({color:"#b23f3f",fontSize:"8rem"},e.breakpoints.down("sm"),{border:"solid lightgrey 1px",borderRadius:"5px"}),move:Object(d.a)({color:"#EE6363",fontSize:"8rem"},e.breakpoints.down("sm"),{border:"solid lightgrey 1px",borderRadius:"5px"}),text:(a={width:"75%",textAlign:"center",color:"black",fontWeight:"300"},Object(d.a)(a,e.breakpoints.down("sm"),{display:"none"}),Object(d.a)(a,e.breakpoints.up("md"),{fontSize:"2rem"}),Object(d.a)(a,e.breakpoints.up("lg"),{fontSize:"2rem"}),a)}})),re=Object(b.a)((function(e){var a;return{sleep:Object(d.a)({right:"260px",color:"#7164f9",backgroundColor:"grey",fontSize:"8rem"},e.breakpoints.down("sm"),{border:"solid lightgrey 1px",borderRadius:"5px"}),wake:Object(d.a)({right:"260px",color:"#b23f3f",backgroundColor:"grey",fontSize:"8rem"},e.breakpoints.down("sm"),{border:"solid lightgrey 1px",borderRadius:"5px"}),move:Object(d.a)({color:"#EE6363",backgroundColor:"grey",fontSize:"8rem"},e.breakpoints.down("sm"),{border:"solid lightgrey 1px",borderRadius:"5px"}),text:(a={fontWeight:"300",textAlign:"center",color:"white"},Object(d.a)(a,e.breakpoints.down("sm"),{display:"none"}),Object(d.a)(a,e.breakpoints.up("md"),{fontSize:"2rem",width:"75%"}),Object(d.a)(a,e.breakpoints.up("lg"),{fontSize:"2rem",width:"100%"}),a)}}));function ie(e){var a,t=ae()().format("H");a=t<=6||t>=20?re():ne();var i=Object(n.useState)(!1),o=Object(m.a)(i,2),c=o[0],l=o[1];return r.a.createElement("div",null,r.a.createElement(_.a,{onClick:function(){var a=e.location.mongodbClient.db("baldyData").collection(e.collection),t=e.location.user,n={month:ae()().format("MMMM"),date:ae()().format("dddd Do"),year:ae()().format("YYYY"),time:ae()().format("h:mm:ss a")};l(!0),a.insertOne({sleep:e.sleep,timeStamp:n,user:t}).catch(console.error)}},"sleep"===e.buttonType?r.a.createElement(X.a,{className:a.sleep}):"wake"===e.buttonType?r.a.createElement(J.a,{className:a.wake}):"movement"===e.buttonType?r.a.createElement(G.a,{className:a.move}):null),r.a.createElement(S.a,{className:a.text},e.buttonType),r.a.createElement(te,{openDialog:c,handleClose:function(){l(!1)},dataType:e.buttonType}))}var oe=t(141),ce=t(36),le=Object(b.a)((function(e){var a,t;return{container:(a={backgroundColor:"#eceff1",padding:"5px",border:"none",borderRadius:"2px"},Object(d.a)(a,e.breakpoints.down("sm"),{margin:"1%",padding:"2.5px"}),Object(d.a)(a,e.breakpoints.up("md"),{margin:"2.5% 1% 1% 1%",padding:"5px"}),Object(d.a)(a,e.breakpoints.up("lg"),{margin:"2.5% 1% 1% 1%",padding:"5px"}),a),heading:(t={fontWeight:"300",textAlign:"center",color:"#1a237e"},Object(d.a)(t,e.breakpoints.down("sm"),{fontSize:"1.5rem",margin:"2% 0 0% 0"}),Object(d.a)(t,e.breakpoints.up("md"),{fontSize:"2rem",margin:"2% 0 0% 0"}),t),flex:{flexGrow:1,paddingTop:".4rem",margin:".4rem"},name:{backgroundColor:"whitesmoke",margin:"1px",color:"#1a237e",borderStyle:"solid",borderColor:"#78909c",borderWidth:"1px"}}}));function me(e){var a=e.data;e.location.app;var t=le(),n=function(){if(a){for(var e=0,t=0;t<a.length;t++)"5e698b195dabe06755978529"===a[t].user&&e++;var n=e/a.length*100;return[(100-n).toFixed(2),n.toFixed(2)]}return[0,0]}(),i=Object(m.a)(n,2),o={labels:["Ashley Effort","Jack Effort"],datasets:[{data:[i[0],i[1]],backgroundColor:["#FF6384","#36A2EB"],hoverBackgroundColor:["#FF6384","#36A2EB"]}]};return r.a.createElement(r.a.Fragment,null,r.a.createElement(oe.a,{elevation:3,className:t.container},r.a.createElement(S.a,{className:t.heading},"Effort"),r.a.createElement(ce.b,{data:o})))}var se=Object(b.a)((function(e){var a,t;return{container:(a={backgroundColor:"#eceff1",padding:"5px",border:"none",borderRadius:"2px"},Object(d.a)(a,e.breakpoints.down("sm"),{margin:"1%",padding:"2.5px"}),Object(d.a)(a,e.breakpoints.up("md"),{margin:"2.5% 1% 1% 1%",padding:"5px"}),Object(d.a)(a,e.breakpoints.up("lg"),{margin:"2.5% 1% 1% 1%",padding:"5px"}),a),heading:(t={fontWeight:"300",textAlign:"center",color:"#1a237e"},Object(d.a)(t,e.breakpoints.down("sm"),{fontSize:"1.5rem",margin:"2% 0 0% 0"}),Object(d.a)(t,e.breakpoints.up("md"),{fontSize:"2rem",margin:"2% 0 0% 0"}),t)}}));function de(e){var a=e.sleepData,t=e.wakeData,i=Object(n.useState)(!1),o=Object(m.a)(i,2),c=o[0],s=o[1],d=Object(n.useState)(void 0),p=Object(m.a)(d,2),b=p[0],g=p[1],u=e.location.app;Object(n.useEffect)((function(){!function(){if(a&&t&&!c){var e,n=[],r=[];e=a.length!==t.length?a.length<t.length?a.length:t.length:a.length;for(var i=0;i<e;i++){var o="".concat(a[i].timeStamp.month,", ").concat(a[i].timeStamp.date);r.push(o);var l=a[i].timeStamp.time,m=t[i].timeStamp.time,d=ae.a.duration(ae()(m,"h:mm:ss a").diff(ae()(l,"h:mm:ss a"))).asMinutes();n.push(d)}g({labels:r,datasets:[{label:"Sleep Duration",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:n}]}),s(!0)}}()}),[u]);var f=se();return u?r.a.createElement(oe.a,{elevation:3,className:f.container},r.a.createElement(S.a,{className:f.heading},"Sleep Timeline"),a&&t?r.a.createElement(ce.a,{data:b}):r.a.createElement(S.a,null,"Loading...")):r.a.createElement(l.a,{to:{pathname:"/logout"}})}var pe=Object(b.a)((function(e){var a,t;return{container:(a={backgroundColor:"#eceff1",padding:"5px",border:"none",borderRadius:"2px"},Object(d.a)(a,e.breakpoints.down("sm"),{margin:"1%",padding:"2.5px"}),Object(d.a)(a,e.breakpoints.up("md"),{margin:"2.5% 1% 1% 1%",padding:"5px"}),Object(d.a)(a,e.breakpoints.up("lg"),{margin:"2.5% 1% 1% 1%",padding:"5px"}),a),heading:(t={fontWeight:"300",textAlign:"center",color:"#1a237e"},Object(d.a)(t,e.breakpoints.down("sm"),{fontSize:"1.5rem",margin:"2% 0 0% 0"}),Object(d.a)(t,e.breakpoints.up("md"),{fontSize:"2rem",margin:"2% 0 0% 0"}),t)}}));function be(e){var a=Object(n.useState)(!1),t=Object(m.a)(a,2),i=t[0],o=t[1],c=Object(n.useState)(void 0),s=Object(m.a)(c,2),d=s[0],p=s[1],b=e.location.app,g=e.sleepData;Object(n.useEffect)((function(){!function(){if(g&&!i){for(var e=[],a=0,t=0,n=0,r=0,c=0,l=0,m=0,s=0,d=0,b=0,u=0,f=0,h=0,k=0,O=0,j=0,E=0,x=0,S=0,v=0,w=0,C=0,y=0,z=0,D=0;D<g.length;D++){switch(ae()(g[D].timeStamp.time,"h:mm:ss a").format("HH")){case"00":a++;break;case"01":t++;break;case"02":n++;break;case"03":r++;break;case"04":c++;break;case"05":l++;break;case"06":m++;break;case"07":s++;break;case"08":d++;break;case"09":b++;break;case"10":u++;break;case"11":f++;break;case"12":h++;break;case"13":k++;break;case"14":O++;break;case"15":j++;break;case"16":E++;break;case"17":x++;break;case"18":S++;break;case"19":v++;break;case"20":w++;break;case"21":C++;break;case"22":y++;break;case"23":z++}}e.push(a,t,n,r,c,l,m,s,d,b,u,f,h,k,O,j,E,x,S,v,w,C,y,z),p({labels:["12 a.m.","1 a.m.","2 a.m.","3 a.m.","4 a.m.","5 a.m.","6 a.m.","7 a.m.","8 a.m.","9 a.m.","10 a.m.","11 a.m.","12 p.m.","1 p.m.","2 p.m.","3 p.m.","4 p.m.","5 p.m.","6  p.m.","7 p.m.","8 p.m.","9 p.m.","10 p.m.","11 p.m."],datasets:[{label:"Sleep Frequency",fill:!0,lineTension:.25,backgroundColor:"rgba(134, 191, 214, 0.27)",borderColor:"rgba(62, 93, 214, 1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(62, 93, 214, 1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:e}]}),o(!0)}}()}),[b]);var u=pe();return b?r.a.createElement(oe.a,{elevation:3,className:u.container},r.a.createElement(S.a,{className:u.heading},"When does he sleep?"),d&&i?r.a.createElement(ce.a,{data:d}):r.a.createElement(S.a,null,"Loading...")):r.a.createElement(l.a,{to:{pathname:"/logout"}})}var ge=Object(b.a)((function(e){var a,t;return{container:(a={backgroundColor:"#eceff1",padding:"5px",border:"none",borderRadius:"2px"},Object(d.a)(a,e.breakpoints.down("sm"),{margin:"1%",padding:"2.5px"}),Object(d.a)(a,e.breakpoints.up("md"),{margin:"2.5% 1% 1% 1%",padding:"5px"}),Object(d.a)(a,e.breakpoints.up("lg"),{margin:"2.5% 1% 1% 1%",padding:"5px"}),a),heading:(t={fontWeight:"300",textAlign:"center",color:"#1a237e"},Object(d.a)(t,e.breakpoints.down("sm"),{fontSize:"1.5rem",margin:"2% 0 0% 0"}),Object(d.a)(t,e.breakpoints.up("md"),{fontSize:"2rem",margin:"2% 0 0% 0"}),t)}}));function ue(e){var a=e.movementData,t=Object(n.useState)(!1),i=Object(m.a)(t,2),o=i[0],c=i[1],s=Object(n.useState)(void 0),d=Object(m.a)(s,2),p=d[0],b=d[1],g=e.location.app;Object(n.useEffect)((function(){!function(){if(a&&!o){for(var e=[],t=0,n=0,r=0,i=0,l=0,m=0,s=0,d=0,p=0,g=0,u=0,f=0,h=0,k=0,O=0,j=0,E=0,x=0,S=0,v=0,w=0,C=0,y=0,z=0,D=0;D<a.length;D++){switch(ae()(a[D].timeStamp.time,"h:mm:ss a").format("HH")){case"00":t++;break;case"01":n++;break;case"02":r++;break;case"03":i++;break;case"04":l++;break;case"05":m++;break;case"06":s++;break;case"07":d++;break;case"08":p++;break;case"09":g++;break;case"10":u++;break;case"11":f++;break;case"12":h++;break;case"13":k++;break;case"14":O++;break;case"15":j++;break;case"16":E++;break;case"17":x++;break;case"18":S++;break;case"19":v++;break;case"20":w++;break;case"21":C++;break;case"22":y++;break;case"23":z++}}e.push(t,n,r,i,l,m,s,d,p,g,u,f,h,k,O,j,E,x,S,v,w,C,y,z),b({labels:["12 a.m.","1 a.m.","2 a.m.","3 a.m.","4 a.m.","5 a.m.","6 a.m.","7 a.m.","8 a.m.","9 a.m.","10 a.m.","11 a.m.","12 p.m.","1 p.m.","2 p.m.","3 p.m.","4 p.m.","5 p.m.","6  p.m.","7 p.m.","8 p.m.","9 p.m.","10 p.m.","11 p.m."],datasets:[{label:"Movement Frequency",fill:!0,lineTension:.25,backgroundColor:"rgba(238, 99, 99, 0.27)",borderColor:"rgba(238, 99, 99, 0.27)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(62, 93, 214, 1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:e}]}),c(!0)}}()}),[g]);var u=ge();return g?r.a.createElement(oe.a,{elevation:3,className:u.container},r.a.createElement(S.a,{className:u.heading},"When does he move?"),p&&o?r.a.createElement(ce.a,{data:p}):r.a.createElement(S.a,null,"Loading...")):r.a.createElement(l.a,{to:{pathname:"/"}})}var fe=Object(b.a)((function(e){var a,t,n,r,i,o,c,l,m;return{container:(a={backgroundColor:"#eceff1",padding:"5px",border:"none",borderRadius:"2px"},Object(d.a)(a,e.breakpoints.down("sm"),{margin:"1%",padding:"2.5px"}),Object(d.a)(a,e.breakpoints.up("md"),{margin:"2.5% 1% 1% 1%",padding:"5px"}),Object(d.a)(a,e.breakpoints.up("lg"),{margin:"2.5% 1% 1% 1%",padding:"5px"}),a),heading:(t={fontWeight:"300",textAlign:"center",color:"#1a237e"},Object(d.a)(t,e.breakpoints.down("sm"),{fontSize:"1.5rem",margin:"2% 0 0% 0"}),Object(d.a)(t,e.breakpoints.up("md"),{fontSize:"2rem",margin:"2% 0 0% 0"}),t),Mond:(n={color:"#110F2B",textAlign:"center",padding:"0.5%"},Object(d.a)(n,e.breakpoints.down("sm"),{fontSize:".75em"}),Object(d.a)(n,e.breakpoints.up("md"),{fontSize:"1em"}),Object(d.a)(n,e.breakpoints.up("lg"),{fontSize:"1.15em"}),n),Tues:(r={color:"#231F59",textAlign:"center",padding:"0.5%"},Object(d.a)(r,e.breakpoints.down("sm"),{fontSize:".75em"}),Object(d.a)(r,e.breakpoints.up("md"),{fontSize:"1em"}),Object(d.a)(r,e.breakpoints.up("lg"),{fontSize:"1.15em"}),r),Wedn:(i={color:"#352F87",textAlign:"center",padding:"0.5%"},Object(d.a)(i,e.breakpoints.down("sm"),{fontSize:".75em"}),Object(d.a)(i,e.breakpoints.up("md"),{fontSize:"1em"}),Object(d.a)(i,e.breakpoints.up("lg"),{fontSize:"1.15em"}),i),Thur:(o={color:"#473FB6",textAlign:"center",padding:"0.5%"},Object(d.a)(o,e.breakpoints.down("sm"),{fontSize:".75em"}),Object(d.a)(o,e.breakpoints.up("md"),{fontSize:"1em"}),Object(d.a)(o,e.breakpoints.up("lg"),{fontSize:"1.15em"}),o),Frid:(c={color:"#6358FB",textAlign:"center",padding:"0.5%"},Object(d.a)(c,e.breakpoints.down("sm"),{fontSize:".75em"}),Object(d.a)(c,e.breakpoints.up("md"),{fontSize:"1em"}),Object(d.a)(c,e.breakpoints.up("lg"),{fontSize:"1.15em"}),c),Satu:(l={color:"#1A1742",textAlign:"center",padding:"0.5%"},Object(d.a)(l,e.breakpoints.down("sm"),{fontSize:".75em"}),Object(d.a)(l,e.breakpoints.up("md"),{fontSize:"1em"}),Object(d.a)(l,e.breakpoints.up("lg"),{fontSize:"1.15em"}),l),Sund:(m={color:"#5147CD",textAlign:"center",padding:"0.5%"},Object(d.a)(m,e.breakpoints.down("sm"),{fontSize:".75em"}),Object(d.a)(m,e.breakpoints.up("md"),{fontSize:"1em"}),Object(d.a)(m,e.breakpoints.up("lg"),{fontSize:"1.15em"}),m)}}));function he(e){var a=e.movementData,t=fe();return r.a.createElement(oe.a,{elevation:3,className:t.container},r.a.createElement(S.a,{className:t.heading},"Movement List"),a?a.map((function(e){var a=e.timeStamp.date.substring(0,4);return r.a.createElement("div",null,r.a.createElement(S.a,{className:t[a]},e.timeStamp.time,", ",e.timeStamp.date," ",e.timeStamp.month," ",e.timeStamp.year," "))})):r.a.createElement(S.a,null,"Loading..."))}var ke=t(123),Oe=t.n(ke),je=t(124),Ee=t.n(je);function xe(e){var a=e.data,t=e.movementData;return r.a.createElement("div",{onClick:function(){return function(){if(a&&t){var e=[],n=[],r=[];a.forEach((function(a){e.push(a.user),n.push(a.sleep),r.push("".concat(a.timeStamp.date," ").concat(a.timeStamp.month," ").concat(a.timeStamp.time," ").concat(a.timeStamp.year))}));var i=[],o=[];t.forEach((function(e){i.push(e.user),o.push("".concat(e.timeStamp.date," ").concat(e.timeStamp.month," ").concat(e.timeStamp.time," ").concat(e.timeStamp.year))}));var c="data:text/csv;charset=utf-8,"+[e,["X"],n,["XX"],r,["XXX"],i,["XXXX"],o].map((function(e){return e.join(", \n")}));Oe()(c,"dezzySleepData.csv","csv")}}()}},r.a.createElement(Ee.a,null))}var Se=t(125),ve=t(126),we=t(139),Ce=t(127),ye=t(140),ze=t(5),De=t(321),Te=t(34),Be=Object(b.a)((function(e){var a,t;return{container:(a={backgroundColor:"#E7E6F0",padding:"5px",border:"none",borderRadius:"2px"},Object(d.a)(a,e.breakpoints.down("sm"),{margin:"1%",padding:"2.5px"}),Object(d.a)(a,e.breakpoints.up("md"),{margin:"2.5% 1% 1% 1%",padding:"5px"}),Object(d.a)(a,e.breakpoints.up("lg"),{margin:"2.5% 1% 1% 1%",padding:"5px"}),a),heading:(t={fontWeight:"300",textAlign:"center",color:"#1a237e"},Object(d.a)(t,e.breakpoints.down("sm"),{fontSize:"1.5rem",margin:"2% 0 0% 0"}),Object(d.a)(t,e.breakpoints.up("md"),{fontSize:"2rem",margin:"2% 0 0% 0"}),t),subHeading:{fontSize:"1.50rem",fontWeight:"500",margin:"2.5% 0 1% 0",textDecoration:"underline"},button:{margin:"2%"}}}));function Ae(e){var a=Be(),t=Object(n.useState)(void 0),i=Object(m.a)(t,2),o=i[0],c=i[1],l=Object(n.useState)(void 0),s=Object(m.a)(l,2),d=s[0],p=s[1],b=Object(n.useState)(!0),g=Object(m.a)(b,2),u=g[0],f=g[1],h=e.location.app.getServiceClient(Te.a.factory,"mongodb-atlas").db("baldyData").collection("contractionData"),k=e.dataAdded;Object(n.useEffect)((function(){!0!==u&&!0!==k||(h.find({}).toArray().then((function(e){p(e)})).catch((function(e){return e})),f(!1))}),[u,k]);return r.a.createElement(oe.a,{className:a.container},r.a.createElement(S.a,{className:a.heading},"Contraction Log"),r.a.createElement(L.a,{container:!0},r.a.createElement(L.a,{xs:4,className:a.subHeading},"Start Time"),r.a.createElement(L.a,{xs:4,className:a.subHeading},"Duration"),r.a.createElement(L.a,{xs:4,className:a.subHeading},"Comment"),d?d.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{item:!0,xs:4},r.a.createElement(S.a,null,e.timeStamp.time,", ",e.timeStamp.date," ")),r.a.createElement(L.a,{item:!0,xs:4},r.a.createElement(S.a,null,e.duration)),r.a.createElement(L.a,{item:!0,xs:4},e.comment?r.a.createElement(S.a,null,e.comment):r.a.createElement("form",{noValidate:!0,autoComplete:"off"},r.a.createElement(De.a,{value:o,onChange:function(e){return function(e){c(e)}(e.target.value)},size:"small",id:"outlined-basic",label:"Add Comment",variant:"outlined"}),r.a.createElement(_.a,{className:a.button,onClick:function(){return a=e._id,h.updateOne({_id:a},{$set:{comment:o}},{upsert:!0}).catch(console.error),void f(!0);var a},variant:"contained",color:"primary",size:"small"},"Submit"))," "))})):r.a.createElement(L.a,{item:!0,xs:4},r.a.createElement(S.a,null,"Loading..."))))}var Ne=function(e){function a(e){var t;return Object(Se.a)(this,a),(t=Object(we.a)(this,Object(Ce.a)(a).call(this,e))).startTimer=function(){t.setState({timerOn:!0,timerStart:Date.now()-t.state.timerStart,timerTime:t.state.timerTime,timerOff:!1}),t.timer=setInterval((function(){t.setState({timerTime:Date.now()-t.state.timerStart})}),10)},t.stopTimer=function(e,a,n){t.setState({timerOn:!1,timerTime:0,timerStart:0,timerOff:!0}),clearInterval(t.timer);var r=t.props.location.mongodbClient.db("baldyData").collection("contractionData"),i={month:ae()().format("MMMM"),date:ae()().format("dddd Do"),year:ae()().format("YYYY"),time:ae()().format("h:mm:ss a")};r.insertOne({duration:e+":"+a+":"+n,timeStamp:i}).catch(console.error)},t.state={timerOn:!1,timerStart:0,timerTime:0,timerOff:!1},t}return Object(ye.a)(a,e),Object(ve.a)(a,[{key:"render",value:function(){var e=this,a=this.state.timerOff,t=this.props.classes,n=("0"+Math.floor(this.state.timerTime/10)%100).slice(-2),i=("0"+Math.floor(this.state.timerTime/1e3)%60).slice(-2),o=("0"+Math.floor(this.state.timerTime/6e4)%60).slice(-2);return r.a.createElement(oe.a,{elevation:3,className:t.timerContainer},r.a.createElement(L.a,{container:!0},this.state.timerOn?r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{item:!0,xs:3}),r.a.createElement(L.a,{item:!0,xs:6},r.a.createElement(S.a,{className:t.TimerText},o,":",i,":",n)),r.a.createElement(L.a,{item:!0,xs:3}),r.a.createElement(L.a,{item:!0,xs:3}),r.a.createElement(L.a,{item:!0,xs:6},r.a.createElement(_.a,{className:t.timeButtonActive,onClick:function(){return e.stopTimer(o,i,n)}},"Stop Timer"))):r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{item:!0,xs:3}),r.a.createElement(L.a,{item:!0,xs:6},r.a.createElement(S.a,{className:t.TimerText},"00:00:00")),r.a.createElement(L.a,{item:!0,xs:3}),r.a.createElement(L.a,{item:!0,xs:3}),r.a.createElement(L.a,{item:!0,xs:6},r.a.createElement(_.a,{className:t.timeButtonInactive,onClick:function(){return e.startTimer()}},"Start Timer"))),r.a.createElement(L.a,{item:!0,xs:12},r.a.createElement(Ae,Object.assign({},this.props,{dataAdded:a})))))}}]),a}(n.Component),He=Object(ze.a)((function(e){var a,t;return{timerContainer:(a={backgroundColor:"#eceff1",padding:"5px",border:"none",borderRadius:"2px"},Object(d.a)(a,e.breakpoints.down("sm"),{margin:"1%",padding:"2.5px"}),Object(d.a)(a,e.breakpoints.up("md"),{margin:"2.5% 1% 1% 1%",padding:"5px"}),Object(d.a)(a,e.breakpoints.up("lg"),{margin:"2.5% 1% 1% 1%",padding:"5px"}),a),TimerText:(t={fontSize:"1.75rem",margin:"2% 0 0% 0",textAlign:"left",border:"none",borderRadius:"2px",padding:"5%",backgroundColor:"whitesmoke"},Object(d.a)(t,"textAlign","center"),Object(d.a)(t,"alignContent","center"),t),timeButtonInactive:{backgroundColor:"lightblue",color:"black",marginTop:"5%",marginBottom:"2.5%",textAlign:"center",width:"100%"},timeButtonActive:{backgroundColor:"pink",color:"black",marginTop:"5%",marginBottom:"2.5%",textAlign:"center",width:"100%"}}}))(Ne),We=Object(b.a)((function(e){var a,t;return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(d.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(s.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(1)},button:{alignItems:"center",padding:e.spacing(1),textAlign:"center"},dataView:(a={marginTop:"5%",color:"black"},Object(d.a)(a,e.breakpoints.down("sm"),{fontSize:"2.5rem",fontWeight:"300",lineHeight:"1.2",letterSpacing:"-0.00833em"}),Object(d.a)(a,e.breakpoints.up("md"),{fontSize:"2.75rem",fontWeight:"300",lineHeight:"1.2",letterSpacing:"-0.00833em"}),Object(d.a)(a,e.breakpoints.up("lg"),{fontSize:"3.75rem",fontWeight:"300",lineHeight:"1.2",letterSpacing:"-0.00833em"}),a),dataAdd:(t={color:"black"},Object(d.a)(t,e.breakpoints.down("sm"),{fontSize:"2.5rem",fontWeight:"300",lineHeight:"1.2",letterSpacing:"-0.00833em"}),Object(d.a)(t,e.breakpoints.up("md"),{fontSize:"2.75rem",fontWeight:"300",lineHeight:"1.2",letterSpacing:"-0.00833em"}),Object(d.a)(t,e.breakpoints.up("lg"),{fontSize:"3.75rem",fontWeight:"300",lineHeight:"1.2",letterSpacing:"-0.00833em"}),t)}})),Re=Object(b.a)((function(e){var a,t;return{root:{display:"flex",backgroundColor:"grey"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(d.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(s.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(1)},button:{alignItems:"center",padding:e.spacing(1),textAlign:"center"},dataView:(a={marginTop:"5%",color:"white"},Object(d.a)(a,e.breakpoints.down("sm"),{fontSize:"2.5rem",fontWeight:"300",lineHeight:"1.2",letterSpacing:"-0.00833em"}),Object(d.a)(a,e.breakpoints.up("md"),{fontSize:"2.75rem",fontWeight:"300",lineHeight:"1.2",letterSpacing:"-0.00833em"}),Object(d.a)(a,e.breakpoints.up("lg"),{fontSize:"3.75rem",fontWeight:"300",lineHeight:"1.2",letterSpacing:"-0.00833em"}),a),dataAdd:(t={color:"white"},Object(d.a)(t,e.breakpoints.down("sm"),{fontSize:"2.5rem",fontWeight:"300",lineHeight:"1.2",letterSpacing:"-0.00833em"}),Object(d.a)(t,e.breakpoints.up("md"),{fontSize:"2.75rem",fontWeight:"300",lineHeight:"1.2",letterSpacing:"-0.00833em"}),Object(d.a)(t,e.breakpoints.up("lg"),{fontSize:"3.75rem",fontWeight:"300",lineHeight:"1.2",letterSpacing:"-0.00833em"}),t)}}));function Fe(e){var a,t=ae()().format("H");a=t<=6||t>=20?Re():We();var i,o,c=Object(g.a)(),s=Object(n.useState)(!1),b=Object(m.a)(s,2),C=b[0],z=b[1],T=Object(n.useState)(!0),A=Object(m.a)(T,2),H=A[0],R=A[1],I=Object(n.useState)(!0),Y=Object(m.a)(I,2),X=Y[0],V=Y[1],J=Object(n.useState)(!1),q=Object(m.a)(J,2),G=q[0],_=q[1],$=Object(n.useState)(!1),P=Object(m.a)($,2),K=P[0],Q=P[1],U=Object(n.useState)(null),Z=Object(m.a)(U,2),ee=Z[0],te=Z[1];function ne(e){"add"===e?V(!X):"view"===e?R(!H):"timer"===e&&_(!G)}return K?r.a.createElement(l.a,{to:{pathname:ee}}):r.a.createElement("div",{className:a.root},r.a.createElement(x.a,null),r.a.createElement(f.a,{position:"fixed",className:Object(p.a)(a.appBar,Object(d.a)({},a.appBarShift,C))},r.a.createElement(h.a,null,r.a.createElement(w.a,{color:"inherit","aria-label":"open drawer",onClick:function(){z(!0)},edge:"start",className:Object(p.a)(a.menuButton,Object(d.a)({},a.hide,C))},r.a.createElement(D.a,null)),r.a.createElement(S.a,{variant:"h6",noWrap:!0},"Dezzy Data App"))),r.a.createElement(u.a,{variant:"permanent",className:Object(p.a)(a.drawer,(i={},Object(d.a)(i,a.drawerOpen,C),Object(d.a)(i,a.drawerClose,!C),i)),classes:{paper:Object(p.a)((o={},Object(d.a)(o,a.drawerOpen,C),Object(d.a)(o,a.drawerClose,!C),o))}},r.a.createElement("div",{className:a.toolbar},r.a.createElement(w.a,{onClick:function(){z(!1)}},"rtl"===c.direction?r.a.createElement(N.a,null):r.a.createElement(B.a,null))),r.a.createElement(v.a,null),r.a.createElement(k.a,null,r.a.createElement(O.a,{button:!0,key:"addData",onClick:function(){return ne("add")}},r.a.createElement(j.a,null,r.a.createElement(W.a,null)),r.a.createElement(E.a,{primary:"Add Data"})),r.a.createElement(O.a,{button:!0,key:"ViewData",onClick:function(){return ne("view")}},r.a.createElement(j.a,null,r.a.createElement(F.a,null)),r.a.createElement(E.a,{primary:"View Data"})),r.a.createElement(O.a,{button:!0,key:"viewTimer",onClick:function(){return ne("timer")}},r.a.createElement(j.a,null,r.a.createElement(M.a,null)),r.a.createElement(E.a,{primary:"View Timer"})),r.a.createElement(O.a,{button:!0,key:"downloadData"},r.a.createElement(j.a,null,r.a.createElement(xe,Object.assign({},e,{data:e.data,movementData:e.movementData}))),r.a.createElement(E.a,{primary:"Download Data"})),r.a.createElement(v.a,null),r.a.createElement(O.a,{button:!0,key:"logout",onClick:function(){return Q(!0),void te("/logout")}},r.a.createElement(j.a,null,r.a.createElement(y.a,null)),r.a.createElement(E.a,{primary:"Log Out"})))),r.a.createElement("main",{className:a.content},r.a.createElement("div",{className:a.toolbar}),r.a.createElement(L.a,{container:!0},X&&!G?r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{item:!0,xs:12},r.a.createElement(S.a,{className:a.dataAdd},"Record Data:")),r.a.createElement(L.a,{item:!0,xs:12,sm:4,md:4,className:a.button},r.a.createElement(ie,Object.assign({collection:"movementData",sleep:"false",buttonType:"movement"},e))),r.a.createElement(L.a,{item:!0,xs:12,sm:4,md:4,className:a.button},r.a.createElement(ie,Object.assign({collection:"sleepData",sleep:"true",buttonType:"sleep"},e))),r.a.createElement(L.a,{item:!0,xs:12,sm:4,md:4,className:a.button},r.a.createElement(ie,Object.assign({collection:"sleepData",sleep:"false",buttonType:"wake"},e)))):null,H&&!G?r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{item:!0,xs:12},r.a.createElement(S.a,{className:a.dataView},"View Data:")),r.a.createElement(L.a,{item:!0,xs:12,sm:12,md:6,lg:6},r.a.createElement(be,Object.assign({},e,{sleepData:e.sleepData}))),r.a.createElement(L.a,{item:!0,xs:12,sm:12,md:6,lg:6},r.a.createElement(de,Object.assign({},e,{sleepData:e.sleepData,wakeData:e.wakeData}))),r.a.createElement(L.a,{item:!0,xs:12,sm:12,md:6,lg:6},r.a.createElement(me,Object.assign({},e,{data:e.data}))),r.a.createElement(L.a,{item:!0,xs:12,sm:12,md:6,lg:6},r.a.createElement(ue,Object.assign({},e,{movementData:e.movementData}))),r.a.createElement(L.a,{item:!0,xs:12,sm:12,md:12,lg:12},r.a.createElement(he,Object.assign({},e,{movementData:e.movementData})))):null,G?r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{item:!0,xs:12},r.a.createElement(S.a,{className:a.dataAdd},"View Timer:")),r.a.createElement(L.a,{item:!0,lg:1}),r.a.createElement(L.a,{item:!0,xs:12,sm:12,md:10,lg:10},r.a.createElement(He,e)),r.a.createElement(L.a,{item:!0,lg:1})):null)))}function Ie(e){var a=Object(n.useState)(void 0),t=Object(m.a)(a,2),i=t[0],o=t[1],c=Object(n.useState)(void 0),l=Object(m.a)(c,2),s=l[0],d=l[1],p=Object(n.useState)(void 0),b=Object(m.a)(p,2),g=b[0],u=b[1],f=Object(n.useState)(void 0),h=Object(m.a)(f,2),k=h[0],O=h[1],j=e.location.app;return Object(n.useEffect)((function(){var e={sort:{current_date:-1}},a=j.getServiceClient(Te.a.factory,"mongodb-atlas"),t=a.db("baldyData").collection("sleepData");a.db("baldyData").collection("movementData").find({},e).toArray().then((function(e){O(e)})).catch((function(e){return e})),t.find({sleep:"true"},e).toArray().then((function(e){d(e)})).catch((function(e){return e})),t.find({sleep:"false"},e).toArray().then((function(e){u(e)})).catch((function(e){return e})),t.find({}).toArray().then((function(e){o(e)})).catch((function(e){return e}))}),[j]),i&&s&&g&&k?r.a.createElement(r.a.Fragment,null,r.a.createElement(Fe,Object.assign({},e,{data:i,sleepData:s,wakeData:g,movementData:k}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,null,"Loading Data..."))}var Me=t(320),Le=Object(b.a)((function(e){var a,t,n;return{text:(a={padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary},Object(d.a)(a,e.breakpoints.down("sm"),{width:"85%",margin:"0 10%"}),Object(d.a)(a,e.breakpoints.up("md"),{width:"65%",margin:"0 15%"}),Object(d.a)(a,e.breakpoints.up("lg"),{width:"50%",margin:"0 25%"}),a),box:(t={backgroundColor:"whitesmoke",borderRadius:"5px",display:"flex",flexDirection:"column",alignItems:"center",alignSelf:"center"},Object(d.a)(t,e.breakpoints.down("sm"),{width:"100%",height:"85%",marginTop:"2.5%",paddingBottom:"2.5%",paddingTop:"2.5%"}),Object(d.a)(t,e.breakpoints.up("md"),{width:"75%",height:"100%",paddingTop:"2.5%",paddingBottom:"2.5%",marginLeft:"7.5%",marginTop:"2.5%"}),Object(d.a)(t,e.breakpoints.up("lg"),{width:"75%",height:"100%",paddingTop:"2.5%",paddingBottom:"2.5%",marginLeft:"12.5%",marginTop:"5%"}),t),loginButton:{color:"white",border:"solid",borderColor:"black",borderWidth:"1px",margin:e.spacing(3,0,2)},loginHeader:(n={width:"40%",color:"black",textAlign:"center",alignContent:"center"},Object(d.a)(n,e.breakpoints.down("sm"),{fontSize:"22px"}),Object(d.a)(n,e.breakpoints.up("md"),{fontSize:"36px"}),Object(d.a)(n,e.breakpoints.up("lg"),{fontSize:"52px"}),n),link:{padding:"5%"},errorHeader:{width:"40%",color:"white",backgroundColor:"#f28c82",textAlign:"center",alignContent:"center",border:"none",borderRadius:"5px",margin:"0 25%",padding:e.spacing(1)},form:{width:"100%",marginTop:e.spacing(1)},signupButton:{color:"white",border:"solid",borderColor:"black",borderWidth:"1px",margin:e.spacing(1)}}})),Ye=Object(b.a)((function(e){var a,t,n;return{text:(a={padding:e.spacing(1),textAlign:"center",color:"whitesmoke"},Object(d.a)(a,e.breakpoints.down("sm"),{width:"85%",margin:"0 10%"}),Object(d.a)(a,e.breakpoints.up("md"),{width:"65%",margin:"0 15%"}),Object(d.a)(a,e.breakpoints.up("lg"),{width:"50%",margin:"0 25%"}),a),box:(t={backgroundColor:"grey",borderRadius:"5px",display:"flex",flexDirection:"column",alignItems:"center",alignSelf:"center"},Object(d.a)(t,e.breakpoints.down("sm"),{width:"100%",height:"85%",marginTop:"2.5%",paddingBottom:"2.5%",paddingTop:"2.5%"}),Object(d.a)(t,e.breakpoints.up("md"),{width:"75%",height:"100%",paddingTop:"2.5%",paddingBottom:"2.5%",marginLeft:"7.5%",marginTop:"2.5%"}),Object(d.a)(t,e.breakpoints.up("lg"),{width:"75%",height:"100%",paddingTop:"2.5%",paddingBottom:"2.5%",marginLeft:"12.5%",marginTop:"5%"}),t),loginButton:{color:"white",border:"none",margin:e.spacing(3,0,2),backgroundColor:"grey","&:hover":{backgroundColor:"lightgrey"}},loginHeader:(n={width:"40%",color:"white",textAlign:"center",alignContent:"center"},Object(d.a)(n,e.breakpoints.down("sm"),{fontSize:"22px"}),Object(d.a)(n,e.breakpoints.up("md"),{fontSize:"36px"}),Object(d.a)(n,e.breakpoints.up("lg"),{fontSize:"52px"}),n),link:{padding:"5%"},errorHeader:{width:"40%",color:"white",backgroundColor:"#f28c82",textAlign:"center",alignContent:"center",border:"none",borderRadius:"5px",margin:"0 25%",padding:e.spacing(1)},form:{width:"100%",marginTop:e.spacing(1)},signupButton:{color:"black",border:"solid",borderColor:"white",borderWidth:"1px",margin:e.spacing(1)}}}));var Xe=function(){var e,a=Object(n.useState)(""),t=Object(m.a)(a,2),i=t[0],o=t[1],c=Object(n.useState)(""),s=Object(m.a)(c,2),d=s[0],p=s[1],b=Object(n.useState)(""),g=Object(m.a)(b,2),u=g[0],f=g[1],h=Object(n.useState)(""),k=Object(m.a)(h,2),O=k[0],j=k[1],E=Object(n.useState)(""),v=Object(m.a)(E,2),w=v[0],C=v[1],y=Object(n.useState)(""),z=Object(m.a)(y,2),D=z[0],T=z[1],B=Object(n.useState)(""),A=Object(m.a)(B,2),N=A[0],H=A[1],W=Object(n.useState)(!1),R=Object(m.a)(W,2),F=R[0],I=R[1],M=Object(n.useState)(""),L=Object(m.a)(M,2),Y=L[0],X=L[1],V=ae()().format("H");return e=V<=6||V>=20?Ye():Le(),Object(n.useEffect)((function(){var e=Te.b.initializeDefaultAppClient("baldytracker-vlawr"),a=e.getServiceClient(Te.a.factory,"mongodb-atlas"),t=a.db("baldyData").collection("userCreds"),n=Te.b.defaultAppClient;p(e),j(t),f(a),o(n)}),[]),F?r.a.createElement(l.a,{to:{pathname:"/add",app:i,client:d,db:O,mongodbClient:u,user:Y}}):r.a.createElement(Me.a,{className:e.main,maxWidth:"lg"},r.a.createElement(x.a,null),r.a.createElement(oe.a,{className:e.box},r.a.createElement(S.a,{className:e.loginHeader,variant:"h2"},"Sign In"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(De.a,{className:e.text,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:D,onChange:function(e){T(e.target.value)},autoFocus:!0}),r.a.createElement(De.a,{className:e.text,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",value:N,onChange:function(e){H(e.target.value)},type:"password",id:"password",autoComplete:"current-password"})),w?r.a.createElement(S.a,{className:e.errorHeader},"Invalid Credentials"):null,r.a.createElement(_.a,{type:"submit",variant:"contained",color:"primary",elevation:"3",className:e.loginButton,onClick:function(){var e=new Te.c(D,N);i.auth.loginWithCredential(e).then((function(e){X(e.id),I(!0)})).catch((function(e){console.error("login failed with error: ".concat(e)),C(e)}))}},"Sign In")))},Ve=t(323),Je=t(138),qe=t.n(Je),Ge=Object(b.a)((function(e){var a;return{box:{backgroundColor:"whitesmoke",borderRadius:"5px",width:"50%",marginTop:e.spacing(8),marginLeft:"25%",display:"flex",flexDirection:"column",alignItems:"center",alignSelf:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main,border:"solid",borderColor:"lightgrey",borderWidth:"1px"},loginHeader:(a={width:"40%",color:"black",textAlign:"center",alignContent:"center",paddingBottom:"10%"},Object(d.a)(a,e.breakpoints.down("sm"),{fontSize:"22px"}),Object(d.a)(a,e.breakpoints.up("md"),{fontSize:"36px"}),Object(d.a)(a,e.breakpoints.up("lg"),{fontSize:"52px"}),a)}}));var _e=function(){var e=Ge();return r.a.createElement(Me.a,{maxWidth:"lg"},r.a.createElement(x.a,null),r.a.createElement(oe.a,{className:e.box},r.a.createElement(Ve.a,{className:e.avatar},r.a.createElement(qe.a,null)),r.a.createElement(S.a,{className:e.loginHeader,variant:"h3"},"You have signed out.")))};var $e=function(){return r.a.createElement(c.a,{basename:window.location.pathname||""},r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/",component:Xe}),r.a.createElement(l.b,{exact:!0,path:"/add",component:Ie}),r.a.createElement(l.b,{exact:!0,path:"/logout",component:_e})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement($e,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[150,1,2]]]);
//# sourceMappingURL=main.ec13089a.chunk.js.map