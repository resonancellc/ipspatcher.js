(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,n,t){"use strict";(function(e){t.d(n,"a",function(){return m});var r=t(4),a=t(14),c=t(15),i=t(16),l=t(20),u=t(17),o=t(19),d=t(2),f=t(1),s=t.n(f),m=function(n){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).handleInput=e.handleInput.bind(Object(d.a)(Object(d.a)(e))),e.promiseAll=e.promiseAll.bind(Object(d.a)(Object(d.a)(e))),e}return Object(o.a)(t,n),Object(i.a)(t,[{key:"readFile",value:function(n,t){return new Promise(function(t,r){var a=new FileReader;a.onload=function(){t(new e(a.result))},a.onerror=function(e){r(e)},a.readAsArrayBuffer(n)})}},{key:"promiseAll",value:function(e){var n=Object(a.a)(e),t=n[0],c=n.slice(1);return t.then(function(e){return Promise.all(c).then(function(n){return[e].concat(Object(r.a)(n))})})}},{key:"handleInput",value:function(e){var n=e.target.files,t=Array.from(n).map(this.readFile);this.promiseAll(t).then(this.props.callback)}},{key:"render",value:function(){return s.a.createElement("div",null,this.props.children||s.a.createElement("label",{htmlFor:this.props.id},"Upload"),s.a.createElement("input",{onChange:this.handleInput,type:"file",id:this.props.id,style:{display:"none"},value:"",multiple:!0}))}}]),t}(f.Component)}).call(this,t(9).Buffer)},21:function(e,n,t){e.exports=t(34)},3:function(e,n,t){"use strict";(function(e){t.d(n,"b",function(){return r}),t.d(n,"a",function(){return a});var r=function(n){return e.from([n>>>24&255,n>>>16&255,n>>>8&255,n>>>0&255])},a=function(e){return document.getElementById(e).click()}}).call(this,t(9).Buffer)},30:function(e,n,t){},32:function(e,n,t){},34:function(e,n,t){"use strict";t.r(n);var r=t(18),a=t(1),c=t.n(a),i=t(13),l=t.n(i),u=t(0),o=t(10),d=(t(30),function(e){var n=e.children,t=e.onClick,r=e.style;return c.a.createElement("div",{style:r},c.a.createElement("button",{className:"search-button",onClick:t,style:r},n))}),f=t(8),s=t(3),m=(t(32),function(e,n){var t=document.getElementById("hidden-download");t.href=function(e){var n=new Blob([e]);return window.URL.createObjectURL(n)}(e),t.download=n,t.click()}),p=document.getElementById("root");l.a.render(c.a.createElement(function(){return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"IPSPatcher.js"),c.a.createElement(o.a,{callback:function(e){return m(function(e){var n=u.find(e,f.b),t=u.xor([n],e),a=Object(r.a)(t,1)[0];return Object(f.a)(a,n)}(e),"patched.bin")},id:"patchFile"},c.a.createElement(d,{onClick:function(){return Object(s.a)("patchFile")}},"Patch (Upload IPS and file)")),c.a.createElement(o.a,{callback:function(e){return m(Object(f.c)(e),"merged.ips")},id:"mergeFile"},c.a.createElement(d,{onClick:function(){return Object(s.a)("mergeFile")}},"Merge (Upload all IPSs)")),c.a.createElement("a",{id:"hidden-download"}))},null),p)},8:function(e,n,t){"use strict";(function(e){t.d(n,"b",function(){return i}),t.d(n,"a",function(){return o}),t.d(n,"c",function(){return f});var r=t(4),a=t(0),c=t(3),i=function(e){var n=a.slice(e,0,5),t=a.slice(e,-3);return a.isEqual(n,[80,65,84,67,72])&&a.isEqual(t,[69,79,70])},l=function(e){var n=a.slice(e,5,-3);return i(e)?function e(n){var t=65536*n[0]+256*n[1]+n[2],c=256*n[3]+n[4],i=a.slice(n,5,5+c),l=a.slice(n,5+c),u={address:t,length:c,data:i};return l.length>0?[u].concat(Object(r.a)(e(l))):[u]}(n):[]},u=function(e){var n=e.address,t=e.length,r=e.data;return a.reduce(a.range(t),function(e,t,a){return e[n+a]=r[a],e},{})},o=function(n,t){var c=l(t),i=a.merge.apply(a,Object(r.a)(a.map(c,u)));return a.reduce(n,function(e,n,t){var r=a.get(i,t,n);return e[t]=r,e},e.alloc(n.length))},d=function(n){var t=n.address,r=n.length,a=n.data;return e.concat([Object(c.b)(t).slice(1),Object(c.b)(r).slice(2),e.from(a)])},f=function(n){var t=a.map(n,l);return function(n){var t=e.from("PATCH"),c=e.from("EOF"),i=a.map(n,d);return e.concat([t].concat(Object(r.a)(i),[c]))}(a.flatten(t))}}).call(this,t(9).Buffer)}},[[21,2,1]]]);
//# sourceMappingURL=main.304cd668.chunk.js.map