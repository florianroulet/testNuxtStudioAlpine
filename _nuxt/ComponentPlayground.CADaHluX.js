import{u as m}from"./asyncData.BrPUkW3A.js";import{M as c,I as p,d as i,a9 as l,r as u,N as e,l as d}from"./entry.B6_tN1m7.js";import f from"./Ellipsis.S1QY5jQc.js";import y from"./ComponentPlaygroundData.U2cFHRRV.js";import"./TabsHeader.BJH3IirU.js";import"./ComponentPlaygroundProps.0cUe1ayn.js";import"./ProseH4.DwYYg5pJ.js";import"./ProseCodeInline.CN0XxN1O.js";import"./Badge.FWlOW1dT.js";import"./MDCSlot.DHFNrUK5.js";import"./slot.a6IbdKff.js";import"./ProseP.DJCcR7KM.js";import"./index.-OsUi_8U.js";import"./ComponentPlaygroundSlots.vue.CjIZmibc.js";import"./ComponentPlaygroundTokens.vue.bPd0f2nR.js";async function g(o){const t=c(o);{const{data:n}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>l(o.component)),n=u({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),V=d(h,[["__scopeId","data-v-7ae5a660"]]);export{V as default};