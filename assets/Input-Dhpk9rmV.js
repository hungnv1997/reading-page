import{c as r,_ as u,e as l,p as n,k as o,f as d,t as i,N as m,n as y,Y as p}from"./index-DSxPNQH3.js";/**
 * @license lucide-vue-next v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=r("pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-vue-next v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=r("plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-vue-next v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=r("trash-2",[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]]),c={class:"input-wrapper"},f=["for"],b={class:"relative"},h=["id","type","value","placeholder","disabled"],k={key:0,class:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},v={key:1,class:"mt-2 text-sm text-red-600"},$={key:2,class:"mt-2 text-sm text-gray-500"},g={__name:"Input",props:{id:{type:String,default:()=>`input-${Date.now()}-${Math.random()}`},modelValue:{type:[String,Number],default:""},type:{type:String,default:"text"},label:{type:String,default:""},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},error:{type:String,default:""},hint:{type:String,default:""}},emits:["update:modelValue","blur","focus","enter"],setup(e){return(a,t)=>(n(),l("div",c,[e.label?(n(),l("label",{key:0,for:e.id,class:"input-label block text-sm font-medium mb-2"},i(e.label),9,f)):o("",!0),d("div",b,[d("input",{id:e.id,type:e.type,value:e.modelValue,placeholder:e.placeholder,disabled:e.disabled,class:y(["input",{"pl-10":a.$slots.icon,"pr-10":e.clearable&&e.modelValue,"border-red-500":e.error}]),onInput:t[0]||(t[0]=s=>a.$emit("update:modelValue",s.target.value)),onBlur:t[1]||(t[1]=s=>a.$emit("blur")),onFocus:t[2]||(t[2]=s=>a.$emit("focus")),onKeydown:t[3]||(t[3]=m(s=>a.$emit("enter"),["enter"]))},null,42,h),a.$slots.icon?(n(),l("div",k,[p(a.$slots,"icon",{},void 0)])):o("",!0),e.clearable&&e.modelValue?(n(),l("button",{key:1,type:"button",class:"absolute inset-y-0 right-0 pr-3 flex items-center",onClick:t[4]||(t[4]=s=>a.$emit("update:modelValue",""))},t[5]||(t[5]=[d("span",{class:"text-gray-400 hover:text-gray-600"},"✕",-1)]))):o("",!0)]),e.error?(n(),l("p",v,i(e.error),1)):o("",!0),e.hint?(n(),l("p",$,i(e.hint),1)):o("",!0)]))}},I=u(g,[["__scopeId","data-v-a519aef3"]]);export{I,S as P,B as T,M as a};
