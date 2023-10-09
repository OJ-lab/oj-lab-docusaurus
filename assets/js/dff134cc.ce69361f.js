"use strict";(self.webpackChunkoj_lab_docusaurus=self.webpackChunkoj_lab_docusaurus||[]).push([[405],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,d=u["".concat(s,".").concat(m)]||u[m]||g[m]||o;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},358:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={},c="Swag API Document Generation",i={unversionedId:"learn/platform-services/swag-doc-gen",id:"learn/platform-services/swag-doc-gen",title:"Swag API Document Generation",description:"OJ Lab use swag to generate Rest API document.",source:"@site/docs/learn/platform-services/swag-doc-gen.md",sourceDirName:"learn/platform-services",slug:"/learn/platform-services/swag-doc-gen",permalink:"/oj-lab-docusaurus/docs/learn/platform-services/swag-doc-gen",draft:!1,editUrl:"https://github.com/OJ-lab/oj-lab-docusaurus/tree/main/docs/learn/platform-services/swag-doc-gen.md",tags:[],version:"current",frontMatter:{},sidebar:"learnSidebar",previous:{title:"Form of API",permalink:"/oj-lab-docusaurus/docs/learn/platform-services/form-of-api"},next:{title:"Develop Environment",permalink:"/oj-lab-docusaurus/docs/category/develop-environment"}},s={},l=[{value:"Issue tracking",id:"issue-tracking",level:2},{value:"Can not referencing object in other package",id:"can-not-referencing-object-in-other-package",level:3}],p={toc:l},u="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"swag-api-document-generation"},"Swag API Document Generation"),(0,a.kt)("p",null,"OJ Lab use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/swaggo/swag"},"swag")," to generate Rest API document."),(0,a.kt)("h2",{id:"issue-tracking"},"Issue tracking"),(0,a.kt)("h3",{id:"can-not-referencing-object-in-other-package"},"Can not referencing object in other package"),(0,a.kt)("p",null,"Check the generate command of swag. You may need to update the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# \ud83d\udc4e From\nswag init -d application/server -ot go -o application/server/swaggo-gen\n# \ud83d\udc4d To\nswag init -d application/server,service/model -ot go -o application/server/swaggo-gen\n")),(0,a.kt)("p",null,"Which means you might forget to add the object's package (in this case is ",(0,a.kt)("inlineCode",{parentName:"p"},"service/model"),") to the ",(0,a.kt)("inlineCode",{parentName:"p"},"-d")," option."))}g.isMDXComponent=!0}}]);