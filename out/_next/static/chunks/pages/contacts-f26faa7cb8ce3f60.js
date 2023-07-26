(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1192],{6514:function(e,n,s){"use strict";s.d(n,{Z:function(){return f}});var r=s(63366),i=s(87462),o=s(67294),t=s(86010),l=s(94780),c=s(90948),x=s(71657),a=s(1588),d=s(34867);function h(e){return(0,d.Z)("MuiDialogContent",e)}(0,a.Z)("MuiDialogContent",["root","dividers"]);var j=s(4472),Z=s(85893);let u=["className","dividers"],m=e=>{let{classes:n,dividers:s}=e;return(0,l.Z)({root:["root",s&&"dividers"]},h,n)},g=(0,c.ZP)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,n)=>{let{ownerState:s}=e;return[n.root,s.dividers&&n.dividers]}})(({theme:e,ownerState:n})=>(0,i.Z)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},n.dividers?{padding:"16px 24px",borderTop:`1px solid ${(e.vars||e).palette.divider}`,borderBottom:`1px solid ${(e.vars||e).palette.divider}`}:{[`.${j.Z.root} + &`]:{paddingTop:0}})),p=o.forwardRef(function(e,n){let s=(0,x.Z)({props:e,name:"MuiDialogContent"}),{className:o,dividers:l=!1}=s,c=(0,r.Z)(s,u),a=(0,i.Z)({},s,{dividers:l}),d=m(a);return(0,Z.jsx)(g,(0,i.Z)({className:(0,t.Z)(d.root,o),ownerState:a,ref:n},c))});var f=p},4472:function(e,n,s){"use strict";s.d(n,{a:function(){return o}});var r=s(1588),i=s(34867);function o(e){return(0,i.Z)("MuiDialogTitle",e)}let t=(0,r.Z)("MuiDialogTitle",["root"]);n.Z=t},89007:function(e,n,s){"use strict";s.d(n,{Z:function(){return v}});var r=s(63366),i=s(87462),o=s(94780),t=s(86010),l=s(67294);s(59864);var c=s(12917),x=s(90948),a=s(71657),d=s(71579),h=s(1588),j=s(34867);function Z(e){return(0,j.Z)("MuiImageListItem",e)}let u=(0,h.Z)("MuiImageListItem",["root","img","standard","woven","masonry","quilted"]);var m=s(85893);let g=["children","className","cols","component","rows","style"],p=e=>{let{classes:n,variant:s}=e;return(0,o.Z)({root:["root",s],img:["img"]},Z,n)},f=(0,x.ZP)("li",{name:"MuiImageListItem",slot:"Root",overridesResolver:(e,n)=>{let{ownerState:s}=e;return[{[`& .${u.img}`]:n.img},n.root,n[s.variant]]}})(({ownerState:e})=>(0,i.Z)({display:"block",position:"relative"},"standard"===e.variant&&{display:"flex",flexDirection:"column"},"woven"===e.variant&&{height:"100%",alignSelf:"center","&:nth-of-type(even)":{height:"70%"}},{[`& .${u.img}`]:(0,i.Z)({objectFit:"cover",width:"100%",height:"100%",display:"block"},"standard"===e.variant&&{height:"auto",flexGrow:1})})),C=l.forwardRef(function(e,n){let s=(0,a.Z)({props:e,name:"MuiImageListItem"}),{children:o,className:x,cols:h=1,component:j="li",rows:Z=1,style:u}=s,C=(0,r.Z)(s,g),{rowHeight:v="auto",gap:P,variant:b}=l.useContext(c.Z),y="auto";"woven"===b?y=void 0:"auto"!==v&&(y=v*Z+P*(Z-1));let k=(0,i.Z)({},s,{cols:h,component:j,gap:P,rowHeight:v,rows:Z,variant:b}),S=p(k);return(0,m.jsx)(f,(0,i.Z)({as:j,className:(0,t.Z)(S.root,S[b],x),ref:n,style:(0,i.Z)({height:y,gridColumnEnd:"masonry"!==b?`span ${h}`:void 0,gridRowEnd:"masonry"!==b?`span ${Z}`:void 0,marginBottom:"masonry"===b?P:void 0},u),ownerState:k},C,{children:l.Children.map(o,e=>l.isValidElement(e)?"img"===e.type||(0,d.Z)(e,["Image"])?l.cloneElement(e,{className:(0,t.Z)(S.img,e.props.className)}):e:null)}))});var v=C},65450:function(e,n,s){"use strict";s.d(n,{Z:function(){return f}});var r=s(63366),i=s(87462),o=s(94780),t=s(86010),l=s(67294),c=s(90948),x=s(71657),a=s(1588),d=s(34867);function h(e){return(0,d.Z)("MuiImageList",e)}(0,a.Z)("MuiImageList",["root","masonry","quilted","standard","woven"]);var j=s(12917),Z=s(85893);let u=["children","className","cols","component","rowHeight","gap","style","variant"],m=e=>{let{classes:n,variant:s}=e;return(0,o.Z)({root:["root",s]},h,n)},g=(0,c.ZP)("ul",{name:"MuiImageList",slot:"Root",overridesResolver:(e,n)=>{let{ownerState:s}=e;return[n.root,n[s.variant]]}})(({ownerState:e})=>(0,i.Z)({display:"grid",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"},"masonry"===e.variant&&{display:"block"})),p=l.forwardRef(function(e,n){let s=(0,x.Z)({props:e,name:"MuiImageList"}),{children:o,className:c,cols:a=2,component:d="ul",rowHeight:h="auto",gap:p=4,style:f,variant:C="standard"}=s,v=(0,r.Z)(s,u),P=l.useMemo(()=>({rowHeight:h,gap:p,variant:C}),[h,p,C]);l.useEffect(()=>{},[]);let b="masonry"===C?(0,i.Z)({columnCount:a,columnGap:p},f):(0,i.Z)({gridTemplateColumns:`repeat(${a}, 1fr)`,gap:p},f),y=(0,i.Z)({},s,{component:d,gap:p,rowHeight:h,variant:C}),k=m(y);return(0,Z.jsx)(g,(0,i.Z)({as:d,className:(0,t.Z)(k.root,k[C],c),ref:n,style:b,ownerState:y},v,{children:(0,Z.jsx)(j.Z.Provider,{value:P,children:o})}))});var f=p},12917:function(e,n,s){"use strict";var r=s(67294);let i=r.createContext({});n.Z=i},18719:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contacts",function(){return s(78553)}])},78553:function(e,n,s){"use strict";s.r(n);var r=s(85893),i=s(67294),o=s(90948),t=s(87357),l=s(90629),c=s(86886),x=s(15861),a=s(64666),d=s(6514),h=s(65450),j=s(89007),Z=s(93946),u=s(79878),m=s(51964),g=s.n(m);let p=(0,o.ZP)(l.Z)(e=>{let{theme:n}=e;return{padding:n.spacing(0),margin:n.spacing(1),backgroundColor:"#D5DEED",color:n.palette.text.secondary}}),f=[{img:"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",title:"Breakfast"},{img:"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",title:"Breakfast"},{img:"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",title:"Breakfast"},{img:"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",title:"Breakfast"}],C=e=>{let{src:n}=e,[s,o]=(0,i.useState)(!1),[l,c]=(0,i.useState)(1),[h,j]=(0,i.useState)(!1),m=()=>{o(!0)},g=()=>{o(!1),j(!1),c(1)},p=()=>{c(e=>e+.1)},f=()=>{c(e=>e-.1)},C=()=>{h?(j(!1),c(1)):j(!0)},v=()=>{l<2&&c(e=>e+.1)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("img",{src:n,alt:"Imagen",onClick:m,onDoubleClick:v,style:{cursor:h?"grabbing":"pointer",width:"100%",height:"auto",transition:"transform 0.3s",transform:"scale(".concat(l,"))")},onMouseEnter:e=>e.currentTarget.style.transform="scale(1.1)",onMouseLeave:e=>e.currentTarget.style.transform="scale(".concat(l,")"),onWheel:e=>{e.preventDefault(),e.deltaY>0?f():p()}}),(0,r.jsx)(a.Z,{open:s,onClose:g,maxWidth:!h&&"md",fullWidth:!0,fullScreen:h,children:(0,r.jsxs)(d.Z,{children:[(0,r.jsxs)(t.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:[(0,r.jsx)(x.Z,{variant:"overline",gutterBottom:!0,children:"Imagen de c\xe1mara matr\xedcula"}),(0,r.jsx)(Z.Z,{onClick:g,"aria-label":"Close",sx:{left:"35%"},children:(0,r.jsx)(u.Z,{icon:"tabler:playstation-x"})})]}),(0,r.jsxs)(t.Z,{display:"flex",justifyContent:"space-between",alignItems:"left",children:[(0,r.jsxs)(t.Z,{display:"flex",flexDirection:"column",sx:{mr:5},children:[(0,r.jsx)(Z.Z,{onClick:p,"aria-label":"Zoom In",children:(0,r.jsx)(u.Z,{icon:"tabler:zoom-in"})}),(0,r.jsx)(Z.Z,{onClick:f,"aria-label":"Zoom Out",children:(0,r.jsx)(u.Z,{icon:"tabler:zoom-out"})}),(0,r.jsx)(Z.Z,{onClick:C,"aria-label":"Fullscreen",children:h?(0,r.jsx)(u.Z,{icon:"tabler:arrows-diagonal-minimize"}):(0,r.jsx)(u.Z,{icon:"tabler:arrows-diagonal"})})]}),(0,r.jsx)("img",{src:n,alt:"Imagen",style:{width:"".concat(90*l,"%"),height:"auto",cursor:"zoom-out",marginRight:10}})]})]})})]})};function v(){return(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)(c.ZP,{item:!0,xs:4,children:(0,r.jsxs)(p,{sx:{backgroundColor:"#3C3F55",mx:"auto",mt:10,width:"100%",height:"65vh"},children:[(0,r.jsxs)(t.Z,{children:[(0,r.jsx)(t.Z,{sx:{backgroundColor:"#3C3F55",textAlign:"center",justifyContent:"center",mb:2},children:(0,r.jsx)(t.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",color:"#D5DEED"},children:(0,r.jsx)(x.Z,{variant:"h7",component:"h3",sx:{fontSize:"15px"},children:"Datos del veh\xedculo registrados en DGT"})})}),(0,r.jsxs)(c.ZP,{container:!0,spacing:0,columns:16,children:[(0,r.jsx)(c.ZP,{xs:8,sx:{backgroundColor:"#4C506C"},children:(0,r.jsx)(x.Z,{variant:"h7",component:"h3",sx:{fontSize:"15px"},children:"Marca"})}),(0,r.jsx)(c.ZP,{xs:8,children:(0,r.jsx)(p,{children:(0,r.jsx)(x.Z,{sx:{color:"#000000"},children:"----"})})}),(0,r.jsx)(c.ZP,{xs:8,sx:{backgroundColor:"#4C506C"},children:(0,r.jsx)(x.Z,{variant:"h7",component:"h3",sx:{fontSize:"15px"},children:"Modelo"})}),(0,r.jsx)(c.ZP,{xs:8,children:(0,r.jsx)(p,{children:(0,r.jsx)(x.Z,{sx:{color:"#000000"},children:"----"})})}),(0,r.jsx)(c.ZP,{xs:8,sx:{backgroundColor:"#4C506C"},children:(0,r.jsx)(x.Z,{variant:"h7",component:"h3",sx:{fontSize:"15px"},children:"Tipo de carrocer\xeda"})}),(0,r.jsx)(c.ZP,{xs:8,children:(0,r.jsx)(p,{children:(0,r.jsx)(x.Z,{sx:{color:"#000000"},children:"----"})})}),(0,r.jsx)(c.ZP,{xs:8,sx:{backgroundColor:"#4C506C"},children:(0,r.jsx)(x.Z,{variant:"h7",component:"h3",sx:{fontSize:"15px"},children:"Color"})}),(0,r.jsx)(c.ZP,{xs:8,children:(0,r.jsx)(p,{children:(0,r.jsx)(x.Z,{sx:{color:"#000000"},children:"----"})})}),(0,r.jsx)(c.ZP,{xs:8,sx:{backgroundColor:"#4C506C"},children:(0,r.jsx)(x.Z,{variant:"h7",component:"h3",sx:{fontSize:"15px"},children:"Numero de bastidor"})}),(0,r.jsx)(c.ZP,{xs:8,children:(0,r.jsx)(p,{children:(0,r.jsx)(x.Z,{sx:{color:"#000000"},children:"----"})})})]})]}),(0,r.jsxs)(t.Z,{children:[(0,r.jsx)(t.Z,{sx:{backgroundColor:"#3C3F55",textAlign:"center",justifyContent:"center",mb:2},children:(0,r.jsx)(t.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",color:"#D5DEED"},children:(0,r.jsx)(x.Z,{variant:"h7",component:"h3",sx:{fontSize:"15px"},children:"Datos del propietario registrados en DGT"})})}),(0,r.jsxs)(c.ZP,{container:!0,spacing:0,columns:16,children:[(0,r.jsx)(c.ZP,{xs:8,sx:{backgroundColor:"#4C506C"},children:(0,r.jsx)(x.Z,{variant:"h7",component:"h3",sx:{fontSize:"15px"},children:"Nombre"})}),(0,r.jsx)(c.ZP,{xs:8,children:(0,r.jsx)(p,{children:(0,r.jsx)(x.Z,{sx:{color:"#000000"},children:"----"})})}),(0,r.jsx)(c.ZP,{xs:8,sx:{backgroundColor:"#4C506C"},children:(0,r.jsx)(x.Z,{variant:"h7",component:"h3",sx:{fontSize:"15px"},children:"Documento de identidad"})}),(0,r.jsx)(c.ZP,{xs:8,children:(0,r.jsx)(p,{children:(0,r.jsx)(x.Z,{sx:{color:"#000000"},children:"----"})})}),(0,r.jsx)(c.ZP,{xs:8,sx:{backgroundColor:"#4C506C"},children:(0,r.jsx)(x.Z,{variant:"h7",component:"h3",sx:{fontSize:"15px"},children:"Direcci\xf3n postal"})}),(0,r.jsx)(c.ZP,{xs:8,children:(0,r.jsx)(p,{children:(0,r.jsx)(x.Z,{sx:{color:"#000000"},children:"----"})})})]})]}),(0,r.jsxs)(t.Z,{children:[(0,r.jsx)(t.Z,{sx:{backgroundColor:"#3C3F55",textAlign:"center",justifyContent:"center",mb:2},children:(0,r.jsx)(t.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",color:"#D5DEED"},children:(0,r.jsx)(x.Z,{children:"Datos del requirimiento/s SISII del veh\xedculo"})})}),(0,r.jsxs)(c.ZP,{container:!0,spacing:0,columns:16,children:[(0,r.jsx)(c.ZP,{xs:8,sx:{backgroundColor:"#4C506C"},children:(0,r.jsx)(x.Z,{variant:"h7",component:"h3",sx:{fontSize:"15px"},children:"Procedimiento judicial"})}),(0,r.jsx)(c.ZP,{xs:8,children:(0,r.jsx)(p,{children:(0,r.jsx)(x.Z,{sx:{color:"#000000"},children:"----"})})}),(0,r.jsx)(c.ZP,{xs:8,sx:{backgroundColor:"#4C506C"},children:(0,r.jsx)(x.Z,{variant:"h7",component:"h3",sx:{fontSize:"15px"},children:"Agencia requisitoria"})}),(0,r.jsx)(c.ZP,{xs:8,children:(0,r.jsx)(p,{children:(0,r.jsx)(x.Z,{sx:{color:"#000000"},children:"----"})})}),(0,r.jsx)(c.ZP,{xs:8,sx:{backgroundColor:"#4C506C"},children:(0,r.jsx)(x.Z,{variant:"h7",component:"h3",sx:{fontSize:"15px"},children:"Pa\xeds requisidor"})}),(0,r.jsx)(c.ZP,{xs:8,children:(0,r.jsx)(p,{children:(0,r.jsx)(x.Z,{sx:{color:"#000000"},children:"----"})})}),(0,r.jsx)(c.ZP,{xs:8,sx:{backgroundColor:"#4C506C"},children:(0,r.jsx)(x.Z,{variant:"h7",component:"h3",sx:{fontSize:"15px"},children:"Motivo"})}),(0,r.jsx)(c.ZP,{xs:8,children:(0,r.jsx)(p,{children:(0,r.jsx)(x.Z,{sx:{color:"#000000"},children:"----"})})}),(0,r.jsx)(c.ZP,{xs:8,sx:{backgroundColor:"#4C506C"},children:(0,r.jsx)(x.Z,{variant:"h7",component:"h3",sx:{fontSize:"15px"},children:"Conducta"})}),(0,r.jsx)(c.ZP,{xs:8,children:(0,r.jsx)(p,{children:(0,r.jsx)(x.Z,{sx:{color:"#000000"},children:"----"})})}),(0,r.jsx)(c.ZP,{xs:8,sx:{backgroundColor:"#4C506C"},children:(0,r.jsx)(x.Z,{variant:"h7",component:"h3",sx:{fontSize:"15px"},children:"Marca,modelo y tipo"})}),(0,r.jsx)(c.ZP,{xs:8,children:(0,r.jsx)(p,{children:(0,r.jsx)(x.Z,{sx:{color:"#000000"},children:"----"})})}),(0,r.jsx)(c.ZP,{xs:8,sx:{backgroundColor:"#4C506C"},children:(0,r.jsx)(x.Z,{variant:"h7",component:"h3",sx:{fontSize:"15px"},children:"Fecha del registro"})}),(0,r.jsx)(c.ZP,{xs:8,children:(0,r.jsx)(p,{children:(0,r.jsx)(x.Z,{sx:{color:"#000000"},children:"----"})})}),(0,r.jsx)(c.ZP,{xs:8,sx:{backgroundColor:"#4C506C"},children:(0,r.jsx)(x.Z,{variant:"h7",component:"h3",sx:{fontSize:"15px"},children:"Fecha de \xfaltima modificaci\xf3n"})}),(0,r.jsx)(c.ZP,{xs:8,children:(0,r.jsx)(p,{children:(0,r.jsx)(x.Z,{sx:{color:"#000000"},children:"----"})})})]})]})]})}),(0,r.jsx)(c.ZP,{item:!0,xs:5,children:(0,r.jsxs)(p,{sx:{backgroundColor:"#3C3F55",mx:"auto",mt:10,width:"100%",height:"65vh"},children:[(0,r.jsxs)(t.Z,{children:[(0,r.jsx)(t.Z,{sx:{backgroundColor:"#3C3F55",textAlign:"center",justifyContent:"center",mb:2},children:(0,r.jsx)(t.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",color:"#D5DEED"},children:(0,r.jsx)(x.Z,{children:"Datos del requirimiento/s SISII del veh\xedculo"})})}),(0,r.jsxs)(c.ZP,{container:!0,spacing:0,columns:16,children:[(0,r.jsx)(c.ZP,{xs:8,sx:{backgroundColor:"#4C506C"},children:(0,r.jsx)(x.Z,{variant:"h7",component:"h3",sx:{fontSize:"15px"},children:"Pais requesitor"})}),(0,r.jsx)(c.ZP,{xs:8,children:(0,r.jsx)(p,{children:(0,r.jsx)(x.Z,{sx:{color:"#000000"},children:"----"})})}),(0,r.jsx)(c.ZP,{xs:8,sx:{backgroundColor:"#4C506C"},children:(0,r.jsx)(x.Z,{variant:"h7",component:"h3",sx:{fontSize:"15px"},children:"Motivo nacional"})}),(0,r.jsx)(c.ZP,{xs:8,children:(0,r.jsx)(p,{children:(0,r.jsx)(x.Z,{sx:{color:"#000000"},children:"----"})})}),(0,r.jsx)(c.ZP,{xs:8,sx:{backgroundColor:"#4C506C"},children:(0,r.jsx)(x.Z,{variant:"h7",component:"h3",sx:{fontSize:"15px"},children:"Motivo Schengen"})}),(0,r.jsx)(c.ZP,{xs:8,children:(0,r.jsx)(p,{children:(0,r.jsx)(x.Z,{sx:{color:"#000000"},children:"----"})})}),(0,r.jsx)(c.ZP,{xs:8,sx:{backgroundColor:"#4C506C"},children:(0,r.jsx)(x.Z,{variant:"h7",component:"h3",sx:{fontSize:"15px"},children:"Conducta"})}),(0,r.jsx)(c.ZP,{xs:8,children:(0,r.jsx)(p,{children:(0,r.jsx)(x.Z,{sx:{color:"#000000"},children:"----"})})}),(0,r.jsx)(c.ZP,{xs:8,sx:{backgroundColor:"#4C506C"},children:(0,r.jsx)(x.Z,{variant:"h7",component:"h3",sx:{fontSize:"15px"},children:"Observaciones"})}),(0,r.jsx)(c.ZP,{xs:8,children:(0,r.jsx)(p,{children:(0,r.jsx)(x.Z,{sx:{color:"#000000"},children:"----"})})}),(0,r.jsx)(c.ZP,{xs:8,sx:{backgroundColor:"#4C506C"},children:(0,r.jsx)(x.Z,{variant:"h7",component:"h3",sx:{fontSize:"15px"},children:"Fecha de entrada en vigencia"})}),(0,r.jsx)(c.ZP,{xs:8,children:(0,r.jsx)(p,{children:(0,r.jsx)(x.Z,{sx:{color:"#000000"},children:"----"})})}),(0,r.jsx)(c.ZP,{xs:8,sx:{backgroundColor:"#4C506C"},children:(0,r.jsx)(x.Z,{variant:"h7",component:"h3",sx:{fontSize:"15px"},children:"Fecha de fin de vigencia"})}),(0,r.jsx)(c.ZP,{xs:8,children:(0,r.jsx)(p,{children:(0,r.jsx)(x.Z,{sx:{color:"#000000"},children:"----"})})}),(0,r.jsx)(c.ZP,{xs:8,sx:{backgroundColor:"#4C506C"},children:(0,r.jsx)(x.Z,{variant:"h7",component:"h3",sx:{fontSize:"15px"},children:"Fecha de \xfaltima modificaci\xf3n"})}),(0,r.jsx)(c.ZP,{xs:8,children:(0,r.jsx)(p,{children:(0,r.jsx)(x.Z,{sx:{color:"#000000"},children:"----"})})}),(0,r.jsx)(c.ZP,{xs:8,sx:{backgroundColor:"#4C506C"},children:(0,r.jsx)(x.Z,{variant:"h7",component:"h3",sx:{fontSize:"15px"},children:"Fecha de expiraci\xf3n"})}),(0,r.jsx)(c.ZP,{xs:8,children:(0,r.jsx)(p,{children:(0,r.jsx)(x.Z,{sx:{color:"#000000"},children:"----"})})})]})]}),(0,r.jsxs)(t.Z,{children:[(0,r.jsx)(t.Z,{sx:{backgroundColor:"#3C3F55",textAlign:"center",justifyContent:"center",mb:2},children:(0,r.jsx)(t.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",color:"#D5DEED"},children:(0,r.jsx)(x.Z,{variant:"h7",component:"h3",sx:{fontSize:"15px"},children:"Datos del requirimiento/s SISII del propietario"})})}),(0,r.jsxs)(c.ZP,{container:!0,spacing:0,columns:16,children:[(0,r.jsx)(c.ZP,{xs:8,sx:{backgroundColor:"#4C506C"},children:(0,r.jsx)(x.Z,{variant:"h7",component:"h3",sx:{fontSize:"15px"},children:"Motivo del requirimiento"})}),(0,r.jsx)(c.ZP,{xs:8,children:(0,r.jsx)(p,{children:(0,r.jsx)(x.Z,{sx:{color:"#000000"},children:"----"})})}),(0,r.jsx)(c.ZP,{xs:8,sx:{backgroundColor:"#4C506C"},children:(0,r.jsx)(x.Z,{variant:"h7",component:"h3",sx:{fontSize:"15px"},children:"N\xfameor de hechos"})}),(0,r.jsx)(c.ZP,{xs:8,children:(0,r.jsx)(p,{children:(0,r.jsx)(x.Z,{sx:{color:"#000000"},children:"----"})})})]})]})]})}),(0,r.jsx)(c.ZP,{item:!0,xs:3,children:(0,r.jsx)(t.Z,{sx:{height:"65vh"},children:(0,r.jsxs)(p,{sx:{backgroundColor:"#3C3F55",mt:10,width:"100%",height:"100%"},children:[(0,r.jsx)(t.Z,{className:"customizer-header",sx:{position:"relative",mt:10,mb:2.5,borderBottom:e=>"1px solid ".concat(e.palette.divider)},children:(0,r.jsx)(x.Z,{variant:"h5",sx:{textTransform:"uppercase",color:"#FFF",textAlign:"center",backgroundColor:"#4c506c",display:"flex",justifyContent:"center"},children:"Imagenes"})}),(0,r.jsxs)(t.Z,{sx:{ml:10,height:"15vh"},children:[(0,r.jsx)(t.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"left"},children:(0,r.jsx)(x.Z,{textAlign:"left",children:"Matr\xedcula"})}),(0,r.jsx)(t.Z,{children:(0,r.jsx)(c.ZP,{container:!0,spacing:2,direction:"column",alignItems:"left",children:(0,r.jsx)(h.Z,{sx:{width:150,height:"auto"},cols:1,children:(0,r.jsx)(g(),{component:"div",style:{maxHeight:"25%",overflow:"auto"},children:f.map((e,n)=>(0,r.jsx)(j.Z,{children:(0,r.jsx)(C,{src:e.img})},n))})})})})]}),(0,r.jsxs)(t.Z,{sx:{ml:10,height:"15vh"},children:[(0,r.jsx)(t.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"left"},children:(0,r.jsx)(x.Z,{textAlign:"left",children:"Escena"})}),(0,r.jsx)(t.Z,{children:(0,r.jsx)(c.ZP,{container:!0,spacing:2,direction:"column",alignItems:"left",children:(0,r.jsx)(h.Z,{sx:{width:150,height:"auto"},cols:1,children:(0,r.jsx)(g(),{component:"div",style:{maxHeight:"25%",overflow:"auto"},children:f.map((e,n)=>(0,r.jsx)(j.Z,{children:(0,r.jsx)(C,{src:e.img})},n))})})})})]}),(0,r.jsxs)(t.Z,{sx:{ml:10,height:"15vh"},children:[(0,r.jsx)(t.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"left"},children:(0,r.jsx)(x.Z,{textAlign:"left",children:"Conteo"})}),(0,r.jsx)(t.Z,{children:(0,r.jsx)(c.ZP,{container:!0,spacing:2,direction:"column",alignItems:"left",children:(0,r.jsx)(h.Z,{sx:{width:150,height:"auto"},cols:1,children:(0,r.jsx)(g(),{component:"div",style:{maxHeight:"25%",overflow:"auto"},children:f.map((e,n)=>(0,r.jsx)(j.Z,{children:(0,r.jsx)(C,{src:e.img})},n))})})})})]}),(0,r.jsxs)(t.Z,{sx:{ml:10,height:"15vh"},children:[(0,r.jsx)(t.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"left"},children:(0,r.jsx)(x.Z,{textAlign:"left",children:"Auxiliar"})}),(0,r.jsx)(t.Z,{children:(0,r.jsx)(c.ZP,{container:!0,spacing:2,direction:"column",alignItems:"left",children:(0,r.jsx)(h.Z,{sx:{width:150,height:"auto"},cols:1,children:(0,r.jsx)(g(),{component:"div",style:{maxHeight:"25%",overflow:"auto"},children:f.map((e,n)=>(0,r.jsx)(j.Z,{children:(0,r.jsx)(C,{src:e.img})},n))})})})})]})]})})})]})}let P=()=>(0,r.jsxs)(t.Z,{sx:{flexGrow:1},children:[(0,r.jsx)(c.ZP,{container:!0,spacing:1,children:(0,r.jsx)(c.ZP,{container:!0,item:!0,spacing:10,sx:{mx:"auto",mt:2,justifyContent:"center",display:"flex",alignItems:"center",textAlign:"center"},children:(0,r.jsx)(t.Z,{sx:{backgroundColor:"#4C506C",width:"100%",height:"5vh",justifyContent:"center",display:"flex",alignItems:"center",textAlign:"center",color:"white"},children:(0,r.jsx)(x.Z,{variant:"overline",color:"white",children:"1234 ABC -Espa\xf1a"})})})}),(0,r.jsx)(c.ZP,{container:!0,spacing:1,children:(0,r.jsx)(c.ZP,{container:!0,item:!0,spacing:10,children:(0,r.jsx)(v,{})})})]});n.default=P}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=18719)}),_N_E=e.O()}]);