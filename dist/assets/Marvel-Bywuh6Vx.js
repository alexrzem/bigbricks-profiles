import{_ as a,M as p}from"./MainNavbar-DNgtied6.js";import{C as h,_ as g}from"./colours-BYwhomuG.js";import{d,_ as u,r as l,o as _,c as f,a as i,b as e,F as k}from"./index-6PglUwr7.js";const b=[{colours:["black-charcoal","gold-silk","grey-light-matte","red-fire-engine","white-cotton"],imageUrl:"IMG_7543.jpeg",key:"ironman",linkUrl:"https://than.gs/m/1069854",name:"Iron-Man"},{colours:["black-charcoal","blue-light","rose","white-cotton"],imageUrl:"IMG_7008.jpeg",key:"spidergwen",linkUrl:"https://than.gs/m/1076245",name:"Spider-Gwen"},{colours:["black-charcoal","blue-light","red","white-cotton"],imageUrl:"IMG_7133.jpeg",key:"spiderman",linkUrl:"https://than.gs/m/1069854",name:"Spider-Man"},{colours:["army-beige","ash-grey","black-charcoal","earth-brown","brown-light-matte","grey-light-matte","navy-matte","red-cherry","white-cotton","white-muted"],imageUrl:"IMG_7456.jpeg",key:"thor",linkUrl:"https://than.gs/m/1069854",name:"Thor"}],y=d({id:"marvel",state:()=>({}),actions:{},getters:{profiles(s){const t=[];for(const r of b){const o=a.map(a.get(r,"colours",[]),n=>a.find(h,{name:n},{}));t.push({...r,colours:o})}return t}}}),w={components:{BrickItems:g,MainNavbar:p},data(){return{}},methods:{},mounted(){},watch:{},setup(){return{profiles:y().profiles}}},v=e("header",{class:"bg-white shadow-sm"},[e("div",{class:"mx-auto py-4 container"},[e("h1",{class:"text-lg font-semibold leading-6 text-gray-900"},"Marvel")])],-1),M={class:"mx-auto container py-6"};function U(s,t,r,o,n,S){const c=l("main-navbar"),m=l("brick-items");return _(),f(k,null,[i(c),v,e("main",null,[e("div",M,[i(m,{profiles:o.profiles},null,8,["profiles"])])])],64)}const j=u(w,[["render",U]]);export{j as default};
