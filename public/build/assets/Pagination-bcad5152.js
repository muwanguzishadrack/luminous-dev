import{_ as u}from"./_plugin-vue_export-helper-c27b6911.js";import{o as a,c as l,t as g,b as d,a as e,n as r}from"./app-d65cc6ad.js";const h={name:"Pagination",props:{pagination:Object},data(){return{page:this.pagination.current_page}},watch:{"pagination.current_page":function(s){this.page=s}},methods:{loadPage(s){this.$inertia.get(this.$page.url,{page:s},{preserveState:!0})}},computed:{noPreviousPage(){return this.pagination.current_page-1<=0},noNextPage(){return this.pagination.current_page+1>this.pagination.last_page}}},w={class:"inline-flex justify-center items-center"},_={key:0,class:"hidden mr-2 text-sm text-gray-600 lg:block"},b={key:1,class:"flex space-x-1 items-top"},p=["disabled"],f=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4 lg:h-3 lg:w-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 19l-7-7 7-7m8 14l-7-7 7-7"})],-1),x=[f],m=["disabled"],v=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4 lg:h-3 lg:w-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})],-1),y=[v],k={class:"flex flex-row items-center space-x-1"},P={class:"pl-2 text-gray-600 lg:text-sm"},j={class:"pr-2 text-gray-600 lg:text-sm"},C=["disabled"],B=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4 lg:h-3 lg:w-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})],-1),N=[B],M=["disabled"],S=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4 lg:h-3 lg:w-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 5l7 7-7 7M5 5l7 7-7 7"})],-1),V=[S];function z(s,o,n,D,c,t){return a(),l("div",w,[n.pagination.last_page>1?(a(),l("div",_,g(n.pagination.total)+" items",1)):d("",!0),n.pagination.last_page>1?(a(),l("div",b,[e("button",{disabled:t.noPreviousPage,class:r([{"opacity-50":t.noPreviousPage},"inline-flex justify-center items-center w-11 h-11 text-gray-700 bg-white rounded border border-gray-200 shadow-sm outline-none hover:bg-gray-50 lg:h-9 lg:w-9 lg:text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500"]),onClick:o[0]||(o[0]=i=>t.loadPage(1))},x,10,p),e("button",{disabled:t.noPreviousPage,class:r([{"opacity-50":t.noPreviousPage},"inline-flex justify-center items-center w-11 h-11 text-gray-700 bg-white rounded border border-gray-200 shadow-sm outline-none hover:bg-gray-50 lg:h-9 lg:w-9 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"]),onClick:o[1]||(o[1]=i=>t.loadPage(n.pagination.current_page-1))},y,10,m),e("div",k,[e("div",P,g(c.page),1),e("div",j,"of "+g(n.pagination.last_page),1)]),e("button",{disabled:t.noNextPage,class:r([{"opacity-50":t.noNextPage},"inline-flex justify-center items-center w-11 h-11 text-gray-700 bg-white rounded border border-gray-300 shadow-sm outline-none hover:bg-gray-50 lg:h-9 lg:w-9 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"]),onClick:o[2]||(o[2]=i=>t.loadPage(n.pagination.current_page+1))},N,10,C),e("button",{disabled:t.noNextPage,class:r([{"opacity-50":t.noNextPage},"inline-flex justify-center items-center w-11 h-11 text-gray-700 bg-white rounded border border-gray-300 shadow-sm outline-none hover:bg-gray-50 lg:h-9 lg:w-9 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"]),onClick:o[3]||(o[3]=i=>t.loadPage(n.pagination.last_page))},V,10,M)])):d("",!0)])}const q=u(h,[["render",z]]);export{q as P};
