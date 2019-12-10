import e,{useState as r,useContext as t}from"react";var u=e.createContext({});export default{AuthProvider:function(t){var n=t.children,o=r();return e.createElement(u.Provider,{value:{user:o[0]}},n)},useAuth:function(){var e=t(u);if(!e)throw new Error("useAuth should be use in side auth context");return e}};
//# sourceMappingURL=index.mjs.map
