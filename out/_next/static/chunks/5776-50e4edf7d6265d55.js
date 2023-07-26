(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5776],{50480:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var o=r(63366),a=r(87462),l=r(67294),n=r(86010),i=r(94780),c=r(74423),s=r(15861),d=r(98216),u=r(90948),p=r(71657),h=r(1588),m=r(34867);function b(e){return(0,m.Z)("MuiFormControlLabel",e)}let Z=(0,h.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]);var v=r(15704),g=r(85893);let f=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","slotProps","value"],w=e=>{let{classes:t,disabled:r,labelPlacement:o,error:a}=e,l={root:["root",r&&"disabled",`labelPlacement${(0,d.Z)(o)}`,a&&"error"],label:["label",r&&"disabled"]};return(0,i.Z)(l,b,t)},k=(0,u.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[{[`& .${Z.label}`]:t.label},t.root,t[`labelPlacement${(0,d.Z)(r.labelPlacement)}`]]}})(({theme:e,ownerState:t})=>(0,a.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${Z.disabled}`]:{cursor:"default"}},"start"===t.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===t.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===t.labelPlacement&&{flexDirection:"column",marginLeft:16},{[`& .${Z.label}`]:{[`&.${Z.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),y=l.forwardRef(function(e,t){var r;let i=(0,p.Z)({props:e,name:"MuiFormControlLabel"}),{className:d,componentsProps:u={},control:h,disabled:m,disableTypography:b,label:Z,labelPlacement:y="end",slotProps:x={}}=i,$=(0,o.Z)(i,f),S=(0,c.Z)(),C=m;void 0===C&&void 0!==h.props.disabled&&(C=h.props.disabled),void 0===C&&S&&(C=S.disabled);let R={disabled:C};["checked","name","onChange","value","inputRef"].forEach(e=>{void 0===h.props[e]&&void 0!==i[e]&&(R[e]=i[e])});let P=(0,v.Z)({props:i,muiFormControl:S,states:["error"]}),B=(0,a.Z)({},i,{disabled:C,labelPlacement:y,error:P.error}),F=w(B),M=null!=(r=x.typography)?r:u.typography,N=Z;return null==N||N.type===s.Z||b||(N=(0,g.jsx)(s.Z,(0,a.Z)({component:"span"},M,{className:(0,n.Z)(F.label,null==M?void 0:M.className),children:N}))),(0,g.jsxs)(k,(0,a.Z)({className:(0,n.Z)(F.root,d),ownerState:B,ref:t},$,{children:[l.cloneElement(h,R),N]}))});var x=y},53457:function(e,t,r){"use strict";r.d(t,{Z:function(){return w}});var o=r(63366),a=r(87462),l=r(67294),n=r(86010),i=r(94780),c=r(90948),s=r(71657),d=r(1588),u=r(34867);function p(e){return(0,u.Z)("MuiFormGroup",e)}(0,d.Z)("MuiFormGroup",["root","row","error"]);var h=r(74423),m=r(15704),b=r(85893);let Z=["className","row"],v=e=>{let{classes:t,row:r,error:o}=e;return(0,i.Z)({root:["root",r&&"row",o&&"error"]},p,t)},g=(0,c.ZP)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.row&&t.row]}})(({ownerState:e})=>(0,a.Z)({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})),f=l.forwardRef(function(e,t){let r=(0,s.Z)({props:e,name:"MuiFormGroup"}),{className:l,row:i=!1}=r,c=(0,o.Z)(r,Z),d=(0,h.Z)(),u=(0,m.Z)({props:r,muiFormControl:d,states:["error"]}),p=(0,a.Z)({},r,{row:i,error:u.error}),f=v(p);return(0,b.jsx)(g,(0,a.Z)({className:(0,n.Z)(f.root,l),ownerState:p,ref:t},c))});var w=f},72852:function(e,t,r){"use strict";var o=r(63366),a=r(87462),l=r(67294),n=r(86010),i=r(94780),c=r(41796),s=r(98216),d=r(21964),u=r(71657),p=r(90948),h=r(29632),m=r(85893);let b=["className","color","edge","size","sx"],Z=e=>{let{classes:t,edge:r,size:o,color:l,checked:n,disabled:c}=e,d={root:["root",r&&`edge${(0,s.Z)(r)}`,`size${(0,s.Z)(o)}`],switchBase:["switchBase",`color${(0,s.Z)(l)}`,n&&"checked",c&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},u=(0,i.Z)(d,h.H,t);return(0,a.Z)({},t,u)},v=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.edge&&t[`edge${(0,s.Z)(r.edge)}`],t[`size${(0,s.Z)(r.size)}`]]}})(({ownerState:e})=>(0,a.Z)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===e.edge&&{marginLeft:-8},"end"===e.edge&&{marginRight:-8},"small"===e.size&&{width:40,height:24,padding:7,[`& .${h.Z.thumb}`]:{width:16,height:16},[`& .${h.Z.switchBase}`]:{padding:4,[`&.${h.Z.checked}`]:{transform:"translateX(16px)"}}})),g=(0,p.ZP)(d.Z,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.switchBase,{[`& .${h.Z.input}`]:t.input},"default"!==r.color&&t[`color${(0,s.Z)(r.color)}`]]}})(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${"light"===e.palette.mode?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${h.Z.checked}`]:{transform:"translateX(20px)"},[`&.${h.Z.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${"light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${h.Z.checked} + .${h.Z.track}`]:{opacity:.5},[`&.${h.Z.disabled} + .${h.Z.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:`${"light"===e.palette.mode?.12:.2}`},[`& .${h.Z.input}`]:{left:"-100%",width:"300%"}}),({theme:e,ownerState:t})=>(0,a.Z)({"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${h.Z.checked}`]:{color:(e.vars||e).palette[t.color].main,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${h.Z.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${t.color}DisabledColor`]:`${"light"===e.palette.mode?(0,c.$n)(e.palette[t.color].main,.62):(0,c._j)(e.palette[t.color].main,.55)}`}},[`&.${h.Z.checked} + .${h.Z.track}`]:{backgroundColor:(e.vars||e).palette[t.color].main}})),f=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})(({theme:e})=>({height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${"light"===e.palette.mode?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:`${"light"===e.palette.mode?.38:.3}`})),w=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})(({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),k=l.forwardRef(function(e,t){let r=(0,u.Z)({props:e,name:"MuiSwitch"}),{className:l,color:i="primary",edge:c=!1,size:s="medium",sx:d}=r,p=(0,o.Z)(r,b),h=(0,a.Z)({},r,{color:i,edge:c,size:s}),k=Z(h),y=(0,m.jsx)(w,{className:k.thumb,ownerState:h});return(0,m.jsxs)(v,{className:(0,n.Z)(k.root,l),sx:d,ownerState:h,children:[(0,m.jsx)(g,(0,a.Z)({type:"checkbox",icon:y,checkedIcon:y,ref:t,ownerState:h},p,{classes:(0,a.Z)({},k,{root:k.switchBase})})),(0,m.jsx)(f,{className:k.track,ownerState:h})]})});t.Z=k},29632:function(e,t,r){"use strict";r.d(t,{H:function(){return l}});var o=r(1588),a=r(34867);function l(e){return(0,a.Z)("MuiSwitch",e)}let n=(0,o.Z)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]);t.Z=n},21964:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var o=r(63366),a=r(87462),l=r(67294),n=r(86010),i=r(94780),c=r(98216),s=r(90948),d=r(49299),u=r(74423),p=r(49990),h=r(1588),m=r(34867);function b(e){return(0,m.Z)("PrivateSwitchBase",e)}(0,h.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var Z=r(85893);let v=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],g=e=>{let{classes:t,checked:r,disabled:o,edge:a}=e,l={root:["root",r&&"checked",o&&"disabled",a&&`edge${(0,c.Z)(a)}`],input:["input"]};return(0,i.Z)(l,b,t)},f=(0,s.ZP)(p.Z)(({ownerState:e})=>(0,a.Z)({padding:9,borderRadius:"50%"},"start"===e.edge&&{marginLeft:"small"===e.size?-3:-12},"end"===e.edge&&{marginRight:"small"===e.size?-3:-12})),w=(0,s.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),k=l.forwardRef(function(e,t){let{autoFocus:r,checked:l,checkedIcon:i,className:c,defaultChecked:s,disabled:p,disableFocusRipple:h=!1,edge:m=!1,icon:b,id:k,inputProps:y,inputRef:x,name:$,onBlur:S,onChange:C,onFocus:R,readOnly:P,required:B=!1,tabIndex:F,type:M,value:N}=e,z=(0,o.Z)(e,v),[j,E]=(0,d.Z)({controlled:l,default:Boolean(s),name:"SwitchBase",state:"checked"}),I=(0,u.Z)(),L=e=>{R&&R(e),I&&I.onFocus&&I.onFocus(e)},D=e=>{S&&S(e),I&&I.onBlur&&I.onBlur(e)},T=e=>{if(e.nativeEvent.defaultPrevented)return;let t=e.target.checked;E(t),C&&C(e,t)},O=p;I&&void 0===O&&(O=I.disabled);let A=(0,a.Z)({},e,{checked:j,disabled:O,disableFocusRipple:h,edge:m}),q=g(A);return(0,Z.jsxs)(f,(0,a.Z)({component:"span",className:(0,n.Z)(q.root,c),centerRipple:!0,focusRipple:!h,disabled:O,tabIndex:null,role:void 0,onFocus:L,onBlur:D,ownerState:A,ref:t},z,{children:[(0,Z.jsx)(w,(0,a.Z)({autoFocus:r,checked:l,defaultChecked:s,className:q.input,disabled:O,id:"checkbox"===M||"radio"===M?k:void 0,name:$,onChange:T,readOnly:P,ref:x,required:B,ownerState:A,tabIndex:F,type:M},"checkbox"===M&&void 0===N?{}:{value:N},y)),j?i:b]}))});var y=k},66485:function(e){function t(){return new DOMException("The request is not allowed","NotAllowedError")}async function r(e){if(!navigator.clipboard)throw t();return navigator.clipboard.writeText(e)}async function o(e){let r=document.createElement("span");r.textContent=e,r.style.whiteSpace="pre",r.style.webkitUserSelect="auto",r.style.userSelect="all",document.body.appendChild(r);let o=window.getSelection(),a=window.document.createRange();o.removeAllRanges(),a.selectNode(r),o.addRange(a);let l=!1;try{l=window.document.execCommand("copy")}finally{o.removeAllRanges(),window.document.body.removeChild(r)}if(!l)throw t()}async function a(e){try{await r(e)}catch(r){try{await o(e)}catch(e){throw e||r||t()}}}/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */e.exports=a}}]);