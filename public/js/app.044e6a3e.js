(function(e){function t(t){for(var s,n,i=t[0],c=t[1],l=t[2],u=0,f=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&f.push(r[n][0]),r[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],s=!0,n=1;n<a.length;n++){var c=a[n];0!==r[c]&&(s=!1)}s&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var s={},r={app:0},o=[];function n(e){return i.p+"js/"+({egresos:"egresos",ingresos:"ingresos",usuarios:"usuarios"}[e]||e)+"."+{egresos:"d8532691",ingresos:"8134dc96",usuarios:"8d6f20e3"}[e]+".js"}function i(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,s){a=r[e]=[t,s]}));t.push(a[2]=s);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=n(e);var l=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(u);var a=r[e];if(0!==a){if(a){var s=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+s+": "+o+")",l.name="ChunkLoadError",l.type=s,l.request=o,a[1](l)}r[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=s,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var s=a("85ec"),r=a.n(s);r.a},4360:function(e,t,a){"use strict";a("99af");var s=a("2b0e"),r=a("2f62"),o=a("bc3a"),n=a.n(o);s["a"].use(r["a"]),t["a"]=new r["a"].Store({state:{DataBase:[],DataBaseUser:[],DataBaseUserSelect:[],querry:[],Fecha:[(new Date).getMonth()+1,(new Date).getFullYear()]},actions:{},mutations:{SET_POST:function(e,t){e.DataBase=t},changeFecha:function(e,t){e.Fecha=t;var a='{"Fecha":{"$gte":"'.concat(e.Fecha[1],"-").concat(e.Fecha[0],'","$lte":"').concat(e.Fecha[1],"-").concat(e.Fecha[0],'-31"}}');n.a.post("getDate",{data:a}).then((function(t){e.DataBase=t})).catch((function(e){}))},loadDataBaseUser:function(e){n.a.get("user").then((function(t){e.DataBaseUser=t.data}))},loadDataBase:function(e){if(0==e.Fecha[0])n.a.get("/").then((function(t){e.DataBase=t.data}));else{var t='{"Fecha":{"$gte":"'.concat(e.Fecha[1],"-").concat(e.Fecha[0],'","$lte":"').concat(e.Fecha[1],"-").concat(e.Fecha[0],'-31"}}');n.a.post("/getDate",{data:t}).then((function(t){e.DataBase=t.data})).catch((function(e){}))}}}})},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=o,e.exports=r,r.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"breadcrumb is-centered balance",attrs:{"aria-label":"breadcrumb"}},[a("ul",[a("li",[a("router-link",{attrs:{to:"/"}},[a("span",{staticClass:"icon is-small"},[a("i",{staticClass:"fas fa-clipboard-list"})]),e._v(" Resumen ")]),a("router-link",{attrs:{to:"/Tablas"}},[a("span",{staticClass:"icon is-small"},[a("i",{staticClass:"fas fa-table"})]),e._v(" Tablas ")]),a("router-link",{attrs:{to:"/usuarios"}},[a("span",{staticClass:"icon is-small"},[a("i",{staticClass:"fas fa-users"})]),e._v(" Usuarios ")])],1)])]),a("router-view")],1)},o=[],n={data:function(){return{}}},i=n,c=(a("034f"),a("2877")),l=Object(c["a"])(i,r,o,!1,null,null,null),u=l.exports,d=(a("d3b7"),a("8c4f"));a("bb51");s["a"].use(d["a"]);var f=[{path:"/",name:"Home",component:function(){return Promise.resolve().then(a.bind(null,"bb51"))}},{path:"/Tablas",name:"Tablas",component:function(){return a.e("egresos").then(a.bind(null,"5b6a"))}},{path:"/Mapa",name:"Mapa",component:function(){return a.e("ingresos").then(a.bind(null,"3f69"))}},{path:"/usuarios",name:"usurios",component:function(){return a.e("usuarios").then(a.bind(null,"00f9"))}}],b=new d["a"]({mode:"history",base:"/",routes:f}),v=b,m=a("bc3a"),h=a.n(m),g=a("a7fe"),j=a.n(g),p=a("4360"),C=(a("15f5"),a("7051"),a("1881")),_=a.n(C),P=a("d842"),D=a("30ef"),y=a.n(D),w=a("2347"),F=a.n(w),E=a("bf15"),k=a("cb43");s["a"].use(E["a"]),s["a"].use(k["default"]),s["a"].use(P["a"]),s["a"].use(P["a"].use(y.a)),s["a"].use(j.a,h.a),s["a"].use(_.a),s["a"].component("downloadCsv",F.a),h.a.defaults.baseURL="http://ec2-3-128-34-113.us-east-2.compute.amazonaws.com/api",s["a"].config.productionTip=!1,new s["a"]({router:v,store:p["a"],render:function(e){return e(u)}}).$mount("#app")},"85ec":function(e,t,a){},bb51:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("div",{staticClass:"columns is-mobile"},[a("div",{staticClass:"column is-three-fifths is-offset-one-fifth"},[a("Resumen",{attrs:{balance:e.DataBase}})],1)])])},r=[],o=a("5530"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("download-csv",{staticClass:"button",attrs:{data:e.user()}},[e._v(" Download Data > ")]),a("div",{staticClass:"columns is-mobile"},[e._m(0),a("div",{staticClass:"column"},[a("p",{staticClass:"subtitle"},[e._v("Fecha")]),a("div",{staticClass:"select is-dark"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.Fecha[0],expression:"Fecha[0]"}],staticClass:"input",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.Fecha,0,t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"0"}},[e._v("Total")]),a("option",{attrs:{value:"1"}},[e._v("Enero")]),a("option",{attrs:{value:"2"}},[e._v("Febrero")]),a("option",{attrs:{value:"3"}},[e._v("Marzo")]),a("option",{attrs:{value:"4"}},[e._v("Abril")]),a("option",{attrs:{value:"5"}},[e._v("Mayo")]),a("option",{attrs:{value:"6"}},[e._v("Junio")]),a("option",{attrs:{value:"7"}},[e._v("Julio")]),a("option",{attrs:{value:"8"}},[e._v("Agosto")]),a("option",{attrs:{value:"9"}},[e._v("Septiembre")]),a("option",{attrs:{value:"10"}},[e._v("Octubre")]),a("option",{attrs:{value:"11"}},[e._v("Noviembre")]),a("option",{attrs:{value:"12"}},[e._v("Diciembre")])])]),a("div",{staticClass:"select is-dark",staticStyle:{"padding-left":"5px"}},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.Fecha[1],expression:"Fecha[1]"}],staticClass:"input",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.Fecha,1,t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"2020"}},[e._v("2020")]),a("option",{attrs:{value:"2021"}},[e._v("2021")]),a("option",{attrs:{value:"2022"}},[e._v("2022")]),a("option",{attrs:{value:"2023"}},[e._v("2023")])])])])]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("div",{staticClass:"box"},[a("p",{staticClass:"heading"},[e._v("Ingresos")]),a("p",{staticClass:"title ingresos"},[e._v(e._s(e.formatNumber(e.resumen(this.balance,"Ingresos"))))])]),a("div",{staticClass:"box"},[a("p",{staticClass:"heading"},[e._v("Egresos")]),a("p",{staticClass:"title egresos"},[e._v(e._s(e.formatNumber(e.resumen(this.balance,"Egresos"))))])])]),a("div",{staticClass:"column"},[a("div",{staticClass:"box"},[a("p",{staticClass:"heading"},[e._v("Balance")]),a("p",{staticClass:"title balance"},[e._v(e._s(e.formatNumber(e.resumen(this.balance,"Ingresos")-e.resumen(this.balance,"Egresos"))))])]),a("div",{staticClass:"box"},[a("p",{staticClass:"heading"},[e._v("Deuda")]),a("p",{staticClass:"title",staticStyle:{color:"slategray"}},[e._v(e._s(e.formatNumber(e.resumen(this.balance,"Deuda"))))])])])]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("h1",{staticClass:"title"},[e._v("Cantidad")]),a("pie-chart",{attrs:{data:[[e.filtro_universal(0,"Cantidad","Productos","Ingresos")[0],e.filtro_universal(0,"Cantidad","Productos","Ingresos")[1]],[e.filtro_universal(1,"Cantidad","Productos","Ingresos")[0],e.filtro_universal(1,"Cantidad","Productos","Ingresos")[1]],[e.filtro_universal(2,"Cantidad","Productos","Ingresos")[0],e.filtro_universal(2,"Cantidad","Productos","Ingresos")[1]],[e.filtro_universal(3,"Cantidad","Productos","Ingresos")[0],e.filtro_universal(3,"Cantidad","Productos","Ingresos")[1]],[e.filtro_universal(4,"Cantidad","Productos","Ingresos")[0],e.filtro_universal(4,"Cantidad","Productos","Ingresos")[1]]]}})],1)]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column box"},[a("h1",{staticClass:"title"},[e._v("Ingresos")]),a("div",{staticClass:"has-text-right"},[a("export-excel",{staticClass:"button",attrs:{data:e.descargas("","","Ingresos")[0],worksheet:"Datos",name:e.descargas("","","Ingresos")[1]}},[a("i",{staticClass:"fas fa-file-download"})])],1),a("br"),a("column-chart",{attrs:{colors:["#02AC1E"],data:[[e.filtro_universal(0,"Precio","Productos","Ingresos")[0],e.filtro_universal(0,"Precio","Productos","Ingresos")[1]],[e.filtro_universal(1,"Precio","Productos","Ingresos")[0],e.filtro_universal(1,"Precio","Productos","Ingresos")[1]],[e.filtro_universal(2,"Precio","Productos","Ingresos")[0],e.filtro_universal(2,"Precio","Productos","Ingresos")[1]],[e.filtro_universal(3,"Precio","Productos","Ingresos")[0],e.filtro_universal(3,"Precio","Productos","Ingresos")[1]],[e.filtro_universal(4,"Precio","Productos","Ingresos")[0],e.filtro_universal(4,"Precio","Productos","Ingresos")[1]]],thousands:","}})],1)]),a("br"),a("div",{staticClass:"columns"},[a("div",{staticClass:"column box"},[a("h1",{staticClass:"title"},[e._v("Egresos")]),a("div",{staticClass:"has-text-right"},[a("export-excel",{staticClass:"button",attrs:{data:e.descargas("","","Egresos")[0],worksheet:"Datos",name:e.descargas("","","Egresos")[1]}},[a("i",{staticClass:"fas fa-file-download"})])],1),a("column-chart",{attrs:{colors:["#B00B1E"],data:[[e.filtro_universal(0,"Precio","Nombre","Egresos")[0],e.filtro_universal(0,"Precio","Nombre","Egresos")[1]],[e.filtro_universal(1,"Precio","Nombre","Egresos")[0],e.filtro_universal(1,"Precio","Nombre","Egresos")[1]],[e.filtro_universal(2,"Precio","Nombre","Egresos")[0],e.filtro_universal(2,"Precio","Nombre","Egresos")[1]],[e.filtro_universal(3,"Precio","Nombre","Egresos")[0],e.filtro_universal(3,"Precio","Nombre","Egresos")[1]],[e.filtro_universal(4,"Precio","Nombre","Egresos")[0],e.filtro_universal(4,"Precio","Nombre","Egresos")[1]]],thousands:","}})],1)]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column box"},[a("h1",{staticClass:"title"},[e._v("Lo que mas Deben")]),a("div",{staticClass:"has-text-right"}),a("column-chart",{attrs:{colors:["#AB5"],data:[[e.filtro_universal(0,"Precio","Productos","Deuda")[0],e.filtro_universal(0,"Precio","Productos","Deuda")[1]],[e.filtro_universal(1,"Precio","Productos","Deuda")[0],e.filtro_universal(1,"Precio","Productos","Deuda")[1]],[e.filtro_universal(2,"Precio","Productos","Deuda")[0],e.filtro_universal(2,"Precio","Productos","Deuda")[1]],[e.filtro_universal(3,"Precio","Productos","Deuda")[0],e.filtro_universal(3,"Precio","Productos","Deuda")[1]],[e.filtro_universal(4,"Precio","Productos","Deuda")[0],e.filtro_universal(4,"Precio","Productos","Deuda")[1]]],thousands:","}})],1),a("div",{staticClass:"column"},[a("h1",{staticClass:"title"},[e._v("Deudores")]),a("div",{staticClass:"has-text-right"},[a("export-excel",{staticClass:"button",attrs:{data:e.descargas("","","Deuda")[0],worksheet:"Datos",name:e.descargas("","","Deuda")[1]}},[a("i",{staticClass:"fas fa-file-download"})])],1),a("column-chart",{attrs:{colors:["#C0D1CE"],data:[[e.filtro_universal(0,"Precio","Nombre","Deuda")[0],e.filtro_universal(0,"Precio","Nombre","Deuda")[1]],[e.filtro_universal(1,"Precio","Nombre","Deuda")[0],e.filtro_universal(1,"Precio","Nombre","Deuda")[1]],[e.filtro_universal(2,"Precio","Nombre","Deuda")[0],e.filtro_universal(2,"Precio","Nombre","Deuda")[1]],[e.filtro_universal(3,"Precio","Nombre","Deuda")[0],e.filtro_universal(3,"Precio","Nombre","Deuda")[1]],[e.filtro_universal(4,"Precio","Nombre","Deuda")[0],e.filtro_universal(4,"Precio","Nombre","Deuda")[1]]],thousands:","}})],1)]),e.chartTotal?a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[e._m(1),a("div",[a("p",{staticClass:"subtitle"},[e._v("Ingresos")]),a("column-chart",{attrs:{data:e.TotalIngresos,colors:[["#4CC355"],["#4CC355"],["#4CC355"],["#4CC355"],["#4CC355"],["#4CC355"]["#4CC355"],["#4CC355"],["#4CC355"],["#4CC355"],["#4CC355"],["#4CC355"]],thousands:","}})],1),a("div",[a("p",{staticClass:"subtitle"},[e._v("Egresos")]),a("column-chart",{attrs:{data:e.TotalEgresos,colors:[["#F24153"],["#F24153"],["#F24153"],["#F24153"],["#F24153"],["#F24153"],["#F24153"]["#F24153"],["#F24153"],["#F24153"],["#F24153"]],thousands:","}})],1),a("div",[a("p",{staticClass:"subtitle"},[e._v("Deudas")]),a("column-chart",{attrs:{data:e.TotalDeudas,colors:[["#C0D1CE"],["#C0D1CE"],["#C0D1CE"],["#C0D1CE"],["#C0D1CE"],["#C0D1CE"],["#C0D1CE"],["#C0D1CE"],["#C0D1CE"],["#C0D1CE"],["#C0D1CE"],["#C0D1CE"]],thousands:","}})],1)])]):e._e()],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"column"},[a("h1",{staticClass:"title"},[e._v("Resumen")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"has-text-centered"},[a("h1",{staticClass:"title"},[e._v("Meses")])])}],c=(a("4de4"),a("d81d"),a("d3b7"),a("6062"),a("3ca3"),a("ddb0"),a("ade3")),l=a("2909"),u=a("4360"),d={name:"Resumen",store:u["a"],components:{},props:{balance:Array},data:function(){return{Fecha:u["a"].state.Fecha,chartTotal:!1,TotalIngresos:[],TotalEgresos:[],TotalDeudas:[],TotalUltimate:[]}},watch:{Fecha:function(e){this.changeFecha(e)}},created:function(){},methods:{descargas:function(e,t,a){if(this.balance.length>0){var s=this.balance.filter((function(e){return e.Categoria==a})),r=new Date;return[s,a+" "+(new Intl.DateTimeFormat).format(r)]}},formatDate:function(e){var t={weekday:"long",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1,timeZone:"America/Bogota"};return new Intl.DateTimeFormat("es-Co",t).format(new Date(e))},resumen:function(e,t){var a="No Data";if(e.length>0){for(var s=0,r=e.filter((function(e){return e.Categoria==t})),o=0;o<r.length;o++)s+=r[o].Precio;return s}return a},formatNumber:function(e){var t=0;if("number"==typeof e)return t=Intl.NumberFormat("es-CO",{style:"currency",currency:"COP"}).format(e),t},filtro_universal:function(e,t,a,s){var r=[],o=[];if(o=this.balance.filter((function(e){return e.Categoria==s})),!(o.length>0))return["0",0];for(var n=Object(l["a"])(new Set(o.map((function(e){return e[a]})))),i=0;i<n.length;i++)if(""!=n[i])for(var u=0;u<o.length;u++)if(n[i]==o[u][a]){var d=this.unique(o,t,n[i],a);r[i]=Object(c["a"])({Nombre:d[0]},t,d[1])}if(r=r.sort((function(e,a){return a[t]-e[t]})),r.length>0)return void 0==r[e]?["Espera",0]:[r[e].Nombre,r[e][t]];console.log(r)},unique:function(e,t,a,s){for(var r=[],o=0,n=0;n<e.length;n++)e[n][s]==a&&(o+=e[n][t],r[0]=Object(c["a"])({Nombre:a},t,o));return[r[0].Nombre,r[0][t]]},uniqueFecha:function(e,t){for(var a=[],s=0,r=0;r<e.length;r++)new Date(e[r].Fecha).getMonth()==t&&(s+=e[r].Precio,a[0]={Nombre:t,Precio:s});return[this.getMes(t),s]},getMes:function(e){switch(e){case 0:return"Enero";case 1:return"Febrero";case 2:return"Marzo";case 3:return"Abril";case 4:return"Mayo";case 5:return"Junio";case 6:return"Julio";case 7:return"Agosto";case 8:return"Septiembre";case 9:return"Octubre";case 10:return"Noviembre";case 11:return"Diciembre"}},changeFecha:function(e){if(this.$store.commit("changeFecha",e),u["a"].commit("loadDataBase"),0==this.Fecha[0]){var t=["Ingresos","Egresos","Deuda"];this.chartTotal=!0,this.totalChart(this.Fecha[1],t)}else this.chartTotal=!1},user:function(){for(var e=[],t=Object(l["a"])(new Set(this.balance.map((function(e){return e.Nombre})))),a=0;a<t.length;a++)e[a]={Nombre:t[a],Telefono:0,Direccion:"",Actividad:"",Oficio:"",Cordenada:""};return e},totalChart:function(e,t){var a=this,s=[],r=[],o=[];this.axios.get("/").then((function(e){s=e.data;for(var n=function(e){l=s.filter((function(a){return a.Categoria==t[e]}));for(var n=0;n<l.length;n++)for(var i=0;i<12;i++)i==new Date(l[n].Fecha).getMonth()&&(u=a.uniqueFecha(l,i),r[i]={name:[u[0]],data:Object(c["a"])({},t[e],u[1])}),o=r.filter((function(e){return null!=e}));switch(e){case 0:a.TotalIngresos=o;break;case 1:a.TotalEgresos=o;break;case 2:a.TotalDeudas=o;break}},i=0;i<=2;i++){var l,u;n(i)}}))}}},f=d,b=a("2877"),v=Object(b["a"])(f,n,i,!1,null,null,null),m=v.exports,h=a("2f62"),g={name:"Home",store:u["a"],components:{Resumen:m},data:function(){return{}},created:function(){u["a"].commit("loadDataBase")},computed:Object(o["a"])({},Object(h["b"])(["DataBase"])),methods:{}},j=g,p=Object(b["a"])(j,s,r,!1,null,null,null);t["default"]=p.exports}});
//# sourceMappingURL=app.044e6a3e.js.map