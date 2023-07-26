(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9885],{93520:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pages/auth/two-steps-v2",function(){return n(56651)}])},22967:function(e,t,n){"use strict";var i=n(90948),o=n(87357);let r=(0,i.ZP)(o.Z)(e=>{let{theme:t}=e;return{"& input":{height:56,fontSize:16,width:"100%",borderWidth:1,background:"none",borderStyle:"solid",padding:"16.5px 14px",color:t.palette.text.primary,borderRadius:t.shape.borderRadius,fontFamily:t.typography.body1.fontFamily,borderColor:"rgba(".concat(t.palette.customColors.main,", 0.22)"),transition:t.transitions.create(["border-color","box-shadow"]),"&:focus, &:focus-visible":{outline:0,borderWidth:2,padding:"15.5px 13px",borderColor:"".concat(t.palette.primary.main," !important"),boxShadow:"0 2px 3px 0 rgba(".concat(t.palette.customColors.main,", 0.1)")},"&::-webkit-input-placeholder":{color:t.palette.text.secondary}}}});t.Z=r},56651:function(e,t,n){"use strict";n.r(t);var i=n(85893),o=n(67294),r=n(41664),a=n.n(r),l=n(11057),s=n(15861),c=n(87357),d=n(98396),p=n(90948),u=n(2734),m=n(56815),x=n(52034),h=n.n(x),g=n(87536),f=n(8928),b=n(58441),y=n(22967),v=n(42563);n(49634);let j=(0,p.ZP)("img")(e=>{let{theme:t}=e;return{zIndex:2,maxHeight:650,marginTop:t.spacing(12),marginBottom:t.spacing(12),[t.breakpoints.down(1540)]:{maxHeight:550},[t.breakpoints.down("lg")]:{maxHeight:500}}}),w=(0,p.ZP)(c.Z)(e=>{let{theme:t}=e;return{width:"100%",[t.breakpoints.up("md")]:{maxWidth:450},[t.breakpoints.up("lg")]:{maxWidth:600},[t.breakpoints.up("xl")]:{maxWidth:750}}}),Z=(0,p.ZP)(a())(e=>{let{theme:t}=e;return{fontSize:"1rem",textDecoration:"none",marginLeft:t.spacing(2),color:t.palette.primary.main}}),k=(0,p.ZP)(h())(e=>{let{theme:t}=e;return{maxWidth:48,textAlign:"center",height:"48px !important",fontSize:"150% !important",marginTop:t.spacing(2),marginBottom:t.spacing(2),"&:not(:last-child)":{marginRight:t.spacing(2)},"&::-webkit-outer-spin-button, &::-webkit-inner-spin-button":{margin:0,WebkitAppearance:"none"}}}),C={val1:"",val2:"",val3:"",val4:"",val5:"",val6:""},L=()=>{let[e,t]=(0,o.useState)(!1),n=(0,u.Z)(),{control:r,handleSubmit:a,formState:{errors:p}}=(0,g.cI)({defaultValues:C}),x=(0,d.Z)(n.breakpoints.down("md")),h=Object.keys(p),f=(t,n)=>{if(!e){n(t);let e=t.target.form,i=[...e].indexOf(t.target);e[i].value&&e[i].value.length&&e.elements[i+1].focus(),t.preventDefault()}},L=e=>{if("Backspace"===e.key){t(!0);let n=e.target.form,i=[...n].indexOf(e.target);i>=1&&!(n[i].value&&n[i].value.length)&&n.elements[i-1].focus()}else t(!1)};return(0,i.jsxs)(c.Z,{className:"content-right",sx:{backgroundColor:"background.paper"},children:[x?null:(0,i.jsxs)(c.Z,{sx:{flex:1,display:"flex",position:"relative",alignItems:"center",borderRadius:"20px",justifyContent:"center",backgroundColor:"customColors.bodyBg",margin:e=>e.spacing(8,0,8,8)},children:[(0,i.jsx)(j,{alt:"two-steps-illustration",src:"/images/pages/auth-v2-two-steps-illustration-".concat(n.palette.mode,".png")}),(0,i.jsx)(b.Z,{})]}),(0,i.jsx)(w,{children:(0,i.jsx)(c.Z,{sx:{p:[6,12],height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,i.jsxs)(c.Z,{sx:{width:"100%",maxWidth:400},children:[(0,i.jsxs)("svg",{width:34,height:23.375,viewBox:"0 0 32 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",fill:n.palette.primary.main,d:"M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"}),(0,i.jsx)("path",{fill:"#161616",opacity:.06,fillRule:"evenodd",clipRule:"evenodd",d:"M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"}),(0,i.jsx)("path",{fill:"#161616",opacity:.06,fillRule:"evenodd",clipRule:"evenodd",d:"M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",fill:n.palette.primary.main,d:"M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"})]}),(0,i.jsxs)(c.Z,{sx:{my:6},children:[(0,i.jsx)(s.Z,{sx:{mb:1.5,fontWeight:500,fontSize:"1.625rem",lineHeight:1.385},children:"Two-Step Verification \uD83D\uDCAC"}),(0,i.jsx)(s.Z,{sx:{mb:1.5,color:"text.secondary"},children:"We sent a verification code to your mobile. Enter the code from the mobile in the field below."}),(0,i.jsx)(s.Z,{sx:{fontWeight:500},children:"******9763"})]}),(0,i.jsx)(s.Z,{sx:{fontWeight:500,color:"text.secondary"},children:"Type your 6 digit security code"}),(0,i.jsxs)("form",{onSubmit:a(()=>!0),children:[(0,i.jsx)(y.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",...h.length&&{"& .invalid:focus":{borderColor:e=>"".concat(e.palette.error.main," !important"),boxShadow:e=>"0 1px 3px 0 ".concat((0,v.E)(e.palette.error.main,.4))}}},children:Object.keys(C).map((e,t)=>(0,i.jsx)(g.Qr,{name:e,control:r,rules:{required:!0},render:e=>{let{field:{value:o,onChange:r}}=e;return(0,i.jsx)(c.Z,{type:"tel",value:o,autoFocus:0===t,component:k,onKeyDown:L,onChange:e=>f(e,r),options:{blocks:[1],numeral:!0,numeralPositiveOnly:!0},sx:{[n.breakpoints.down("sm")]:{px:"".concat(n.spacing(2)," !important")}}})}},e))}),h.length?(0,i.jsx)(m.Z,{sx:{color:"error.main"},children:"Please enter a valid OTP"}):null,(0,i.jsx)(l.Z,{fullWidth:!0,type:"submit",variant:"contained",sx:{mt:2},children:"Verify My Account"})]}),(0,i.jsxs)(c.Z,{sx:{mt:4,display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,i.jsx)(s.Z,{sx:{color:"text.secondary"},children:"Didn't get the code?"}),(0,i.jsx)(Z,{href:"/",onClick:e=>e.preventDefault(),children:"Resend"})]})]})})})]})};L.getLayout=e=>(0,i.jsx)(f.Z,{children:e}),t.default=L},58441:function(e,t,n){"use strict";var i=n(85893),o=n(98396),r=n(90948),a=n(2734);let l=(0,r.ZP)("img")(e=>{let{theme:t}=e;return{bottom:0,height:300,width:"100%",position:"absolute",[t.breakpoints.down(1540)]:{height:250}}}),s=e=>{let{image:t,height:n,className:r}=e,s=(0,a.Z)(),c=(0,o.Z)(s.breakpoints.down("md"));return c?null:(0,i.jsx)(i.Fragment,{children:t?"string"==typeof t?(0,i.jsx)(l,{alt:"mask",src:t,className:r,...n&&{height:n}}):t:(0,i.jsx)(l,{alt:"mask",className:r,...n&&{height:n},src:"/images/pages/auth-v2-mask-".concat(s.palette.mode,".png")})})};t.Z=s}},function(e){e.O(0,[7536,6565,9774,2888,179],function(){return e(e.s=93520)}),_N_E=e.O()}]);