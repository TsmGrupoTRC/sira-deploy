(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4373],{66485:function(e){function t(){return new DOMException("The request is not allowed","NotAllowedError")}async function n(e){if(!navigator.clipboard)throw t();return navigator.clipboard.writeText(e)}async function r(e){let n=document.createElement("span");n.textContent=e,n.style.whiteSpace="pre",n.style.webkitUserSelect="auto",n.style.userSelect="all",document.body.appendChild(n);let r=window.getSelection(),i=window.document.createRange();r.removeAllRanges(),i.selectNode(n),r.addRange(i);let l=!1;try{l=window.document.execCommand("copy")}finally{r.removeAllRanges(),window.document.body.removeChild(n)}if(!l)throw t()}async function i(e){try{await n(e)}catch(n){try{await r(e)}catch(e){throw e||n||t()}}}/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */e.exports=i},29410:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forms/form-elements/input-mask",function(){return n(69850)}])},93682:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var r=n(85893),i=n(67294),l=n(87357),o=n(66242),s=n(34386),a=n(67720),c=n(57922),m=n(93946),d=n(78445),x=n(44267),p=n(96420),u=n(98396),h=n(33454),b=n(79878),j=n(15660),f=n.n(j),g=n(86501),Z=n(66485),y=n.n(Z);let C=e=>e&&("TEXTAREA"===e.nodeName||"INPUT"===e.nodeName);var v=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,i.useRef)(null),n=()=>{e.onSuccess&&e.onSuccess(),e.selectOnCopy&&C(t.current)&&t.current.select()},r=()=>{e.onError&&e.onError();let n=!1!==e.selectOnError;n&&C(t.current)&&t.current.select()},l=e=>{y()(e).then(n).catch(r)},o=(0,i.useCallback)(e=>{"string"==typeof e?l(e):t.current&&l(t.current.value)},[]);return{copy:o,target:t}};let S=e=>{let{id:t,sx:n,code:j,title:Z,children:y,className:C}=e,[S,k]=(0,i.useState)(!1),[w,I]=(0,i.useState)(null!==j.tsx?"tsx":"jsx"),P=v(),z=(0,u.Z)(e=>e.breakpoints.down("md"));(0,i.useEffect)(()=>{f().highlightAll()},[S,w]);let G=()=>null!==j.tsx&&"tsx"===w?j.tsx.props.children.props.children:null!==j.jsx&&"jsx"===w?j.jsx.props.children.props.children:"",F=()=>{P.copy(G()),g.ZP.success("The source code has been copied to your clipboard.",{duration:2e3})};return(0,r.jsxs)(o.Z,{className:C,sx:{"& .MuiCardHeader-action":{lineHeight:.8},...n},id:t||"card-snippet--".concat(Z.toLowerCase().replace(/ /g,"-")),children:[(0,r.jsx)(d.Z,{title:Z,...z?{}:{action:(0,r.jsx)(m.Z,{onClick:()=>k(!S),children:(0,r.jsx)(b.Z,{icon:"tabler:code",fontSize:20})})}}),(0,r.jsx)(x.Z,{children:y}),z?null:(0,r.jsxs)(c.Z,{in:S,children:[(0,r.jsx)(a.Z,{sx:{my:"0 !important"}}),(0,r.jsxs)(x.Z,{sx:{position:"relative","& pre":{m:"0 !important",maxHeight:500}},children:[(0,r.jsx)(l.Z,{sx:{mb:4,display:"flex",alignItems:"center",justifyContent:"flex-end"},children:(0,r.jsxs)(h.Z,{exclusive:!0,size:"small",color:"primary",value:w,onChange:(e,t)=>null!==t?I(t):null,children:[null!==j.tsx?(0,r.jsx)(p.Z,{value:"tsx",children:(0,r.jsx)(b.Z,{icon:"tabler:brand-typescript",fontSize:20})}):null,null!==j.jsx?(0,r.jsx)(p.Z,{value:"jsx",children:(0,r.jsx)(b.Z,{icon:"tabler:brand-javascript",fontSize:20})}):null]})}),(0,r.jsx)(s.Z,{title:"Copy the source",placement:"top",children:(0,r.jsx)(m.Z,{onClick:F,sx:{top:"5rem",color:"grey.100",right:"2.5625rem",position:"absolute"},children:(0,r.jsx)(b.Z,{icon:"tabler:copy",fontSize:20})})}),(0,r.jsx)("div",{children:null!==j[w]?j[w]:null})]})]})]})};var k=S},46762:function(e,t,n){"use strict";var r=n(85893),i=n(86886);let l=e=>{let{title:t,subtitle:n}=e;return(0,r.jsxs)(i.ZP,{item:!0,xs:12,children:[t,n||null]})};t.Z=l},22967:function(e,t,n){"use strict";var r=n(90948),i=n(87357);let l=(0,r.ZP)(i.Z)(e=>{let{theme:t}=e;return{"& input":{height:56,fontSize:16,width:"100%",borderWidth:1,background:"none",borderStyle:"solid",padding:"16.5px 14px",color:t.palette.text.primary,borderRadius:t.shape.borderRadius,fontFamily:t.typography.body1.fontFamily,borderColor:"rgba(".concat(t.palette.customColors.main,", 0.22)"),transition:t.transitions.create(["border-color","box-shadow"]),"&:focus, &:focus-visible":{outline:0,borderWidth:2,padding:"15.5px 13px",borderColor:"".concat(t.palette.primary.main," !important"),boxShadow:"0 2px 3px 0 rgba(".concat(t.palette.customColors.main,", 0.1)")},"&::-webkit-input-placeholder":{color:t.palette.text.secondary}}}});t.Z=l},69850:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(85893),i=n(41664),l=n.n(i),o=n(86886),s=n(90948),a=n(15861),c=n(46762),m=n(93682),d=n(22967),x=n(47312),p=n(52034),u=n.n(p);n(49634);let h=()=>(0,r.jsxs)(o.ZP,{container:!0,spacing:6,children:[(0,r.jsxs)(o.ZP,{item:!0,xs:12,sm:6,lg:4,children:[(0,r.jsx)(x.Z,{htmlFor:"credit-card",sx:{mb:2,fontSize:".75rem",maxWidth:"max-content"},children:"Credit Card"}),(0,r.jsx)(u(),{id:"credit-card",options:{creditCard:!0},placeholder:"0000 0000 0000 0000"})]}),(0,r.jsxs)(o.ZP,{item:!0,xs:12,sm:6,lg:4,children:[(0,r.jsx)(x.Z,{htmlFor:"phone-number",sx:{mb:2,fontSize:".75rem",maxWidth:"max-content"},children:"Phone Number"}),(0,r.jsx)(u(),{id:"phone-number",placeholder:"1 234 567 8900",options:{phone:!0,phoneRegionCode:"US"}})]}),(0,r.jsxs)(o.ZP,{item:!0,xs:12,sm:6,lg:4,children:[(0,r.jsx)(x.Z,{htmlFor:"date",sx:{mb:2,fontSize:".75rem",maxWidth:"max-content"},children:"Date"}),(0,r.jsx)(u(),{id:"date",placeholder:"2001-01-01",options:{date:!0,delimiter:"-",datePattern:["Y","m","d"]}})]}),(0,r.jsxs)(o.ZP,{item:!0,xs:12,sm:6,lg:4,children:[(0,r.jsx)(x.Z,{htmlFor:"time",sx:{mb:2,fontSize:".75rem",maxWidth:"max-content"},children:"Time"}),(0,r.jsx)(u(),{id:"time",placeholder:"12:00:00",options:{time:!0,timePattern:["h","m","s"]}})]}),(0,r.jsxs)(o.ZP,{item:!0,xs:12,sm:6,lg:4,children:[(0,r.jsx)(x.Z,{htmlFor:"numeral",sx:{mb:2,fontSize:".75rem",maxWidth:"max-content"},children:"Numeral"}),(0,r.jsx)(u(),{id:"numeral",placeholder:"10,000",options:{numeral:!0,numeralThousandsGroupStyle:"thousand"}})]}),(0,r.jsxs)(o.ZP,{item:!0,xs:12,sm:6,lg:4,children:[(0,r.jsx)(x.Z,{htmlFor:"blocks",sx:{mb:2,fontSize:".75rem",maxWidth:"max-content"},children:"Blocks"}),(0,r.jsx)(u(),{id:"blocks",placeholder:"Blocks [4, 3, 3]",options:{blocks:[4,3,3],uppercase:!0}})]}),(0,r.jsxs)(o.ZP,{item:!0,xs:12,sm:6,lg:4,children:[(0,r.jsx)(x.Z,{htmlFor:"delimiter",sx:{mb:2,fontSize:".75rem",maxWidth:"max-content"},children:"Delimiter"}),(0,r.jsx)(u(),{id:"delimiter",placeholder:"Delimiter: '.'",options:{delimiter:"\xb7",blocks:[3,3,3],uppercase:!0}})]}),(0,r.jsxs)(o.ZP,{item:!0,xs:12,sm:6,lg:4,children:[(0,r.jsx)(x.Z,{htmlFor:"custom-delimiter",sx:{mb:2,fontSize:".75rem",maxWidth:"max-content"},children:"Custom Delimiters"}),(0,r.jsx)(u(),{id:"custom-delimiter",placeholder:"Delimiter: ['.', '.', '-']",options:{delimiters:[".",".","-"],blocks:[3,3,3,2],uppercase:!0}})]}),(0,r.jsxs)(o.ZP,{item:!0,xs:12,sm:6,lg:4,children:[(0,r.jsx)(x.Z,{htmlFor:"prefix",sx:{mb:2,fontSize:".75rem",maxWidth:"max-content"},children:"Prefix"}),(0,r.jsx)(u(),{id:"prefix",options:{prefix:"+63",blocks:[3,3,3,4],uppercase:!0}})]})]}),b=(0,r.jsx)("pre",{className:"language-jsx",children:(0,r.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Grid from '@mui/material/Grid'\nimport InputLabel from '@mui/material/InputLabel'\n\n// ** CleaveJS Imports\nimport Cleave from 'cleave.js/react'\nimport 'cleave.js/dist/addons/cleave-phone.us'\n\nconst InputMaskExamples = () => {\n  return (\n    <Grid container spacing={6}>\n      <Grid item xs={12} sm={6} lg={4}>\n        <InputLabel htmlFor='credit-card' sx={{ mb: 2, fontSize: '.75rem', maxWidth: 'max-content' }}>\n          Credit Card\n        </InputLabel>\n        <Cleave id='credit-card' options={{ creditCard: true }} placeholder='0000 0000 0000 0000' />\n      </Grid>\n      <Grid item xs={12} sm={6} lg={4}>\n        <InputLabel htmlFor='phone-number' sx={{ mb: 2, fontSize: '.75rem', maxWidth: 'max-content' }}>\n          Phone Number\n        </InputLabel>\n        <Cleave id='phone-number' placeholder='1 234 567 8900' options={{ phone: true, phoneRegionCode: 'US' }} />\n      </Grid>\n      <Grid item xs={12} sm={6} lg={4}>\n        <InputLabel htmlFor='date' sx={{ mb: 2, fontSize: '.75rem', maxWidth: 'max-content' }}>\n          Date\n        </InputLabel>\n        <Cleave\n          id='date'\n          placeholder='2001-01-01'\n          options={{ date: true, delimiter: '-', datePattern: ['Y', 'm', 'd'] }}\n        />\n      </Grid>\n      <Grid item xs={12} sm={6} lg={4}>\n        <InputLabel htmlFor='time' sx={{ mb: 2, fontSize: '.75rem', maxWidth: 'max-content' }}>\n          Time\n        </InputLabel>\n        <Cleave id='time' placeholder='12:00:00' options={{ time: true, timePattern: ['h', 'm', 's'] }} />\n      </Grid>\n      <Grid item xs={12} sm={6} lg={4}>\n        <InputLabel htmlFor='numeral' sx={{ mb: 2, fontSize: '.75rem', maxWidth: 'max-content' }}>\n          Numeral\n        </InputLabel>\n        <Cleave id='numeral' placeholder='10,000' options={{ numeral: true, numeralThousandsGroupStyle: 'thousand' }} />\n      </Grid>\n      <Grid item xs={12} sm={6} lg={4}>\n        <InputLabel htmlFor='blocks' sx={{ mb: 2, fontSize: '.75rem', maxWidth: 'max-content' }}>\n          Blocks\n        </InputLabel>\n        <Cleave id='blocks' placeholder='Blocks [4, 3, 3]' options={{ blocks: [4, 3, 3], uppercase: true }} />\n      </Grid>\n      <Grid item xs={12} sm={6} lg={4}>\n        <InputLabel htmlFor='delimiter' sx={{ mb: 2, fontSize: '.75rem', maxWidth: 'max-content' }}>\n          Delimiter\n        </InputLabel>\n        <Cleave\n          id='delimiter'\n          placeholder=\"Delimiter: '.'\"\n          options={{ delimiter: '\xb7', blocks: [3, 3, 3], uppercase: true }}\n        />\n      </Grid>\n      <Grid item xs={12} sm={6} lg={4}>\n        <InputLabel htmlFor='custom-delimiter' sx={{ mb: 2, fontSize: '.75rem', maxWidth: 'max-content' }}>\n          Custom Delimiters\n        </InputLabel>\n        <Cleave\n          id='custom-delimiter'\n          placeholder=\"Delimiter: ['.', '.', '-']\"\n          options={{ delimiters: ['.', '.', '-'], blocks: [3, 3, 3, 2], uppercase: true }}\n        />\n      </Grid>\n      <Grid item xs={12} sm={6} lg={4}>\n        <InputLabel htmlFor='prefix' sx={{ mb: 2, fontSize: '.75rem', maxWidth: 'max-content' }}>\n          Prefix\n        </InputLabel>\n        <Cleave id='prefix' options={{ prefix: '+63', blocks: [3, 3, 3, 4], uppercase: true }} />\n      </Grid>\n    </Grid>\n  )\n}\n\nexport default InputMaskExamples\n"})}),j=(0,s.ZP)(l())(e=>{let{theme:t}=e;return{textDecoration:"none",color:t.palette.primary.main}}),f=()=>(0,r.jsx)(d.Z,{children:(0,r.jsxs)(o.ZP,{container:!0,spacing:6,children:[(0,r.jsx)(c.Z,{title:(0,r.jsx)(a.Z,{variant:"h5",children:(0,r.jsx)(j,{href:"https://github.com/nosir/cleave.js",target:"_blank",children:"Cleave.js"})}),subtitle:(0,r.jsx)(a.Z,{variant:"body2",children:"Format input text content when you are typing"})}),(0,r.jsx)(o.ZP,{item:!0,xs:12,children:(0,r.jsx)(m.Z,{title:"Input Masks",code:{tsx:null,jsx:b},children:(0,r.jsx)(h,{})})})]})});var g=f}},function(e){e.O(0,[5511,6565,9774,2888,179],function(){return e(e.s=29410)}),_N_E=e.O()}]);