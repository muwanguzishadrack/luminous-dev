import{E as ie,_ as ce}from"./ellipsis-674ef471.js";import{b as ue,u as me,c as z,d as O}from"./vue-flow-core-ed038db2.js";import{_ as re}from"./Menubar.vue_vue_type_script_setup_true_lang-023c5f31.js";import{_ as E}from"./MenubarItem.vue_vue_type_script_setup_true_lang-f33b13c9.js";import{_ as pe}from"./MenubarContent.vue_vue_type_script_setup_true_lang-c35a7f5d.js";import{_ as _e}from"./MenubarMenu.vue_vue_type_script_setup_true_lang-366844fb.js";import{_ as ve}from"./MenubarTrigger.vue_vue_type_script_setup_true_lang-7a67b588.js";import{_ as v}from"./FormInput-cef6e779.js";import{_ as he}from"./FormSelect-149292fa.js";import{_ as fe}from"./FormTextArea-723ba4e4.js";import be from"./FlowMedia-2e24d4a9.js";import{D as xe,r as g,G as ye,m as ge,o as u,c as m,h as d,u as n,a as e,e as G,n as r,t as b,f as h,g as p,b as V,F as W,d as J,ad as Ve,ae as Te,l as ke}from"./app-d65cc6ad.js";import{_ as Ce}from"./_plugin-vue_export-helper-c27b6911.js";import"./createLucideIcon-faa40dd3.js";import"./index-748fa515.js";import"./utils-5c9d1106.js";import"./index-a4420621.js";import"./hidden-7933a274.js";import"./use-text-value-16cd3154.js";const i=x=>(Ve("data-v-edf0961a"),x=x(),Te(),x),Le={class:"rounded-sm border border-gray-200 bg-white p-3 shadow-md"},Ee={class:"flex flex-col gap-y-2"},Se={class:"flex justify-between items-center"},Ne={class:"flex gap-x-2"},Ue=i(()=>e("img",{src:ce,class:"mt-1 h-4 w-4",alt:"LLM icon"},null,-1)),Be={class:"flex flex-col gap-y-1"},$e={key:1,class:"text-base"},we={key:0,class:"flex items-center gap-x-2 bg-red-500 text-white rounded-md px-2 py-2"},Re=ke('<span data-v-edf0961a><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" data-v-edf0961a><g fill="none" data-v-edf0961a><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" data-v-edf0961a></path><path fill="currentColor" d="m13.299 3.148l8.634 14.954a1.5 1.5 0 0 1-1.299 2.25H3.366a1.5 1.5 0 0 1-1.299-2.25l8.634-14.954c.577-1 2.02-1 2.598 0M12 15a1 1 0 1 0 0 2a1 1 0 0 0 0-2m0-7a1 1 0 0 0-.993.883L11 9v4a1 1 0 0 0 1.993.117L13 13V9a1 1 0 0 0-1-1" data-v-edf0961a></path></g></svg></span><span class="text-sm" data-v-edf0961a>Please fill all the required fields</span>',2),De=[Re],Fe=i(()=>e("span",{class:"text-sm text-gray-500"},"Send interactive list message to your recipients.",-1)),Me={class:"mb-4"},qe=i(()=>e("label",{class:"text-sm mb-2"},"Header (Optional)",-1)),He={key:1,class:"mb-4"},Pe=i(()=>e("label",{class:"text-sm mb-2"},[e("span",{class:"text-red-500"},"*"),p(" Header Text")],-1)),je={class:"mb-4"},Ae=i(()=>e("label",{class:"text-sm mb-2"},[e("span",{class:"text-red-500"},"*"),p(" Body")],-1)),ze={class:"mb-4"},Oe=i(()=>e("label",{class:"text-sm mb-2"},"Footer Text (Optional)",-1)),Ge={class:"mb-4"},We=i(()=>e("label",{class:"text-sm mb-2"},[e("span",{class:"text-red-500"},"*"),p(" Button Label")],-1)),Je=i(()=>e("label",{class:"text-sm"},"Sections (Atleast one section)",-1)),Ke={class:"flex justify-between items-center mb-2"},Qe={class:"text-sm"},Xe=["onClick"],Ye={class:"mb-4"},Ze=i(()=>e("label",{class:"text-sm mb-2"},[e("span",{class:"text-red-500"},"*"),p(" Title")],-1)),Ie={class:"flex justify-between items-center mb-4"},et=i(()=>e("label",{class:"text-sm"},"Rows (Atleast one row)",-1)),tt=["onClick"],at={class:"flex justify-between items-center mb-2"},st={class:"text-sm"},lt=["onClick"],ot={class:"grid grid-cols-2 gap-x-6"},dt={class:"mb-4"},nt=i(()=>e("label",{class:"text-sm mb-2"},[e("span",{class:"text-red-500"},"*"),p(" ID")],-1)),it={class:"text-sm"},ct={class:"mb-2"},ut=i(()=>e("label",{class:"text-sm mb-2"},[e("span",{class:"text-red-500"},"*"),p(" Title")],-1)),mt={class:"text-sm"},rt={class:"mb-2"},pt=i(()=>e("label",{class:"text-sm mb-2"},[e("span",{class:"text-red-500"},"*"),p(" Description")],-1)),_t={class:"text-sm"},vt=xe({__name:"List-node",props:{id:{},type:{},selected:{type:Boolean},connectable:{type:[Boolean,Number,String,Function]},position:{},dimensions:{},label:{},isValidTargetPos:{type:Function},isValidSourcePos:{type:Function},parent:{},parentNodeId:{},dragging:{type:Boolean},resizing:{type:Boolean},zIndex:{},targetPosition:{},sourcePosition:{},dragHandle:{},data:{},events:{}},setup(x){var N,U,B,$,w,R,D,F,M,q,H,P,j,A;const _=x,k=g(_.data.title),K=g(_.data.uuid),C=g(!1),t=g({type:"interactive list",headerType:((U=(N=_.data.metadata)==null?void 0:N.fields)==null?void 0:U.headerType)||"none",headerText:(($=(B=_.data.metadata)==null?void 0:B.fields)==null?void 0:$.headerText)||"",headerMedia:((R=(w=_.data.metadata)==null?void 0:w.fields)==null?void 0:R.headerMedia)||[],body:((F=(D=_.data.metadata)==null?void 0:D.fields)==null?void 0:F.body)||"",footer:((q=(M=_.data.metadata)==null?void 0:M.fields)==null?void 0:q.footer)||"",buttonLabel:((P=(H=_.data.metadata)==null?void 0:H.fields)==null?void 0:P.buttonLabel)||"",sections:((A=(j=_.data.metadata)==null?void 0:j.fields)==null?void 0:A.sections)||[{rows:[{}]}]}),Q=g([{value:"none",label:"None"},{value:"text",label:"Text"},{value:"image",label:"Image"},{value:"video",label:"Video"},{value:"audio",label:"Audio"},{value:"document",label:"Document"}]),T=ue(),{removeNodes:X,nodes:Y,addNodes:Z,removeEdges:I,edges:ee}=me();function S(l){ee.value.filter(a=>a.sourceHandle===l).forEach(a=>I(a.id))}ye(t,l=>{T.node.data.metadata.fields={...l}},{deep:!0});function te(){t.value.sections.length<10&&t.value.sections.push({rows:[{}]})}function ae(l){t.value.sections[l].rows.length<10&&t.value.sections[l].rows.push({})}function se(l){t.value.sections.length>1&&(t.value.sections[l].rows.forEach((s,a)=>{const c="a"+l+a;S(c)}),t.value.sections.splice(l,1))}function le(l,s){t.value.sections[l].rows.length>1&&(t.value.sections[l].rows.splice(s,1),t.value.sections[l].rows=t.value.sections[l].rows.map((a,c)=>({...a,id:a.id,title:a.title||"",description:a.description||""})),S("a"+l+s))}function oe(){X(T.id)}function de(){const{type:l,position:s,label:a,data:c}=T.node,o={id:(Y.value.length+1).toString(),type:l,position:{x:s.x+100,y:s.y+100},label:a,data:c};Z(o)}const ne=ge(()=>{const l=t.value.sections.some(s=>s.title?s.rows.every(a=>!a.title||!a.id):!0);return t.value.headerType!==""&&t.value.headerType==="text"&&t.value.headerText===""||t.value.headerType!==""&&t.value.headerType!=="text"&&t.value.headerType!=="none"&&t.value.headerMedia.length===0||t.value.body===""||t.value.buttonLabel===""||l});function L(l){return l.length}return(l,s)=>(u(),m("div",Le,[d(n(O),{type:"target",position:n(z).Left},null,8,["position"]),e("div",Ee,[e("div",Se,[e("div",Ne,[Ue,e("div",Be,[C.value?(u(),G(v,{key:0,modelValue:k.value,"onUpdate:modelValue":s[0]||(s[0]=a=>k.value=a),name:"",type:"text",class:r("col-span-4"),onBlur:s[1]||(s[1]=()=>C.value=!1)},null,8,["modelValue"])):(u(),m("h3",$e,b(k.value),1))])]),d(n(re),{class:"border-none"},{default:h(()=>[d(n(_e),null,{default:h(()=>[d(n(ve),null,{default:h(()=>[d(n(ie))]),_:1}),d(n(pe),null,{default:h(()=>[d(n(E),{onClick:de},{default:h(()=>[p(" Duplicated ")]),_:1}),d(n(E),{onClick:oe},{default:h(()=>[p(" Delete ")]),_:1}),d(n(E),{onClick:s[2]||(s[2]=a=>C.value=!0)},{default:h(()=>[p(" Rename ")]),_:1})]),_:1})]),_:1})]),_:1})]),ne.value?(u(),m("div",we,De)):V("",!0),Fe,e("div",Me,[qe,d(he,{modelValue:t.value.headerType,"onUpdate:modelValue":s[3]||(s[3]=a=>t.value.headerType=a),name:"",type:"text",optionClassName:"h-32",options:Q.value,class:r("col-span-4")},null,8,["modelValue","options"])]),t.value.headerType=="text"?(u(),m("div",He,[Pe,d(v,{modelValue:t.value.headerText,"onUpdate:modelValue":s[4]||(s[4]=a=>t.value.headerText=a),name:"",placeholder:"Enter header text",type:"text",class:r("col-span-4")},null,8,["modelValue"])])):V("",!0),t.value.headerType!="text"&&t.value.headerType!="none"?(u(),G(be,{key:2,modelValue:t.value.headerMedia,"onUpdate:modelValue":s[5]||(s[5]=a=>t.value.headerMedia=a),type:t.value.headerType,uuid:K.value,nodeId:n(T).id},null,8,["modelValue","type","uuid","nodeId"])):V("",!0),e("div",je,[Ae,d(fe,{modelValue:t.value.body,"onUpdate:modelValue":s[6]||(s[6]=a=>t.value.body=a),placeholder:"Enter the main message for this message type",name:"",type:"text",class:r("col-span-4")},null,8,["modelValue"])]),e("div",ze,[Oe,d(v,{modelValue:t.value.footer,"onUpdate:modelValue":s[7]||(s[7]=a=>t.value.footer=a),name:"",placeholder:"Enter footer text",type:"text",class:r("col-span-4")},null,8,["modelValue"])]),e("div",Ge,[We,d(v,{modelValue:t.value.buttonLabel,"onUpdate:modelValue":s[8]||(s[8]=a=>t.value.buttonLabel=a),name:"",placeholder:"Enter footer text",type:"text",class:r("col-span-4")},null,8,["modelValue"])]),e("div",{class:"flex justify-between items-center mb-4"},[Je,e("button",{onClick:te,class:"bg-slate-100 p-1 rounded-md text-sm px-2"},"Add Section")]),(u(!0),m(W,null,J(t.value.sections,(a,c)=>(u(),m("div",{key:c,class:"border rounded p-3 mb-4"},[e("div",Ke,[e("label",Qe,"Section "+b(c+1),1),c>0?(u(),m("button",{key:0,onClick:o=>se(c),class:"text-red-500 text-sm"}," Remove Section ",8,Xe)):V("",!0)]),e("div",Ye,[Ze,d(v,{modelValue:a.title,"onUpdate:modelValue":o=>a.title=o,name:"",placeholder:"Enter section title",type:"text",class:r("col-span-4")},null,8,["modelValue","onUpdate:modelValue"])]),e("div",Ie,[et,e("button",{onClick:o=>ae(c),class:"bg-slate-100 p-1 rounded-md text-sm px-2"},"Add Row",8,tt)]),(u(!0),m(W,null,J(a.rows,(o,y)=>(u(),m("div",{key:y,class:"relative border rounded p-3 bg-slate-50 mb-2"},[e("div",at,[e("label",st,"Row "+b(y+1),1),y>0?(u(),m("button",{key:0,onClick:f=>le(c,y),class:"text-red-500 text-sm"}," Remove Row ",8,lt)):V("",!0)]),e("div",ot,[e("div",dt,[nt,d(v,{modelValue:o.id,"onUpdate:modelValue":f=>o.id=f,maxLength:"200",name:"",placeholder:"Enter ID",type:"text",class:r("col-span-4")},null,8,["modelValue","onUpdate:modelValue"]),e("span",it,b(L((o==null?void 0:o.id)??""))+"/200",1)]),e("div",ct,[ut,d(v,{modelValue:o.title,"onUpdate:modelValue":f=>o.title=f,maxLength:"24",name:"",placeholder:"Enter row title",type:"text",class:r("col-span-4")},null,8,["modelValue","onUpdate:modelValue"]),e("span",mt,b(L((o==null?void 0:o.title)??""))+"/24",1)])]),e("div",rt,[pt,d(v,{modelValue:o.description,"onUpdate:modelValue":f=>o.description=f,maxLength:"72",name:"",placeholder:"Enter description",type:"text",class:r("col-span-4")},null,8,["modelValue","onUpdate:modelValue"]),e("span",_t,b(L((o==null?void 0:o.description)??""))+"/72",1)]),d(n(O),{id:"a"+c+y,type:"source",position:n(z).Right,style:{right:"-25px"}},null,8,["id","position"])]))),128))]))),128))])]))}});const Dt=Ce(vt,[["__scopeId","data-v-edf0961a"]]);export{Dt as default};
