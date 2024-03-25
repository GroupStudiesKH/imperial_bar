import{_ as u,u as D,a as f,r as v,b,o as k,c as w,d as n,e as i,f as x,g as s,t,n as B,l as y,i as l,F as N}from"./index-505d4f1f.js";import{H as C}from"./bootstrap.bundle-67b47a38.js";import"./api-service-4751efbb.js";import{_ as H,a as S,b as T,c as V,d as j}from"./previous_member-3206d6e4.js";const A="/assets/img/call_shop.png",E={components:{Header:C},setup(){const c=D(),{t:e,locale:_}=f(),o=v({store_name:"",subtitle:"",store_address:"",store_phone:"",class:"",description:"",store_fb:"",store_ig:""}),d=b().params.id,r=async()=>{try{const a=await fetch("/data/bar.json");if(!a.ok)throw new Error("Network response was not ok");let m=await a.json();o.value=m.find(g=>g.id==d)}catch(a){console.error("There was a problem with the fetch operation:",a)}},h=()=>{c.go(-1)};return k(()=>{r()}),{t:e,locale:_,shopData:o,toPrevious:h}}},F={id:"index"},I=s("div",{class:"container",id:"banner"},null,-1),P={class:"container",id:"bars"},R={class:"row"},z={class:"col-12 px-5 BarDetailTitle"},M={class:"col-12 px-5 BarDetailName"},q={class:"col-12 px-5 BarDetailAddress"},G={class:"address_bg"},J={class:"annotation"},K=s("img",{src:H},null,-1),L=s("div",{class:"address"},null,-1),O={class:"col-12 px-5 BarDetailTag"},Q={class:"pill"},U={class:"pill"},W=s("hr",null,null,-1),X={class:"col-12 px-5 BarDetailContent"},Y=s("hr",null,null,-1),Z={class:"col-12 px-5 BarDetailSocial"},$=["href"],ss=s("img",{src:S},null,-1),os=[ss],ts=["href"],es=s("img",{src:T},null,-1),as=[es],ns=["href"],is=s("img",{src:V},null,-1),rs=[is],ls={class:"col-12 px-5 BarDetailAction"},cs=["href"],_s=s("img",{src:A},null,-1),ds=[_s],hs=s("img",{src:j},null,-1),ps=[hs],ms=s("div",{id:"page_bottom"},null,-1);function gs(c,e,_,o,p,d){const r=w("Header");return n(),i(N,null,[x(r,{title:"合作店家"}),s("main",F,[I,s("div",P,[s("div",R,[s("div",z,[s("h4",null,t(o.shopData.store_name),1)]),s("div",M,[s("div",null,[s("h4",null,t(o.shopData.subtitle),1),s("div",{class:"img",style:B(`background-image: url('/assets/img/shop/${o.shopData.id}-1.jpg')`)},null,4)])]),s("div",q,[s("div",G,[s("div",J,[K,y(" "+t(o.shopData.store_address),1)]),L])]),s("div",O,[s("div",Q,t(o.shopData.location),1),s("div",U,t(o.shopData.class),1),W]),s("div",X,[s("p",null,t(o.shopData.description),1),Y]),s("div",Z,[o.shopData.store_fb.length>0?(n(),i("a",{key:0,href:o.shopData.store_fb,target:"_blank"},os,8,$)):l("",!0),o.shopData.store_ig.length>0?(n(),i("a",{key:1,href:o.shopData.store_ig,target:"_blank"},as,8,ts)):l("",!0),s("a",{href:`https://www.google.com.tw/maps/place/${o.shopData.store_address}`,target:"_blank"},rs,8,ns)]),s("div",ls,[o.shopData.store_phone.length>0?(n(),i("a",{key:0,href:`tel:${o.shopData.store_phone}`,target:"_blank"},ds,8,cs)):l("",!0),s("a",{class:"previous",onClick:e[0]||(e[0]=h=>o.toPrevious())},ps)])]),ms])])],64)}const bs=u(E,[["render",gs]]);export{bs as default};