(function(e){function t(t){for(var i,r,c=t[0],a=t[1],u=t[2],d=0,f=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,c=1;c<n.length;c++){var a=n[c];0!==o[a]&&(i=!1)}i&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},o={app:0},s=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=a;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"0c9c":function(e,t,n){},"197f":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Search",{staticClass:"search",attrs:{"edit-model":e.editModel}}),n("div",{staticClass:"background"},[n("div",{staticStyle:{position:"relative"}},[n("Background",{attrs:{"edit-model":e.editModel}}),n("div",{staticClass:"cover",style:{background:e.focused?"#00000088":"#00000033",transition:"all ease .3s"}})],1)]),n("Links",{staticClass:"links",attrs:{"edit-model":e.editModel}}),n("div",{staticClass:"edit",on:{click:function(t){e.editModel=!e.editModel}}},[n("i",{staticClass:"el-icon-setting"})])],1)},s=[],r=n("5530"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Search"},[n("div",{staticClass:"container",style:{border:e.editModel?".1rem solid #fff":"",background:e.editModel?"#00000088":""},on:{mouseenter:function(t){e.inContainer=!0},mouseleave:function(t){e.inContainer=!1}}},[n("div",{class:["select-region",e.changingSource||e.editModel?"changing-source":""],on:{mouseleave:e.changeSourceBlurHandle}},[e._l(e.searchEngineList,(function(t){return n("div",{key:t.name,class:["item",t.name===e.currentSource?"currentSource":"",e.editModel?"editModel":""],attrs:{title:t.name},on:{click:function(n){return e.changeSource(t)},dblclick:function(n){return e.setDefaultSource(t.name)}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.name===e.currentSource||e.changingSource||e.editModel,expression:"item.name === currentSource || changingSource || editModel"}],staticStyle:{padding:".2rem"}},[n("img",{staticStyle:{height:"2rem"},attrs:{src:t.icon}})])])})),e.editModel?n("div",{key:"add",staticClass:"item",on:{click:function(t){e.addSearchVisible=!0}}},[n("i",{staticClass:"el-icon-plus"})]):e._e()],2),n("transition-group",{staticClass:"searchRegion",attrs:{name:"input"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.keyword,expression:"keyword"}],key:"input",staticClass:"my-input",attrs:{id:"inputRegion",type:"text",placeholder:e.currentSource,autocomplete:"on",disabled:e.editModel},domProps:{value:e.keyword},on:{focus:function(t){return e.setFocused(!0)},blur:function(t){return e.setFocused(!1)},keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:(t.preventDefault(),e.inputEsc.apply(null,arguments))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.query(e.keyword)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.selectNextSug.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:(t.preventDefault(),e.selectPrevSug.apply(null,arguments))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")||t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),e.changeToNextSrc.apply(null,arguments))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:t.shiftKey?(t.preventDefault(),e.changeToPrevSrc.apply(null,arguments)):null}],keyup:e.keywordChangeHandle,input:function(t){t.target.composing||(e.keyword=t.target.value)}}}),e.keyword?n("div",{key:"clear",staticClass:"clear",style:{color:e.focused?"#000000":"#ffffff"},on:{click:e.clear}},[n("i",{staticClass:"el-icon-close"})]):e._e(),e.keyword?n("div",{key:"btn",staticClass:"my-search",on:{click:function(t){return e.query(e.keyword)}}},[n("i",{staticClass:"el-icon-search"})]):e._e(),e.keyword&&e.focused&&e.suggestions.length?n("div",{key:"suggestion",staticClass:"suggestion-box"},e._l(e.suggestions,(function(t,i){return n("div",{key:i,class:["suggestion-item",t.active?"active":""],on:{mouseenter:function(e){t.active=!0},mouseleave:function(e){t.active=!1},click:function(n){return e.query(t.content)}}},[e._v(" "+e._s(t.content)+" ")])})),0):e._e()])],1),n("el-dialog",{attrs:{title:"添加搜索源","append-to-body":"",visible:e.addSearchVisible},on:{"update:visible":function(t){e.addSearchVisible=t}}},[n("el-form",{attrs:{model:e.searchForm}},[n("el-form-item",{attrs:{label:"名称"}},[n("el-input",{model:{value:e.searchForm.name,callback:function(t){e.$set(e.searchForm,"name",t)},expression:"searchForm.name"}})],1),n("el-form-item",{attrs:{label:"链接"}},[n("el-input",{attrs:{placeholder:"例如：https://www.baidu.com/s?wd="},model:{value:e.searchForm.url,callback:function(t){e.$set(e.searchForm,"url",t)},expression:"searchForm.url"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.addSearch}},[e._v("保存")])],1)],1)],1)],1)},a=[],u=(n("d3b7"),n("159b"),n("7db0"),n("b0c0"),n("c740"),n("ac1f"),n("1276"),n("99af"),n("a434"),n("e9c4"),n("caad"),[{icon:"https://www.google.com.hk/favicon.ico",name:"谷歌",url:"https://www.google.com.hk/search?q=",urlFn:function(e){return"https://www.google.com.hk/search?q=".concat(e)}},{icon:"https://www.baidu.com/favicon.ico",name:"百度",url:"https://www.baidu.com/s?wd=",urlFn:function(e){return"https://www.baidu.com/s?wd=".concat(e)}},{icon:"https://cn.bing.com/favicon.ico",name:"必应",url:"https://cn.bing.com/search?q=",urlFn:function(e){return"https://cn.bing.com/search?q=".concat(e)}}]),l=u,d=n("2f62"),f={name:"Search",data:function(){return{keyword:"",keywordCopy:"",searchEngineList:{},currentSource:"百度",addSearchVisible:!1,searchForm:{name:"",url:""},info:null,suggestions:[],inContainer:!1,showSourceByTab:!1,changingSource:!1}},props:["editModel"],computed:Object(r["a"])({},Object(d["c"])(["focused"])),mounted:function(){document.getElementById("inputRegion").focus();var e=window.localStorage.getItem("searchSource");e&&(this.currentSource=e),this.suggestion(),this.unionSearch()},methods:Object(r["a"])(Object(r["a"])({},Object(d["b"])(["setFocused"])),{},{suggestion:function(){var e=this;window.baidu={},window.baidu.sug=function(t){var n=[];t.s.forEach((function(e){n.push({content:e,active:!1})})),e.suggestions=n}},query:function(e){var t=this,n=this.searchEngineList.find((function(e){return e.name===t.currentSource})).urlFn;window.open(n(e),"_blank")},selectNextSug:function(){if(0!==this.suggestions.length){var e=this.suggestions.findIndex((function(e){return e.active}));if(-1===e)return this.keywordCopy=this.keyword,this.keyword=this.suggestions[0].content,void(this.suggestions[0].active=!0);e===this.suggestions.length-1?this.keyword=this.keywordCopy:(this.suggestions[e+1].active=!0,this.keyword=this.suggestions[e+1].content),this.suggestions[e].active=!1}},selectPrevSug:function(){if(0!==this.suggestions.length){var e=this.suggestions.findIndex((function(e){return e.active}));if(-1===e)return this.keywordCopy=this.keyword,this.keyword=this.suggestions[this.suggestions.length-1].content,void(this.suggestions[this.suggestions.length-1].active=!0);0===e?this.keyword=this.keywordCopy:(this.suggestions[e-1].active=!0,this.keyword=this.suggestions[e-1].content),this.suggestions[e].active=!1}},unionSearch:function(){this.searchEngineList=[];var e=JSON.parse(window.localStorage.getItem("searchList"));e||(e=[]),e.forEach((function(e){var t=e.url.split("/");e.icon=t[0]+"//"+t[2]+"/favicon.ico",e.urlFn=function(t){return e.url+t}})),this.searchEngineList=l.concat(e)},changeSource:function(e){var t=this;this.editModel?this.$confirm("是否删除".concat(e.name,"？<br />").concat(e.url),{confirmButtonText:"确定",dangerouslyUseHTMLString:!0}).then((function(){var n=JSON.parse(window.localStorage.searchList),i=n.findIndex((function(t){return t.name===e.name}));-1!==i&&n.splice(i,1),window.localStorage.searchList=JSON.stringify(n),t.unionSearch(),t.currentSource=t.searchEngineList[0].name,t.$message.success("删除".concat(e.name,"成功"))})):(document.getElementById("inputRegion").focus(),this.changingSource=!this.changingSource,this.currentSource=e.name)},setDefaultSource:function(e){window.localStorage.setItem("searchSource",e),this.$message.success("设置默认搜索源为".concat(e))},clear:function(){this.keyword="",document.getElementById("inputRegion").focus()},addSearch:function(){var e=JSON.parse(window.localStorage.getItem("searchList"));e||(e=[]);var t=this.searchForm,n=t.name,i=t.url,o=e.findIndex((function(e){return e.name===n}));-1!==o?e[o].url=i:e.push({name:n,url:i}),window.localStorage.setItem("searchList",JSON.stringify(e)),this.$message.success("添加成功"),this.unionSearch(),this.addSearchVisible=!1},keywordChangeHandle:function(e){var t=["ArrowDown","ArrowUp","ArrowLeft","ArrowRight","Tab","Shift","End","Home","PageUp","PageDown","CapsLock","NumLock","Insert"];if(!t.includes(e.key)){var n=this.keyword,i=document.querySelector("body"),o=document.getElementById("bdSug_script");if(o&&i.removeChild(o),""!==n){var s=document.createElement("script");s.setAttribute("charset","gbk"),s.src="https://suggestion.baidu.com/su?wd="+encodeURIComponent(n),s.id="bdSug_script",document.body.appendChild(s)}else this.suggestions=[]}},changeToNextSrc:function(){var e=this,t=this.searchEngineList.findIndex((function(t){return t.name===e.currentSource})),n=this.searchEngineList.length;t===n-1?t=0:t+=1,this.currentSource=this.searchEngineList[t].name,this.showSourceByTab=!0,setTimeout((function(){e.showSourceByTab=!1}),1e3)},changeToPrevSrc:function(){var e=this,t=this.searchEngineList.findIndex((function(t){return t.name===e.currentSource})),n=this.searchEngineList.length;0===t?t=n-1:t-=1,this.currentSource=this.searchEngineList[t].name,this.showSourceByTab=!0,setTimeout((function(){e.showSourceByTab=!1}),1e3)},inputEsc:function(){this.setFocused(!1),document.getElementById("inputRegion").blur()},changeSourceBlurHandle:function(){this.editModel||(this.changingSource=!1)}}),watch:{}},h=f,g=(n("b898"),n("2877")),m=Object(g["a"])(h,c,a,!1,null,"73093da1",null),p=m.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Background"},[e.imgUrl?n("img",{attrs:{src:e.imgUrl,alt:"背景",id:"background"},on:{error:function(t){e.imgUrl=null}}}):e._e(),e.editModel?n("div",{staticClass:"editBtn",style:{border:e.editModel?".1rem solid #fff":"",background:e.editModel?"#00000088":""},on:{click:function(t){e.editVisible=!0}}},[n("i",{staticClass:"el-icon-edit"})]):e._e(),n("el-dialog",{attrs:{title:"修改图片源","append-to-body":"",visible:e.editVisible},on:{"update:visible":function(t){e.editVisible=t}}},[e._l(e.imgSource,(function(t,i){return n("el-radio",{key:i,attrs:{label:t.url,border:""},model:{value:e.changeUrl,callback:function(t){e.changeUrl=t},expression:"changeUrl"}},[e._v(" "+e._s(t.name)+" ")])})),n("el-input",{staticStyle:{"margin-top":"1rem"},model:{value:e.changeUrl,callback:function(t){e.changeUrl=t},expression:"changeUrl"}}),n("el-button",{staticStyle:{"margin-top":"1rem"},attrs:{type:"primary"},on:{click:function(t){return e.save()}}},[e._v("保存")])],2)],1)},k=[],b=[{name:"东方",url:"https://img.paulzzh.tech/touhou/random"}],v={name:"background",data:function(){return{imgSource:b,imgUrl:"",radio:"",changeUrl:"",editVisible:!1}},props:["editModel"],mounted:function(){var e=window.localStorage.getItem("imageUrl");void 0===e||null===e?(this.setDefaultSource(b[0].url),this.changeBackground(b[0].url)):this.changeBackground(e)},computed:Object(r["a"])({},Object(d["c"])(["focused"])),methods:{changeBackground:function(e){this.imgUrl=e,this.changeUrl=e},setDefaultSource:function(e){window.localStorage.setItem("imageUrl",e)},save:function(){this.setDefaultSource(this.changeUrl),this.changeBackground(this.changeUrl),this.editVisible=!1}}},w=v,S=(n("a8c2"),Object(g["a"])(w,y,k,!1,null,"1550c718",null)),L=S.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Links"},[n("transition-group",{class:["link-region"],style:{border:e.editModel?".1rem solid #fff":"",background:e.editModel?"#00000088":""},attrs:{name:"input"}},[e._l(e.fastLinkList,(function(t){return n("div",{key:t.name,class:["link-item",e.editModel?"editModel":""],attrs:{title:t.url},on:{click:function(n){return e.openLink(t)}}},[n("img",{staticClass:"icon",attrs:{src:t.url+"/favicon.ico",alt:""}}),n("div",{staticClass:"text"},[e._v(" "+e._s(t.name)+" ")])])})),e.editModel?n("div",{key:"add",staticClass:"item",staticStyle:{display:"flex","justify-content":"center","align-items":"center",width:"10rem","font-size":"2rem"},on:{click:function(t){e.addLinkVisible=!0}}},[n("div",[n("i",{staticClass:"el-icon-plus"})])]):e._e()],2),n("el-dialog",{attrs:{title:"添加链接","append-to-body":"",visible:e.addLinkVisible},on:{"update:visible":function(t){e.addLinkVisible=t}}},[n("el-form",{attrs:{model:e.linkForm}},[n("el-form-item",{attrs:{label:"名称"}},[n("el-input",{model:{value:e.linkForm.name,callback:function(t){e.$set(e.linkForm,"name",t)},expression:"linkForm.name"}})],1),n("el-form-item",{attrs:{label:"链接"}},[n("el-input",{model:{value:e.linkForm.url,callback:function(t){e.$set(e.linkForm,"url",t)},expression:"linkForm.url"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.addLink}},[e._v("保存")])],1)],1)],1)],1)},C=[],O=(n("2ca0"),{"哔哩哔哩":{name:"哔哩哔哩",url:"https://www.bilibili.com"}}),x=O,M={name:"Links",data:function(){return{addLinkVisible:!1,fastLinkList:x,linkForm:{name:"",url:""}}},props:["editModel"],mounted:function(){this.unionLinkList()},methods:{unionLinkList:function(){this.fastLinkList={};var e=JSON.parse(window.localStorage.getItem("linkList"));e||(e={}),this.fastLinkList=Object(r["a"])(Object(r["a"])({},x),e)},addLink:function(){var e=JSON.parse(window.localStorage.getItem("linkList"));e||(e={});var t=this.linkForm,n=t.name,i=t.url;i.startsWith("http")||(i="https://"+i),e[n]={name:n,url:i},window.localStorage.setItem("linkList",JSON.stringify(e)),this.$message.success("添加成功"),this.unionLinkList(),this.addLinkVisible=!1},openLink:function(e){var t=this;this.editModel?this.$confirm("是否删除".concat(e.name,"？<br />").concat(e.url),{confirmButtonText:"确定",dangerouslyUseHTMLString:!0}).then((function(){var n=JSON.parse(window.localStorage.linkList);delete n[e.name],window.localStorage.linkList=JSON.stringify(n),t.unionLinkList(),t.$message.success("删除".concat(e.name,"成功"))})):window.open(e.url,"_blank")}}},E=M,F=(n("a35c"),Object(g["a"])(E,_,C,!1,null,"2c17e771",null)),j=F.exports,U={name:"app",data:function(){return{editModel:!1,icon:""}},computed:Object(r["a"])({},Object(d["c"])(["focused"])),components:{Search:p,Background:L,Links:j},mounted:function(){var e=this;this.icon=document.querySelector('[rel="icon"]'),document.addEventListener("visibilitychange",(function(){"visible"!==document.visibilityState?e.icon.href="./favicon_newtabpage_white.png":e.icon.href="./favicon_newtabpage.png"}))}},I=U,B=(n("034f"),n("715b"),Object(g["a"])(I,o,s,!1,null,"01825942",null)),T=B.exports,$=n("8c4f");i["default"].use($["a"]);var N=[{path:"/",name:"Home"}],V=new $["a"]({routes:N}),P=V;i["default"].use(d["a"]);var D=new d["a"].Store({state:{focused:!0},mutations:{setFocused:function(e,t){e.focused=t}},actions:{},modules:{}}),J=(n("9e1f"),n("450d"),n("6ed5")),q=n.n(J),H=(n("0fb7"),n("f529")),R=n.n(H),A=(n("b5d8"),n("f494")),K=n.n(A),z=(n("1951"),n("eedf")),W=n.n(z),G=(n("10cb"),n("f3ad")),Q=n.n(G),X=(n("eca7"),n("3787")),Y=n.n(X),Z=(n("425f"),n("4105")),ee=n.n(Z),te=(n("a7cc"),n("df33")),ne=n.n(te);n("c69f");i["default"].use(ne.a),i["default"].use(ee.a),i["default"].use(Y.a),i["default"].use(Q.a),i["default"].use(W.a),i["default"].use(K.a),i["default"].prototype.$message=R.a,i["default"].prototype.$confirm=q.a.confirm;n("f5df1");var ie=n("130e"),oe=n("bc3a"),se=n.n(oe);i["default"].use(ie["a"],se.a),i["default"].config.productionTip=!1,new i["default"]({router:P,store:D,render:function(e){return e(T)}}).$mount("#app")},"715b":function(e,t,n){"use strict";n("ca65")},"85ec":function(e,t,n){},a35c:function(e,t,n){"use strict";n("ed0f")},a8c2:function(e,t,n){"use strict";n("197f")},b898:function(e,t,n){"use strict";n("0c9c")},c69f:function(e,t,n){},ca65:function(e,t,n){},ed0f:function(e,t,n){}});