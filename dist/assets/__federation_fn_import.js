import{_ as l}from"./preload-helper.1c052cf7.js";const t={vue:{get:()=>()=>d("./__federation_shared_vue.js"),import:!0}},i=Object.create(null);async function v(e,o="default"){return i[e]?new Promise(r=>r(i[e])):a(e,o)}async function d(e){return l(()=>import(e),[])}async function a(e,o){let r=null;if(globalThis?.__federation_shared__?.[o]?.[e]){const s=globalThis.__federation_shared__[o][e],n=Object.keys(s)[0],u=Object.values(s)[0];if(t[e]?.requiredVersion){const _=(await l(()=>import("./__federation_lib_semver.js"),[])).satisfy;_(n,t[e].requiredVersion)?r=(await u.get())():console.log(`provider support ${e}(${n}) is not satisfied requiredVersion(${t[e].requiredVersion})`)}else r=(await u.get())()}return r?(i[e]=r,r):c(e)}async function c(e,o){if(t[e]?.import){const r=(await t[e].get())();return i[e]=r,r}else console.error("consumer config import=false,so cant use callback shared module")}export{v as importShared};
