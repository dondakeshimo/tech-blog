(window.webpackJsonp=window.webpackJsonp||[]).push([[7,8],{"5kS5":function(e,t,n){e.exports={container:"index-module--container--1Qco9",photo:"index-module--photo--6zcpX",content:"index-module--content--2qSIH",iconsContainer:"index-module--iconsContainer--1JLyf",iconWrapper:"index-module--iconWrapper--1IEjp"}},O0dG:function(e,t,n){"use strict";n.r(t),n.d(t,"aboutPropTypes",(function(){return v})),n.d(t,"imageListPropTypes",(function(){return j})),n.d(t,"query",(function(){return S})),n.d(t,"iconsNameMap",(function(){return I}));n("3nLz"),n("pJf4"),n("zGcK"),n("q8oJ"),n("8npG"),n("nWfQ");var a=n("q1tI"),r=n.n(a),o=n("17x9"),i=n.n(o),c=n("9eSz"),u=n.n(c),s=n("I/Ru"),l=n("jNNy"),p=n("Al62"),f=n.n(p),d=n("5kS5"),m=n.n(d);function h(e){return function(){var t,n=E(e);if(g()){var a=E(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return y(this,t)}}function y(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var v={data:i.a.shape({profilePhoto:i.a.shape({childImageSharp:i.a.shape({fluid:i.a.object.isRequired}).isRequired}).isRequired,flagIt:i.a.shape({childImageSharp:i.a.shape({fixed:i.a.object.isRequired})}),flagEn:i.a.shape({childImageSharp:i.a.shape({fixed:i.a.object.isRequired})}),skillIcons:i.a.object.isRequired})},q=function(e){b(t,e);h(t);function t(){return e.apply(this,arguments)||this}return t.prototype.render=function(){var e=this.props.data,t=e.profilePhoto,n=e.skillIcons;return r.a.createElement(s.a,null,r.a.createElement(l.a,{title:"About",description:"A brief summary of this blog",path:"about"}),r.a.createElement("div",{className:m.a.container},r.a.createElement("div",{className:m.a.photo},r.a.createElement(u.a,{fluid:t.childImageSharp.fluid})),r.a.createElement("div",{className:m.a.content},r.a.createElement("h1",null,"dondakeshimo"),r.a.createElement("h2",null,"Software Developer"),r.a.createElement("p",null,"徒然なる技術草"),r.a.createElement("br",null),r.a.createElement("h2",null,"Skills"),r.a.createElement(R,{edges:n.edges}))))},t}(r.a.Component),j={edges:i.a.arrayOf(i.a.shape({node:i.a.shape({name:i.a.string.isRequired,childImageSharp:i.a.shape({fixed:i.a.object.isRequired}).isRequired}).isRequired})).isRequired},R=function(e){b(t,e);h(t);function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).render=function(){return r.a.createElement("div",{className:m.a.iconsContainer},t.props.edges.sort((function(e,t){return e.node.name.toLowerCase()>t.node.name.toLowerCase()?1:-1})).map((function(e){var t=e.node,n=t.name,a=t.childImageSharp;return r.a.createElement("div",{className:m.a.iconWrapper,key:n},r.a.createElement(u.a,{fixed:a.fixed,alt:n+" logo",title:n}),r.a.createElement("label",null,I[n]?I[n]:f.a.capitalize(n)))})))},t}return t}(r.a.Component),S="3634914871",I={css:"CSS",html:"HTML",jquery:"JQuery",nodejs:"Node.js",vuejs:"Vue.js",gruntjs:"Grunt.js"};t.default=q},rLZg:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return q}));n("pJf4"),n("zGcK"),n("q8oJ"),n("8npG"),n("nWfQ"),n("3nLz");var a=n("q1tI"),r=n.n(a),o=n("9eSz"),i=n.n(o),c=n("O0dG"),u=n("I/Ru"),s=n("jNNy"),l=n("Al62"),p=n.n(l),f=n("5kS5"),d=n.n(f);function m(e){return function(){var t,n=g(e);if(y()){var a=g(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return h(this,t)}}function h(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var b=function(e){E(t,e);m(t);function t(){return e.apply(this,arguments)||this}return t.prototype.render=function(){var e=this.props.data,t=e.profilePhoto,n=e.flagEn,a=e.skillIcons,o=e.toolIcons;return r.a.createElement(u.a,null,r.a.createElement(s.a,{title:"About",description:"Una breve presentazione di questo blog",path:"about"}),r.a.createElement("div",{className:d.a.container},r.a.createElement("div",{className:d.a.photo},r.a.createElement(i.a,{fluid:t.childImageSharp.fluid})),r.a.createElement("div",{className:d.a.content},r.a.createElement("h1",null,"Ciao, sono Luigi!"),r.a.createElement("h2",null,"Software Developer"),r.a.createElement("p",null,"For the English version click here"),r.a.createElement("a",{href:p.a.resolvePageUrl("../","../","about")},r.a.createElement(i.a,{fixed:n.childImageSharp.fixed,style:{display:"block",margin:"auto"}})),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus venenatis arcu, cursus pretium enim lacinia nec. Duis viverra sagittis neque. Fusce non luctus urna. Vivamus suscipit metus ac posuere egestas. Nunc a pulvinar purus. Vivamus nisi mi, fringilla quis lacus et, sagittis mollis massa. Cras tempus massa quis lobortis laoreet. Pellentesque metus odio, sagittis nec venenatis non, maximus congue eros. Suspendisse pellentesque purus sit amet ante commodo, et molestie mauris aliquet. Proin non nibh libero. Fusce at nulla euismod, condimentum augue quis, convallis justo."),r.a.createElement("br",null),r.a.createElement("h2",null,"Competenze"),r.a.createElement(v,{edges:a.edges}),r.a.createElement("h2",null,"Strumenti"),r.a.createElement(v,{edges:o.edges}))))},t}(r.a.Component),v=function(e){E(t,e);m(t);function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).render=function(){return r.a.createElement("div",{className:d.a.iconsContainer},t.props.edges.sort((function(e,t){return e.node.name.toLowerCase()>t.node.name.toLowerCase()?1:-1})).map((function(e){var t=e.node,n=t.name,a=t.childImageSharp;return r.a.createElement("div",{className:d.a.iconWrapper,key:n},r.a.createElement(i.a,{fixed:a.fixed,alt:n+" logo",title:n}),r.a.createElement("label",null,c.iconsNameMap[n]?c.iconsNameMap[n]:p.a.capitalize(n)))})))},t}return t}(r.a.Component),q="879448049";t.default=b}}]);
//# sourceMappingURL=component---src-pages-about-index-it-js-f89cd6e75d65f65d1887.js.map