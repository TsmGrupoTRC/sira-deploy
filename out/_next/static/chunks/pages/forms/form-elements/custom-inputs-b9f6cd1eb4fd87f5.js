(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[725],{53172:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forms/form-elements/custom-inputs",function(){return n(14868)}])},93682:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var i=n(85893),s=n(67294),o=n(87357),r=n(66242),a=n(34386),l=n(67720),c=n(57922),d=n(93946),m=n(78445),u=n(44267),p=n(96420),x=n(98396),h=n(33454),g=n(79878),f=n(15660),j=n.n(f),b=n(86501),v=n(66485),y=n.n(v);let C=e=>e&&("TEXTAREA"===e.nodeName||"INPUT"===e.nodeName);var S=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,s.useRef)(null),n=()=>{e.onSuccess&&e.onSuccess(),e.selectOnCopy&&C(t.current)&&t.current.select()},i=()=>{e.onError&&e.onError();let n=!1!==e.selectOnError;n&&C(t.current)&&t.current.select()},o=e=>{y()(e).then(n).catch(i)},r=(0,s.useCallback)(e=>{"string"==typeof e?o(e):t.current&&o(t.current.value)},[]);return{copy:r,target:t}};let Z=e=>{let{id:t,sx:n,code:f,title:v,children:y,className:C}=e,[Z,k]=(0,s.useState)(!1),[I,P]=(0,s.useState)(null!==f.tsx?"tsx":"jsx"),w=S(),G=(0,x.Z)(e=>e.breakpoints.down("md"));(0,s.useEffect)(()=>{j().highlightAll()},[Z,I]);let R=()=>null!==f.tsx&&"tsx"===I?f.tsx.props.children.props.children:null!==f.jsx&&"jsx"===I?f.jsx.props.children.props.children:"",z=()=>{w.copy(R()),b.ZP.success("The source code has been copied to your clipboard.",{duration:2e3})};return(0,i.jsxs)(r.Z,{className:C,sx:{"& .MuiCardHeader-action":{lineHeight:.8},...n},id:t||"card-snippet--".concat(v.toLowerCase().replace(/ /g,"-")),children:[(0,i.jsx)(m.Z,{title:v,...G?{}:{action:(0,i.jsx)(d.Z,{onClick:()=>k(!Z),children:(0,i.jsx)(g.Z,{icon:"tabler:code",fontSize:20})})}}),(0,i.jsx)(u.Z,{children:y}),G?null:(0,i.jsxs)(c.Z,{in:Z,children:[(0,i.jsx)(l.Z,{sx:{my:"0 !important"}}),(0,i.jsxs)(u.Z,{sx:{position:"relative","& pre":{m:"0 !important",maxHeight:500}},children:[(0,i.jsx)(o.Z,{sx:{mb:4,display:"flex",alignItems:"center",justifyContent:"flex-end"},children:(0,i.jsxs)(h.Z,{exclusive:!0,size:"small",color:"primary",value:I,onChange:(e,t)=>null!==t?P(t):null,children:[null!==f.tsx?(0,i.jsx)(p.Z,{value:"tsx",children:(0,i.jsx)(g.Z,{icon:"tabler:brand-typescript",fontSize:20})}):null,null!==f.jsx?(0,i.jsx)(p.Z,{value:"jsx",children:(0,i.jsx)(g.Z,{icon:"tabler:brand-javascript",fontSize:20})}):null]})}),(0,i.jsx)(a.Z,{title:"Copy the source",placement:"top",children:(0,i.jsx)(d.Z,{onClick:z,sx:{top:"5rem",color:"grey.100",right:"2.5625rem",position:"absolute"},children:(0,i.jsx)(g.Z,{icon:"tabler:copy",fontSize:20})})}),(0,i.jsx)("div",{children:null!==f[I]?f[I]:null})]})]})]})};var k=Z},68952:function(e,t,n){"use strict";var i=n(85893),s=n(87357),o=n(86886),r=n(49033),a=n(15861);let l=e=>{let{name:t,data:n,selected:l,gridProps:c,handleChange:d,color:m="primary"}=e,{meta:u,title:p,value:x,content:h}=n;return n?(0,i.jsx)(o.ZP,{item:!0,...c,children:(0,i.jsxs)(s.Z,{onClick:()=>d(x),sx:{p:4,height:"100%",display:"flex",borderRadius:1,cursor:"pointer",position:"relative",alignItems:"flex-start",border:e=>"1px solid ".concat(e.palette.divider),...l===x?{borderColor:"".concat(m,".main")}:{"&:hover":{borderColor:e=>"rgba(".concat(e.palette.customColors.main,", 0.25)")}}},children:[(0,i.jsx)(r.Z,{name:t,size:"small",color:m,value:x,onChange:d,checked:l===x,sx:{mb:-2,mt:-2.5,ml:-2.75}}),u&&p&&h?(0,i.jsxs)(s.Z,{sx:{width:"100%",height:"100%",display:"flex",flexDirection:"column"},children:[(0,i.jsxs)(s.Z,{sx:{mb:2,width:"100%",display:"flex",alignItems:"flex-start",justifyContent:"space-between"},children:["string"==typeof p?(0,i.jsx)(a.Z,{sx:{mr:2,fontWeight:500},children:p}):p,"string"==typeof u?(0,i.jsx)(a.Z,{sx:{color:"text.disabled"},children:u}):u]}),"string"==typeof h?(0,i.jsx)(a.Z,{variant:"body2",children:h}):h]}):u&&p&&!h?(0,i.jsxs)(s.Z,{sx:{width:"100%",display:"flex",alignItems:"flex-start",justifyContent:"space-between"},children:["string"==typeof p?(0,i.jsx)(a.Z,{sx:{mr:2,fontWeight:500},children:p}):p,"string"==typeof u?(0,i.jsx)(a.Z,{sx:{color:"text.disabled"},children:u}):u]}):!u&&p&&h?(0,i.jsxs)(s.Z,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:["string"==typeof p?(0,i.jsx)(a.Z,{sx:{mb:1,fontWeight:500},children:p}):p,"string"==typeof h?(0,i.jsx)(a.Z,{variant:"body2",children:h}):h]}):u||p||!h?u||!p||h?null:"string"==typeof p?(0,i.jsx)(a.Z,{sx:{fontWeight:500},children:p}):p:"string"==typeof h?(0,i.jsx)(a.Z,{variant:"body2",children:h}):h]})}):null};t.Z=l},65445:function(e,t,n){"use strict";var i=n(85893),s=n(87357),o=n(86886),r=n(49033),a=n(15861),l=n(79878);let c=e=>{let{data:t,icon:n,name:c,selected:d,gridProps:m,iconProps:u,handleChange:p,color:x="primary"}=e,{title:h,value:g,content:f}=t;return t?(0,i.jsx)(o.ZP,{item:!0,...m,children:(0,i.jsxs)(s.Z,{onClick:()=>p(g),sx:{p:4,height:"100%",display:"flex",borderRadius:1,cursor:"pointer",position:"relative",alignItems:"center",flexDirection:"column",border:e=>"1px solid ".concat(e.palette.divider),...d===g?{borderColor:"".concat(x,".main"),"& svg":{color:"primary.main"}}:{"&:hover":{borderColor:e=>"rgba(".concat(e.palette.customColors.main,", 0.25)")}}},children:[n?(0,i.jsx)(l.Z,{icon:n,...u}):null,h?"string"==typeof h?(0,i.jsx)(a.Z,{sx:{fontWeight:500,...f?{mb:2}:{my:"auto"}},children:h}):h:null,f?"string"==typeof f?(0,i.jsx)(a.Z,{variant:"body2",sx:{my:"auto",textAlign:"center"},children:f}):f:null,(0,i.jsx)(r.Z,{name:c,size:"small",color:x,value:g,onChange:p,checked:d===g,sx:{mb:-2,...!n&&!h&&!f&&{mt:-2}}})]})}):null};t.Z=c},14868:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return U}});var i=n(85893),s=n(86886),o=n(93682),r=n(67294),a=n(87357),l=n(49033);let c=e=>{let{name:t,data:n,selected:o,gridProps:r,handleChange:c,color:d="primary"}=e,{alt:m,img:u,value:p}=n;return n?(0,i.jsx)(s.ZP,{item:!0,...r,children:(0,i.jsxs)(a.Z,{onClick:()=>c(p),sx:{height:"100%",display:"flex",borderRadius:1,cursor:"pointer",overflow:"hidden",position:"relative",alignItems:"center",flexDirection:"column",justifyContent:"center",border:e=>"2px solid ".concat(e.palette.divider),...o===p?{borderColor:"".concat(d,".main")}:{"&:hover":{borderColor:e=>"rgba(".concat(e.palette.customColors.main,", 0.25)")}},"& img":{width:"100%",height:"100%",objectFit:"cover"}},children:["string"==typeof u?(0,i.jsx)("img",{src:u,alt:null!=m?m:"radio-image-".concat(p)}):u,(0,i.jsx)(l.Z,{name:t,size:"small",value:p,onChange:c,checked:o===p,sx:{zIndex:-1,position:"absolute",visibility:"hidden"}})]})}):null},d=[{value:"speaker",isSelected:!0,img:"/images/pages/custom-radio-img-1.png"},{value:"ear-buds",img:"/images/pages/custom-radio-img-2.png"},{value:"headphone",img:"/images/pages/custom-radio-img-3.png"}],m=()=>{let e=d.filter(e=>e.isSelected)[d.filter(e=>e.isSelected).length-1].value,[t,n]=(0,r.useState)(e),o=e=>{"string"==typeof e?n(e):n(e.target.value)};return(0,i.jsx)(s.ZP,{container:!0,spacing:4,children:d.map((e,n)=>(0,i.jsx)(c,{data:d[n],selected:t,name:"custom-radios-img",handleChange:o,gridProps:{sm:4,xs:12}},n))})};var u=n(68952);let p=[{meta:"Free",title:"Basic",value:"basic",isSelected:!0,content:"Get 1 project with 1 team member."},{meta:"$5.00",title:"Premium",value:"premium",content:"Get 5 projects with 5 team members."}],x=()=>{let e=p.filter(e=>e.isSelected)[p.filter(e=>e.isSelected).length-1].value,[t,n]=(0,r.useState)(e),o=e=>{"string"==typeof e?n(e):n(e.target.value)};return(0,i.jsx)(s.ZP,{container:!0,spacing:4,children:p.map((e,n)=>(0,i.jsx)(u.Z,{data:p[n],selected:t,name:"custom-radios-basic",handleChange:o,gridProps:{sm:6,xs:12}},n))})};var h=n(65445);let g=[{value:"starter",title:"Starter",isSelected:!0,content:"A simple start for everyone."},{value:"standard",title:"Standard",content:"For small to medium businesses."},{value:"enterprise",title:"Enterprise",content:"Solution for big organizations."}],f=[{icon:"tabler:rocket",iconProps:{fontSize:"1.75rem",style:{marginBottom:8}}},{icon:"tabler:star",iconProps:{fontSize:"1.75rem",style:{marginBottom:8}}},{icon:"tabler:briefcase",iconProps:{fontSize:"1.75rem",style:{marginBottom:8}}}],j=()=>{let e=g.filter(e=>e.isSelected)[g.filter(e=>e.isSelected).length-1].value,[t,n]=(0,r.useState)(e),o=e=>{"string"==typeof e?n(e):n(e.target.value)};return(0,i.jsx)(s.ZP,{container:!0,spacing:4,children:g.map((e,n)=>(0,i.jsx)(h.Z,{data:g[n],selected:t,icon:f[n].icon,name:"custom-radios-icons",handleChange:o,gridProps:{sm:4,xs:12},iconProps:f[n].iconProps},n))})};var b=n(69368);let v=e=>{let{data:t,name:n,selected:o,gridProps:r,handleChange:l,color:c="primary"}=e,{alt:d,img:m,value:u}=t;return t?(0,i.jsx)(s.ZP,{item:!0,...r,children:(0,i.jsxs)(a.Z,{onClick:()=>l(u),sx:{height:"100%",display:"flex",borderRadius:1,cursor:"pointer",overflow:"hidden",position:"relative",alignItems:"center",flexDirection:"column",justifyContent:"center",border:e=>"2px solid ".concat(e.palette.divider),"& img":{width:"100%",height:"100%",objectFit:"cover"},...o.includes(u)?{borderColor:"".concat(c,".main")}:{"&:hover":{borderColor:e=>"rgba(".concat(e.palette.customColors.main,", 0.25)")},"&:not(:hover)":{"& .MuiCheckbox-root":{display:"none"}}}},children:["string"==typeof m?(0,i.jsx)("img",{src:m,alt:null!=d?d:"checkbox-image-".concat(u)}):m,(0,i.jsx)(b.Z,{size:"small",color:c,name:"".concat(n,"-").concat(u),checked:o.includes(u),onChange:()=>l(u),sx:{top:4,right:4,position:"absolute"}})]})}):null},y=[{value:"watch",isSelected:!0,img:"/images/pages/custom-checkbox-img-1.png"},{value:"phone",img:"/images/pages/custom-checkbox-img-2.png"},{value:"laptop",img:"/images/pages/custom-checkbox-img-3.png"}],C=()=>{let e=y.filter(e=>e.isSelected).map(e=>e.value),[t,n]=(0,r.useState)(e),o=e=>{if(t.includes(e)){let i=t.filter(t=>t!==e);n(i)}else n([...t,e])};return(0,i.jsx)(s.ZP,{container:!0,spacing:4,children:y.map((e,n)=>(0,i.jsx)(v,{data:y[n],selected:t,name:"custom-checkbox-img",handleChange:o,gridProps:{sm:4,xs:12}},n))})};var S=n(15861);let Z=e=>{let{data:t,name:n,selected:o,gridProps:r,handleChange:l,color:c="primary"}=e,{meta:d,title:m,value:u,content:p}=t;return t?(0,i.jsx)(s.ZP,{item:!0,...r,children:(0,i.jsxs)(a.Z,{onClick:()=>l(u),sx:{p:4,height:"100%",display:"flex",borderRadius:1,cursor:"pointer",position:"relative",alignItems:"flex-start",border:e=>"1px solid ".concat(e.palette.divider),...o.includes(u)?{borderColor:"".concat(c,".main")}:{"&:hover":{borderColor:e=>"rgba(".concat(e.palette.customColors.main,", 0.25)")}}},children:[(0,i.jsx)(b.Z,{size:"small",color:c,name:"".concat(n,"-").concat(u),checked:o.includes(u),sx:{mb:-2,mt:-2.5,ml:-2.75},onChange:()=>l(u)}),d&&m&&p?(0,i.jsxs)(a.Z,{sx:{width:"100%",height:"100%",display:"flex",flexDirection:"column"},children:[(0,i.jsxs)(a.Z,{sx:{mb:2,width:"100%",display:"flex",alignItems:"flex-start",justifyContent:"space-between"},children:["string"==typeof m?(0,i.jsx)(S.Z,{sx:{mr:2,fontWeight:500},children:m}):m,"string"==typeof d?(0,i.jsx)(S.Z,{sx:{color:"text.disabled"},children:d}):d]}),"string"==typeof p?(0,i.jsx)(S.Z,{variant:"body2",children:p}):p]}):d&&m&&!p?(0,i.jsxs)(a.Z,{sx:{width:"100%",display:"flex",alignItems:"flex-start",justifyContent:"space-between"},children:["string"==typeof m?(0,i.jsx)(S.Z,{sx:{mr:2,fontWeight:500},children:m}):m,"string"==typeof d?(0,i.jsx)(S.Z,{sx:{color:"text.disabled"},children:d}):d]}):!d&&m&&p?(0,i.jsxs)(a.Z,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:["string"==typeof m?(0,i.jsx)(S.Z,{sx:{mb:1,fontWeight:500},children:m}):m,"string"==typeof p?(0,i.jsx)(S.Z,{variant:"body2",children:p}):p]}):d||m||!p?d||!m||p?null:"string"==typeof m?(0,i.jsx)(S.Z,{sx:{fontWeight:500},children:m}):m:"string"==typeof p?(0,i.jsx)(S.Z,{variant:"body2",children:p}):p]})}):null},k=[{meta:"20%",isSelected:!0,value:"discount",title:"Discount",content:"Wow! Get 20% off on your next purchase!"},{meta:"Free",value:"updates",title:"Updates",content:"Get Updates regarding related products."}],I=()=>{let e=k.filter(e=>e.isSelected).map(e=>e.value),[t,n]=(0,r.useState)(e),o=e=>{if(t.includes(e)){let i=t.filter(t=>t!==e);n(i)}else n([...t,e])};return(0,i.jsx)(s.ZP,{container:!0,spacing:4,children:k.map((e,n)=>(0,i.jsx)(Z,{data:k[n],selected:t,handleChange:o,name:"custom-checkbox-basic",gridProps:{sm:6,xs:12}},n))})};var P=n(79878);let w=e=>{let{data:t,icon:n,name:o,selected:r,gridProps:l,iconProps:c,handleChange:d,color:m="primary"}=e,{title:u,value:p,content:x}=t;return t?(0,i.jsx)(s.ZP,{item:!0,...l,children:(0,i.jsxs)(a.Z,{onClick:()=>d(p),sx:{p:4,height:"100%",display:"flex",borderRadius:1,cursor:"pointer",position:"relative",alignItems:"center",flexDirection:"column",border:e=>"1px solid ".concat(e.palette.divider),...r.includes(p)?{borderColor:"".concat(m,".main"),"& svg":{color:"primary.main"}}:{"&:hover":{borderColor:e=>"rgba(".concat(e.palette.customColors.main,", 0.25)")}}},children:[n?(0,i.jsx)(P.Z,{icon:n,...c}):null,u?"string"==typeof u?(0,i.jsx)(S.Z,{sx:{fontWeight:500,...x?{mb:2}:{my:"auto"}},children:u}):u:null,x?"string"==typeof x?(0,i.jsx)(S.Z,{variant:"body2",sx:{my:"auto",textAlign:"center"},children:x}):x:null,(0,i.jsx)(b.Z,{size:"small",color:m,name:"".concat(o,"-").concat(p),checked:r.includes(p),onChange:()=>d(p),sx:{mb:-2,...!n&&!u&&!x&&{mt:-2}}})]})}):null},G=[{value:"backup",title:"Backup",isSelected:!0,content:"Backup every file from your project."},{value:"encrypt",title:"Encrypt",content:"Translate your data to encrypted text."},{value:"site-lock",title:"Site Lock",content:"Security tool to protect your website."}],R=[{icon:"tabler:folder",iconProps:{fontSize:"1.75rem",style:{marginBottom:8}}},{icon:"tabler:ban",iconProps:{fontSize:"1.75rem",style:{marginBottom:8}}},{icon:"tabler:lock",iconProps:{fontSize:"1.75rem",style:{marginBottom:8}}}],z=()=>{let e=G.filter(e=>e.isSelected).map(e=>e.value),[t,n]=(0,r.useState)(e),o=e=>{if(t.includes(e)){let i=t.filter(t=>t!==e);n(i)}else n([...t,e])};return(0,i.jsx)(s.ZP,{container:!0,spacing:4,children:G.map((e,n)=>(0,i.jsx)(w,{data:G[n],selected:t,icon:R[n].icon,handleChange:o,name:"custom-checkbox-icons",gridProps:{sm:4,xs:12},iconProps:R[n].iconProps},n))})},B=(0,i.jsx)("pre",{className:"language-jsx",children:(0,i.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Grid from '@mui/material/Grid'\n\n// ** Demo Components Imports\nimport CustomCheckboxIcons from 'src/@core/components/custom-checkbox/icons'\n\nconst data = [\n  {\n    value: 'backup',\n    title: 'Backup',\n    isSelected: true,\n    content: 'Backup every file from your project.'\n  },\n  {\n    value: 'encrypt',\n    title: 'Encrypt',\n    content: 'Translate your data to encrypted text.'\n  },\n  {\n    value: 'site-lock',\n    title: 'Site Lock',\n    content: 'Security tool to protect your website.'\n  }\n]\n\nconst icons = [\n  { icon: 'tabler:folder', iconProps: { fontSize: '1.75rem', style: { marginBottom: 8 } } },\n  { icon: 'tabler:ban', iconProps: { fontSize: '1.75rem', style: { marginBottom: 8 } } },\n  { icon: 'tabler:lock', iconProps: { fontSize: '1.75rem', style: { marginBottom: 8 } } }\n]\n\nconst CustomCheckboxWithIcons = () => {\n  const initialSelected = data.filter(item => item.isSelected).map(item => item.value)\n\n  // ** State\n  const [selected, setSelected] = useState(initialSelected)\n\n  const handleChange = value => {\n    if (selected.includes(value)) {\n      const updatedArr = selected.filter(item => item !== value)\n      setSelected(updatedArr)\n    } else {\n      setSelected([...selected, value])\n    }\n  }\n\n  return (\n    <Grid container spacing={4}>\n      {data.map((item, index) => (\n        <CustomCheckboxIcons\n          key={index}\n          data={data[index]}\n          selected={selected}\n          icon={icons[index].icon}\n          handleChange={handleChange}\n          name='custom-checkbox-icons'\n          gridProps={{ sm: 4, xs: 12 }}\n          iconProps={icons[index].iconProps}\n        />\n      ))}\n    </Grid>\n  )\n}\n\nexport default CustomCheckboxWithIcons\n"})}),N=(0,i.jsx)("pre",{className:"language-jsx",children:(0,i.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Grid from '@mui/material/Grid'\n\n// ** Demo Components Imports\nimport CustomCheckboxBasic from 'src/@core/components/custom-checkbox/basic'\n\nconst data = [\n  {\n    meta: '20%',\n    isSelected: true,\n    value: 'discount',\n    title: 'Discount',\n    content: 'Wow! Get 20% off on your next purchase!'\n  },\n  {\n    meta: 'Free',\n    value: 'updates',\n    title: 'Updates',\n    content: 'Get Updates regarding related products.'\n  }\n]\n\nconst BasicCustomCheckbox = () => {\n  const initialSelected = data.filter(item => item.isSelected).map(item => item.value)\n\n  // ** State\n  const [selected, setSelected] = useState(initialSelected)\n\n  const handleChange = value => {\n    if (selected.includes(value)) {\n      const updatedArr = selected.filter(item => item !== value)\n      setSelected(updatedArr)\n    } else {\n      setSelected([...selected, value])\n    }\n  }\n\n  return (\n    <Grid container spacing={4}>\n      {data.map((item, index) => (\n        <CustomCheckboxBasic\n          key={index}\n          data={data[index]}\n          selected={selected}\n          handleChange={handleChange}\n          name='custom-checkbox-basic'\n          gridProps={{ sm: 6, xs: 12 }}\n        />\n      ))}\n    </Grid>\n  )\n}\n\nexport default BasicCustomCheckbox\n"})}),W=(0,i.jsx)("pre",{className:"language-jsx",children:(0,i.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Grid from '@mui/material/Grid'\n\n// ** Demo Components Imports\nimport CustomCheckboxImg from 'src/@core/components/custom-checkbox/image'\n\nconst data = [\n  {\n    value: 'watch',\n    isSelected: true,\n    img: '/images/pages/custom-checkbox-img-1.png'\n  },\n  {\n    value: 'phone',\n    img: '/images/pages/custom-checkbox-img-2.png'\n  },\n  {\n    value: 'laptop',\n    img: '/images/pages/custom-checkbox-img-3.png'\n  }\n]\n\nconst CustomCheckboxWithImages = () => {\n  const initialSelected = data.filter(item => item.isSelected).map(item => item.value)\n\n  // ** State\n  const [selected, setSelected] = useState(initialSelected)\n\n  const handleChange = value => {\n    if (selected.includes(value)) {\n      const updatedArr = selected.filter(item => item !== value)\n      setSelected(updatedArr)\n    } else {\n      setSelected([...selected, value])\n    }\n  }\n\n  return (\n    <Grid container spacing={4}>\n      {data.map((item, index) => (\n        <CustomCheckboxImg\n          key={index}\n          data={data[index]}\n          selected={selected}\n          name='custom-checkbox-img'\n          handleChange={handleChange}\n          gridProps={{ sm: 4, xs: 12 }}\n        />\n      ))}\n    </Grid>\n  )\n}\n\nexport default CustomCheckboxWithImages\n"})}),D=(0,i.jsx)("pre",{className:"language-jsx",children:(0,i.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Grid from '@mui/material/Grid'\n\n// ** Demo Components Imports\nimport CustomRadioBasic from 'src/@core/components/custom-radio/basic'\n\nconst data = [\n  {\n    meta: 'Free',\n    title: 'Basic',\n    value: 'basic',\n    isSelected: true,\n    content: 'Get 1 project with 1 team member.'\n  },\n  {\n    meta: '5.00',\n    title: 'Premium',\n    value: 'premium',\n    content: 'Get 5 projects with 5 team members.'\n  }\n]\n\nconst BasicCustomRadio = () => {\n  const initialSelected = data.filter(item => item.isSelected)[data.filter(item => item.isSelected).length - 1].value\n\n  // ** State\n  const [selected, setSelected] = useState(initialSelected)\n\n  const handleChange = prop => {\n    if (typeof prop === 'string') {\n      setSelected(prop)\n    } else {\n      setSelected(prop.target.value)\n    }\n  }\n\n  return (\n    <Grid container spacing={4}>\n      {data.map((item, index) => (\n        <CustomRadioBasic\n          key={index}\n          data={data[index]}\n          selected={selected}\n          name='custom-radios-basic'\n          handleChange={handleChange}\n          gridProps={{ sm: 6, xs: 12 }}\n        />\n      ))}\n    </Grid>\n  )\n}\n\nexport default BasicCustomRadio\n"})}),E=(0,i.jsx)("pre",{className:"language-jsx",children:(0,i.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Grid from '@mui/material/Grid'\n\n// ** Demo Components Imports\nimport CustomRadioIcons from 'src/@core/components/custom-radio/icons'\n\nconst data = [\n  {\n    value: 'starter',\n    title: 'Starter',\n    isSelected: true,\n    content: 'A simple start for everyone.'\n  },\n  {\n    value: 'standard',\n    title: 'Standard',\n    content: 'For small to medium businesses.'\n  },\n  {\n    value: 'enterprise',\n    title: 'Enterprise',\n    content: 'Solution for big organizations.'\n  }\n]\n\nconst icons = [\n  { icon: 'tabler:rocket', iconProps: { fontSize: '1.75rem', style: { marginBottom: 8 } } },\n  { icon: 'tabler:star', iconProps: { fontSize: '1.75rem', style: { marginBottom: 8 } } },\n  { icon: 'tabler:briefcase', iconProps: { fontSize: '1.75rem', style: { marginBottom: 8 } } }\n]\n\nconst CustomRadioWithIcons = () => {\n  const initialSelected = data.filter(item => item.isSelected)[data.filter(item => item.isSelected).length - 1].value\n\n  // ** State\n  const [selected, setSelected] = useState(initialSelected)\n\n  const handleChange = prop => {\n    if (typeof prop === 'string') {\n      setSelected(prop)\n    } else {\n      setSelected(prop.target.value)\n    }\n  }\n\n  return (\n    <Grid container spacing={4}>\n      {data.map((item, index) => (\n        <CustomRadioIcons\n          key={index}\n          data={data[index]}\n          selected={selected}\n          icon={icons[index].icon}\n          name='custom-radios-icons'\n          handleChange={handleChange}\n          gridProps={{ sm: 4, xs: 12 }}\n          iconProps={icons[index].iconProps}\n        />\n      ))}\n    </Grid>\n  )\n}\n\nexport default CustomRadioWithIcons\n"})}),A=(0,i.jsx)("pre",{className:"language-jsx",children:(0,i.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Grid from '@mui/material/Grid'\n\n// ** Demo Components Imports\nimport CustomRadioImg from 'src/@core/components/custom-radio/image'\n\nconst data = [\n  {\n    value: 'speaker',\n    isSelected: true,\n    img: '/images/pages/custom-radio-img-1.png'\n  },\n  {\n    value: 'ear-buds',\n    img: '/images/pages/custom-radio-img-2.png'\n  },\n  {\n    value: 'headphone',\n    img: '/images/pages/custom-radio-img-3.png'\n  }\n]\n\nconst CustomRadioWithImages = () => {\n  const initialSelected = data.filter(item => item.isSelected)[data.filter(item => item.isSelected).length - 1].value\n\n  // ** State\n  const [selected, setSelected] = useState(initialSelected)\n\n  const handleChange = prop => {\n    if (typeof prop === 'string') {\n      setSelected(prop)\n    } else {\n      setSelected(prop.target.value)\n    }\n  }\n\n  return (\n    <Grid container spacing={4}>\n      {data.map((item, index) => (\n        <CustomRadioImg\n          key={index}\n          data={data[index]}\n          selected={selected}\n          name='custom-radios-img'\n          handleChange={handleChange}\n          gridProps={{ sm: 4, xs: 12 }}\n        />\n      ))}\n    </Grid>\n  )\n}\n\nexport default CustomRadioWithImages\n"})}),_=()=>(0,i.jsxs)(s.ZP,{container:!0,spacing:6,className:"match-height",children:[(0,i.jsx)(s.ZP,{item:!0,xs:12,lg:6,children:(0,i.jsx)(o.Z,{title:"Custom Radios",code:{tsx:null,jsx:D},children:(0,i.jsx)(x,{})})}),(0,i.jsx)(s.ZP,{item:!0,xs:12,lg:6,children:(0,i.jsx)(o.Z,{title:"Custom Checkboxes",code:{tsx:null,jsx:N},children:(0,i.jsx)(I,{})})}),(0,i.jsx)(s.ZP,{item:!0,xs:12,lg:6,children:(0,i.jsx)(o.Z,{title:"Custom Radios with Icons",code:{tsx:null,jsx:E},children:(0,i.jsx)(j,{})})}),(0,i.jsx)(s.ZP,{item:!0,xs:12,lg:6,children:(0,i.jsx)(o.Z,{title:"Custom Checkboxes with Icons",code:{tsx:null,jsx:B},children:(0,i.jsx)(z,{})})}),(0,i.jsx)(s.ZP,{item:!0,xs:12,lg:6,children:(0,i.jsx)(o.Z,{title:"Custom Radios with Images",code:{tsx:null,jsx:A},children:(0,i.jsx)(m,{})})}),(0,i.jsx)(s.ZP,{item:!0,xs:12,lg:6,children:(0,i.jsx)(o.Z,{title:"Custom Checkboxes with Images",code:{tsx:null,jsx:W},children:(0,i.jsx)(C,{})})})]});var U=_}},function(e){e.O(0,[5511,728,9774,2888,179],function(){return e(e.s=53172)}),_N_E=e.O()}]);