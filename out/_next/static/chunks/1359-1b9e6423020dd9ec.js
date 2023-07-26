(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1359],{88441:function(e,r,t){"use strict";var o=t(63366),a=t(87462),n=t(67294),i=t(86010),l=t(94780),s=t(70917),c=t(41796),u=t(98216),d=t(2734),f=t(90948),b=t(71657),m=t(28962),p=t(85893);let v=["className","color","value","valueBuffer","variant"],h=e=>e,g,y,Z,w,k,C,x=(0,s.F4)(g||(g=h`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),$=(0,s.F4)(y||(y=h`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),P=(0,s.F4)(Z||(Z=h`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),S=e=>{let{classes:r,variant:t,color:o}=e,a={root:["root",`color${(0,u.Z)(o)}`,t],dashed:["dashed",`dashedColor${(0,u.Z)(o)}`],bar1:["bar",`barColor${(0,u.Z)(o)}`,("indeterminate"===t||"query"===t)&&"bar1Indeterminate","determinate"===t&&"bar1Determinate","buffer"===t&&"bar1Buffer"],bar2:["bar","buffer"!==t&&`barColor${(0,u.Z)(o)}`,"buffer"===t&&`color${(0,u.Z)(o)}`,("indeterminate"===t||"query"===t)&&"bar2Indeterminate","buffer"===t&&"bar2Buffer"]};return(0,l.Z)(a,m.E,r)},R=(e,r)=>"inherit"===r?"currentColor":e.vars?e.vars.palette.LinearProgress[`${r}Bg`]:"light"===e.palette.mode?(0,c.$n)(e.palette[r].main,.62):(0,c._j)(e.palette[r].main,.5),M=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,r[`color${(0,u.Z)(t.color)}`],r[t.variant]]}})(({ownerState:e,theme:r})=>(0,a.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:R(r,e.color)},"inherit"===e.color&&"buffer"!==e.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===e.variant&&{backgroundColor:"transparent"},"query"===e.variant&&{transform:"rotate(180deg)"})),B=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.dashed,r[`dashedColor${(0,u.Z)(t.color)}`]]}})(({ownerState:e,theme:r})=>{let t=R(r,e.color);return(0,a.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===e.color&&{opacity:.3},{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},(0,s.iv)(w||(w=h`
    animation: ${0} 3s infinite linear;
  `),P)),j=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.bar,r[`barColor${(0,u.Z)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&r.bar1Indeterminate,"determinate"===t.variant&&r.bar1Determinate,"buffer"===t.variant&&r.bar1Buffer]}})(({ownerState:e,theme:r})=>(0,a.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===e.color?"currentColor":(r.vars||r).palette[e.color].main},"determinate"===e.variant&&{transition:"transform .4s linear"},"buffer"===e.variant&&{zIndex:1,transition:"transform .4s linear"}),({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,s.iv)(k||(k=h`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),x)),N=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.bar,r[`barColor${(0,u.Z)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&r.bar2Indeterminate,"buffer"===t.variant&&r.bar2Buffer]}})(({ownerState:e,theme:r})=>(0,a.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==e.variant&&{backgroundColor:"inherit"===e.color?"currentColor":(r.vars||r).palette[e.color].main},"inherit"===e.color&&{opacity:.3},"buffer"===e.variant&&{backgroundColor:R(r,e.color),transition:"transform .4s linear"}),({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,s.iv)(C||(C=h`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),$)),q=n.forwardRef(function(e,r){let t=(0,b.Z)({props:e,name:"MuiLinearProgress"}),{className:n,color:l="primary",value:s,valueBuffer:c,variant:u="indeterminate"}=t,f=(0,o.Z)(t,v),m=(0,a.Z)({},t,{color:l,variant:u}),h=S(m),g=(0,d.Z)(),y={},Z={bar1:{},bar2:{}};if(("determinate"===u||"buffer"===u)&&void 0!==s){y["aria-valuenow"]=Math.round(s),y["aria-valuemin"]=0,y["aria-valuemax"]=100;let e=s-100;"rtl"===g.direction&&(e=-e),Z.bar1.transform=`translateX(${e}%)`}if("buffer"===u&&void 0!==c){let e=(c||0)-100;"rtl"===g.direction&&(e=-e),Z.bar2.transform=`translateX(${e}%)`}return(0,p.jsxs)(M,(0,a.Z)({className:(0,i.Z)(h.root,n),ownerState:m,role:"progressbar"},y,{ref:r},f,{children:["buffer"===u?(0,p.jsx)(B,{className:h.dashed,ownerState:m}):null,(0,p.jsx)(j,{className:h.bar1,ownerState:m,style:Z.bar1}),"determinate"===u?null:(0,p.jsx)(N,{className:h.bar2,ownerState:m,style:Z.bar2})]}))});r.Z=q},28962:function(e,r,t){"use strict";t.d(r,{E:function(){return n}});var o=t(1588),a=t(34867);function n(e){return(0,a.Z)("MuiLinearProgress",e)}let i=(0,o.Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);r.Z=i},31536:function(e,r,t){"use strict";t.d(r,{Z:function(){return S}});var o=t(63366),a=t(87462),n=t(67294),i=t(86010),l=t(59766),s=t(94780),c=t(34867),u=t(70182);let d=(0,u.ZP)();var f=t(29628),b=t(39707),m=t(66500),p=t(95408),v=t(98700),h=t(85893);let g=["component","direction","spacing","divider","children","className"],y=(0,m.Z)(),Z=d("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,r)=>r.root});function w(e){return(0,f.Z)({props:e,name:"MuiStack",defaultTheme:y})}let k=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],C=({ownerState:e,theme:r})=>{let t=(0,a.Z)({display:"flex",flexDirection:"column"},(0,p.k9)({theme:r},(0,p.P$)({values:e.direction,breakpoints:r.breakpoints.values}),e=>({flexDirection:e})));if(e.spacing){let o=(0,v.hB)(r),a=Object.keys(r.breakpoints.values).reduce((r,t)=>(("object"==typeof e.spacing&&null!=e.spacing[t]||"object"==typeof e.direction&&null!=e.direction[t])&&(r[t]=!0),r),{}),n=(0,p.P$)({values:e.direction,base:a}),i=(0,p.P$)({values:e.spacing,base:a});"object"==typeof n&&Object.keys(n).forEach((e,r,t)=>{let o=n[e];if(!o){let o=r>0?n[t[r-1]]:"column";n[e]=o}});let s=(r,t)=>({"& > :not(style) + :not(style)":{margin:0,[`margin${k(t?n[t]:e.direction)}`]:(0,v.NA)(o,r)}});t=(0,l.Z)(t,(0,p.k9)({theme:r},i,s))}return(0,p.dt)(r.breakpoints,t)};var x=t(90948),$=t(71657);let P=function(e={}){let{createStyledComponent:r=Z,useThemeProps:t=w,componentName:l="MuiStack"}=e,u=()=>(0,s.Z)({root:["root"]},e=>(0,c.Z)(l,e),{}),d=r(C),f=n.forwardRef(function(e,r){let l=t(e),s=(0,b.Z)(l),{component:c="div",direction:f="column",spacing:m=0,divider:p,children:v,className:y}=s,Z=(0,o.Z)(s,g),w=u();return(0,h.jsx)(d,(0,a.Z)({as:c,ownerState:{direction:f,spacing:m},ref:r,className:(0,i.Z)(w.root,y)},Z,{children:p?function(e,r){let t=n.Children.toArray(e).filter(Boolean);return t.reduce((e,o,a)=>(e.push(o),a<t.length-1&&e.push(n.cloneElement(r,{key:`separator-${a}`})),e),[])}(v,p):v}))});return f}({createStyledComponent:(0,x.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,r)=>r.root}),useThemeProps:e=>(0,$.Z)({props:e,name:"MuiStack"})});var S=P},66485:function(e){function r(){return new DOMException("The request is not allowed","NotAllowedError")}async function t(e){if(!navigator.clipboard)throw r();return navigator.clipboard.writeText(e)}async function o(e){let t=document.createElement("span");t.textContent=e,t.style.whiteSpace="pre",t.style.webkitUserSelect="auto",t.style.userSelect="all",document.body.appendChild(t);let o=window.getSelection(),a=window.document.createRange();o.removeAllRanges(),a.selectNode(t),o.addRange(a);let n=!1;try{n=window.document.execCommand("copy")}finally{o.removeAllRanges(),window.document.body.removeChild(t)}if(!n)throw r()}async function a(e){try{await t(e)}catch(t){try{await o(e)}catch(e){throw e||t||r()}}}/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */e.exports=a}}]);