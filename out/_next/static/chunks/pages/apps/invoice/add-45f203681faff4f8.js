(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2712],{70896:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/apps/invoice/add",function(){return n(49352)}])},31928:function(e,s,n){"use strict";var r=n(85893);let t=e=>{let{count:s,tag:n,children:t}=e,l=[];for(let e=0;e<s;e++)l.push(t(e));return(0,r.jsx)(n||"div",{...e,children:l})};s.Z=t},49352:function(e,s,n){"use strict";n.r(s),n.d(s,{__N_SSG:function(){return el},default:function(){return ei}});var r=n(85893),t=n(67294),l=n(86886),i=n(66242),a=n(7906),o=n(11057),c=n(67720),d=n(34386),x=n(53816),m=n(57922),h=n(295),p=n(50135),u=n(93946),j=n(15861),Z=n(47312),y=n(87357),f=n(87109),g=n(72882),v=n(90948),b=n(41796),C=n(2734),w=n(18360),P=n(18972),S=n(98102),k=n(44267),I=n(79878),A=n(9198),W=n.n(A),D=n(17562),B=n(31928);let T=(0,t.forwardRef)((e,s)=>{let{...n}=e;return(0,r.jsx)(p.Z,{size:"small",inputRef:s,sx:{width:{sm:"250px",xs:"170px"}},...n})}),N=(0,v.ZP)(S.Z)(e=>{let{theme:s}=e;return{borderBottom:0,paddingLeft:"0 !important",paddingRight:"0 !important","&:not(:last-child)":{paddingRight:"".concat(s.spacing(2)," !important")}}}),z=(0,v.ZP)(y.Z)(e=>{let{theme:s}=e;return{display:"flex",alignItems:"center",justifyContent:"space-between","&:not(:last-of-type)":{marginBottom:s.spacing(2)}}}),_=(0,v.ZP)(l.ZP)(e=>{let{theme:s}=e;return{paddingRight:0,display:"flex",position:"relative",borderRadius:s.shape.borderRadius,border:"1px solid ".concat(s.palette.divider),"& .col-title":{top:"-2.25rem",position:"absolute"},[s.breakpoints.down("md")]:{"& .col-title":{top:"0",position:"relative"}}}}),R=(0,v.ZP)(k.Z)(e=>{let{theme:s}=e;return{padding:s.spacing(16,10,10),"& .repeater-wrapper + .repeater-wrapper":{marginTop:s.spacing(10)},[s.breakpoints.down("md")]:{paddingTop:s.spacing(10)},[s.breakpoints.down("sm")]:{padding:s.spacing(6)}}}),L=(0,v.ZP)(y.Z)(e=>{let{theme:s}=e;return{display:"flex",flexDirection:"column",justifyContent:"flex-start",padding:s.spacing(2,1),borderLeft:"1px solid ".concat(s.palette.divider)}}),q=(0,v.ZP)(P.Z)(e=>{let{theme:s}=e;return{color:s.palette.success.main,backgroundColor:"transparent !important","&:hover":{color:"".concat(s.palette.success.main," !important"),backgroundColor:"".concat((0,b.Fq)(s.palette.success.main,.1)," !important")},"&.Mui-focusVisible":{backgroundColor:"".concat((0,b.Fq)(s.palette.success.main,.2)," !important")},"&.Mui-selected":{color:"".concat(s.palette.success.contrastText," !important"),backgroundColor:"".concat(s.palette.success.main," !important"),"&.Mui-focusVisible":{backgroundColor:"".concat(s.palette.success.dark," !important")}}}}),V=new Date,M=V.setDate(V.getDate()+7),U=e=>{let{clients:s,invoiceNumber:n,selectedClient:v,setSelectedClient:b,toggleAddCustomerDrawer:S}=e,[A,V]=(0,t.useState)(1),[U,E]=(0,t.useState)(""),[F,Q]=(0,t.useState)(new Date),[H,$]=(0,t.useState)(new Date(M)),O=(0,C.Z)(),X=e=>{e.preventDefault(),e.target.closest(".repeater-wrapper").remove()},K=e=>{E(e.target.value),void 0!==s&&b(s.filter(s=>s.name===e.target.value)[0])},Y=()=>{S()};return(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(k.Z,{sx:{p:["".concat(O.spacing(6)," !important"),"".concat(O.spacing(10)," !important")]},children:(0,r.jsxs)(l.ZP,{container:!0,children:[(0,r.jsx)(l.ZP,{item:!0,xl:6,xs:12,sx:{mb:{xl:0,xs:4}},children:(0,r.jsxs)(y.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,r.jsxs)(y.Z,{sx:{mb:6,display:"flex",alignItems:"center"},children:[(0,r.jsxs)("svg",{width:34,height:23.375,viewBox:"0 0 32 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",fill:O.palette.primary.main,d:"M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"}),(0,r.jsx)("path",{fill:"#161616",opacity:.06,fillRule:"evenodd",clipRule:"evenodd",d:"M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"}),(0,r.jsx)("path",{fill:"#161616",opacity:.06,fillRule:"evenodd",clipRule:"evenodd",d:"M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"}),(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",fill:O.palette.primary.main,d:"M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"})]}),(0,r.jsx)(j.Z,{variant:"h6",sx:{ml:2.5,fontWeight:600,lineHeight:"24px",fontSize:"1.375rem !important"},children:D.Z.templateName})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(j.Z,{sx:{mb:2,color:"text.secondary"},children:"Office 149, 450 South Brand Brooklyn"}),(0,r.jsx)(j.Z,{sx:{mb:2,color:"text.secondary"},children:"San Diego County, CA 91905, USA"}),(0,r.jsx)(j.Z,{sx:{color:"text.secondary"},children:"+1 (123) 456 7891, +44 (876) 543 2198"})]})]})}),(0,r.jsx)(l.ZP,{item:!0,xl:6,xs:12,children:(0,r.jsxs)(y.Z,{sx:{display:"flex",flexDirection:"column",alignItems:{xl:"flex-end",xs:"flex-start"}},children:[(0,r.jsxs)(y.Z,{sx:{mb:3,display:"flex",alignItems:"center"},children:[(0,r.jsx)(j.Z,{variant:"h6",sx:{mr:2,width:"105px"},children:"Invoice"}),(0,r.jsx)(p.Z,{size:"small",value:n,sx:{width:{sm:"250px",xs:"170px"}},InputProps:{disabled:!0,startAdornment:(0,r.jsx)(f.Z,{position:"start",children:"#"})}})]}),(0,r.jsxs)(y.Z,{sx:{mb:3,display:"flex",alignItems:"center"},children:[(0,r.jsx)(j.Z,{sx:{mr:3,width:"100px",color:"text.secondary"},children:"Date Issued:"}),(0,r.jsx)(W(),{id:"issue-date",selected:F,customInput:(0,r.jsx)(T,{}),onChange:e=>Q(e)})]}),(0,r.jsxs)(y.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsx)(j.Z,{sx:{mr:3,width:"100px",color:"text.secondary"},children:"Date Due:"}),(0,r.jsx)(W(),{id:"due-date",selected:H,customInput:(0,r.jsx)(T,{}),onChange:e=>$(e)})]})]})})]})}),(0,r.jsx)(c.Z,{}),(0,r.jsx)(k.Z,{sx:{p:["".concat(O.spacing(6)," !important"),"".concat(O.spacing(10)," !important")]},children:(0,r.jsxs)(l.ZP,{container:!0,children:[(0,r.jsxs)(l.ZP,{item:!0,xs:12,sm:6,sx:{mb:{lg:0,xs:4}},children:[(0,r.jsx)(j.Z,{sx:{mb:6,fontWeight:500},children:"Invoice To:"}),(0,r.jsxs)(w.Z,{size:"small",value:U,onChange:K,sx:{mb:4,width:"200px"},children:[(0,r.jsx)(q,{value:"",onClick:Y,children:(0,r.jsxs)(y.Z,{sx:{display:"flex",alignItems:"center","& svg":{mr:2}},children:[(0,r.jsx)(I.Z,{icon:"tabler:plus",fontSize:"1.125rem"}),"Add New Customer"]})}),void 0!==s&&s.map(e=>(0,r.jsx)(P.Z,{value:e.name,children:e.name},e.name))]}),null!=v?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j.Z,{sx:{mb:1.5,color:"text.secondary"},children:v.company}),(0,r.jsx)(j.Z,{sx:{mb:1.5,color:"text.secondary"},children:v.address}),(0,r.jsx)(j.Z,{sx:{mb:1.5,color:"text.secondary"},children:v.contact}),(0,r.jsx)(j.Z,{sx:{mb:1.5,color:"text.secondary"},children:v.companyEmail})]}):null]}),(0,r.jsx)(l.ZP,{item:!0,xs:12,sm:6,sx:{display:"flex",justifyContent:["flex-start","flex-end"]},children:(0,r.jsxs)("div",{children:[(0,r.jsx)(j.Z,{sx:{mb:6,fontWeight:500},children:"Bill To:"}),(0,r.jsx)(g.Z,{children:(0,r.jsx)(a.Z,{children:(0,r.jsxs)(h.Z,{sx:{"& .MuiTableCell-root":{py:"".concat(O.spacing(.75)," !important")}},children:[(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(N,{children:(0,r.jsx)(j.Z,{sx:{color:"text.secondary"},children:"Total Due:"})}),(0,r.jsx)(N,{children:(0,r.jsx)(j.Z,{sx:{fontWeight:500,color:"text.secondary"},children:"$12,110.55"})})]}),(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(N,{children:(0,r.jsx)(j.Z,{sx:{color:"text.secondary"},children:"Bank name:"})}),(0,r.jsx)(N,{children:(0,r.jsx)(j.Z,{sx:{color:"text.secondary"},children:"American Bank"})})]}),(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(N,{children:(0,r.jsx)(j.Z,{sx:{color:"text.secondary"},children:"Country:"})}),(0,r.jsx)(N,{children:(0,r.jsx)(j.Z,{sx:{color:"text.secondary"},children:"United States"})})]}),(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(N,{children:(0,r.jsx)(j.Z,{sx:{color:"text.secondary"},children:"IBAN:"})}),(0,r.jsx)(N,{children:(0,r.jsx)(j.Z,{sx:{color:"text.secondary"},children:"ETD95476213874685"})})]}),(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(N,{children:(0,r.jsx)(j.Z,{sx:{color:"text.secondary"},children:"SWIFT code:"})}),(0,r.jsx)(N,{children:(0,r.jsx)(j.Z,{sx:{color:"text.secondary"},children:"BR91905"})})]})]})})})]})})]})}),(0,r.jsx)(c.Z,{}),(0,r.jsxs)(R,{children:[(0,r.jsx)(B.Z,{count:A,children:e=>{let s=0===e?y.Z:m.Z;return(0,r.jsx)(s,{className:"repeater-wrapper",...0!==e?{in:!0}:{},children:(0,r.jsx)(l.ZP,{container:!0,children:(0,r.jsxs)(_,{item:!0,xs:12,children:[(0,r.jsxs)(l.ZP,{container:!0,sx:{py:4,width:"100%",pr:{lg:0,xs:4}},children:[(0,r.jsxs)(l.ZP,{item:!0,lg:6,md:5,xs:12,sx:{px:4,my:{lg:0,xs:4}},children:[(0,r.jsx)(j.Z,{className:"col-title",sx:{mb:{md:2,xs:0},color:"text.secondary"},children:"Item"}),(0,r.jsxs)(w.Z,{fullWidth:!0,size:"small",defaultValue:"App Design",children:[(0,r.jsx)(P.Z,{value:"App Design",children:"App Design"}),(0,r.jsx)(P.Z,{value:"App Customization",children:"App Customization"}),(0,r.jsx)(P.Z,{value:"ABC Template",children:"ABC Template"}),(0,r.jsx)(P.Z,{value:"App Development",children:"App Development"})]}),(0,r.jsx)(p.Z,{rows:2,fullWidth:!0,multiline:!0,size:"small",sx:{mt:3.5},defaultValue:"Customization & Bug Fixes"})]}),(0,r.jsxs)(l.ZP,{item:!0,lg:2,md:3,xs:12,sx:{px:4,my:{lg:0,xs:4}},children:[(0,r.jsx)(j.Z,{className:"col-title",sx:{mb:{md:2,xs:0},color:"text.secondary"},children:"Cost"}),(0,r.jsx)(p.Z,{size:"small",type:"number",placeholder:"24",defaultValue:"24",InputProps:{inputProps:{min:0}}}),(0,r.jsxs)(y.Z,{sx:{mt:3.5},children:[(0,r.jsx)(j.Z,{component:"span",sx:{color:"text.secondary"},children:"Discount:"})," ",(0,r.jsx)(j.Z,{component:"span",sx:{color:"text.secondary"},children:"0%"}),(0,r.jsx)(d.Z,{title:"Tax 1",placement:"top",children:(0,r.jsx)(j.Z,{component:"span",sx:{mx:2,color:"text.secondary"},children:"0%"})}),(0,r.jsx)(d.Z,{title:"Tax 2",placement:"top",children:(0,r.jsx)(j.Z,{component:"span",sx:{color:"text.secondary"},children:"0%"})})]})]}),(0,r.jsxs)(l.ZP,{item:!0,lg:2,md:2,xs:12,sx:{px:4,my:{lg:0,xs:4}},children:[(0,r.jsx)(j.Z,{className:"col-title",sx:{mb:{md:2,xs:0},color:"text.secondary"},children:"Hours"}),(0,r.jsx)(p.Z,{size:"small",type:"number",placeholder:"1",defaultValue:"1",InputProps:{inputProps:{min:0}}})]}),(0,r.jsxs)(l.ZP,{item:!0,lg:2,md:1,xs:12,sx:{px:4,my:{lg:0},mt:2},children:[(0,r.jsx)(j.Z,{className:"col-title",sx:{mb:{md:2,xs:0},color:"text.secondary"},children:"Price"}),(0,r.jsx)(j.Z,{sx:{color:"text.secondary"},children:"$24.00"})]})]}),(0,r.jsx)(L,{children:(0,r.jsx)(u.Z,{size:"small",onClick:X,children:(0,r.jsx)(I.Z,{icon:"tabler:x",fontSize:"1.25rem"})})})]})})},e)}}),(0,r.jsx)(l.ZP,{container:!0,sx:{mt:4},children:(0,r.jsx)(l.ZP,{item:!0,xs:12,sx:{px:0},children:(0,r.jsx)(o.Z,{variant:"contained",onClick:()=>V(A+1),children:"Add Item"})})})]}),(0,r.jsx)(c.Z,{}),(0,r.jsx)(k.Z,{sx:{p:["".concat(O.spacing(6)," !important"),"".concat(O.spacing(10)," !important")]},children:(0,r.jsxs)(l.ZP,{container:!0,children:[(0,r.jsxs)(l.ZP,{item:!0,xs:12,sm:7,lg:9,sx:{order:{sm:1,xs:2}},children:[(0,r.jsxs)(y.Z,{sx:{mb:4,display:"flex",alignItems:"center"},children:[(0,r.jsx)(j.Z,{variant:"body2",sx:{mr:2,fontWeight:600},children:"Salesperson:"}),(0,r.jsx)(p.Z,{size:"small",sx:{maxWidth:"150px"},defaultValue:"Tommy Shelby"})]}),(0,r.jsx)(p.Z,{size:"small",sx:{maxWidth:"300px"},placeholder:"Thanks for your business"})]}),(0,r.jsxs)(l.ZP,{item:!0,xs:12,sm:5,lg:3,sx:{mb:{sm:0,xs:4},order:{sm:2,xs:1}},children:[(0,r.jsxs)(z,{children:[(0,r.jsx)(j.Z,{sx:{color:"text.secondary"},children:"Subtotal:"}),(0,r.jsx)(j.Z,{sx:{fontWeight:500,color:"text.secondary"},children:"$1800"})]}),(0,r.jsxs)(z,{children:[(0,r.jsx)(j.Z,{sx:{color:"text.secondary"},children:"Discount:"}),(0,r.jsx)(j.Z,{sx:{fontWeight:500,color:"text.secondary"},children:"$28"})]}),(0,r.jsxs)(z,{sx:{mb:"0 !important"},children:[(0,r.jsx)(j.Z,{sx:{color:"text.secondary"},children:"Tax:"}),(0,r.jsx)(j.Z,{sx:{fontWeight:500,color:"text.secondary"},children:"21%"})]}),(0,r.jsx)(c.Z,{sx:{my:"".concat(O.spacing(2)," !important")}}),(0,r.jsxs)(z,{children:[(0,r.jsx)(j.Z,{sx:{color:"text.secondary"},children:"Total:"}),(0,r.jsx)(j.Z,{sx:{fontWeight:500,color:"text.secondary"},children:"$1690"})]})]})]})}),(0,r.jsx)(c.Z,{}),(0,r.jsxs)(k.Z,{sx:{px:[6,10]},children:[(0,r.jsx)(Z.Z,{htmlFor:"invoice-note",sx:{mb:2,fontWeight:500,fontSize:"0.875rem"},children:"Note:"}),(0,r.jsx)(p.Z,{rows:2,fullWidth:!0,multiline:!0,id:"invoice-note",defaultValue:"It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!"})]})]})};var E=n(41664),F=n.n(E),Q=n(72852),H=n(94054);let $=(0,v.ZP)(y.Z)(()=>({display:"flex",alignItems:"center",justifyContent:"space-between"})),O=()=>(0,r.jsxs)(l.ZP,{container:!0,spacing:6,children:[(0,r.jsx)(l.ZP,{item:!0,xs:12,children:(0,r.jsx)(i.Z,{children:(0,r.jsxs)(k.Z,{children:[(0,r.jsxs)(o.Z,{fullWidth:!0,variant:"contained",sx:{mb:2,"& svg":{mr:2}},children:[(0,r.jsx)(I.Z,{fontSize:"1.125rem",icon:"tabler:send"}),"Send Invoice"]}),(0,r.jsx)(o.Z,{fullWidth:!0,sx:{mb:2},component:F(),color:"secondary",variant:"outlined",href:"/apps/invoice/preview/4987",children:"Preview"}),(0,r.jsx)(o.Z,{fullWidth:!0,variant:"outlined",color:"secondary",children:"Save"})]})})}),(0,r.jsxs)(l.ZP,{item:!0,xs:12,children:[(0,r.jsxs)(H.Z,{fullWidth:!0,sx:{mb:4},children:[(0,r.jsx)(Z.Z,{id:"payment-select",children:"Accept payments via"}),(0,r.jsxs)(w.Z,{fullWidth:!0,labelId:"payment-select",label:"Accept payments via",defaultValue:"Internet Banking",children:[(0,r.jsx)(P.Z,{value:"Internet Banking",children:"Internet Banking"}),(0,r.jsx)(P.Z,{value:"Debit Card",children:"Debit Card"}),(0,r.jsx)(P.Z,{value:"Credit Card",children:"Credit Card"}),(0,r.jsx)(P.Z,{value:"Paypal",children:"Paypal"}),(0,r.jsx)(P.Z,{value:"UPI Transfer",children:"UPI Transfer"})]})]}),(0,r.jsxs)($,{children:[(0,r.jsx)(Z.Z,{sx:{cursor:"pointer"},htmlFor:"invoice-add-payment-terms",children:"Payment Terms"}),(0,r.jsx)(Q.Z,{defaultChecked:!0,id:"invoice-add-payment-terms"})]}),(0,r.jsxs)($,{children:[(0,r.jsx)(Z.Z,{sx:{cursor:"pointer"},htmlFor:"invoice-add-client-notes",children:"Client Notes"}),(0,r.jsx)(Q.Z,{id:"invoice-add-client-notes"})]}),(0,r.jsxs)($,{children:[(0,r.jsx)(Z.Z,{sx:{cursor:"pointer"},htmlFor:"invoice-add-payment-stub",children:"Payment Stub"}),(0,r.jsx)(Q.Z,{id:"invoice-add-payment-stub"})]})]})]});var X=n(58826),K=n(56815),Y=n(16310),G=n(47533),J=n(87536);let ee=(0,v.ZP)(y.Z)(e=>{let{theme:s}=e;return{display:"flex",alignItems:"center",padding:s.spacing(6),justifyContent:"space-between"}}),es=Y.Ry().shape({name:Y.Z_().required(),email:Y.Z_().email().required(),company:Y.Z_().required(),contact:Y.Z_().min(10).max(10).required(),address:Y.Z_().max(120).required()}),en=e=>{let{open:s,toggle:n,setSelectedClient:t,clients:l,setClients:i}=e,{reset:a,control:c,handleSubmit:d,formState:{errors:x}}=(0,J.cI)({resolver:(0,G.X)(es),defaultValues:{name:"",email:"",company:"",address:"",country:"USA",contact:""}}),m=e=>{let{address:s,company:r,contact:o,country:c,email:d,name:x}=e,m={name:x,country:c,contact:o,company:r,address:s,companyEmail:d};void 0!==l&&i([...l,m]),t(m),n(),a({name:"",email:"",company:"",address:"",country:"USA",contact:""})},h=()=>{n(),a({name:"",email:"",company:"",address:"",country:"USA",contact:""})};return(0,r.jsxs)(X.ZP,{open:s,anchor:"right",variant:"temporary",onClose:h,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:[300,400]}},children:[(0,r.jsxs)(ee,{children:[(0,r.jsx)(j.Z,{variant:"h6",children:"Add New Customer"}),(0,r.jsx)(u.Z,{size:"small",onClick:n,sx:{color:"text.primary"},children:(0,r.jsx)(I.Z,{icon:"tabler:x",fontSize:"1.25rem"})})]}),(0,r.jsxs)(y.Z,{component:"form",sx:{p:e=>e.spacing(0,6,6)},onSubmit:d(m),children:[(0,r.jsxs)(H.Z,{fullWidth:!0,sx:{mb:5},children:[(0,r.jsx)(J.Qr,{name:"name",control:c,rules:{required:!0},render:e=>{let{field:{value:s,onChange:n}}=e;return(0,r.jsx)(p.Z,{label:"Name",value:s,variant:"outlined",onChange:n,error:Boolean(x.name)})}}),x.name&&(0,r.jsx)(K.Z,{sx:{color:"error.main"},id:"invoice-name-error",children:x.name.message})]}),(0,r.jsxs)(H.Z,{fullWidth:!0,sx:{mb:5},children:[(0,r.jsx)(J.Qr,{name:"company",control:c,rules:{required:!0},render:e=>{let{field:{value:s,onChange:n}}=e;return(0,r.jsx)(p.Z,{value:s,label:"Company",variant:"outlined",onChange:n,error:Boolean(x.company)})}}),x.company&&(0,r.jsx)(K.Z,{sx:{color:"error.main"},id:"invoice-company-error",children:x.company.message})]}),(0,r.jsxs)(H.Z,{fullWidth:!0,sx:{mb:5},children:[(0,r.jsx)(J.Qr,{name:"email",control:c,rules:{required:!0},render:e=>{let{field:{value:s,onChange:n}}=e;return(0,r.jsx)(p.Z,{type:"email",label:"Email",value:s,variant:"outlined",onChange:n,error:Boolean(x.email)})}}),x.email&&(0,r.jsx)(K.Z,{sx:{color:"error.main"},id:"invoice-email-error",children:x.email.message})]}),(0,r.jsxs)(H.Z,{fullWidth:!0,sx:{mb:5},children:[(0,r.jsx)(J.Qr,{name:"address",control:c,rules:{required:!0},render:e=>{let{field:{value:s,onChange:n}}=e;return(0,r.jsx)(p.Z,{rows:6,multiline:!0,value:s,label:"Address",variant:"outlined",onChange:n,error:Boolean(x.address),placeholder:"1037 Lady Bug  Drive New York"})}}),x.address&&(0,r.jsx)(K.Z,{sx:{color:"error.main"},id:"invoice-address-error",children:x.address.message})]}),(0,r.jsxs)(H.Z,{fullWidth:!0,sx:{mb:5},children:[(0,r.jsx)(Z.Z,{id:"invoice-country",children:"Country"}),(0,r.jsx)(J.Qr,{name:"country",control:c,rules:{required:!0},render:e=>{let{field:{value:s,onChange:n}}=e;return(0,r.jsxs)(w.Z,{label:"Country",value:s,onChange:n,labelId:"invoice-country",error:Boolean(x.country),children:[(0,r.jsx)(P.Z,{value:"USA",children:"USA"}),(0,r.jsx)(P.Z,{value:"UK",children:"UK"}),(0,r.jsx)(P.Z,{value:"Russia",children:"Russia"}),(0,r.jsx)(P.Z,{value:"Australia",children:"Australia"}),(0,r.jsx)(P.Z,{value:"Canada",children:"Canada"})]})}}),x.country&&(0,r.jsx)(K.Z,{sx:{color:"error.main"},id:"invoice-country-error",children:x.country.message})]}),(0,r.jsxs)(H.Z,{fullWidth:!0,sx:{mb:6},children:[(0,r.jsx)(J.Qr,{name:"contact",control:c,rules:{required:!0},render:e=>{let{field:{value:s,onChange:n}}=e;return(0,r.jsx)(p.Z,{type:"number",value:s,variant:"outlined",onChange:n,label:"Contact Number",placeholder:"763-242-9206",error:Boolean(x.contact)})}}),x.contact&&(0,r.jsx)(K.Z,{sx:{color:"error.main"},id:"invoice-contact-error",children:x.contact.message})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(o.Z,{type:"submit",variant:"contained",sx:{mr:4},children:"Add"}),(0,r.jsx)(o.Z,{variant:"outlined",color:"secondary",onClick:h,children:"Cancel"})]})]})]})};var er=n(45353);let et=e=>{let{apiClientData:s,invoiceNumber:n}=e,[i,a]=(0,t.useState)(!1),[o,c]=(0,t.useState)(null),[d,x]=(0,t.useState)(s),m=()=>a(!i);return(0,r.jsxs)(er.Z,{sx:{"& .react-datepicker-wrapper":{width:"auto"}},children:[(0,r.jsxs)(l.ZP,{container:!0,spacing:6,children:[(0,r.jsx)(l.ZP,{item:!0,xl:9,md:8,xs:12,children:(0,r.jsx)(U,{clients:d,invoiceNumber:n,selectedClient:o,setSelectedClient:c,toggleAddCustomerDrawer:m})}),(0,r.jsx)(l.ZP,{item:!0,xl:3,md:4,xs:12,children:(0,r.jsx)(O,{})})]}),(0,r.jsx)(en,{clients:d,open:i,setClients:x,toggle:m,setSelectedClient:c})]})};var el=!0,ei=et}},function(e){e.O(0,[9365,9198,3863,7536,2880,7417,5353,9774,2888,179],function(){return e(e.s=70896)}),_N_E=e.O()}]);