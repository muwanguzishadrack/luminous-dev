import{o as t,c as a,t as r,b as s,a as n,n as c}from"./app-d65cc6ad.js";const u={key:0,for:"name",class:"block text-sm leading-6 text-gray-900"},g={class:"mt-2"},x=["value","placeholder","rows"],h={key:1,class:"form-error text-[#b91c1c] text-xs"},w={__name:"FormTextArea",props:{modelValue:[String,Number],showLabel:{type:Boolean,default:!0},name:String,type:String,className:String,placeholder:String,textAreaRows:Number,error:String},emits:["update:modelValue"],setup(e,{emit:m}){const o=e,d=m,i=l=>{d("update:modelValue",l.target.value)};return(l,b)=>(t(),a("div",{class:c(e.className)},[e.showLabel?(t(),a("label",u,r(e.name),1)):s("",!0),n("div",g,[n("textarea",{class:c(["block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm outline-none ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6",e.error?"ring-[#b91c1c]":"ring-gray-300"]),value:o.modelValue,onInput:i,placeholder:e.placeholder,rows:e.textAreaRows},`
                `+r(o.modelValue)+`
            `,43,x)]),e.error?(t(),a("div",h,r(e.error),1)):s("",!0)],2))}};export{w as _};
