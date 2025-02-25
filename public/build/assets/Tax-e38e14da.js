import I from"./App-9c5d0f61.js";import{T as M,o as k,c as A,h as e,f as a,g as d,t as n,F as B,d as O,e as N,n as D,u as _,k as R,a as o,r as y,x as j}from"./app-d65cc6ad.js";import{_ as E}from"./AlertModal-e893babf.js";import{u as U}from"./useAlertModal-88d36c97.js";import{_ as S}from"./Table-b881dd59.js";import{T as Z,a as H,_ as $}from"./TableHeaderRowItem-3d0671a2.js";import{T as K,a as L,_ as T}from"./TableBodyRowItem-e958b373.js";import{_ as P}from"./Dropdown-7a5f5867.js";import{_ as q,a as F}from"./DropdownItem-fbe6bd1f.js";import{_ as z}from"./FormModalModified-f835994a.js";import{_ as G}from"./FormSelect-149292fa.js";import{t as u}from"./index-a4420621.js";import"./App-234a23c6.js";import"./Sidebar-07d71b9c.js";import"./Menu-1750e8ba.js";import"./ProfileModal-0c6a0985.js";import"./FormInput-cef6e779.js";import"./FormPhoneInput-44492bbe.js";/* empty css                      */import"./transition-ff0cbc41.js";import"./hidden-7933a274.js";import"./use-text-value-16cd3154.js";import"./micro-task-89dcd6af.js";import"./tabs-d7e92053.js";import"./LangToggle-cadbcda9.js";import"./MobileSidebar-5390b0de.js";import"./index-edb120b5.js";/* empty css              */import"./Sidebar-23e73abe.js";import"./Pagination-bcad5152.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./use-tree-walker-78033913.js";import"./Modal-065093c0.js";import"./FormImage-bf1974e0.js";import"./FormTextArea-723ba4e4.js";const J=o("button",{class:"inline-flex w-full justify-center rounded-md text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"},[o("span",{class:"hover:bg-[#F6F7F9] hover:rounded-full w-[fit-content] p-2"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[o("path",{fill:"currentColor",d:"M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2Z"})])])],-1),Q={__name:"TaxTable",props:{rows:{type:Array,required:!0}},emits:["edit","delete"],setup(w,{emit:h}){const p=w,{isOpenAlert:c,openAlert:f,confirmAlert:g}=U(),m=h,V=M({test:null});function v(s){m("edit",s)}const x=s=>{V.delete("/admin/tax-rates/"+s)},C=s=>s===p.rows.data.length-1;return(s,b)=>(k(),A(B,null,[e(S,{rows:w.rows},{default:a(()=>[e(Z,null,{default:a(()=>[e(H,null,{default:a(()=>[e($,{position:"first"},{default:a(()=>[d(n(s.$t("Name")),1)]),_:1}),e($,null,{default:a(()=>[d(n(s.$t("Tax rate")),1)]),_:1}),e($,null,{default:a(()=>[d(n(s.$t("Status")),1)]),_:1}),e($,{position:"last"})]),_:1})]),_:1}),e(K,null,{default:a(()=>[(k(!0),A(B,null,O(w.rows.data,(r,l)=>(k(),N(L,{key:l,class:D(C(l)?"":"border-b")},{default:a(()=>[e(T,{position:"first"},{default:a(()=>[d(n(r.name),1)]),_:2},1024),e(T,null,{default:a(()=>[d(n(r.percentage)+"%",1)]),_:2},1024),e(T,null,{default:a(()=>[d(n(s.$t(r.status)),1)]),_:2},1024),e(T,{position:"last"},{default:a(()=>[e(P,{align:"right",class:"mt-2"},{items:a(()=>[e(q,null,{default:a(()=>[e(F,{as:"button",onClick:t=>v(r.id)},{default:a(()=>[d(n(s.$t("Edit")),1)]),_:2},1032,["onClick"]),e(F,{as:"button",onClick:t=>_(f)(r.id)},{default:a(()=>[d(n(s.$t("Delete")),1)]),_:2},1032,["onClick"])]),_:2},1024)]),default:a(()=>[J]),_:2},1024)]),_:2},1024)]),_:2},1032,["class"]))),128))]),_:1})]),_:1},8,["rows"]),e(E,{modelValue:_(c),"onUpdate:modelValue":b[0]||(b[0]=r=>R(c)?c.value=r:null),onConfirm:b[1]||(b[1]=()=>_(g)(x)),label:s.$t("Delete row"),description:s.$t("Are you sure you want to delete this row? This action can not be undone")},null,8,["modelValue","label","description"])],64))}},W={class:"flex justify-between"},X={class:"text-xl mb-1"},Y={class:"mb-6 flex items-center text-sm leading-6 text-gray-600"},ee=o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},[o("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11v5m0 5a9 9 0 1 1 0-18a9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z"})],-1),te={class:"ml-1 mt-1"},oe={class:"bg-white rounded-md mb-4 py-4 px-4 flex grid grid-cols-2"},le={class:"text-xs"},Ue={__name:"Tax",props:{rows:Object,config:Object},setup(w){const h=w,p=y(!1),c=y("Add Tax Rate"),f=y("/admin/tax-rates"),g=y("post"),m={name:null,type:null,percentage:null,status:null},v=M({is_tax_inclusive:(l=>{const t=h.config.find(i=>i.key===l);return t?t.value:""})("is_tax_inclusive")}),x=(l,t={})=>{c.value=u("Add tax rate"),f.value="/admin/tax-rates",g.value="post",l!=null?(c.value=u("Edit tax rate"),f.value="/admin/tax-rates/"+l,g.value="put",C()):(m.name=null,m.percentage=null,m.status=null,p.value=!0)};function C(){j.get(f.value).then(l=>{const{data:t}=l;for(const i in t.item)m.hasOwnProperty(i)&&(m[i]=t.item[i]);p.value=!0}).catch(l=>{})}const s=y([{value:"1",label:u("Inclusive")},{value:"0",label:u("Exclusive")}]),b=[{inputType:"FormInput",name:"name",label:u("name"),type:"text",className:"sm:col-span-6"},{inputType:"FormInput",name:"percentage",label:u("Percentage"),type:"number",className:"sm:col-span-3"},{inputType:"FormSelect",name:"status",label:u("status"),options:[{value:"active",label:u("Active")},{value:"inactive",label:u("Inactive")}],className:"sm:col-span-3"}],r=async()=>{v.put("/admin/settings",{preserveScroll:!0})};return(l,t)=>(k(),N(I,null,{default:a(()=>[o("div",W,[o("div",null,[o("h2",X,n(l.$t("Tax rates")),1),o("p",Y,[ee,o("span",te,n(l.$t("Configure tax rates")),1)])]),o("div",null,[o("button",{onClick:t[0]||(t[0]=i=>x()),type:"button",class:"rounded-md bg-primary px-3 py-2 text-sm text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"},n(l.$t("Add tax rate")),1)])]),o("div",oe,[o("div",null,[o("h3",null,n(l.$t("Tax calculation method")),1),o("span",le,n(l.$t("Choose whether tax should be calculated inclusively or exclusively")),1)]),o("div",null,[e(G,{modelValue:_(v).is_tax_inclusive,"onUpdate:modelValue":t[1]||(t[1]=i=>_(v).is_tax_inclusive=i),name:"",type:"text",options:s.value,error:_(v).errors.is_tax_inclusive,class:D("sm:col-span-3")},null,8,["modelValue","options","error"]),o("button",{onClick:t[2]||(t[2]=i=>r()),type:"button",class:"rounded-md bg-primary mt-4 px-3 py-2 text-sm text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"},n(l.$t("Update")),1)])]),e(Q,{rows:h.rows,onEdit:x,onDelete:l.openAlert},null,8,["rows","onDelete"]),e(z,{modelValue:p.value,"onUpdate:modelValue":t[3]||(t[3]=i=>p.value=i),label:c.value,url:f.value,form:m,formInputs:b,formMethod:g.value,onCloseModal:t[4]||(t[4]=i=>p.value=!1)},null,8,["modelValue","label","url","formMethod"])]),_:1}))}};export{Ue as default};
