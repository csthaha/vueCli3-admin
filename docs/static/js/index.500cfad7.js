(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["index"],{"0553":function(t,e,n){"use strict";n("f274")},"129d":function(t,e,n){},"14c3":function(t,e,n){var s=n("c6b6"),a=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==s(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"1ab1":function(t,e,n){},"1caf":function(t,e,n){},2363:function(t,e,n){},5319:function(t,e,n){"use strict";var s=n("d784"),a=n("825a"),i=n("7b0b"),r=n("50c4"),l=n("a691"),o=n("1d80"),c=n("8aa5"),u=n("14c3"),d=Math.max,f=Math.min,p=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,m=function(t){return void 0===t?t:String(t)};s("replace",2,(function(t,e,n,s){var g=s.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=s.REPLACE_KEEPS_$0,x=g?"$":"$0";return[function(n,s){var a=o(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,a,s):e.call(String(a),n,s)},function(t,s){if(!g&&b||"string"===typeof s&&-1===s.indexOf(x)){var i=n(e,t,this,s);if(i.done)return i.value}var o=a(t),p=String(this),h="function"===typeof s;h||(s=String(s));var v=o.global;if(v){var E=o.unicode;o.lastIndex=0}var C=[];while(1){var $=u(o,p);if(null===$)break;if(C.push($),!v)break;var S=String($[0]);""===S&&(o.lastIndex=c(p,r(o.lastIndex),E))}for(var w="",O=0,R=0;R<C.length;R++){$=C[R];for(var k=String($[0]),y=d(f(l($.index),p.length),0),A=[],L=1;L<$.length;L++)A.push(m($[L]));var F=$.groups;if(h){var I=[k].concat(A,y,p);void 0!==F&&I.push(F);var T=String(s.apply(void 0,I))}else T=_(k,p,y,A,F,s);y>=O&&(w+=p.slice(O,y)+T,O=y+k.length)}return w+p.slice(O)}];function _(t,n,s,a,r,l){var o=s+t.length,c=a.length,u=v;return void 0!==r&&(r=i(r),u=h),e.call(l,u,(function(e,i){var l;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,s);case"'":return n.slice(o);case"<":l=r[i.slice(1,-1)];break;default:var u=+i;if(0===u)return e;if(u>c){var d=p(u/10);return 0===d?e:d<=c?void 0===a[d-1]?i.charAt(1):a[d-1]+i.charAt(1):e}l=a[u-1]}return void 0===l?"":l}))}}))},5966:function(t,e,n){"use strict";n("1caf")},"5a81":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav2"},[t._v(" nav4 page++++++++ ")])},a=[],i={data:function(){return{}}},r=i,l=n("2877"),o=Object(l["a"])(r,s,a,!1,null,"bf100926",null);e["default"]=o.exports},"738b":function(t,e,n){"use strict";n("129d")},"80d3":function(t,e,n){},"84bb":function(t,e,n){"use strict";n("80d3")},"8aa5":function(t,e,n){"use strict";var s=n("6547").charAt;t.exports=function(t,e,n){return e+(n?s(t,e).length:1)}},9263:function(t,e,n){"use strict";var s=n("ad6d"),a=n("9f7f"),i=RegExp.prototype.exec,r=String.prototype.replace,l=i,o=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),c=a.UNSUPPORTED_Y||a.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=o||u||c;d&&(l=function(t){var e,n,a,l,d=this,f=c&&d.sticky,p=s.call(d),h=d.source,v=0,m=t;return f&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),m=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(h="(?: "+h+")",m=" "+m,v++),n=new RegExp("^(?:"+h+")",p)),u&&(n=new RegExp("^"+h+"$(?!\\s)",p)),o&&(e=d.lastIndex),a=i.call(f?n:d,m),f?a?(a.input=a.input.slice(v),a[0]=a[0].slice(v),a.index=d.lastIndex,d.lastIndex+=a[0].length):d.lastIndex=0:o&&a&&(d.lastIndex=d.global?a.index+a[0].length:e),u&&a&&a.length>1&&r.call(a[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(a[l]=void 0)})),a}),t.exports=l},"9f7f":function(t,e,n){"use strict";var s=n("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=s((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=s((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a465:function(t,e,n){},a919:function(t,e,n){"use strict";n("1ab1")},ac1f:function(t,e,n){"use strict";var s=n("23e7"),a=n("9263");s({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},c975:function(t,e,n){"use strict";var s=n("23e7"),a=n("4d64").indexOf,i=n("a640"),r=n("ae40"),l=[].indexOf,o=!!l&&1/[1].indexOf(1,-0)<0,c=i("indexOf"),u=r("indexOf",{ACCESSORS:!0,1:0});s({target:"Array",proto:!0,forced:o||!c||!u},{indexOf:function(t){return o?l.apply(this,arguments)||0:a(this,t,arguments.length>1?arguments[1]:void 0)}})},d784:function(t,e,n){"use strict";n("ac1f");var s=n("6eeb"),a=n("d039"),i=n("b622"),r=n("9263"),l=n("9112"),o=i("species"),c=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=i("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),p=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,d){var h=i(t),v=!a((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),m=v&&!a((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[o]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return e=!0,null},n[h](""),!e}));if(!v||!m||"replace"===t&&(!c||!u||f)||"split"===t&&!p){var g=/./[h],b=n(h,""[t],(function(t,e,n,s,a){return e.exec===r?v&&!a?{done:!0,value:g.call(e,n,s)}:{done:!0,value:t.call(n,e,s)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),x=b[0],_=b[1];s(String.prototype,t,x),s(RegExp.prototype,h,2==e?function(t,e){return _.call(t,this,e)}:function(t){return _.call(t,this)})}d&&l(RegExp.prototype[h],"sham",!0)}},d9ce:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("Aside"),n("div",{staticClass:"main-container"},[n("Header"),n("Main")],1)],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"aside"},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-4-1",collapse:t.isCollapse},on:{open:t.handleOpen,close:t.handleClose,select:t.selectMenu}},[n("el-submenu",{attrs:{index:"nav1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("message.nav1")))])]),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"op1"}},[t._v("选项1")]),n("el-menu-item",{attrs:{index:"op2"}},[t._v("选项2")])],1),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"op3"}},[t._v("选项3")])],1),n("el-submenu",{attrs:{index:"op4"}},[n("span",{attrs:{slot:"title"},slot:"title"},[t._v("选项4")]),n("el-menu-item",{attrs:{index:"op4-1"}},[t._v("选项1")])],1)],2),t._l(t.asideList,(function(e,s){return n("el-menu-item",{key:s,attrs:{index:e.nameEn},on:{click:function(n){t.go2Nav(e.nameEn.slice(-1))}}},[n("i",{staticClass:"el-icon-setting"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s("en"==t.lang?e.nameEn:e.name))])])}))],2)],1)},r=[],l=(n("c975"),n("2909")),o=n("5530"),c=n("2f62"),u={data:function(){return{asideList:[]}},components:{},computed:Object(o["a"])(Object(o["a"])({},Object(c["b"])(["isCollapse"])),{},{lang:function(){return this.$store.state.lang}}),created:function(){this.getAsideList()},methods:{getAsideList:function(){var t=this;console.log("获取侧边栏",this.$api),this.$api.aside.getAsideList().then((function(e){console.log("aside is",e),0===e.code&&(t.asideList=e.data,console.log("-----",t.asideList))}))},handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)},selectMenu:function(t,e){if(console.log(t,e),!(e.indexOf("home")>-1)&&null!==t){var n=["home"];n.push.apply(n,Object(l["a"])(e)),console.log(n),this.$store.commit("SET_BREAD",n)}},go2Nav:function(t){console.log("go to nav",t);var e="/nav".concat(t);this.$router.push({path:e})}}},d=u,f=(n("a919"),n("2877")),p=Object(f["a"])(d,i,r,!1,null,"cafa5656",null),h=p.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"header-left"},[n("ShowAside",{on:{toggleClick:t.toggleClick}}),n("Breadcrumb")],1),n("div",{staticClass:"header-right"},[n("div",{staticClass:"header-user-con"},[n("div",{staticClass:"btn-fullscreen",on:{click:t.handleFullScreen}},[n("el-tooltip",{attrs:{effect:"dark",content:t.fullscreen?t.$t("header.cancelFullScreen"):t.$t("header.fullScreen"),placement:"bottom"}},[n("i",{staticClass:"el-icon-rank"})])],1),n("SelectLang"),n("el-dropdown",{staticClass:"avatar-container",attrs:{trigger:"click"}},[n("div",{staticClass:"avatar-wrapper"},[n("img",{staticClass:"user-avatar",attrs:{src:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3266090804,66355162&fm=26&gp=0.jpg"}}),n("span",[t._v(t._s(t.username||"哈喽"))]),n("i",{staticClass:"el-icon-caret-bottom"})]),n("el-dropdown-menu",{staticClass:"user-dropdown",attrs:{slot:"dropdown"},slot:"dropdown"},[n("router-link",{staticClass:"inlineBlock",attrs:{to:"/home"}},[n("el-dropdown-item",[t._v(t._s(t.$t("header.home")))])],1),n("el-dropdown-item",[t._v(t._s(t.$t("header.setting")))]),n("el-dropdown-item",{attrs:{divided:""}},[n("span",{staticStyle:{display:"block"},on:{click:t.logout}},[t._v(t._s(t.$t("header.logout")))])])],1)],1)],1)])])},m=[],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clearfix"},[n("div",{staticClass:"showAside pull-left",on:{click:t.toggleClick}},[n("i",{staticClass:"el-icon-menu"})])])},b=[],x={name:"showAside",props:{},computed:{isCollapse:{get:function(){return this.$store.state.isCollapse},set:function(t){this.$store.commit("IS_COLLAPSE",t)}}},methods:{toggleClick:function(){this.isCollapse=!this.isCollapse}}},_=x,E=(n("5966"),Object(f["a"])(_,g,b,!1,null,"fd6d98d2",null)),C=E.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"breadcrumb"},[n("el-breadcrumb",{attrs:{separator:"/"}},[n("transition-group",{attrs:{name:"fade-transform",mode:"out-in"}},[t._l(t.$store.state.breadList,(function(e,s){return[n("el-breadcrumb-item",{key:s,attrs:{to:-1==t.activeList.indexOf(e)?"":{path:"/"+e}}},[t._v(t._s(t.$t("route."+e)))])]}))],2)],1)],1)},S=[],w=(n("ac1f"),n("5319"),{data:function(){return{activeList:[]}},mounted:function(){this.getBreadcrumb()},watch:{$route:function(t,e){var n=t.fullPath.replace("/","");console.log(t,e),this.getBreadcrumb(n)}},methods:{getBreadcrumb:function(t){console.log(t),this.activeList=[],this.activeList.push(this.$store.state.breadList[0]),console.log(this.$store.state.breadList);var e=this.$store.state.breadList;"home"!==t?"home"!==e[e.length-1]&&this.activeList.push(e[e.length-1]):(console.log(this.activeList),this.$store.commit("SET_BREAD",this.activeList))}}}),O=w,R=(n("f02d"),Object(f["a"])(O,$,S,!1,null,"d5421ac6",null)),k=R.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-dropdown",{attrs:{trigger:"click"},on:{command:t.handleSetLanguage}},[n("span",{staticClass:"el-dropdown-link"},[t._v(" 语言切换"),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),n("el-dropdown-menu",{staticClass:"dropMenu",attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{disabled:"cn"===t.lang,command:"cn"}},[t._v("中文")]),n("el-dropdown-item",{attrs:{disabled:"en"===t.lang,command:"en"}},[t._v("English")])],1)],1)],1)},A=[],L={computed:{lang:function(){return this.$store.state.lang}},methods:{handleSetLanguage:function(t){console.log(t),this.$i18n.locale=t,this.$store.commit("GET_LANGUAGE",t),console.log(this.$store.state.lang)}}},F=L,I=(n("0553"),Object(f["a"])(F,y,A,!1,null,"26f54528",null)),T=I.exports,j={data:function(){return{fullscreen:!1,username:""}},components:{ShowAside:C,Breadcrumb:k,SelectLang:T},methods:{toggleClick:function(t){console.log(t,"子组件")},handleFullScreen:function(){var t=document.documentElement;this.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullScreen?t.webkitRequestFullScreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen(),this.fullscreen=!this.fullscreen},logout:function(t){this.$router.push("/login")}}},P=j,U=(n("fab3"),Object(f["a"])(P,v,m,!1,null,"1ebee2a0",null)),B=U.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("router-view")],1)},q=[],D={components:{}},M=D,G=(n("84bb"),Object(f["a"])(M,N,q,!1,null,"3b69f4ee",null)),K=G.exports,z={data:function(){return{}},components:{Aside:h,Header:B,Main:K}},H=z,Y=(n("738b"),Object(f["a"])(H,s,a,!1,null,"d957176c",null));e["default"]=Y.exports},f02d:function(t,e,n){"use strict";n("a465")},f274:function(t,e,n){},f34a:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav2"},[t._v(" nav2 page----------- ")])},a=[],i={data:function(){return{}}},r=i,l=n("2877"),o=Object(l["a"])(r,s,a,!1,null,"1987abce",null);e["default"]=o.exports},f820:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")]),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.switchChinese()}}},[t._v("切换中文")]),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.switchEnlish()}}},[t._v("切换英文")]),n("p",[t._v(t._s(t.$t("message.hello")))]),n("p",[t._v(t._s(t.$t("message.msg")))])],1)},a=[],i={name:"About",components:{},methods:{switchChinese:function(){this.$i18n.locale="cn",console.log(this.$i18n.locale),localStorage.setItem("lang","cn")},switchEnlish:function(){this.$i18n.locale="en",localStorage.setItem("lang","en")}}},r=i,l=n("2877"),o=Object(l["a"])(r,s,a,!1,null,null,null);e["default"]=o.exports},fab3:function(t,e,n){"use strict";n("2363")}}]);