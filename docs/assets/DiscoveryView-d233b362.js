import{_ as C,u as B,a as x,r as b,b as L,o as D,c as f,d as p,e as y,f as l,g as t,w as i,j as c,F as w,h as H,k as E,t as h,n as N}from"./index-1827978a.js";import{H as V,B as j}from"./bootstrap.bundle-c481e106.js";import{_ as A}from"./previous-02f03db4.js";const I="/assets/img/discovery/10.png",P="/assets/img/discovery/16.png",z="/assets/img/discovery/19.png",F="/assets/img/discovery/40.png",R="/assets/img/discovery/45.png",T="/assets/img/discovery/50.png",q="/assets/img/discovery/51.png",M="/assets/img/discovery/76.png",Y="/assets/img/discovery/79.png",G="/assets/img/discovery/80.png",J={components:{Header:V},setup(){B();const{t:S,locale:e}=x(),d=b([]);L().params.id;const _=b("北部"),r=b(""),v=6,o=b(1),s=async()=>{try{const n=await fetch("/data/bar.json");if(!n.ok)throw new Error("Network response was not ok");let g=await n.json();d.value=g.filter(u=>u.location==_.value),r.value!=""&&(d.value=d.value.filter(u=>u.class==r.value)),d.value=d.value.slice(0,o.value*v)}catch(n){console.error("There was a problem with the fetch operation:",n)}},m=n=>{o.value=1,_.value=n,s()},k=n=>{if(o.value=1,r.value==n){r.value="",s();return}r.value=n,s()};return D(()=>{s(),document.querySelectorAll(".carousel").forEach(g=>{const u=g.id;new j.Carousel(document.getElementById(u),{interval:2e3})}),window.onscroll=function(){window.innerHeight+window.scrollY>=document.body.offsetHeight-200&&(o.value++,s())}}),{t:S,locale:e,shopData:d,changeLocation:m,changeStyle:k,locationSelected:_,styleSelected:r}}},K={id:"banner_carousel",class:"carousel slide","data-bs-ride":"true","data-bs-touch":"true"},O=E('<div class="carousel-indicators"><button type="button" data-bs-target="#banner_carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button><button type="button" data-bs-target="#banner_carousel" data-bs-slide-to="1" aria-label="Slide 2"></button><button type="button" data-bs-target="#banner_carousel" data-bs-slide-to="2" aria-label="Slide 3"></button><button type="button" data-bs-target="#banner_carousel" data-bs-slide-to="3" aria-label="Slide 4"></button><button type="button" data-bs-target="#banner_carousel" data-bs-slide-to="4" aria-label="Slide 5"></button><button type="button" data-bs-target="#banner_carousel" data-bs-slide-to="5" aria-label="Slide 6"></button><button type="button" data-bs-target="#banner_carousel" data-bs-slide-to="6" aria-label="Slide 7"></button><button type="button" data-bs-target="#banner_carousel" data-bs-slide-to="7" aria-label="Slide 8"></button><button type="button" data-bs-target="#banner_carousel" data-bs-slide-to="8" aria-label="Slide 9"></button><button type="button" data-bs-target="#banner_carousel" data-bs-slide-to="9" aria-label="Slide 10"></button><button type="button" data-bs-target="#banner_carousel" data-bs-slide-to="10" aria-label="Slide 10"></button></div>',1),Q={class:"carousel-inner"},U={class:"carousel-item active"},W=t("img",{src:I,class:"d-block w-100",alt:"..."},null,-1),X={class:"carousel-item"},Z=t("img",{src:P,class:"d-block w-100",alt:"..."},null,-1),$={class:"carousel-item"},tt=t("img",{src:z,class:"d-block w-100",alt:"..."},null,-1),st={class:"carousel-item"},et=t("img",{src:F,class:"d-block w-100",alt:"..."},null,-1),at={class:"carousel-item"},ot=t("img",{src:R,class:"d-block w-100",alt:"..."},null,-1),lt={class:"carousel-item"},it=t("img",{src:T,class:"d-block w-100",alt:"..."},null,-1),nt={class:"carousel-item"},ct=t("img",{src:q,class:"d-block w-100",alt:"..."},null,-1),dt={class:"carousel-item"},rt=t("img",{src:M,class:"d-block w-100",alt:"..."},null,-1),ut={class:"carousel-item"},_t=t("img",{src:Y,class:"d-block w-100",alt:"..."},null,-1),bt={class:"carousel-item"},vt=t("img",{src:G,class:"d-block w-100",alt:"..."},null,-1),mt={class:"container",id:"bars"},gt=t("div",{class:"row"},[t("div",{class:"col-12 px-5 discoveryBarTitle"},[t("h4",null,"探索酒吧")])],-1),pt={class:"row selectAreaStyle px-5"},yt=t("div",{class:"col-3"},[t("h6",null,"地點")],-1),ht={class:"col-9"},St={class:"row selectAreaStyle px-5"},ft=t("div",{class:"col-3"},[t("h6",null,"風格")],-1),wt={class:"col-9"},kt={class:"col-12"},Ct={class:"row"},Bt={class:"octagonBar"},xt={class:"title"},Lt={class:"bar_title"},Dt={class:"bar_address"},Ht=t("div",{id:"page_bottom"},[t("img",{src:A})],-1);function Et(S,e,d,a,_,r){const v=f("Header"),o=f("router-link");return p(),y(w,null,[l(v,{title:"合作店家"}),t("main",null,[t("div",K,[O,t("div",Q,[t("div",U,[l(o,{to:{name:"discovery-detail",params:{id:10}}},{default:i(()=>[W]),_:1})]),t("div",X,[l(o,{to:{name:"discovery-detail",params:{id:16}}},{default:i(()=>[Z]),_:1})]),t("div",$,[l(o,{to:{name:"discovery-detail",params:{id:19}}},{default:i(()=>[tt]),_:1})]),t("div",st,[l(o,{to:{name:"discovery-detail",params:{id:40}}},{default:i(()=>[et]),_:1})]),t("div",at,[l(o,{to:{name:"discovery-detail",params:{id:45}}},{default:i(()=>[ot]),_:1})]),t("div",lt,[l(o,{to:{name:"discovery-detail",params:{id:50}}},{default:i(()=>[it]),_:1})]),t("div",nt,[l(o,{to:{name:"discovery-detail",params:{id:51}}},{default:i(()=>[ct]),_:1})]),t("div",dt,[l(o,{to:{name:"discovery-detail",params:{id:76}}},{default:i(()=>[rt]),_:1})]),t("div",ut,[l(o,{to:{name:"discovery-detail",params:{id:79}}},{default:i(()=>[_t]),_:1})]),t("div",bt,[l(o,{to:{name:"discovery-detail",params:{id:80}}},{default:i(()=>[vt]),_:1})])])]),t("div",mt,[gt,t("div",pt,[yt,t("div",ht,[t("div",{class:c(["pill",a.locationSelected=="北部"?"active":""]),role:"botton",onClick:e[0]||(e[0]=s=>a.changeLocation("北部"))}," 北部 ",2),t("div",{class:c(["pill",a.locationSelected=="中部"?"active":""]),role:"botton",onClick:e[1]||(e[1]=s=>a.changeLocation("中部"))}," 中部 ",2),t("div",{class:c(["pill",a.locationSelected=="南部"?"active":""]),role:"botton",onClick:e[2]||(e[2]=s=>a.changeLocation("南部"))}," 南部 ",2)])]),t("div",St,[ft,t("div",wt,[t("div",{class:c(["pill",a.styleSelected=="派對聚餐"?"active":""]),role:"botton",onClick:e[3]||(e[3]=s=>a.changeStyle("派對聚餐"))}," 派對聚餐 ",2),t("div",{class:c(["pill",a.styleSelected=="深夜酒吧"?"active":""]),role:"botton",onClick:e[4]||(e[4]=s=>a.changeStyle("深夜酒吧"))}," 深夜酒吧 ",2),t("div",{class:c(["pill",a.styleSelected=="晚餐小酌"?"active":""]),role:"botton",onClick:e[5]||(e[5]=s=>a.changeStyle("晚餐小酌"))}," 晚餐小酌 ",2),t("div",{class:c(["pill",a.styleSelected=="日式居酒屋"?"active":""]),role:"botton",onClick:e[6]||(e[6]=s=>a.changeStyle("日式居酒屋"))}," 日式居酒屋 ",2),t("div",{class:c(["pill",a.styleSelected=="特色店家"?"active":""]),role:"botton",onClick:e[7]||(e[7]=s=>a.changeStyle("特色店家"))}," 特色店家 ",2)])]),t("div",kt,[t("div",Ct,[(p(!0),y(w,null,H(a.shopData,(s,m)=>(p(),y("div",{class:"col-6 barColDiscovery",key:m},[l(o,{to:"/discovery/detail/"+s.id},{default:i(()=>[t("div",Bt,[t("div",xt,h(s.subtitle),1),t("div",{class:"bar_img",style:N(`background-image: url('/assets/img/octagon/${s.id}.png?time=202403291325')`)},null,4),t("div",Lt,[t("h5",null,h(s.store_name),1)]),t("div",Dt,[t("p",null,"📍"+h(s.store_address),1)])])]),_:2},1032,["to"])]))),128))])]),Ht])])],64)}const At=C(J,[["render",Et]]);export{At as default};
