(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2662],{66485:function(e){function n(){return new DOMException("The request is not allowed","NotAllowedError")}async function a(e){if(!navigator.clipboard)throw n();return navigator.clipboard.writeText(e)}async function l(e){let a=document.createElement("span");a.textContent=e,a.style.whiteSpace="pre",a.style.webkitUserSelect="auto",a.style.userSelect="all",document.body.appendChild(a);let l=window.getSelection(),r=window.document.createRange();l.removeAllRanges(),r.selectNode(a),l.addRange(r);let s=!1;try{s=window.document.execCommand("copy")}finally{l.removeAllRanges(),window.document.body.removeChild(a)}if(!s)throw n()}async function r(e){try{await a(e)}catch(a){try{await l(e)}catch(e){throw e||a||n()}}}/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */e.exports=r},44246:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/chips",function(){return a(82682)}])},93682:function(e,n,a){"use strict";a.d(n,{Z:function(){return N}});var l=a(85893),r=a(67294),s=a(87357),i=a(66242),o=a(34386),t=a(67720),c=a(57922),d=a(93946),h=a(78445),p=a(44267),m=a(96420),x=a(98396),u=a(33454),j=a(79878),g=a(15660),v=a.n(g),b=a(86501),C=a(66485),y=a.n(C);let f=e=>e&&("TEXTAREA"===e.nodeName||"INPUT"===e.nodeName);var Z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,r.useRef)(null),a=()=>{e.onSuccess&&e.onSuccess(),e.selectOnCopy&&f(n.current)&&n.current.select()},l=()=>{e.onError&&e.onError();let a=!1!==e.selectOnError;a&&f(n.current)&&n.current.select()},s=e=>{y()(e).then(a).catch(l)},i=(0,r.useCallback)(e=>{"string"==typeof e?s(e):n.current&&s(n.current.value)},[]);return{copy:i,target:n}};let k=e=>{let{id:n,sx:a,code:g,title:C,children:y,className:f}=e,[k,N]=(0,r.useState)(!1),[I,S]=(0,r.useState)(null!==g.tsx?"tsx":"jsx"),A=Z(),w=(0,x.Z)(e=>e.breakpoints.down("md"));(0,r.useEffect)(()=>{v().highlightAll()},[k,I]);let D=()=>null!==g.tsx&&"tsx"===I?g.tsx.props.children.props.children:null!==g.jsx&&"jsx"===I?g.jsx.props.children.props.children:"",P=()=>{A.copy(D()),b.ZP.success("The source code has been copied to your clipboard.",{duration:2e3})};return(0,l.jsxs)(i.Z,{className:f,sx:{"& .MuiCardHeader-action":{lineHeight:.8},...a},id:n||"card-snippet--".concat(C.toLowerCase().replace(/ /g,"-")),children:[(0,l.jsx)(h.Z,{title:C,...w?{}:{action:(0,l.jsx)(d.Z,{onClick:()=>N(!k),children:(0,l.jsx)(j.Z,{icon:"tabler:code",fontSize:20})})}}),(0,l.jsx)(p.Z,{children:y}),w?null:(0,l.jsxs)(c.Z,{in:k,children:[(0,l.jsx)(t.Z,{sx:{my:"0 !important"}}),(0,l.jsxs)(p.Z,{sx:{position:"relative","& pre":{m:"0 !important",maxHeight:500}},children:[(0,l.jsx)(s.Z,{sx:{mb:4,display:"flex",alignItems:"center",justifyContent:"flex-end"},children:(0,l.jsxs)(u.Z,{exclusive:!0,size:"small",color:"primary",value:I,onChange:(e,n)=>null!==n?S(n):null,children:[null!==g.tsx?(0,l.jsx)(m.Z,{value:"tsx",children:(0,l.jsx)(j.Z,{icon:"tabler:brand-typescript",fontSize:20})}):null,null!==g.jsx?(0,l.jsx)(m.Z,{value:"jsx",children:(0,l.jsx)(j.Z,{icon:"tabler:brand-javascript",fontSize:20})}):null]})}),(0,l.jsx)(o.Z,{title:"Copy the source",placement:"top",children:(0,l.jsx)(d.Z,{onClick:P,sx:{top:"5rem",color:"grey.100",right:"2.5625rem",position:"absolute"},children:(0,l.jsx)(j.Z,{icon:"tabler:copy",fontSize:20})})}),(0,l.jsx)("div",{children:null!==g[I]?g[I]:null})]})]})]})};var N=k},82682:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return z}});var l=a(85893),r=a(86886),s=a(15861),i=a(93682),o=a(87918),t=a(79878);let c=()=>(0,l.jsxs)("div",{className:"demo-space-x",children:[(0,l.jsx)(o.Z,{label:"Previous",icon:(0,l.jsx)(t.Z,{icon:"tabler:circle-chevron-left",fontSize:20})}),(0,l.jsx)(o.Z,{label:"Next",color:"primary",variant:"outlined",icon:(0,l.jsx)(t.Z,{icon:"tabler:circle-chevron-right",fontSize:20})})]}),d=()=>(0,l.jsxs)("div",{className:"demo-space-x",children:[(0,l.jsx)(o.Z,{label:"Default"}),(0,l.jsx)(o.Z,{label:"Small",size:"small"})]});var h=a(67294),p=a(87952);let m=()=>{let[e,n]=(0,h.useState)([{key:0,avatar:"/images/avatars/1.png",avatarAlt:"User Avatar",label:"Norman Santiago"},{key:1,avatar:"/images/avatars/2.png",avatarAlt:"User Avatar",label:"Cecelia Tucker"},{key:2,label:"Max Burns"},{key:3,avatar:"/images/avatars/4.png",avatarAlt:"User Avatar",label:"Ellen Nguyen"},{key:4,avatar:"/images/avatars/5.png",avatarAlt:"User Avatar",label:"Edward Francis"}]),a=e=>()=>{n(n=>n.filter(n=>n.key!==e.key))};return(0,l.jsx)("div",{className:"demo-space-x",children:e.map(e=>(0,l.jsx)(o.Z,{label:e.label,avatar:(0,l.jsx)(p.Z,{src:e.avatar,alt:e.avatarAlt}),onDelete:2===e.key?void 0:a(e)},e.key))})};var x=a(95600);let u=()=>(0,l.jsxs)("div",{className:"demo-space-x",children:[(0,l.jsx)(x.Z,{label:"Primary",skin:"light",color:"primary"}),(0,l.jsx)(x.Z,{label:"Secondary",skin:"light",color:"secondary"}),(0,l.jsx)(x.Z,{label:"Success",skin:"light",color:"success"}),(0,l.jsx)(x.Z,{label:"Error",skin:"light",color:"error"}),(0,l.jsx)(x.Z,{label:"Warning",skin:"light",color:"warning"}),(0,l.jsx)(x.Z,{label:"Info",skin:"light",color:"info"})]}),j=()=>(0,l.jsxs)(h.Fragment,{children:[(0,l.jsx)(s.Z,{sx:{fontWeight:500},children:"Filled Chips"}),(0,l.jsxs)("div",{className:"demo-space-x",children:[(0,l.jsx)(o.Z,{label:"Primary",color:"primary"}),(0,l.jsx)(o.Z,{label:"Secondary",color:"secondary"}),(0,l.jsx)(o.Z,{label:"Success",color:"success"}),(0,l.jsx)(o.Z,{label:"Error",color:"error"}),(0,l.jsx)(o.Z,{label:"Warning",color:"warning"}),(0,l.jsx)(o.Z,{label:"Info",color:"info"})]}),(0,l.jsx)(s.Z,{sx:{mt:4,fontWeight:500},children:"Outlined Chips"}),(0,l.jsxs)("div",{className:"demo-space-x",children:[(0,l.jsx)(o.Z,{label:"Primary",color:"primary",variant:"outlined"}),(0,l.jsx)(o.Z,{label:"Secondary",color:"secondary",variant:"outlined"}),(0,l.jsx)(o.Z,{label:"Success",color:"success",variant:"outlined"}),(0,l.jsx)(o.Z,{label:"Error",color:"error",variant:"outlined"}),(0,l.jsx)(o.Z,{label:"Warning",color:"warning",variant:"outlined"}),(0,l.jsx)(o.Z,{label:"Info",color:"info",variant:"outlined"})]})]}),g=()=>(0,l.jsxs)("div",{className:"demo-space-x",children:[(0,l.jsx)(o.Z,{label:"Default",avatar:(0,l.jsx)(p.Z,{})}),(0,l.jsx)(o.Z,{label:"Howard Paul",avatar:(0,l.jsx)(p.Z,{src:"/images/avatars/7.png",alt:"User Avatar"})}),(0,l.jsx)(o.Z,{label:"Maurice Bell",avatar:(0,l.jsx)(p.Z,{children:"M"})}),(0,l.jsx)(o.Z,{label:"Archived",avatar:(0,l.jsx)(p.Z,{children:(0,l.jsx)(t.Z,{icon:"tabler:archive",fontSize:20})})})]}),v=()=>(0,l.jsxs)("div",{className:"demo-space-x",children:[(0,l.jsx)(x.Z,{rounded:!0,label:"Primary",skin:"light",color:"primary"}),(0,l.jsx)(x.Z,{rounded:!0,label:"Secondary",skin:"light",color:"secondary"}),(0,l.jsx)(x.Z,{rounded:!0,label:"Success",skin:"light",color:"success"}),(0,l.jsx)(x.Z,{rounded:!0,label:"Error",skin:"light",color:"error"}),(0,l.jsx)(x.Z,{rounded:!0,label:"Warning",skin:"light",color:"warning"}),(0,l.jsx)(x.Z,{rounded:!0,label:"Info",skin:"light",color:"info"})]}),b=()=>(0,l.jsxs)("div",{className:"demo-space-x",children:[(0,l.jsx)(o.Z,{label:"Basic"}),(0,l.jsx)(o.Z,{label:"Outlined",variant:"outlined"})]}),C=()=>(0,l.jsxs)("div",{className:"demo-space-x",children:[(0,l.jsx)(o.Z,{label:"Basic",disabled:!0}),(0,l.jsx)(o.Z,{label:"Outlined",variant:"outlined",disabled:!0})]}),y=()=>{let e=()=>{console.info("You clicked the delete icon.")};return(0,l.jsxs)(h.Fragment,{children:[(0,l.jsx)(s.Z,{sx:{fontWeight:500},children:"Default"}),(0,l.jsxs)("div",{className:"demo-space-x",children:[(0,l.jsx)(o.Z,{label:"Basic",variant:"outlined",onDelete:e}),(0,l.jsx)(o.Z,{label:"Primary",color:"primary",variant:"outlined",onDelete:e}),(0,l.jsx)(o.Z,{label:"Secondary",color:"secondary",variant:"outlined",onDelete:e})]}),(0,l.jsx)(s.Z,{sx:{mt:4,fontWeight:500},children:"Custom"}),(0,l.jsxs)("div",{className:"demo-space-x",children:[(0,l.jsx)(o.Z,{label:"Basic",onDelete:e,deleteIcon:(0,l.jsx)(t.Z,{icon:"tabler:trash"})}),(0,l.jsx)(o.Z,{label:"Primary",color:"primary",onDelete:e,deleteIcon:(0,l.jsx)(t.Z,{icon:"tabler:trash"})}),(0,l.jsx)(o.Z,{label:"Secondary",color:"secondary",onDelete:e,deleteIcon:(0,l.jsx)(t.Z,{icon:"tabler:trash"})})]})]})},f=()=>{let e=()=>{console.info("You clicked the Chip.")};return(0,l.jsxs)("div",{className:"demo-space-x",children:[(0,l.jsx)(o.Z,{label:"Clickable",onClick:e}),(0,l.jsx)(o.Z,{label:"Clickable Link",component:"a",href:"https://pixinvent.com/",target:"_blank",clickable:!0})]})},Z=(0,l.jsx)("pre",{className:"language-jsx",children:(0,l.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Chip from '@mui/material/Chip'\nimport Avatar from '@mui/material/Avatar'\n\n// ** Icon Imports\nimport Icon from 'src/@core/components/icon'\n\nconst ChipsAvatar = () => {\n  return (\n    <div className='demo-space-x'>\n      <Chip label='Default' avatar={<Avatar />} />\n      <Chip label='Howard Paul' avatar={<Avatar src='/images/avatars/7.png' alt='User Avatar' />} />\n      <Chip label='Maurice Bell' avatar={<Avatar>M</Avatar>} />\n      <Chip\n        label='Archived'\n        avatar={\n          <Avatar>\n            <Icon icon='tabler:archive' fontSize={20} />\n          </Avatar>\n        }\n      />\n    </div>\n  )\n}\n\nexport default ChipsAvatar\n"})}),k=(0,l.jsx)("pre",{className:"language-jsx",children:(0,l.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Chip from '@mui/material/Chip'\nimport Avatar from '@mui/material/Avatar'\n\nconst ChipsArray = () => {\n  // ** State\n  const [chipData, setChipData] = useState([\n    { key: 0, avatar: '/images/avatars/1.png', avatarAlt: 'User Avatar', label: 'Norman Santiago' },\n    { key: 1, avatar: '/images/avatars/2.png', avatarAlt: 'User Avatar', label: 'Cecelia Tucker' },\n    { key: 2, label: 'Max Burns' },\n    { key: 3, avatar: '/images/avatars/4.png', avatarAlt: 'User Avatar', label: 'Ellen Nguyen' },\n    { key: 4, avatar: '/images/avatars/5.png', avatarAlt: 'User Avatar', label: 'Edward Francis' }\n  ])\n\n  const handleDelete = chipToDelete => () => {\n    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key))\n  }\n\n  return (\n    <div className='demo-space-x'>\n      {chipData.map(data => (\n        <Chip\n          key={data.key}\n          label={data.label}\n          avatar={<Avatar src={data.avatar} alt={data.avatarAlt} />}\n          onDelete={data.key === 2 ? undefined : handleDelete(data)}\n        />\n      ))}\n    </div>\n  )\n}\n\nexport default ChipsArray\n"})}),N=(0,l.jsx)("pre",{className:"language-jsx",children:(0,l.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Chip from '@mui/material/Chip'\n\nconst ChipsDisabled = () => {\n  return (\n    <div className='demo-space-x'>\n      <Chip label='Basic' disabled />\n      <Chip label='Outlined' variant='outlined' disabled />\n    </div>\n  )\n}\n\nexport default ChipsDisabled\n"})}),I=(0,l.jsx)("pre",{className:"language-jsx",children:(0,l.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Chip from '@mui/material/Chip'\n\n// ** Icon Imports\nimport Icon from 'src/@core/components/icon'\n\nconst ChipsIcon = () => {\n  return (\n    <div className='demo-space-x'>\n      <Chip label='Previous' icon={<Icon icon='tabler:circle-chevron-left' fontSize={20} />} />\n      <Chip\n        label='Next'\n        color='primary'\n        variant='outlined'\n        icon={<Icon icon='tabler:circle-chevron-right' fontSize={20} />}\n      />\n    </div>\n  )\n}\n\nexport default ChipsIcon\n"})}),S=(0,l.jsx)("pre",{className:"language-jsx",children:(0,l.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { Fragment } from 'react'\n\n// ** MUI Imports\nimport Chip from '@mui/material/Chip'\nimport Typography from '@mui/material/Typography'\n\nconst ChipsColors = () => {\n  return (\n    <Fragment>\n      <Typography sx={{ fontWeight: 500 }}>Filled Chips</Typography>\n      <div className='demo-space-x'>\n        <Chip label='Primary' color='primary' />\n        <Chip label='Secondary' color='secondary' />\n        <Chip label='Success' color='success' />\n        <Chip label='Error' color='error' />\n        <Chip label='Warning' color='warning' />\n        <Chip label='Info' color='info' />\n      </div>\n      <Typography sx={{ mt: 4, fontWeight: 500 }}>Outlined Chips</Typography>\n      <div className='demo-space-x'>\n        <Chip label='Primary' color='primary' variant='outlined' />\n        <Chip label='Secondary' color='secondary' variant='outlined' />\n        <Chip label='Success' color='success' variant='outlined' />\n        <Chip label='Error' color='error' variant='outlined' />\n        <Chip label='Warning' color='warning' variant='outlined' />\n        <Chip label='Info' color='info' variant='outlined' />\n      </div>\n    </Fragment>\n  )\n}\n\nexport default ChipsColors\n"})}),A=(0,l.jsx)("pre",{className:"language-jsx",children:(0,l.jsx)("code",{className:"language-jsx",children:"// ** Custom Components Imports\nimport CustomChip from 'src/@core/components/mui/chip'\n\nconst ChipsCustomized = () => {\n  return (\n    <div className='demo-space-x'>\n      <CustomChip label='Primary' skin='light' color='primary' />\n      <CustomChip label='Secondary' skin='light' color='secondary' />\n      <CustomChip label='Success' skin='light' color='success' />\n      <CustomChip label='Error' skin='light' color='error' />\n      <CustomChip label='Warning' skin='light' color='warning' />\n      <CustomChip label='Info' skin='light' color='info' />\n    </div>\n  )\n}\n\nexport default ChipsCustomized\n"})}),w=(0,l.jsx)("pre",{className:"language-jsx",children:(0,l.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { Fragment } from 'react'\n\n// ** MUI Imports\nimport Chip from '@mui/material/Chip'\nimport Typography from '@mui/material/Typography'\n\n// ** Icon Imports\nimport Icon from 'src/@core/components/icon'\n\nconst ChipsOnDelete = () => {\n  const handleDelete = () => {\n    console.info('You clicked the delete icon.')\n  }\n\n  return (\n    <Fragment>\n      <Typography sx={{ fontWeight: 500 }}>Default</Typography>\n      <div className='demo-space-x'>\n        <Chip label='Basic' variant='outlined' onDelete={handleDelete} />\n        <Chip label='Primary' color='primary' variant='outlined' onDelete={handleDelete} />\n        <Chip label='Secondary' color='secondary' variant='outlined' onDelete={handleDelete} />\n      </div>\n      <Typography sx={{ mt: 4, fontWeight: 500 }}>Custom</Typography>\n      <div className='demo-space-x'>\n        <Chip label='Basic' onDelete={handleDelete} deleteIcon={<Icon icon='tabler:trash' />} />\n        <Chip label='Primary' color='primary' onDelete={handleDelete} deleteIcon={<Icon icon='tabler:trash' />} />\n        <Chip label='Secondary' color='secondary' onDelete={handleDelete} deleteIcon={<Icon icon='tabler:trash' />} />\n      </div>\n    </Fragment>\n  )\n}\n\nexport default ChipsOnDelete\n"})}),D=(0,l.jsx)("pre",{className:"language-jsx",children:(0,l.jsx)("code",{className:"language-jsx",children:"// ** Custom Components Imports\nimport CustomChip from 'src/@core/components/mui/chip'\n\nconst ChipsRounded = () => {\n  return (\n    <div className='demo-space-x'>\n      <CustomChip rounded label='Primary' skin='light' color='primary' />\n      <CustomChip rounded label='Secondary' skin='light' color='secondary' />\n      <CustomChip rounded label='Success' skin='light' color='success' />\n      <CustomChip rounded label='Error' skin='light' color='error' />\n      <CustomChip rounded label='Warning' skin='light' color='warning' />\n      <CustomChip rounded label='Info' skin='light' color='info' />\n    </div>\n  )\n}\n\nexport default ChipsRounded\n"})}),P=(0,l.jsx)("pre",{className:"language-jsx",children:(0,l.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Chip from '@mui/material/Chip'\n\nconst ChipsSizes = () => {\n  return (\n    <div className='demo-space-x'>\n      <Chip label='Default' />\n      <Chip label='Small' size='small' />\n    </div>\n  )\n}\n\nexport default ChipsSizes\n"})}),U=(0,l.jsx)("pre",{className:"language-jsx",children:(0,l.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Chip from '@mui/material/Chip'\n\nconst ChipsVariants = () => {\n  return (\n    <div className='demo-space-x'>\n      <Chip label='Basic' />\n      <Chip label='Outlined' variant='outlined' />\n    </div>\n  )\n}\n\nexport default ChipsVariants\n"})}),E=(0,l.jsx)("pre",{className:"language-jsx",children:(0,l.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Chip from '@mui/material/Chip'\n\nconst ChipsClickable = () => {\n  const handleClick = () => {\n    console.info('You clicked the Chip.')\n  }\n\n  return (\n    <div className='demo-space-x'>\n      <Chip label='Clickable' onClick={handleClick} />\n      <Chip label='Clickable Link' component='a' href='https://pixinvent.com/' target='_blank' clickable />\n    </div>\n  )\n}\n\nexport default ChipsClickable\n"})}),T=()=>(0,l.jsxs)(r.ZP,{container:!0,spacing:6,className:"match-height",children:[(0,l.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,l.jsxs)(i.Z,{title:"Chip Variants",code:{tsx:null,jsx:U},children:[(0,l.jsxs)(s.Z,{children:["Use ",(0,l.jsx)("code",{children:"variant='outlined'"})," prop with ",(0,l.jsx)("code",{children:"Chip"})," component for outlined chip."]}),(0,l.jsx)(b,{})]})}),(0,l.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,l.jsxs)(i.Z,{title:"Disabled Chips",code:{tsx:null,jsx:N},children:[(0,l.jsxs)(s.Z,{children:["Use ",(0,l.jsx)("code",{children:"disabled"})," prop for disabled chip."]}),(0,l.jsx)(C,{})]})}),(0,l.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,l.jsxs)(i.Z,{title:"Colors",code:{tsx:null,jsx:S},children:[(0,l.jsxs)(s.Z,{sx:{mb:4},children:["Use ",(0,l.jsx)("code",{children:"color"})," prop for different colored chips."]}),(0,l.jsx)(j,{})]})}),(0,l.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,l.jsxs)(i.Z,{title:"onDelete",code:{tsx:null,jsx:w},children:[(0,l.jsxs)(s.Z,{sx:{mb:4},children:["Use ",(0,l.jsx)("code",{children:"onDelete"})," prop for delete icon in a chip. Use ",(0,l.jsx)("code",{children:"deleteIcon"})," prop to change the default delete icon."]}),(0,l.jsx)(y,{})]})}),(0,l.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,l.jsxs)(i.Z,{title:"Chip Sizes",code:{tsx:null,jsx:P},children:[(0,l.jsxs)(s.Z,{children:["Use ",(0,l.jsx)("code",{children:"size='small'"})," prop for small chip."]}),(0,l.jsx)(d,{})]})}),(0,l.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,l.jsxs)(i.Z,{title:"Clickable Chip",code:{tsx:null,jsx:E},children:[(0,l.jsxs)(s.Z,{children:["You can make any chip clickable by adding ",(0,l.jsx)("code",{children:"clickable"})," prop and use ",(0,l.jsx)("code",{children:"component='a'"})," to make it a link."]}),(0,l.jsx)(f,{})]})}),(0,l.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,l.jsxs)(i.Z,{title:"Chip with Avatar",code:{tsx:null,jsx:Z},children:[(0,l.jsxs)(s.Z,{children:["Use ",(0,l.jsx)("code",{children:"Avatar"})," component inside ",(0,l.jsx)("code",{children:"avatar"})," prop for a chip with avatar."]}),(0,l.jsx)(g,{})]})}),(0,l.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,l.jsxs)(i.Z,{title:"Icon Chip",code:{tsx:null,jsx:I},children:[(0,l.jsxs)(s.Z,{children:["Use ",(0,l.jsx)("code",{children:"icon"})," prop for an icon inside a chip."]}),(0,l.jsx)(c,{})]})}),(0,l.jsx)(r.ZP,{item:!0,xs:12,children:(0,l.jsxs)(i.Z,{title:"Chips Array",code:{tsx:null,jsx:k},children:[(0,l.jsx)(s.Z,{children:"You can make a list of chips that can make some or all chips deletable."}),(0,l.jsx)(m,{})]})}),(0,l.jsx)(r.ZP,{item:!0,xs:12,children:(0,l.jsxs)(i.Z,{title:"Custom Light Chips",code:{tsx:null,jsx:A},children:[(0,l.jsxs)(s.Z,{children:["If you want to use light variant of the chips, you need to use our custom component with"," ",(0,l.jsx)("code",{children:"skin='light'"})," prop."]}),(0,l.jsx)(u,{})]})}),(0,l.jsx)(r.ZP,{item:!0,xs:12,children:(0,l.jsxs)(i.Z,{title:"Custom Rounded",code:{tsx:null,jsx:D},children:[(0,l.jsxs)(s.Z,{children:["Use prop ",(0,l.jsx)("code",{children:"rounded"})," for a rounded chip."]}),(0,l.jsx)(v,{})]})})]});var z=T}},function(e){e.O(0,[5511,9774,2888,179],function(){return e(e.s=44246)}),_N_E=e.O()}]);