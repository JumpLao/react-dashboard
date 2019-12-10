var e,t=require("react"),r=(e=t)&&"object"==typeof e&&"default"in e?e.default:e,u=r.createContext({});module.exports={AuthProvider:function(e){var n=e.children,o=t.useState();return r.createElement(u.Provider,{value:{user:o[0]}},n)},useAuth:function(){var e=t.useContext(u);if(!e)throw new Error("useAuth should be use in side auth context");return e}};
//# sourceMappingURL=index.js.map
