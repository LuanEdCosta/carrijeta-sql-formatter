(this["webpackJsonpcarrijeta-sql-formatter"]=this["webpackJsonpcarrijeta-sql-formatter"]||[]).push([[0],{42:function(e){e.exports=JSON.parse('{"copy":"Copiar"}')},43:function(e){e.exports=JSON.parse('{"charCount":"{{count}}","sqlPlaceholder":"Escreva seu SQL aqui","formatting":"Formatando SQL...","importSqlFile":"Importar Arquivo SQL"}')},44:function(e){e.exports=JSON.parse('{"appName":"Carrijeta SQL Formatter"}')},45:function(e){e.exports=JSON.parse('{"readFile":"N\xe3o foi poss\xedvel ler o arquivo. Tente em outro navegador ou abra uma issue no reposit\xf3rio deste projeto."}')},46:function(e){e.exports=JSON.parse('{"default":"SQL Padr\xe3o","delphi":"Delphi SQL"}')},49:function(e,n,t){e.exports=t(71)},71:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(24),c=t.n(o),i=t(13),u=t(1),l=t(39),f=t(16),d=t(3);function m(){var e=Object(d.a)(["\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    outline: 0;\n  }\n\n  html {\n    font-size: 62.5%;\n  }\n\n  body {\n    font-family: 'Roboto Mono', monospace;\n    background: ",";\n    height: 100%;\n    ","\n  }\n\n  textarea, input, button, code {\n    font-family: 'Roboto Mono', monospace;\n    ","\n  }\n"]);return m=function(){return e},e}function s(){var e=Object(d.a)(["\n  color: ",";\n  line-height: 1.5;\n  font-size: 1.6rem;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n"]);return s=function(){return e},e}var b=Object(u.c)(s(),(function(e){return e.theme.primaryText})),p=Object(u.b)(m(),(function(e){return e.theme.background}),b,b),h=t(9),g=t(11),x=t(14),v="default",j="delphi";function O(){var e=Object(d.a)(["\n  border-radius: 100%;\n  overflow: hidden;\n  font-size: 2rem;\n  width: 4rem;\n  height: 4rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: background 0.2s ease-in-out;\n  margin-left: 1rem;\n  &:hover {\n    background-color: ",";\n  }\n"]);return O=function(){return e},e}function E(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: flex-end;\n  flex: 1;\n"]);return E=function(){return e},e}function y(){var e=Object(d.a)(["\n  text-decoration: none;\n  color: ",";\n  text-transform: uppercase;\n  font-size: 2rem;\n  font-weight: bold;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]);return y=function(){return e},e}function k(){var e=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  padding: 0 5%;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: ","px;\n  z-index: 1;\n  background-color: ",";\n  border-bottom: 1px solid ",";\n"]);return k=function(){return e},e}var w=u.d.div(k(),56,(function(e){return e.theme.background2}),(function(e){return e.theme.border})),S=u.d.a(y(),(function(e){return e.theme.primaryText})),T=u.d.div(E()),C=u.d.a(O(),(function(e){return e.theme.hoverAlpha01})),R=function(e){return localStorage.setItem("THEME_KEY",JSON.stringify(e)),{type:"SET_THEME",payload:e}},q="DARK",z="LIGHT",N={accent:"#f4a022",primaryText:"#ffffff",secondaryText:"#ccc",background:"#333333",background2:"#262626",background3:"#222222",border:"#444444",scrollbar:"#555555",placeholder:"rgba(255, 255, 255, 0.6)",hoverAlpha01:"rgba(255, 255, 255, 0.1)"},A={accent:"#f4a022",primaryText:"#313131",secondaryText:"#616161",background:"#ffffff",background2:"#f2f2f2",background3:"#eeeeee",border:"#e2e2e2",scrollbar:"#aaaaaa",placeholder:"rgba(0, 0, 0, 0.6)",hoverAlpha01:"rgba(0, 0, 0, 0.1)"},F=function(){var e=function(e){var n=Object(i.b)();return Object(r.useCallback)((function(t){return n(e(t))}),[n,e])}(R),n=Object(i.c)((function(e){return e.ThemeReducer})).name;return Object(r.useCallback)((function(){var t=n===z;e({name:t?q:z,colors:t?N:A})}),[n,e])},J=function(e,n,t,a){return Object(r.useCallback)((function(r){var a="";switch(!0){case n===v&&t===j:a=function(e){if(!e||!e.trim())return"";var n=e.split("\n");if(!(n.length>1))return"'".concat(e,"';");var t=Array(n.length).join(".").split("."),r="",a=n.map((function(e){var n=new RegExp("'","gi");return e.replace(n,"'#39'")}));return(a.forEach((function(e){e.length>r.length&&(r=e)})),a.forEach((function(e,n){var a=r.length-e.length+4;t[n]=Array(a).join(" ")})),a.map((function(e,n){var r=t[n],o=n===a.length-1,c=!e||!e.trim();return o?"'".concat(e).concat(r,"';"):c?"'".concat(r,"'#13+"):"'".concat(e).concat(r,"'#13+")})).join("\n"))}(r);break;case n===j&&t===v:a=function(e){if(!e||!e.trim())return"";var n=e,t=new RegExp(";","gi"),r=new RegExp("#13","gi"),a=new RegExp("'","gi"),o=new RegExp("#39","gi"),c=new RegExp("\\+","gi");return n=(n=(n=(n=(n=(n=n.replace(t,"")).replace(r,"")).replace(a,"")).replace(o,"'")).replace(c,"")).split("\n").map((function(e){return e.trimRight()})).join("\n")}(r);break;default:a=""}e(a)}),[n,a,t,e])},L=function(){var e=Object(x.b)().t,n=F(),t=Object(u.e)();return a.a.createElement(w,null,a.a.createElement(S,{href:"/"},e("appName")),a.a.createElement(T,null,a.a.createElement(C,{href:"https://github.com/LuanEdCosta/carrijeta-sql-formatter",target:"_blank"},a.a.createElement(g.a,{icon:["fab","github"],color:t.primaryText})),a.a.createElement(C,{onClick:n},a.a.createElement(g.a,{icon:"palette",color:t.primaryText}))))};function I(){var e=Object(d.a)(["\n  margin-top: ","px;\n"]);return I=function(){return e},e}var H=u.d.div(I(),56);function M(){var e=Object(d.a)(["\n  &:hover {\n    ::-webkit-scrollbar {\n      display: block;\n    }\n  }\n\n  ::-webkit-scrollbar {\n    background: ",";\n    width: 12px;\n    height: 12px;\n    display: none;\n  }\n\n  ::-webkit-scrollbar-button {\n    display: none;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background: ",";\n    border-radius: 3px;\n  }\n\n  ::-webkit-scrollbar-track {\n    background: ",";\n  }\n\n  ::-webkit-scrollbar-corner {\n    display: none;\n  }\n\n  ::-webkit-resizer {\n    display: none;\n  }\n"]);return M=function(){return e},e}var Q=Object(u.c)(M(),(function(e){return e.theme.background2}),(function(e){return e.theme.scrollbar}),(function(e){return e.theme.background3}));function B(){var e=Object(d.a)(["\n  background: ",";\n  color: ",";\n  text-transform: uppercase;\n  font-size: 1.8rem;\n  padding: 2.4rem;\n  overflow: auto;\n  white-space: pre;\n  flex: 1;\n  min-height: 160px;\n  max-height: 100%;\n  max-width: 100%;\n  ","\n"]);return B=function(){return e},e}function P(){var e=Object(d.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  max-height: 100%;\n  overflow: hidden;\n"]);return P=function(){return e},e}function _(){var e=Object(d.a)(["\n  color: ",";\n  margin-left: auto;\n  display: inline;\n  span {\n    margin-left: 0.8rem;\n  }\n"]);return _=function(){return e},e}function G(){var e=Object(d.a)(["\n  display: flex;\n  padding: 8px 24px;\n"]);return G=function(){return e},e}function K(){var e=Object(d.a)(["\n  background: ",";\n  padding: 2.4rem;\n  font-size: 1.8rem;\n  text-transform: uppercase;\n  overflow: auto;\n  white-space: pre;\n  resize: none;\n  border: none;\n  flex: 1;\n  min-height: 160px;\n  max-height: 100%;\n  max-width: 100%;\n  ","\n"]);return K=function(){return e},e}function D(){var e=Object(d.a)(["\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin-top: 0.4rem;\n  margin-right: 0.4rem;\n"]);return D=function(){return e},e}function Y(){var e=Object(d.a)(["\n  border-right: 1px solid ",";\n  background: ",";\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n"]);return Y=function(){return e},e}function U(){var e=Object(d.a)(["\n  display: flex;\n  flex: 1;\n  max-height: 100%;\n  overflow: hidden;\n  @media only screen and (max-width: ",") {\n    flex-direction: column;\n  }\n"]);return U=function(){return e},e}function V(){var e=Object(d.a)(["\n  margin-left: auto;\n"]);return V=function(){return e},e}function W(){var e=Object(d.a)(["\n  border: 1px solid ",";\n"]);return W=function(){return e},e}function X(){var e=Object(d.a)(["\n  border-radius: ",";\n  padding: ",";\n  width: ",";\n  height: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: nowrap;\n  transition: background 0.2s ease-in-out;\n  cursor: pointer;\n  user-select: none;\n  font-weight: bold;\n  text-transform: uppercase;\n  span {\n    margin-left: 1.6rem;\n  }\n  &:hover {\n    background: ",";\n  }\n"]);return X=function(){return e},e}function Z(){var e=Object(d.a)(["\n  margin: 0 16px;\n"]);return Z=function(){return e},e}function $(){var e=Object(d.a)(["\n  display: flex;\n  flex: 1;\n  @media only screen and (max-width: ",") {\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n  }\n"]);return $=function(){return e},e}function ee(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: flex-end;\n  flex: 1;\n"]);return ee=function(){return e},e}function ne(){var e=Object(d.a)(["\n  border-bottom: 1px solid ",";\n  padding: 8px;\n  display: flex;\n  justify-content: center;\n  @media only screen and (max-width: ",") {\n    align-items: center;\n    flex-direction: column;\n  }\n"]);return ne=function(){return e},e}function te(){var e=Object(d.a)(["\n  border: 1px solid ",";\n  background: ",";\n  border-radius: 8px;\n  min-height: 450px;\n  height: 70vh;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n"]);return te=function(){return e},e}function re(){var e=Object(d.a)(["\n  display: flex;\n  margin-bottom: 24px;\n"]);return re=function(){return e},e}function ae(){var e=Object(d.a)(["\n  padding: 24px 5%;\n"]);return ae=function(){return e},e}function oe(){var e=Object(d.a)(["\n  height: 100%;\n"]);return oe=function(){return e},e}var ce="850px",ie=Object(u.d)(H)(oe()),ue=u.d.div(ae()),le=u.d.div(re()),fe=u.d.div(te(),(function(e){return e.theme.border}),(function(e){return e.theme.background2})),de=u.d.div(ne(),(function(e){return e.theme.border}),ce),me=u.d.div(ee()),se=u.d.div($(),ce),be=u.d.div(Z()),pe=u.d.div(X(),(function(e){return e.round?"100%":"5px"}),(function(e){return e.round?"0":"8px 16px"}),(function(e){return e.round?"4rem":"auto"}),(function(e){return e.round?"4rem":"auto"}),(function(e){return e.theme.hoverAlpha01})),he=Object(u.d)(pe)(W(),(function(e){return e.theme.border})),ge=Object(u.d)(pe)(V()),xe=u.d.div(U(),ce),ve=u.d.div(Y(),(function(e){return e.theme.border}),(function(e){return e.theme.background3})),je=Object(u.d)(pe)(D()),Oe=u.d.textarea(K(),(function(e){return e.theme.background3}),Q),Ee=u.d.div(G()),ye=u.d.div(_(),(function(e){return e.theme.secondaryText})),ke=u.d.div(P()),we=u.d.code(B(),(function(e){return e.theme.background3}),(function(e){var n=e.theme;return e.usePlaceholderStyle?n.placeholder:n.primaryText}),Q),Se=function(){var e,n=Object(x.b)(["Home","SqlTypes"]).t,t=Object(r.useRef)(null),o=Object(r.useRef)(!1),c=Object(r.useState)(""),i=Object(h.a)(c,2),u=i[0],l=i[1],f=Object(r.useState)(""),d=Object(h.a)(f,2),m=d[0],s=d[1],b=Object(r.useState)(!1),p=Object(h.a)(b,2),O=p[0],E=p[1],y=Object(r.useState)(v),k=Object(h.a)(y,2),w=k[0],S=k[1],T=Object(r.useState)(j),C=Object(h.a)(T,2),R=C[0],q=C[1],z=(e="outputText",Object(r.useCallback)((function(){var n=document.getElementById(e);if(window.getSelection&&document.createRange){var t=window.getSelection(),r=document.createRange();r.selectNodeContents(n),t.removeAllRanges(),t.addRange(r)}else if(document.body.createTextRange){var a=document.body.createTextRange();a.moveToElementText(n),a.select()}document.execCommand("copy")}),[e])),N=J(s,w,R),A=function(e,n,t){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:600,o=Object(r.useState)(0),c=Object(h.a)(o,2),i=c[0],u=c[1],l=Object(r.useCallback)((function(r){clearTimeout(i),e&&e(r),t&&t(!0),u(setTimeout((function(){n&&n(r),t&&t(!1)}),a))}),[n,a,e,t,i]);return l}(l,N,E),F=Object(r.useCallback)((function(){l(""),s(""),E(!1),t.current.focus()}),[]),I=function(e){var n=Object(x.b)("Error").t;return Object(r.useCallback)((function(t){if("function"===typeof window.FileReader){var r=Object(h.a)(t.target.files,1)[0],a=new FileReader;a.onload=e,a.readAsText(r)}else alert(n("readFile"))}),[e,n])}((function(e){A(e.target.result)})),H=Object(r.useCallback)((function(){S(R),q(w),l(m),s(u),o.current=!0}),[u,w,m,R]),M=Object(r.useCallback)((function(){o.current&&(A(u),o.current=!1)}),[u,A]);return Object(r.useEffect)(M,[w,R]),a.a.createElement(ie,null,a.a.createElement(L,null),a.a.createElement(ue,null,a.a.createElement(le,null,a.a.createElement(he,{as:"label",htmlFor:"fileInput"},a.a.createElement(g.a,{icon:"file-upload"}),a.a.createElement("span",null,n("importSqlFile")),a.a.createElement("input",{style:{display:"none"},onChange:I,accept:".sql",id:"fileInput",type:"file"}))),a.a.createElement(fe,null,a.a.createElement(de,null,a.a.createElement(me,null,a.a.createElement(pe,null,n("SqlTypes:".concat(w)))),a.a.createElement(be,null,a.a.createElement(pe,{onClick:H,round:!0},a.a.createElement(g.a,{icon:"exchange-alt"}))),a.a.createElement(se,null,a.a.createElement(pe,null,n("SqlTypes:".concat(R))),a.a.createElement(ge,{onClick:z},a.a.createElement(g.a,{icon:"copy"}),a.a.createElement("span",null,n("Glossary:copy"))))),a.a.createElement(xe,null,a.a.createElement(ve,null,!!u&&a.a.createElement(je,{onClick:F,round:!0},a.a.createElement(g.a,{icon:"times"})),a.a.createElement(Oe,{ref:t,value:u,onChange:function(e){return A(e.target.value)},placeholder:n("sqlPlaceholder"),spellCheck:"false",autoCorrect:"off",autoComplete:"off",autoCapitalize:"off"}),a.a.createElement(Ee,null,a.a.createElement(ye,null,a.a.createElement(g.a,{icon:"text-width"}),a.a.createElement("span",null,n("charCount",{count:u.length}))))),a.a.createElement(ke,null,a.a.createElement(we,{usePlaceholderStyle:O,id:"outputText"},O?n("formatting"):m))))))},Te=function(){var e=Object(i.c)((function(e){return e.ThemeReducer})).colors;return(a.a.createElement(u.a,{theme:e},a.a.createElement(p,null),a.a.createElement(l.a,{basename:"/carrijeta-sql-formatter"},a.a.createElement(f.c,null,a.a.createElement(f.a,{path:"/",component:Se})))))},Ce=t(21),Re=t(48),qe=localStorage.getItem("THEME_KEY"),ze=qe?JSON.parse(qe):{name:q,colors:N},Ne=Object(Ce.b)({ThemeReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload;switch(t){case"SET_THEME":return Object(Re.a)({},e,{},r);default:return e}}}),Ae=Object(Ce.c)(Ne),Fe=t(22),Je=t(41),Le=t(17);Fe.b.add(Je.a,Le.d,Le.b,Le.e,Le.f,Le.c,Le.a);var Ie=t(29),He=t(42),Me=t(43),Qe={Common:t(44),Glossary:He,Home:Me,Error:t(45),SqlTypes:t(46)};Ie.a.use(x.a).init({resources:{"pt-BR":Qe},fallbackLng:"pt-BR",lng:"pt-BR",defaultNS:"Common",debug:!1});Ie.a;c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(i.a,{store:Ae},a.a.createElement(Te,null))),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.16a980a2.chunk.js.map