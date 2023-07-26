(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5337],{44267:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var r=n(87462),i=n(63366),o=n(67294),s=n(86010),l=n(94780),a=n(90948),c=n(71657),d=n(1588),u=n(34867);function p(e){return(0,u.Z)("MuiCardContent",e)}(0,d.Z)("MuiCardContent",["root"]);var g=n(85893);let x=["className","component"],h=e=>{let{classes:t}=e;return(0,l.Z)({root:["root"]},p,t)},m=(0,a.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),f=o.forwardRef(function(e,t){let n=(0,c.Z)({props:e,name:"MuiCardContent"}),{className:o,component:l="div"}=n,a=(0,i.Z)(n,x),d=(0,r.Z)({},n,{component:l}),u=h(d);return(0,g.jsx)(m,(0,r.Z)({as:l,className:(0,s.Z)(u.root,o),ownerState:d,ref:t},a))});var Z=f},66242:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(87462),i=n(63366),o=n(67294),s=n(86010),l=n(94780),a=n(90948),c=n(71657),d=n(90629),u=n(1588),p=n(34867);function g(e){return(0,p.Z)("MuiCard",e)}(0,u.Z)("MuiCard",["root"]);var x=n(85893);let h=["className","raised"],m=e=>{let{classes:t}=e;return(0,l.Z)({root:["root"]},g,t)},f=(0,a.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),Z=o.forwardRef(function(e,t){let n=(0,c.Z)({props:e,name:"MuiCard"}),{className:o,raised:l=!1}=n,a=(0,i.Z)(n,h),d=(0,r.Z)({},n,{raised:l}),u=m(d);return(0,x.jsx)(f,(0,r.Z)({className:(0,s.Z)(u.root,o),elevation:l?8:void 0,ref:t,ownerState:d},a))});var j=Z},53319:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pages/help-center",function(){return n(57494)}])},57494:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return A},default:function(){return M}});var r=n(85893),i=n(66242),o=n(90948),s=n(15861),l=n(44267),a=n(67294),c=n(11163),d=n(19294),u=n(50135),p=n(98619),g=n(87109),x=n(5306),h=n(79878);let m=(0,o.ZP)(x.Z)(e=>{let{theme:t}=e;return{"& .MuiOutlinedInput-root":{paddingLeft:t.spacing(3.5),backgroundColor:t.palette.background.paper},[t.breakpoints.up("md")]:{width:"55%"},[t.breakpoints.up("xl")]:{width:"45%"},[t.breakpoints.down("md")]:{width:"75%"},[t.breakpoints.down("sm")]:{width:"100%"}}}),f=e=>{let{data:t,allArticles:n}=e,[i,o]=(0,a.useState)(""),[x,f]=(0,a.useState)(!1),Z=(0,c.useRouter)(),j=e=>{f(!1),o(e.title);let n=null,r=t.find(t=>t.subCategories.find(t=>t.articles.find(r=>(e.slug===r.slug&&(n=t),e.slug===r.slug))));null!==n&&Z.push("/pages/help-center/".concat(null==r?void 0:r.slug,"/").concat(n.slug,"/").concat(e.slug))};return(0,r.jsxs)(l.Z,{sx:{display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column",backgroundSize:"cover",py:e=>"".concat(e.spacing(24)," !important"),backgroundImage:"url(/images/pages/header-bg.png)"},children:[(0,r.jsx)(s.Z,{sx:{mb:4,fontWeight:500,fontSize:"1.625rem",lineHeight:1.385},children:"Hello, how can we help?"}),(0,r.jsx)(m,{open:x,disablePortal:!0,inputValue:i,options:n,onClose:()=>f(!1),sx:{mb:4,"& + .MuiAutocomplete-popper .MuiAutocomplete-listbox":{maxHeight:250}},getOptionLabel:e=>e.title||"",isOptionEqualToValue:(e,t)=>t===e,onChange:(e,t)=>j(t),onInputChange:(e,t)=>{o(t),f(!!e.target.value)},renderInput:e=>(0,r.jsx)(u.Z,{...e,value:i,placeholder:"Search a question...",onChange:e=>o(e.target.value),InputProps:{...e.InputProps,startAdornment:(0,r.jsx)(g.Z,{position:"start",sx:{color:"text.secondary"},children:(0,r.jsx)(h.Z,{fontSize:"1.25rem",icon:"tabler:search"})})}}),renderOption:(e,t)=>i.length?(0,a.createElement)(d.ZP,{...e,sx:{p:"0 !important"},key:t.slug,onClick:()=>j(t)},(0,r.jsx)(p.Z,{sx:{py:1.5},children:t.title})):null}),(0,r.jsx)(s.Z,{sx:{color:"text.secondary"},children:"Common troubleshooting topics: eCommerce, Blogging to payment"})]})};var Z=n(87357),j=n(11057);let b=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{sx:{mb:4,fontWeight:500,fontSize:"1.625rem",lineHeight:1.385},children:"Still need help?"}),(0,r.jsx)(s.Z,{sx:{color:"text.secondary"},children:"Our specialists are always happy to help."}),(0,r.jsx)(s.Z,{sx:{mb:4,color:"text.secondary"},children:"Contact us during standard business hours or email us 24/7, and we'll get back to you."}),(0,r.jsxs)(Z.Z,{sx:{gap:4,display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center"},children:[(0,r.jsx)(j.Z,{variant:"contained",children:"Visit our community"}),(0,r.jsx)(j.Z,{variant:"contained",children:"Contact us"})]})]});var v=n(41664),C=n.n(v),w=n(86886),y=n(10410);let k=e=>{let{categories:t}=e;return(0,r.jsx)(w.ZP,{container:!0,spacing:6,children:t&&t.length?t.map(e=>{let t=e.subCategories.map(e=>e.articles.length).reduce((e,t)=>e+t,0);return(0,r.jsx)(w.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,r.jsxs)(Z.Z,{sx:{p:6,boxShadow:6,height:"100%",display:"flex",borderRadius:1,flexDirection:"column",alignItems:"flex-start",backgroundColor:"background.paper"},children:[(0,r.jsxs)(Z.Z,{sx:{mb:5,display:"flex",alignItems:"center"},children:[(0,r.jsx)(y.Z,{skin:"light",variant:"rounded",color:e.avatarColor,sx:{mr:3,height:34,width:34},children:(0,r.jsx)(h.Z,{fontSize:"1.5rem",icon:e.icon})}),(0,r.jsx)(s.Z,{variant:"h6",component:C(),sx:{textDecoration:"none","&:hover":{color:"primary.main"}},href:"/pages/help-center/".concat(e.slug,"/").concat(e.subCategories[0].slug),children:e.title})]}),(0,r.jsx)(Z.Z,{component:"ul",sx:{mt:0,mb:5,pl:6.75,"& li":{mb:2,color:"primary.main"}},children:e.subCategories.map(t=>(0,r.jsx)("li",{children:(0,r.jsx)(s.Z,{component:C(),sx:{color:"inherit",textDecoration:"none"},href:"/pages/help-center/".concat(e.slug,"/").concat(t.slug),children:t.title})},t.title))}),(0,r.jsx)(s.Z,{component:C(),href:"/pages/help-center/".concat(e.slug,"/").concat(e.subCategories[0].slug),sx:{mt:"auto",fontWeight:500,textDecoration:"none","&:hover":{color:"primary.main"}},children:"".concat(t," Articles")})]})},e.slug)}):null})},S=e=>{let{articles:t}=e;return(0,r.jsx)(w.ZP,{container:!0,spacing:6,sx:{justifyContent:"center"},children:t&&t.length?t.map(e=>(0,r.jsx)(w.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,r.jsxs)(Z.Z,{sx:{p:6,height:"100%",display:"flex",borderRadius:1,textAlign:"center",alignItems:"center",flexDirection:"column",border:e=>"1px solid ".concat(e.palette.divider)},children:[(0,r.jsx)(Z.Z,{sx:{mb:1.5,minHeight:58,display:"flex"},children:(0,r.jsx)("img",{height:"58",src:e.img,alt:e.title})}),(0,r.jsx)(s.Z,{variant:"h6",sx:{mb:1.5},children:e.title}),(0,r.jsx)(s.Z,{sx:{my:"auto",overflow:"hidden",WebkitLineClamp:"2",display:"-webkit-box",color:"text.secondary",textOverflow:"ellipsis",WebkitBoxOrient:"vertical"},children:e.subtitle}),(0,r.jsx)(j.Z,{sx:{mt:4},component:C(),variant:"outlined",href:"/pages/help-center/getting-started/account/changing-your-username",children:"Read More"})]})},e.slug)):null})},P=(0,o.ZP)(l.Z)(e=>{let{theme:t}=e;return{paddingTop:"".concat(t.spacing(20)," !important"),paddingBottom:"".concat(t.spacing(20)," !important"),[t.breakpoints.up("sm")]:{paddingLeft:"".concat(t.spacing(20)," !important"),paddingRight:"".concat(t.spacing(20)," !important")}}}),_=e=>{let{apiData:t}=e;return(0,r.jsx)(i.Z,{children:null!==t?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f,{data:t.categories,allArticles:t.allArticles}),(0,r.jsxs)(P,{children:[(0,r.jsx)(s.Z,{sx:{mb:6,fontWeight:500,textAlign:"center",fontSize:"1.625rem",lineHeight:1.385},children:"Popular Articles"}),(0,r.jsx)(S,{articles:t.popularArticles})]}),(0,r.jsxs)(P,{sx:{backgroundColor:"action.hover"},children:[(0,r.jsx)(s.Z,{sx:{mb:6,fontWeight:500,textAlign:"center",fontSize:"1.625rem",lineHeight:1.385},children:"Knowledge Base"}),(0,r.jsx)(k,{categories:t.categories})]}),(0,r.jsxs)(P,{children:[(0,r.jsx)(s.Z,{sx:{mb:6,fontWeight:500,textAlign:"center",fontSize:"1.625rem",lineHeight:1.385},children:"Keep Learning"}),(0,r.jsx)(S,{articles:t.keepLearning})]}),(0,r.jsx)(P,{sx:{textAlign:"center",backgroundColor:"action.hover"},children:(0,r.jsx)(b,{})})]}):null})};var A=!0,M=_}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=53319)}),_N_E=e.O()}]);