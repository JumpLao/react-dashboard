import r,{useState as e,useContext as t}from"react";import{useHistory as n}from"react-router-dom";import{useEffectOnce as o}from"react-use";"undefined"!=typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var i=r.createContext({}),u=function(t){var u=t.children,c=t.forbiddenPath;void 0===c&&(c="/forbidden");var l=t.loadingComponent;void 0===l&&(l=function(){return r.createElement("div",null,"Loading")});var s=t.client;void 0===s&&(s={login:function(r){return Promise.resolve()},register:function(r){return Promise.resolve()},getUserInfo:function(){return Promise.resolve({id:1,name:"Mock"})},logout:function(){return Promise.resolve()}});var a=e(),f=a[0],m=a[1],d=e(!0),v=d[0],h=d[1],y=n();if(o(function(){!function(){try{var r=function(r,e){try{var t=function(r,e){try{var t=Promise.resolve(s.getUserInfo()).then(function(r){m(r)})}catch(r){return e()}return t&&t.then?t.then(void 0,e):t}(0,function(){console.log("Not authenticated")})}catch(r){return e(!0,r)}return t&&t.then?t.then(e.bind(null,!1),e.bind(null,!0)):e(!1,t)}(0,function(r,e){if(h(!1),r)throw e;return e});Promise.resolve(r&&r.then?r.then(function(){}):void 0)}catch(r){return Promise.reject(r)}}()}),v)return l();var b=function(){try{return Promise.resolve(s.getUserInfo()).then(function(r){return m(r),r})}catch(r){return Promise.reject(r)}},P=Object.assign({},{user:f,onForbidden:function(){return y.push(c)}},s,{getUserInfo:b,login:function(r){try{return Promise.resolve(s.login(r)).then(function(){return Promise.resolve(b())})}catch(r){return Promise.reject(r)}},logout:function(){try{return Promise.resolve(s.logout()).then(function(){m(null)})}catch(r){return Promise.reject(r)}}});return r.createElement(i.Provider,{value:P},u)},c=function(){var r=t(i);if(!r)throw new Error("useAuth should be use in side auth context");return r},l=function(r){var e=c(),t=e.onForbidden;e.user||(r?r():t())};export{u as AuthProvider,c as useAuth,l as useAuthenticated};
//# sourceMappingURL=index.mjs.map
