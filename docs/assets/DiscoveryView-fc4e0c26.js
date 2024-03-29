import{_ as j,u as C,a as B,r as b,b as x,o as L,c as f,d as p,e as y,f as l,g as t,w as i,j as c,F as w,h as D,k as H,t as h,n as E}from"./index-2bde1b50.js";import{H as N,B as V}from"./bootstrap.bundle-456369da.js";import{_ as A}from"./previous-02f03db4.js";const I="/assets/img/discovery/10.jpg",P="/assets/img/discovery/16.jpg",T="/assets/img/discovery/19.jpg",z="/assets/img/discovery/40.jpg",F="/assets/img/discovery/45.jpg",R="/assets/img/discovery/50.jpg",q="/assets/img/discovery/51.jpg",M="/assets/img/discovery/76.jpg",Y="/assets/img/discovery/79.jpg",G="/assets/img/discovery/80.jpg",J={components:{Header:N},setup(){C();const{t:S,locale:s}=B(),d=b([]);x().params.id;const u=b("北部"),r=b(""),v=6,a=b(1),o=async()=>{try{const n=await fetch("/data/bar.json");if(!n.ok)throw new Error("Network response was not ok");let g=await n.json();d.value=g.filter(_=>_.location==u.value),r.value!=""&&(d.value=d.value.filter(_=>_.class==r.value)),d.value=d.value.slice(0,a.value*v)}catch(n){console.error("There was a problem with the fetch operation:",n)}},m=n=>{page.value=1,u.value=n,o()},k=n=>{page.value=1,r.value=n,o()};return L(()=>{o(),document.querySelectorAll(".carousel").forEach(g=>{const _=g.id;new V.Carousel(document.getElementById(_),{interval:2e3})}),window.onscroll=function(){window.innerHeight+window.scrollY>=document.body.offsetHeight&&(a.value++,setTimeout(()=>{o()},200))}}),{t:S,locale:s,shopData:d,changeLocation:m,changeStyle:k,locationSelected:u,styleSelected:r}}},K={id:"banner_carousel",class:"carousel slide","data-bs-ride":"true","data-bs-touch":"true"},O=H('<div class="carousel-indicators"><button type="button" data-bs-target="#banner_carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button><button type="button" data-bs-target="#banner_carousel" data-bs-slide-to="1" aria-label="Slide 2"></button><button type="button" data-bs-target="#banner_carousel" data-bs-slide-to="2" aria-label="Slide 3"></button><button type="button" data-bs-target="#banner_carousel" data-bs-slide-to="3" aria-label="Slide 4"></button><button type="button" data-bs-target="#banner_carousel" data-bs-slide-to="4" aria-label="Slide 5"></button><button type="button" data-bs-target="#banner_carousel" data-bs-slide-to="5" aria-label="Slide 6"></button><button type="button" data-bs-target="#banner_carousel" data-bs-slide-to="6" aria-label="Slide 7"></button><button type="button" data-bs-target="#banner_carousel" data-bs-slide-to="7" aria-label="Slide 8"></button><button type="button" data-bs-target="#banner_carousel" data-bs-slide-to="8" aria-label="Slide 9"></button><button type="button" data-bs-target="#banner_carousel" data-bs-slide-to="9" aria-label="Slide 10"></button><button type="button" data-bs-target="#banner_carousel" data-bs-slide-to="10" aria-label="Slide 10"></button></div>',1),Q={class:"carousel-inner"},U={class:"carousel-item active"},W=t("img",{src:I,class:"d-block w-100",alt:"..."},null,-1),X={class:"carousel-item"},Z=t("img",{src:P,class:"d-block w-100",alt:"..."},null,-1),$={class:"carousel-item"},tt=t("img",{src:T,class:"d-block w-100",alt:"..."},null,-1),st={class:"carousel-item"},et=t("img",{src:z,class:"d-block w-100",alt:"..."},null,-1),ot={class:"carousel-item"},at=t("img",{src:F,class:"d-block w-100",alt:"..."},null,-1),lt={class:"carousel-item"},it=t("img",{src:R,class:"d-block w-100",alt:"..."},null,-1),nt={class:"carousel-item"},ct=t("img",{src:q,class:"d-block w-100",alt:"..."},null,-1),dt={class:"carousel-item"},rt=t("img",{src:M,class:"d-block w-100",alt:"..."},null,-1),_t={class:"carousel-item"},ut=t("img",{src:Y,class:"d-block w-100",alt:"..."},null,-1),bt={class:"carousel-item"},vt=t("img",{src:G,class:"d-block w-100",alt:"..."},null,-1),mt={class:"container",id:"bars"},gt=t("div",{class:"row"},[t("div",{class:"col-12 px-5 discoveryBarTitle"},[t("h4",null,"探索酒吧")])],-1),pt={class:"row selectAreaStyle px-5"},yt=t("div",{class:"col-3"},[t("h6",null,"地點")],-1),ht={class:"col-9"},St={class:"row selectAreaStyle px-5"},ft=t("div",{class:"col-3"},[t("h6",null,"風格")],-1),wt={class:"col-9"},kt={class:"col-12"},jt={class:"row"},Ct={class:"octagonBar"},Bt={class:"title"},xt={class:"bar_title"},Lt={class:"bar_address"},Dt=t("div",{id:"page_bottom"},[t("img",{src:A})],-1);function Ht(S,s,d,e,u,r){const v=f("Header"),a=f("router-link");return p(),y(w,null,[l(v,{title:"合作店家"}),t("main",null,[t("div",K,[O,t("div",Q,[t("div",U,[l(a,{to:{name:"discovery-detail",params:{id:10}}},{default:i(()=>[W]),_:1})]),t("div",X,[l(a,{to:{name:"discovery-detail",params:{id:16}}},{default:i(()=>[Z]),_:1})]),t("div",$,[l(a,{to:{name:"discovery-detail",params:{id:19}}},{default:i(()=>[tt]),_:1})]),t("div",st,[l(a,{to:{name:"discovery-detail",params:{id:40}}},{default:i(()=>[et]),_:1})]),t("div",ot,[l(a,{to:{name:"discovery-detail",params:{id:45}}},{default:i(()=>[at]),_:1})]),t("div",lt,[l(a,{to:{name:"discovery-detail",params:{id:50}}},{default:i(()=>[it]),_:1})]),t("div",nt,[l(a,{to:{name:"discovery-detail",params:{id:51}}},{default:i(()=>[ct]),_:1})]),t("div",dt,[l(a,{to:{name:"discovery-detail",params:{id:76}}},{default:i(()=>[rt]),_:1})]),t("div",_t,[l(a,{to:{name:"discovery-detail",params:{id:79}}},{default:i(()=>[ut]),_:1})]),t("div",bt,[l(a,{to:{name:"discovery-detail",params:{id:80}}},{default:i(()=>[vt]),_:1})])])]),t("div",mt,[gt,t("div",pt,[yt,t("div",ht,[t("div",{class:c(["pill",e.locationSelected=="北部"?"active":""]),role:"botton",onClick:s[0]||(s[0]=o=>e.changeLocation("北部"))}," 北部 ",2),t("div",{class:c(["pill",e.locationSelected=="中部"?"active":""]),role:"botton",onClick:s[1]||(s[1]=o=>e.changeLocation("中部"))}," 中部 ",2),t("div",{class:c(["pill",e.locationSelected=="南部"?"active":""]),role:"botton",onClick:s[2]||(s[2]=o=>e.changeLocation("南部"))}," 南部 ",2)])]),t("div",St,[ft,t("div",wt,[t("div",{class:c(["pill",e.styleSelected=="派對聚餐"?"active":""]),role:"botton",onClick:s[3]||(s[3]=o=>e.changeStyle("派對聚餐"))}," 派對聚餐 ",2),t("div",{class:c(["pill",e.styleSelected=="深夜酒吧"?"active":""]),role:"botton",onClick:s[4]||(s[4]=o=>e.changeStyle("深夜酒吧"))}," 深夜酒吧 ",2),t("div",{class:c(["pill",e.styleSelected=="晚餐小酌"?"active":""]),role:"botton",onClick:s[5]||(s[5]=o=>e.changeStyle("晚餐小酌"))}," 晚餐小酌 ",2),t("div",{class:c(["pill",e.styleSelected=="日式居酒屋"?"active":""]),role:"botton",onClick:s[6]||(s[6]=o=>e.changeStyle("日式居酒屋"))}," 日式居酒屋 ",2),t("div",{class:c(["pill",e.styleSelected=="特色店家"?"active":""]),role:"botton",onClick:s[7]||(s[7]=o=>e.changeStyle("特色店家"))}," 特色店家 ",2)])]),t("div",kt,[t("div",jt,[(p(!0),y(w,null,D(e.shopData,(o,m)=>(p(),y("div",{class:"col-6 barColDiscovery",key:m},[l(a,{to:"/discovery/detail/"+o.id},{default:i(()=>[t("div",Ct,[t("div",Bt,h(o.subtitle),1),t("div",{class:"bar_img",style:E(`background-image: url('/assets/img/shop/${o.id}-1.jpg?time=202403291325')`)},null,4),t("div",xt,[t("h5",null,h(o.store_name),1)]),t("div",Lt,[t("p",null,"📍"+h(o.store_address),1)])])]),_:2},1032,["to"])]))),128))])]),Dt])])],64)}const At=j(J,[["render",Ht]]);export{At as default};
