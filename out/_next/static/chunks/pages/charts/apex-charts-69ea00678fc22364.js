(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3694],{58828:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/apex-charts",function(){return a(32399)}])},95677:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let a=o.default,s={loading:e=>{let{error:t,isLoading:a,pastDelay:r}=e;return null}};e instanceof Promise?s.loader=()=>e:"function"==typeof e?s.loader=e:"object"==typeof e&&(s=r({},s,e)),s=r({},s,t);let n=s.loader,d=()=>null!=n?n().then(l):Promise.resolve(l(()=>null));return(s.loadableGenerated&&delete(s=r({},s,s.loadableGenerated)).loadableGenerated,"boolean"!=typeof s.ssr||s.ssr)?a(r({},s,{loader:d})):(delete s.webpack,delete s.modules,i(a,s))},t.noSSR=i;var r=a(6495).Z,s=a(92648).Z,o=(s(a(67294)),s(a(8976)));function l(e){return{default:(null==e?void 0:e.default)||e}}function i(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},92254:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,a(92648).Z)(a(67294));let s=r.default.createContext(null);t.LoadableContext=s},8976:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(6495).Z,s=(0,a(92648).Z)(a(67294)),o=a(92254);let l=[],i=[],n=!1;function d(e){let t=e(),a={loading:!0,loaded:null,error:null};return a.promise=t.then(e=>(a.loading=!1,a.loaded=e,e)).catch(e=>{throw a.loading=!1,a.error=e,e}),a}class c{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=r({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function x(e){return function(e,t){let a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),r=null;function l(){if(!r){let t=new c(e,a);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!n){let e=a.webpack?a.webpack():a.modules;e&&i.push(t=>{for(let a of e)if(-1!==t.indexOf(a))return l()})}function d(e,t){!function(){l();let e=s.default.useContext(o.LoadableContext);e&&Array.isArray(a.modules)&&a.modules.forEach(t=>{e(t)})}();let i=s.default.useSyncExternalStore(r.subscribe,r.getCurrentValue,r.getCurrentValue);return s.default.useImperativeHandle(t,()=>({retry:r.retry}),[]),s.default.useMemo(()=>{var t;return i.loading||i.error?s.default.createElement(a.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:r.retry}):i.loaded?s.default.createElement((t=i.loaded)&&t.default?t.default:t,e):null},[e,i])}return d.preload=()=>l(),d.displayName="LoadableComponent",s.default.forwardRef(d)}(d,e)}function p(e,t){let a=[];for(;e.length;){let r=e.pop();a.push(r(t))}return Promise.all(a).then(()=>{if(e.length)return p(e,t)})}x.preloadAll=()=>new Promise((e,t)=>{p(l).then(e,t)}),x.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let a=()=>(n=!0,t());p(i,e).then(a,a)})},window.__NEXT_PRELOADREADY=x.preloadReady,t.default=x},46762:function(e,t,a){"use strict";var r=a(85893),s=a(86886);let o=e=>{let{title:t,subtitle:a}=e;return(0,r.jsxs)(s.ZP,{item:!0,xs:12,children:[t,a||null]})};t.Z=o},52282:function(e,t,a){"use strict";var r=a(5152),s=a.n(r);let o=s()(()=>Promise.all([a.e(4814),a.e(7229)]).then(a.bind(a,47229)),{loadableGenerated:{webpack:()=>[47229]},ssr:!1});t.Z=o},90215:function(e,t,a){"use strict";var r=a(90948);let s=(0,r.ZP)("div")(e=>{let{theme:t}=e;return{"& .apexcharts-canvas":{"& line[stroke='transparent']":{display:"none"},"& .apexcharts-tooltip":{boxShadow:t.shadows[3],borderColor:t.palette.divider,background:t.palette.background.paper,"& .apexcharts-tooltip-title":{fontWeight:600,borderColor:t.palette.divider,background:t.palette.background.paper},"&.apexcharts-theme-light":{color:t.palette.text.primary},"&.apexcharts-theme-dark":{color:t.palette.common.white},"& .apexcharts-tooltip-series-group:first-of-type":{paddingBottom:0},"& .bar-chart":{padding:t.spacing(2,2.5)}},"& .apexcharts-xaxistooltip":{borderColor:t.palette.divider,background:"light"===t.palette.mode?t.palette.grey[50]:t.palette.customColors.bodyBg,"&:after":{borderBottomColor:"light"===t.palette.mode?t.palette.grey[50]:t.palette.customColors.bodyBg},"&:before":{borderBottomColor:t.palette.divider}},"& .apexcharts-yaxistooltip":{borderColor:t.palette.divider,background:"light"===t.palette.mode?t.palette.grey[50]:t.palette.customColors.bodyBg,"&:after":{borderLeftColor:"light"===t.palette.mode?t.palette.grey[50]:t.palette.customColors.bodyBg},"&:before":{borderLeftColor:t.palette.divider}},"& .apexcharts-xaxistooltip-text, & .apexcharts-yaxistooltip-text":{color:t.palette.text.primary},"& .apexcharts-yaxis .apexcharts-yaxis-texts-g .apexcharts-yaxis-label":{textAnchor:"rtl"===t.direction?"start":void 0},"& .apexcharts-text, & .apexcharts-tooltip-text, & .apexcharts-datalabel-label, & .apexcharts-datalabel, & .apexcharts-xaxistooltip-text, & .apexcharts-yaxistooltip-text, & .apexcharts-legend-text":{fontFamily:"".concat(t.typography.fontFamily," !important")},"& .apexcharts-pie-label":{filter:"none",fill:t.palette.common.white},"& .apexcharts-marker":{boxShadow:"none"}}}});t.Z=s},32399:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return er}});var r=a(85893),s=a(41664),o=a.n(s),l=a(86886),i=a(90948),n=a(15861),d=a(46762),c=a(90215),x=a(45353),p=a(67294),u=a(66242),h=a(50135),m=a(2734),f=a(78445),b=a(44267),y=a(87109),g=a(42298),j=a(9198),Z=a.n(j),w=a(79878),v=a(52282);let k=()=>{let[e,t]=(0,p.useState)(null),[a,s]=(0,p.useState)(null),o=(0,m.Z)(),l={chart:{parentHeightOffset:0,toolbar:{show:!1}},colors:["#00cfe8"],dataLabels:{enabled:!1},plotOptions:{bar:{borderRadius:8,barHeight:"30%",horizontal:!0,startingShape:"rounded"}},grid:{borderColor:o.palette.divider,xaxis:{lines:{show:!1}},padding:{top:-10}},yaxis:{labels:{style:{colors:o.palette.text.disabled}}},xaxis:{axisBorder:{show:!1},axisTicks:{color:o.palette.divider},categories:["MON, 11","THU, 14","FRI, 15","MON, 18","WED, 20","FRI, 21","MON, 23"],labels:{style:{colors:o.palette.text.disabled}}}},i=(0,p.forwardRef)((e,t)=>{let a=null!==e.start?(0,g.default)(e.start,"MM/dd/yyyy"):"",s=null!==e.end?" - ".concat((0,g.default)(e.end,"MM/dd/yyyy")):null,o="".concat(a).concat(null!==s?s:"");return(0,r.jsx)(h.Z,{...e,size:"small",value:o,inputRef:t,InputProps:{startAdornment:(0,r.jsx)(y.Z,{position:"start",children:(0,r.jsx)(w.Z,{icon:"tabler:calendar-event"})}),endAdornment:(0,r.jsx)(y.Z,{position:"end",children:(0,r.jsx)(w.Z,{icon:"tabler:chevron-down"})})}})}),n=e=>{let[a,r]=e;s(a),t(r)};return(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(f.Z,{title:"Data Science",subheader:"$74,382.72",sx:{flexDirection:["column","row"],alignItems:["flex-start","center"],"& .MuiCardHeader-action":{mb:0},"& .MuiCardHeader-content":{mb:[2,0]}},action:(0,r.jsx)(Z(),{selectsRange:!0,endDate:e,id:"apexchart-bar",selected:a,startDate:a,onChange:n,placeholderText:"Click to select a date",customInput:(0,r.jsx)(i,{start:a,end:e})})}),(0,r.jsx)(b.Z,{children:(0,r.jsx)(v.Z,{type:"bar",height:400,options:l,series:[{data:[700,350,480,600,210,550,150]}]})})]})},C={series1:"#ab7efd",series2:"#b992fe",series3:"#e0cffe"},_=[{name:"Visits",data:[100,120,90,170,130,160,140,240,220,180,270,280,375]},{name:"Clicks",data:[60,80,70,110,80,100,90,180,160,140,200,220,275]},{name:"Sales",data:[20,40,30,70,40,60,50,140,120,100,140,180,220]}],M=()=>{let[e,t]=(0,p.useState)(null),[a,s]=(0,p.useState)(null),o=(0,m.Z)(),l={chart:{parentHeightOffset:0,toolbar:{show:!1}},tooltip:{shared:!1},dataLabels:{enabled:!1},stroke:{show:!1,curve:"straight"},legend:{position:"top",horizontalAlign:"left",labels:{colors:o.palette.text.secondary},markers:{offsetY:1,offsetX:-3},itemMargin:{vertical:3,horizontal:10}},colors:[C.series3,C.series2,C.series1],fill:{opacity:1,type:"solid"},grid:{show:!0,borderColor:o.palette.divider,xaxis:{lines:{show:!0}}},yaxis:{labels:{style:{colors:o.palette.text.disabled}}},xaxis:{axisBorder:{show:!1},axisTicks:{color:o.palette.divider},crosshairs:{stroke:{color:o.palette.divider}},labels:{style:{colors:o.palette.text.disabled}},categories:["7/12","8/12","9/12","10/12","11/12","12/12","13/12","14/12","15/12","16/12","17/12","18/12","19/12"]}},i=(0,p.forwardRef)((e,t)=>{let a=null!==e.start?(0,g.default)(e.start,"MM/dd/yyyy"):"",s=null!==e.end?" - ".concat((0,g.default)(e.end,"MM/dd/yyyy")):null,o="".concat(a).concat(null!==s?s:"");return(0,r.jsx)(h.Z,{...e,size:"small",value:o,inputRef:t,InputProps:{startAdornment:(0,r.jsx)(y.Z,{position:"start",children:(0,r.jsx)(w.Z,{icon:"tabler:calendar-event"})}),endAdornment:(0,r.jsx)(y.Z,{position:"end",children:(0,r.jsx)(w.Z,{icon:"tabler:chevron-down"})})}})}),n=e=>{let[a,r]=e;s(a),t(r)};return(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(f.Z,{title:"Line Chart",subheader:"Commercial networks",subheaderTypographyProps:{sx:{color:e=>"".concat(e.palette.text.disabled," !important")}},sx:{flexDirection:["column","row"],alignItems:["flex-start","center"],"& .MuiCardHeader-action":{mb:0},"& .MuiCardHeader-content":{mb:[2,0]}},action:(0,r.jsx)(Z(),{selectsRange:!0,endDate:e,id:"apexchart-area",selected:a,startDate:a,onChange:n,placeholderText:"Click to select a date",customInput:(0,r.jsx)(i,{start:a,end:e})})}),(0,r.jsx)(b.Z,{children:(0,r.jsx)(v.Z,{type:"area",height:400,options:l,series:_})})]})};var D=a(87357),S=a(95600);let O=[{data:[280,200,220,180,270,250,70,90,200,150,160,100,150,100,50]}],P=()=>{let e=(0,m.Z)(),t={chart:{parentHeightOffset:0,zoom:{enabled:!1},toolbar:{show:!1}},colors:["#ff9f43"],stroke:{curve:"straight"},dataLabels:{enabled:!1},markers:{strokeWidth:7,strokeOpacity:1,colors:["#ff9f43"],strokeColors:["#fff"]},grid:{padding:{top:-10},borderColor:e.palette.divider,xaxis:{lines:{show:!0}}},tooltip:{custom:e=>"<div class='bar-chart'>\n          <span>".concat(e.series[e.seriesIndex][e.dataPointIndex],"%</span>\n        </div>")},yaxis:{labels:{style:{colors:e.palette.text.disabled}}},xaxis:{axisBorder:{show:!1},axisTicks:{color:e.palette.divider},crosshairs:{stroke:{color:e.palette.divider}},labels:{style:{colors:e.palette.text.disabled}},categories:["7/12","8/12","9/12","10/12","11/12","12/12","13/12","14/12","15/12","16/12","17/12","18/12","19/12","20/12","21/12"]}};return(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(f.Z,{title:"Balance",subheader:"Commercial networks & enterprises",sx:{flexDirection:["column","row"],alignItems:["flex-start","center"],"& .MuiCardHeader-action":{mb:0},"& .MuiCardHeader-content":{mb:[2,0]}},action:(0,r.jsxs)(D.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsx)(n.Z,{variant:"h6",sx:{mr:5},children:"$221,267"}),(0,r.jsx)(S.Z,{skin:"light",color:"success",sx:{fontWeight:500,borderRadius:1,fontSize:"0.875rem"},label:(0,r.jsxs)(D.Z,{sx:{display:"flex",alignItems:"center","& svg":{mr:1}},children:[(0,r.jsx)(w.Z,{icon:"tabler:arrow-up",fontSize:"1rem"}),(0,r.jsx)("span",{children:"22%"})]})})]})}),(0,r.jsx)(b.Z,{children:(0,r.jsx)(v.Z,{type:"line",height:400,options:t,series:O})})]})},z={series1:"#9b88fa",series2:"#ffa1a1"},R=[{name:"iPhone 12",data:[41,64,81,60,42,42,33,23]},{name:"Samsung s20",data:[65,46,42,25,58,63,76,43]}],T=()=>{let e=(0,m.Z)(),t={chart:{parentHeightOffset:0,toolbar:{show:!1},dropShadow:{top:1,blur:8,left:1,opacity:.2,enabled:!1}},markers:{size:0},fill:{opacity:[1,.8]},colors:[z.series1,z.series2],stroke:{width:0,show:!1},legend:{labels:{colors:e.palette.text.secondary},markers:{offsetX:-3},itemMargin:{vertical:3,horizontal:10}},plotOptions:{radar:{polygons:{strokeColors:e.palette.divider,connectorColors:e.palette.divider}}},grid:{show:!1,padding:{top:-20,bottom:-20}},yaxis:{show:!1},xaxis:{categories:["Battery","Brand","Camera","Memory","Storage","Display","OS","Price"],labels:{style:{colors:[e.palette.text.disabled,e.palette.text.disabled,e.palette.text.disabled,e.palette.text.disabled,e.palette.text.disabled,e.palette.text.disabled,e.palette.text.disabled,e.palette.text.disabled]}}}};return(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(f.Z,{title:"Mobile Comparison"}),(0,r.jsx)(b.Z,{children:(0,r.jsx)(v.Z,{type:"radar",height:400,options:t,series:R})})]})},F={series1:"#fdd835",series2:"#00d4bd",series3:"#826bf8",series4:"#1FD5EB",series5:"#ffa1a1"},B=()=>{let e=(0,m.Z)(),t={stroke:{width:0},labels:["Operational","Networking","Hiring","R&D"],colors:[F.series1,F.series5,F.series3,F.series2],dataLabels:{enabled:!0,formatter:e=>"".concat(parseInt(e,10),"%")},legend:{position:"bottom",markers:{offsetX:-3},labels:{colors:e.palette.text.secondary},itemMargin:{vertical:3,horizontal:10}},plotOptions:{pie:{donut:{labels:{show:!0,name:{fontSize:"1.2rem"},value:{fontSize:"1.2rem",color:e.palette.text.secondary,formatter:e=>"".concat(parseInt(e,10))},total:{show:!0,fontSize:"1.2rem",label:"Operational",formatter:()=>"31%",color:e.palette.text.primary}}}}},responsive:[{breakpoint:992,options:{chart:{height:380},legend:{position:"bottom"}}},{breakpoint:576,options:{chart:{height:320},plotOptions:{pie:{donut:{labels:{show:!0,name:{fontSize:"1rem"},value:{fontSize:"1rem"},total:{fontSize:"1rem"}}}}}}}]};return(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(f.Z,{title:"Expense Ratio",subheader:"Spending on various categories",subheaderTypographyProps:{sx:{color:e=>"".concat(e.palette.text.disabled," !important")}}}),(0,r.jsx)(b.Z,{children:(0,r.jsx)(v.Z,{type:"donut",height:400,options:t,series:[85,16,50,50]})})]})},A={bg:"#f8d3ff",series1:"#826af9",series2:"#d2b0ff"},H=[{name:"Apple",data:[90,120,55,100,80,125,175,70,88]},{name:"Samsung",data:[85,100,30,40,95,90,30,110,62]}],I=()=>{let e=(0,m.Z)(),[t,a]=(0,p.useState)(null),[s,o]=(0,p.useState)(null),l={chart:{offsetX:-10,stacked:!0,parentHeightOffset:0,toolbar:{show:!1}},fill:{opacity:1},dataLabels:{enabled:!1},colors:[A.series1,A.series2],legend:{position:"top",horizontalAlign:"left",labels:{colors:e.palette.text.secondary},markers:{offsetY:1,offsetX:-3},itemMargin:{vertical:3,horizontal:10}},stroke:{show:!0,colors:["transparent"]},plotOptions:{bar:{columnWidth:"15%",colors:{backgroundBarRadius:10,backgroundBarColors:[A.bg,A.bg,A.bg,A.bg,A.bg]}}},grid:{borderColor:e.palette.divider,xaxis:{lines:{show:!0}}},yaxis:{labels:{style:{colors:e.palette.text.disabled}}},xaxis:{axisBorder:{show:!1},axisTicks:{color:e.palette.divider},categories:["7/12","8/12","9/12","10/12","11/12","12/12","13/12","14/12","15/12"],crosshairs:{stroke:{color:e.palette.divider}},labels:{style:{colors:e.palette.text.disabled}}},responsive:[{breakpoint:600,options:{plotOptions:{bar:{columnWidth:"35%"}}}}]},i=(0,p.forwardRef)((e,t)=>{let a=null!==e.start?(0,g.default)(e.start,"MM/dd/yyyy"):"",s=null!==e.end?" - ".concat((0,g.default)(e.end,"MM/dd/yyyy")):null,o="".concat(a).concat(null!==s?s:"");return(0,r.jsx)(h.Z,{...e,size:"small",value:o,inputRef:t,InputProps:{startAdornment:(0,r.jsx)(y.Z,{position:"start",children:(0,r.jsx)(w.Z,{icon:"tabler:calendar-event"})}),endAdornment:(0,r.jsx)(y.Z,{position:"end",children:(0,r.jsx)(w.Z,{icon:"tabler:chevron-down"})})}})}),n=e=>{let[t,r]=e;o(t),a(r)};return(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(f.Z,{title:"Data Science",sx:{flexDirection:["column","row"],alignItems:["flex-start","center"],"& .MuiCardHeader-action":{mb:0},"& .MuiCardHeader-content":{mb:[2,0]}},action:(0,r.jsx)(Z(),{selectsRange:!0,endDate:t,selected:s,id:"apexchart-column",startDate:s,onChange:n,placeholderText:"Click to select a date",customInput:(0,r.jsx)(i,{start:s,end:t})})}),(0,r.jsx)(b.Z,{children:(0,r.jsx)(v.Z,{type:"bar",height:400,options:l,series:H})})]})};var E=a(96420),Y=a(33454);let L={series1:"#ff9f43",series2:"#7367f0",series3:"#28c76f"},N=[{name:"Angular",data:[{x:5.4,y:170},{x:5.4,y:100},{x:6.3,y:170},{x:5.7,y:140},{x:5.9,y:130},{x:7,y:150},{x:8,y:120},{x:9,y:170},{x:10,y:190},{x:11,y:220},{x:12,y:170},{x:13,y:230}]},{name:"Vue",data:[{x:14,y:220},{x:15,y:280},{x:16,y:230},{x:18,y:320},{x:17.5,y:280},{x:19,y:250},{x:20,y:350},{x:20.5,y:320},{x:20,y:320},{x:19,y:280},{x:17,y:280},{x:22,y:300},{x:18,y:120}]},{name:"React",data:[{x:14,y:290},{x:13,y:190},{x:20,y:220},{x:21,y:350},{x:21.5,y:290},{x:22,y:220},{x:23,y:140},{x:19,y:400},{x:20,y:200},{x:22,y:90},{x:20,y:120}]}],X=()=>{let[e,t]=(0,p.useState)("daily"),a=(0,m.Z)(),s=(e,a)=>{t(a)},o={chart:{parentHeightOffset:0,toolbar:{show:!1},zoom:{type:"xy",enabled:!0}},legend:{position:"top",horizontalAlign:"left",markers:{offsetX:-3},labels:{colors:a.palette.text.secondary},itemMargin:{vertical:3,horizontal:10}},colors:[L.series1,L.series2,L.series3],grid:{borderColor:a.palette.divider,xaxis:{lines:{show:!0}}},yaxis:{labels:{style:{colors:a.palette.text.disabled}}},xaxis:{tickAmount:10,axisBorder:{show:!1},axisTicks:{color:a.palette.divider},crosshairs:{stroke:{color:a.palette.divider}},labels:{style:{colors:a.palette.text.disabled},formatter:e=>parseFloat(e).toFixed(1)}}};return(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(f.Z,{title:"New Technologies Data",sx:{flexDirection:["column","row"],alignItems:["flex-start","center"],"& .MuiCardHeader-action":{mb:0},"& .MuiCardHeader-content":{mb:[2,0]}},action:(0,r.jsxs)(Y.Z,{exclusive:!0,value:e,onChange:s,children:[(0,r.jsx)(E.Z,{value:"daily",children:"Daily"}),(0,r.jsx)(E.Z,{value:"monthly",children:"Monthly"}),(0,r.jsx)(E.Z,{value:"yearly",children:"Yearly"})]})}),(0,r.jsx)(b.Z,{children:(0,r.jsx)(v.Z,{type:"scatter",height:400,options:o,series:N})})]})};var W=a(6834);let V=(e,t)=>{let a=0,r=[];for(;a<e;){let e="w".concat((a+1).toString()),s=Math.floor(Math.random()*(t.max-t.min+1))+t.min;r.push({x:e,y:s}),a+=1}return r},G=[{name:"SUN",data:V(24,{min:0,max:60})},{name:"MON",data:V(24,{min:0,max:60})},{name:"TUE",data:V(24,{min:0,max:60})},{name:"WED",data:V(24,{min:0,max:60})},{name:"THU",data:V(24,{min:0,max:60})},{name:"FRI",data:V(24,{min:0,max:60})},{name:"SAT",data:V(24,{min:0,max:60})}],U=()=>{let e=(0,m.Z)(),t={chart:{parentHeightOffset:0,toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{colors:["light"===e.palette.mode?e.palette.background.paper:e.palette.customColors.bodyBg]},legend:{position:"bottom",labels:{colors:e.palette.text.secondary},markers:{offsetY:0,offsetX:-3},itemMargin:{vertical:3,horizontal:10}},plotOptions:{heatmap:{enableShades:!1,colorScale:{ranges:[{to:10,from:0,name:"0-10",color:"#b9b3f8"},{to:20,from:11,name:"10-20",color:"#aba4f6"},{to:30,from:21,name:"20-30",color:"#9d95f5"},{to:40,from:31,name:"30-40",color:"#8f85f3"},{to:50,from:41,name:"40-50",color:"#8176f2"},{to:60,from:51,name:"50-60",color:"#7367f0"}]}}},grid:{padding:{top:-20}},yaxis:{labels:{style:{colors:e.palette.text.disabled}}},xaxis:{labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}}};return(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(f.Z,{title:"Daily Sales States",action:(0,r.jsx)(W.Z,{iconProps:{fontSize:20},options:["Last 28 Days","Last Month","Last Year"],iconButtonProps:{size:"small",className:"card-more-options",sx:{color:"text.secondary"}}})}),(0,r.jsx)(b.Z,{children:(0,r.jsx)(v.Z,{type:"heatmap",height:400,options:t,series:G})})]})};var $=a(42563);let q={series1:"#fdd835",series2:"#1FD5EB",series3:"#00d4bd",series4:"#7367f0",series5:"#FFA1A1"},J=()=>{let e=(0,m.Z)(),t={stroke:{lineCap:"round"},labels:["Comments","Replies","Shares"],legend:{show:!0,position:"bottom",labels:{colors:e.palette.text.secondary},markers:{offsetX:-3},itemMargin:{vertical:3,horizontal:10}},colors:[q.series1,q.series2,q.series4],plotOptions:{radialBar:{hollow:{size:"30%"},track:{margin:15,background:(0,$.E)(e.palette.customColors.trackBg,1)},dataLabels:{name:{fontSize:"2rem"},value:{fontSize:"1rem",color:e.palette.text.secondary},total:{show:!0,fontWeight:400,label:"Comments",fontSize:"1.125rem",color:e.palette.text.primary,formatter:function(e){let t=e.globals.seriesTotals.reduce((e,t)=>e+t,0)/e.globals.series.length;return t%1==0?t+"%":t.toFixed(2)+"%"}}}}},grid:{padding:{top:-35,bottom:-30}}};return(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(f.Z,{title:"Statistics"}),(0,r.jsx)(b.Z,{children:(0,r.jsx)(v.Z,{type:"radialBar",height:400,options:t,series:[80,50,35]})})]})},K={series1:"#28c76f",series2:"#ea5455"},Q=[{data:[{x:"7/12/".concat(new Date().getFullYear()),y:[150,170,50,100]},{x:"8/12/".concat(new Date().getFullYear()),y:[200,400,170,330]},{x:"9/12/".concat(new Date().getFullYear()),y:[330,340,250,280]},{x:"10/12/".concat(new Date().getFullYear()),y:[300,330,200,320]},{x:"11/12/".concat(new Date().getFullYear()),y:[320,450,280,350]},{x:"12/12/".concat(new Date().getFullYear()),y:[300,350,80,250]},{x:"13/12/".concat(new Date().getFullYear()),y:[200,330,170,300]},{x:"14/12/".concat(new Date().getFullYear()),y:[200,220,70,130]},{x:"15/12/".concat(new Date().getFullYear()),y:[220,270,180,250]},{x:"16/12/".concat(new Date().getFullYear()),y:[200,250,80,100]},{x:"17/12/".concat(new Date().getFullYear()),y:[150,170,50,120]},{x:"18/12/".concat(new Date().getFullYear()),y:[110,450,10,420]},{x:"19/12/".concat(new Date().getFullYear()),y:[400,480,300,320]},{x:"20/12/".concat(new Date().getFullYear()),y:[380,480,350,450]}]}],ee=()=>{let[e,t]=(0,p.useState)(null),[a,s]=(0,p.useState)(null),o=(0,m.Z)(),l={chart:{parentHeightOffset:0,toolbar:{show:!1}},plotOptions:{bar:{columnWidth:"40%"},candlestick:{colors:{upward:K.series1,downward:K.series2}}},grid:{padding:{top:-10},borderColor:o.palette.divider,xaxis:{lines:{show:!0}}},yaxis:{tooltip:{enabled:!0},crosshairs:{stroke:{color:o.palette.divider}},labels:{style:{colors:o.palette.text.disabled}}},xaxis:{type:"datetime",axisBorder:{show:!1},axisTicks:{color:o.palette.divider},crosshairs:{stroke:{color:o.palette.divider}},labels:{style:{colors:o.palette.text.disabled}}}},i=(0,p.forwardRef)((e,t)=>{let a=null!==e.start?(0,g.default)(e.start,"MM/dd/yyyy"):"",s=null!==e.end?" - ".concat((0,g.default)(e.end,"MM/dd/yyyy")):null,o="".concat(a).concat(null!==s?s:"");return(0,r.jsx)(h.Z,{...e,size:"small",value:o,inputRef:t,InputProps:{startAdornment:(0,r.jsx)(y.Z,{position:"start",children:(0,r.jsx)(w.Z,{icon:"tabler:calendar-event"})}),endAdornment:(0,r.jsx)(y.Z,{position:"end",children:(0,r.jsx)(w.Z,{icon:"tabler:chevron-down"})})}})}),n=e=>{let[a,r]=e;s(a),t(r)};return(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(f.Z,{title:"Stocks Prices",subheader:"$50,863.98",sx:{flexDirection:["column","row"],alignItems:["flex-start","center"],"& .MuiCardHeader-action":{mb:0},"& .MuiCardHeader-content":{mb:[2,0]}},action:(0,r.jsx)(Z(),{selectsRange:!0,endDate:e,selected:a,startDate:a,onChange:n,id:"apexchart-candlestick",placeholderText:"Click to select a date",customInput:(0,r.jsx)(i,{start:a,end:e})})}),(0,r.jsx)(b.Z,{children:(0,r.jsx)(v.Z,{type:"candlestick",height:400,options:l,series:Q})})]})},et=(0,i.ZP)(o())(e=>{let{theme:t}=e;return{textDecoration:"none",color:t.palette.primary.main}}),ea=()=>(0,r.jsx)(c.Z,{children:(0,r.jsx)(x.Z,{children:(0,r.jsxs)(l.ZP,{container:!0,spacing:6,className:"match-height",children:[(0,r.jsx)(d.Z,{title:(0,r.jsx)(n.Z,{variant:"h5",children:(0,r.jsx)(et,{href:"https://github.com/apexcharts/react-apexcharts",target:"_blank",children:"React ApexCharts"})}),subtitle:(0,r.jsx)(n.Z,{variant:"body2",children:"React Component for ApexCharts"})}),(0,r.jsx)(l.ZP,{item:!0,xs:12,children:(0,r.jsx)(M,{})}),(0,r.jsx)(l.ZP,{item:!0,xs:12,children:(0,r.jsx)(I,{})}),(0,r.jsx)(l.ZP,{item:!0,xs:12,children:(0,r.jsx)(X,{})}),(0,r.jsx)(l.ZP,{item:!0,xs:12,children:(0,r.jsx)(P,{})}),(0,r.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,r.jsx)(k,{})}),(0,r.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,r.jsx)(ee,{})}),(0,r.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,r.jsx)(U,{})}),(0,r.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,r.jsx)(J,{})}),(0,r.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,r.jsx)(T,{})}),(0,r.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,r.jsx)(B,{})})]})})});var er=ea},459:function(){},5152:function(e,t,a){e.exports=a(95677)}},function(e){e.O(0,[5511,9198,3863,5353,9774,2888,179],function(){return e(e.s=58828)}),_N_E=e.O()}]);