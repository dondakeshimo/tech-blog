(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"5kS5":function(e,a,n){e.exports={container:"index-module--container--1Qco9",photo:"index-module--photo--6zcpX",content:"index-module--content--2qSIH",iconsContainer:"index-module--iconsContainer--1JLyf",iconWrapper:"index-module--iconWrapper--1IEjp"}},O0dG:function(e,a,n){"use strict";n.r(a),n.d(a,"aboutPropTypes",(function(){return g})),n.d(a,"imageListPropTypes",(function(){return b})),n.d(a,"iconsNameMap",(function(){return q}));var t=n("dI71"),r=(n("ToJy"),n("q1tI")),i=n.n(r),o=n("17x9"),l=n.n(o),s=n("9eSz"),c=n.n(s),d=n("I/Ru"),u=n("jNNy"),p=n("Al62"),m=n.n(p),h=n("5kS5"),f=n.n(h),g={data:l.a.shape({profilePhoto:l.a.shape({childImageSharp:l.a.shape({fluid:l.a.object.isRequired}).isRequired}).isRequired,flagIt:l.a.shape({childImageSharp:l.a.shape({fixed:l.a.object.isRequired})}),flagEn:l.a.shape({childImageSharp:l.a.shape({fixed:l.a.object.isRequired})}),skillIcons:l.a.object.isRequired})},E=function(e){function a(){return e.apply(this,arguments)||this}return Object(t.a)(a,e),a.prototype.render=function(){var e=this.props.data,a=e.profilePhoto,n=e.skillIcons;return i.a.createElement(d.a,null,i.a.createElement(u.a,{title:"About",description:"A brief summary of this blog",path:"about"}),i.a.createElement("div",{className:f.a.container},i.a.createElement("div",{className:f.a.photo},i.a.createElement(c.a,{fluid:a.childImageSharp.fluid})),i.a.createElement("div",{className:f.a.content},i.a.createElement("h1",null,"dondakeshimo"),i.a.createElement("h2",null,"Software Developer"),i.a.createElement("p",null,"徒然なる技術草"),i.a.createElement("br",null),i.a.createElement("h2",null,"Skills"),i.a.createElement(j,{edges:n.edges}))))},a}(i.a.Component),b={edges:l.a.arrayOf(l.a.shape({node:l.a.shape({name:l.a.string.isRequired,childImageSharp:l.a.shape({fixed:l.a.object.isRequired}).isRequired}).isRequired})).isRequired},j=function(e){function a(){for(var a,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return(a=e.call.apply(e,[this].concat(t))||this).render=function(){return i.a.createElement("div",{className:f.a.iconsContainer},a.props.edges.sort((function(e,a){return e.node.name.toLowerCase()>a.node.name.toLowerCase()?1:-1})).map((function(e){var a=e.node,n=a.name,t=a.childImageSharp;return i.a.createElement("div",{className:f.a.iconWrapper,key:n},i.a.createElement(c.a,{fixed:t.fixed,alt:n+" logo",title:n}),i.a.createElement("label",null,q[n]?q[n]:m.a.capitalize(n)))})))},a}return Object(t.a)(a,e),a}(i.a.Component),q={css:"CSS",html:"HTML",jquery:"JQuery",nodejs:"Node.js",vuejs:"Vue.js",gruntjs:"Grunt.js"};a.default=E}}]);
//# sourceMappingURL=component---src-pages-about-index-js-69090299fe11606004d4.js.map