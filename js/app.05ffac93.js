(function(e){function t(t){for(var a,i,s=t[0],o=t[1],u=t[2],l=0,p=[];l<s.length;l++)i=s[l],n[i]&&p.push(n[i][0]),n[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);d&&d(t);while(p.length)p.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],a=!0,s=1;s<r.length;s++){var o=r[s];0!==n[o]&&(a=!1)}a&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},n={app:0},c=[];function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/travtrips/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=o;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var a=r("64a9"),n=r.n(a);n.a},"47e1":function(e,t,r){},5455:function(e,t,r){"use strict";var a=r("a5db"),n=r.n(a);n.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view",{attrs:{experiences:e.experiences}}),r("basket")],1)},c=[],i=r("f499"),s=r.n(i),o={getExperiences:function(){return fetch("https://travtrips-api.herokuapp.com/api/experiences").then(function(e){return e.json()})},getExperience:function(e){return fetch("https://travtrips-api.herokuapp.com/api/experiences/"+e).then(function(e){return e.json()})},getBasket:function(){return fetch("https://travtrips-api.herokuapp.com/api/basket").then(function(e){return e.json()})},addToBasket:function(e){return fetch("https://travtrips-api.herokuapp.com/api/basket",{method:"POST",body:s()(e),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()})},removeFromBasket:function(e){return fetch("https://travtrips-api.herokuapp.com/api/basket/"+e,{method:"DELETE"})}},u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container__outter"},[r("h3",[e._v("Basket")]),r("div",{staticClass:"container__inner"},e._l(e.basket,function(e){return r("basket-item",{key:e._id,attrs:{item:e}})}),1),e.basket.length>0?r("p",[e._v("Total: £"+e._s(e.total))]):r("p",{staticClass:"basket-empty"},[e._v("Your basket is empty")])])},d=[],l=(r("ac6a"),r("cebc")),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"basket-item"},[r("h4",[e._v(e._s(e.item.location))]),r("p",[e._v(e._s(e.item.name))]),r("p",[e._v(e._s(e._f("moment")(e.item.date,"dddd, MMMM Do YYYY")))]),r("p",[e._v("£"+e._s(e.item.cost))]),r("form",{attrs:{method:"post"},on:{submit:e.submit}},[r("button",{attrs:{type:"submit"}},[e._v("X")])]),r("hr")])},h=[],f=r("2f62"),v={name:"basket-item",props:["item"],methods:Object(l["a"])({},Object(f["b"])(["deleteData"]),{submit:function(e){e.preventDefault(),this.deleteData(this.item._id)}})},m=v,k=(r("c7a5"),r("2877")),g=Object(k["a"])(m,p,h,!1,null,"3e4852c2",null),_=g.exports,b={name:"basket",components:{"basket-item":_},computed:Object(l["a"])({},Object(f["c"])(["basket"]),{total:function(){var e=0;return this.basket.forEach(function(t){return e+=t.cost}),e}}),methods:Object(l["a"])({},Object(f["b"])(["getData"])),mounted:function(){this.getData()}},x=b,C=(r("7089"),Object(k["a"])(x,u,d,!1,null,"4b5fba9c",null)),y=C.exports,E={name:"app",data:function(){return{experiences:[]}},mounted:function(){var e=this;o.getExperiences().then(function(t){return e.experiences=t})},components:{basket:y}},j=E,O=(r("034f"),Object(k["a"])(j,n,c,!1,null,null,null)),A=O.exports,w=r("8c4f"),D=r("ce5b"),T=r.n(D),L=(r("bf40"),r("2ead")),P=r.n(L),M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("div",{staticClass:"search_wrapper"},[a("img",{attrs:{src:r("cf05"),alt:"TravTrips logo"}}),a("div",{staticClass:"search_container__outer"},[a("div",{staticClass:"search_container__inner"},[a("label",{attrs:{id:"location-label",for:"location-search"}},[e._v("Where are you going?")]),a("div",{staticClass:"search_container__inner-location-search",attrs:{tabindex:"0"}},[a("span",[a("font-awesome-icon",{attrs:{icon:"search"}})],1),a("input",{directives:[{name:"model",rawName:"v-model",value:e.searchLocation,expression:"searchLocation"}],attrs:{type:"text",placeholder:"search for city...",id:"location-search"},domProps:{value:e.searchLocation},on:{input:function(t){t.target.composing||(e.searchLocation=t.target.value)}}})])]),a("div",{staticClass:"search_container__inner"},[a("p",{attrs:{id:"categories-label"}},[e._v("What do you want to do?")]),a("div",{attrs:{id:"checkbox_container"}},[a("div",{staticClass:"grid-item"},[a("label",{attrs:{for:"tour"}},[e._v("Tour")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedCategories,expression:"checkedCategories"}],attrs:{type:"checkbox",id:"tour",value:"tour"},domProps:{checked:Array.isArray(e.checkedCategories)?e._i(e.checkedCategories,"tour")>-1:e.checkedCategories},on:{change:function(t){var r=e.checkedCategories,a=t.target,n=!!a.checked;if(Array.isArray(r)){var c="tour",i=e._i(r,c);a.checked?i<0&&(e.checkedCategories=r.concat([c])):i>-1&&(e.checkedCategories=r.slice(0,i).concat(r.slice(i+1)))}else e.checkedCategories=n}}})]),a("div",{staticClass:"grid-item"},[a("label",{attrs:{for:"adventure"}},[e._v("Adventure")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedCategories,expression:"checkedCategories"}],attrs:{type:"checkbox",id:"tour",value:"adventure"},domProps:{checked:Array.isArray(e.checkedCategories)?e._i(e.checkedCategories,"adventure")>-1:e.checkedCategories},on:{change:function(t){var r=e.checkedCategories,a=t.target,n=!!a.checked;if(Array.isArray(r)){var c="adventure",i=e._i(r,c);a.checked?i<0&&(e.checkedCategories=r.concat([c])):i>-1&&(e.checkedCategories=r.slice(0,i).concat(r.slice(i+1)))}else e.checkedCategories=n}}})]),a("div",{staticClass:"grid-item"},[a("label",{attrs:{for:"art"}},[e._v("Art")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedCategories,expression:"checkedCategories"}],attrs:{type:"checkbox",id:"art",value:"art"},domProps:{checked:Array.isArray(e.checkedCategories)?e._i(e.checkedCategories,"art")>-1:e.checkedCategories},on:{change:function(t){var r=e.checkedCategories,a=t.target,n=!!a.checked;if(Array.isArray(r)){var c="art",i=e._i(r,c);a.checked?i<0&&(e.checkedCategories=r.concat([c])):i>-1&&(e.checkedCategories=r.slice(0,i).concat(r.slice(i+1)))}else e.checkedCategories=n}}})]),a("div",{staticClass:"grid-item"},[a("label",{attrs:{for:"history"}},[e._v("History")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedCategories,expression:"checkedCategories"}],attrs:{type:"checkbox",id:"history",value:"history"},domProps:{checked:Array.isArray(e.checkedCategories)?e._i(e.checkedCategories,"history")>-1:e.checkedCategories},on:{change:function(t){var r=e.checkedCategories,a=t.target,n=!!a.checked;if(Array.isArray(r)){var c="history",i=e._i(r,c);a.checked?i<0&&(e.checkedCategories=r.concat([c])):i>-1&&(e.checkedCategories=r.slice(0,i).concat(r.slice(i+1)))}else e.checkedCategories=n}}})]),a("div",{staticClass:"grid-item"},[a("label",{attrs:{for:"sport"}},[e._v("Sport")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedCategories,expression:"checkedCategories"}],attrs:{type:"checkbox",id:"sport",value:"sport"},domProps:{checked:Array.isArray(e.checkedCategories)?e._i(e.checkedCategories,"sport")>-1:e.checkedCategories},on:{change:function(t){var r=e.checkedCategories,a=t.target,n=!!a.checked;if(Array.isArray(r)){var c="sport",i=e._i(r,c);a.checked?i<0&&(e.checkedCategories=r.concat([c])):i>-1&&(e.checkedCategories=r.slice(0,i).concat(r.slice(i+1)))}else e.checkedCategories=n}}})])])])])]),""===e.searchLocation&&0===e.checkedCategories.length?a("p",[e._v("All Experiences")]):a("p",[e._v("Search Results")]),0===e.experiences.length?a("div",{attrs:{id:"loading"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"#88cf98"}})],1):e._e(),a("div",{attrs:{id:"experience_container"}},e._l(e.searchedExperiences,function(e){return a("experience-card",{key:e._id,attrs:{experience:e}})}),1)])},S=[],B=r("b6d0"),I=r.n(B),N=r("75fc"),$=(r("6762"),r("2fdb"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"experience-card"},[r("h3",[e._v(e._s(e.experience.name)+" - "+e._s(e.experience.location))]),r("p",[e._v(e._s(e._f("briefDesc")(e.experience.description)))]),r("router-link",{attrs:{to:{name:"experience",params:{id:e.experience._id}}}},[e._v("More Info →")])],1)}),Y=[],F=r("2ef0"),J=r.n(F),K={name:"experience",props:["experience"],filters:{briefDesc:function(e){return J.a.truncate(e,{length:200,separator:/,?\.* +/})}}},R=K,W=(r("d05a"),Object(k["a"])(R,$,Y,!1,null,"b51ead7e",null)),H=W.exports,U={name:"experience-grid",data:function(){return{searchLocation:"",checkedCategories:[]}},props:["experiences"],components:{"experience-card":H},computed:{searchedExperiences:function(){var e=this,t=this.searchLocation.charAt(0).toUpperCase()+this.searchLocation.slice(1),r=[];return""===this.searchLocation&&0===this.checkedCategories.length?this.experiences:""===this.searchLocation&&this.checkedCategories.length>0?(this.experiences.forEach(function(t){e.checkedCategories.every(function(e){return t.categories.includes(e)})&&r.push(t)}),Object(N["a"])(new I.a(r))):""!==this.searchLocation&&this.checkedCategories.length>0?(this.experiences.forEach(function(a){a.location.indexOf(t)>-1&&a.categories.forEach(function(t){e.checkedCategories.every(function(e){return a.categories.includes(e)})&&r.push(a)})}),Object(N["a"])(new I.a(r))):this.experiences.filter(function(e){return e.location.indexOf(t)>-1})}}},X=U,q=(r("5455"),Object(k["a"])(X,M,S,!1,null,"57990895",null)),z=q.exports,G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.experience?r("div",{staticClass:"container__outter"},[r("h3",[e._v(e._s(e.experience.name))]),e._v("\n  Categories:"),r("ul",e._l(e.experience.categories,function(t){return r("li",[e._v(" "+e._s(t))])}),0),r("div",{staticClass:"container__inner"},[r("p",[e._v(e._s(e.experience.description))]),r("date-picker",{attrs:{inline:!0,disabledDates:e.disabledDates},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),e._v("\n  Includes: "),r("ul",{staticClass:"includes"},e._l(e.experience.includes,function(t){return r("li",[r("span",[e._v("✓")]),e._v(" "+e._s(t))])}),0),r("p",[e._v("Cost: £"+e._s(e.experience.cost))]),r("div",{staticClass:"btn-container"},[r("form",{attrs:{method:"post"},on:{submit:e.submit}},[r("button",{attrs:{type:"submit"}},[e._v("Add to Basket")])]),r("router-link",{attrs:{to:{name:"experience-grid"}}},[e._v("← Return to results")])],1)]):e._e()},Q=[],V=(r("7f7f"),r("fa33")),Z={props:["id"],data:function(){return{experience:null,disabledDates:{days:[]},date:null}},components:{"date-picker":V["a"]},mounted:function(){var e=this;o.getExperience(this.id).then(function(t){return e.experience=t}).then(function(t){return e.disabledDates.days=t["disable-days"]})},methods:Object(l["a"])({},Object(f["b"])(["postData"]),{submit:function(e){e.preventDefault();var t=this.createBasketObject(this.experience);this.date&&this.postData(t)},createBasketObject:function(e){return null===this.date&&confirm("Please select a data"),{location:e.location,name:e.name,cost:e.cost,date:this.date}}})},ee=Z,te=(r("7d42"),Object(k["a"])(ee,G,Q,!1,null,"4d5b04aa",null)),re=te.exports,ae=[{path:"",name:"experience-grid",component:z},{path:"/experience/:id",name:"experience",component:re,props:!0}];r("20d6");a["default"].use(f["a"]);var ne=new f["a"].Store({state:{basket:[]},getters:{basket:function(e){return e.basket}},mutations:{SET_BASKET:function(e,t){e.basket=t},ADD_ITEM:function(e,t){e.basket.push(t)},DELETE_ITEM:function(e,t){var r=e.basket.findIndex(function(e){return e._id==t});e.basket.splice(r,1)}},actions:{getData:function(e){var t=e.commit;o.getBasket().then(function(e){return t("SET_BASKET",e)})},postData:function(e,t){var r=e.commit;o.addToBasket(t).then(function(e){return r("ADD_ITEM",e)})},deleteData:function(e,t){var r=e.commit;o.removeFromBasket(t).then(function(e){return r("DELETE_ITEM",t)})}}}),ce=r("ecee"),ie=r("c074"),se=r("ad3d");ce["c"].add(ie["a"]),a["default"].component("font-awesome-icon",se["a"]),a["default"].use(T.a),a["default"].use(w["a"]),a["default"].use(P.a);var oe=new w["a"]({routes:ae});new a["default"]({el:"#app",router:oe,store:ne,render:function(e){return e(A)}})},"64a9":function(e,t,r){},"6a51":function(e,t,r){},7089:function(e,t,r){"use strict";var a=r("f4f4"),n=r.n(a);n.a},"7d42":function(e,t,r){"use strict";var a=r("47e1"),n=r.n(a);n.a},a5db:function(e,t,r){},c7a5:function(e,t,r){"use strict";var a=r("6a51"),n=r.n(a);n.a},cf05:function(e,t,r){e.exports=r.p+"img/logo.55b86358.png"},d05a:function(e,t,r){"use strict";var a=r("f457"),n=r.n(a);n.a},f457:function(e,t,r){},f4f4:function(e,t,r){}});
//# sourceMappingURL=app.05ffac93.js.map