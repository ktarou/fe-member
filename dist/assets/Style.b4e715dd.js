import{u as n,J as m,M as h}from"./index.cc481260.js";import{u as x,O as u,a9 as _}from"./CheckboxCell.18592128.js";import{openBlock as a,createBlock as p,withCtx as c,createElementVNode as t,createElementBlock as g,renderList as b,createVNode as l,toDisplayString as f,Fragment as k,normalizeClass as w,unref as y,createTextVNode as B}from"./__federation_shared_vue.js";const S=t("h1",{class:"text-4xl md:text-6xl text-center text-white font-bold mt-6 mb-3 md:mt-12 md:mb-6"}," Pick a style\u2026 ",-1),v=t("h2",{class:"text-xl md:text-2xl text-center text-white mb-12 md:mb-24"},[B(" Style switching with a single "),t("code",{class:"px-1.5 py-0.5 rounded bg-white bg-opacity-20"},"store.dispatch()")],-1),C={class:"grid gap-6 grid-cols-1 lg:grid-cols-2 px-6 max-w-6xl mx-auto"},M={class:"mb-3 md:mb-6"},N=["src"],V={class:"text-xl md:text-2xl font-black"},L=t("h2",{class:"text-lg md:text-xl"}," & Dark mode ",-1),$={class:"mx-auto mt-12 mb-6"},j={href:"https://justboil.me"},P={__name:"Style",setup(D){const i=[{slug:"white",title:"White"},{slug:"basic",title:"Basic"}],s=x();s.dispatch("darkMode",!1);const d=n(),r=o=>{s.dispatch("setStyle",o),s.dispatch("darkMode",!1),d.push("/dashboard")};return(o,E)=>(a(),p(h,{class:w([y(_),"min-h-screen"])},{default:c(()=>[S,v,t("div",C,[(a(),g(k,null,b(i,e=>l(u,{key:e,class:"cursor-pointer shadow-2xl",rounded:"rounded-2xl",hoverable:"",onClick:J=>r(e.slug)},{default:c(()=>[t("div",M,[t("img",{src:`https://static.justboil.me/templates/one/small/${e.slug}.png`,width:"955",height:"540"},null,8,N)]),t("h1",V,f(e.title),1),L]),_:2},1032,["onClick"])),64))]),t("div",$,[t("a",j,[l(m,{class:"w-auto h-8 md:h-10 mx-auto text-white"})])])]),_:1},8,["class"]))}};export{P as default};
