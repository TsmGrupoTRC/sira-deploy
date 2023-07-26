(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6316],{66485:function(e){function a(){return new DOMException("The request is not allowed","NotAllowedError")}async function n(e){if(!navigator.clipboard)throw a();return navigator.clipboard.writeText(e)}async function l(e){let n=document.createElement("span");n.textContent=e,n.style.whiteSpace="pre",n.style.webkitUserSelect="auto",n.style.userSelect="all",document.body.appendChild(n);let l=window.getSelection(),s=window.document.createRange();l.removeAllRanges(),s.selectNode(n),l.addRange(s);let r=!1;try{r=window.document.execCommand("copy")}finally{l.removeAllRanges(),window.document.body.removeChild(n)}if(!r)throw a()}async function s(e){try{await n(e)}catch(n){try{await l(e)}catch(e){throw e||n||a()}}}/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */e.exports=s},7804:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tabs",function(){return n(38302)}])},93682:function(e,a,n){"use strict";n.d(a,{Z:function(){return Z}});var l=n(85893),s=n(67294),r=n(87357),c=n(66242),t=n(34386),o=n(67720),i=n(57922),u=n(93946),p=n(78445),b=n(44267),h=n(96420),m=n(98396),d=n(33454),T=n(79878),x=n(15660),j=n.n(x),y=n(86501),g=n(66485),v=n.n(g);let C=e=>e&&("TEXTAREA"===e.nodeName||"INPUT"===e.nodeName);var k=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=(0,s.useRef)(null),n=()=>{e.onSuccess&&e.onSuccess(),e.selectOnCopy&&C(a.current)&&a.current.select()},l=()=>{e.onError&&e.onError();let n=!1!==e.selectOnError;n&&C(a.current)&&a.current.select()},r=e=>{v()(e).then(n).catch(l)},c=(0,s.useCallback)(e=>{"string"==typeof e?r(e):a.current&&r(a.current.value)},[]);return{copy:c,target:a}};let f=e=>{let{id:a,sx:n,code:x,title:g,children:v,className:C}=e,[f,Z]=(0,s.useState)(!1),[w,P]=(0,s.useState)(null!==x.tsx?"tsx":"jsx"),S=k(),L=(0,m.Z)(e=>e.breakpoints.down("md"));(0,s.useEffect)(()=>{j().highlightAll()},[f,w]);let I=()=>null!==x.tsx&&"tsx"===w?x.tsx.props.children.props.children:null!==x.jsx&&"jsx"===w?x.jsx.props.children.props.children:"",M=()=>{S.copy(I()),y.ZP.success("The source code has been copied to your clipboard.",{duration:2e3})};return(0,l.jsxs)(c.Z,{className:C,sx:{"& .MuiCardHeader-action":{lineHeight:.8},...n},id:a||"card-snippet--".concat(g.toLowerCase().replace(/ /g,"-")),children:[(0,l.jsx)(p.Z,{title:g,...L?{}:{action:(0,l.jsx)(u.Z,{onClick:()=>Z(!f),children:(0,l.jsx)(T.Z,{icon:"tabler:code",fontSize:20})})}}),(0,l.jsx)(b.Z,{children:v}),L?null:(0,l.jsxs)(i.Z,{in:f,children:[(0,l.jsx)(o.Z,{sx:{my:"0 !important"}}),(0,l.jsxs)(b.Z,{sx:{position:"relative","& pre":{m:"0 !important",maxHeight:500}},children:[(0,l.jsx)(r.Z,{sx:{mb:4,display:"flex",alignItems:"center",justifyContent:"flex-end"},children:(0,l.jsxs)(d.Z,{exclusive:!0,size:"small",color:"primary",value:w,onChange:(e,a)=>null!==a?P(a):null,children:[null!==x.tsx?(0,l.jsx)(h.Z,{value:"tsx",children:(0,l.jsx)(T.Z,{icon:"tabler:brand-typescript",fontSize:20})}):null,null!==x.jsx?(0,l.jsx)(h.Z,{value:"jsx",children:(0,l.jsx)(T.Z,{icon:"tabler:brand-javascript",fontSize:20})}):null]})}),(0,l.jsx)(t.Z,{title:"Copy the source",placement:"top",children:(0,l.jsx)(u.Z,{onClick:M,sx:{top:"5rem",color:"grey.100",right:"2.5625rem",position:"absolute"},children:(0,l.jsx)(T.Z,{icon:"tabler:copy",fontSize:20})})}),(0,l.jsx)("div",{children:null!==x[w]?x[w]:null})]})]})]})};var Z=f},38302:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return z}});var l=n(85893),s=n(86886),r=n(15861),c=n(93682),t=n(67294),o=n(40044),i=n(30298),u=n(55050),p=n(45670);let b=()=>{let[e,a]=(0,t.useState)("1"),n=(e,n)=>{a(n)};return(0,l.jsxs)(p.ZP,{value:e,children:[(0,l.jsxs)(i.Z,{onChange:n,"aria-label":"nav tabs example",children:[(0,l.jsx)(o.Z,{value:"1",component:"a",label:"Tab 1",href:"/drafts",onClick:e=>e.preventDefault()}),(0,l.jsx)(o.Z,{value:"2",component:"a",label:"Tab 2",href:"/trash",onClick:e=>e.preventDefault()}),(0,l.jsx)(o.Z,{value:"3",component:"a",label:"Tab 3",href:"/spam",onClick:e=>e.preventDefault()})]}),(0,l.jsx)(u.Z,{value:"1",children:(0,l.jsx)(r.Z,{children:"Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer jelly cake caramels brownie gummies."})}),(0,l.jsx)(u.Z,{value:"2",children:(0,l.jsx)(r.Z,{children:"Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups sesame snaps halvah."})}),(0,l.jsx)(u.Z,{value:"3",children:(0,l.jsx)(r.Z,{children:"Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll carrot cake gummi bears."})})]})};var h=n(79878);let m=()=>{let[e,a]=(0,t.useState)("1"),n=(e,n)=>{a(n)};return(0,l.jsxs)(p.ZP,{value:e,children:[(0,l.jsxs)(i.Z,{onChange:n,"aria-label":"icon tabs example",children:[(0,l.jsx)(o.Z,{value:"1",label:"Recent",icon:(0,l.jsx)(h.Z,{icon:"tabler:phone"})}),(0,l.jsx)(o.Z,{value:"2",label:"Favorites",icon:(0,l.jsx)(h.Z,{icon:"tabler:heart"})}),(0,l.jsx)(o.Z,{value:"3",label:"Contacts",icon:(0,l.jsx)(h.Z,{icon:"tabler:user"})})]}),(0,l.jsx)(u.Z,{value:"1",children:(0,l.jsx)(r.Z,{children:"Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer jelly cake caramels brownie gummies."})}),(0,l.jsx)(u.Z,{value:"2",children:(0,l.jsx)(r.Z,{children:"Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups sesame snaps halvah."})}),(0,l.jsx)(u.Z,{value:"3",children:(0,l.jsx)(r.Z,{children:"Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll carrot cake gummi bears."})})]})},d=()=>{let[e,a]=(0,t.useState)("1"),n=(e,n)=>{a(n)};return(0,l.jsxs)(p.ZP,{value:e,children:[(0,l.jsxs)(i.Z,{textColor:"secondary",onChange:n,indicatorColor:"secondary","aria-label":"secondary tabs example",children:[(0,l.jsx)(o.Z,{value:"1",label:"Tab 1"}),(0,l.jsx)(o.Z,{value:"2",label:"Tab 2"}),(0,l.jsx)(o.Z,{disabled:!0,value:"3",label:"Disabled"})]}),(0,l.jsx)(u.Z,{value:"1",children:(0,l.jsx)(r.Z,{children:"Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer jelly cake caramels brownie gummies."})}),(0,l.jsx)(u.Z,{value:"2",children:(0,l.jsx)(r.Z,{children:"Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups sesame snaps halvah."})}),(0,l.jsx)(u.Z,{value:"3",children:(0,l.jsx)(r.Z,{children:"Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll carrot cake gummi bears."})})]})},T=()=>{let[e,a]=(0,t.useState)("1"),n=(e,n)=>{a(n)};return(0,l.jsxs)(p.ZP,{value:e,children:[(0,l.jsxs)(i.Z,{onChange:n,"aria-label":"simple tabs example",children:[(0,l.jsx)(o.Z,{value:"1",label:"Tab 1"}),(0,l.jsx)(o.Z,{value:"2",label:"Tab 2"}),(0,l.jsx)(o.Z,{disabled:!0,value:"3",label:"Disabled"})]}),(0,l.jsx)(u.Z,{value:"1",children:(0,l.jsx)(r.Z,{children:"Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer jelly cake caramels brownie gummies."})}),(0,l.jsx)(u.Z,{value:"2",children:(0,l.jsx)(r.Z,{children:"Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups sesame snaps halvah."})}),(0,l.jsx)(u.Z,{value:"3",children:(0,l.jsx)(r.Z,{children:"Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll carrot cake gummi bears."})})]})},x=()=>{let[e,a]=(0,t.useState)("1"),n=(e,n)=>{a(n)};return(0,l.jsxs)(p.ZP,{value:e,children:[(0,l.jsxs)(i.Z,{centered:!0,onChange:n,"aria-label":"centered tabs example",children:[(0,l.jsx)(o.Z,{value:"1",label:"Tab 1"}),(0,l.jsx)(o.Z,{value:"2",label:"Tab 2"}),(0,l.jsx)(o.Z,{value:"3",label:"Tab 3"})]}),(0,l.jsx)(u.Z,{value:"1",children:(0,l.jsx)(r.Z,{children:"Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer jelly cake caramels brownie gummies."})}),(0,l.jsx)(u.Z,{value:"2",children:(0,l.jsx)(r.Z,{children:"Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups sesame snaps halvah."})}),(0,l.jsx)(u.Z,{value:"3",children:(0,l.jsx)(r.Z,{children:"Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll carrot cake gummi bears."})})]})};var j=n(87357);let y=()=>{let[e,a]=(0,t.useState)("1"),n=(e,n)=>{a(n)};return(0,l.jsx)(p.ZP,{value:e,children:(0,l.jsxs)(j.Z,{sx:{display:"flex"},children:[(0,l.jsxs)(i.Z,{orientation:"vertical",onChange:n,"aria-label":"vertical tabs example",children:[(0,l.jsx)(o.Z,{value:"1",label:"Tab 1"}),(0,l.jsx)(o.Z,{value:"2",label:"Tab 2"}),(0,l.jsx)(o.Z,{value:"3",label:"Tab 3"})]}),(0,l.jsx)(u.Z,{value:"1",children:(0,l.jsx)(r.Z,{children:"Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer jelly cake caramels brownie gummies."})}),(0,l.jsx)(u.Z,{value:"2",children:(0,l.jsx)(r.Z,{children:"Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups sesame snaps halvah."})}),(0,l.jsx)(u.Z,{value:"3",children:(0,l.jsx)(r.Z,{children:"Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll carrot cake gummi bears."})})]})})},g=()=>{let[e,a]=(0,t.useState)("1"),n=(e,n)=>{a(n)};return(0,l.jsxs)(p.ZP,{value:e,children:[(0,l.jsxs)(i.Z,{variant:"fullWidth",onChange:n,"aria-label":"full width tabs example",children:[(0,l.jsx)(o.Z,{value:"1",label:"Tab 1"}),(0,l.jsx)(o.Z,{value:"2",label:"Tab 2"}),(0,l.jsx)(o.Z,{value:"3",label:"Tab 3"})]}),(0,l.jsx)(u.Z,{value:"1",children:(0,l.jsx)(r.Z,{children:"Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer jelly cake caramels brownie gummies."})}),(0,l.jsx)(u.Z,{value:"2",children:(0,l.jsx)(r.Z,{children:"Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups sesame snaps halvah."})}),(0,l.jsx)(u.Z,{value:"3",children:(0,l.jsx)(r.Z,{children:"Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll carrot cake gummi bears."})})]})};var v=n(90948);let C=(0,v.ZP)(i.Z)(e=>{let{theme:a}=e;return{borderBottom:"0 !important","& .MuiTabs-indicator":{display:"none"},"& .Mui-selected":{backgroundColor:a.palette.primary.main,color:"".concat(a.palette.common.white," !important")},"& .MuiTab-root":{lineHeight:1,borderRadius:a.shape.borderRadius}}}),k=()=>{let[e,a]=(0,t.useState)("1"),n=(e,n)=>{a(n)};return(0,l.jsxs)(p.ZP,{value:e,children:[(0,l.jsxs)(C,{onChange:n,"aria-label":"customized tabs example",children:[(0,l.jsx)(o.Z,{value:"1",label:"Tab 1"}),(0,l.jsx)(o.Z,{value:"2",label:"Tab 2"}),(0,l.jsx)(o.Z,{value:"3",label:"Tab 3"})]}),(0,l.jsx)(u.Z,{value:"1",children:(0,l.jsx)(r.Z,{children:"Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer jelly cake caramels brownie gummies."})}),(0,l.jsx)(u.Z,{value:"2",children:(0,l.jsx)(r.Z,{children:"Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups sesame snaps halvah."})}),(0,l.jsx)(u.Z,{value:"3",children:(0,l.jsx)(r.Z,{children:"Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll carrot cake gummi bears."})})]})},f=()=>{let[e,a]=(0,t.useState)("1"),n=(e,n)=>{a(n)};return(0,l.jsxs)(p.ZP,{value:e,children:[(0,l.jsxs)(i.Z,{scrollButtons:!0,variant:"scrollable",onChange:n,"aria-label":"forced scroll tabs example",children:[(0,l.jsx)(o.Z,{value:"1",label:"Tab 1",icon:(0,l.jsx)(h.Z,{icon:"tabler:phone"})}),(0,l.jsx)(o.Z,{value:"2",label:"Tab 2",icon:(0,l.jsx)(h.Z,{icon:"tabler:heart"})}),(0,l.jsx)(o.Z,{value:"3",label:"Tab 3",icon:(0,l.jsx)(h.Z,{icon:"tabler:thumb-up"})}),(0,l.jsx)(o.Z,{value:"4",label:"Tab 4",icon:(0,l.jsx)(h.Z,{icon:"tabler:user"})}),(0,l.jsx)(o.Z,{value:"5",label:"Tab 5",icon:(0,l.jsx)(h.Z,{icon:"tabler:thumb-down"})})]}),(0,l.jsx)(u.Z,{value:"1",children:(0,l.jsx)(r.Z,{children:"Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer jelly cake caramels brownie gummies."})}),(0,l.jsx)(u.Z,{value:"2",children:(0,l.jsx)(r.Z,{children:"Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups sesame snaps halvah."})}),(0,l.jsx)(u.Z,{value:"3",children:(0,l.jsx)(r.Z,{children:"Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll carrot cake gummi bears."})}),(0,l.jsx)(u.Z,{value:"4",children:(0,l.jsx)(r.Z,{children:"Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer jelly cake caramels brownie gummies."})}),(0,l.jsx)(u.Z,{value:"5",children:(0,l.jsx)(r.Z,{children:"Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups sesame snaps halvah."})})]})},Z=(0,v.ZP)(i.Z)(e=>{let{theme:a}=e;return{borderRight:0,"& .MuiTabs-indicator":{display:"none"},"& .Mui-selected":{backgroundColor:a.palette.primary.main,color:"".concat(a.palette.common.white," !important")},"& .MuiTab-root":{lineHeight:1,margin:a.spacing(.5,0),borderRadius:a.shape.borderRadius}}}),w=()=>{let[e,a]=(0,t.useState)("1"),n=(e,n)=>{a(n)};return(0,l.jsx)(p.ZP,{value:e,children:(0,l.jsxs)(j.Z,{sx:{display:"flex"},children:[(0,l.jsxs)(Z,{orientation:"vertical",onChange:n,"aria-label":"customized vertical tabs example",children:[(0,l.jsx)(o.Z,{value:"1",label:"Tab 1"}),(0,l.jsx)(o.Z,{value:"2",label:"Tab 2"}),(0,l.jsx)(o.Z,{value:"3",label:"Tab 3"})]}),(0,l.jsx)(u.Z,{value:"1",children:(0,l.jsx)(r.Z,{children:"Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer jelly cake caramels brownie gummies."})}),(0,l.jsx)(u.Z,{value:"2",children:(0,l.jsx)(r.Z,{children:"Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups sesame snaps halvah."})}),(0,l.jsx)(u.Z,{value:"3",children:(0,l.jsx)(r.Z,{children:"Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll carrot cake gummi bears."})})]})})},P=(0,l.jsx)("pre",{className:"language-jsx",children:(0,l.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Tab from '@mui/material/Tab'\nimport TabList from '@mui/lab/TabList'\nimport TabPanel from '@mui/lab/TabPanel'\nimport TabContext from '@mui/lab/TabContext'\nimport Typography from '@mui/material/Typography'\n\nconst TabsCentered = () => {\n  // ** State\n  const [value, setValue] = useState('1')\n\n  const handleChange = (event, newValue) => {\n    setValue(newValue)\n  }\n\n  return (\n    <TabContext value={value}>\n      <TabList centered onChange={handleChange} aria-label='centered tabs example'>\n        <Tab value='1' label='Tab 1' />\n        <Tab value='2' label='Tab 2' />\n        <Tab value='3' label='Tab 3' />\n      </TabList>\n      <TabPanel value='1'>\n        <Typography>\n          Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer jelly\n          cake caramels brownie gummies.\n        </Typography>\n      </TabPanel>\n      <TabPanel value='2'>\n        <Typography>\n          Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups\n          sesame snaps halvah.\n        </Typography>\n      </TabPanel>\n      <TabPanel value='3'>\n        <Typography>\n          Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll\n          carrot cake gummi bears.\n        </Typography>\n      </TabPanel>\n    </TabContext>\n  )\n}\n\nexport default TabsCentered\n"})}),S=(0,l.jsx)("pre",{className:"language-jsx",children:(0,l.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Tab from '@mui/material/Tab'\nimport TabPanel from '@mui/lab/TabPanel'\nimport TabContext from '@mui/lab/TabContext'\nimport { styled } from '@mui/material/styles'\nimport Typography from '@mui/material/Typography'\nimport MuiTabList from '@mui/lab/TabList'\n\n// Styled TabList component\nconst TabList = styled(MuiTabList)(({ theme }) => ({\n  borderBottom: '0 !important',\n  '& .MuiTabs-indicator': {\n    display: 'none'\n  },\n  '& .Mui-selected': {\n    backgroundColor: theme.palette.primary.main,\n    color: {theme.palette.common.white} !important\n  },\n  '& .MuiTab-root': {\n    lineHeight: 1,\n    borderRadius: theme.shape.borderRadius\n  }\n}))\n\nconst TabsCustomized = () => {\n  // ** State\n  const [value, setValue] = useState('1')\n\n  const handleChange = (event, newValue) => {\n    setValue(newValue)\n  }\n\n  return (\n    <TabContext value={value}>\n      <TabList onChange={handleChange} aria-label='customized tabs example'>\n        <Tab value='1' label='Tab 1' />\n        <Tab value='2' label='Tab 2' />\n        <Tab value='3' label='Tab 3' />\n      </TabList>\n      <TabPanel value='1'>\n        <Typography>\n          Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer jelly\n          cake caramels brownie gummies.\n        </Typography>\n      </TabPanel>\n      <TabPanel value='2'>\n        <Typography>\n          Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups\n          sesame snaps halvah.\n        </Typography>\n      </TabPanel>\n      <TabPanel value='3'>\n        <Typography>\n          Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll\n          carrot cake gummi bears.\n        </Typography>\n      </TabPanel>\n    </TabContext>\n  )\n}\n\nexport default TabsCustomized\n"})}),L=(0,l.jsx)("pre",{className:"language-jsx",children:(0,l.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Box from '@mui/material/Box'\nimport Tab from '@mui/material/Tab'\nimport TabPanel from '@mui/lab/TabPanel'\nimport TabContext from '@mui/lab/TabContext'\nimport { styled } from '@mui/material/styles'\nimport Typography from '@mui/material/Typography'\nimport MuiTabList from '@mui/lab/TabList'\n\n// Styled TabList component\nconst TabList = styled(MuiTabList)(({ theme }) => ({\n  borderRight: 0,\n  '& .MuiTabs-indicator': {\n    display: 'none'\n  },\n  '& .Mui-selected': {\n    backgroundColor: theme.palette.primary.main,\n    color: {theme.palette.common.white} !important\n  },\n  '& .MuiTab-root': {\n    lineHeight: 1,\n    margin: theme.spacing(0.5, 0),\n    borderRadius: theme.shape.borderRadius\n  }\n}))\n\nconst TabsCustomizedVertical = () => {\n  // ** State\n  const [value, setValue] = useState('1')\n\n  const handleChange = (event, newValue) => {\n    setValue(newValue)\n  }\n\n  return (\n    <TabContext value={value}>\n      <Box sx={{ display: 'flex' }}>\n        <TabList orientation='vertical' onChange={handleChange} aria-label='customized vertical tabs example'>\n          <Tab value='1' label='Tab 1' />\n          <Tab value='2' label='Tab 2' />\n          <Tab value='3' label='Tab 3' />\n        </TabList>\n        <TabPanel value='1'>\n          <Typography>\n            Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer\n            jelly cake caramels brownie gummies.\n          </Typography>\n        </TabPanel>\n        <TabPanel value='2'>\n          <Typography>\n            Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups\n            sesame snaps halvah.\n          </Typography>\n        </TabPanel>\n        <TabPanel value='3'>\n          <Typography>\n            Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll\n            carrot cake gummi bears.\n          </Typography>\n        </TabPanel>\n      </Box>\n    </TabContext>\n  )\n}\n\nexport default TabsCustomizedVertical\n"})}),I=(0,l.jsx)("pre",{className:"language-jsx",children:(0,l.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Tab from '@mui/material/Tab'\nimport TabList from '@mui/lab/TabList'\nimport TabPanel from '@mui/lab/TabPanel'\nimport TabContext from '@mui/lab/TabContext'\nimport Typography from '@mui/material/Typography'\n\n// ** Icon Imports\nimport Icon from 'src/@core/components/icon'\n\nconst TabsForcedScroll = () => {\n  // ** State\n  const [value, setValue] = useState('1')\n\n  const handleChange = (event, newValue) => {\n    setValue(newValue)\n  }\n\n  return (\n    <TabContext value={value}>\n      <TabList scrollButtons variant='scrollable' onChange={handleChange} aria-label='forced scroll tabs example'>\n        <Tab value='1' label='Tab 1' icon={<Icon icon='tabler:phone' />} />\n        <Tab value='2' label='Tab 2' icon={<Icon icon='tabler:heart' />} />\n        <Tab value='3' label='Tab 3' icon={<Icon icon='tabler:thumb-up' />} />\n        <Tab value='4' label='Tab 4' icon={<Icon icon='tabler:user' />} />\n        <Tab value='5' label='Tab 5' icon={<Icon icon='tabler:thumb-down' />} />\n      </TabList>\n      <TabPanel value='1'>\n        <Typography>\n          Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer jelly\n          cake caramels brownie gummies.\n        </Typography>\n      </TabPanel>\n      <TabPanel value='2'>\n        <Typography>\n          Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups\n          sesame snaps halvah.\n        </Typography>\n      </TabPanel>\n      <TabPanel value='3'>\n        <Typography>\n          Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll\n          carrot cake gummi bears.\n        </Typography>\n      </TabPanel>\n      <TabPanel value='4'>\n        <Typography>\n          Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer jelly\n          cake caramels brownie gummies.\n        </Typography>\n      </TabPanel>\n      <TabPanel value='5'>\n        <Typography>\n          Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups\n          sesame snaps halvah.\n        </Typography>\n      </TabPanel>\n    </TabContext>\n  )\n}\n\nexport default TabsForcedScroll\n"})}),M=(0,l.jsx)("pre",{className:"language-jsx",children:(0,l.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Tab from '@mui/material/Tab'\nimport TabList from '@mui/lab/TabList'\nimport TabPanel from '@mui/lab/TabPanel'\nimport TabContext from '@mui/lab/TabContext'\nimport Typography from '@mui/material/Typography'\n\nconst TabsFullWidth = () => {\n  // ** State\n  const [value, setValue] = useState('1')\n\n  const handleChange = (event, newValue) => {\n    setValue(newValue)\n  }\n\n  return (\n    <TabContext value={value}>\n      <TabList variant='fullWidth' onChange={handleChange} aria-label='full width tabs example'>\n        <Tab value='1' label='Tab 1' />\n        <Tab value='2' label='Tab 2' />\n        <Tab value='3' label='Tab 3' />\n      </TabList>\n      <TabPanel value='1'>\n        <Typography>\n          Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer jelly\n          cake caramels brownie gummies.\n        </Typography>\n      </TabPanel>\n      <TabPanel value='2'>\n        <Typography>\n          Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups\n          sesame snaps halvah.\n        </Typography>\n      </TabPanel>\n      <TabPanel value='3'>\n        <Typography>\n          Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll\n          carrot cake gummi bears.\n        </Typography>\n      </TabPanel>\n    </TabContext>\n  )\n}\n\nexport default TabsFullWidth\n"})}),V=(0,l.jsx)("pre",{className:"language-jsx",children:(0,l.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Tab from '@mui/material/Tab'\nimport TabList from '@mui/lab/TabList'\nimport TabPanel from '@mui/lab/TabPanel'\nimport TabContext from '@mui/lab/TabContext'\nimport Typography from '@mui/material/Typography'\n\nconst TabsNav = () => {\n  // ** State\n  const [value, setValue] = useState('1')\n\n  const handleChange = (event, newValue) => {\n    setValue(newValue)\n  }\n\n  return (\n    <TabContext value={value}>\n      <TabList onChange={handleChange} aria-label='nav tabs example'>\n        <Tab value='1' component='a' label='Tab 1' href='/drafts' onClick={e => e.preventDefault()} />\n        <Tab value='2' component='a' label='Tab 2' href='/trash' onClick={e => e.preventDefault()} />\n        <Tab value='3' component='a' label='Tab 3' href='/spam' onClick={e => e.preventDefault()} />\n      </TabList>\n      <TabPanel value='1'>\n        <Typography>\n          Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer jelly\n          cake caramels brownie gummies.\n        </Typography>\n      </TabPanel>\n      <TabPanel value='2'>\n        <Typography>\n          Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups\n          sesame snaps halvah.\n        </Typography>\n      </TabPanel>\n      <TabPanel value='3'>\n        <Typography>\n          Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll\n          carrot cake gummi bears.\n        </Typography>\n      </TabPanel>\n    </TabContext>\n  )\n}\n\nexport default TabsNav\n"})}),q=(0,l.jsx)("pre",{className:"language-jsx",children:(0,l.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Box from '@mui/material/Box'\nimport Tab from '@mui/material/Tab'\nimport TabList from '@mui/lab/TabList'\nimport TabPanel from '@mui/lab/TabPanel'\nimport TabContext from '@mui/lab/TabContext'\nimport Typography from '@mui/material/Typography'\n\nconst TabsVertical = () => {\n  // ** State\n  const [value, setValue] = useState('1')\n\n  const handleChange = (event, newValue) => {\n    setValue(newValue)\n  }\n\n  return (\n    <TabContext value={value}>\n      <Box sx={{ display: 'flex' }}>\n        <TabList orientation='vertical' onChange={handleChange} aria-label='vertical tabs example'>\n          <Tab value='1' label='Tab 1' />\n          <Tab value='2' label='Tab 2' />\n          <Tab value='3' label='Tab 3' />\n        </TabList>\n        <TabPanel value='1'>\n          <Typography>\n            Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer\n            jelly cake caramels brownie gummies.\n          </Typography>\n        </TabPanel>\n        <TabPanel value='2'>\n          <Typography>\n            Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups\n            sesame snaps halvah.\n          </Typography>\n        </TabPanel>\n        <TabPanel value='3'>\n          <Typography>\n            Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll\n            carrot cake gummi bears.\n          </Typography>\n        </TabPanel>\n      </Box>\n    </TabContext>\n  )\n}\n\nexport default TabsVertical\n"})}),N=(0,l.jsx)("pre",{className:"language-jsx",children:(0,l.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Tab from '@mui/material/Tab'\nimport TabList from '@mui/lab/TabList'\nimport TabPanel from '@mui/lab/TabPanel'\nimport TabContext from '@mui/lab/TabContext'\nimport Typography from '@mui/material/Typography'\n\nconst TabsSimple = () => {\n  // ** State\n  const [value, setValue] = useState('1')\n\n  const handleChange = (event, newValue) => {\n    setValue(newValue)\n  }\n\n  return (\n    <TabContext value={value}>\n      <TabList onChange={handleChange} aria-label='simple tabs example'>\n        <Tab value='1' label='Tab 1' />\n        <Tab value='2' label='Tab 2' />\n        <Tab disabled value='3' label='Disabled' />\n      </TabList>\n      <TabPanel value='1'>\n        <Typography>\n          Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer jelly\n          cake caramels brownie gummies.\n        </Typography>\n      </TabPanel>\n      <TabPanel value='2'>\n        <Typography>\n          Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups\n          sesame snaps halvah.\n        </Typography>\n      </TabPanel>\n      <TabPanel value='3'>\n        <Typography>\n          Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll\n          carrot cake gummi bears.\n        </Typography>\n      </TabPanel>\n    </TabContext>\n  )\n}\n\nexport default TabsSimple\n"})}),D=(0,l.jsx)("pre",{className:"language-jsx",children:(0,l.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Tab from '@mui/material/Tab'\nimport TabList from '@mui/lab/TabList'\nimport TabPanel from '@mui/lab/TabPanel'\nimport TabContext from '@mui/lab/TabContext'\nimport Typography from '@mui/material/Typography'\n\n// ** Icon Imports\nimport Icon from 'src/@core/components/icon'\n\nconst TabsIcon = () => {\n  // ** State\n  const [value, setValue] = useState('1')\n\n  const handleChange = (event, newValue) => {\n    setValue(newValue)\n  }\n\n  return (\n    <TabContext value={value}>\n      <TabList onChange={handleChange} aria-label='icon tabs example'>\n        <Tab value='1' label='Recent' icon={<Icon icon='tabler:phone' />} />\n        <Tab value='2' label='Favorites' icon={<Icon icon='tabler:heart' />} />\n        <Tab value='3' label='Contacts' icon={<Icon icon='tabler:user' />} />\n      </TabList>\n      <TabPanel value='1'>\n        <Typography>\n          Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer jelly\n          cake caramels brownie gummies.\n        </Typography>\n      </TabPanel>\n      <TabPanel value='2'>\n        <Typography>\n          Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups\n          sesame snaps halvah.\n        </Typography>\n      </TabPanel>\n      <TabPanel value='3'>\n        <Typography>\n          Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll\n          carrot cake gummi bears.\n        </Typography>\n      </TabPanel>\n    </TabContext>\n  )\n}\n\nexport default TabsIcon\n"})}),R=(0,l.jsx)("pre",{className:"language-jsx",children:(0,l.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Tab from '@mui/material/Tab'\nimport TabList from '@mui/lab/TabList'\nimport TabPanel from '@mui/lab/TabPanel'\nimport TabContext from '@mui/lab/TabContext'\nimport Typography from '@mui/material/Typography'\n\nconst TabsColor = () => {\n  // ** State\n  const [value, setValue] = useState('1')\n\n  const handleChange = (event, newValue) => {\n    setValue(newValue)\n  }\n\n  return (\n    <TabContext value={value}>\n      <TabList\n        textColor='secondary'\n        onChange={handleChange}\n        indicatorColor='secondary'\n        aria-label='secondary tabs example'\n      >\n        <Tab value='1' label='Tab 1' />\n        <Tab value='2' label='Tab 2' />\n        <Tab disabled value='3' label='Disabled' />\n      </TabList>\n      <TabPanel value='1'>\n        <Typography>\n          Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer jelly\n          cake caramels brownie gummies.\n        </Typography>\n      </TabPanel>\n      <TabPanel value='2'>\n        <Typography>\n          Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups\n          sesame snaps halvah.\n        </Typography>\n      </TabPanel>\n      <TabPanel value='3'>\n        <Typography>\n          Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll\n          carrot cake gummi bears.\n        </Typography>\n      </TabPanel>\n    </TabContext>\n  )\n}\n\nexport default TabsColor\n"})}),U=()=>(0,l.jsxs)(s.ZP,{container:!0,spacing:6,className:"match-height",children:[(0,l.jsx)(s.ZP,{item:!0,xs:12,md:6,children:(0,l.jsxs)(c.Z,{title:"Default Tabs",code:{tsx:null,jsx:N},children:[(0,l.jsx)(r.Z,{sx:{mb:4},children:"Tabs are managed with the help of a state."}),(0,l.jsx)(T,{})]})}),(0,l.jsx)(s.ZP,{item:!0,xs:12,md:6,children:(0,l.jsxs)(c.Z,{title:"Color",code:{tsx:null,jsx:R},children:[(0,l.jsxs)(r.Z,{sx:{mb:4},children:["Use ",(0,l.jsx)("code",{children:"textColor='secondary'"})," and ",(0,l.jsx)("code",{children:"indicatorColor='secondary'"})," props with"," ",(0,l.jsx)("code",{children:"TabList"})," component for secondary tabs."]}),(0,l.jsx)(d,{})]})}),(0,l.jsx)(s.ZP,{item:!0,xs:12,md:6,children:(0,l.jsxs)(c.Z,{title:"Full Width Tabs",code:{tsx:null,jsx:M},children:[(0,l.jsxs)(r.Z,{sx:{mb:4},children:["Use ",(0,l.jsx)("code",{children:"variant='fullWidth'"})," prop with ",(0,l.jsx)("code",{children:"TabList"})," component to have full width tabs."]}),(0,l.jsx)(g,{})]})}),(0,l.jsx)(s.ZP,{item:!0,xs:12,md:6,children:(0,l.jsxs)(c.Z,{title:"Centered Tabs",code:{tsx:null,jsx:P},children:[(0,l.jsxs)(r.Z,{sx:{mb:4},children:["Use ",(0,l.jsx)("code",{children:"centered"})," prop with ",(0,l.jsx)("code",{children:"TabList"})," component to have tabs on center."]}),(0,l.jsx)(x,{})]})}),(0,l.jsx)(s.ZP,{item:!0,xs:12,md:6,children:(0,l.jsxs)(c.Z,{title:"Icon Tabs",code:{tsx:null,jsx:D},children:[(0,l.jsxs)(r.Z,{sx:{mb:4},children:["Use ",(0,l.jsx)("code",{children:"icon"})," prop with ",(0,l.jsx)("code",{children:"Tab"})," component for icons in the tab."]}),(0,l.jsx)(m,{})]})}),(0,l.jsx)(s.ZP,{item:!0,xs:12,md:6,children:(0,l.jsxs)(c.Z,{title:"Customized Tabs",code:{tsx:null,jsx:S},children:[(0,l.jsxs)(r.Z,{sx:{mb:4},children:["Use ",(0,l.jsx)("code",{children:"styled"})," hook to customize your tabs."]}),(0,l.jsx)(k,{})]})}),(0,l.jsx)(s.ZP,{item:!0,xs:12,md:6,children:(0,l.jsxs)(c.Z,{title:"Vertical Tabs",code:{tsx:null,jsx:q},children:[(0,l.jsxs)(r.Z,{sx:{mb:4},children:["Use ",(0,l.jsx)("code",{children:"orientation='vertical'"})," prop with ",(0,l.jsx)("code",{children:"TabList"})," component to have vertical tabs."]}),(0,l.jsx)(y,{})]})}),(0,l.jsx)(s.ZP,{item:!0,xs:12,md:6,children:(0,l.jsxs)(c.Z,{title:"Customized Vertical Tabs",code:{tsx:null,jsx:L},children:[(0,l.jsxs)(r.Z,{sx:{mb:4},children:["Use ",(0,l.jsx)("code",{children:"styled"})," hook to customize your tabs."]}),(0,l.jsx)(w,{})]})}),(0,l.jsx)(s.ZP,{item:!0,xs:12,md:6,children:(0,l.jsxs)(c.Z,{title:"Nav Tabs",code:{tsx:null,jsx:V},children:[(0,l.jsxs)(r.Z,{sx:{mb:4},children:["Use ",(0,l.jsx)("code",{children:"component"})," prop to change the ",(0,l.jsx)("code",{children:"Tab"})," component to the component of your choice."]}),(0,l.jsx)(b,{})]})}),(0,l.jsx)(s.ZP,{item:!0,xs:12,md:6,children:(0,l.jsxs)(c.Z,{title:"Forced Scroll Buttons",code:{tsx:null,jsx:I},children:[(0,l.jsxs)(r.Z,{sx:{mb:4},children:["Use ",(0,l.jsx)("code",{children:"scrollButtons"})," and ",(0,l.jsx)("code",{children:"variant='scrollable'"})," props with ",(0,l.jsx)("code",{children:"TabList"})," ","component to have forced scrollable tabs."]}),(0,l.jsx)(f,{})]})})]});var z=U}},function(e){e.O(0,[5511,2569,9774,2888,179],function(){return e(e.s=7804)}),_N_E=e.O()}]);