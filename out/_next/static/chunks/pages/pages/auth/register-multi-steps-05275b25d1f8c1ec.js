(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8197],{80209:function(e,t,n){"use strict";var r=n(67294);let i=r.createContext(void 0);t.Z=i},49033:function(e,t,n){"use strict";n.d(t,{Z:function(){return W}});var r=n(63366),i=n(87462),l=n(67294),s=n(86010),a=n(94780),o=n(41796),c=n(21964),d=n(71657),u=n(82066),p=n(85893),m=(0,u.Z)((0,p.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),x=(0,u.Z)((0,p.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),h=n(90948);let f=(0,h.ZP)("span")({position:"relative",display:"flex"}),Z=(0,h.ZP)(m)({transform:"scale(1)"}),g=(0,h.ZP)(x)(({theme:e,ownerState:t})=>(0,i.Z)({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},t.checked&&{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}));var j=function(e){let{checked:t=!1,classes:n={},fontSize:r}=e,l=(0,i.Z)({},e,{checked:t});return(0,p.jsxs)(f,{className:n.root,ownerState:l,children:[(0,p.jsx)(Z,{fontSize:r,className:n.background,ownerState:l}),(0,p.jsx)(g,{fontSize:r,className:n.dot,ownerState:l})]})},b=n(98216),v=n(49064).Z,y=n(80209),C=n(1588),w=n(34867);function S(e){return(0,w.Z)("MuiRadio",e)}let P=(0,C.Z)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]),k=["checked","checkedIcon","color","icon","name","onChange","size","className"],M=e=>{let{classes:t,color:n}=e,r={root:["root",`color${(0,b.Z)(n)}`]};return(0,i.Z)({},t,(0,a.Z)(r,S,t))},N=(0,h.ZP)(c.Z,{shouldForwardProp:e=>(0,h.FO)(e)||"classes"===e,name:"MuiRadio",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[`color${(0,b.Z)(n.color)}`]]}})(({theme:e,ownerState:t})=>(0,i.Z)({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===t.color?e.vars.palette.action.activeChannel:e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,o.Fq)("default"===t.color?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${P.checked}`]:{color:(e.vars||e).palette[t.color].main}},{[`&.${P.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),z=(0,p.jsx)(j,{checked:!0}),L=(0,p.jsx)(j,{}),R=l.forwardRef(function(e,t){var n,a,o,c;let u=(0,d.Z)({props:e,name:"MuiRadio"}),{checked:m,checkedIcon:x=z,color:h="primary",icon:f=L,name:Z,onChange:g,size:j="medium",className:b}=u,C=(0,r.Z)(u,k),w=(0,i.Z)({},u,{color:h,size:j}),S=M(w),P=l.useContext(y.Z),R=m,W=v(g,P&&P.onChange),I=Z;return P&&(void 0===R&&(o=P.value,R="object"==typeof(c=u.value)&&null!==c?o===c:String(o)===String(c)),void 0===I&&(I=P.name)),(0,p.jsx)(N,(0,i.Z)({type:"radio",icon:l.cloneElement(f,{fontSize:null!=(n=L.props.fontSize)?n:j}),checkedIcon:l.cloneElement(x,{fontSize:null!=(a=z.props.fontSize)?a:j}),ownerState:w,classes:S,name:I,checked:R,onChange:W,ref:t,className:(0,s.Z)(S.root,b)},C))});var W=R},21964:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(63366),i=n(87462),l=n(67294),s=n(86010),a=n(94780),o=n(98216),c=n(90948),d=n(49299),u=n(74423),p=n(49990),m=n(1588),x=n(34867);function h(e){return(0,x.Z)("PrivateSwitchBase",e)}(0,m.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var f=n(85893);let Z=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],g=e=>{let{classes:t,checked:n,disabled:r,edge:i}=e,l={root:["root",n&&"checked",r&&"disabled",i&&`edge${(0,o.Z)(i)}`],input:["input"]};return(0,a.Z)(l,h,t)},j=(0,c.ZP)(p.Z)(({ownerState:e})=>(0,i.Z)({padding:9,borderRadius:"50%"},"start"===e.edge&&{marginLeft:"small"===e.size?-3:-12},"end"===e.edge&&{marginRight:"small"===e.size?-3:-12})),b=(0,c.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),v=l.forwardRef(function(e,t){let{autoFocus:n,checked:l,checkedIcon:a,className:o,defaultChecked:c,disabled:p,disableFocusRipple:m=!1,edge:x=!1,icon:h,id:v,inputProps:y,inputRef:C,name:w,onBlur:S,onChange:P,onFocus:k,readOnly:M,required:N=!1,tabIndex:z,type:L,value:R}=e,W=(0,r.Z)(e,Z),[I,D]=(0,d.Z)({controlled:l,default:Boolean(c),name:"SwitchBase",state:"checked"}),F=(0,u.Z)(),$=e=>{k&&k(e),F&&F.onFocus&&F.onFocus(e)},E=e=>{S&&S(e),F&&F.onBlur&&F.onBlur(e)},B=e=>{if(e.nativeEvent.defaultPrevented)return;let t=e.target.checked;D(t),P&&P(e,t)},A=p;F&&void 0===A&&(A=F.disabled);let _=(0,i.Z)({},e,{checked:I,disabled:A,disableFocusRipple:m,edge:x}),T=g(_);return(0,f.jsxs)(j,(0,i.Z)({component:"span",className:(0,s.Z)(T.root,o),centerRipple:!0,focusRipple:!m,disabled:A,tabIndex:null,role:void 0,onFocus:$,onBlur:E,ownerState:_,ref:t},W,{children:[(0,f.jsx)(b,(0,i.Z)({autoFocus:n,checked:l,defaultChecked:c,className:T.input,disabled:A,id:"checkbox"===L||"radio"===L?v:void 0,name:w,onChange:B,readOnly:M,ref:C,required:N,ownerState:_,tabIndex:z,type:L},"checkbox"===L&&void 0===R?{}:{value:R},y)),I?a:h]}))});var y=v},62668:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pages/auth/register-multi-steps",function(){return n(37225)}])},65445:function(e,t,n){"use strict";var r=n(85893),i=n(87357),l=n(86886),s=n(49033),a=n(15861),o=n(79878);let c=e=>{let{data:t,icon:n,name:c,selected:d,gridProps:u,iconProps:p,handleChange:m,color:x="primary"}=e,{title:h,value:f,content:Z}=t;return t?(0,r.jsx)(l.ZP,{item:!0,...u,children:(0,r.jsxs)(i.Z,{onClick:()=>m(f),sx:{p:4,height:"100%",display:"flex",borderRadius:1,cursor:"pointer",position:"relative",alignItems:"center",flexDirection:"column",border:e=>"1px solid ".concat(e.palette.divider),...d===f?{borderColor:"".concat(x,".main"),"& svg":{color:"primary.main"}}:{"&:hover":{borderColor:e=>"rgba(".concat(e.palette.customColors.main,", 0.25)")}}},children:[n?(0,r.jsx)(o.Z,{icon:n,...p}):null,h?"string"==typeof h?(0,r.jsx)(a.Z,{sx:{fontWeight:500,...Z?{mb:2}:{my:"auto"}},children:h}):h:null,Z?"string"==typeof Z?(0,r.jsx)(a.Z,{variant:"body2",sx:{my:"auto",textAlign:"center"},children:Z}):Z:null,(0,r.jsx)(s.Z,{name:c,size:"small",color:x,value:f,onChange:m,checked:d===f,sx:{mb:-2,...!n&&!h&&!Z&&{mt:-2}}})]})}):null};t.Z=c},20780:function(e,t,n){"use strict";var r=n(90948),i=n(87357),l=n(81931);let s=(0,r.ZP)(i.Z)(e=>{let{theme:t}=e,n=(0,l.Z)();return{[t.breakpoints.down("md")]:{"& .MuiStepper-horizontal:not(.MuiStepper-alternativeLabel)":{flexDirection:"column",alignItems:"flex-start"}},"& .MuiStep-root":{"& .step-label":{display:"flex",alignItems:"center",justifyContent:"center","& .MuiAvatar-root":{marginRight:t.spacing(4)}},"& .step-number":{fontWeight:"bold",fontSize:"2.125rem",marginRight:t.spacing(2.5),color:t.palette.text.primary},"& .step-title":{fontWeight:500,fontSize:"1rem",color:t.palette.text.primary},"& .step-subtitle":{fontSize:"0.875rem",color:t.palette.text.secondary},"& .MuiStepLabel-root.Mui-disabled":{"& .step-number":{color:t.palette.text.disabled}},"& .Mui-error":{"& .MuiStepLabel-labelContainer, & .step-number, & .step-title, & .step-subtitle":{color:t.palette.error.main}}},"& .MuiStepConnector-root":{"& .MuiStepConnector-line":{borderWidth:3,borderRadius:3},"&.Mui-active, &.Mui-completed":{"& .MuiStepConnector-line":{borderColor:t.palette.primary.main}},"&.Mui-disabled .MuiStepConnector-line":{borderColor:n.primaryLight.backgroundColor}},"& .MuiStepper-alternativeLabel":{"& .MuiStepConnector-root":{top:10},"& .MuiStepLabel-labelContainer":{display:"flex",alignItems:"center",flexDirection:"column","& > * + *":{marginTop:t.spacing(1)}}},"& .MuiStepper-vertical":{"& .MuiStep-root":{"& .step-label":{justifyContent:"flex-start"},"& .MuiStepContent-root":{borderWidth:3,marginLeft:t.spacing(2.25),borderColor:t.palette.primary.main},"& .button-wrapper":{marginTop:t.spacing(4)},"&.active + .MuiStepConnector-root .MuiStepConnector-line":{borderColor:t.palette.primary.main}},"& .MuiStepConnector-root":{marginLeft:t.spacing(2.25),"& .MuiStepConnector-line":{borderRadius:0}}}}});t.Z=s},34167:function(e,t,n){"use strict";n.d(t,{N:function(){return a},mf:function(){return s},oS:function(){return i},tE:function(){return o}});let r=e=>{let t=new Date;return new Date(e).getDate()===t.getDate()&&new Date(e).getMonth()===t.getMonth()&&new Date(e).getFullYear()===t.getFullYear()},i=function(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],n=new Date(e),i={month:"short",day:"numeric"};return t&&r(n)&&(i={hour:"numeric",minute:"numeric"}),new Intl.DateTimeFormat("en-US",i).format(new Date(e))},l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\D+/g,"")},s=(e,t)=>{let n;if(!e)return e;let r=t.fns.cardType(e),i=l(e);switch(r){case"amex":n="".concat(i.slice(0,4)," ").concat(i.slice(4,10)," ").concat(i.slice(10,15));break;case"dinersclub":n="".concat(i.slice(0,4)," ").concat(i.slice(4,10)," ").concat(i.slice(10,14));break;default:n="".concat(i.slice(0,4)," ").concat(i.slice(4,8)," ").concat(i.slice(8,12)," ").concat(i.slice(12,19))}return n.trim()},a=e=>{let t=e.replace(/^([1-9]\/|[2-9])$/g,"0$1/").replace(/^(0[1-9]|1[0-2])$/g,"$1/").replace(/^([0-1])([3-9])$/g,"0$1/$2").replace(/^(0?[1-9]|1[0-2])([0-9]{2})$/g,"$1/$2").replace(/^([0]+)\/|[0]+$/g,"0").replace(/[^\d\/]|^[\/]*$/g,"").replace(/\/\//g,"/");return t},o=(e,t,n)=>{let r=l(e),i=n.fns.cardType(t);return r.slice(0,"amex"===i?4:3)}},37225:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return H}});var r=n(85893),i=n(15861),l=n(87357),s=n(98396),a=n(90948),o=n(2734),c=n(8928),d=n(17562),u=n(58441),p=n(67294),m=n(87952),x=n(76624),h=n(83578),f=n(44472),Z=n(79878),g=n(10410),j=n(86886),b=n(11057),v=n(18360),y=n(18972),C=n(50135),w=n(47312),S=n(94054),P=n(87109);let k=e=>{let{handleNext:t,handlePrev:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l.Z,{sx:{mb:6},children:[(0,r.jsx)(i.Z,{variant:"h5",sx:{mb:1.5},children:"Personal Information"}),(0,r.jsx)(i.Z,{sx:{color:"text.secondary"},children:"Enter Your Personal Information"})]}),(0,r.jsxs)(j.ZP,{container:!0,spacing:5,children:[(0,r.jsx)(j.ZP,{item:!0,xs:12,sm:6,children:(0,r.jsx)(C.Z,{fullWidth:!0,placeholder:"john",label:"First Name"})}),(0,r.jsx)(j.ZP,{item:!0,xs:12,sm:6,children:(0,r.jsx)(C.Z,{fullWidth:!0,label:"Last Name",placeholder:"Doe"})}),(0,r.jsx)(j.ZP,{item:!0,xs:12,sm:6,children:(0,r.jsx)(C.Z,{fullWidth:!0,label:"Mobile",placeholder:"202 555 0111",InputProps:{startAdornment:(0,r.jsx)(P.Z,{position:"start",children:"US (+1)"})}})}),(0,r.jsx)(j.ZP,{item:!0,xs:12,sm:6,children:(0,r.jsx)(C.Z,{fullWidth:!0,type:"number",label:"Pincode",placeholder:"689421"})}),(0,r.jsx)(j.ZP,{item:!0,xs:12,children:(0,r.jsx)(S.Z,{fullWidth:!0,children:(0,r.jsx)(C.Z,{label:"Address",placeholder:"7777, Mendez Plains, Florida"})})}),(0,r.jsx)(j.ZP,{item:!0,xs:12,children:(0,r.jsx)(C.Z,{fullWidth:!0,label:"Landmark",placeholder:"Mendez Plains"})}),(0,r.jsx)(j.ZP,{item:!0,xs:12,sm:6,children:(0,r.jsx)(C.Z,{fullWidth:!0,label:"City",placeholder:"Miami"})}),(0,r.jsx)(j.ZP,{item:!0,xs:12,sm:6,children:(0,r.jsxs)(S.Z,{fullWidth:!0,children:[(0,r.jsx)(w.Z,{id:"state-select",children:"State"}),(0,r.jsxs)(v.Z,{labelId:"state-select",label:"State",defaultValue:"New York",children:[(0,r.jsx)(y.Z,{value:"New York",children:"New York"}),(0,r.jsx)(y.Z,{value:"California",children:"California"}),(0,r.jsx)(y.Z,{value:"Florida",children:"Florida"}),(0,r.jsx)(y.Z,{value:"Washington",children:"Washington"}),(0,r.jsx)(y.Z,{value:"Texas",children:"Texas"})]})]})}),(0,r.jsx)(j.ZP,{item:!0,xs:12,sx:{pt:e=>"".concat(e.spacing(6)," !important")},children:(0,r.jsxs)(l.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,r.jsxs)(b.Z,{color:"secondary",variant:"contained",onClick:n,sx:{"& svg":{mr:2}},children:[(0,r.jsx)(Z.Z,{fontSize:"1.125rem",icon:"tabler:arrow-left"}),"Previous"]}),(0,r.jsxs)(b.Z,{variant:"contained",onClick:t,sx:{"& svg":{ml:2}},children:["Next",(0,r.jsx)(Z.Z,{fontSize:"1.125rem",icon:"tabler:arrow-right"})]})]})})]})]})};var M=n(93946),N=n(57709);let z=e=>{let{handleNext:t}=e,[n,s]=(0,p.useState)({showPassword:!1,showConfirmPassword:!1}),a=()=>{s({...n,showPassword:!n.showPassword})},o=()=>{s({...n,showConfirmPassword:!n.showConfirmPassword})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l.Z,{sx:{mb:6},children:[(0,r.jsx)(i.Z,{variant:"h5",sx:{mb:1.5},children:"Account Information"}),(0,r.jsx)(i.Z,{sx:{color:"text.secondary"},children:"Enter Your Account Details"})]}),(0,r.jsxs)(j.ZP,{container:!0,spacing:5,children:[(0,r.jsx)(j.ZP,{item:!0,xs:12,sm:6,children:(0,r.jsx)(S.Z,{fullWidth:!0,children:(0,r.jsx)(C.Z,{label:"Username",placeholder:"johndoe"})})}),(0,r.jsx)(j.ZP,{item:!0,xs:12,sm:6,children:(0,r.jsx)(S.Z,{fullWidth:!0,children:(0,r.jsx)(C.Z,{type:"email",label:"Email",placeholder:"john.doe@email.com"})})}),(0,r.jsx)(j.ZP,{item:!0,xs:12,sm:6,children:(0,r.jsxs)(S.Z,{fullWidth:!0,children:[(0,r.jsx)(w.Z,{htmlFor:"input-password",children:"Password"}),(0,r.jsx)(N.Z,{label:"Password",id:"input-password",type:n.showPassword?"text":"password",endAdornment:(0,r.jsx)(P.Z,{position:"end",children:(0,r.jsx)(M.Z,{edge:"end",onClick:a,onMouseDown:e=>e.preventDefault(),children:(0,r.jsx)(Z.Z,{icon:n.showPassword?"tabler:eye":"tabler:eye-off"})})})})]})}),(0,r.jsx)(j.ZP,{item:!0,xs:12,sm:6,children:(0,r.jsxs)(S.Z,{fullWidth:!0,children:[(0,r.jsx)(w.Z,{htmlFor:"input-confirm-password",children:"Confirm Password"}),(0,r.jsx)(N.Z,{label:"Confirm Password",id:"input-confirm-password",type:n.showConfirmPassword?"text":"password",endAdornment:(0,r.jsx)(P.Z,{position:"end",children:(0,r.jsx)(M.Z,{edge:"end",onMouseDown:e=>e.preventDefault(),onClick:o,children:(0,r.jsx)(Z.Z,{icon:n.showConfirmPassword?"tabler:eye":"tabler:eye-off"})})})})]})}),(0,r.jsx)(j.ZP,{item:!0,xs:12,children:(0,r.jsx)(C.Z,{fullWidth:!0,label:"Profile Link",placeholder:"johndoe/profile"})}),(0,r.jsx)(j.ZP,{item:!0,xs:12,sx:{pt:e=>"".concat(e.spacing(6)," !important")},children:(0,r.jsxs)(l.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,r.jsxs)(b.Z,{disabled:!0,variant:"contained",sx:{"& svg":{mr:2}},children:[(0,r.jsx)(Z.Z,{fontSize:"1.125rem",icon:"tabler:arrow-left"}),"Previous"]}),(0,r.jsxs)(b.Z,{variant:"contained",onClick:t,sx:{"& svg":{ml:2}},children:["Next",(0,r.jsx)(Z.Z,{fontSize:"1.125rem",icon:"tabler:arrow-right"})]})]})})]})]})};var L=n(34386),R=n(77028),W=n.n(R),I=n(65445),D=n(34167);n(63850);let F=[{value:"basic",title:(0,r.jsx)(i.Z,{variant:"h5",children:"Basic"}),content:(0,r.jsxs)(l.Z,{sx:{my:"auto",display:"flex",alignItems:"center",flexDirection:"column"},children:[(0,r.jsx)(i.Z,{sx:{textAlign:"center",color:"text.secondary"},children:"A simple start for start ups & Students"}),(0,r.jsxs)(l.Z,{sx:{mt:2,display:"flex"},children:[(0,r.jsx)(i.Z,{component:"sup",sx:{mt:1.5,color:"primary.main",alignSelf:"flex-start"},children:"$"}),(0,r.jsx)(i.Z,{component:"span",sx:{fontSize:"2rem",color:"primary.main"},children:"0"}),(0,r.jsx)(i.Z,{component:"sub",sx:{mb:1.5,alignSelf:"flex-end",color:"text.disabled"},children:"/month"})]})]})},{isSelected:!0,value:"standard",title:(0,r.jsx)(i.Z,{variant:"h5",children:"Standard"}),content:(0,r.jsxs)(l.Z,{sx:{my:"auto",display:"flex",alignItems:"center",flexDirection:"column"},children:[(0,r.jsx)(i.Z,{sx:{textAlign:"center",color:"text.secondary"},children:"For small to medium businesses"}),(0,r.jsxs)(l.Z,{sx:{mt:2,display:"flex"},children:[(0,r.jsx)(i.Z,{component:"sup",sx:{mt:1.5,color:"primary.main",alignSelf:"flex-start"},children:"$"}),(0,r.jsx)(i.Z,{component:"span",sx:{fontSize:"2rem",fontWeight:500,color:"primary.main"},children:"99"}),(0,r.jsx)(i.Z,{component:"sub",sx:{mb:1.5,alignSelf:"flex-end",color:"text.disabled"},children:"/month"})]})]})},{value:"enterprise",title:(0,r.jsx)(i.Z,{variant:"h5",children:"Enterprise"}),content:(0,r.jsxs)(l.Z,{sx:{my:"auto",display:"flex",alignItems:"center",flexDirection:"column"},children:[(0,r.jsx)(i.Z,{sx:{textAlign:"center",color:"text.secondary"},children:"Solution for enterprise & organizations"}),(0,r.jsxs)(l.Z,{sx:{mt:2,display:"flex"},children:[(0,r.jsx)(i.Z,{component:"sup",sx:{mt:1.5,color:"primary.main",alignSelf:"flex-start"},children:"$"}),(0,r.jsx)(i.Z,{component:"span",sx:{fontSize:"2rem",color:"primary.main"},children:"499"}),(0,r.jsx)(i.Z,{component:"sub",sx:{mb:1.5,alignSelf:"flex-end",color:"text.disabled"},children:"/month"})]})]})}],$=e=>{let{handlePrev:t}=e,n=F.filter(e=>e.isSelected)[F.filter(e=>e.isSelected).length-1].value,[s,a]=(0,p.useState)(""),[o,c]=(0,p.useState)(""),[d,u]=(0,p.useState)(""),[m,x]=(0,p.useState)(""),[h,f]=(0,p.useState)(n),g=e=>{let{target:t}=e;"cardNumber"===t.name?(t.value=(0,D.mf)(t.value,W()),x(t.value)):"expiry"===t.name?(t.value=(0,D.N)(t.value),u(t.value)):"cvc"===t.name&&(t.value=(0,D.tE)(t.value,m,W()),a(t.value))},v=e=>{"string"==typeof e?f(e):f(e.target.value)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l.Z,{sx:{mb:6},children:[(0,r.jsx)(i.Z,{variant:"h5",sx:{mb:1.5},children:"Select Plan"}),(0,r.jsx)(i.Z,{sx:{color:"text.secondary"},children:"Select plan as per your requirement"})]}),(0,r.jsxs)(j.ZP,{container:!0,spacing:5,children:[F.map((e,t)=>(0,r.jsx)(I.Z,{data:F[t],selected:h,name:"custom-radios-plan",gridProps:{sm:4,xs:12},handleChange:v},t)),(0,r.jsxs)(j.ZP,{item:!0,xs:12,sx:{pt:e=>"".concat(e.spacing(6)," !important")},children:[(0,r.jsx)(i.Z,{variant:"h5",sx:{mb:1.5},children:"Payment Information"}),(0,r.jsx)(i.Z,{sx:{color:"text.secondary"},children:"Enter your card information"})]}),(0,r.jsx)(j.ZP,{item:!0,xs:12,sx:{pt:e=>"".concat(e.spacing(6)," !important")},children:(0,r.jsx)(S.Z,{fullWidth:!0,children:(0,r.jsx)(C.Z,{fullWidth:!0,name:"cardNumber",value:m,autoComplete:"off",label:"Card Number",onChange:g,placeholder:"0000 0000 0000 0000"})})}),(0,r.jsx)(j.ZP,{item:!0,xs:12,sm:6,children:(0,r.jsx)(C.Z,{fullWidth:!0,name:"name",value:o,autoComplete:"off",label:"Name on Card",placeholder:"John Doe",onChange:e=>c(e.target.value)})}),(0,r.jsx)(j.ZP,{item:!0,xs:6,sm:3,children:(0,r.jsx)(C.Z,{fullWidth:!0,name:"expiry",label:"Expiry",value:d,placeholder:"MM/YY",onChange:g,inputProps:{maxLength:"5"}})}),(0,r.jsx)(j.ZP,{item:!0,xs:6,sm:3,children:(0,r.jsx)(C.Z,{fullWidth:!0,name:"cvc",label:"CVC",value:s,autoComplete:"off",onChange:g,InputProps:{endAdornment:(0,r.jsx)(P.Z,{position:"start",sx:{"& svg":{cursor:"pointer"}},children:(0,r.jsx)(L.Z,{title:"Card Verification Value",children:(0,r.jsx)(l.Z,{sx:{display:"flex"},children:(0,r.jsx)(Z.Z,{icon:"tabler:question-circle",fontSize:20})})})})}})}),(0,r.jsx)(j.ZP,{item:!0,xs:12,sx:{pt:e=>"".concat(e.spacing(6)," !important")},children:(0,r.jsxs)(l.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,r.jsxs)(b.Z,{color:"secondary",variant:"contained",onClick:t,sx:{"& svg":{mr:2}},children:[(0,r.jsx)(Z.Z,{fontSize:"1.125rem",icon:"tabler:arrow-left"}),"Previous"]}),(0,r.jsx)(b.Z,{color:"success",variant:"contained",onClick:()=>alert("Submitted..!!"),children:"Submit"})]})})]})]})};var E=n(42563),B=n(20780);let A=[{title:"Account",icon:"tabler:smart-home",subtitle:"Account Details"},{title:"Personal",icon:"tabler:users",subtitle:"Enter Information"},{title:"Billing",icon:"tabler:file-text",subtitle:"Payment Details"}],_=(0,a.ZP)(f.Z)(e=>{let{theme:t}=e;return{padding:0,"& .MuiStepLabel-iconContainer":{display:"none"},"& .step-subtitle":{color:"".concat(t.palette.text.disabled," !important")},"& + svg":{color:t.palette.text.disabled},"&.Mui-completed .step-title":{color:t.palette.text.disabled},"&.Mui-completed + svg":{color:t.palette.primary.main},"& .MuiStepLabel-label":{cursor:"pointer"},[t.breakpoints.down("md")]:{"&:not(:last-child)":{marginBottom:t.spacing(6)},"& + svg":{display:"none"}},[t.breakpoints.up("md")]:{marginLeft:t.spacing(4),marginRight:t.spacing(4),"&:first-of-type":{marginLeft:0},"&:last-of-type":{marginRight:0}}}}),T=()=>{let[e,t]=(0,p.useState)(0),n=()=>{t(e+1)},l=()=>{0!==e&&t(e-1)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(B.Z,{sx:{mb:11.5},children:(0,r.jsx)(x.Z,{activeStep:e,sx:{justifyContent:"space-between"},connector:(0,r.jsx)(Z.Z,{fontSize:"1.5rem",icon:"tabler:chevron-right"}),children:A.map((n,l)=>{let s=e>=l?g.Z:m.Z;return(0,r.jsx)(_,{onClick:()=>t(l),children:(0,r.jsx)(h.Z,{children:(0,r.jsxs)("div",{className:"step-label",children:[(0,r.jsx)(s,{variant:"rounded",...e>=l&&{skin:"light"},...e===l&&{skin:"filled"},...e>=l&&{color:"primary"},sx:{mr:4,...e===l&&{boxShadow:e=>e.shadows[3]},...e>l&&{color:e=>(0,E.E)(e.palette.primary.main,.4)}},children:(0,r.jsx)(Z.Z,{fontSize:"1.5rem",icon:n.icon})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(i.Z,{className:"step-title",children:n.title}),(0,r.jsx)(i.Z,{className:"step-subtitle",children:n.subtitle})]})]})})},l)})})}),(e=>{switch(e){case 0:return(0,r.jsx)(z,{handleNext:n});case 1:return(0,r.jsx)(k,{handleNext:n,handlePrev:l});case 2:return(0,r.jsx)($,{handlePrev:l});default:return null}})(e)]})},Y=(0,a.ZP)("img")(e=>{let{theme:t}=e;return{zIndex:2,maxHeight:550,marginTop:t.spacing(12),marginBottom:t.spacing(12)}}),O=(0,a.ZP)(l.Z)(e=>{let{theme:t}=e;return{width:"100%",display:"flex",position:"relative",alignItems:"center",justifyContent:"center",padding:t.spacing(12),"& .img-mask":{left:0},[t.breakpoints.up("lg")]:{maxWidth:470}}}),V=(0,a.ZP)(l.Z)(e=>{let{theme:t}=e;return{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:t.spacing(6),backgroundColor:t.palette.background.paper,[t.breakpoints.up("sm")]:{padding:t.spacing(12)}}}),q=()=>{let e=(0,o.Z)(),t=(0,s.Z)(e.breakpoints.down("lg"));return(0,r.jsxs)(l.Z,{className:"content-right",sx:{backgroundColor:"customColors.bodyBg"},children:[t?null:(0,r.jsxs)(O,{children:[(0,r.jsxs)(l.Z,{sx:{top:26,left:26,display:"flex",position:"absolute",alignItems:"center"},children:[(0,r.jsxs)("svg",{width:34,height:23.375,viewBox:"0 0 32 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",fill:e.palette.primary.main,d:"M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"}),(0,r.jsx)("path",{fill:"#161616",opacity:.06,fillRule:"evenodd",clipRule:"evenodd",d:"M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"}),(0,r.jsx)("path",{fill:"#161616",opacity:.06,fillRule:"evenodd",clipRule:"evenodd",d:"M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"}),(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",fill:e.palette.primary.main,d:"M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"})]}),(0,r.jsx)(i.Z,{sx:{ml:2.5,fontWeight:600,lineHeight:"24px",fontSize:"1.375rem"},children:d.Z.templateName})]}),(0,r.jsx)(Y,{alt:"register-multi-steps-illustration",src:"/images/pages/auth-v2-register-multi-steps-illustration.png"}),(0,r.jsx)(u.Z,{height:350,className:"img-mask",image:"/images/pages/auth-v2-register-multi-steps-mask-".concat(e.palette.mode,".png")})]}),(0,r.jsx)(V,{children:(0,r.jsx)(l.Z,{sx:{maxWidth:700},children:(0,r.jsx)(T,{})})})]})};q.getLayout=e=>(0,r.jsx)(c.Z,{children:e});var H=q},58441:function(e,t,n){"use strict";var r=n(85893),i=n(98396),l=n(90948),s=n(2734);let a=(0,l.ZP)("img")(e=>{let{theme:t}=e;return{bottom:0,height:300,width:"100%",position:"absolute",[t.breakpoints.down(1540)]:{height:250}}}),o=e=>{let{image:t,height:n,className:l}=e,o=(0,s.Z)(),c=(0,i.Z)(o.breakpoints.down("md"));return c?null:(0,r.jsx)(r.Fragment,{children:t?"string"==typeof t?(0,r.jsx)(a,{alt:"mask",src:t,className:l,...n&&{height:n}}):t:(0,r.jsx)(a,{alt:"mask",className:l,...n&&{height:n},src:"/images/pages/auth-v2-mask-".concat(o.palette.mode,".png")})})};t.Z=o}},function(e){e.O(0,[6765,7375,9774,2888,179],function(){return e(e.s=62668)}),_N_E=e.O()}]);