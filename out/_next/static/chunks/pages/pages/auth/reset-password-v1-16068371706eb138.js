(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3271],{44267:function(e,t,r){"use strict";r.d(t,{Z:function(){return Z}});var o=r(87462),s=r(63366),n=r(67294),i=r(86010),a=r(94780),l=r(90948),d=r(71657),c=r(1588),w=r(34867);function h(e){return(0,w.Z)("MuiCardContent",e)}(0,c.Z)("MuiCardContent",["root"]);var p=r(85893);let u=["className","component"],f=e=>{let{classes:t}=e;return(0,a.Z)({root:["root"]},h,t)},x=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),m=n.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiCardContent"}),{className:n,component:a="div"}=r,l=(0,s.Z)(r,u),c=(0,o.Z)({},r,{component:a}),w=f(c);return(0,p.jsx)(x,(0,o.Z)({as:a,className:(0,i.Z)(w.root,n),ownerState:c,ref:t},l))});var Z=m},66242:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var o=r(87462),s=r(63366),n=r(67294),i=r(86010),a=r(94780),l=r(90948),d=r(71657),c=r(90629),w=r(1588),h=r(34867);function p(e){return(0,h.Z)("MuiCard",e)}(0,w.Z)("MuiCard",["root"]);var u=r(85893);let f=["className","raised"],x=e=>{let{classes:t}=e;return(0,a.Z)({root:["root"]},p,t)},m=(0,l.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),Z=n.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiCard"}),{className:n,raised:a=!1}=r,l=(0,s.Z)(r,f),c=(0,o.Z)({},r,{raised:a}),w=x(c);return(0,u.jsx)(m,(0,o.Z)({className:(0,i.Z)(w.root,n),elevation:a?8:void 0,ref:t,ownerState:c},l))});var g=Z},14898:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pages/auth/reset-password-v1",function(){return r(64321)}])},64321:function(e,t,r){"use strict";r.r(t);var o=r(85893),s=r(67294),n=r(41664),i=r.n(n),a=r(87357),l=r(11057),d=r(15861),c=r(47312),w=r(93946),h=r(44267),p=r(94054),u=r(57709),f=r(90948),x=r(2734),m=r(66242),Z=r(87109),g=r(79878),v=r(17562),j=r(8928),C=r(23131);let y=(0,f.ZP)(m.Z)(e=>{let{theme:t}=e;return{[t.breakpoints.up("sm")]:{width:"25rem"}}}),b=(0,f.ZP)(i())(e=>{let{theme:t}=e;return{display:"flex",fontSize:"1rem",alignItems:"center",textDecoration:"none",justifyContent:"center",color:t.palette.primary.main}}),P=()=>{let[e,t]=(0,s.useState)({newPassword:"",showNewPassword:!1,confirmNewPassword:"",showConfirmNewPassword:!1}),r=(0,x.Z)(),n=()=>{t({...e,showNewPassword:!e.showNewPassword})},i=()=>{t({...e,showConfirmNewPassword:!e.showConfirmNewPassword})};return(0,o.jsx)(a.Z,{className:"content-center",children:(0,o.jsx)(C.Z,{children:(0,o.jsx)(y,{children:(0,o.jsxs)(h.Z,{sx:{p:e=>"".concat(e.spacing(10.5,8,8)," !important")},children:[(0,o.jsxs)(a.Z,{sx:{mb:8,display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,o.jsxs)("svg",{width:34,height:23.375,viewBox:"0 0 32 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",fill:r.palette.primary.main,d:"M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"}),(0,o.jsx)("path",{fill:"#161616",opacity:.06,fillRule:"evenodd",clipRule:"evenodd",d:"M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"}),(0,o.jsx)("path",{fill:"#161616",opacity:.06,fillRule:"evenodd",clipRule:"evenodd",d:"M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"}),(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",fill:r.palette.primary.main,d:"M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"})]}),(0,o.jsx)(d.Z,{sx:{ml:2.5,fontWeight:600,fontSize:"1.625rem",lineHeight:1.385},children:v.Z.templateName})]}),(0,o.jsxs)(a.Z,{sx:{mb:6},children:[(0,o.jsx)(d.Z,{variant:"h6",sx:{mb:1.5},children:"Reset Password \uD83D\uDD12"}),(0,o.jsx)(d.Z,{sx:{fontWeight:500},children:"for john.doe@email.com"})]}),(0,o.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:e=>e.preventDefault(),children:[(0,o.jsxs)(p.Z,{sx:{display:"flex",mb:4},children:[(0,o.jsx)(c.Z,{htmlFor:"auth-reset-password-new-password",children:"New Password"}),(0,o.jsx)(u.Z,{autoFocus:!0,label:"New Password",value:e.newPassword,id:"auth-reset-password-new-password",onChange:r=>{t({...e,newPassword:r.target.value})},type:e.showNewPassword?"text":"password",endAdornment:(0,o.jsx)(Z.Z,{position:"end",children:(0,o.jsx)(w.Z,{edge:"end",onClick:n,onMouseDown:e=>e.preventDefault(),"aria-label":"toggle password visibility",children:(0,o.jsx)(g.Z,{icon:e.showNewPassword?"tabler:eye":"tabler:eye-off"})})})})]}),(0,o.jsxs)(p.Z,{sx:{display:"flex",mb:4},children:[(0,o.jsx)(c.Z,{htmlFor:"auth-reset-password-confirm-password",children:"Confirm Password"}),(0,o.jsx)(u.Z,{label:"Confirm Password",value:e.confirmNewPassword,id:"auth-reset-password-confirm-password",type:e.showConfirmNewPassword?"text":"password",onChange:r=>{t({...e,confirmNewPassword:r.target.value})},endAdornment:(0,o.jsx)(Z.Z,{position:"end",children:(0,o.jsx)(w.Z,{edge:"end",onMouseDown:e=>e.preventDefault(),"aria-label":"toggle password visibility",onClick:i,children:(0,o.jsx)(g.Z,{icon:e.showConfirmNewPassword?"tabler:eye":"tabler:eye-off"})})})})]}),(0,o.jsx)(l.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",sx:{mb:4},children:"Set New Password"}),(0,o.jsx)(d.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center","& svg":{mr:1}},children:(0,o.jsxs)(b,{href:"/pages/auth/login-v1",children:[(0,o.jsx)(g.Z,{fontSize:"1.25rem",icon:"tabler:chevron-left"}),(0,o.jsx)("span",{children:"Back to login"})]})})]})]})})})})};P.getLayout=e=>(0,o.jsx)(j.Z,{children:e}),t.default=P},23131:function(e,t,r){"use strict";var o=r(90948),s=r(87357);let n=(0,o.ZP)(s.Z)(e=>{let{theme:t}=e;return{width:"100%",maxWidth:400,position:"relative",[t.breakpoints.up("md")]:{"&:before":{zIndex:-1,top:"-79px",content:'""',left:"-46px",width:"238px",height:"234px",position:"absolute",backgroundImage:"url(\"data:image/svg+xml,%3Csvg width='239' height='234' viewBox='0 0 239 234' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='88.5605' y='0.700195' width='149' height='149' rx='19.5' stroke='%23".concat(t.palette.primary.main.slice(1),"' stroke-opacity='0.16'/%3E%3Crect x='0.621094' y='33.761' width='200' height='200' rx='10' fill='%23").concat(t.palette.primary.main.slice(1),"' fill-opacity='0.08'/%3E%3C/svg%3E\")")},"&:after":{zIndex:-1,content:'""',width:"180px",right:"-57px",height:"180px",bottom:"-54px",position:"absolute",backgroundImage:"url(\"data:image/svg+xml,%3Csvg width='181' height='181' viewBox='0 0 181 181' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='1.30469' y='1.44312' width='178' height='178' rx='19' stroke='%23".concat(t.palette.primary.main.slice(1),"' stroke-opacity='0.16' stroke-width='2' stroke-dasharray='8 8'/%3E%3Crect x='22.8047' y='22.9431' width='135' height='135' rx='10' fill='%23").concat(t.palette.primary.main.slice(1),"' fill-opacity='0.08'/%3E%3C/svg%3E\")")}}}});t.Z=n}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=14898)}),_N_E=e.O()}]);