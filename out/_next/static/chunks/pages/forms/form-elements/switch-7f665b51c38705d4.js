(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2947],{92611:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forms/form-elements/switch",function(){return o(96806)}])},93682:function(e,t,o){"use strict";o.d(t,{Z:function(){return v}});var n=o(85893),l=o(67294),r=o(87357),a=o(66242),c=o(34386),s=o(67720),i=o(57922),d=o(93946),m=o(78445),h=o(44267),u=o(96420),x=o(98396),p=o(33454),b=o(79878),j=o(15660),w=o.n(j),f=o(86501),g=o(66485),S=o.n(g);let C=e=>e&&("TEXTAREA"===e.nodeName||"INPUT"===e.nodeName);var Z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,l.useRef)(null),o=()=>{e.onSuccess&&e.onSuccess(),e.selectOnCopy&&C(t.current)&&t.current.select()},n=()=>{e.onError&&e.onError();let o=!1!==e.selectOnError;o&&C(t.current)&&t.current.select()},r=e=>{S()(e).then(o).catch(n)},a=(0,l.useCallback)(e=>{"string"==typeof e?r(e):t.current&&r(t.current.value)},[]);return{copy:a,target:t}};let k=e=>{let{id:t,sx:o,code:j,title:g,children:S,className:C}=e,[k,v]=(0,l.useState)(!1),[F,L]=(0,l.useState)(null!==j.tsx?"tsx":"jsx"),z=Z(),M=(0,x.Z)(e=>e.breakpoints.down("md"));(0,l.useEffect)(()=>{w().highlightAll()},[k,F]);let I=()=>null!==j.tsx&&"tsx"===F?j.tsx.props.children.props.children:null!==j.jsx&&"jsx"===F?j.jsx.props.children.props.children:"",y=()=>{z.copy(I()),f.ZP.success("The source code has been copied to your clipboard.",{duration:2e3})};return(0,n.jsxs)(a.Z,{className:C,sx:{"& .MuiCardHeader-action":{lineHeight:.8},...o},id:t||"card-snippet--".concat(g.toLowerCase().replace(/ /g,"-")),children:[(0,n.jsx)(m.Z,{title:g,...M?{}:{action:(0,n.jsx)(d.Z,{onClick:()=>v(!k),children:(0,n.jsx)(b.Z,{icon:"tabler:code",fontSize:20})})}}),(0,n.jsx)(h.Z,{children:S}),M?null:(0,n.jsxs)(i.Z,{in:k,children:[(0,n.jsx)(s.Z,{sx:{my:"0 !important"}}),(0,n.jsxs)(h.Z,{sx:{position:"relative","& pre":{m:"0 !important",maxHeight:500}},children:[(0,n.jsx)(r.Z,{sx:{mb:4,display:"flex",alignItems:"center",justifyContent:"flex-end"},children:(0,n.jsxs)(p.Z,{exclusive:!0,size:"small",color:"primary",value:F,onChange:(e,t)=>null!==t?L(t):null,children:[null!==j.tsx?(0,n.jsx)(u.Z,{value:"tsx",children:(0,n.jsx)(b.Z,{icon:"tabler:brand-typescript",fontSize:20})}):null,null!==j.jsx?(0,n.jsx)(u.Z,{value:"jsx",children:(0,n.jsx)(b.Z,{icon:"tabler:brand-javascript",fontSize:20})}):null]})}),(0,n.jsx)(c.Z,{title:"Copy the source",placement:"top",children:(0,n.jsx)(d.Z,{onClick:y,sx:{top:"5rem",color:"grey.100",right:"2.5625rem",position:"absolute"},children:(0,n.jsx)(b.Z,{icon:"tabler:copy",fontSize:20})})}),(0,n.jsx)("div",{children:null!==j[F]?j[F]:null})]})]})]})};var v=k},96806:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return z}});var n=o(85893),l=o(86886),r=o(15861),a=o(93682),c=o(72852),s=o(53457),i=o(50480);let d=()=>(0,n.jsxs)(s.Z,{row:!0,children:[(0,n.jsx)(i.Z,{control:(0,n.jsx)(c.Z,{defaultChecked:!0}),label:"Checked"}),(0,n.jsx)(i.Z,{control:(0,n.jsx)(c.Z,{}),label:"Unchecked"}),(0,n.jsx)(i.Z,{disabled:!0,control:(0,n.jsx)(c.Z,{defaultChecked:!0}),label:"Disabled Checked"}),(0,n.jsx)(i.Z,{disabled:!0,control:(0,n.jsx)(c.Z,{}),label:"Disabled Unchecked"})]}),m=()=>(0,n.jsxs)(s.Z,{row:!0,children:[(0,n.jsx)(i.Z,{control:(0,n.jsx)(c.Z,{size:"small"}),label:"Small"}),(0,n.jsx)(i.Z,{control:(0,n.jsx)(c.Z,{}),label:"Default"})]}),h=()=>(0,n.jsxs)(s.Z,{row:!0,children:[(0,n.jsx)(i.Z,{control:(0,n.jsx)(c.Z,{defaultChecked:!0}),label:"Primary"}),(0,n.jsx)(i.Z,{control:(0,n.jsx)(c.Z,{defaultChecked:!0,color:"secondary"}),label:"Secondary"}),(0,n.jsx)(i.Z,{control:(0,n.jsx)(c.Z,{defaultChecked:!0,color:"success"}),label:"Success"}),(0,n.jsx)(i.Z,{control:(0,n.jsx)(c.Z,{defaultChecked:!0,color:"error"}),label:"Error"}),(0,n.jsx)(i.Z,{control:(0,n.jsx)(c.Z,{defaultChecked:!0,color:"warning"}),label:"Warning"}),(0,n.jsx)(i.Z,{control:(0,n.jsx)(c.Z,{defaultChecked:!0,color:"info"}),label:"Info"})]});var u=o(90948);let x=(0,u.ZP)(c.Z)(e=>{let{theme:t}=e;return{width:62,height:34,padding:7,margin:"8px !important","& .MuiSwitch-switchBase":{top:0,left:12,margin:1,padding:"0 !important",transform:"translateX(-12px)","&.Mui-checked":{color:"#fff",left:2,transform:"translateX(22px)","& .MuiSwitch-thumb:before":{backgroundImage:'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="'.concat(encodeURIComponent("#fff"),'" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>\')')},"& + .MuiSwitch-track":{opacity:1,backgroundColor:"dark"===t.palette.mode?"#8796A5":"#aab4be"}}},"& .MuiSwitch-thumb":{backgroundColor:"dark"===t.palette.mode?"#003892 !important":"#001e3c !important",width:32,height:32,"&:before":{content:"''",position:"absolute",width:"100%",height:"100%",left:0,top:0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundImage:'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="'.concat(encodeURIComponent("#fff"),'" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>\')')}},"& .MuiSwitch-track":{width:48,border:0,height:20,opacity:1,borderRadius:10,boxShadow:"none !important",backgroundColor:"dark"===t.palette.mode?"#8796A5":"#aab4be"}}}),p=()=>(0,n.jsx)(i.Z,{label:"MUI switch",control:(0,n.jsx)(x,{sx:{m:1},defaultChecked:!0,disableRipple:!1})}),b=()=>(0,n.jsxs)("div",{children:[(0,n.jsx)(c.Z,{defaultChecked:!0}),(0,n.jsx)(c.Z,{}),(0,n.jsx)(c.Z,{disabled:!0,defaultChecked:!0}),(0,n.jsx)(c.Z,{disabled:!0})]}),j=()=>(0,n.jsxs)("div",{children:[(0,n.jsxs)(s.Z,{row:!0,children:[(0,n.jsx)(i.Z,{value:"top",label:"Top",labelPlacement:"top",sx:{mr:8},control:(0,n.jsx)(c.Z,{})}),(0,n.jsx)(i.Z,{value:"bottom",control:(0,n.jsx)(c.Z,{}),label:"Bottom",labelPlacement:"bottom"})]}),(0,n.jsxs)(s.Z,{row:!0,sx:{mt:4},children:[(0,n.jsx)(i.Z,{value:"start",label:"Start",labelPlacement:"start",sx:{mr:4},control:(0,n.jsx)(c.Z,{})}),(0,n.jsx)(i.Z,{value:"end",control:(0,n.jsx)(c.Z,{}),label:"End",labelPlacement:"end"})]})]});var w=o(67294);let f=()=>{let[e,t]=(0,w.useState)(!1),o=e=>{t(e.target.checked)};return(0,n.jsxs)(s.Z,{row:!0,children:[(0,n.jsx)(i.Z,{label:"Controlled",control:(0,n.jsx)(c.Z,{checked:e,onChange:o})}),(0,n.jsx)(i.Z,{control:(0,n.jsx)(c.Z,{}),label:"Uncontrolled"})]})},g=(0,n.jsx)("pre",{className:"language-jsx",children:(0,n.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Switch from '@mui/material/Switch'\nimport FormGroup from '@mui/material/FormGroup'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst SwitchesColors = () => {\n  return (\n    <FormGroup row>\n      <FormControlLabel control={<Switch defaultChecked />} label='Primary' />\n      <FormControlLabel control={<Switch defaultChecked color='secondary' />} label='Secondary' />\n      <FormControlLabel control={<Switch defaultChecked color='success' />} label='Success' />\n      <FormControlLabel control={<Switch defaultChecked color='error' />} label='Error' />\n      <FormControlLabel control={<Switch defaultChecked color='warning' />} label='Warning' />\n      <FormControlLabel control={<Switch defaultChecked color='info' />} label='Info' />\n    </FormGroup>\n  )\n}\n\nexport default SwitchesColors\n"})}),S=(0,n.jsx)("pre",{className:"language-jsx",children:(0,n.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Switch from '@mui/material/Switch'\nimport FormGroup from '@mui/material/FormGroup'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst SwitchesBasic = () => {\n  return (\n    <FormGroup row>\n      <FormControlLabel control={<Switch defaultChecked />} label='Checked' />\n      <FormControlLabel control={<Switch />} label='Unchecked' />\n      <FormControlLabel disabled control={<Switch defaultChecked />} label='Disabled Checked' />\n      <FormControlLabel disabled control={<Switch />} label='Disabled Unchecked' />\n    </FormGroup>\n  )\n}\n\nexport default SwitchesBasic\n"})}),C=(0,n.jsx)("pre",{className:"language-jsx",children:(0,n.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Switch from '@mui/material/Switch'\nimport FormGroup from '@mui/material/FormGroup'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst SwitchesControlledUncontrolled = () => {\n  // ** State\n  const [checked, setChecked] = useState(false)\n\n  const handleChange = event => {\n    setChecked(event.target.checked)\n  }\n\n  return (\n    <FormGroup row>\n      <FormControlLabel label='Controlled' control={<Switch checked={checked} onChange={handleChange} />} />\n      <FormControlLabel control={<Switch />} label='Uncontrolled' />\n    </FormGroup>\n  )\n}\n\nexport default SwitchesControlledUncontrolled\n"})}),Z=(0,n.jsx)("pre",{className:"language-jsx",children:(0,n.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport { styled } from '@mui/material/styles'\nimport Switch from '@mui/material/Switch'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\n// Styled FormControlLabel component\nconst MaterialUISwitch = styled(Switch)(({ theme }) => ({\n  width: 62,\n  height: 34,\n  padding: 7,\n  margin: '8px !important',\n  '& .MuiSwitch-switchBase': {\n    top: 0,\n    left: 12,\n    margin: 1,\n    padding: '0 !important',\n    transform: 'translateX(-12px)',\n    '&.Mui-checked': {\n      color: '#fff',\n      left: 2,\n      transform: 'translateX(22px)',\n      '& .MuiSwitch-thumb:before': {\n        backgroundImage: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"20\" width=\"20\" viewBox=\"0 0 20 20\"><path fill=\"{encodeURIComponent(\n          '#fff'\n        )}\" d=\"M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z\"/></svg>')\n      },\n      '& + .MuiSwitch-track': {\n        opacity: 1,\n        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be'\n      }\n    }\n  },\n  '& .MuiSwitch-thumb': {\n    backgroundColor: theme.palette.mode === 'dark' ? '#003892 !important' : '#001e3c !important',\n    width: 32,\n    height: 32,\n    '&:before': {\n      content: \"''\",\n      position: 'absolute',\n      width: '100%',\n      height: '100%',\n      left: 0,\n      top: 0,\n      backgroundRepeat: 'no-repeat',\n      backgroundPosition: 'center',\n      backgroundImage: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"20\" width=\"20\" viewBox=\"0 0 20 20\"><path fill=\"{encodeURIComponent(\n        '#fff'\n      )}\" d=\"M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z\"/></svg>')\n    }\n  },\n  '& .MuiSwitch-track': {\n    width: 48,\n    border: 0,\n    height: 20,\n    opacity: 1,\n    borderRadius: 10,\n    boxShadow: 'none !important',\n    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be'\n  }\n}))\n\nconst SwitchesCustomized = () => (\n  <FormControlLabel\n    label='MUI switch'\n    control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked disableRipple={false} />}\n  />\n)\n\nexport default SwitchesCustomized\n"})}),k=(0,n.jsx)("pre",{className:"language-jsx",children:(0,n.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Switch from '@mui/material/Switch'\nimport FormGroup from '@mui/material/FormGroup'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst SwitchedLabelPlacement = () => {\n  return (\n    <div>\n      <FormGroup row>\n        <FormControlLabel value='top' label='Top' labelPlacement='top' sx={{ mr: 8 }} control={<Switch />} />\n        <FormControlLabel value='bottom' control={<Switch />} label='Bottom' labelPlacement='bottom' />\n      </FormGroup>\n      <FormGroup row sx={{ mt: 4 }}>\n        <FormControlLabel value='start' label='Start' labelPlacement='start' sx={{ mr: 4 }} control={<Switch />} />\n        <FormControlLabel value='end' control={<Switch />} label='End' labelPlacement='end' />\n      </FormGroup>\n    </div>\n  )\n}\n\nexport default SwitchedLabelPlacement\n"})}),v=(0,n.jsx)("pre",{className:"language-jsx",children:(0,n.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Switch from '@mui/material/Switch'\n\nconst SwitchesStandalone = () => {\n  return (\n    <div>\n      <Switch defaultChecked />\n      <Switch />\n      <Switch disabled defaultChecked />\n      <Switch disabled />\n    </div>\n  )\n}\n\nexport default SwitchesStandalone\n"})}),F=(0,n.jsx)("pre",{className:"language-jsx",children:(0,n.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Switch from '@mui/material/Switch'\nimport FormGroup from '@mui/material/FormGroup'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst SwitchesSizes = () => {\n  return (\n    <FormGroup row>\n      <FormControlLabel control={<Switch size='small' />} label='Small' />\n      <FormControlLabel control={<Switch />} label='Default' />\n    </FormGroup>\n  )\n}\n\nexport default SwitchesSizes\n"})}),L=()=>(0,n.jsxs)(l.ZP,{container:!0,spacing:6,className:"match-height",children:[(0,n.jsx)(l.ZP,{item:!0,xs:12,children:(0,n.jsx)(a.Z,{title:"Basic Switches",code:{tsx:null,jsx:S},children:(0,n.jsx)(d,{})})}),(0,n.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,n.jsxs)(a.Z,{title:"Controlled and Uncontrolled",code:{tsx:null,jsx:C},children:[(0,n.jsxs)(r.Z,{sx:{mb:2},children:["Manage ",(0,n.jsx)("code",{children:"checked"})," prop with the help of a state for controlled ",(0,n.jsx)("code",{children:"Switch"})," and use",(0,n.jsx)("code",{children:"defaultChecked"})," prop for uncontrolled ",(0,n.jsx)("code",{children:"Switch"}),"."]}),(0,n.jsx)(f,{})]})}),(0,n.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,n.jsxs)(a.Z,{title:"Label Placement",code:{tsx:null,jsx:k},children:[(0,n.jsxs)(r.Z,{sx:{mb:2},children:["Use ",(0,n.jsx)("code",{children:"labelPlacement"})," prop with ",(0,n.jsx)("code",{children:"FormControlLabel"})," component to change the placement of the label."]}),(0,n.jsx)(j,{})]})}),(0,n.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,n.jsxs)(a.Z,{title:"Colors",code:{tsx:null,jsx:g},children:[(0,n.jsxs)(r.Z,{sx:{mb:2},children:["Use ",(0,n.jsx)("code",{children:"color"})," prop with ",(0,n.jsx)("code",{children:"Switch"})," component for different colored switch."]}),(0,n.jsx)(h,{})]})}),(0,n.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,n.jsxs)(a.Z,{title:"Customized Switches",code:{tsx:null,jsx:Z},children:[(0,n.jsxs)(r.Z,{sx:{mb:4},children:["Use ",(0,n.jsx)("code",{children:"styled"})," hook to customize your switch."]}),(0,n.jsx)(p,{})]})}),(0,n.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,n.jsxs)(a.Z,{title:"Sizes",code:{tsx:null,jsx:F},children:[(0,n.jsxs)(r.Z,{sx:{mb:2},children:["Use ",(0,n.jsx)("code",{children:"size='small'"})," prop with ",(0,n.jsx)("code",{children:"Switch"})," component for small switch."]}),(0,n.jsx)(m,{})]})}),(0,n.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,n.jsx)(a.Z,{title:"Standalone Switches",code:{tsx:null,jsx:v},children:(0,n.jsx)(b,{})})})]});var z=L}},function(e){e.O(0,[5511,5776,9774,2888,179],function(){return e(e.s=92611)}),_N_E=e.O()}]);