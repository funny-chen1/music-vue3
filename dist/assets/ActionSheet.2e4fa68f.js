import{g as d}from"./data.a9af6471.js";import{_ as p,u as m,f as u,g as f,t as h,r,o as v,c as g,w as y,d as c,l as w,j as l}from"./index.555d4081.js";const S={props:{obj:{type:Object,default:null},show:!1},setup(_,{emit:t}){const o=m(),e=u({show:!1,songUrl:null}),n=()=>{t("close")},i=async s=>{n();const a=await d({id:s});e.songUrl=a.data[0].url,o.dispatch("playMusic",e.songUrl)};return f(async()=>{}),{...h(e),playSong:i,close:n}}},b={class:"content"},j={class:"action"};function k(_,t,o,e,n,i){const s=r("van-icon"),a=r("van-action-sheet");return v(),g(a,{show:o.show,title:o.obj.name,"close-on-click-action":"",onClose:e.close,closeable:!1},{default:y(()=>[c("div",b,[c("span",null,w(o.obj.alia[0]),1),c("div",j,[l(s,{size:"2rem",name:"play-circle-o",onClick:t[0]||(t[0]=x=>e.playSong(o.obj.id))}),l(s,{size:"2rem",name:"like-o"}),l(s,{size:"2rem",name:"add-o"})])])]),_:1},8,["show","title","onClose"])}const z=p(S,[["render",k],["__scopeId","data-v-644790a7"]]);export{z as A};