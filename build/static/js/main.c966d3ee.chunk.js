(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,n,t){e.exports=t(31)},27:function(e,n,t){},29:function(e,n,t){},3:function(e,n,t){"use strict";(function(e){t.d(n,"b",function(){return r}),t.d(n,"a",function(){return c});var r=function(n){return e.from([n>>>24&255,n>>>16&255,n>>>8&255,n>>>0&255])},c=function(e){return document.getElementById(e).click()}}).call(this,t(7).Buffer)},31:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t.n(r),a=t(11),i=t.n(a),u=t(0),l=t(8),o=(t(27),function(e){var n=e.children,t=e.onClick,r=e.style;return c.a.createElement("div",{style:r},c.a.createElement("button",{className:"search-button",onClick:t,style:r},n))}),d=t(5),f=t(3),s=(t(29),function(e,n){var t=document.getElementById("hidden-download");t.href=function(e){var n=new Blob([e]);return window.URL.createObjectURL(n)}(e),t.download=n,t.click()}),m=document.getElementById("root");i.a.render(c.a.createElement(function(){return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"IPSPatcher.js"),c.a.createElement(l.a,{callback:function(e){return s(function(e){var n=u.find(e,function(e){return!Object(d.b)(e)}),t=u.xor([r],e),r=Object(d.c)(t);return Object(d.a)(n,r)}(e),"patched.bin")},id:"patchFile"},c.a.createElement(o,{onClick:function(){return Object(f.a)("patchFile")}},"Patch (Upload IPSs and the file to patch)")),c.a.createElement(l.a,{callback:function(e){return s(Object(d.c)(e),"merged.ips")},id:"mergeFile"},c.a.createElement(o,{onClick:function(){return Object(f.a)("mergeFile")}},"Merge (Upload IPSs)")),c.a.createElement("a",{id:"hidden-download"}))},null),m)},5:function(e,n,t){"use strict";(function(e){t.d(n,"b",function(){return i}),t.d(n,"a",function(){return o}),t.d(n,"c",function(){return f});var r=t(4),c=t(0),a=t(3),i=function(e){var n=c.slice(e,0,5),t=c.slice(e,-3);return c.isEqual(n,[80,65,84,67,72])&&c.isEqual(t,[69,79,70])},u=function(e){var n=c.slice(e,5,-3);return i(e)?function e(n){var t=65536*n[0]+256*n[1]+n[2],a=256*n[3]+n[4],i=c.slice(n,5,5+a),u=c.slice(n,5+a),l={address:t,length:a,data:i};return u.length>0?[l].concat(Object(r.a)(e(u))):[l]}(n):[]},l=function(e){var n=e.address,t=e.length,r=e.data;return c.reduce(c.range(t),function(e,t,c){return e[n+c]=r[c],e},{})},o=function(n,t){var a=u(t),i=c.merge.apply(c,Object(r.a)(c.map(a,l)));return c.reduce(n,function(e,n,t){var r=c.get(i,t,n);return e[t]=r,e},e.alloc(n.length))},d=function(n){var t=n.address,r=n.length,c=n.data;return e.concat([Object(a.b)(t).slice(1),Object(a.b)(r).slice(2),e.from(c)])},f=function(n){var t=c.map(n,u);return function(n){var t=e.from("PATCH"),a=e.from("EOF"),i=c.map(n,d);return e.concat([t].concat(Object(r.a)(i),[a]))}(c.flatten(t))}}).call(this,t(7).Buffer)},8:function(e,n,t){"use strict";(function(e){t.d(n,"a",function(){return m});var r=t(4),c=t(15),a=t(12),i=t(13),u=t(17),l=t(14),o=t(16),d=t(2),f=t(1),s=t.n(f),m=function(n){function t(){var e;return Object(a.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).handleInput=e.handleInput.bind(Object(d.a)(Object(d.a)(e))),e.promiseAll=e.promiseAll.bind(Object(d.a)(Object(d.a)(e))),e}return Object(o.a)(t,n),Object(i.a)(t,[{key:"readFile",value:function(n,t){return new Promise(function(t,r){var c=new FileReader;c.onload=function(){t(new e(c.result))},c.onerror=function(e){r(e)},c.readAsArrayBuffer(n)})}},{key:"promiseAll",value:function(e){var n=Object(c.a)(e),t=n[0],a=n.slice(1);return t.then(function(e){return Promise.all(a).then(function(n){return[e].concat(Object(r.a)(n))})})}},{key:"handleInput",value:function(e){var n=e.target.files,t=Array.from(n).map(this.readFile);this.promiseAll(t).then(this.props.callback)}},{key:"render",value:function(){return s.a.createElement("div",null,this.props.children||s.a.createElement("label",{htmlFor:this.props.id},"Upload"),s.a.createElement("input",{onChange:this.handleInput,type:"file",id:this.props.id,style:{display:"none"},value:"",multiple:!0}))}}]),t}(f.Component)}).call(this,t(7).Buffer)}},[[18,2,1]]]);
//# sourceMappingURL=main.c966d3ee.chunk.js.map