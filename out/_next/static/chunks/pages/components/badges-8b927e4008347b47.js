(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2501],{86456:function(a,r,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/badges",function(){return e(71335)}])},93682:function(a,r,e){"use strict";e.d(r,{Z:function(){return C}});var n=e(85893),t=e(67294),s=e(87357),i=e(66242),o=e(34386),l=e(67720),c=e(57922),d=e(93946),g=e(78445),m=e(44267),p=e(96420),x=e(98396),v=e(33454),h=e(79878),u=e(15660),j=e.n(u),Z=e(86501),B=e(66485),b=e.n(B);let A=a=>a&&("TEXTAREA"===a.nodeName||"INPUT"===a.nodeName);var y=function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=(0,t.useRef)(null),e=()=>{a.onSuccess&&a.onSuccess(),a.selectOnCopy&&A(r.current)&&r.current.select()},n=()=>{a.onError&&a.onError();let e=!1!==a.selectOnError;e&&A(r.current)&&r.current.select()},s=a=>{b()(a).then(e).catch(n)},i=(0,t.useCallback)(a=>{"string"==typeof a?s(a):r.current&&s(r.current.value)},[]);return{copy:i,target:r}};let f=a=>{let{id:r,sx:e,code:u,title:B,children:b,className:A}=a,[f,C]=(0,t.useState)(!1),[U,N]=(0,t.useState)(null!==u.tsx?"tsx":"jsx"),I=y(),S=(0,x.Z)(a=>a.breakpoints.down("md"));(0,t.useEffect)(()=>{j().highlightAll()},[f,U]);let k=()=>null!==u.tsx&&"tsx"===U?u.tsx.props.children.props.children:null!==u.jsx&&"jsx"===U?u.jsx.props.children.props.children:"",w=()=>{I.copy(k()),Z.ZP.success("The source code has been copied to your clipboard.",{duration:2e3})};return(0,n.jsxs)(i.Z,{className:A,sx:{"& .MuiCardHeader-action":{lineHeight:.8},...e},id:r||"card-snippet--".concat(B.toLowerCase().replace(/ /g,"-")),children:[(0,n.jsx)(g.Z,{title:B,...S?{}:{action:(0,n.jsx)(d.Z,{onClick:()=>C(!f),children:(0,n.jsx)(h.Z,{icon:"tabler:code",fontSize:20})})}}),(0,n.jsx)(m.Z,{children:b}),S?null:(0,n.jsxs)(c.Z,{in:f,children:[(0,n.jsx)(l.Z,{sx:{my:"0 !important"}}),(0,n.jsxs)(m.Z,{sx:{position:"relative","& pre":{m:"0 !important",maxHeight:500}},children:[(0,n.jsx)(s.Z,{sx:{mb:4,display:"flex",alignItems:"center",justifyContent:"flex-end"},children:(0,n.jsxs)(v.Z,{exclusive:!0,size:"small",color:"primary",value:U,onChange:(a,r)=>null!==r?N(r):null,children:[null!==u.tsx?(0,n.jsx)(p.Z,{value:"tsx",children:(0,n.jsx)(h.Z,{icon:"tabler:brand-typescript",fontSize:20})}):null,null!==u.jsx?(0,n.jsx)(p.Z,{value:"jsx",children:(0,n.jsx)(h.Z,{icon:"tabler:brand-javascript",fontSize:20})}):null]})}),(0,n.jsx)(o.Z,{title:"Copy the source",placement:"top",children:(0,n.jsx)(d.Z,{onClick:w,sx:{top:"5rem",color:"grey.100",right:"2.5625rem",position:"absolute"},children:(0,n.jsx)(h.Z,{icon:"tabler:copy",fontSize:20})})}),(0,n.jsx)("div",{children:null!==u[U]?u[U]:null})]})]})]})};var C=f},69600:function(a,r,e){"use strict";var n=e(85893),t=e(90263),s=e(81931);let i=a=>{let{sx:r,skin:e,color:i}=a,o=(0,s.Z)(),l={primary:{...o.primaryLight},secondary:{...o.secondaryLight},success:{...o.successLight},error:{...o.errorLight},warning:{...o.warningLight},info:{...o.infoLight}};return(0,n.jsx)(t.Z,{...a,sx:"light"===e&&i?Object.assign({"& .MuiBadge-badge":l[i]},r):r})};r.Z=i},71335:function(a,r,e){"use strict";e.r(r),e.d(r,{default:function(){return W}});var n=e(85893),t=e(86886),s=e(15861),i=e(93682),o=e(90263),l=e(87952);let c=()=>(0,n.jsxs)("div",{className:"demo-space-x",children:[(0,n.jsx)(o.Z,{variant:"dot",color:"primary",children:(0,n.jsx)(l.Z,{src:"/images/avatars/8.png",alt:"User Avatar"})}),(0,n.jsx)(o.Z,{variant:"dot",color:"secondary",children:(0,n.jsx)(l.Z,{src:"/images/avatars/8.png",alt:"User Avatar"})}),(0,n.jsx)(o.Z,{variant:"dot",color:"error",children:(0,n.jsx)(s.Z,{children:"Typography"})})]}),d=()=>(0,n.jsxs)("div",{className:"demo-space-x",children:[(0,n.jsx)(o.Z,{badgeContent:4,color:"primary",children:(0,n.jsx)(l.Z,{src:"/images/avatars/8.png",alt:"User Avatar"})}),(0,n.jsx)(o.Z,{badgeContent:4,color:"secondary",children:(0,n.jsx)(l.Z,{src:"/images/avatars/8.png",alt:"User Avatar"})}),(0,n.jsx)(o.Z,{badgeContent:4,color:"success",children:(0,n.jsx)(l.Z,{src:"/images/avatars/8.png",alt:"User Avatar"})}),(0,n.jsx)(o.Z,{badgeContent:4,color:"error",children:(0,n.jsx)(l.Z,{src:"/images/avatars/8.png",alt:"User Avatar"})}),(0,n.jsx)(o.Z,{badgeContent:4,color:"warning",children:(0,n.jsx)(l.Z,{src:"/images/avatars/8.png",alt:"User Avatar"})}),(0,n.jsx)(o.Z,{badgeContent:4,color:"info",children:(0,n.jsx)(l.Z,{src:"/images/avatars/8.png",alt:"User Avatar"})})]});var g=e(90948),m=e(69600);let p=(0,g.ZP)("div")(a=>{let{theme:r}=a;return{"& > *":{marginRight:"".concat(r.spacing(6)," !important")}}}),x=()=>(0,n.jsxs)(p,{className:"demo-space-x",children:[(0,n.jsx)(m.Z,{skin:"light",color:"primary",badgeContent:4,children:(0,n.jsx)(l.Z,{src:"/images/avatars/8.png",alt:"User Avatar"})}),(0,n.jsx)(m.Z,{skin:"light",color:"secondary",badgeContent:4,children:(0,n.jsx)(l.Z,{src:"/images/avatars/8.png",alt:"User Avatar"})}),(0,n.jsx)(m.Z,{skin:"light",color:"success",badgeContent:4,children:(0,n.jsx)(l.Z,{src:"/images/avatars/8.png",alt:"User Avatar"})}),(0,n.jsx)(m.Z,{skin:"light",color:"error",badgeContent:4,children:(0,n.jsx)(l.Z,{src:"/images/avatars/8.png",alt:"User Avatar"})}),(0,n.jsx)(m.Z,{skin:"light",color:"warning",badgeContent:4,children:(0,n.jsx)(l.Z,{src:"/images/avatars/8.png",alt:"User Avatar"})}),(0,n.jsx)(m.Z,{skin:"light",color:"info",badgeContent:4,children:(0,n.jsx)(l.Z,{src:"/images/avatars/8.png",alt:"User Avatar"})})]}),v=(0,g.ZP)("div")(a=>{let{theme:r}=a;return{"& > *":{marginRight:"".concat(r.spacing(6)," !important")}}}),h=()=>(0,n.jsxs)(v,{className:"demo-space-x",children:[(0,n.jsx)(o.Z,{color:"primary",badgeContent:" ",children:(0,n.jsx)(l.Z,{src:"/images/avatars/8.png",alt:"User Avatar",variant:"square"})}),(0,n.jsx)(o.Z,{color:"primary",variant:"dot",children:(0,n.jsx)(l.Z,{src:"/images/avatars/8.png",alt:"User Avatar",variant:"square"})}),(0,n.jsx)(o.Z,{color:"primary",overlap:"circular",badgeContent:" ",children:(0,n.jsx)(l.Z,{src:"/images/avatars/8.png",alt:"User Avatar"})}),(0,n.jsx)(o.Z,{color:"primary",overlap:"circular",variant:"dot",children:(0,n.jsx)(l.Z,{src:"/images/avatars/8.png",alt:"User Avatar"})})]}),u=(0,g.ZP)("div")(a=>{let{theme:r}=a;return{"& > *":{marginRight:"".concat(r.spacing(6)," !important")}}}),j=()=>(0,n.jsxs)(u,{className:"demo-space-x",children:[(0,n.jsx)(o.Z,{badgeContent:99,color:"primary",children:(0,n.jsx)(l.Z,{src:"/images/avatars/8.png",alt:"User Avatar"})}),(0,n.jsx)(o.Z,{badgeContent:100,color:"primary",children:(0,n.jsx)(l.Z,{src:"/images/avatars/8.png",alt:"User Avatar"})}),(0,n.jsx)(o.Z,{badgeContent:1e3,max:999,color:"primary",children:(0,n.jsx)(l.Z,{src:"/images/avatars/8.png",alt:"User Avatar"})})]}),Z=()=>(0,n.jsxs)("div",{className:"demo-space-x",children:[(0,n.jsx)(o.Z,{color:"primary",variant:"dot",children:(0,n.jsx)(l.Z,{src:"/images/avatars/8.png",alt:"User Avatar"})}),(0,n.jsx)(o.Z,{color:"primary",variant:"dot",anchorOrigin:{vertical:"bottom",horizontal:"right"},children:(0,n.jsx)(l.Z,{src:"/images/avatars/8.png",alt:"User Avatar"})}),(0,n.jsx)(o.Z,{color:"primary",variant:"dot",anchorOrigin:{vertical:"bottom",horizontal:"left"},children:(0,n.jsx)(l.Z,{src:"/images/avatars/8.png",alt:"User Avatar"})}),(0,n.jsx)(o.Z,{color:"primary",variant:"dot",anchorOrigin:{vertical:"top",horizontal:"left"},children:(0,n.jsx)(l.Z,{src:"/images/avatars/8.png",alt:"User Avatar"})})]});var B=e(67294),b=e(72852),A=e(11057),y=e(56863),f=e(50480),C=e(79878);let U=(0,g.ZP)("div")(a=>{let{theme:r}=a;return{display:"flex",alignItems:"center","& > *":{marginRight:"".concat(r.spacing(6)," !important")}}}),N=()=>{let[a,r]=(0,B.useState)(1),[e,t]=(0,B.useState)(!1),s=()=>{t(!e)};return(0,n.jsxs)(B.Fragment,{children:[(0,n.jsxs)(U,{className:"demo-space-x",children:[(0,n.jsx)(o.Z,{badgeContent:a,color:"primary",children:(0,n.jsx)(l.Z,{src:"/images/avatars/8.png",alt:"User Avatar"})}),(0,n.jsxs)(y.Z,{size:"small",children:[(0,n.jsx)(A.Z,{"aria-label":"reduce",onClick:()=>r(Math.max(a-1,0)),children:(0,n.jsx)(C.Z,{icon:"tabler:minus",fontSize:20})}),(0,n.jsx)(A.Z,{"aria-label":"increase",onClick:()=>r(a+1),children:(0,n.jsx)(C.Z,{icon:"tabler:plus",fontSize:20})})]})]}),(0,n.jsxs)(U,{className:"demo-space-x",children:[(0,n.jsx)(o.Z,{variant:"dot",color:"primary",invisible:e,children:(0,n.jsx)(l.Z,{src:"/images/avatars/8.png",alt:"User Avatar"})}),(0,n.jsx)(f.Z,{label:"Show Badge",control:(0,n.jsx)(b.Z,{color:"primary",checked:!e,onChange:s})})]})]})},I=(0,n.jsx)("pre",{className:"language-jsx",children:(0,n.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Badge from '@mui/material/Badge'\nimport Avatar from '@mui/material/Avatar'\n\nconst BadgesAlignment = () => {\n  return (\n    <div className='demo-space-x'>\n      <Badge color='primary' variant='dot'>\n        <Avatar src='/images/avatars/8.png' alt='User Avatar' />\n      </Badge>\n      <Badge color='primary' variant='dot' anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>\n        <Avatar src='/images/avatars/8.png' alt='User Avatar' />\n      </Badge>\n      <Badge color='primary' variant='dot' anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>\n        <Avatar src='/images/avatars/8.png' alt='User Avatar' />\n      </Badge>\n      <Badge color='primary' variant='dot' anchorOrigin={{ vertical: 'top', horizontal: 'left' }}>\n        <Avatar src='/images/avatars/8.png' alt='User Avatar' />\n      </Badge>\n    </div>\n  )\n}\n\nexport default BadgesAlignment\n"})}),S=(0,n.jsx)("pre",{className:"language-jsx",children:(0,n.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Avatar from '@mui/material/Avatar'\nimport { styled } from '@mui/material/styles'\n\n// ** Custom Components Imports\nimport CustomBadge from 'src/@core/components/mui/badge'\n\n// Styled component for a wrapper\nconst Wrapper = styled('div')(({ theme }) => ({\n  '& > *': {\n    marginRight: {theme.spacing(6)} !important\n  }\n}))\n\nconst BadgesLight = () => {\n  return (\n    <Wrapper className='demo-space-x'>\n      <CustomBadge skin='light' color='primary' badgeContent={4}>\n        <Avatar src='/images/avatars/8.png' alt='User Avatar' />\n      </CustomBadge>\n      <CustomBadge skin='light' color='secondary' badgeContent={4}>\n        <Avatar src='/images/avatars/8.png' alt='User Avatar' />\n      </CustomBadge>\n      <CustomBadge skin='light' color='success' badgeContent={4}>\n        <Avatar src='/images/avatars/8.png' alt='User Avatar' />\n      </CustomBadge>\n      <CustomBadge skin='light' color='error' badgeContent={4}>\n        <Avatar src='/images/avatars/8.png' alt='User Avatar' />\n      </CustomBadge>\n      <CustomBadge skin='light' color='warning' badgeContent={4}>\n        <Avatar src='/images/avatars/8.png' alt='User Avatar' />\n      </CustomBadge>\n      <CustomBadge skin='light' color='info' badgeContent={4}>\n        <Avatar src='/images/avatars/8.png' alt='User Avatar' />\n      </CustomBadge>\n    </Wrapper>\n  )\n}\n\nexport default BadgesLight\n"})}),k=(0,n.jsx)("pre",{className:"language-jsx",children:(0,n.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Badge from '@mui/material/Badge'\nimport Avatar from '@mui/material/Avatar'\n\nconst BadgesBasic = () => {\n  return (\n    <div className='demo-space-x'>\n      <Badge badgeContent={4} color='primary'>\n        <Avatar src='/images/avatars/8.png' alt='User Avatar' />\n      </Badge>\n      <Badge badgeContent={4} color='secondary'>\n        <Avatar src='/images/avatars/8.png' alt='User Avatar' />\n      </Badge>\n      <Badge badgeContent={4} color='success'>\n        <Avatar src='/images/avatars/8.png' alt='User Avatar' />\n      </Badge>\n      <Badge badgeContent={4} color='error'>\n        <Avatar src='/images/avatars/8.png' alt='User Avatar' />\n      </Badge>\n      <Badge badgeContent={4} color='warning'>\n        <Avatar src='/images/avatars/8.png' alt='User Avatar' />\n      </Badge>\n      <Badge badgeContent={4} color='info'>\n        <Avatar src='/images/avatars/8.png' alt='User Avatar' />\n      </Badge>\n    </div>\n  )\n}\n\nexport default BadgesBasic\n"})}),w=(0,n.jsx)("pre",{className:"language-jsx",children:(0,n.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Badge from '@mui/material/Badge'\nimport Avatar from '@mui/material/Avatar'\nimport { styled } from '@mui/material/styles'\n\n// Styled component for the wrapper\nconst Wrapper = styled('div')(({ theme }) => ({\n  '& > *': {\n    marginRight: {theme.spacing(6)} !important\n  }\n}))\n\nconst BadgesMaxValue = () => {\n  return (\n    <Wrapper className='demo-space-x'>\n      <Badge badgeContent={99} color='primary'>\n        <Avatar src='/images/avatars/8.png' alt='User Avatar' />\n      </Badge>\n      <Badge badgeContent={100} color='primary'>\n        <Avatar src='/images/avatars/8.png' alt='User Avatar' />\n      </Badge>\n      <Badge badgeContent={1000} max={999} color='primary'>\n        <Avatar src='/images/avatars/8.png' alt='User Avatar' />\n      </Badge>\n    </Wrapper>\n  )\n}\n\nexport default BadgesMaxValue\n"})}),z=(0,n.jsx)("pre",{className:"language-jsx",children:(0,n.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Badge from '@mui/material/Badge'\nimport Avatar from '@mui/material/Avatar'\nimport { styled } from '@mui/material/styles'\n\n// Styled component for the wrapper\nconst Wrapper = styled('div')(({ theme }) => ({\n  '& > *': {\n    marginRight: {theme.spacing(6)} !important\n  }\n}))\n\nconst BadgesOverlap = () => {\n  return (\n    <Wrapper className='demo-space-x'>\n      <Badge color='primary' badgeContent=' '>\n        <Avatar src='/images/avatars/8.png' alt='User Avatar' variant='square' />\n      </Badge>\n      <Badge color='primary' variant='dot'>\n        <Avatar src='/images/avatars/8.png' alt='User Avatar' variant='square' />\n      </Badge>\n      <Badge color='primary' overlap='circular' badgeContent=' '>\n        <Avatar src='/images/avatars/8.png' alt='User Avatar' />\n      </Badge>\n      <Badge color='primary' overlap='circular' variant='dot'>\n        <Avatar src='/images/avatars/8.png' alt='User Avatar' />\n      </Badge>\n    </Wrapper>\n  )\n}\n\nexport default BadgesOverlap\n"})}),P=(0,n.jsx)("pre",{className:"language-jsx",children:(0,n.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState, Fragment } from 'react'\n\n// ** MUI Imports\nimport Badge from '@mui/material/Badge'\nimport Switch from '@mui/material/Switch'\nimport Button from '@mui/material/Button'\nimport Avatar from '@mui/material/Avatar'\nimport { styled } from '@mui/material/styles'\nimport ButtonGroup from '@mui/material/ButtonGroup'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\n// ** Icon Imports\nimport Icon from 'src/@core/components/icon'\n\n// Styled component for a wrapper\nconst Wrapper = styled('div')(({ theme }) => ({\n  display: 'flex',\n  alignItems: 'center',\n  '& > *': {\n    marginRight: {theme.spacing(6)} !important\n  }\n}))\n\nconst BadgesVisibility = () => {\n  // ** States\n  const [count, setCount] = useState(1)\n  const [invisible, setInvisible] = useState(false)\n\n  const handleBadgeVisibility = () => {\n    setInvisible(!invisible)\n  }\n\n  return (\n    <Fragment>\n      <Wrapper className='demo-space-x'>\n        <Badge badgeContent={count} color='primary'>\n          <Avatar src='/images/avatars/8.png' alt='User Avatar' />\n        </Badge>\n        <ButtonGroup size='small'>\n          <Button aria-label='reduce' onClick={() => setCount(Math.max(count - 1, 0))}>\n            <Icon icon='tabler:minus' fontSize={20} />\n          </Button>\n          <Button aria-label='increase' onClick={() => setCount(count + 1)}>\n            <Icon icon='tabler:plus' fontSize={20} />\n          </Button>\n        </ButtonGroup>\n      </Wrapper>\n\n      <Wrapper className='demo-space-x'>\n        <Badge variant='dot' color='primary' invisible={invisible}>\n          <Avatar src='/images/avatars/8.png' alt='User Avatar' />\n        </Badge>\n        <FormControlLabel\n          label='Show Badge'\n          control={<Switch color='primary' checked={!invisible} onChange={handleBadgeVisibility} />}\n        />\n      </Wrapper>\n    </Fragment>\n  )\n}\n\nexport default BadgesVisibility\n"})}),O=(0,n.jsx)("pre",{className:"language-jsx",children:(0,n.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Badge from '@mui/material/Badge'\nimport Avatar from '@mui/material/Avatar'\nimport Typography from '@mui/material/Typography'\n\nconst BadgesDot = () => {\n  return (\n    <div className='demo-space-x'>\n      <Badge variant='dot' color='primary'>\n        <Avatar src='/images/avatars/8.png' alt='User Avatar' />\n      </Badge>\n      <Badge variant='dot' color='secondary'>\n        <Avatar src='/images/avatars/8.png' alt='User Avatar' />\n      </Badge>\n      <Badge variant='dot' color='error'>\n        <Typography>Typography</Typography>\n      </Badge>\n    </div>\n  )\n}\n\nexport default BadgesDot\n"})}),M=()=>(0,n.jsxs)(t.ZP,{container:!0,spacing:6,className:"match-height",children:[(0,n.jsx)(t.ZP,{item:!0,xs:12,md:6,children:(0,n.jsxs)(i.Z,{title:"Simple Badges",code:{tsx:null,jsx:k},children:[(0,n.jsxs)(s.Z,{sx:{mb:2},children:["Use ",(0,n.jsx)("code",{children:"badgeContent"})," prop for the text inside the badge and ",(0,n.jsx)("code",{children:"color"})," prop for different colors of a badge."]}),(0,n.jsx)(d,{})]})}),(0,n.jsx)(t.ZP,{item:!0,xs:12,md:6,children:(0,n.jsxs)(i.Z,{title:"Dot Badges",code:{tsx:null,jsx:O},children:[(0,n.jsxs)(s.Z,{sx:{mb:2},children:["Use ",(0,n.jsx)("code",{children:"variant='dot'"})," prop for dot badges."]}),(0,n.jsx)(c,{})]})}),(0,n.jsx)(t.ZP,{item:!0,xs:12,md:6,children:(0,n.jsxs)(i.Z,{title:"Badge Alignment",code:{tsx:null,jsx:I},children:[(0,n.jsxs)(s.Z,{sx:{mb:2},children:["Use ",(0,n.jsx)("code",{children:"anchorOrigin"})," prop to move the badge to any corner of the wrapped element."]}),(0,n.jsx)(Z,{})]})}),(0,n.jsx)(t.ZP,{item:!0,xs:12,md:6,children:(0,n.jsxs)(i.Z,{title:"Maximum Value",code:{tsx:null,jsx:w},children:[(0,n.jsxs)(s.Z,{sx:{mb:2},children:["Use ",(0,n.jsx)("code",{children:"max"})," prop to cap the value of the badge content."]}),(0,n.jsx)(j,{})]})}),(0,n.jsx)(t.ZP,{item:!0,xs:12,md:6,children:(0,n.jsxs)(i.Z,{title:"Badge Overlap",code:{tsx:null,jsx:z},children:[(0,n.jsxs)(s.Z,{sx:{mb:2},children:["Use ",(0,n.jsx)("code",{children:"overlap"})," prop to place the badge relative to the corner of the wrapped element."]}),(0,n.jsx)(h,{})]})}),(0,n.jsx)(t.ZP,{item:!0,xs:12,md:6,children:(0,n.jsxs)(i.Z,{title:"Badge visibility",code:{tsx:null,jsx:P},children:[(0,n.jsxs)(s.Z,{sx:{mb:2},children:["The visibility of badges can be controlled using ",(0,n.jsx)("code",{children:"invisible"})," prop."]}),(0,n.jsx)(N,{})]})}),(0,n.jsx)(t.ZP,{item:!0,xs:12,children:(0,n.jsxs)(i.Z,{title:"Custom Light Badges",code:{tsx:null,jsx:S},children:[(0,n.jsxs)(s.Z,{sx:{mb:2},children:["If you want to use light variant of the badges, you need to use our custom component with"," ",(0,n.jsx)("code",{children:"skin='light'"})," prop."]}),(0,n.jsx)(x,{})]})})]});var W=M}},function(a){a.O(0,[5511,5066,9774,2888,179],function(){return a(a.s=86456)}),_N_E=a.O()}]);