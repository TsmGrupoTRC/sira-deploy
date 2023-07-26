(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5182],{16127:function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forms/form-validation",function(){return a(29117)}])},46762:function(e,r,a){"use strict";var s=a(85893),i=a(86886);let l=e=>{let{title:r,subtitle:a}=e;return(0,s.jsxs)(i.ZP,{item:!0,xs:12,children:[r,a||null]})};r.Z=l},29117:function(e,r,a){"use strict";a.r(r),a.d(r,{default:function(){return X}});var s=a(85893),i=a(41664),l=a.n(i),o=a(86886),n=a(90948),d=a(15861),t=a(46762),c=a(67294),m=a(66242),x=a(49033),h=a(18360),u=a(11057),j=a(18972),Z=a(69368),b=a(50135),f=a(40476),w=a(78445),v=a(47312),p=a(93946),P=a(68061),g=a(44267),y=a(94054),N=a(57709),q=a(56815),C=a(87109),B=a(50480),S=a(86501),k=a(9198),Q=a.n(k),T=a(87536),_=a(79878);let W={dob:null,email:"",radio:"",select:"",lastName:"",password:"",textarea:"",firstName:"",checkbox:!1},D=(0,c.forwardRef)((e,r)=>{let{...a}=e;return(0,s.jsx)(b.Z,{inputRef:r,...a,sx:{width:"100%"}})}),F=()=>{let[e,r]=(0,c.useState)({password:"",showPassword:!1}),{control:a,handleSubmit:i,formState:{errors:l}}=(0,T.cI)({defaultValues:W}),n=()=>{r({...e,showPassword:!e.showPassword})},d=()=>S.ZP.success("Form Submitted");return(0,s.jsxs)(m.Z,{children:[(0,s.jsx)(w.Z,{title:"Basic"}),(0,s.jsx)(g.Z,{children:(0,s.jsx)("form",{onSubmit:i(d),children:(0,s.jsxs)(o.ZP,{container:!0,spacing:5,children:[(0,s.jsx)(o.ZP,{item:!0,xs:12,sm:6,children:(0,s.jsxs)(y.Z,{fullWidth:!0,children:[(0,s.jsx)(T.Qr,{name:"firstName",control:a,rules:{required:!0},render:e=>{let{field:{value:r,onChange:a}}=e;return(0,s.jsx)(b.Z,{value:r,label:"First Name",onChange:a,placeholder:"Leonard",error:Boolean(l.firstName),"aria-describedby":"validation-basic-first-name"})}}),l.firstName&&(0,s.jsx)(q.Z,{sx:{color:"error.main"},id:"validation-basic-first-name",children:"This field is required"})]})}),(0,s.jsx)(o.ZP,{item:!0,xs:12,sm:6,children:(0,s.jsxs)(y.Z,{fullWidth:!0,children:[(0,s.jsx)(T.Qr,{name:"lastName",control:a,rules:{required:!0},render:e=>{let{field:{value:r,onChange:a}}=e;return(0,s.jsx)(b.Z,{value:r,label:"Last Name",onChange:a,placeholder:"Carter",error:Boolean(l.lastName),"aria-describedby":"validation-basic-last-name"})}}),l.lastName&&(0,s.jsx)(q.Z,{sx:{color:"error.main"},id:"validation-basic-last-name",children:"This field is required"})]})}),(0,s.jsx)(o.ZP,{item:!0,xs:12,sm:6,children:(0,s.jsxs)(y.Z,{fullWidth:!0,children:[(0,s.jsx)(T.Qr,{name:"email",control:a,rules:{required:!0},render:e=>{let{field:{value:r,onChange:a}}=e;return(0,s.jsx)(b.Z,{type:"email",value:r,label:"Email",onChange:a,error:Boolean(l.email),placeholder:"carterleonard@gmail.com","aria-describedby":"validation-basic-email"})}}),l.email&&(0,s.jsx)(q.Z,{sx:{color:"error.main"},id:"validation-basic-email",children:"This field is required"})]})}),(0,s.jsx)(o.ZP,{item:!0,xs:12,sm:6,children:(0,s.jsxs)(y.Z,{fullWidth:!0,children:[(0,s.jsx)(v.Z,{htmlFor:"validation-basic-password",error:Boolean(l.password),children:"Password"}),(0,s.jsx)(T.Qr,{name:"password",control:a,rules:{required:!0},render:r=>{let{field:{value:a,onChange:i}}=r;return(0,s.jsx)(N.Z,{value:a,label:"Password",onChange:i,id:"validation-basic-password",error:Boolean(l.password),type:e.showPassword?"text":"password",endAdornment:(0,s.jsx)(C.Z,{position:"end",children:(0,s.jsx)(p.Z,{edge:"end",onClick:n,onMouseDown:e=>e.preventDefault(),"aria-label":"toggle password visibility",children:(0,s.jsx)(_.Z,{icon:e.showPassword?"tabler:eye":"tabler:eye-off"})})})})}}),l.password&&(0,s.jsx)(q.Z,{sx:{color:"error.main"},id:"validation-basic-password",children:"This field is required"})]})}),(0,s.jsxs)(o.ZP,{item:!0,xs:12,sm:6,children:[(0,s.jsx)(T.Qr,{name:"dob",control:a,rules:{required:!0},render:e=>{let{field:{value:r,onChange:a}}=e;return(0,s.jsx)(Q(),{selected:r,showYearDropdown:!0,showMonthDropdown:!0,onChange:e=>a(e),placeholderText:"MM/DD/YYYY",customInput:(0,s.jsx)(D,{value:r,onChange:a,label:"Date of Birth",error:Boolean(l.dob),"aria-describedby":"validation-basic-dob"})})}}),l.dob&&(0,s.jsx)(q.Z,{sx:{mx:3.5,color:"error.main"},id:"validation-basic-dob",children:"This field is required"})]}),(0,s.jsx)(o.ZP,{item:!0,xs:12,sm:6,children:(0,s.jsxs)(y.Z,{fullWidth:!0,children:[(0,s.jsx)(v.Z,{id:"validation-basic-select",error:Boolean(l.select),htmlFor:"validation-basic-select",children:"Country"}),(0,s.jsx)(T.Qr,{name:"select",control:a,rules:{required:!0},render:e=>{let{field:{value:r,onChange:a}}=e;return(0,s.jsxs)(h.Z,{value:r,label:"Country",onChange:a,error:Boolean(l.select),labelId:"validation-basic-select","aria-describedby":"validation-basic-select",children:[(0,s.jsx)(j.Z,{value:"UK",children:"UK"}),(0,s.jsx)(j.Z,{value:"USA",children:"USA"}),(0,s.jsx)(j.Z,{value:"Australia",children:"Australia"}),(0,s.jsx)(j.Z,{value:"Germany",children:"Germany"})]})}}),l.select&&(0,s.jsx)(q.Z,{sx:{color:"error.main"},id:"validation-basic-select",children:"This field is required"})]})}),(0,s.jsx)(o.ZP,{item:!0,xs:12,children:(0,s.jsxs)(y.Z,{fullWidth:!0,children:[(0,s.jsx)(T.Qr,{name:"textarea",control:a,rules:{required:!0},render:e=>{let{field:r}=e;return(0,s.jsx)(b.Z,{rows:4,multiline:!0,...r,label:"Bio",error:Boolean(l.textarea),"aria-describedby":"validation-basic-textarea"})}}),l.textarea&&(0,s.jsx)(q.Z,{sx:{color:"error.main"},id:"validation-basic-textarea",children:"This field is required"})]})}),(0,s.jsx)(o.ZP,{item:!0,xs:12,children:(0,s.jsxs)(y.Z,{error:Boolean(l.radio),children:[(0,s.jsx)(f.Z,{children:"Gender"}),(0,s.jsx)(T.Qr,{name:"radio",control:a,rules:{required:!0},render:e=>{let{field:r}=e;return(0,s.jsxs)(P.Z,{row:!0,...r,"aria-label":"gender",name:"validation-basic-radio",children:[(0,s.jsx)(B.Z,{value:"female",label:"Female",sx:l.radio?{color:"error.main"}:null,control:(0,s.jsx)(x.Z,{sx:l.radio?{color:"error.main"}:null})}),(0,s.jsx)(B.Z,{value:"male",label:"Male",sx:l.radio?{color:"error.main"}:null,control:(0,s.jsx)(x.Z,{sx:l.radio?{color:"error.main"}:null})}),(0,s.jsx)(B.Z,{value:"other",label:"Other",sx:l.radio?{color:"error.main"}:null,control:(0,s.jsx)(x.Z,{sx:l.radio?{color:"error.main"}:null})})]})}}),l.radio&&(0,s.jsx)(q.Z,{sx:{color:"error.main"},id:"validation-basic-radio",children:"This field is required"})]})}),(0,s.jsx)(o.ZP,{item:!0,xs:12,children:(0,s.jsxs)(y.Z,{children:[(0,s.jsx)(T.Qr,{name:"checkbox",control:a,rules:{required:!0},render:e=>{let{field:r}=e;return(0,s.jsx)(B.Z,{label:"Agree to our terms and conditions",sx:l.checkbox?{color:"error.main"}:null,control:(0,s.jsx)(Z.Z,{...r,name:"validation-basic-checkbox",sx:l.checkbox?{color:"error.main"}:null})})}}),l.checkbox&&(0,s.jsx)(q.Z,{sx:{color:"error.main"},id:"validation-basic-checkbox",children:"This field is required"})]})}),(0,s.jsx)(o.ZP,{item:!0,xs:12,children:(0,s.jsx)(u.Z,{size:"large",type:"submit",variant:"contained",children:"Submit"})})]})})})]})};var A=a(98456);let E={email:"",lastName:"",password:"",firstName:""},M=()=>{let[e,r]=(0,c.useState)(!1),[a,i]=(0,c.useState)({password:"",showPassword:!1}),{control:l,handleSubmit:n,formState:{errors:d}}=(0,T.cI)({defaultValues:E}),t=()=>{i({...a,showPassword:!a.showPassword})},x=async()=>{r(!0),await new Promise(e=>setTimeout(e,2e3)),r(!1),S.ZP.success("Form Submitted")};return(0,s.jsxs)(m.Z,{children:[(0,s.jsx)(w.Z,{title:"Async Submit"}),(0,s.jsx)(g.Z,{children:(0,s.jsx)("form",{onSubmit:n(x),children:(0,s.jsxs)(o.ZP,{container:!0,spacing:5,children:[(0,s.jsx)(o.ZP,{item:!0,xs:12,children:(0,s.jsxs)(y.Z,{fullWidth:!0,children:[(0,s.jsx)(T.Qr,{name:"firstName",control:l,rules:{required:!0},render:e=>{let{field:{value:r,onChange:a}}=e;return(0,s.jsx)(b.Z,{value:r,label:"First Name",onChange:a,placeholder:"Leonard",error:Boolean(d.firstName),"aria-describedby":"validation-async-first-name"})}}),d.firstName&&(0,s.jsx)(q.Z,{sx:{color:"error.main"},id:"validation-async-first-name",children:"This field is required"})]})}),(0,s.jsx)(o.ZP,{item:!0,xs:12,children:(0,s.jsxs)(y.Z,{fullWidth:!0,children:[(0,s.jsx)(T.Qr,{name:"lastName",control:l,rules:{required:!0},render:e=>{let{field:{value:r,onChange:a}}=e;return(0,s.jsx)(b.Z,{value:r,label:"Last Name",onChange:a,placeholder:"Carter",error:Boolean(d.lastName),"aria-describedby":"validation-async-last-name"})}}),d.lastName&&(0,s.jsx)(q.Z,{sx:{color:"error.main"},id:"validation-async-last-name",children:"This field is required"})]})}),(0,s.jsx)(o.ZP,{item:!0,xs:12,children:(0,s.jsxs)(y.Z,{fullWidth:!0,children:[(0,s.jsx)(T.Qr,{name:"email",control:l,rules:{required:!0},render:e=>{let{field:{value:r,onChange:a}}=e;return(0,s.jsx)(b.Z,{type:"email",value:r,label:"Email",onChange:a,error:Boolean(d.email),placeholder:"carterleonard@gmail.com","aria-describedby":"validation-async-email"})}}),d.email&&(0,s.jsx)(q.Z,{sx:{color:"error.main"},id:"validation-async-email",children:"This field is required"})]})}),(0,s.jsx)(o.ZP,{item:!0,xs:12,children:(0,s.jsxs)(y.Z,{fullWidth:!0,children:[(0,s.jsx)(v.Z,{htmlFor:"validation-async-password",error:Boolean(d.password),children:"Password"}),(0,s.jsx)(T.Qr,{name:"password",control:l,rules:{required:!0},render:e=>{let{field:{value:r,onChange:i}}=e;return(0,s.jsx)(N.Z,{value:r,label:"Password",onChange:i,id:"validation-async-password",error:Boolean(d.password),type:a.showPassword?"text":"password",endAdornment:(0,s.jsx)(C.Z,{position:"end",children:(0,s.jsx)(p.Z,{edge:"end",onClick:t,onMouseDown:e=>e.preventDefault(),"aria-label":"toggle password visibility",children:(0,s.jsx)(_.Z,{icon:a.showPassword?"tabler:eye":"tabler:eye-off"})})})})}}),d.password&&(0,s.jsx)(q.Z,{sx:{color:"error.main"},id:"validation-async-password",children:"This field is required"})]})}),(0,s.jsx)(o.ZP,{item:!0,xs:12,children:(0,s.jsxs)(u.Z,{size:"large",type:"submit",variant:"contained",children:[e?(0,s.jsx)(A.Z,{sx:{color:"common.white",width:"20px !important",height:"20px !important",mr:e=>e.spacing(2)}}):null,"Submit"]})})]})})})]})};var L=a(16310),R=a(47533);let I={email:"",lastName:"",password:"",firstName:""},Y=(e,r,a)=>0===r?"".concat(e," field is required"):r>0&&r<a?"".concat(e," must be at least ").concat(a," characters"):"",O=L.Ry().shape({email:L.Z_().email().required(),lastName:L.Z_().min(3,e=>Y("lastName",e.value.length,e.min)).required(),password:L.Z_().min(8,e=>Y("password",e.value.length,e.min)).required(),firstName:L.Z_().min(3,e=>Y("firstName",e.value.length,e.min)).required()}),U=()=>{let[e,r]=(0,c.useState)({password:"",showPassword:!1}),{control:a,handleSubmit:i,formState:{errors:l}}=(0,T.cI)({defaultValues:I,mode:"onChange",resolver:(0,R.X)(O)}),n=()=>{r({...e,showPassword:!e.showPassword})},d=()=>S.ZP.success("Form Submitted");return(0,s.jsxs)(m.Z,{children:[(0,s.jsx)(w.Z,{title:"Validation Schema With OnChange"}),(0,s.jsx)(g.Z,{children:(0,s.jsx)("form",{onSubmit:i(d),children:(0,s.jsxs)(o.ZP,{container:!0,spacing:5,children:[(0,s.jsx)(o.ZP,{item:!0,xs:12,children:(0,s.jsxs)(y.Z,{fullWidth:!0,children:[(0,s.jsx)(T.Qr,{name:"firstName",control:a,rules:{required:!0},render:e=>{let{field:{value:r,onChange:a}}=e;return(0,s.jsx)(b.Z,{value:r,label:"First Name",onChange:a,placeholder:"Leonard",error:Boolean(l.firstName),"aria-describedby":"validation-schema-first-name"})}}),l.firstName&&(0,s.jsx)(q.Z,{sx:{color:"error.main"},id:"validation-schema-first-name",children:l.firstName.message})]})}),(0,s.jsx)(o.ZP,{item:!0,xs:12,children:(0,s.jsxs)(y.Z,{fullWidth:!0,children:[(0,s.jsx)(T.Qr,{name:"lastName",control:a,rules:{required:!0},render:e=>{let{field:{value:r,onChange:a}}=e;return(0,s.jsx)(b.Z,{value:r,label:"Last Name",onChange:a,placeholder:"Carter",error:Boolean(l.lastName),"aria-describedby":"validation-schema-last-name"})}}),l.lastName&&(0,s.jsx)(q.Z,{sx:{color:"error.main"},id:"validation-schema-last-name",children:l.lastName.message})]})}),(0,s.jsx)(o.ZP,{item:!0,xs:12,children:(0,s.jsxs)(y.Z,{fullWidth:!0,children:[(0,s.jsx)(T.Qr,{name:"email",control:a,rules:{required:!0},render:e=>{let{field:{value:r,onChange:a}}=e;return(0,s.jsx)(b.Z,{type:"email",value:r,label:"Email",onChange:a,error:Boolean(l.email),placeholder:"carterleonard@gmail.com","aria-describedby":"validation-schema-email"})}}),l.email&&(0,s.jsx)(q.Z,{sx:{color:"error.main"},id:"validation-schema-email",children:l.email.message})]})}),(0,s.jsx)(o.ZP,{item:!0,xs:12,children:(0,s.jsxs)(y.Z,{fullWidth:!0,children:[(0,s.jsx)(v.Z,{htmlFor:"validation-schema-password",error:Boolean(l.password),children:"Password"}),(0,s.jsx)(T.Qr,{name:"password",control:a,rules:{required:!0},render:r=>{let{field:{value:a,onChange:i}}=r;return(0,s.jsx)(N.Z,{value:a,label:"Password",onChange:i,id:"validation-schema-password",error:Boolean(l.password),type:e.showPassword?"text":"password",endAdornment:(0,s.jsx)(C.Z,{position:"end",children:(0,s.jsx)(p.Z,{edge:"end",onClick:n,onMouseDown:e=>e.preventDefault(),"aria-label":"toggle password visibility",children:(0,s.jsx)(_.Z,{icon:e.showPassword?"tabler:eye":"tabler:eye-off"})})})})}}),l.password&&(0,s.jsx)(q.Z,{sx:{color:"error.main"},id:"validation-schema-password",children:l.password.message})]})}),(0,s.jsx)(o.ZP,{item:!0,xs:12,children:(0,s.jsx)(u.Z,{size:"large",type:"submit",variant:"contained",children:"Submit"})})]})})})]})};var z=a(45353);let G=(0,n.ZP)(l())(e=>{let{theme:r}=e;return{textDecoration:"none",color:r.palette.primary.main}}),V=()=>(0,s.jsx)(z.Z,{children:(0,s.jsxs)(o.ZP,{container:!0,spacing:6,className:"match-height",children:[(0,s.jsx)(t.Z,{title:(0,s.jsx)(d.Z,{variant:"h5",children:(0,s.jsx)(G,{href:"https://github.com/react-hook-form/react-hook-form",target:"_blank",children:"React Hook Form"})}),subtitle:(0,s.jsx)(d.Z,{variant:"body2",children:"React Hooks for forms validation (Web + React Native)"})}),(0,s.jsx)(o.ZP,{item:!0,xs:12,children:(0,s.jsx)(F,{})}),(0,s.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,s.jsx)(U,{})}),(0,s.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,s.jsx)(M,{})})]})});var X=V}},function(e){e.O(0,[9198,3863,7536,2880,5947,5353,9774,2888,179],function(){return e(e.s=16127)}),_N_E=e.O()}]);