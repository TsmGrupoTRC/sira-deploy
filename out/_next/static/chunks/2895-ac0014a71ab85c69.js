(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2895,5644,5907,5902],{69368:function(e,t,o){"use strict";o.d(t,{Z:function(){return M}});var r=o(63366),a=o(87462),n=o(67294),l=o(86010),i=o(94780),c=o(41796),d=o(21964),s=o(82066),u=o(85893),p=(0,s.Z)((0,u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),m=(0,s.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),h=(0,s.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),b=o(98216),f=o(71657),Z=o(90948),v=o(1588),w=o(34867);function g(e){return(0,w.Z)("MuiCheckbox",e)}let x=(0,v.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),k=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],y=e=>{let{classes:t,indeterminate:o,color:r}=e,n={root:["root",o&&"indeterminate",`color${(0,b.Z)(r)}`]},l=(0,i.Z)(n,g,t);return(0,a.Z)({},t,l)},C=(0,Z.ZP)(d.Z,{shouldForwardProp:e=>(0,Z.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.root,o.indeterminate&&t.indeterminate,"default"!==o.color&&t[`color${(0,b.Z)(o.color)}`]]}})(({theme:e,ownerState:t})=>(0,a.Z)({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===t.color?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)("default"===t.color?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${x.checked}, &.${x.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${x.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),P=(0,u.jsx)(m,{}),R=(0,u.jsx)(p,{}),S=(0,u.jsx)(h,{}),F=n.forwardRef(function(e,t){var o,i;let c=(0,f.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:d=P,color:s="primary",icon:p=R,indeterminate:m=!1,indeterminateIcon:h=S,inputProps:b,size:Z="medium",className:v}=c,w=(0,r.Z)(c,k),g=m?h:p,x=m?h:d,F=(0,a.Z)({},c,{color:s,indeterminate:m,size:Z}),M=y(F);return(0,u.jsx)(C,(0,a.Z)({type:"checkbox",inputProps:(0,a.Z)({"data-indeterminate":m},b),icon:n.cloneElement(g,{fontSize:null!=(o=g.props.fontSize)?o:Z}),checkedIcon:n.cloneElement(x,{fontSize:null!=(i=x.props.fontSize)?i:Z}),ownerState:F,ref:t,className:(0,l.Z)(M.root,v)},w,{classes:M}))});var M=F},50480:function(e,t,o){"use strict";o.d(t,{Z:function(){return y}});var r=o(63366),a=o(87462),n=o(67294),l=o(86010),i=o(94780),c=o(74423),d=o(15861),s=o(98216),u=o(90948),p=o(71657),m=o(1588),h=o(34867);function b(e){return(0,h.Z)("MuiFormControlLabel",e)}let f=(0,m.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]);var Z=o(15704),v=o(85893);let w=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","slotProps","value"],g=e=>{let{classes:t,disabled:o,labelPlacement:r,error:a}=e,n={root:["root",o&&"disabled",`labelPlacement${(0,s.Z)(r)}`,a&&"error"],label:["label",o&&"disabled"]};return(0,i.Z)(n,b,t)},x=(0,u.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[{[`& .${f.label}`]:t.label},t.root,t[`labelPlacement${(0,s.Z)(o.labelPlacement)}`]]}})(({theme:e,ownerState:t})=>(0,a.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${f.disabled}`]:{cursor:"default"}},"start"===t.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===t.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===t.labelPlacement&&{flexDirection:"column",marginLeft:16},{[`& .${f.label}`]:{[`&.${f.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),k=n.forwardRef(function(e,t){var o;let i=(0,p.Z)({props:e,name:"MuiFormControlLabel"}),{className:s,componentsProps:u={},control:m,disabled:h,disableTypography:b,label:f,labelPlacement:k="end",slotProps:y={}}=i,C=(0,r.Z)(i,w),P=(0,c.Z)(),R=h;void 0===R&&void 0!==m.props.disabled&&(R=m.props.disabled),void 0===R&&P&&(R=P.disabled);let S={disabled:R};["checked","name","onChange","value","inputRef"].forEach(e=>{void 0===m.props[e]&&void 0!==i[e]&&(S[e]=i[e])});let F=(0,Z.Z)({props:i,muiFormControl:P,states:["error"]}),M=(0,a.Z)({},i,{disabled:R,labelPlacement:k,error:F.error}),N=g(M),$=null!=(o=y.typography)?o:u.typography,z=f;return null==z||z.type===d.Z||b||(z=(0,v.jsx)(d.Z,(0,a.Z)({component:"span"},$,{className:(0,l.Z)(N.label,null==$?void 0:$.className),children:z}))),(0,v.jsxs)(x,(0,a.Z)({className:(0,l.Z)(N.root,s),ownerState:M,ref:t},C,{children:[n.cloneElement(m,S),z]}))});var y=k},53457:function(e,t,o){"use strict";o.d(t,{Z:function(){return g}});var r=o(63366),a=o(87462),n=o(67294),l=o(86010),i=o(94780),c=o(90948),d=o(71657),s=o(1588),u=o(34867);function p(e){return(0,u.Z)("MuiFormGroup",e)}(0,s.Z)("MuiFormGroup",["root","row","error"]);var m=o(74423),h=o(15704),b=o(85893);let f=["className","row"],Z=e=>{let{classes:t,row:o,error:r}=e;return(0,i.Z)({root:["root",o&&"row",r&&"error"]},p,t)},v=(0,c.ZP)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.root,o.row&&t.row]}})(({ownerState:e})=>(0,a.Z)({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})),w=n.forwardRef(function(e,t){let o=(0,d.Z)({props:e,name:"MuiFormGroup"}),{className:n,row:i=!1}=o,c=(0,r.Z)(o,f),s=(0,m.Z)(),u=(0,h.Z)({props:o,muiFormControl:s,states:["error"]}),p=(0,a.Z)({},o,{row:i,error:u.error}),w=Z(p);return(0,b.jsx)(v,(0,a.Z)({className:(0,l.Z)(w.root,n),ownerState:p,ref:t},c))});var g=w},21964:function(e,t,o){"use strict";o.d(t,{Z:function(){return k}});var r=o(63366),a=o(87462),n=o(67294),l=o(86010),i=o(94780),c=o(98216),d=o(90948),s=o(49299),u=o(74423),p=o(49990),m=o(1588),h=o(34867);function b(e){return(0,h.Z)("PrivateSwitchBase",e)}(0,m.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var f=o(85893);let Z=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],v=e=>{let{classes:t,checked:o,disabled:r,edge:a}=e,n={root:["root",o&&"checked",r&&"disabled",a&&`edge${(0,c.Z)(a)}`],input:["input"]};return(0,i.Z)(n,b,t)},w=(0,d.ZP)(p.Z)(({ownerState:e})=>(0,a.Z)({padding:9,borderRadius:"50%"},"start"===e.edge&&{marginLeft:"small"===e.size?-3:-12},"end"===e.edge&&{marginRight:"small"===e.size?-3:-12})),g=(0,d.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),x=n.forwardRef(function(e,t){let{autoFocus:o,checked:n,checkedIcon:i,className:c,defaultChecked:d,disabled:p,disableFocusRipple:m=!1,edge:h=!1,icon:b,id:x,inputProps:k,inputRef:y,name:C,onBlur:P,onChange:R,onFocus:S,readOnly:F,required:M=!1,tabIndex:N,type:$,value:z}=e,B=(0,r.Z)(e,Z),[j,E]=(0,s.Z)({controlled:n,default:Boolean(d),name:"SwitchBase",state:"checked"}),I=(0,u.Z)(),L=e=>{S&&S(e),I&&I.onFocus&&I.onFocus(e)},O=e=>{P&&P(e),I&&I.onBlur&&I.onBlur(e)},D=e=>{if(e.nativeEvent.defaultPrevented)return;let t=e.target.checked;E(t),R&&R(e,t)},H=p;I&&void 0===H&&(H=I.disabled);let T=(0,a.Z)({},e,{checked:j,disabled:H,disableFocusRipple:m,edge:h}),q=v(T);return(0,f.jsxs)(w,(0,a.Z)({component:"span",className:(0,l.Z)(q.root,c),centerRipple:!0,focusRipple:!m,disabled:H,tabIndex:null,role:void 0,onFocus:L,onBlur:O,ownerState:T,ref:t},B,{children:[(0,f.jsx)(g,(0,a.Z)({autoFocus:o,checked:n,defaultChecked:d,className:q.input,disabled:H,id:"checkbox"===$||"radio"===$?x:void 0,name:C,onChange:D,readOnly:F,ref:y,required:M,ownerState:T,tabIndex:N,type:$},"checkbox"===$&&void 0===z?{}:{value:z},k)),j?i:b]}))});var k=x},66485:function(e){function t(){return new DOMException("The request is not allowed","NotAllowedError")}async function o(e){if(!navigator.clipboard)throw t();return navigator.clipboard.writeText(e)}async function r(e){let o=document.createElement("span");o.textContent=e,o.style.whiteSpace="pre",o.style.webkitUserSelect="auto",o.style.userSelect="all",document.body.appendChild(o);let r=window.getSelection(),a=window.document.createRange();r.removeAllRanges(),a.selectNode(o),r.addRange(a);let n=!1;try{n=window.document.execCommand("copy")}finally{r.removeAllRanges(),window.document.body.removeChild(o)}if(!n)throw t()}async function a(e){try{await o(e)}catch(o){try{await r(e)}catch(e){throw e||o||t()}}}/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */e.exports=a}}]);