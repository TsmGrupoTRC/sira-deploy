(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[728],{69368:function(e,t,o){"use strict";o.d(t,{Z:function(){return P}});var n=o(63366),a=o(87462),r=o(67294),c=o(86010),i=o(94780),l=o(41796),s=o(21964),d=o(82066),u=o(85893),p=(0,d.Z)((0,u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),h=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),f=o(98216),v=o(71657),Z=o(90948),k=o(1588),b=o(34867);function x(e){return(0,b.Z)("MuiCheckbox",e)}let g=(0,k.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),C=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],w=e=>{let{classes:t,indeterminate:o,color:n}=e,r={root:["root",o&&"indeterminate",`color${(0,f.Z)(n)}`]},c=(0,i.Z)(r,x,t);return(0,a.Z)({},t,c)},y=(0,Z.ZP)(s.Z,{shouldForwardProp:e=>(0,Z.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.root,o.indeterminate&&t.indeterminate,"default"!==o.color&&t[`color${(0,f.Z)(o.color)}`]]}})(({theme:e,ownerState:t})=>(0,a.Z)({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===t.color?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)("default"===t.color?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${g.checked}, &.${g.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${g.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),S=(0,u.jsx)(h,{}),R=(0,u.jsx)(p,{}),z=(0,u.jsx)(m,{}),j=r.forwardRef(function(e,t){var o,i;let l=(0,v.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:s=S,color:d="primary",icon:p=R,indeterminate:h=!1,indeterminateIcon:m=z,inputProps:f,size:Z="medium",className:k}=l,b=(0,n.Z)(l,C),x=h?m:p,g=h?m:s,j=(0,a.Z)({},l,{color:d,indeterminate:h,size:Z}),P=w(j);return(0,u.jsx)(y,(0,a.Z)({type:"checkbox",inputProps:(0,a.Z)({"data-indeterminate":h},f),icon:r.cloneElement(x,{fontSize:null!=(o=x.props.fontSize)?o:Z}),checkedIcon:r.cloneElement(g,{fontSize:null!=(i=g.props.fontSize)?i:Z}),ownerState:j,ref:t,className:(0,c.Z)(P.root,k)},b,{classes:P}))});var P=j},80209:function(e,t,o){"use strict";var n=o(67294);let a=n.createContext(void 0);t.Z=a},49033:function(e,t,o){"use strict";o.d(t,{Z:function(){return $}});var n=o(63366),a=o(87462),r=o(67294),c=o(86010),i=o(94780),l=o(41796),s=o(21964),d=o(71657),u=o(82066),p=o(85893),h=(0,u.Z)((0,p.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),m=(0,u.Z)((0,p.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),f=o(90948);let v=(0,f.ZP)("span")({position:"relative",display:"flex"}),Z=(0,f.ZP)(h)({transform:"scale(1)"}),k=(0,f.ZP)(m)(({theme:e,ownerState:t})=>(0,a.Z)({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},t.checked&&{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}));var b=function(e){let{checked:t=!1,classes:o={},fontSize:n}=e,r=(0,a.Z)({},e,{checked:t});return(0,p.jsxs)(v,{className:o.root,ownerState:r,children:[(0,p.jsx)(Z,{fontSize:n,className:o.background,ownerState:r}),(0,p.jsx)(k,{fontSize:n,className:o.dot,ownerState:r})]})},x=o(98216),g=o(49064).Z,C=o(80209),w=o(1588),y=o(34867);function S(e){return(0,y.Z)("MuiRadio",e)}let R=(0,w.Z)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]),z=["checked","checkedIcon","color","icon","name","onChange","size","className"],j=e=>{let{classes:t,color:o}=e,n={root:["root",`color${(0,x.Z)(o)}`]};return(0,a.Z)({},t,(0,i.Z)(n,S,t))},P=(0,f.ZP)(s.Z,{shouldForwardProp:e=>(0,f.FO)(e)||"classes"===e,name:"MuiRadio",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.root,t[`color${(0,x.Z)(o.color)}`]]}})(({theme:e,ownerState:t})=>(0,a.Z)({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===t.color?e.vars.palette.action.activeChannel:e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)("default"===t.color?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${R.checked}`]:{color:(e.vars||e).palette[t.color].main}},{[`&.${R.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),B=(0,p.jsx)(b,{checked:!0}),M=(0,p.jsx)(b,{}),N=r.forwardRef(function(e,t){var o,i,l,s;let u=(0,d.Z)({props:e,name:"MuiRadio"}),{checked:h,checkedIcon:m=B,color:f="primary",icon:v=M,name:Z,onChange:k,size:b="medium",className:x}=u,w=(0,n.Z)(u,z),y=(0,a.Z)({},u,{color:f,size:b}),S=j(y),R=r.useContext(C.Z),N=h,$=g(k,R&&R.onChange),F=Z;return R&&(void 0===N&&(l=R.value,N="object"==typeof(s=u.value)&&null!==s?l===s:String(l)===String(s)),void 0===F&&(F=R.name)),(0,p.jsx)(P,(0,a.Z)({type:"radio",icon:r.cloneElement(v,{fontSize:null!=(o=M.props.fontSize)?o:b}),checkedIcon:r.cloneElement(m,{fontSize:null!=(i=B.props.fontSize)?i:b}),ownerState:y,classes:S,name:F,checked:N,onChange:$,ref:t,className:(0,c.Z)(S.root,x)},w))});var $=N},21964:function(e,t,o){"use strict";o.d(t,{Z:function(){return C}});var n=o(63366),a=o(87462),r=o(67294),c=o(86010),i=o(94780),l=o(98216),s=o(90948),d=o(49299),u=o(74423),p=o(49990),h=o(1588),m=o(34867);function f(e){return(0,m.Z)("PrivateSwitchBase",e)}(0,h.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var v=o(85893);let Z=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],k=e=>{let{classes:t,checked:o,disabled:n,edge:a}=e,r={root:["root",o&&"checked",n&&"disabled",a&&`edge${(0,l.Z)(a)}`],input:["input"]};return(0,i.Z)(r,f,t)},b=(0,s.ZP)(p.Z)(({ownerState:e})=>(0,a.Z)({padding:9,borderRadius:"50%"},"start"===e.edge&&{marginLeft:"small"===e.size?-3:-12},"end"===e.edge&&{marginRight:"small"===e.size?-3:-12})),x=(0,s.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),g=r.forwardRef(function(e,t){let{autoFocus:o,checked:r,checkedIcon:i,className:l,defaultChecked:s,disabled:p,disableFocusRipple:h=!1,edge:m=!1,icon:f,id:g,inputProps:C,inputRef:w,name:y,onBlur:S,onChange:R,onFocus:z,readOnly:j,required:P=!1,tabIndex:B,type:M,value:N}=e,$=(0,n.Z)(e,Z),[F,I]=(0,d.Z)({controlled:r,default:Boolean(s),name:"SwitchBase",state:"checked"}),E=(0,u.Z)(),O=e=>{z&&z(e),E&&E.onFocus&&E.onFocus(e)},q=e=>{S&&S(e),E&&E.onBlur&&E.onBlur(e)},H=e=>{if(e.nativeEvent.defaultPrevented)return;let t=e.target.checked;I(t),R&&R(e,t)},V=p;E&&void 0===V&&(V=E.disabled);let _=(0,a.Z)({},e,{checked:F,disabled:V,disableFocusRipple:h,edge:m}),A=k(_);return(0,v.jsxs)(b,(0,a.Z)({component:"span",className:(0,c.Z)(A.root,l),centerRipple:!0,focusRipple:!h,disabled:V,tabIndex:null,role:void 0,onFocus:O,onBlur:q,ownerState:_,ref:t},$,{children:[(0,v.jsx)(x,(0,a.Z)({autoFocus:o,checked:r,defaultChecked:s,className:A.input,disabled:V,id:"checkbox"===M||"radio"===M?g:void 0,name:y,onChange:H,readOnly:j,ref:w,required:P,ownerState:_,tabIndex:B,type:M},"checkbox"===M&&void 0===N?{}:{value:N},C)),F?i:f]}))});var C=g},66485:function(e){function t(){return new DOMException("The request is not allowed","NotAllowedError")}async function o(e){if(!navigator.clipboard)throw t();return navigator.clipboard.writeText(e)}async function n(e){let o=document.createElement("span");o.textContent=e,o.style.whiteSpace="pre",o.style.webkitUserSelect="auto",o.style.userSelect="all",document.body.appendChild(o);let n=window.getSelection(),a=window.document.createRange();n.removeAllRanges(),a.selectNode(o),n.addRange(a);let r=!1;try{r=window.document.execCommand("copy")}finally{n.removeAllRanges(),window.document.body.removeChild(o)}if(!r)throw t()}async function a(e){try{await o(e)}catch(o){try{await n(e)}catch(e){throw e||o||t()}}}/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */e.exports=a}}]);