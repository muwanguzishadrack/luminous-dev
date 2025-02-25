import j from"./App-234a23c6.js";import{T as q,r as $,O as M,o as d,c as f,a as e,w as O,v as D,u,b as x,h as t,f as s,g as l,t as i,F as k,d as L,e as T,n as Q,k as R,l as Z,i as z}from"./app-d65cc6ad.js";import{d as H}from"./debounce-0382ca79.js";import{_ as I}from"./AlertModal-e893babf.js";import{u as U}from"./useAlertModal-88d36c97.js";import{_ as E}from"./Table-b881dd59.js";import{T as G,a as J,_ as h}from"./TableHeaderRowItem-3d0671a2.js";import{T as K,a as P,_ as w}from"./TableBodyRowItem-e958b373.js";import{_ as W}from"./Dropdown-7a5f5867.js";import{_ as X,a as C}from"./DropdownItem-fbe6bd1f.js";import"./Sidebar-07d71b9c.js";import"./Menu-1750e8ba.js";import"./ProfileModal-0c6a0985.js";import"./FormInput-cef6e779.js";import"./FormPhoneInput-44492bbe.js";/* empty css                      */import"./FormSelect-149292fa.js";import"./index-a4420621.js";import"./hidden-7933a274.js";import"./use-text-value-16cd3154.js";import"./transition-ff0cbc41.js";import"./micro-task-89dcd6af.js";import"./tabs-d7e92053.js";import"./LangToggle-cadbcda9.js";import"./MobileSidebar-5390b0de.js";import"./index-edb120b5.js";/* empty css              */import"./_baseGetTag-670fd5c8.js";import"./Pagination-bcad5152.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./use-tree-walker-78033913.js";const Y={class:"md:bg-white flex items-center border border-primary md:border-none md:shadow-sm h-12 md:h-10 w-full md:w-80 rounded-[0.5rem] mb-6 text-xl md:text-sm"},ee=e("span",{class:"pl-3"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m15 15l6 6m-11-4a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"})])],-1),te=["placeholder"],se=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zm3.7 12.3c.4.4.4 1 0 1.4c-.4.4-1 .4-1.4 0L12 13.4l-2.3 2.3c-.4.4-1 .4-1.4 0c-.4-.4-.4-1 0-1.4l2.3-2.3l-2.3-2.3c-.4-.4-.4-1 0-1.4c.4-.4 1-.4 1.4 0l2.3 2.3l2.3-2.3c.4-.4 1-.4 1.4 0c.4.4.4 1 0 1.4L13.4 12l2.3 2.3z"})],-1),ae=[se],oe={key:1,class:"pr-2"},ie=Z('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="0 12 12;90 12 12;180 12 12;270 12 12"></animateTransform><animate attributeName="opacity" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"></animate></circle><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" begin="0.2s" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="30 12 12;120 12 12;210 12 12;300 12 12"></animateTransform><animate attributeName="opacity" begin="0.2s" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"></animate></circle><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" begin="0.4s" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="60 12 12;150 12 12;240 12 12;330 12 12"></animateTransform><animate attributeName="opacity" begin="0.4s" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"></animate></circle></svg>',1),re=[ie],le={class:"w-[20em] truncate"},ne=e("button",{class:"inline-flex w-full justify-center rounded-md text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"},[e("span",{class:"hover:bg-[#F6F7F9] hover:rounded-full w-[fit-content] p-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2Z"})])])],-1),de={__name:"FaqTable",props:{rows:{type:Object,required:!0},filters:{type:Object}},emits:["edit","delete"],setup(c,{emit:_}){const n=c,{isOpenAlert:p,openAlert:V,confirmAlert:A}=U(),B=q({test:null}),N=a=>{B.delete("/admin/faqs/"+a)},F=a=>a===n.rows.data.length-1,m=$({search:n.filters.search}),v=$(!1),S=()=>{m.value.search=null,g()},b=H(()=>{v.value=!0,g()},1e3),g=()=>{const a=window.location.pathname;M.visit(a,{method:"get",data:m.value})};return(a,r)=>(d(),f(k,null,[e("div",Y,[ee,O(e("input",{onInput:r[0]||(r[0]=(...o)=>u(b)&&u(b)(...o)),"onUpdate:modelValue":r[1]||(r[1]=o=>m.value.search=o),type:"text",class:"outline-none px-4 w-full",placeholder:a.$t("Search FAQs")},null,40,te),[[D,m.value.search]]),v.value===!1&&m.value.search?(d(),f("button",{key:0,onClick:S,type:"button",class:"pr-2"},ae)):x("",!0),v.value?(d(),f("span",oe,re)):x("",!0)]),t(E,{rows:c.rows},{default:s(()=>[t(G,null,{default:s(()=>[t(J,null,{default:s(()=>[t(h,{position:"first"},{default:s(()=>[l(i(a.$t("Question")),1)]),_:1}),t(h,null,{default:s(()=>[l(i(a.$t("Answer")),1)]),_:1}),t(h,null,{default:s(()=>[l(i(a.$t("Status")),1)]),_:1}),t(h,{position:"last"})]),_:1})]),_:1}),t(K,null,{default:s(()=>[(d(!0),f(k,null,L(c.rows.data,(o,y)=>(d(),T(P,{key:y,class:Q(F(y)?"":"border-b")},{default:s(()=>[t(w,{position:"first"},{default:s(()=>[l(i(o.question),1)]),_:2},1024),t(w,{class:"hidden sm:table-cell"},{default:s(()=>[e("div",le,i(o.answer),1)]),_:2},1024),t(w,{class:"hidden sm:table-cell"},{default:s(()=>[l(i(o.status===1?a.$t("Displayed"):a.$t("Hidden")),1)]),_:2},1024),t(w,{position:"last"},{default:s(()=>[t(W,{align:"right",class:"mt-2"},{items:s(()=>[t(X,null,{default:s(()=>[t(C,{href:"/admin/faqs/"+o.id},{default:s(()=>[l(i(a.$t("View/edit")),1)]),_:2},1032,["href"]),t(C,{as:"button",onClick:we=>u(V)(o.id)},{default:s(()=>[l(i(a.$t("Delete")),1)]),_:2},1032,["onClick"])]),_:2},1024)]),default:s(()=>[ne]),_:2},1024)]),_:2},1024)]),_:2},1032,["class"]))),128))]),_:1})]),_:1},8,["rows"]),t(I,{modelValue:u(p),"onUpdate:modelValue":r[2]||(r[2]=o=>R(p)?p.value=o:null),onConfirm:r[3]||(r[3]=()=>u(A)(N)),label:a.$t("Delete row"),description:a.$t("Are you sure you want to delete this row? This action can not be undone")},null,8,["modelValue","label","description"])],64))}},ue={class:"bg-white md:bg-inherit pt-10 px-4 md:pt-8 md:p-8 rounded-[5px] text-[#000] h-full md:overflow-y-auto"},ce={class:"flex justify-between"},me={class:"text-xl mb-1"},pe={class:"mb-6 flex items-center text-sm leading-6 text-gray-600"},fe=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11v5m0 5a9 9 0 1 1 0-18a9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z"})],-1),he={class:"ml-1 mt-1"},Je={__name:"Index",props:{title:String,rows:Object,filters:Object},setup(c){const _=c;return(n,p)=>(d(),T(j,null,{default:s(()=>[e("div",ue,[e("div",ce,[e("div",null,[e("h1",me,i(n.$t("FAQs")),1),e("p",pe,[fe,e("span",he,i(n.$t("View, add, edit or delete frequently asked questions")),1)])]),e("div",null,[t(u(z),{href:"/admin/faqs/create",type:"button",class:"rounded-md bg-primary px-3 py-2 text-sm text-white hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"},{default:s(()=>[l(i(n.$t("Add FAQ")),1)]),_:1})])]),t(de,{rows:_.rows,filters:_.filters},null,8,["rows","filters"])])]),_:1}))}};export{Je as default};
