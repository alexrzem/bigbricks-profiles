import{_ as c}from"./lodash-CXGpkqCe.js";import{f as l,m as a,k as e,t as r,F as s,q as h,s as d,y as x,l as g}from"./index-B5XHAkqn.js";const f={class:"flex flex-col p-8"},u=["src"],y={class:"mt-6 text-sm font-medium text-gray-900"},_={class:"mt-1 flex flex-grow flex-col justify-between"},F=e("dt",{class:"sr-only"},"Title",-1),B={class:"text-sm text-gray-500"},w=["href"],p={class:"divide-x divide-gray-200"},A={class:""},D={class:"grow pl-1 text-sm"},E={class:"flex-none pr-1 font-mono text-xs leading-5"},k={__name:"BrickItem",props:["profile"],setup(t){const o=t,m=c.get(o,"profile.colours",[]);return(n,v)=>(l(),a(s,null,[e("div",f,[e("img",{class:"mx-auto flex-shrink-0 rounded-full",src:t.profile.imageUrl,alt:""},null,8,u),e("h3",y,r(t.profile.name),1),e("dl",_,[F,e("dd",B,[e("a",{href:t.profile.linkUrl,target:"_thangs"},r(t.profile.linkUrl),9,w)])])]),e("div",null,[e("div",p,[e("div",A,[(l(!0),a(s,null,h(x(m),i=>(l(),a("div",{key:i,class:"flex flex-row border-2 rounded-md m-1 text-left"},[e("div",{class:d(["swatch-"+i.name,"w-10 rounded-l flex-none border-r-2"])},null,2),e("div",D,r(i.title),1),e("div",E,r(i.hex),1)]))),128))])])])],64))}},C={role:"list",class:"grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"},M={__name:"BrickItems",props:["profiles"],setup(t){return(o,m)=>(l(),a("ul",C,[(l(!0),a(s,null,h(t.profiles,n=>(l(),a("li",{key:n.key,class:"col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"},[g(k,{profile:n},null,8,["profile"])]))),128))]))}},L=[{name:"army-beige",title:"Army Beige",hex:"#DBC9B9"},{name:"army-brown",title:"Army Brown",hex:"#796658"},{name:"ash-grey",title:"Ash Grey",hex:"#4C4E55"},{name:"black-charcoal",title:"Black - Charcoal",hex:"#000000"},{name:"black",title:"Black",hex:"#000000"},{name:"cream",title:"Cream",hex:"#EFDBAC"},{name:"earth-brown",title:"Earth Brown",hex:"#735D52"},{name:"gold",title:"Gold",hex:"#F3D488"},{name:"gold-silk",title:"Gold (Silk)",hex:"#F3D488"},{name:"green-military",title:"Military Green",hex:"#414639"},{name:"green-muted",title:"Green (Muted)",hex:"#9DA594"},{name:"green",title:"Green",hex:"#65A160"},{name:"grey-blue",title:"Grey Blue",hex:"#6A8CA9"},{name:"grey",title:"Grey",hex:"#CBA47A"},{name:"blue-light",title:"Blue - Light",hex:"#4D94E0"},{name:"brown-light-matte",title:"Brown - Light (Matte)",hex:"#C2A87E"},{name:"grey-light-matte",title:"Grey - Light (Matte)",hex:"#D5DBE3"},{name:"grey-light",title:"Grey - Light",hex:"#D5DBE3"},{name:"terracotta-matte",title:"Terracotta (Matte)",hex:"#DBADA6"},{name:"navy-matte",title:"Navy (Matte)",hex:"#6C84AA"},{name:"orange-matte",title:"Orange (Matte)",hex:"#EE9037"},{name:"orange",title:"Orange",hex:"#ED9038"},{name:"pastel-ice",title:"Pastel Ice",hex:"#BEDEED"},{name:"red-cherry",title:"Red - Cherry",hex:"#A04F4C"},{name:"red-fire-engine",title:"Red - Fire Engine",hex:"#952426"},{name:"red",title:"Red",hex:"#EA5B54"},{name:"rose",title:"Rose",hex:"#DE81A4"},{name:"silver",title:"Silver",hex:"#CED9E1"},{name:"white-cotton",title:"White - Cotton",hex:"#FFFFFF"},{name:"white-muted",title:"White (Muted)",hex:"#FFFFFF"},{name:"white",title:"White",hex:"#FFFFFF"},{name:"wood-brown-matte",title:"Wood Brown (Matte)",hex:"#CBA47A"},{name:"yellow",title:"Yellow",hex:"#FFFF54"}];export{L as C,M as _};
