(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{170:function(e,n,t){e.exports=t(368)},175:function(e,n,t){},368:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(12),o=t.n(i),c=(t(175),t(7)),l=t(6),u=t(9),s=t(8),f=t(10),p=t(20),d=t.n(p),m=t(31),h=t(18),g=t(1),x=t(2);function b(){var e=Object(g.a)(["\n  color: #000000;\n  font-size: 20px;\n  text-align: center;\n"]);return b=function(){return e},e}function v(){var e=Object(g.a)(["\n  flex: 1 0 auto;\n  min-width: 350px;\n  margin: 10px 10px;\n"]);return v=function(){return e},e}var j=x.a.div(v()),O=x.a.p(b());function E(){var e=Object(g.a)(["\n  @media (max-width: 414px) {\n    width: 100%;\n  }\n"]);return E=function(){return e},e}function y(){var e=Object(g.a)(["\n  display: flex;\n  align-items: center;\n  padding: 0 10px;\n  &:hover{\n    align-items: center;\n    cursor: pointer;\n    height: 100%;\n  }\n  @media (max-width: 414px) {\n    width: 100%;\n  }\n"]);return y=function(){return e},e}function w(){var e=Object(g.a)(["\n  display: none;\n  @media (max-width: 414px) {\n    &:checked ~ "," + ","{\n      max-height: 1000px;\n      display: flex;\n      justify-content: flex-start;\n    }\n    &:checked ~ "," {\n      ",":nth-child(1){\n        left: 3px;\n        transform: translateY(12px) rotate(-45deg);\n      }\n      ",":nth-child(3){\n        left: 3px;\n        transform: translateY(-8px) rotate(45deg);\n      }\n      ",":nth-child(2){\n        opacity: 0;\n      }\n    }\n  }\n"]);return w=function(){return e},e}function k(){var e=Object(g.a)(["\n  display: none; \n  cursor: pointer;\n  @media (max-width: 414px){\n    display: block;\n    position: absolute;\n    top: 26px;\n    right: 3px;\n    transform: translate(-50%,-50%);\n    width: 30px;\n    height: 30px;\n    cursor: pointer;\n    transition: .5s;\n    outline: none;\n    &:hover{\n      border: none;\n    }\n  }\n"]);return k=function(){return e},e}function C(){var e=Object(g.a)(["\n  position: relative;\n  height: 4px;\n  width: 25px;\n  top: -2px;\n  right: -13px;\n  background-color: #ffffff;\n  display: block;\n  margin: 6px 0;\n  transition: .5s;\n  transform: translate(-50%,-50%);\n"]);return C=function(){return e},e}function S(){var e=Object(g.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  @media (max-width: 414px) {\n     > "," {\n    max-height: 0;\n    }\n  }\n"]);return S=function(){return e},e}function D(){var e=Object(g.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  @media(max-width: 414px) {\n    list-style:none;\n    padding: 0;\n    height: 100%;\n    overflow: hidden;\n    transition: max-height 0.5s linear 0s;\n  }\n"]);return D=function(){return e},e}function z(){var e=Object(g.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  color: #ffffff;\n  font-family: 'Niconne', cursive;\n  font-weight: 400; \n  font-size: 40px;\n"]);return z=function(){return e},e}function T(){var e=Object(g.a)(['\n  text-decoration: none;\n  color: #ffffff;\n  font: normal 20px/2 "varela-round", Helvetica, sans-serif;\n  text-align: center;\n  text-overflow: ellipsis;\n  text-shadow: 1px 1px 1px rgba(0,0,0,0.2) ;\n  margin: 10px 10px;\n  :hover {\n    -webkit-transform: scale(1.2);\n    -ms-transform: scale(1.2);\n    transform: scale(1.2);\n  }\n']);return T=function(){return e},e}function U(){var e=Object(g.a)(["\n  min-width: 350px;\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  @media(max-width: 414px) {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n"]);return U=function(){return e},e}function R(){var e=Object(g.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(27,134,200,1) 35%, rgba(0,212,255,1) 100%);\n  min-height: 100px;\n  padding: 0 20px;\n"]);return R=function(){return e},e}var L=x.a.div(R()),I=x.a.div(U()),M=Object(x.a)(m.b)(T()),_=x.a.div(z()),N=x.a.ul(D()),Y=x.a.div(S(),N),A=x.a.span(C()),P=x.a.label(k()),F=x.a.input(w(),P,N,P,A,A,A),B=x.a.li(y()),H=M.withComponent("span"),J=Object(x.a)(Y)(E()),W=function(e){function n(){return Object(c.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.user,t=e.deleteUser,a=e.email;return r.a.createElement(L,null,r.a.createElement(I,null,r.a.createElement(_,null,"Rooms"),r.a.createElement(Y,null,r.a.createElement(F,{type:"checkbox",name:"menu",id:"btn-menu"}),r.a.createElement(P,{htmlFor:"btn-menu"},r.a.createElement(A,null),r.a.createElement(A,null),r.a.createElement(A,null)),r.a.createElement(N,null,r.a.createElement(B,null,r.a.createElement(M,{to:"/"},"Home")),n&&r.a.createElement(J,null,r.a.createElement(H,{style:{marginLeft:"18px"}},a),r.a.createElement(B,null,r.a.createElement(M,{to:"/",onClick:t},"Sign Out"))),!n&&r.a.createElement(J,null,r.a.createElement(B,null,r.a.createElement(M,{to:"/register"},"Sign Up")),r.a.createElement(B,null,r.a.createElement(M,{to:"/login"},"Sign In")))))))}}]),n}(a.Component),X=function(e){function n(){return Object(c.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.user,t=e.deleteUser,a=e.email;return r.a.createElement(W,{user:n,deleteUser:t,email:a})}}]),n}(a.Component),q={bgColor:"#ADD8E6",color:"#000000"};function V(){var e=Object(g.a)(["\n  display: block;\n  height: 100%;\n  min-width: 100%;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  vertical-align: middle;\n  transition: all 0.5s ease-in-out;\n  :hover {\n    -webkit-transform: scale(1.05);\n    -ms-transform: scale(1.05);\n    transform: scale(1.05);\n  }\n"]);return V=function(){return e},e}function $(){var e=Object(g.a)(["\n  height: 100%;\n  max-height: 175px;\n  min-height: 175px;\n  overflow: hidden;\n  transition: all 0.2s ease-in-out;\n  position: relative;\n"]);return $=function(){return e},e}function G(){var e=Object(g.a)(["\n  color: #ffffff;\n  font-size: 20px;\n  text-align: center;\n"]);return G=function(){return e},e}function K(){var e=Object(g.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 5px 20px;\n  color: #ffffff;\n  font-size: 10px;\n  line-height: 20px;\n"]);return K=function(){return e},e}function Q(){var e=Object(g.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 0;\n  padding: 10px 20px;\n  color: #ffffff;\n  font-size: 20px;\n"]);return Q=function(){return e},e}function Z(){var e=Object(g.a)(["\n  width: calc(33% - 16px);\n  margin: 0 8px 28px 8px;\n  min-height: 180px;\n  max-height: 500px\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: flex-start;\n  text-align: center;\n  box-shadow: rgba(0,0,0,0.2) 0 0 9px 4px;\n  border-radius: 5px;\n  background: ",";\n  overflow: hidden;\n  transition: all 0.7s ease-in-out;\n  text-decoration: none;\n  @media(max-width: 850px) {\n    width: calc(60% - 16px);\n  }\n  @media(max-width: 450px) {\n    width: calc(100% - 16px);\n  }\n"]);return Z=function(){return e},e}function ee(){var e=Object(g.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]);return ee=function(){return e},e}function ne(){var e=Object(g.a)(["\n  max-width: 1200px;\n  min-width: 350px;\n  margin: 0 auto;\n  padding-top: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: space-between;\n"]);return ne=function(){return e},e}var te=x.a.div(ne()),ae=x.a.div(ee()),re=Object(x.a)(m.b)(Z(),q.bgColor),ie=x.a.p(Q()),oe=x.a.p(K()),ce=x.a.p(G()),le=x.a.div($()),ue=x.a.img(V()),se=function(e){function n(){return Object(c.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props.rooms;return r.a.createElement(te,null,r.a.createElement(ae,null,e&&e.map(function(e,n){return r.a.createElement(re,{to:"/calendar/".concat(e._id),key:n,room:e},r.a.createElement(le,null,r.a.createElement(ue,{src:e.imageURL})),r.a.createElement(ie,null,e.title),r.a.createElement(oe,null,e.description))})))}}]),n}(a.Component);function fe(){var e=Object(g.a)(["\n  color: #ffffff;\n  padding-top: 20px;\n"]);return fe=function(){return e},e}function pe(){var e=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  justify: content: center;\n  align-items: center;\n"]);return pe=function(){return e},e}function de(){var e=Object(g.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 50;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return de=function(){return e},e}var me=x.a.div(de()),he=x.a.div(pe()),ge=x.a.span(fe()),xe=t(157),be=t.n(xe),ve=function(){return r.a.createElement(me,null,r.a.createElement(he,null,r.a.createElement(be.a,{type:"Oval",color:"#ffffff",height:40,width:40}),r.a.createElement(ge,null,"Loading...")))};d.a.interceptors.response.use(function(e){return e.data?e.data:e},function(e){var n=e.response;return console.log("Request error! Status: ".concat(n.status,",\n    message: ").concat("string"===typeof n.data?n.data:JSON.stringify(n.data),",\n    from: ").concat(e.config.url,",\n    method: ").concat(e.config.method)),503===n.status?alert("Error\nSomething went wrong\nPlease try again later"):Promise.reject(n)});var je="http://ec2-35-175-143-145.compute-1.amazonaws.com:4000/",Oe={signIn:function(e,n){return d.a.post("".concat(je,"signIn"),{email:e,password:n})},signUp:function(e,n){return d.a.post("".concat(je,"signUp"),{email:e.value,password:n.value})},getHalls:function(){return d.a.get("".concat(je,"halls"))},getTickets:function(){return d.a.get("".concat(je,"tickets"))},addTicket:function(e){return d.a.post("".concat(je,"tickets"),e)},changeTicket:function(e,n){return d.a.put("".concat(je,"ticket/").concat(e),n)},deleteTicket:function(e){return d.a.delete("".concat(je,"tickets/").concat(e))}},Ee=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(u.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(r)))).state={rooms:[],isLoading:!0,isError:!1,tickets:[]},t.loadData=function(){Oe.getHalls().then(function(e){t.setState({rooms:e.halls,isLoading:!1})})},t}return Object(f.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){this.loadData(),this.setState({isLoading:!1})}},{key:"render",value:function(){var e=this.props.user,n=this.state,t=n.isError,i=n.rooms;return n.isLoading?r.a.createElement(ve,null):r.a.createElement(a.Fragment,null,e&&!t&&r.a.createElement(se,{rooms:i}),t&&r.a.createElement(ce,null,"Error!!!"))}}]),n}(a.Component),ye=t(66),we=t(168);function ke(){var e=Object(g.a)(["\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: center; \n  padding: 10px 20px;\n  @media(max-width: 850px) {\n    justify-content: center;\n    align-items: center;\n  }\n  @media(max-width: 450px) {\n    justify-content: center;\n    align-items: center;\n  }\n"]);return ke=function(){return e},e}function Ce(){var e=Object(g.a)(["\n  font-size: 16px;\n  padding: 10px 20px;\n  color: #00CED1;\n"]);return Ce=function(){return e},e}function Se(){var e=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n"]);return Se=function(){return e},e}function De(){var e=Object(g.a)(["\n  color: #000000;\n  font-size: 15px;\n  text-align: center;\n"]);return De=function(){return e},e}function ze(){var e=Object(g.a)(["\n  justify-content: center;\n  display: flex\n  background-color: initial;\n  color: #ffffff;\n  border-radius: 5px;\n  border: none;\n  max-width: 100px;\n  max-height: 35px;\n  font-size: 20px;\n  outline: none;\n  @media(max-width: 850px) {\n    margin-bottom: 15px;\n  }\n  @media(max-width: 450px) {\n    margin-bottom: 15px;\n  }\n"]);return ze=function(){return e},e}function Te(){var e=Object(g.a)(["\n  justify-content: center;\n  display: flex\n  background-color: #00CED1;\n  color: #ffffff;\n  border-radius: 5px;\n  border: none;\n  padding: 7px 25px;\n  max-width: 100px;\n  max-height: 35px;\n  font-size: 20px;\n  outline: none;\n"]);return Te=function(){return e},e}function Ue(){var e=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 20px;\n  @media(max-width: 850px) {\n    flex-direction: column;\n    justify-content: center;\n  }\n  @media(max-width: 450px) {\n    flex-direction: column;\n    justify-content: center;\n  }\n"]);return Ue=function(){return e},e}function Re(){var e=Object(g.a)(["\n  max-width: 950px;\n  min-width: 350px;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: space-between;\n  padding-top: 40px;\n"]);return Re=function(){return e},e}function Le(){var e=Object(g.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 5px 20px;\n  color: #00CED1;\n  font-size: 30px;\n"]);return Le=function(){return e},e}var Ie=x.a.p(Le()),Me=x.a.div(Re()),_e=x.a.div(Ue()),Ne=x.a.button(Te()),Ye=x.a.button(ze()),Ae=x.a.p(De()),Pe=x.a.div(Se()),Fe=x.a.p(Ce()),Be=x.a.div(ke()),He=r.a.createElement("svg",{id:"Capa_1",x:"0px",y:"0px",width:"30px",height:"30px",viewBox:"0 0 612 612",style:{enableBackground:"new 0 0 612 612"},xmlSpace:"preserve",fill:"#00CED1"},r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M561,76.5H178.5c-17.85,0-30.6,7.65-40.8,22.95L0,306l137.7,206.55c10.2,12.75,22.95,22.95,40.8,22.95H561  c28.05,0,51-22.95,51-51v-357C612,99.45,589.05,76.5,561,76.5z M484.5,397.8l-35.7,35.7L357,341.7l-91.8,91.8l-35.7-35.7    l91.8-91.8l-91.8-91.8l35.7-35.7l91.8,91.8l91.8-91.8l35.7,35.7L392.7,306L484.5,397.8z"}))),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null)),Je=t(110),We=t(167),Xe=t.n(We),qe=(t(365),t(33)),Ve=t.n(qe),$e=(t(366),Xe()(Je.a)),Ge=Je.a.momentLocalizer(Ve.a),Ke=function(e){function n(){return Object(c.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.tickets,t=e.user,i=e.deleteTicket,o=e.handleCreateTicket,c=e.closeCalendar,l=e.resizeTicket,u=e.isError;return r.a.createElement(a.Fragment,null,!u&&r.a.createElement(Me,null,r.a.createElement(Ie,null,"Choose Your Date"),r.a.createElement($e,{localizer:Ge,events:n,defaultView:"month",titleAccessor:"title",defaultDate:new Date,onEventResize:function(e){return l(e)},onEventDrop:function(e){return l(e)},onSelectSlot:function(e){return o(e)},resizable:!0,selectable:!0,popup:!0}),r.a.createElement(_e,null,r.a.createElement(Ne,{onClick:c},"Back"),r.a.createElement(Pe,null,n&&n.filter(function(e){return e.user_id===t._id}).map(function(e,n){return r.a.createElement(Be,{key:n},r.a.createElement(Fe,null,Ve()(e.start).format("DD/MM/YY hh:mm:ss")," -",Ve()(e.end).format("DD/MM/YY hh:mm:ss")),r.a.createElement(Ye,{onClick:function(){return i(e._id)}},He))})))),u&&r.a.createElement(Ae,null,"Error!!!"))}}]),n}(a.Component),Qe=t(39),Ze=t.n(Qe),en=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(u.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(r)))).state={tickets:[],isLoading:!0,isError:!1},t.closeCalendar=function(){t.props.history.goBack()},t.isCanEdit=function(e){return e.user_id===t.props.user._id||(Ze()({title:"Not you order!",icon:"warning"}),!1)},t.formatTicketDate=function(e){var n=e;return n.start=Ve()(e.from).toDate(),n.end=Ve()(e.to).toDate(),n},t.isOldDate=function(e){return e<new Date&&(Ze()({title:"Old Date!",icon:"warning"}),!0)},t.handleCreateTicket=function(e){t.isOldDate(e.start)||Ze()("Write something here:",{content:"input"}).then(function(n){Ze()("You typed: ".concat(n));var a=t.props.user,r={hall_id:t.props.match.params.id,title:n,from:new Date(e.start).getTime(),to:new Date(e.end).getTime(),user_id:a._id};Oe.addTicket(r).then(function(e){t.setState({tickets:[].concat(Object(we.a)(t.state.tickets),[t.formatTicketDate(e)])})}).catch(function(e){return 400!==e.status||(Ze()({title:"Not you order!",icon:"warning"}),!1)}),console.log(n)})},t.resizeTicket=function(e){var n=e.event,a=e.start,r=e.end;if(!t.isOldDate(a)&&t.isCanEdit(n)){var i=t.state.tickets.map(function(e){return e._id===n._id?Object(ye.a)({},e,{start:a,end:r}):e}),o={from:new Date(n.start).getTime(),to:new Date(n.end).getTime(),title:n.title||"room is ordered"};Oe.changeTicket(n._id,o),t.setState({tickets:i})}},t.loadData=function(){Oe.getTickets().then(function(e){t.setState({tickets:e.filter(function(e){return e.hall_id===t.props.match.params.id}).map(function(e){return t.formatTicketDate(e)}),isLoading:!0})})},t.deleteTicket=function(e){Oe.deleteTicket(e).then(function(){t.setState({tickets:t.state.tickets.filter(function(n){return n._id!==e})})}),console.log(e)},t}return Object(f.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){this.loadData(),this.setState({isLoading:!1})}},{key:"render",value:function(){var e=this.state,n=e.tickets,t=e.isError,a=this.props.user;return r.a.createElement(Ke,{tickets:n,user:a,deleteTicket:this.deleteTicket,handleCreateTicket:this.handleCreateTicket,onEventResize:this.onEventResize,closeCalendar:this.closeCalendar,isError:t,resizeTicket:this.resizeTicket})}}]),n}(a.Component);function nn(){var e=Object(g.a)(["\n  font-family: sans-serif;\n  font-size: 33px;\n  color: #00CED1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 3px;\n"]);return nn=function(){return e},e}function tn(){var e=Object(g.a)(["\n  padding: 7px 10px;\n"]);return tn=function(){return e},e}function an(){var e=Object(g.a)(["\n  display: flex;\n  justify-content: flex-end;\n  margin: 6px 15px;\n"]);return an=function(){return e},e}function rn(){var e=Object(g.a)(["\n  max-width: 430px;\n  max-height: 425px;\n  height: 100%;\n  width: 100%;\n  background: #ffffff;\n  display: flex;\n  flex-direction: column;\n  margin: 20px;\n"]);return rn=function(){return e},e}function on(){var e=Object(g.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 50;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return on=function(){return e},e}var cn=x.a.div(on()),ln=x.a.div(rn()),un=x.a.div(an()),sn=x.a.button(tn()),fn=x.a.h1(nn()),pn=t(29);function dn(){var e=Object(g.a)(["\n  background-color: #00CED1;\n  color: #ffffff;\n  border-radius: 5px;\n  border: none;\n  padding: 7px 25px;\n  max-width: 100px;\n  font-size: 20px;\n"]);return dn=function(){return e},e}function mn(){var e=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-width: 270px;\n  margin: auto;\n"]);return mn=function(){return e},e}function hn(){var e=Object(g.a)(["\n  color: #FF0000\n"]);return hn=function(){return e},e}function gn(){var e=Object(g.a)(['\n  min-height: 35px;\n  width: 65%;\n  padding: 0 15px;\n  border-radius: 4px;\n  background-color: transparent;\n  border: 1px solid hsl(0, 14%, 11%);\n  font: normal 16px/2 "varela-round", Helvetica, sans-serif;\n  color:#311e1e;\n']);return gn=function(){return e},e}function xn(){var e=Object(g.a)(["\n  color: #311e1e;\n  font-size: 16px;\n  padding-bottom: 6px;\n"]);return xn=function(){return e},e}function bn(){var e=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px 5px;\n"]);return bn=function(){return e},e}function vn(){var e=Object(g.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]);return vn=function(){return e},e}function jn(){var e=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n"]);return jn=function(){return e},e}function On(){var e=Object(g.a)(["\n  display: flex;\n  height: 100%;\n"]);return On=function(){return e},e}var En=x.a.div(On()),yn=x.a.div(jn()),wn=x.a.form(vn()),kn=x.a.div(bn()),Cn=x.a.label(xn()),Sn=x.a.input(gn()),Dn=x.a.p(hn()),zn=x.a.div(mn()),Tn=x.a.button(dn()),Un=function(e){function n(){return Object(c.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.email,t=e.password,a=e.submitted,i=e.isError,o=e.handleSubmit,c=e.handleChange;return r.a.createElement(En,null,r.a.createElement(wn,{onSubmit:o},r.a.createElement(yn,null,r.a.createElement(kn,{className:"form-group"+(a&&!n?" has-error":"")},r.a.createElement(Cn,null,"Email:"),r.a.createElement(Sn,{name:"email",type:"email",placeholder:"Your Email",className:"form-control",value:n,onChange:c}),a&&!n&&r.a.createElement(Dn,null,"Please enter your email")),r.a.createElement(kn,{className:"form-group"+(a&&!t?" has-error":"")},r.a.createElement(Cn,null,"Password:"),r.a.createElement(Sn,{name:"password",type:"password",placeholder:"Your Password",className:"form-control",value:t,onChange:c}),a&&!t&&r.a.createElement(Dn,null,"Please enter your password"),i&&r.a.createElement(Dn,null,"Wrong password or email")),r.a.createElement(zn,null,r.a.createElement(Tn,{type:"submit"},"Login")))))}}]),n}(a.Component),Rn=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(u.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(r)))).state={email:"",password:"",submitted:!1,isError:!1},t.handleChange=function(e){var n,a=e.target,r=a.name,i=a.value;t.setState((n={},Object(pn.a)(n,r,i),Object(pn.a)(n,"isError",!1),Object(pn.a)(n,"submitted",!1),n))},t.login=function(e,n){Oe.signIn(e,n).then(function(e){e&&t.props.updateUser(e,function(){return t.props.history.goBack()})}).catch(function(e){"Incorrect password or email"===e.data.message&&t.setState({isError:!0})})},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.email,r=n.password,i=n.isError;t.setState({submitted:!0,email:a,password:r}),localStorage.setItem("email",a),a&&r&&!i&&t.login(a,r)},t}return Object(f.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.state,n=e.email,t=e.password,a=e.submitted,i=e.isError;return r.a.createElement(Un,{email:n,password:t,submitted:a,isError:i,handleSubmit:this.handleSubmit,handleChange:this.handleChange})}}]),n}(a.Component),Ln=Object(h.e)(Rn),In=function(e){function n(){return Object(c.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.closeModal,t=e.updateUser,a=e.user;return r.a.createElement(cn,null,r.a.createElement(ln,null,r.a.createElement(un,null,r.a.createElement(sn,{onClick:n},"X")),r.a.createElement(fn,null,"Login"),r.a.createElement(Ln,{updateUser:t,user:a})))}}]),n}(a.Component),Mn=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(u.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(r)))).state={isOpen:!0},t.closeModal=function(){t.props.history.push("/"),t.setState({isOpen:!1})},t}return Object(f.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.state.isOpen,n=this.props,t=n.updateUser,a=n.user;return r.a.createElement(In,{isOpen:e,closeModal:this.closeModal,updateUser:t,user:a})}}]),n}(r.a.Component);function _n(){var e=Object(g.a)(["\n  text-align: center;\n  font-size: 20px;\n  color: #00CED1;\n"]);return _n=function(){return e},e}function Nn(){var e=Object(g.a)(["\n  font-family: sans-serif;\n  font-size: 33px;\n  color: #00CED1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 10px;\n"]);return Nn=function(){return e},e}function Yn(){var e=Object(g.a)(["\n  padding: 7px 10px;\n"]);return Yn=function(){return e},e}function An(){var e=Object(g.a)(["\n  display: flex;\n  justify-content: flex-end;\n  margin: 6px 15px;\n"]);return An=function(){return e},e}function Pn(){var e=Object(g.a)(["\n  max-width: 430px;\n  max-height: 425px;\n  height: 100%;\n  width: 100%;\n  background: #ffffff;\n  display: flex;\n  flex-direction: column;\n  margin: 0 20px;\n"]);return Pn=function(){return e},e}function Fn(){var e=Object(g.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 50;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return Fn=function(){return e},e}var Bn=x.a.div(Fn()),Hn=x.a.div(Pn()),Jn=x.a.div(An()),Wn=x.a.button(Yn()),Xn=x.a.h1(Nn()),qn=x.a.p(_n());function Vn(){var e=Object(g.a)(["\n  display: flex;\n  justify-content: flex-start;\n  margin: 0;\n  padding-left: 30px;\n  color: red;\n"]);return Vn=function(){return e},e}function $n(){var e=Object(g.a)(["\n  background-color: #00CED1;\n  color: #ffffff;\n  border-radius: 5px;\n  border: none;\n  padding: 7px 25px;\n  max-width: 125px;\n  font-size: 20px;\n"]);return $n=function(){return e},e}function Gn(){var e=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-width: 270px;\n  margin: auto;\n"]);return Gn=function(){return e},e}function Kn(){var e=Object(g.a)(['\n  min-height: 35px;\n  width: 65%;\n  padding: 0 15px;\n  border-radius: 4px;\n  background-color: transparent;\n  border: 1px solid hsl(0, 14%, 11%);\n  font: normal 16px/2 "varela-round", Helvetica, sans-serif;\n  color:#311e1e;\n']);return Kn=function(){return e},e}function Qn(){var e=Object(g.a)(["\n  color: #311e1e;\n  font-size: 16px;\n  padding-bottom: 6px;\n"]);return Qn=function(){return e},e}function Zn(){var e=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px 5px;\n"]);return Zn=function(){return e},e}function et(){var e=Object(g.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]);return et=function(){return e},e}function nt(){var e=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n"]);return nt=function(){return e},e}function tt(){var e=Object(g.a)(["\n  display: flex;\n  height: 100%;\n"]);return tt=function(){return e},e}var at=x.a.div(tt()),rt=x.a.div(nt()),it=x.a.form(et()),ot=x.a.div(Zn()),ct=x.a.label(Qn()),lt=x.a.input(Kn()),ut=x.a.div(Gn()),st=x.a.button($n()),ft=x.a.p(Vn()),pt=function(e){function n(){return Object(c.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.handleSubmit,t=e.handleChange,a=e.email,i=e.password,o=e.errors;return r.a.createElement(at,null,r.a.createElement(it,{onSubmit:n},r.a.createElement(rt,null,o&&o.map(function(e){return r.a.createElement(ft,{key:e},"Error: ",e)}),r.a.createElement(ot,{className:"form-group"},r.a.createElement(ct,null,"Email:"),r.a.createElement(lt,{name:"email",type:"email",placeholder:"Your Email",value:a.value,onChange:t})),r.a.createElement(ot,null,r.a.createElement(ct,null,"Password:"),r.a.createElement(lt,{name:"password",type:"password",placeholder:"Your Password",value:i.value,onChange:t})),r.a.createElement(ut,null,r.a.createElement(st,{type:"submit"},"Register")))))}}]),n}(a.Component),dt=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(u.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(r)))).state={email:{value:""},password:{value:""},errors:[]},t.validate=function(e,n){var t=[];return e.value.length<5&&t.push("Email should be at least 5 charcters long"),1!==e.value.split("").filter(function(e){return"@"===e}).length&&t.push("Email should contain a @"),-1===e.value.indexOf(".")&&t.push("Email should contain at least one dot"),n.value.length<6&&t.push("Password should be at least 6 characters long"),t},t.handleChange=function(e){e.persist();var n=e.target,a=n.name,r=n.value;t.setState(function(e){return Object(pn.a)({},a,Object(ye.a)({},e,{value:r}))})},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.email,r=n.password,i=t.validate(a,r);i.length>0?t.setState({errors:i}):(console.log("Login:",a.value,r.value),localStorage.setItem("email",JSON.stringify(a.value)),localStorage.setItem("password",JSON.stringify(r.value)),Oe.signUp(a,r).then(t.props.setRegistered()))},t}return Object(f.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.state,n=e.email,t=e.password,a=e.errors;return r.a.createElement(pt,{email:n,password:t,handleSubmit:this.handleSubmit,handleChange:this.handleChange,errors:a})}}]),n}(a.Component),mt=Object(h.e)(dt),ht=function(e){function n(){return Object(c.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.closeModal,t=e.isRegister,a=e.setRegistered;return r.a.createElement(Bn,null,r.a.createElement(Hn,null,r.a.createElement(Jn,null,r.a.createElement(Wn,{onClick:n},"X")),r.a.createElement(Xn,null,"Register"),t?r.a.createElement(qn,null,"you are registered! Please Log in."):r.a.createElement(mt,{setRegistered:a,isRegister:t})))}}]),n}(a.Component),gt=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(u.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(r)))).state={isOpen:!0,isRegister:!1},t.closeModal=function(){t.props.history.goBack()},t.setRegistered=function(){return t.setState({isRegister:!0})},t}return Object(f.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.state,n=e.isOpen,t=e.isRegister;return r.a.createElement(ht,{isRegister:t,closeModal:this.closeModal,setRegistered:this.setRegistered,isOpen:n})}}]),n}(r.a.Component),xt=function(e){function n(){return Object(c.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(l.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),n}(a.Component),bt=Object(h.e)(xt),vt=function(e){function n(){return Object(c.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.user,t=e.email,i=e.deleteUser,o=e.updateUser,c=e.isError;return r.a.createElement(a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(bt,null,r.a.createElement(a.Fragment,null,r.a.createElement(X,{user:n,email:t,deleteUser:i}),!c&&r.a.createElement(j,{className:"main"},r.a.createElement(h.c,null,n?r.a.createElement(a.Fragment,null,r.a.createElement(h.a,{path:"/calendar/:id",render:function(e){return r.a.createElement(en,Object.assign({},e,{user:n}))}}),r.a.createElement(h.a,{exact:!0,path:"/",component:function(){return r.a.createElement(Ee,{user:n})}})):r.a.createElement(a.Fragment,null,r.a.createElement(h.a,{path:"/login",render:function(e){return r.a.createElement(Mn,Object.assign({},e,{updateUser:o}))}}),r.a.createElement(h.a,{path:"/register",render:function(e){return r.a.createElement(gt,e)}})))))),c&&r.a.createElement(O,null,"Error!!!")))}}]),n}(a.Component),jt=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(u.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(r)))).state={user:null,isError:!1,email:null},t.updateUser=function(e,n){var a=localStorage.getItem("email");t.setState({user:e,email:a}),localStorage.setItem("user",JSON.stringify(e)),n(),localStorage.setItem("token",e.token),localStorage.setItem("userId",e._id)},t.deleteUser=function(){localStorage.clear(),t.setState({user:null,email:null})},t}return Object(f.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("user"),n=localStorage.getItem("email");e&&(d.a.defaults.headers.common.Authorization=localStorage.getItem("token"),this.setState({email:n,user:JSON.parse(e)}))}},{key:"render",value:function(){var e=this.state,n=e.user,t=e.isError,a=e.email;return r.a.createElement(vt,{user:n,email:a,deleteUser:this.deleteUser,updateUser:this.updateUser,isError:t})}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(jt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[170,1,2]]]);
//# sourceMappingURL=main.60140d25.chunk.js.map