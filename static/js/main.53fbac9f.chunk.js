(this["webpackJsonpmlpr-react"]=this["webpackJsonpmlpr-react"]||[]).push([[0],{32:function(t,e,a){t.exports=a(48)},37:function(t,e,a){},38:function(t,e,a){},48:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(27),i=a.n(o),s=(a(37),a(10)),l=a(6),c=a(11),h=a(12),p=a(13),u=a(7),b=(a(38),a(78)),d=a(79),m=a(80),f=a(50),g=a(8),y=a(18),x=a.n(y);var j=function(t){function e(){return Object(s.a)(this,e),Object(c.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t,e=function(t){for(var e=[],a=0;a<t.series.length;a++)e.push({name:t.seriesLabels[a],data:t.series[a]});return e}(this.props.lineChartData),a={chart:{type:"line",zoom:{type:"x",enabled:!0,autoScaleYaxis:!0},toolbar:{autoSelected:"zoom"}},colors:["#2196f3","#f44336"],dataLabels:{enabled:!1},title:{text:(t=this.props.lineChartData).title,align:"left"},yaxis:{title:{text:t.yAxisLabel},labels:{formatter:function(t){return t.toFixed(4)}}},xaxis:{categories:t.catagories,title:{text:t.xAxisLabel}}};return r.a.createElement(x.a,{options:a,series:e,type:"line",width:"500"})}}]),e}(n.Component),v=a(28),w=a.n(v),E=function(t){function e(){return Object(s.a)(this,e),Object(c.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){for(var t=[],e=0;e<this.props.boxPlotData.labels.length;e++)t.push({y:this.props.boxPlotData.values[e],name:this.props.boxPlotData.labels[e],type:"box"});return r.a.createElement(w.a,{data:t,layout:{width:500,height:350,title:"Cross-Correlation"}})}}]),e}(n.Component),O=a(73),D=a(75),k=a(69),C=a(72),L=a(74),W=a(71),P=function(t){function e(){return Object(s.a)(this,e),Object(c.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){for(var t=[],e=1;e<this.props.tableData.header.length;e++)t.push(r.a.createElement(k.a,{align:"right",style:{fontWeight:"bold"}},this.props.tableData.header[e]));var a=[];for(e=0;e<this.props.tableData.rows.length;e++){for(var n=[r.a.createElement(k.a,{component:"th",scope:"row"},this.props.tableData.rows[e][0])],o=1;o<this.props.tableData.rows[e].length;o++)n.push(r.a.createElement(k.a,{align:"right"},this.props.tableData.rows[e][o].toFixed(4)));a.push(r.a.createElement(W.a,{key:this.props.tableData.rows[e][0]},n))}return r.a.createElement(C.a,null,r.a.createElement(O.a,null,r.a.createElement(L.a,null,r.a.createElement(W.a,null,r.a.createElement(k.a,{style:{fontWeight:"bold"}},this.props.tableData.header[0]),t)),r.a.createElement(D.a,null,a)))}}]),e}(n.Component);var A=function(t){function e(){return Object(s.a)(this,e),Object(c.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t,e=function(t){for(var e=[],a=0;a<t.labels.length;a++){for(var n=[],r=t.labels.length-1;r>=0;r--)n.push({x:t.labels[r],y:t.data[a][r]});e.push({name:t.labels[a],data:n})}return e}(this.props.heatMapData),a={chart:{height:350,type:"heatmap"},dataLabels:{enabled:!0,style:{fontWeight:"normal",colors:["#000"]}},legend:{show:!1},colors:["#2196f3"],yaxis:{title:{text:(t=this.props.heatMapData).yAxisLabel}},xaxis:{categories:t.labels,title:{text:t.xAxisLabel}},title:{text:t.title}};return r.a.createElement(x.a,{options:a,series:e,type:"heatmap",width:"500"})}}]),e}(n.Component),I=a(30),N=a(77),R=a(23),M=a(76),S=a(4);document.body.style="background: rgb(245,245,245);";var F=Object(I.a)({palette:{primary:R.a,secondary:M.a}}),J=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(c.a)(this,Object(h.a)(e).call(this,t))).state={data:null},a}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this,e=this.props.classes,a=function(t){var e=[];return null!=t&&(t.tables.forEach((function(t){e.push(r.a.createElement(P,{tableData:t}))})),t.lineCharts.forEach((function(t){e.push(r.a.createElement(j,{lineChartData:t}))})),t.heatMaps.forEach((function(t){e.push(r.a.createElement(A,{heatMapData:t}))})),t.boxPlots.forEach((function(t){e.push(r.a.createElement(E,{boxPlotData:t}))}))),e}(this.state.data);return r.a.createElement(N.a,{theme:F},r.a.createElement("div",{className:e.root},r.a.createElement(b.a,{position:"static"},r.a.createElement(d.a,null,r.a.createElement(m.a,{className:e.title,variant:"h6",noWrap:!0},"Performance Report"),r.a.createElement("input",{type:"file",name:"file",onChange:function(e){var a=new FileReader;a.onload=function(e){t.setState((function(t,a){if(null!=e.target)return{data:JSON.parse(e.target.result)}}))},a.readAsText(e.target.files[0])}}))),r.a.createElement("div",{className:e.body},r.a.createElement("div",{className:e.cards},a.map((function(t,e){return r.a.createElement(f.a,{elevation:3,style:{width:"auto",height:"auto",padding:"16px",margin:"16px"},key:e},t)}))))))}}]),e}(r.a.Component),z=Object(S.a)((function(t){return{root:{flexGrow:1},title:Object(u.a)({flexGrow:1,display:"none"},t.breakpoints.up("sm"),{display:"block"}),search:Object(u.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(g.b)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(g.b)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"}),searchIcon:{width:t.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(u.a)({padding:t.spacing(1,1,1,7),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:120,"&:focus":{width:200}}),body:{width:"100%",height:"100%",justifyContent:"center",display:"flex"},cards:{maxWidth:"2000px",justifyContent:"center",alignItems:"center",display:"flex",flexWrap:"wrap","& > *":{margin:t.spacing(1),width:t.spacing(16),height:t.spacing(16)}}}}))(J);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.53fbac9f.chunk.js.map