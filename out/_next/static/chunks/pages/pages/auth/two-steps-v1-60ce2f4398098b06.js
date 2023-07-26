(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2273],{44267:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(87462),o=n(63366),i=n(67294),a=n(86010),l=n(94780),s=n(90948),c=n(71657),d=n(1588),p=n(34867);function u(e){return(0,p.Z)("MuiCardContent",e)}(0,d.Z)("MuiCardContent",["root"]);var h=n(85893);let m=["className","component"],x=e=>{let{classes:t}=e;return(0,l.Z)({root:["root"]},u,t)},f=(0,s.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),g=i.forwardRef(function(e,t){let n=(0,c.Z)({props:e,name:"MuiCardContent"}),{className:i,component:l="div"}=n,s=(0,o.Z)(n,m),d=(0,r.Z)({},n,{component:l}),p=x(d);return(0,h.jsx)(f,(0,r.Z)({as:l,className:(0,a.Z)(p.root,i),ownerState:d,ref:t},s))});var v=g},66242:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var r=n(87462),o=n(63366),i=n(67294),a=n(86010),l=n(94780),s=n(90948),c=n(71657),d=n(90629),p=n(1588),u=n(34867);function h(e){return(0,u.Z)("MuiCard",e)}(0,p.Z)("MuiCard",["root"]);var m=n(85893);let x=["className","raised"],f=e=>{let{classes:t}=e;return(0,l.Z)({root:["root"]},h,t)},g=(0,s.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),v=i.forwardRef(function(e,t){let n=(0,c.Z)({props:e,name:"MuiCard"}),{className:i,raised:l=!1}=n,s=(0,o.Z)(n,x),d=(0,r.Z)({},n,{raised:l}),p=f(d);return(0,m.jsx)(g,(0,r.Z)({className:(0,a.Z)(p.root,i),elevation:l?8:void 0,ref:t,ownerState:d},s))});var Z=v},25521:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pages/auth/two-steps-v1",function(){return n(35982)}])},22967:function(e,t,n){"use strict";var r=n(90948),o=n(87357);let i=(0,r.ZP)(o.Z)(e=>{let{theme:t}=e;return{"& input":{height:56,fontSize:16,width:"100%",borderWidth:1,background:"none",borderStyle:"solid",padding:"16.5px 14px",color:t.palette.text.primary,borderRadius:t.shape.borderRadius,fontFamily:t.typography.body1.fontFamily,borderColor:"rgba(".concat(t.palette.customColors.main,", 0.22)"),transition:t.transitions.create(["border-color","box-shadow"]),"&:focus, &:focus-visible":{outline:0,borderWidth:2,padding:"15.5px 13px",borderColor:"".concat(t.palette.primary.main," !important"),boxShadow:"0 2px 3px 0 rgba(".concat(t.palette.customColors.main,", 0.1)")},"&::-webkit-input-placeholder":{color:t.palette.text.secondary}}}});t.Z=i},35982:function(e,t,n){"use strict";n.r(t);var r=n(85893),o=n(67294),i=n(41664),a=n.n(i),l=n(87357),s=n(11057),c=n(15861),d=n(44267),p=n(90948),u=n(2734),h=n(66242),m=n(56815),x=n(52034),f=n.n(x),g=n(87536),v=n(17562),Z=n(8928),w=n(23131),y=n(22967),b=n(42563);n(49634);let C=(0,p.ZP)(h.Z)(e=>{let{theme:t}=e;return{[t.breakpoints.up("sm")]:{width:"25rem"}}}),j=(0,p.ZP)(a())(e=>{let{theme:t}=e;return{fontSize:"1rem",textDecoration:"none",marginLeft:t.spacing(2),color:t.palette.primary.main}}),k=(0,p.ZP)(f())(e=>{let{theme:t}=e;return{maxWidth:48,textAlign:"center",height:"48px !important",fontSize:"150% !important",marginTop:t.spacing(2),marginBottom:t.spacing(2),"&:not(:last-child)":{marginRight:t.spacing(2)},"&::-webkit-outer-spin-button, &::-webkit-inner-spin-button":{margin:0,WebkitAppearance:"none"}}}),R={val1:"",val2:"",val3:"",val4:"",val5:"",val6:""},L=()=>{let[e,t]=(0,o.useState)(!1),n=(0,u.Z)(),{control:i,handleSubmit:a,formState:{errors:p}}=(0,g.cI)({defaultValues:R}),h=Object.keys(p),x=(t,n)=>{if(!e){n(t);let e=t.target.form,r=[...e].indexOf(t.target);e[r].value&&e[r].value.length&&e.elements[r+1].focus(),t.preventDefault()}},f=e=>{if("Backspace"===e.key){t(!0);let n=e.target.form,r=[...n].indexOf(e.target);r>=1&&!(n[r].value&&n[r].value.length)&&n.elements[r-1].focus()}else t(!1)};return(0,r.jsx)(l.Z,{className:"content-center",children:(0,r.jsx)(w.Z,{children:(0,r.jsx)(C,{children:(0,r.jsxs)(d.Z,{sx:{p:e=>"".concat(e.spacing(10.5,8,8)," !important")},children:[(0,r.jsxs)(l.Z,{sx:{mb:8,display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,r.jsxs)("svg",{width:34,height:23.375,viewBox:"0 0 32 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",fill:n.palette.primary.main,d:"M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"}),(0,r.jsx)("path",{fill:"#161616",opacity:.06,fillRule:"evenodd",clipRule:"evenodd",d:"M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"}),(0,r.jsx)("path",{fill:"#161616",opacity:.06,fillRule:"evenodd",clipRule:"evenodd",d:"M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"}),(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",fill:n.palette.primary.main,d:"M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"})]}),(0,r.jsx)(c.Z,{sx:{ml:2.5,fontWeight:600,fontSize:"1.625rem",lineHeight:1.385},children:v.Z.templateName})]}),(0,r.jsxs)(l.Z,{sx:{mb:6},children:[(0,r.jsx)(c.Z,{variant:"h6",sx:{mb:1.5},children:"Two-Step Verification \uD83D\uDCAC"}),(0,r.jsx)(c.Z,{sx:{mb:1.5,color:"text.secondary"},children:"We sent a verification code to your mobile. Enter the code from the mobile in the field below."}),(0,r.jsx)(c.Z,{sx:{fontWeight:500},children:"******9763"})]}),(0,r.jsx)(c.Z,{sx:{fontWeight:500,color:"text.secondary"},children:"Type your 6 digit security code"}),(0,r.jsxs)("form",{onSubmit:a(()=>!0),children:[(0,r.jsx)(y.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",...h.length&&{"& .invalid:focus":{borderColor:e=>"".concat(e.palette.error.main," !important"),boxShadow:e=>"0 1px 3px 0 ".concat((0,b.E)(e.palette.error.main,.4))}}},children:Object.keys(R).map((e,t)=>(0,r.jsx)(g.Qr,{name:e,control:i,rules:{required:!0},render:e=>{let{field:{value:o,onChange:i}}=e;return(0,r.jsx)(l.Z,{type:"tel",maxLength:1,value:o,autoFocus:0===t,component:k,onKeyDown:f,onChange:e=>x(e,i),options:{blocks:[1],numeral:!0,numeralPositiveOnly:!0},sx:{[n.breakpoints.down("sm")]:{px:"".concat(n.spacing(2)," !important")}}})}},e))}),h.length?(0,r.jsx)(m.Z,{sx:{color:"error.main"},children:"Please enter a valid OTP"}):null,(0,r.jsx)(s.Z,{fullWidth:!0,type:"submit",variant:"contained",sx:{mt:2},children:"Verify My Account"})]}),(0,r.jsxs)(l.Z,{sx:{mt:4,display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,r.jsx)(c.Z,{sx:{color:"text.secondary"},children:"Didn't get the code?"}),(0,r.jsx)(j,{href:"/",onClick:e=>e.preventDefault(),children:"Resend"})]})]})})})})};L.getLayout=e=>(0,r.jsx)(Z.Z,{children:e}),t.default=L},23131:function(e,t,n){"use strict";var r=n(90948),o=n(87357);let i=(0,r.ZP)(o.Z)(e=>{let{theme:t}=e;return{width:"100%",maxWidth:400,position:"relative",[t.breakpoints.up("md")]:{"&:before":{zIndex:-1,top:"-79px",content:'""',left:"-46px",width:"238px",height:"234px",position:"absolute",backgroundImage:"url(\"data:image/svg+xml,%3Csvg width='239' height='234' viewBox='0 0 239 234' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='88.5605' y='0.700195' width='149' height='149' rx='19.5' stroke='%23".concat(t.palette.primary.main.slice(1),"' stroke-opacity='0.16'/%3E%3Crect x='0.621094' y='33.761' width='200' height='200' rx='10' fill='%23").concat(t.palette.primary.main.slice(1),"' fill-opacity='0.08'/%3E%3C/svg%3E\")")},"&:after":{zIndex:-1,content:'""',width:"180px",right:"-57px",height:"180px",bottom:"-54px",position:"absolute",backgroundImage:"url(\"data:image/svg+xml,%3Csvg width='181' height='181' viewBox='0 0 181 181' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='1.30469' y='1.44312' width='178' height='178' rx='19' stroke='%23".concat(t.palette.primary.main.slice(1),"' stroke-opacity='0.16' stroke-width='2' stroke-dasharray='8 8'/%3E%3Crect x='22.8047' y='22.9431' width='135' height='135' rx='10' fill='%23").concat(t.palette.primary.main.slice(1),"' fill-opacity='0.08'/%3E%3C/svg%3E\")")}}}});t.Z=i}},function(e){e.O(0,[7536,6565,9774,2888,179],function(){return e(e.s=25521)}),_N_E=e.O()}]);