(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7574],{60478:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tree-view",function(){return l(84440)}])},93682:function(e,n,l){"use strict";l.d(n,{Z:function(){return v}});var t=l(85893),r=l(67294),o=l(87357),d=l(66242),a=l(34386),i=l(67720),s=l(57922),c=l(93946),m=l(78445),I=l(44267),x=l(96420),h=l(98396),b=l(33454),p=l(79878),u=l(15660),T=l.n(u),j=l(86501),g=l(66485),f=l.n(g);let Z=e=>e&&("TEXTAREA"===e.nodeName||"INPUT"===e.nodeName);var w=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,r.useRef)(null),l=()=>{e.onSuccess&&e.onSuccess(),e.selectOnCopy&&Z(n.current)&&n.current.select()},t=()=>{e.onError&&e.onError();let l=!1!==e.selectOnError;l&&Z(n.current)&&n.current.select()},o=e=>{f()(e).then(l).catch(t)},d=(0,r.useCallback)(e=>{"string"==typeof e?o(e):n.current&&o(n.current.value)},[]);return{copy:d,target:n}};let y=e=>{let{id:n,sx:l,code:u,title:g,children:f,className:Z}=e,[y,v]=(0,r.useState)(!1),[C,S]=(0,r.useState)(null!==u.tsx?"tsx":"jsx"),V=w(),E=(0,h.Z)(e=>e.breakpoints.down("md"));(0,r.useEffect)(()=>{T().highlightAll()},[y,C]);let M=()=>null!==u.tsx&&"tsx"===C?u.tsx.props.children.props.children:null!==u.jsx&&"jsx"===C?u.jsx.props.children.props.children:"",N=()=>{V.copy(M()),j.ZP.success("The source code has been copied to your clipboard.",{duration:2e3})};return(0,t.jsxs)(d.Z,{className:Z,sx:{"& .MuiCardHeader-action":{lineHeight:.8},...l},id:n||"card-snippet--".concat(g.toLowerCase().replace(/ /g,"-")),children:[(0,t.jsx)(m.Z,{title:g,...E?{}:{action:(0,t.jsx)(c.Z,{onClick:()=>v(!y),children:(0,t.jsx)(p.Z,{icon:"tabler:code",fontSize:20})})}}),(0,t.jsx)(I.Z,{children:f}),E?null:(0,t.jsxs)(s.Z,{in:y,children:[(0,t.jsx)(i.Z,{sx:{my:"0 !important"}}),(0,t.jsxs)(I.Z,{sx:{position:"relative","& pre":{m:"0 !important",maxHeight:500}},children:[(0,t.jsx)(o.Z,{sx:{mb:4,display:"flex",alignItems:"center",justifyContent:"flex-end"},children:(0,t.jsxs)(b.Z,{exclusive:!0,size:"small",color:"primary",value:C,onChange:(e,n)=>null!==n?S(n):null,children:[null!==u.tsx?(0,t.jsx)(x.Z,{value:"tsx",children:(0,t.jsx)(p.Z,{icon:"tabler:brand-typescript",fontSize:20})}):null,null!==u.jsx?(0,t.jsx)(x.Z,{value:"jsx",children:(0,t.jsx)(p.Z,{icon:"tabler:brand-javascript",fontSize:20})}):null]})}),(0,t.jsx)(a.Z,{title:"Copy the source",placement:"top",children:(0,t.jsx)(c.Z,{onClick:N,sx:{top:"5rem",color:"grey.100",right:"2.5625rem",position:"absolute"},children:(0,t.jsx)(p.Z,{icon:"tabler:copy",fontSize:20})})}),(0,t.jsx)("div",{children:null!==u[C]?u[C]:null})]})]})]})};var v=y},84440:function(e,n,l){"use strict";l.r(n),l.d(n,{default:function(){return H}});var t=l(85893),r=l(86886),o=l(15861),d=l(93682),a=l(28756),i=l(4707),s=l(26452),c=l(79878);let m=e=>{let{direction:n}=e;return(0,t.jsxs)(i.Z,{sx:{minHeight:240},defaultExpandIcon:(0,t.jsx)(c.Z,{icon:"rtl"===n?"tabler:chevron-left":"tabler:chevron-right"}),defaultCollapseIcon:(0,t.jsx)(c.Z,{icon:"tabler:chevron-down"}),children:[(0,t.jsxs)(s.Z,{nodeId:"1",label:"Applications",children:[(0,t.jsx)(s.Z,{nodeId:"2",label:"Calendar"}),(0,t.jsx)(s.Z,{nodeId:"3",label:"Chrome"}),(0,t.jsx)(s.Z,{nodeId:"4",label:"Webstorm"})]}),(0,t.jsxs)(s.Z,{nodeId:"5",label:"Documents",children:[(0,t.jsx)(s.Z,{nodeId:"10",label:"OSS"}),(0,t.jsx)(s.Z,{nodeId:"6",label:"MUI",children:(0,t.jsxs)(s.Z,{nodeId:"7",label:"src",children:[(0,t.jsx)(s.Z,{nodeId:"8",label:"index.js"}),(0,t.jsx)(s.Z,{nodeId:"9",label:"tree-view.js"})]})})]})]})};var I=l(67294);let x=e=>{let{direction:n}=e,[l,r]=(0,I.useState)([]),[o,d]=(0,I.useState)([]),a=(e,n)=>{r(n)},m=(e,n)=>{d(n)};return(0,t.jsxs)(i.Z,{expanded:l,selected:o,sx:{minHeight:240},onNodeToggle:a,onNodeSelect:m,defaultExpandIcon:(0,t.jsx)(c.Z,{icon:"rtl"===n?"tabler:chevron-left":"tabler:chevron-right"}),defaultCollapseIcon:(0,t.jsx)(c.Z,{icon:"tabler:chevron-down"}),children:[(0,t.jsxs)(s.Z,{nodeId:"1",label:"Applications",children:[(0,t.jsx)(s.Z,{nodeId:"2",label:"Calendar"}),(0,t.jsx)(s.Z,{nodeId:"3",label:"Chrome"}),(0,t.jsx)(s.Z,{nodeId:"4",label:"Webstorm"})]}),(0,t.jsxs)(s.Z,{nodeId:"5",label:"Documents",children:[(0,t.jsx)(s.Z,{nodeId:"10",label:"OSS"}),(0,t.jsx)(s.Z,{nodeId:"6",label:"MUI",children:(0,t.jsxs)(s.Z,{nodeId:"7",label:"src",children:[(0,t.jsx)(s.Z,{nodeId:"8",label:"index.js"}),(0,t.jsx)(s.Z,{nodeId:"9",label:"tree-view.js"})]})})]})]})},h={id:"root",name:"Parent",children:[{id:"1",name:"Child - 1"},{id:"3",name:"Child - 3",children:[{id:"4",name:"Child - 4"}]}]},b=e=>{let{direction:n}=e,l=e=>(0,t.jsx)(s.Z,{nodeId:e.id,label:e.name,children:Array.isArray(e.children)?e.children.map(e=>l(e)):null},e.id);return(0,t.jsx)(i.Z,{sx:{minHeight:240},defaultExpanded:["root"],defaultExpandIcon:(0,t.jsx)(c.Z,{icon:"rtl"===n?"tabler:chevron-left":"tabler:chevron-right"}),defaultCollapseIcon:(0,t.jsx)(c.Z,{icon:"tabler:chevron-down"}),children:l(h)})};var p=l(90948),u=l(41796);let T=(0,p.ZP)(i.Z)(e=>{let{theme:n}=e;return{minHeight:264,"& .MuiTreeItem-iconContainer .close":{opacity:.3},"& .MuiTreeItem-group":{marginLeft:15,paddingLeft:18,borderLeft:"1px dashed ".concat((0,u.Fq)(n.palette.text.primary,.4))}}}),j=()=>(0,t.jsx)(T,{defaultExpanded:["1"],defaultExpandIcon:(0,t.jsx)(c.Z,{icon:"tabler:square-plus"}),defaultCollapseIcon:(0,t.jsx)(c.Z,{icon:"tabler:square-minus"}),defaultEndIcon:(0,t.jsx)(c.Z,{icon:"tabler:square-x",className:"close"}),children:(0,t.jsxs)(s.Z,{nodeId:"1",label:"Main",children:[(0,t.jsx)(s.Z,{nodeId:"2",label:"Hello"}),(0,t.jsxs)(s.Z,{nodeId:"3",label:"Subtree with children",children:[(0,t.jsx)(s.Z,{nodeId:"6",label:"Hello"}),(0,t.jsxs)(s.Z,{nodeId:"7",label:"Sub-subtree with children",children:[(0,t.jsx)(s.Z,{nodeId:"9",label:"Child 1"}),(0,t.jsx)(s.Z,{nodeId:"10",label:"Child 2"}),(0,t.jsx)(s.Z,{nodeId:"11",label:"Child 3"})]}),(0,t.jsx)(s.Z,{nodeId:"8",label:"Hello"})]}),(0,t.jsx)(s.Z,{nodeId:"4",label:"World"}),(0,t.jsx)(s.Z,{nodeId:"5",label:"Something something"})]})});var g=l(87357);let f=(0,p.ZP)(s.Z)(e=>{let{theme:n}=e;return{"&:hover > .MuiTreeItem-content:not(.Mui-selected)":{backgroundColor:n.palette.action.hover},"& .MuiTreeItem-content":{paddingRight:n.spacing(3),borderTopRightRadius:n.spacing(4),borderBottomRightRadius:n.spacing(4),fontWeight:n.typography.fontWeightMedium},"& .MuiTreeItem-label":{fontWeight:"inherit",paddingRight:n.spacing(3)},"& .MuiTreeItem-group":{marginLeft:0,"& .MuiTreeItem-content":{paddingLeft:n.spacing(4),fontWeight:n.typography.fontWeightRegular}}}}),Z=e=>{let{labelText:n,labelIcon:l,labelInfo:r,...d}=e;return(0,t.jsx)(f,{...d,label:(0,t.jsxs)(g.Z,{sx:{py:1,display:"flex",alignItems:"center","& svg":{mr:1}},children:[(0,t.jsx)(c.Z,{icon:l,color:"inherit"}),(0,t.jsx)(o.Z,{variant:"body2",sx:{flexGrow:1,fontWeight:"inherit"},children:n}),r?(0,t.jsx)(o.Z,{variant:"caption",color:"inherit",children:r}):null]})})},w=e=>{let{direction:n}=e,l=(0,t.jsx)(c.Z,{icon:"rtl"===n?"tabler:chevron-left":"tabler:chevron-right"});return(0,t.jsxs)(i.Z,{sx:{minHeight:240},defaultExpanded:["3"],defaultExpandIcon:l,defaultCollapseIcon:(0,t.jsx)(c.Z,{icon:"tabler:chevron-down"}),children:[(0,t.jsx)(Z,{nodeId:"1",labelText:"All Mail",labelIcon:"tabler:mail"}),(0,t.jsx)(Z,{nodeId:"2",labelText:"Trash",labelIcon:"tabler:trash"}),(0,t.jsxs)(Z,{nodeId:"3",labelText:"Categories",labelIcon:"tabler:badge",children:[(0,t.jsx)(Z,{nodeId:"5",labelInfo:"90",labelText:"Social",labelIcon:"tabler:users"}),(0,t.jsx)(Z,{nodeId:"6",labelInfo:"2,294",labelText:"Updates",labelIcon:"tabler:info-circle"}),(0,t.jsx)(Z,{nodeId:"7",labelInfo:"3,566",labelText:"Forums",labelIcon:"tabler:messages"}),(0,t.jsx)(Z,{nodeId:"8",labelInfo:"733",labelText:"Promotions",labelIcon:"tabler:tag"})]}),(0,t.jsx)(Z,{nodeId:"4",labelText:"History",labelIcon:"tabler:badge"})]})},y=e=>{let{direction:n}=e;return(0,t.jsxs)(i.Z,{multiSelect:!0,sx:{minHeight:240},defaultExpandIcon:(0,t.jsx)(c.Z,{icon:"rtl"===n?"tabler:chevron-left":"tabler:chevron-right"}),defaultCollapseIcon:(0,t.jsx)(c.Z,{icon:"tabler:chevron-down"}),children:[(0,t.jsxs)(s.Z,{nodeId:"1",label:"Applications",children:[(0,t.jsx)(s.Z,{nodeId:"2",label:"Calendar"}),(0,t.jsx)(s.Z,{nodeId:"3",label:"Chrome"}),(0,t.jsx)(s.Z,{nodeId:"4",label:"Webstorm"})]}),(0,t.jsxs)(s.Z,{nodeId:"5",label:"Documents",children:[(0,t.jsx)(s.Z,{nodeId:"10",label:"OSS"}),(0,t.jsx)(s.Z,{nodeId:"6",label:"MUI",children:(0,t.jsxs)(s.Z,{nodeId:"7",label:"src",children:[(0,t.jsx)(s.Z,{nodeId:"8",label:"index.js"}),(0,t.jsx)(s.Z,{nodeId:"9",label:"tree-view.js"})]})})]})]})},v=(0,t.jsx)("pre",{className:"language-jsx",children:(0,t.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport TreeView from '@mui/lab/TreeView'\nimport TreeItem from '@mui/lab/TreeItem'\n\n// ** Icon Imports\nimport Icon from 'src/@core/components/icon'\n\nconst TreeViewControlled = ({ direction }) => {\n  // ** States\n  const [expanded, setExpanded] = useState([])\n  const [selected, setSelected] = useState([])\n\n  const handleToggle = (event, nodeIds) => {\n    setExpanded(nodeIds)\n  }\n\n  const handleSelect = (event, nodeIds) => {\n    setSelected(nodeIds)\n  }\n  const ExpandIcon = direction === 'rtl' ? 'tabler:chevron-left' : 'tabler:chevron-right'\n\n  return (\n    <TreeView\n      expanded={expanded}\n      selected={selected}\n      sx={{ minHeight: 240 }}\n      onNodeToggle={handleToggle}\n      onNodeSelect={handleSelect}\n      defaultExpandIcon={<Icon icon={ExpandIcon} />}\n      defaultCollapseIcon={<Icon icon='tabler:chevron-down' />}\n    >\n      <TreeItem nodeId='1' label='Applications'>\n        <TreeItem nodeId='2' label='Calendar' />\n        <TreeItem nodeId='3' label='Chrome' />\n        <TreeItem nodeId='4' label='Webstorm' />\n      </TreeItem>\n      <TreeItem nodeId='5' label='Documents'>\n        <TreeItem nodeId='10' label='OSS' />\n        <TreeItem nodeId='6' label='MUI'>\n          <TreeItem nodeId='7' label='src'>\n            <TreeItem nodeId='8' label='index.js' />\n            <TreeItem nodeId='9' label='tree-view.js' />\n          </TreeItem>\n        </TreeItem>\n      </TreeItem>\n    </TreeView>\n  )\n}\n\nexport default TreeViewControlled\n"})}),C=(0,t.jsx)("pre",{className:"language-jsx",children:(0,t.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport TreeItem from '@mui/lab/TreeItem'\nimport { alpha, styled } from '@mui/material/styles'\nimport MuiTreeView from '@mui/lab/TreeView'\n\n// ** Icon Imports\nimport Icon from 'src/@core/components/icon'\n\n// Styled TreeView component\nconst TreeView = styled(MuiTreeView)(({ theme }) => ({\n  minHeight: 264,\n  '& .MuiTreeItem-iconContainer .close': {\n    opacity: 0.3\n  },\n  '& .MuiTreeItem-group': {\n    marginLeft: 15,\n    paddingLeft: 18,\n    borderLeft: 1px dashed {alpha(theme.palette.text.primary, 0.4)}\n  }\n}))\n\nconst TreeViewCustomized = () => {\n  return (\n    <TreeView\n      defaultExpanded={['1']}\n      defaultExpandIcon={<Icon icon='tabler:square-plus' />}\n      defaultCollapseIcon={<Icon icon='tabler:square-minus' />}\n      defaultEndIcon={<Icon icon='tabler:square-x' className='close' />}\n    >\n      <TreeItem nodeId='1' label='Main'>\n        <TreeItem nodeId='2' label='Hello' />\n        <TreeItem nodeId='3' label='Subtree with children'>\n          <TreeItem nodeId='6' label='Hello' />\n          <TreeItem nodeId='7' label='Sub-subtree with children'>\n            <TreeItem nodeId='9' label='Child 1' />\n            <TreeItem nodeId='10' label='Child 2' />\n            <TreeItem nodeId='11' label='Child 3' />\n          </TreeItem>\n          <TreeItem nodeId='8' label='Hello' />\n        </TreeItem>\n        <TreeItem nodeId='4' label='World' />\n        <TreeItem nodeId='5' label='Something something' />\n      </TreeItem>\n    </TreeView>\n  )\n}\n\nexport default TreeViewCustomized\n"})}),S=(0,t.jsx)("pre",{className:"language-jsx",children:(0,t.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport TreeView from '@mui/lab/TreeView'\nimport TreeItem from '@mui/lab/TreeItem'\n\n// ** Icon Imports\nimport Icon from 'src/@core/components/icon'\n\nconst TreeViewBasic = ({ direction }) => {\n  const ExpandIcon = direction === 'rtl' ? 'tabler:chevron-left' : 'tabler:chevron-right'\n\n  return (\n    <TreeView\n      sx={{ minHeight: 240 }}\n      defaultExpandIcon={<Icon icon={ExpandIcon} />}\n      defaultCollapseIcon={<Icon icon='tabler:chevron-down' />}\n    >\n      <TreeItem nodeId='1' label='Applications'>\n        <TreeItem nodeId='2' label='Calendar' />\n        <TreeItem nodeId='3' label='Chrome' />\n        <TreeItem nodeId='4' label='Webstorm' />\n      </TreeItem>\n      <TreeItem nodeId='5' label='Documents'>\n        <TreeItem nodeId='10' label='OSS' />\n        <TreeItem nodeId='6' label='MUI'>\n          <TreeItem nodeId='7' label='src'>\n            <TreeItem nodeId='8' label='index.js' />\n            <TreeItem nodeId='9' label='tree-view.js' />\n          </TreeItem>\n        </TreeItem>\n      </TreeItem>\n    </TreeView>\n  )\n}\n\nexport default TreeViewBasic\n"})}),V=(0,t.jsx)("pre",{className:"language-jsx",children:(0,t.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Box from '@mui/material/Box'\nimport TreeView from '@mui/lab/TreeView'\nimport { styled } from '@mui/material/styles'\nimport Typography from '@mui/material/Typography'\nimport TreeItem from '@mui/lab/TreeItem'\n\n// ** Custom Icon Import\nimport Icon from 'src/@core/components/icon'\n\n// Styled TreeItem component\nconst StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({\n  '&:hover > .MuiTreeItem-content:not(.Mui-selected)': {\n    backgroundColor: theme.palette.action.hover\n  },\n  '& .MuiTreeItem-content': {\n    paddingRight: theme.spacing(3),\n    borderTopRightRadius: theme.spacing(4),\n    borderBottomRightRadius: theme.spacing(4),\n    fontWeight: theme.typography.fontWeightMedium\n  },\n  '& .MuiTreeItem-label': {\n    fontWeight: 'inherit',\n    paddingRight: theme.spacing(3)\n  },\n  '& .MuiTreeItem-group': {\n    marginLeft: 0,\n    '& .MuiTreeItem-content': {\n      paddingLeft: theme.spacing(4),\n      fontWeight: theme.typography.fontWeightRegular\n    }\n  }\n}))\n\nconst StyledTreeItem = props => {\n  // ** Props\n  const { labelText, labelIcon, labelInfo, ...other } = props\n\n  return (\n    <StyledTreeItemRoot\n      {...other}\n      label={\n        <Box sx={{ py: 1, display: 'flex', alignItems: 'center', '& svg': { mr: 1 } }}>\n          <Icon icon={labelIcon} color='inherit' />\n          <Typography variant='body2' sx={{ flexGrow: 1, fontWeight: 'inherit' }}>\n            {labelText}\n          </Typography>\n          {labelInfo ? (\n            <Typography variant='caption' color='inherit'>\n              {labelInfo}\n            </Typography>\n          ) : null}\n        </Box>\n      }\n    />\n  )\n}\n\nconst TreeViewGmailClone = ({ direction }) => {\n  const ExpandIcon = <Icon icon={direction === 'rtl' ? 'tabler:chevron-left' : 'tabler:chevron-right'} />\n\n  return (\n    <TreeView\n      sx={{ minHeight: 240 }}\n      defaultExpanded={['3']}\n      defaultExpandIcon={ExpandIcon}\n      defaultCollapseIcon={<Icon icon='tabler:chevron-down' />}\n    >\n      <StyledTreeItem nodeId='1' labelText='All Mail' labelIcon='tabler:mail' />\n      <StyledTreeItem nodeId='2' labelText='Trash' labelIcon='tabler:trash' />\n      <StyledTreeItem nodeId='3' labelText='Categories' labelIcon='tabler:badge'>\n        <StyledTreeItem nodeId='5' labelInfo='90' labelText='Social' labelIcon='tabler:users' />\n        <StyledTreeItem nodeId='6' labelInfo='2,294' labelText='Updates' labelIcon='tabler:info-circle' />\n        <StyledTreeItem nodeId='7' labelInfo='3,566' labelText='Forums' labelIcon='tabler:messages' />\n        <StyledTreeItem nodeId='8' labelInfo='733' labelText='Promotions' labelIcon='tabler:tag' />\n      </StyledTreeItem>\n      <StyledTreeItem nodeId='4' labelText='History' labelIcon='tabler:badge' />\n    </TreeView>\n  )\n}\n\nexport default TreeViewGmailClone\n"})}),E=(0,t.jsx)("pre",{className:"language-jsx",children:(0,t.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport TreeView from '@mui/lab/TreeView'\nimport TreeItem from '@mui/lab/TreeItem'\n\n// ** Icon Imports\nimport Icon from 'src/@core/components/icon'\n\nconst TreeViewMultiSelection = ({ direction }) => {\n  const ExpandIcon = direction === 'rtl' ? 'tabler:chevron-left' : 'tabler:chevron-right'\n\n  return (\n    <TreeView\n      multiSelect\n      sx={{ minHeight: 240 }}\n      defaultExpandIcon={<Icon icon={ExpandIcon} />}\n      defaultCollapseIcon={<Icon icon='tabler:chevron-down' />}\n    >\n      <TreeItem nodeId='1' label='Applications'>\n        <TreeItem nodeId='2' label='Calendar' />\n        <TreeItem nodeId='3' label='Chrome' />\n        <TreeItem nodeId='4' label='Webstorm' />\n      </TreeItem>\n      <TreeItem nodeId='5' label='Documents'>\n        <TreeItem nodeId='10' label='OSS' />\n        <TreeItem nodeId='6' label='MUI'>\n          <TreeItem nodeId='7' label='src'>\n            <TreeItem nodeId='8' label='index.js' />\n            <TreeItem nodeId='9' label='tree-view.js' />\n          </TreeItem>\n        </TreeItem>\n      </TreeItem>\n    </TreeView>\n  )\n}\n\nexport default TreeViewMultiSelection\n"})}),M=(0,t.jsx)("pre",{className:"language-jsx",children:(0,t.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport TreeView from '@mui/lab/TreeView'\nimport TreeItem from '@mui/lab/TreeItem'\n\n// ** Icon Imports\nimport Icon from 'src/@core/components/icon'\n\nconst data = {\n  id: 'root',\n  name: 'Parent',\n  children: [\n    {\n      id: '1',\n      name: 'Child - 1'\n    },\n    {\n      id: '3',\n      name: 'Child - 3',\n      children: [\n        {\n          id: '4',\n          name: 'Child - 4'\n        }\n      ]\n    }\n  ]\n}\n\nconst TreeViewRichObject = ({ direction }) => {\n  const renderTree = nodes => (\n    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>\n      {Array.isArray(nodes.children) ? nodes.children.map(node => renderTree(node)) : null}\n    </TreeItem>\n  )\n  const ExpandIcon = direction === 'rtl' ? 'tabler:chevron-left' : 'tabler:chevron-right'\n\n  return (\n    <TreeView\n      sx={{ minHeight: 240 }}\n      defaultExpanded={['root']}\n      defaultExpandIcon={<Icon icon={ExpandIcon} />}\n      defaultCollapseIcon={<Icon icon='tabler:chevron-down' />}\n    >\n      {renderTree(data)}\n    </TreeView>\n  )\n}\n\nexport default TreeViewRichObject\n"})}),N=()=>{let{settings:e}=(0,a.r)();return(0,t.jsxs)(r.ZP,{container:!0,spacing:6,className:"match-height",children:[(0,t.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,t.jsxs)(d.Z,{title:"Basic Tree View",code:{tsx:null,jsx:S},children:[(0,t.jsxs)(o.Z,{sx:{mb:4},children:["Use ",(0,t.jsx)("code",{children:"TreeView"})," & ",(0,t.jsx)("code",{children:"TreeItem"})," components and ",(0,t.jsx)("code",{children:"defaultCollapseIcon"})," &"," ",(0,t.jsx)("code",{children:"defaultExpandIcon"})," props with ",(0,t.jsx)("code",{children:"TreeView"})," component for a simple tree view."]}),(0,t.jsx)(m,{direction:e.direction})]})}),(0,t.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,t.jsxs)(d.Z,{title:"Multi Selection",code:{tsx:null,jsx:E},children:[(0,t.jsxs)(o.Z,{sx:{mb:4},children:["Use ",(0,t.jsx)("code",{children:"multiSelect"})," prop for multiple selection in a tree view."]}),(0,t.jsx)(y,{direction:e.direction})]})}),(0,t.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,t.jsxs)(d.Z,{title:"Controlled Tree View",code:{tsx:null,jsx:v},children:[(0,t.jsxs)(o.Z,{sx:{mb:4},children:["Manage ",(0,t.jsx)("code",{children:"expanded"}),", ",(0,t.jsx)("code",{children:"selected"}),", ",(0,t.jsx)("code",{children:"onNodeToggle"})," and ",(0,t.jsx)("code",{children:"onNodeSelect"})," ","props with the help of states."]}),(0,t.jsx)(x,{direction:e.direction})]})}),(0,t.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,t.jsxs)(d.Z,{title:"Rich Object",code:{tsx:null,jsx:M},children:[(0,t.jsxs)(o.Z,{sx:{mb:4},children:[(0,t.jsx)("code",{children:"TreeView"})," and ",(0,t.jsx)("code",{children:"TreeItem"})," components can also use APIs. Use an object and recursion can be used to handle it."]}),(0,t.jsx)(b,{direction:e.direction})]})}),(0,t.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,t.jsxs)(d.Z,{title:"Customized Tree View",code:{tsx:null,jsx:C},children:[(0,t.jsxs)(o.Z,{sx:{mb:4},children:["Use ",(0,t.jsx)("code",{children:"styled"})," hook to customize your tree view."]}),(0,t.jsx)(j,{})]})}),(0,t.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,t.jsx)(d.Z,{title:"Gmail Clone",code:{tsx:null,jsx:V},children:(0,t.jsx)(w,{direction:e.direction})})})]})};var H=N}},function(e){e.O(0,[5511,1456,9774,2888,179],function(){return e(e.s=60478)}),_N_E=e.O()}]);