import{a as t}from"./Header.0c4adbe6.js";function o(n){return t.post("/login/cellphone",n)}function r(n){return t.post("/register/cellphone",n)}function a(n){return t.get("/captcha/sent?phone="+n.phone)}function c(){return t.get("/logout")}function s(){return t.get("/banner?type=2")}export{c as a,a as c,s as g,o as l,r};
