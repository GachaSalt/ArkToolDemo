(this["webpackJsonpark-tool"]=this["webpackJsonpark-tool"]||[]).push([[40],{1098:function(e,t,a){"use strict";a.r(t);var n=a(36),i=a(130),r=a(131),o=a(133),s=a(132),l=a(0),c=a.n(l),u=a(466),h=a.n(u),d=a(966),_=a(501),p=a.n(_);function m(e,t,a,n,i){for(var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,o=n.length,s=Math.floor(o/2),l=r||new Float32Array(t*a*4),c=i?1:0,u=0;u<a;u++)for(var h=0;h<t;h++){for(var d=u,_=h,p=4*(u*t+h),m=0,g=0,f=0,v=0,y=0;y<o;y++){var b=d,x=Math.min(t-1,Math.max(0,_+y-s)),w=4*(b*t+x),k=n[y];m+=e[w]*k,g+=e[w+1]*k,f+=e[w+2]*k,v+=e[w+3]*k}l[p]=m,l[p+1]=g,l[p+2]=f,l[p+3]=v+c*(255-v)}return l}function g(e,t,a,n,i){for(var r=n.length,o=Math.floor(r/2),s=new Float32Array(t*a*4),l=i?1:0,c=0;c<a;c++)for(var u=0;u<t;u++){for(var h=c,d=u,_=4*(c*t+u),p=0,m=0,g=0,f=0,v=0;v<r;v++){var y=4*(Math.min(a-1,Math.max(0,h+v-o))*t+d),b=n[v];p+=e[y]*b,m+=e[y+1]*b,g+=e[y+2]*b,f+=e[y+3]*b}s[_]=p,s[_+1]=m,s[_+2]=g,s[_+3]=f+l*(255-f)}return s}function f(e,t,a,n,i,r){var o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,s=g(e,t,a,i,r);return m(s,t,a,n,r,o)}for(var v=a(884),y=a(96),b=a(557),x=a.n(b),w=a(12),k=a(672),E=a(674),S=a(923),C=a(565),z=a(673),I=a(968),A=a.n(I),j=a(967),O=a.n(j),R=a(681),N=a.n(R),M=a(100),D=new Array(19),H=0,L=D.length;H<L;H++)D[H]=2<<H;var W={38:0,40:1,37:2,39:3,75:0,74:1,72:2,76:3,87:0,83:1,65:2,68:3};if(window.navigator.msPointerEnabled)var q="MSPointerDown",P="MSPointerMove",T="MSPointerUp";else q="touchstart",P="touchmove",T="touchend";var U=["#eee4da","#ede0c8","#f2b179","#f59563","#f67c5f","#f65e3b","#edcc61","#edc850","#edc53f","#edc22e","#edad00","#b2e8a1","#92ed83","#83ed79","#60ed70","#9bcded","#71a9ed","#5991ed","#5975ed","#4c50ed"],B=[.8,.65,.55,.39,.3,.25],G=h()((function(e){return{root:{position:"absolute",top:0,left:0,width:"".concat(480,"px"),height:"".concat(480,"px"),zIndex:2,"&>div":{zIndex:2,transition:"top ".concat(155,"ms ease, left ").concat(155,"ms ease")},"&>div[appear]":{animationName:"$appear",animationDuration:"".concat(124,"ms")},"&>div[upgrade]":{animationName:"$upgrade",animationDuration:"".concat(170,"ms")}},"@keyframes appear":{"0%":{opacity:0,transform:"scale(0, 0)"},"100%":{opacity:1,transform:"scale(1, 1)"}},"@keyframes upgrade":{"0%":{opacity:0,transform:"scale(0, 0)"},"62%":{opacity:1,transform:"scale(1.2, 1.2)"},"100%":{opacity:1,transform:"scale(1, 1)"}}}}))(function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.refer;return c.a.createElement("div",{ref:a,className:t.root})}}]),a}(c.a.PureComponent)),Q={gallery:{display:"flex",flexWrap:"wrap",fontSize:"50px !important",width:"560px",margin:"10px auto","&>div":{margin:"5px",width:"60px",height:"60px",position:"relative",overflow:"hidden",borderRadius:"5px"}},mask:{position:"absolute",top:0,left:0,background:"rgba(0,0,0,0.75)",height:"100%",width:"100%",borderRadius:"6px",zIndex:20},gameover:{fontSize:"60px",fontWeight:"bold",height:"60px",lineHeight:"60px",color:"#faf8ef",marginTop:"170px",textAlign:"center","&:after":{content:'"Game Over"'}},win:{fontSize:"50px",fontWeight:"bold",height:"50px",lineHeight:"50px",color:"#faf8ef",marginTop:"170px",textAlign:"center",userSelect:"none"},lower:{width:"100%",display:"flex",justifyContent:"center",marginTop:"20px","& div":{backgroundColor:"rgba(255,255,255,0.3)",margin:"8px",borderRadius:"3px",height:"36px",width:"115px",textAlign:"center",lineHeight:"36PX",fontSize:"18px",fontWeight:"400",color:"#fff"},"& div[text]":{"&:before":{content:"attr(text)"}}}},F=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).intiBackgroundCells(),n.initGalleryCells(),n.cells=[],n.progress=0,n._progress=-1,n.newCells(),n.newCells(),n.state={gameover:!1,win:!1,end:!1,gg:!1,endless:!1},n}return Object(r.a)(a,[{key:"reset",value:function(){var e=this;this.cells.forEach((function(t){return e.container.removeChild(t.dom)})),this.cells=[],this.newCells(),this.newCells(),this.progress=0,this._progress=-1,this.updateCells(),this.setState({gameover:!1,win:!1,end:!1,gg:!1,endless:!1})}},{key:"componentDidMount",value:function(){this.updateCells(),this.attachEvent(),this.props.bindHandle&&this.props.bindHandle(this),this.windowBind()}},{key:"componentWillUnmount",value:function(){var e=this;this.windowUnbind(),this.props.bindHandle&&this.props.bindHandle(null),this.cells.forEach((function(t){return e.container.removeChild(t.dom)})),document.removeEventListener("keydown",this.keydownEvent)}},{key:"attachEvent",value:function(){var e,t,a=this;this.keydownEvent=function(e){var t=e.altKey||e.ctrlKey||e.metaKey||e.shiftKey,n=W[e.which];t||void 0!==n&&(e.preventDefault(),a.alignCells(n))},document.addEventListener("keydown",this.keydownEvent),this.container.addEventListener(q,(function(a){!window.navigator.msPointerEnabled&&a.touches.length>1||a.targetTouches.length>1||(window.navigator.msPointerEnabled?(e=a.pageX,t=a.pageY):(e=a.touches[0].clientX,t=a.touches[0].clientY),a.preventDefault())})),this.container.addEventListener(P,(function(e){e.preventDefault()})),this.container.addEventListener(T,(function(n){if(!(!window.navigator.msPointerEnabled&&n.touches.length>0||n.targetTouches.length>0)){var i,r;window.navigator.msPointerEnabled?(i=n.pageX,r=n.pageY):(i=n.changedTouches[0].clientX,r=n.changedTouches[0].clientY);var o=i-e,s=Math.abs(o),l=r-t,c=Math.abs(l);Math.max(s,c)>10&&a.alignCells(s>c?o>0?3:2:l>0?1:0)}}))}},{key:"intiBackgroundCells",value:function(){this.backgroundCells=[];for(var e=0;e<this.props.game_size;e++)for(var t=0;t<this.props.game_size;t++)this.backgroundCells.push(c.a.createElement("div",{key:"cell_".concat(e,"_").concat(t),x:e,y:t,block:"",bg:""}))}},{key:"initGalleryCells",value:function(){var e=this;this.galleryCells=[],this.bgLoader=[],this.galleryDom=new Array(D.length);for(var t=function(t){e.galleryCells.push(c.a.createElement("div",{ref:function(a){return e.galleryDom[t]=a},key:t,value:D[t],blur:""})),e.bgLoader.push(c.a.createElement("div",{key:t,value:D[t]}))},a=0;a<D.length;a++)t(a)}},{key:"windowBind",value:function(){var e=this;window.game={},window.game.help="Restart - game.restart() \nUp - game.u()\nDown - game.d()\nLeft - game.l()\nRight - game.f()\n",window.game.restart=function(){return e.reset()},window.game.u=function(){return e.alignCells(0)},window.game.d=function(){return e.alignCells(1)},window.game.l=function(){return e.alignCells(2)},window.game.r=function(){return e.alignCells(3)}}},{key:"windowUnbind",value:function(){window.game=null}},{key:"newCells",value:function(){var e=Math.floor((this.props.game_size_2-this.cells.length)*Math.random());this.cells.sort((function(e,t){return e.position-t.position})),this.cells.forEach((function(t){t.position<=e&&e++}));var t={position:e,value:0,x:this.props._x[e],y:this.props._y[e]};return this.cells.push(t),t}},{key:"isDead",value:function(){var e=this.getRows();if(e.forEach((function(e){return e.sort((function(e,t){return e.x-t.x}))})),!Z(e))return!1;var t=this.getColumn();return t.forEach((function(e){return e.sort((function(e,t){return e.y-t.y}))})),!!Z(t)}},{key:"alignCells",value:function(e){var t=this;if(!this.freeze&&!this.state.gg){this.freeze=!0,this.cells.length>=this.props.game_size_2&&this.isDead()&&this.setState({gameover:!0,gg:!0});for(var a=e<2?this.getColumn():this.getRows(),n=1===e||3===e,i=e<2?function(e,t){return e.y-t.y}:function(e,t){return e.x-t.x},r=e<2?function(e,t){return e.y=t}:function(e,t){return e.x=t},o=n?function(e,a){return r(e,t.props.game_size-1-a)}:r,s=0;s<this.props.game_size;s++){var l=a[s].sort(i);$(l,n);for(var c=0,u=0;u<l.length;u++){var h=n?l.length-u-1:u;l[h].merged?o(l[h],c-1):(o(l[h],c),c++)}}this.cells.forEach((function(e){e.position=t.props.game_size*e.y+e.x,e.upgrade&&t.cells.push({x:e.x,y:e.y,position:e.position,value:e.value+1,anime:!0})})),this.updateCells(!0)}}},{key:"updateCells",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];setTimeout((function(){return e.freeze=!1}),50);var a=this.cells.filter((function(e){return e.merged||e.upgrade})),n=this.cells.findIndex((function(e){return e.dom&&(e._x!==e.x||e._y!==e.y)}))>-1;if(this.cells.forEach((function(t){t.value>e.progress&&(e.progress=t.value),t.dom?(t._x=t.x,t._y=t.y,t.dom.setAttribute("x",t.x),t.dom.setAttribute("y",t.y),(t.merged||t.upgrade)&&(t.dom.style.zIndex=t.upgrade?"3 !important":null,setTimeout((function(){e.container.removeChild(t.dom),t.dom=null}),232.5))):e.addCell(t,Boolean(t.anime),n?77.5:0)})),a.forEach((function(t){t.upgrade=null,e.cells.splice(e.cells.indexOf(t),1)})),t&&n)for(var i=0;i<this.props.difficulty;i++)if(this.cells.length<this.props.game_size_2){var r=this.newCells();this.addCell(r,!1,n?77.5:0)}this.progress>this._progress&&(this.galleryDom.forEach((function(t,a){t&&a<=e.progress&&t.removeAttribute("blur")})),this._progress=this._progress),!this.state.endless&&this.progress>=this.props.ending&&(this.props.ending>=10&&4===this.props.game_size&&(localStorage.getItem("pa")||Object(M.b)()),this.setState({win:!0,gg:!0})),this.progress>=D.length-1&&this.setState({end:!0,gg:!0})}},{key:"addCell",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;e.dom=document.createElement("div"),e.dom.setAttribute("value",D[e.value]),e.dom.setAttribute("block",""),e.dom.setAttribute(a?"upgrade":"appear",""),e.dom.setAttribute("x",e.x),e.dom.setAttribute("y",e.y),e._x=e.x,e._y=e.y,e.dom.style.zIndex="4 !important",setTimeout((function(){t.container.appendChild(e.dom),setTimeout((function(){e.dom.style.zIndex=null}),170)}),n)}},{key:"getRows",value:function(){for(var e=new Array(this.props.game_size),t=0;t<this.props.game_size;t++)e[t]=[];return this.cells.forEach((function(t){return e[t.y].push(t)})),e}},{key:"getColumn",value:function(){for(var e=new Array(this.props.game_size),t=0;t<this.props.game_size;t++)e[t]=[];return this.cells.forEach((function(t){return e[t.x].push(t)})),e}},{key:"render",value:function(){var e=this,t=this.props.classes;return c.a.createElement("div",{className:t.root},c.a.createElement("div",{style:{display:"flex",justifyContent:"center",margin:"5px 0 10px 0"}},c.a.createElement("div",{style:{display:"flex",margin:"0 10px"}},c.a.createElement("input",{ref:function(t){return e.number_check=t},type:"checkbox",onClick:function(t){e.number_check_handle(t.target.checked)}}),"\u6570\u5b57"),c.a.createElement("div",{style:{display:"flex",margin:"0 10px"}},c.a.createElement("input",{ref:function(t){return e.glass_check=t},type:"checkbox",onClick:function(t){e.glass_check_handle(t.target.checked)}}),"\u900f\u660e\u5b57\u4f53 (\u624b\u673a\u53caSafari\u7528\u6237\u614e\u7528)")),c.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},c.a.createElement("div",{className:t.container},this.backgroundCells,c.a.createElement(G,{refer:function(t){return e.container=t}}),this.state.gg&&c.a.createElement("div",{className:t.mask},this.state.gameover&&c.a.createElement("div",{className:t.gameover}),this.state.win&&c.a.createElement("div",{className:t.win},"\u7406\u667a\u56de\u590d\u5b8c\u6210"),this.state.end&&c.a.createElement("div",{className:t.win},"\u7406\u667a\u6ea2\u51fa"),c.a.createElement("div",{className:t.lower},this.state.gameover&&c.a.createElement("div",{text:"Try Again",onClick:function(){return e.reset()}}),this.state.win&&c.a.createElement("div",{text:"Continue",onClick:function(){return e.continue()}}),c.a.createElement("div",{text:"New Game",onClick:function(){return e.props.restart()}}))))),c.a.createElement("div",{className:t.gallery,number:""},this.galleryCells.filter((function(t,a){return a<=e.props.ending||e.state.endless}))),c.a.createElement("div",{style:{overflow:"hidden",height:"0",width:"0",position:"relative"}},this.bgLoader))}},{key:"glass_check_handle",value:function(e){if(e){if(this.number_check.checked||(this.number_check.checked=!0,this.number_check_handle(!0)),!this.container.hasAttribute("glass")){var t=document.createAttribute("glass");this.container.setAttributeNode(t)}}else this.container.removeAttribute("glass")}},{key:"number_check_handle",value:function(e){if(e&&!this.container.hasAttribute("number")){var t=document.createAttribute("number");this.container.setAttributeNode(t),this.glass_check.disabled=!1}else e||(this.container.removeAttribute("number"),this.glass_check.disabled=!0)}},{key:"continue",value:function(){this.setState({gg:!1,win:!1,gameover:!1,endless:!0})}}]),a}(c.a.PureComponent);function V(e){var t=e.game_size,a=e._x,n=e._y,i=e.styles,r=e.difficulty,o=e.ending,s=e.restart,l=e.bindHandle,u=t*t,h=p()(i)();return c.a.createElement(F,{ending:o,game_size:t,game_size_2:u,_x:a,_y:n,difficulty:r,classes:h,restart:s,bindHandle:l})}var X=new Array(D.length).join(" ").split(" ").map((function(e,t){return B[D[t].toString().length-1]})),K={};D.forEach((function(e,t){return K['& [value="'.concat(e,'"]')]={fontSize:"calc(".concat((100*X[t]).toFixed(0),"%)"),backgroundColor:U[t]}}));var Y={3:1,4:1,5:2,6:3},J=Object.keys(d);function $(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t)for(var a=e.length-1;a>0;a--)e[a].merged||e[a].value!==e[a-1].value||(e[a].upgrade=!0,e[a-1].merged=!0);else for(var n=0;n<e.length-1;n++)e[n].merged||e[n].value!==e[n+1].value||(e[n].upgrade=!0,e[n+1].merged=!0)}function Z(e){for(var t=0;t<e.length;t++)for(var a=1;a<e[t].length;a++)if(e[t][a].value===e[t][a-1].value)return!1;return!0}function ee(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=window.location.origin+window.location.pathname+"#/2048"+(e?"?game="+e:"");x()(t),alert("Game Link: "+t+"\nCopied.")}J.sort((function(e,t){return e.localeCompare(t)})),t.default=h()((function(e){return{header:{display:"flex",justifyContent:"space-between",width:"".concat(480,"px"),margin:"5px auto","&>div":{display:"flex",alignItems:"center"},"&>div:first-child>*":{marginRight:5},"&>div:last-child>*":{marginLeft:5}},customWrap:{width:"480px",margin:"5px auto"},customIconContainer:Object(n.a)({display:"flex",flexWrap:"wrap",fontSize:"70px",userSelect:"none","& div[icon]":{width:"70px",height:"70px",lineHeight:"70px",margin:"5px",borderRadius:"5px",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",fontWeight:"bold",color:"#fff",textShadow:"0 2px 4px #000",position:"relative"},"& img":{position:"absolute",width:"100%",height:"100%",lineHeight:"100%",top:0,left:0,zIndex:1},"&>div[value]:after":{content:"attr(value)",position:"absolute",width:"100%",textAlign:"center",height:"100%",top:0,left:0,zIndex:2}},K),iconWrap:{display:"flex",justifyContent:"center",flexWrap:"wrap",userSelect:"none","&>div":{margin:"5px",width:"60px",height:"60px",borderRadius:"5px",overflow:"hidden"},"& img":{width:"60px",height:"60px"},"& div[chosen]":{boxShadow:"0 2px 6px 2px rgba(0, 0, 0, 0.80)"}},dialogHeader:{border:"dark"===e.palette.type?"3px dashed #fff":"3px dashed #333",padding:"10px",margin:"0 16px 16px 16px","&>div":{marginRight:"20px !important"},"& div[chosen=false]":{opacity:"0.6"},"& div[chosen=true]":{boxShadow:"0 2px 6px 2px rgba(0, 0, 0, 0.80)",opacity:"1 !important"}},empty:{border:"dark"===e.palette.type?"3px solid #fff":"3px solid #333",opacity:"0.6","&>svg":{height:"50%",width:"50%",fill:"dark"===e.palette.type?"#fff":"#333"},"&:hover":{opacity:1}},loading:{width:"".concat(480,"px"),height:"40px",background:"rgb(255, 255, 255, 0)",borderRadius:"6px",marginTop:"80px",lineHeight:"".concat(40,"px"),justifyContent:"center",fontSize:"36px",fontWeight:"bold","&:after":{animation:"$breath 3.2s linear 0s infinite",content:'"LOADING"'}},"@keyframes breath":{"0%":{content:'"LOADING\xa0\xa0\xa0"'},"25%":{content:'"LOADING.\xa0\xa0"'},"50%":{content:'"LOADING..\xa0"'},"75%":{content:'"LOADING..."'},"100%":{content:'"LOADING..."'}}}}))(function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var n;Object(i.a)(this,a),(n=t.call(this,e)).handleClose=function(){n.setState({open:!1})},n.okHandle=function(){n.choiced[n.state.currentValue]=n.state.dialogSelect,n.choicedSub[n.state.currentValue]=d[n.state.dialogSelect]&&d[n.state.dialogSelect][n.state.dialogSelectSub]?n.state.dialogSelectSub:0,n.handleClose()},n.state={appStyle:null,difficulty:1,ending:10,redirect:null,custom:!1,open:!1,currentValue:"",dialogSelect:null,dialogSelectSub:null},n.choiced=new Array(D.length),n.choicedSub=new Array(D.length),n.game_size=4,n._redirect=null,n.iconQuery=null,n.iconSet=null;var r=n.props.location;if(r&&""!==r.search){var o=new URLSearchParams(r.search).get("game");o&&(n.iconQuery=o)}return n.newStyle(n.iconQuery),n.refresh=0,n}return Object(r.a)(a,[{key:"intiBlurredImage",value:function(){var e=this;this.canvas=document.createElement("canvas"),this.canvas.width=80,this.canvas.height=80,this.ctx=this.canvas.getContext("2d"),this.blurredImage=new Array(D.length);for(var t=function(t){var a=new Image;a.src="./img/avatars/".concat(encodeURIComponent(e.icon[t]),".png"),a.onload=function(){return e.doBlur(a,t)}},a=0;a<D.length;a++)t(a)}},{key:"newStyle",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(a)e=this.iconSet;else if(t)e=this.parseIconQuery(t),this.iconSet=e,this.iconQuery=t;else{var i=Object.keys(d).sort((function(){return.5-Math.random()}));e=new Array(D.length);for(var r=[],o=0,s=D.length;o<s;o++){var l=i[o],c=parseInt(i[o].split("_")[0]).toString(36),u=d[i[o]][Math.floor(d[i[o]].length*Math.random())];e[o]="char_"+l+u,r[o]=c+u}var h=Object(y.compressToBase64)(r.join(",")).replace(/\//g,"-").replace(/\+/g,"_").replace(/=/g,"");this.iconQuery=h,this.iconSet=e}for(var _=this.game_size,p=_*_,m=464/_-16,g=new Array(p),f=new Array(p),v=0;v<_;v++)for(var b=0;b<_;b++)g[v+b*_]=v,f[v+b*_]=b;var x={};D.forEach((function(t,a){x['& [value="'.concat(t,'"]:before')]={content:'""',backgroundImage:'url("./img/avatars/'.concat(encodeURIComponent(e[a]),'.png")')},x['& [glass] [value="'.concat(t,'"]:after')]={backgroundImage:'url("./img/avatars/'.concat(encodeURIComponent(e[a]),'.png")')}}));for(var w={},k=0;k<_;k++)w['& [x="'.concat(k,'"]')]={left:"".concat(16+k*(m+16),"px")},w['& [y="'.concat(k,'"]')]={top:"".concat(16+k*(m+16),"px")};this._x=g,this._y=f,this.icon=e,this.appStyle=Object(n.a)({root:Object(n.a)(Object(n.a)(Object(n.a)({"& [bg]":{background:"rgba(238, 228, 218, 0.35)",zIndex:1},"& [block]":{borderRadius:"5px",height:"".concat(m,"px"),width:"".concat(m,"px")},"& [value]:before":{borderRadius:"5px",height:"100%",width:"100%",position:"absolute",top:0,left:0,backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"100% 100%"},"& [x],[y]":{top:0,left:0,position:"absolute",borderRadius:"5px"},"& [number]>[value]:after":{content:"attr(value)",height:"100%",width:"100%",position:"absolute",top:0,left:0,display:"flex",alignItems:"center",justifyContent:"center",lineHeight:"".concat(m,"px"),fontWeight:"bold",color:"rgba(255,255,255,0.6)"},"& [glass]>[value]:after":{filter:"drop-shadow(0px 0px 3px black) drop-shadow(1px 1px 2px black) drop-shadow(-1px -1px 2px black)",opacity:.8,backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"".concat(m,"px ").concat(m,"px"),"-webkitBackgroundClip":"text",backgroundClip:"text",color:"transparent"},"& [number]":{fontSize:"".concat(m,"px")}},w),x),K),container:{width:"".concat(480,"px"),height:"".concat(480,"px"),background:"rgb(187, 173, 160)",borderRadius:"6px",padding:"".concat(16,"px"),position:"relative"}},Q),this.intiBlurredImage()}},{key:"createIconQuery",value:function(e,t){for(var a=new Array(D.length),n=0,i=a.length;n<i;n++)if(e[n]){var r=parseInt(e[n].split("_")[0]).toString(36);a[n]=r+"_"+t[n]}else a[n]="";return Object(y.compressToBase64)(a.join(",")).replace(/\//g,"-").replace(/\+/g,"_").replace(/=/g,"")}},{key:"parseIconQuery",value:function(e){var t=e.replace(/_/g,"+").replace(/-/g,"/");t+=e.length%4>0?new Array(5-e.length%4).join("="):"";for(var a=Object(y.decompressFromBase64)(t),n=Object.keys(d),i=a.split(","),r=Array(D.length),o=Array(i.length),s=function(e,t){if(""===i[e])return r[e]=null,o[e]=null,"continue";var a=i[e].split("_"),s=parseInt(a[0],36).toFixed(0),l=s.length<4?3:s.length,c=("0000"+s).substr(-l),u=n.find((function(e){return e.startsWith(c)})),h=d[u].includes(a[1])?a[1]:d[u][Math.floor(d[u].length*Math.random())];r[e]="char_"+u+ +h,o[e]=u},l=0,c=i.length;l<c;l++)s(l);if(i.length<D.length||r.includes(null)){for(var u=0,h=i.length;u<h;u++)o[u]&&n.splice(n.indexOf(o[u]),1);n.sort((function(e,t){return.5-Math.random()}));for(var _=0,p=D.length;_<p;_++)if(!r[_]){var m=d[n[_]][Math.floor(d[n[_]].length*Math.random())];r[_]="char_"+n[_]+m}}return r}},{key:"doBlur",value:function(e,t){this.ctx.fillStyle=U[t],this.ctx.beginPath(),this.ctx.rect(0,0,this.canvas.width,this.canvas.height),this.ctx.fill(),this.ctx.drawImage(e,0,0,this.canvas.width,this.canvas.height);var a=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height),n=this.ctx.createImageData(this.canvas.width,this.canvas.height);!function(e,t,a,n){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if((n=Math.abs(n))<=1)throw new Error("Diameter should be greater than 1.");for(var r=n/2,o=Math.ceil(n)+(1-Math.ceil(n)%2),s=new Float32Array(o),l=(r+.5)/3,c=l*l,u=1/Math.sqrt(2*Math.PI*c),h=-1/(2*l*l),d=0,_=Math.floor(o/2),p=0;p<o;p++){var m=p-_,g=u*Math.exp(m*m*h);s[p]=g,d+=g}for(var v=0;v<s.length;v++)s[v]/=d;f(e,t,a,s,s,!1,i)}(a.data,a.width,a.height,40,n.data);for(var i=0;i<n.data.length;i+=4)n.data[i]*=.5,n.data[i+1]*=.5,n.data[i+2]*=.5;if(this.ctx.putImageData(n,0,0),this.blurredImage[t]=this.canvas.toDataURL(),this.blurredImage.findIndex((function(e){return!e}))<0){for(var r=0;r<this.blurredImage.length;r++)this.appStyle.gallery['& [blur][value="'.concat(D[r],'"]:before')]={backgroundImage:'url("'.concat(this.blurredImage[r],'") !important')};this.setState({appStyle:this.appStyle,difficulty:this.difficulty})}}},{key:"render",value:function(){var e=this,t=this.props.classes;return this.difficulty=this.state.difficulty,this.willRedirect=this._redirect!==this.state.redirect,this.willRedirect&&(this._redirect=this.state.redirect),c.a.createElement(c.a.Fragment,null,this.willRedirect&&c.a.createElement(w.a,{to:this.state.redirect}),c.a.createElement(k.a,{open:this.state.open,onClose:this.okHandle,scroll:"body"},c.a.createElement(z.a,null,"Select Icon"),c.a.createElement(E.a,null,c.a.createElement("div",{className:t.customIconContainer+" "+t.dialogHeader},c.a.createElement("div",{value:D[this.state.currentValue],icon:""}),this.state.dialogSelect&&c.a.createElement("div",{style:{display:"flex"}},d[this.state.dialogSelect].map((function(t,a){return c.a.createElement("div",{key:"./img/avatars/char_".concat(e.state.dialogSelect).concat(encodeURIComponent(t),".png"),chosen:e.state.dialogSelectSub===a?"true":"false",icon:"",value:D[e.state.currentValue],onClick:function(){return e.setState({dialogSelectSub:a})}},c.a.createElement("img",{src:"./img/avatars/char_".concat(e.state.dialogSelect).concat(encodeURIComponent(t),".png")}))})),c.a.createElement("div",{className:t.empty,icon:"",onClick:function(){return e.setState({dialogSelect:null,dialogSelectSub:0})}},c.a.createElement(N.a,null)))),c.a.createElement("div",{className:t.iconWrap},J.map((function(t){return c.a.createElement("div",{key:t,style:{background:e.state.dialogSelect===t?U[e.state.currentValue]:U[e.choiced.indexOf(t)]},chosen:e.state.dialogSelect===t?"":null,onClick:function(){return e.setState({dialogSelect:t})}},c.a.createElement("img",{src:"./img/avatars/char_".concat(t,".png")}))})))),c.a.createElement(S.a,null,c.a.createElement(C.a,{color:"inherit",onClick:this.handleClose},"Cancel"),c.a.createElement(C.a,{color:"inherit",onClick:this.okHandle},"Ok"))),c.a.createElement("div",{className:t.header},c.a.createElement("div",null,c.a.createElement(C.a,{variant:"outlined",size:"small",onClick:function(){return e.restart()}},"New Game"),c.a.createElement(C.a,{variant:"outlined",size:"small",onClick:function(){e.gameHandle&&e.gameHandle.reset()}},"Restart")),c.a.createElement("div",null,c.a.createElement(C.a,{variant:"outlined",size:"small",onClick:function(){e.newStyle(),e.props.location.pathname===e.props.match.path&&""===e.props.location.search||e.setState({redirect:e.props.match.path})}},"Random Tiles"),c.a.createElement(C.a,{variant:"outlined",size:"small",onClick:function(){return e.setState({custom:!e.state.custom})}},"Custom"),c.a.createElement(C.a,{variant:"outlined",size:"small",onClick:function(){return ee()}},"Copy Link"))),c.a.createElement("div",{className:t.header},c.a.createElement("div",null,c.a.createElement("span",{style:{marginRight:10}},"\u68cb\u76d8\u5927\u5c0f"),c.a.createElement(v.a,{value:this.game_size,onChange:function(t){return e.game_size_handle(t.target.value)},style:{width:"50px",minWidth:"50px",fontSize:"12px"}},[3,4,5,6].map((function(e,t){return c.a.createElement("option",{key:e,value:e},e)})))),c.a.createElement("div",null,c.a.createElement("span",{style:{marginRight:10}},"\u76ee\u6807"),c.a.createElement(v.a,{value:this.state.ending,onChange:function(t){return e.setState({ending:t.target.value})},style:{width:"80px",minWidth:"80px",fontSize:"12px"}},[9,10,11,12,13,14,15].map((function(e){return c.a.createElement("option",{key:e,value:e},D[e])})))),c.a.createElement("div",null,c.a.createElement("span",{style:{marginRight:10}},"\u96be\u5ea6"),c.a.createElement(v.a,{value:this.state.difficulty,onChange:function(t){return e.setState({difficulty:t.target.value})},style:{width:"50px",minWidth:"50px",fontSize:"12px"}},[1,2,3].map((function(t){return t<=Y[e.game_size]?c.a.createElement("option",{key:t,value:t},t):null}))))),this.state.custom&&c.a.createElement("div",{className:t.customIconContainer+" "+t.customWrap},D.map((function(t,a){return c.a.createElement("div",{key:t,value:t,icon:"",onClick:function(){return e.openDialog(a)}},e.choiced[a]&&c.a.createElement("img",{src:"./img/avatars/char_".concat(e.choiced[a]).concat(encodeURIComponent(d[e.choiced[a]][e.choicedSub[a]]),".png")}))})),c.a.createElement("div",{className:t.empty,icon:"",onClick:function(){return e.applyCustom()}},c.a.createElement(O.a,null)),c.a.createElement("div",{className:t.empty,icon:"",onClick:function(){return e.copyCustomLink()}},c.a.createElement(A.a,null)),c.a.createElement("div",{className:t.empty,icon:"",onClick:function(){return e.setState({custom:!1})}},c.a.createElement(N.a,null))),!this.state.appStyle&&c.a.createElement("div",{className:t.header},c.a.createElement("div",{className:t.loading})),this.state.appStyle&&c.a.createElement(V,{key:"".concat(this.game_size,"_").concat(this.refresh),difficulty:this.state.difficulty,game_size:this.game_size,ending:this.state.ending,_x:this._x,_y:this._y,styles:this.state.appStyle,restart:function(){return e.restart()},bindHandle:function(t){return e.gameHandle=t}}))}},{key:"openDialog",value:function(e){this.setState({open:!0,currentValue:e,dialogSelect:this.choiced[e],dialogSelectSub:this.choicedSub[e]?this.choicedSub[e]:0})}},{key:"copyCustomLink",value:function(){var e=this,t=this.choicedSub.map((function(t,a){return e.choiced[a]?d[e.choiced[a]][t]:null}));ee(this.createIconQuery(this.choiced,t))}},{key:"applyCustom",value:function(){var e=this;alert("Apply custom setting.\nUnassigned tiles will be assigned randomly.");var t=this.choicedSub.map((function(t,a){return e.choiced[a]?d[e.choiced[a]][t]:null})),a=this.createIconQuery(this.choiced,t);this.newStyle(a)}},{key:"game_size_handle",value:function(e){this.game_size=e,this.state.difficulty>Y[this.game_size]&&(this.difficulty=Y[this.game_size]),this.newStyle(null,!0)}},{key:"restart",value:function(){this.refresh=10-this.refresh,this.newStyle()}}]),a}(c.a.PureComponent))},966:function(e){e.exports=JSON.parse('{"002_amiya":["","_1+","_2","_epoque#4","_winter#1"],"004_mon3tr":[""],"009_12fce":[""],"010_chen":["","_2","_nian#2"],"010_chen2":[""],"017_huang":["","_2"],"017_huang2":[""],"1001_amiya2":["","_2"],"101_sora":["","_2","_summer#1"],"102_texas":["","_2","_epoque#7","_winter#1"],"103_angel":["","_2","_kfc#1","_wild#1"],"105_emperor":[""],"106_franka":["","_2"],"107_liskam":["","_2","_nian#2"],"108_silent":["","_2","_sweep#1"],"109_fmout":["","_2","_epoque#2"],"110_deepcl":["","_2"],"112_siege":["","_2","_wild#2"],"113_cqbw":["","_2","_epoque#7"],"115_headbr":["","_2","_marthe#2"],"117_myrrh":["","_2","_wild#1"],"118_yuki":["","_2"],"120_hibisc":["","_nian#1"],"121_lava":[""],"122_beagle":["","_boc#1"],"123_fang":["","_winter#1"],"124_kroos":["","_witch#1"],"126_shotst":["","_2"],"127_estell":["","_2"],"128_plosis":["","_2","_epoque#3"],"129_bluep":["","_2"],"130_doberm":["","_2","_epoque#7"],"131_flameb":["","_2"],"133_mm":["","_2"],"134_ifrit":["","_2","_kfc#1","_summer#1"],"136_hsguma":["","_2","_nian#3"],"137_brownb":["","_2","_kitchen#1"],"140_whitew":["","_2","_boc#1"],"141_nights":["","_2"],"143_ghost":["","_2","_winter#1"],"144_red":["","_2"],"145_prove":["","_2","_summer#3"],"147_shining":["","_2","_summer#1"],"148_nearl":["","_2","_summer#2","_summer_1"],"149_scave":["","_2"],"1505_frstar":[""],"150_snakek":["","_2","_wild#1"],"151_myrtle":["","_2"],"155_tiger":["","_2"],"158_milu":["","_2","_snow#2","_wild#2"],"159_peacok":["","_2"],"163_hpsts":["","_2"],"164_nightm":["","_2","_epoque#5"],"166_skfire":["","_2","_summer#1"],"171_bldsk":["","_2","_witch#1"],"172_svrash":["","_2","_snow#1","_summer#4"],"173_slchan":["","_2","_wild#1","_wwf#1"],"174_slbell":["","_2","_snow#1"],"179_cgbird":["","_2","_witch#1"],"180_amgoat":["","_2"],"181_flower":["","_2","_daily#1"],"183_skgoat":["","_2"],"185_frncat":["","_2"],"187_ccheal":["","_2","_epoque#2"],"188_helage":["","_2"],"190_clour":["","_2"],"192_falco":[""],"193_frostl":["","_2"],"195_glassb":["","_2","_kitchen#1"],"196_sunbr":["","_2","_summer#1"],"197_poca":["","_2"],"198_blackd":["","_2","_winter#1"],"199_yak":["","_2","_summer#1"],"2013_cerber":["","_2","_summer#4"],"2014_nian":["","_2"],"201_moeshd":["","_2","_kfc#1","_summer#4"],"202_demkni":["","_2","_boc#1","_test#1"],"204_platnm":["","_2","_summer#3"],"208_melan":["","_epoque#1"],"209_ardign":["","_snow#1"],"210_stward":[""],"211_adnach":[""],"212_ansel":["","_summer#1"],"213_mostma":["","_2","_epoque#5"],"214_kafka":["","_2"],"215_mantic":["","_2","_epoque#4"],"218_cuttle":["","_2"],"219_meteo":["","_2","_sweep#1"],"220_grani":["","_2","_epoque#6"],"222_bpipe":["","_2","_race#1"],"225_haak":["","_2"],"226_hmau":["","_2"],"230_savage":["","_2"],"235_jesica":["","_2","_nian#2","_sweep#1","_wild#2"],"236_rope":["","_2","_summer#2","_summer_1","_witch#1"],"237_gravel":["","_2"],"240_wyvern":[""],"241_panda":["","_2","_marthe#1"],"242_otter":["","_2","_ghost#1"],"243_waaifu":["","_2"],"248_mgllan":["","_2","_kitchen#1"],"250_phatom":["","_2","_ghost#1"],"252_bibeak":["","_2"],"253_greyy":["","_2"],"254_vodfox":["","_2"],"258_podego":["","_2"],"260_durnar":["","_2"],"261_sddrag":["","_2"],"263_skadi":["","_2","_summer#3"],"264_f12yin":["","_2"],"265_sophia":["","_2"],"271_spikes":["","_2"],"272_strong":["","_2"],"274_astesi":["","_2","_epoque#5"],"275_breeze":["","_2"],"277_sqrrel":["","_2","_ghost#1"],"278_orchid":[""],"279_excu":["","_2","_boc#1"],"281_popka":[""],"282_catap":[""],"283_midn":["","_boc#1"],"284_spot":["","_otaku#1"],"285_medic2":[""],"286_cast3":["","_summer#1"],"289_gyuki":["","_2"],"290_vigna":["","_2","_summer#1"],"291_aglina":["","_2","_boc#1"],"293_thorns":["","_2"],"294_ayer":["","_2"],"298_susuro":["","_2"],"301_cutter":["","_2"],"302_glaze":["","_2"],"306_leizi":["","_2"],"308_swire":["","_2","_nian#2"],"311_mudrok":["","_2"],"325_bison":["","_2"],"326_glacus":["","_2","_ghost#1"],"328_cammou":["","_2"],"333_sidero":["","_2"],"336_folivo":["","_2"],"337_utage":["","_2","_summer#4"],"340_shwaz":["","_2","_snow#1"],"343_tknogi":["","_2"],"344_beewax":["","_2"],"345_folnic":["","_2"],"346_aosta":["","_2"],"347_jaksel":["","_2"],"348_ceylon":["","_2"],"349_chiave":["","_2"],"350_surtr":["","_2"],"355_ethan":["","_2","_epoque#7"],"356_broca":["","_2"],"358_lisa":["","_2","_wild#3"],"365_aprl":["","_2","_wild#3"],"366_acdrop":["","_2"],"367_swllow":["","_2","_boc#1"],"373_lionhd":["","_2","_wild#3"],"376_therex":[""],"378_asbest":["","_2"],"379_sesa":["","_2"],"381_bubble":["","_2"],"383_snsant":["","_2"],"385_finlpp":["","_2"],"388_mint":["","_2"],"391_rosmon":["","_2"],"400_weedy":["","_2","_snow#2"],"401_elysm":["","_2","_snow#2"],"405_absin":["","_2"],"411_tomimi":["","_2"],"415_flint":["","_2"],"416_zumama":["","_2"],"423_blemsh":["","_2"],"436_whispr":["","_2"],"440_pinecn":["","_2"],"451_robin":["","_2"],"500_noirc":[""],"501_durin":[""],"502_nblade":[""],"503_rang":[""],"504_rguard":[""],"505_rcast":[""],"506_rmedic":[""],"507_rsnipe":[""],"508_aguard":["","_2"],"509_acast":["","_2"],"510_amedic":["","_2"],"511_asnipe":["","_2"]}')}}]);