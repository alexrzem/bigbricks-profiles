import{_ as a,M as p}from"./MainNavbar-ciePVZiz.js";import{C as _,_ as u}from"./colours-Cwrc-AIK.js";import{d as f,_ as d,r as c,o as g,c as h,a as i,b as e,F as b}from"./index-Dtg-W-pk.js";const k=[{colours:["black-charcoal","blue-light","orange","red","yellow"],imageUrl:"IMG_5528.jpeg",key:"classic_spaceman",linkUrl:"https://than.gs/m/1063325",name:"Classic Spaceman"},{colours:["black-charcoal","pastel-ice","terracotta-matte","yellow"],imageUrl:"IMG_6937.jpeg",key:"generic_figure",linkUrl:"https://than.gs/m/1066091",name:"Generic Figure"}],x=f({id:"misc",state:()=>({}),actions:{},getters:{profiles(r){const s=[];for(const t of k){const o=a.map(a.get(t,"colours",[]),n=>a.find(_,{name:n},{}));s.push({...t,colours:o})}return s}}}),y={components:{BrickItems:u,MainNavbar:p},data(){return{}},methods:{},mounted(){},watch:{},setup(){return{profiles:x().profiles}}},M=e("header",{class:"bg-white shadow-sm"},[e("div",{class:"mx-auto py-4 container"},[e("h1",{class:"text-lg font-semibold leading-6 text-gray-900"},"Miscellaneous")])],-1),S={class:"mx-auto container py-6"};function v(r,s,t,o,n,w){const l=c("main-navbar"),m=c("brick-items");return g(),h(b,null,[i(l),M,e("main",null,[e("div",S,[i(m,{profiles:o.profiles},null,8,["profiles"])])])],64)}const F=d(y,[["render",v]]);export{F as default};
