import{H as y}from"./Header.0c4adbe6.js";import{l as b,r as V,c as w}from"./index.289f6229.js";import{_ as D,q as k,g as S,h as C,i as q,t as U,r as u,o as m,c as g,a as r,b as t,w as n,T as c,p as I,n as N,d as p}from"./index.41052b4a.js";const B=""+new URL("vite.4a748afd.svg",import.meta.url).href;const L={components:{Header:y},setup(){k(null);const o=S(),e=C({type:"login",loginData:{phone:"",password:""},registerData:{phone:"",password:"",nickname:"",captcha:""}});q(()=>{});const _=async s=>{if(e.type=="login"){const i=await b(s);i.code===200&&(localStorage.setItem("token",JSON.stringify(i)),o.push("/"))}else await V(s),res.code===200?c.success("\u6CE8\u518C\u6210\u529F"):c.fail(res.message)},l=async()=>{e.registerData.phone&&(await w({phone:e.registerData.phone}),res.code===200&&c.success("\u53D1\u9001\u6210\u529F\uFF0C\u8BF7\u6CE8\u610F\u67E5\u6536\uFF01"))},f=()=>{e.loginData.phone="",e.loginData.password=""},v=s=>{e.type=s};return{...U(e),toggle:v,onSubmit:_,reset:f,sendCaptcha:l}}},R=o=>(I("data-v-f4e90552"),o=o(),N(),o),T={class:"bg"},j={class:"main"},H=R(()=>r("div",{class:"logo"},[r("img",{src:B,alt:""})],-1)),$={key:0,class:"login-box",ref:"loginForm"},z={style:{margin:"16px"}},E=p(" \u767B\u5F55 "),F={style:{margin:"16px"}},J=p(" \u91CD\u7F6E "),M={key:1,class:"login-box"},O=p("\u53D1\u9001\u9A8C\u8BC1\u7801"),A={style:{margin:"16px"}},G=p(" \u6CE8\u518C "),K=p("\u8FD4\u56DE\u9996\u9875");function P(o,e,_,l,f,v){const s=u("van-field"),i=u("van-cell-group"),d=u("van-button"),h=u("van-form");return m(),g("div",T,[r("div",j,[H,o.type=="login"?(m(),g("div",$,[t(h,{onSubmit:l.onSubmit},{default:n(()=>[t(i,{inset:""},{default:n(()=>[t(s,{modelValue:o.loginData.phone,"onUpdate:modelValue":e[0]||(e[0]=a=>o.loginData.phone=a),name:"phone",label:"\u624B\u673A\u53F7",placeholder:"\u624B\u673A\u53F7",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"}]},null,8,["modelValue"]),t(s,{modelValue:o.loginData.password,"onUpdate:modelValue":e[1]||(e[1]=a=>o.loginData.password=a),type:"password",name:"password",label:"\u5BC6\u7801",placeholder:"\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"}]},null,8,["modelValue"])]),_:1}),r("div",z,[t(d,{round:"",block:"",type:"primary","native-type":"submit"},{default:n(()=>[E]),_:1})]),r("div",F,[t(d,{round:"",block:"",type:"primary",onClick:e[2]||(e[2]=a=>l.reset())},{default:n(()=>[J]),_:1})])]),_:1},8,["onSubmit"]),r("a",{href:"javascript:void(0)",onClick:e[3]||(e[3]=a=>l.toggle("resgister"))},"\u7ACB\u5373\u6CE8\u518C")],512)):(m(),g("div",M,[t(h,{onSubmit:l.onSubmit},{default:n(()=>[t(i,{inset:""},{default:n(()=>[t(s,{modelValue:o.registerData.phone,"onUpdate:modelValue":e[5]||(e[5]=a=>o.registerData.phone=a),name:"phone",center:"",label:"\u624B\u673A\u53F7",placeholder:"\u624B\u673A\u53F7",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"}]},{button:n(()=>[t(d,{size:"small",type:"primary",onClick:e[4]||(e[4]=a=>l.sendCaptcha())},{default:n(()=>[O]),_:1})]),_:1},8,["modelValue"]),t(s,{modelValue:o.registerData.password,"onUpdate:modelValue":e[6]||(e[6]=a=>o.registerData.password=a),type:"password",name:"password",label:"\u5BC6\u7801",placeholder:"\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"}]},null,8,["modelValue"]),t(s,{modelValue:o.registerData.nickname,"onUpdate:modelValue":e[7]||(e[7]=a=>o.registerData.nickname=a),name:"nickname",label:"\u6635\u79F0",placeholder:"\u6635\u79F0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6635\u79F0"}]},null,8,["modelValue"]),t(s,{modelValue:o.registerData.captcha,"onUpdate:modelValue":e[8]||(e[8]=a=>o.registerData.captcha=a),name:"captcha",label:"\u9A8C\u8BC1\u7801",placeholder:"\u9A8C\u8BC1\u7801",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"}]},null,8,["modelValue"])]),_:1}),r("div",A,[t(d,{round:"",block:"",type:"primary","native-type":"submit"},{default:n(()=>[G]),_:1})])]),_:1},8,["onSubmit"]),r("a",{href:"javascript:void(0)",onClick:e[9]||(e[9]=a=>l.toggle("login"))},"\u5DF2\u6709\u8D26\u53F7")])),t(d,{color:"#7232dd",plain:"",to:"home"},{default:n(()=>[K]),_:1})])])}const Y=D(L,[["render",P],["__scopeId","data-v-f4e90552"]]);export{Y as default};