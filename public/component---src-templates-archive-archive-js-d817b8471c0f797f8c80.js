(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"6z7D":function(e,t,a){e.exports={tags:"tag-list-module--tags--O_Obx"}},FT44:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),o=a("ph5I"),c=a.n(o),i=function(e){var t=e.children,a=e.to,n=e.buttonStyle;return r.a.createElement(l.Link,{to:a,className:c.a.button+" "+n},t)};i.defaultProps={buttonStyle:""};var u=i},GWjj:function(e,t,a){e.exports={container:"post-list-module--container--2AqiX",post:"post-list-module--post--1gkyY",cover:"post-list-module--cover--31q1n",content:"post-list-module--content--ixjr-"}},JIeO:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("q1tI"),r=a.n(n),l=a("ma3e"),o=a("FT44"),c=a("obyI"),i=a.n(c),u=a("Al62"),s=a.n(u),m=a("qux6"),p=a.n(m),d=function(e){var t=e.prevPage,a=e.nextPage;return r.a.createElement("div",{className:p.a.container},t?r.a.createElement(o.a,{to:s.a.resolvePageUrl(i.a.pages.archive,t),buttonStyle:p.a.buttonLeft},r.a.createElement(l.a,null),r.a.createElement("span",null,"Newer posts")):null,a?r.a.createElement(o.a,{to:s.a.resolvePageUrl(i.a.pages.archive,a),buttonStyle:p.a.buttonRight},r.a.createElement("span",null,"Older posts"),r.a.createElement(l.b,null)):null)}},bpH6:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return m}));var n=a("q1tI"),r=a.n(n),l=a("I/Ru"),o=a("jNNy"),c=a("fC2M"),i=a("JIeO"),u=a("obyI"),s=a.n(u),m="3350011143";t.default=function(e){var t=e.data,a=e.pageContext,n=a.archivePage,u=n>1?n-1:null,m=n<a.lastArchivePage?n+1:null;return r.a.createElement(l.a,{title:"Archive"},r.a.createElement(o.a,{title:"Archive | Page "+n,description:"Old posts",path:s.a.pages.archive}),r.a.createElement(c.a,{posts:t.allMarkdownRemark.edges}),r.a.createElement(i.a,{prevPage:u,nextPage:m}))}},dkXr:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));a("pJf4"),a("zGcK");var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),o=a("6z7D"),c=a.n(o),i=a("obyI"),u=a.n(i),s=a("Al62"),m=a.n(s),p=function(e){var t=e.tags;return r.a.createElement("div",{className:c.a.tags},t.filter((function(e,a){return a===t.indexOf(e)})).sort().map((function(e){return r.a.createElement(l.Link,{to:m.a.resolvePageUrl(u.a.pages.tag,e),key:e},u.a.tags[e].name||m.a.capitalize(e))})))}},fC2M:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),o=a("9eSz"),c=a.n(o),i=a("GWjj"),u=a.n(i),s=a("dkXr"),m=a("Al62"),p=a.n(m),d=function(e){var t=e.posts;return r.a.createElement("div",{className:u.a.container},t.map((function(e,t){var a=e.node.frontmatter,n=a.title,o=a.date,i=a.path,m=a.tags,d=a.cover,v=a.excerpt;return r.a.createElement("div",{key:n,className:u.a.post},r.a.createElement("div",{className:u.a.cover},r.a.createElement(l.Link,{to:p.a.resolvePageUrl(i)},r.a.createElement(c.a,{fluid:d.childImageSharp.fluid,title:v,alt:n}))),r.a.createElement("div",{className:u.a.content},r.a.createElement(l.Link,{to:p.a.resolvePageUrl(i)},o?r.a.createElement("label",null,o):null,r.a.createElement("h2",null,n),r.a.createElement("p",null,v)),r.a.createElement(s.a,{tags:m})))})))}},ph5I:function(e,t,a){e.exports={button:"button-module--button--24AQQ"}},qux6:function(e,t,a){e.exports={container:"archive-pagination-module--container--2VM7Y",buttonLeft:"archive-pagination-module--buttonLeft--3CRS6",buttonRight:"archive-pagination-module--buttonRight--Wnali"}}}]);
//# sourceMappingURL=component---src-templates-archive-archive-js-d817b8471c0f797f8c80.js.map