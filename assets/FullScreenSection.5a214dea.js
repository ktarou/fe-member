import{useStore as c}from"./__federation_shared_vuex.js";import{am as l,an as i,ao as u,a7 as d}from"./CheckboxCell.94188d63.js";import{M as m}from"./index.d702f8c4.js";import{computed as o,openBlock as g,createBlock as p,withCtx as f,renderSlot as w,normalizeClass as _,unref as k}from"./__federation_shared_vue.js";const M={__name:"FullScreenSection",props:{bg:{type:String,required:!0,validator:r=>["login","error"].includes(r)}},setup(r){const t=r,s=c(),e=o(()=>s.state.darkMode),a=o(()=>{switch(t.bg){case"login":return e.value?u:d;case"error":return e.value?l:i}return""});return(n,B)=>(g(),p(m,{class:_(["flex h-screen items-center justify-center",k(a)])},{default:f(()=>[w(n.$slots,"default",{cardClass:"w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl",cardRounded:"rounded-lg"})]),_:3},8,["class"]))}};export{M as _};
