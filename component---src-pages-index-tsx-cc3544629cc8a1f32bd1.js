(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{139:function(e,t,a){"use strict";a.r(t);a(73);var n=a(144),r=a(0),i=a.n(r),c=a(141),o=(a(52),a(148),a(150),a(151)),u=a(152),l=a.n(u),s=function(e){var t=e.data.site,a=""+t.siteMetadata.title,n=t.siteMetadata.favicon;return r.createElement(l.a,null,r.createElement("title",null,a),r.createElement("meta",{charset:"utf-8"}),r.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),r.createElement("meta",{name:"author",content:t.siteMetadata.author}),r.createElement("link",{rel:"shortcut icon",type:"image/png",href:Object(c.withPrefix)(n)}))},d=function(){return r.createElement(c.StaticQuery,{query:"3870257524",render:function(e){return r.createElement(s,{data:e})},data:o})},f=function(){return r.createElement(r.Fragment,null,r.createElement("h1",{className:"table-header"},"Gotham Cafe"))},m=function(e){var t=e.data;return r.createElement(r.Fragment,null,r.createElement(d,null),r.createElement("div",{className:"table-container"},r.createElement(f,null),r.createElement("ul",null,Object.entries(t).map(function(e,t){var a=e[0],n=e[1];return r.createElement("li",{key:t,className:"row"},r.createElement("span",{className:"col1"},a),r.createElement("span",{className:"col2"},n))}))))},p=function(e){var t=e.data,a={};return t.allGoogleSheetCafeMenuRow.edges.forEach(function(e){a[e.node.title]=e.node.price}),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"app-root"},i.a.createElement(m,{data:a})))};t.default=function(){return i.a.createElement(c.StaticQuery,{query:"1263233711",render:function(e){return i.a.createElement(p,{data:e})},data:n})}},141:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(140),u=a.n(o);a.d(t,"Link",function(){return u.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var l=a(142),s=a.n(l);a.d(t,"PageRenderer",function(){return s.a});var d=a(49);a.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),m=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},142:function(e,t,a){var n;e.exports=(n=a(147))&&n.default||n},144:function(e){e.exports={data:{allGoogleSheetCafeMenuRow:{edges:[{node:{title:"Tea",price:100}},{node:{title:"Sandwitch",price:250}},{node:{title:"Coffee",price:100}},{node:{title:"Apple Juice",price:200}},{node:{title:"Fruits salad",price:250}},{node:{title:"Hot chocolate",price:200}},{node:{title:"Pineapple Juice",price:150}}]}}}},147:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(68),u=a(2),l=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=l},150:function(e,t,a){},151:function(e){e.exports={data:{site:{siteMetadata:{title:" Cafe's menu card - Today's special",favicon:"/ico/drinks32x32.png"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-cc3544629cc8a1f32bd1.js.map