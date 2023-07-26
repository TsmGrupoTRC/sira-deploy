"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3544],{46901:function(e,n,i){i.d(n,{Z:function(){return R}});var t=i(63366),r=i(87462),s=i(67294),l=i(86010),a=i(94780),o=i(41796),d=i(90948),c=i(71657),x=i(98216),h=i(90629),Z=i(1588),j=i(34867);function p(e){return(0,j.Z)("MuiAlert",e)}let m=(0,Z.Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]);var u=i(93946),v=i(82066),f=i(85893),g=(0,v.Z)((0,f.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),b=(0,v.Z)((0,f.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),y=(0,v.Z)((0,f.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),C=(0,v.Z)((0,f.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),S=i(34484);let M=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],w=e=>{let{variant:n,color:i,severity:t,classes:r}=e,s={root:["root",`${n}${(0,x.Z)(i||t)}`,`${n}`],icon:["icon"],message:["message"],action:["action"]};return(0,a.Z)(s,p,r)},A=(0,d.ZP)(h.Z,{name:"MuiAlert",slot:"Root",overridesResolver:(e,n)=>{let{ownerState:i}=e;return[n.root,n[i.variant],n[`${i.variant}${(0,x.Z)(i.color||i.severity)}`]]}})(({theme:e,ownerState:n})=>{let i="light"===e.palette.mode?o._j:o.$n,t="light"===e.palette.mode?o.$n:o._j,s=n.color||n.severity;return(0,r.Z)({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},s&&"standard"===n.variant&&{color:e.vars?e.vars.palette.Alert[`${s}Color`]:i(e.palette[s].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${s}StandardBg`]:t(e.palette[s].light,.9),[`& .${m.icon}`]:e.vars?{color:e.vars.palette.Alert[`${s}IconColor`]}:{color:e.palette[s].main}},s&&"outlined"===n.variant&&{color:e.vars?e.vars.palette.Alert[`${s}Color`]:i(e.palette[s].light,.6),border:`1px solid ${(e.vars||e).palette[s].light}`,[`& .${m.icon}`]:e.vars?{color:e.vars.palette.Alert[`${s}IconColor`]}:{color:e.palette[s].main}},s&&"filled"===n.variant&&(0,r.Z)({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${s}FilledColor`],backgroundColor:e.vars.palette.Alert[`${s}FilledBg`]}:{backgroundColor:"dark"===e.palette.mode?e.palette[s].dark:e.palette[s].main,color:e.palette.getContrastText(e.palette[s].main)}))}),L=(0,d.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,n)=>n.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),P=(0,d.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,n)=>n.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),I=(0,d.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,n)=>n.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),$={success:(0,f.jsx)(g,{fontSize:"inherit"}),warning:(0,f.jsx)(b,{fontSize:"inherit"}),error:(0,f.jsx)(y,{fontSize:"inherit"}),info:(0,f.jsx)(C,{fontSize:"inherit"})},k=s.forwardRef(function(e,n){var i,s,a,o,d,x;let h=(0,c.Z)({props:e,name:"MuiAlert"}),{action:Z,children:j,className:p,closeText:m="Close",color:v,components:g={},componentsProps:b={},icon:y,iconMapping:C=$,onClose:k,role:R="alert",severity:W="success",slotProps:T={},slots:B={},variant:z="standard"}=h,N=(0,t.Z)(h,M),D=(0,r.Z)({},h,{color:v,severity:W,variant:z}),H=w(D),E=null!=(i=null!=(s=B.closeButton)?s:g.CloseButton)?i:u.Z,O=null!=(a=null!=(o=B.closeIcon)?o:g.CloseIcon)?a:S.Z,_=null!=(d=T.closeButton)?d:b.closeButton,V=null!=(x=T.closeIcon)?x:b.closeIcon;return(0,f.jsxs)(A,(0,r.Z)({role:R,elevation:0,ownerState:D,className:(0,l.Z)(H.root,p),ref:n},N,{children:[!1!==y?(0,f.jsx)(L,{ownerState:D,className:H.icon,children:y||C[W]||$[W]}):null,(0,f.jsx)(P,{ownerState:D,className:H.message,children:j}),null!=Z?(0,f.jsx)(I,{ownerState:D,className:H.action,children:Z}):null,null==Z&&k?(0,f.jsx)(I,{ownerState:D,className:H.action,children:(0,f.jsx)(E,(0,r.Z)({size:"small","aria-label":m,title:m,color:"inherit",onClick:k},_,{children:(0,f.jsx)(O,(0,r.Z)({fontSize:"small"},V))}))}):null]}))});var R=k},53184:function(e,n,i){i.d(n,{Z:function(){return b}});var t=i(87462),r=i(63366),s=i(67294),l=i(86010),a=i(94780),o=i(44063),d=i(71657),c=i(90948),x=i(1588),h=i(34867);function Z(e){return(0,h.Z)("MuiTableHead",e)}(0,x.Z)("MuiTableHead",["root"]);var j=i(85893);let p=["className","component"],m=e=>{let{classes:n}=e;return(0,a.Z)({root:["root"]},Z,n)},u=(0,c.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,n)=>n.root})({display:"table-header-group"}),v={variant:"head"},f="thead",g=s.forwardRef(function(e,n){let i=(0,d.Z)({props:e,name:"MuiTableHead"}),{className:s,component:a=f}=i,c=(0,r.Z)(i,p),x=(0,t.Z)({},i,{component:a}),h=m(x);return(0,j.jsx)(o.Z.Provider,{value:v,children:(0,j.jsx)(u,(0,t.Z)({as:a,className:(0,l.Z)(h.root,s),ref:n,role:a===f?null:"rowgroup",ownerState:x},c))})});var b=g},43544:function(e,n,i){var t=i(85893),r=i(67294),s=i(41664),l=i.n(s),a=i(86886),o=i(46901),d=i(7906),c=i(67720),x=i(53816),h=i(53184),Z=i(295),j=i(15861),p=i(87357),m=i(90948),u=i(2734),v=i(98102),f=i(6154),g=i(17562);let b=(0,m.ZP)(p.Z)(e=>{let{theme:n}=e;return{display:"flex",alignItems:"center",justifyContent:"space-between","&:not(:last-of-type)":{marginBottom:n.spacing(2)}}}),y=(0,m.ZP)(v.Z)(e=>{let{theme:n}=e;return{borderBottom:0,paddingLeft:"0 !important",paddingRight:"0 !important",paddingTop:"".concat(n.spacing(1)," !important"),paddingBottom:"".concat(n.spacing(1)," !important")}}),C=e=>{let{id:n}=e,[i,s]=(0,r.useState)(!1),[m,C]=(0,r.useState)(null),S=(0,u.Z)();if((0,r.useEffect)(()=>{setTimeout(()=>{window.print()},100)},[]),(0,r.useEffect)(()=>{f.Z.get("/apps/invoice/single-invoice",{params:{id:n}}).then(e=>{C(e.data),s(!1)}).catch(()=>{C(null),s(!0)})},[n]),m){let{invoice:e,paymentDetails:n}=m;return(0,t.jsxs)(p.Z,{sx:{p:12,pb:6},children:[(0,t.jsxs)(a.ZP,{container:!0,children:[(0,t.jsx)(a.ZP,{item:!0,xs:8,sx:{mb:{sm:0,xs:4}},children:(0,t.jsxs)(p.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,t.jsxs)(p.Z,{sx:{mb:6,display:"flex",alignItems:"center"},children:[(0,t.jsxs)("svg",{width:34,height:23.375,viewBox:"0 0 32 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",fill:S.palette.primary.main,d:"M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"}),(0,t.jsx)("path",{fill:"#161616",opacity:.06,fillRule:"evenodd",clipRule:"evenodd",d:"M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"}),(0,t.jsx)("path",{fill:"#161616",opacity:.06,fillRule:"evenodd",clipRule:"evenodd",d:"M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"}),(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",fill:S.palette.primary.main,d:"M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"})]}),(0,t.jsx)(j.Z,{variant:"h6",sx:{ml:2.5,fontWeight:600,lineHeight:"24px",fontSize:"1.375rem !important"},children:g.Z.templateName})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(j.Z,{variant:"body2",sx:{mb:1},children:"Office 149, 450 South Brand Brooklyn"}),(0,t.jsx)(j.Z,{variant:"body2",sx:{mb:1},children:"San Diego County, CA 91905, USA"}),(0,t.jsx)(j.Z,{variant:"body2",children:"+1 (123) 456 7891, +44 (876) 543 2198"})]})]})}),(0,t.jsx)(a.ZP,{item:!0,xs:4,children:(0,t.jsxs)(p.Z,{sx:{display:"flex",flexDirection:"column",alignItems:{sm:"flex-end",xs:"flex-start"}},children:[(0,t.jsx)(j.Z,{variant:"h6",sx:{mb:2},children:"Invoice #".concat(e.id)}),(0,t.jsxs)(p.Z,{sx:{mb:2,display:"flex"},children:[(0,t.jsx)(j.Z,{variant:"body2",sx:{mr:3},children:"Date Issued:"}),(0,t.jsx)(j.Z,{variant:"body2",sx:{fontWeight:600},children:e.issuedDate})]}),(0,t.jsxs)(p.Z,{sx:{display:"flex"},children:[(0,t.jsx)(j.Z,{variant:"body2",sx:{mr:3},children:"Date Due:"}),(0,t.jsx)(j.Z,{variant:"body2",sx:{fontWeight:600},children:e.dueDate})]})]})})]}),(0,t.jsx)(c.Z,{sx:{my:e=>"".concat(e.spacing(6)," !important")}}),(0,t.jsxs)(a.ZP,{container:!0,children:[(0,t.jsxs)(a.ZP,{item:!0,xs:7,md:8,sx:{mb:{lg:0,xs:4}},children:[(0,t.jsx)(j.Z,{variant:"body2",sx:{mb:3.5,fontWeight:600},children:"Invoice To:"}),(0,t.jsx)(j.Z,{variant:"body2",sx:{mb:2},children:e.name}),(0,t.jsx)(j.Z,{variant:"body2",sx:{mb:2},children:e.company}),(0,t.jsx)(j.Z,{variant:"body2",sx:{mb:2},children:e.address}),(0,t.jsx)(j.Z,{variant:"body2",sx:{mb:2},children:e.contact}),(0,t.jsx)(j.Z,{variant:"body2",sx:{mb:2},children:e.companyEmail})]}),(0,t.jsxs)(a.ZP,{item:!0,xs:5,md:4,children:[(0,t.jsx)(j.Z,{variant:"body2",sx:{mb:3.5,fontWeight:600},children:"Bill To:"}),(0,t.jsx)(d.Z,{children:(0,t.jsxs)(Z.Z,{children:[(0,t.jsxs)(x.Z,{children:[(0,t.jsx)(y,{children:"Total Due:"}),(0,t.jsx)(y,{children:n.totalDue})]}),(0,t.jsxs)(x.Z,{children:[(0,t.jsx)(y,{children:"Bank name:"}),(0,t.jsx)(y,{children:n.bankName})]}),(0,t.jsxs)(x.Z,{children:[(0,t.jsx)(y,{children:"Country:"}),(0,t.jsx)(y,{children:n.country})]}),(0,t.jsxs)(x.Z,{children:[(0,t.jsx)(y,{children:"IBAN:"}),(0,t.jsx)(y,{children:n.iban})]}),(0,t.jsxs)(x.Z,{children:[(0,t.jsx)(y,{children:"SWIFT code:"}),(0,t.jsx)(y,{children:n.swiftCode})]})]})})]})]}),(0,t.jsx)(c.Z,{sx:{mt:e=>"".concat(e.spacing(6)," !important"),mb:"0 !important"}}),(0,t.jsxs)(d.Z,{sx:{mb:6},children:[(0,t.jsx)(h.Z,{children:(0,t.jsxs)(x.Z,{children:[(0,t.jsx)(v.Z,{children:"Item"}),(0,t.jsx)(v.Z,{children:"Description"}),(0,t.jsx)(v.Z,{children:"hours"}),(0,t.jsx)(v.Z,{children:"qty"}),(0,t.jsx)(v.Z,{children:"Total"})]})}),(0,t.jsxs)(Z.Z,{children:[(0,t.jsxs)(x.Z,{children:[(0,t.jsx)(v.Z,{children:"Premium Branding Package"}),(0,t.jsx)(v.Z,{children:"Branding & Promotion"}),(0,t.jsx)(v.Z,{children:"48"}),(0,t.jsx)(v.Z,{children:"1"}),(0,t.jsx)(v.Z,{children:"$32"})]}),(0,t.jsxs)(x.Z,{children:[(0,t.jsx)(v.Z,{children:"Social Media"}),(0,t.jsx)(v.Z,{children:"Social media templates"}),(0,t.jsx)(v.Z,{children:"42"}),(0,t.jsx)(v.Z,{children:"1"}),(0,t.jsx)(v.Z,{children:"$28"})]}),(0,t.jsxs)(x.Z,{children:[(0,t.jsx)(v.Z,{children:"Web Design"}),(0,t.jsx)(v.Z,{children:"Web designing package"}),(0,t.jsx)(v.Z,{children:"46"}),(0,t.jsx)(v.Z,{children:"1"}),(0,t.jsx)(v.Z,{children:"$24"})]}),(0,t.jsxs)(x.Z,{children:[(0,t.jsx)(v.Z,{children:"SEO"}),(0,t.jsx)(v.Z,{children:"Search engine optimization"}),(0,t.jsx)(v.Z,{children:"40"}),(0,t.jsx)(v.Z,{children:"1"}),(0,t.jsx)(v.Z,{children:"$22"})]})]})]}),(0,t.jsxs)(a.ZP,{container:!0,children:[(0,t.jsxs)(a.ZP,{item:!0,xs:8,sm:7,lg:9,children:[(0,t.jsxs)(p.Z,{sx:{mb:2,display:"flex",alignItems:"center"},children:[(0,t.jsx)(j.Z,{variant:"body2",sx:{mr:2,fontWeight:600},children:"Salesperson:"}),(0,t.jsx)(j.Z,{variant:"body2",children:"Tommy Shelby"})]}),(0,t.jsx)(j.Z,{variant:"body2",children:"Thanks for your business"})]}),(0,t.jsxs)(a.ZP,{item:!0,xs:4,sm:5,lg:3,children:[(0,t.jsxs)(b,{children:[(0,t.jsx)(j.Z,{variant:"body2",children:"Subtotal:"}),(0,t.jsx)(j.Z,{variant:"body2",sx:{fontWeight:600},children:"$1800"})]}),(0,t.jsxs)(b,{children:[(0,t.jsx)(j.Z,{variant:"body2",children:"Discount:"}),(0,t.jsx)(j.Z,{variant:"body2",sx:{fontWeight:600},children:"$28"})]}),(0,t.jsxs)(b,{children:[(0,t.jsx)(j.Z,{variant:"body2",children:"Tax:"}),(0,t.jsx)(j.Z,{variant:"body2",sx:{fontWeight:600},children:"21%"})]}),(0,t.jsx)(c.Z,{}),(0,t.jsxs)(b,{children:[(0,t.jsx)(j.Z,{variant:"body2",children:"Total:"}),(0,t.jsx)(j.Z,{variant:"body2",sx:{fontWeight:600},children:"$1690"})]})]})]}),(0,t.jsx)(c.Z,{sx:{my:"".concat(S.spacing(6)," !important")}}),(0,t.jsxs)(j.Z,{variant:"body2",children:[(0,t.jsx)("strong",{children:"Note:"})," It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!"]})]})}return i?(0,t.jsx)(p.Z,{sx:{p:5},children:(0,t.jsx)(a.ZP,{container:!0,spacing:6,children:(0,t.jsx)(a.ZP,{item:!0,xs:12,children:(0,t.jsxs)(o.Z,{severity:"error",children:["Invoice with the id: ",n," does not exist. Please check the list of invoices:"," ",(0,t.jsx)(l(),{href:"/apps/invoice/list",children:"Invoice List"})]})})})}):null};n.Z=C}}]);