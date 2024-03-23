import{_ as u,u as v,a as D,r as f,b,o as k,c as w,d as n,e as r,f as x,g as s,t,n as B,l as y,i as h,F as N}from"./index-c8c5618b.js";import{H as T}from"./bootstrap.bundle-b92aab58.js";import"./api-service-4751efbb.js";import{_ as V,a as C,b as H,c as S,d as j}from"./previous_member-3206d6e4.js";const A="/assets/img/get_ticket.png",E={components:{Header:T},setup(){const c=v(),{t:e,locale:l}=D(),o=f({store_name:"",subtitle:"",store_address:"",class:"",description:"",store_fb:"",store_ig:""}),_=b().params.id,i=async()=>{try{const a=await fetch("/data/bar.json");if(!a.ok)throw new Error("Network response was not ok");let m=await a.json();o.value=m.find(g=>g.id==_)}catch(a){console.error("There was a problem with the fetch operation:",a)}},d=()=>{c.go(-1)};return k(()=>{i()}),{t:e,locale:l,shopData:o,toPrevious:d}}},F={id:"index"},I=s("div",{class:"container",id:"banner"},null,-1),P={class:"container",id:"bars"},R={class:"row"},z={class:"col-12 px-5 BarDetailTitle"},M={class:"col-12 px-5 BarDetailName"},q={class:"col-12 px-5 BarDetailAddress"},G={class:"address_bg"},J={class:"annotation"},K=s("img",{src:V},null,-1),L=s("div",{class:"address"},null,-1),O={class:"col-12 px-5 BarDetailTag"},Q={class:"pill"},U={class:"pill"},W=s("hr",null,null,-1),X={class:"col-12 px-5 BarDetailContent"},Y=s("hr",null,null,-1),Z={class:"col-12 px-5 BarDetailSocial"},$=["href"],ss=s("img",{src:C},null,-1),os=[ss],ts=["href"],es=s("img",{src:H},null,-1),as=[es],is=["href"],ns=s("img",{src:S},null,-1),rs=[ns],cs={class:"col-12 px-5 BarDetailAction"},ls=s("a",{class:"getTicket"},[s("img",{src:A})],-1),_s=s("img",{src:j},null,-1),ds=[_s],hs=s("div",{id:"page_bottom"},null,-1);function ps(c,e,l,o,p,_){const i=w("Header");return n(),r(N,null,[x(i),s("main",F,[I,s("div",P,[s("div",R,[s("div",z,[s("h4",null,t(o.shopData.store_name),1)]),s("div",M,[s("div",null,[s("h4",null,t(o.shopData.subtitle),1),s("div",{class:"img",style:B(`background-image: url('/assets/img/shop/${o.shopData.id}-1.jpg')`)},null,4)])]),s("div",q,[s("div",G,[s("div",J,[K,y(" "+t(o.shopData.store_address),1)]),L])]),s("div",O,[s("div",Q,t(o.shopData.location),1),s("div",U,t(o.shopData.class),1),W]),s("div",X,[s("p",null,t(o.shopData.description),1),Y]),s("div",Z,[o.shopData.store_fb.length>0?(n(),r("a",{key:0,href:o.shopData.store_fb,target:"_blank"},os,8,$)):h("",!0),o.shopData.store_ig.length>0?(n(),r("a",{key:1,href:o.shopData.store_ig,target:"_blank"},as,8,ts)):h("",!0),s("a",{href:`https://www.google.com.tw/maps/place/${o.shopData.store_address}`,target:"_blank"},rs,8,is)]),s("div",cs,[ls,s("a",{class:"previous",onClick:e[0]||(e[0]=d=>o.toPrevious())},ds)])]),hs])])],64)}const Ds=u(E,[["render",ps]]);export{Ds as default};
