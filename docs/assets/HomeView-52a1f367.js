import{_ as L,u as z,a as I,r as h,b as G,o as J,c as j,d as a,e as l,f as k,g as o,F as f,h as B,i as v,w as P,t as _,n as D}from"./index-95894673.js";import{H as K}from"./bootstrap.bundle-76e58d02.js";import"./api-service-4751efbb.js";import{_ as O}from"./previous-02f03db4.js";const H="/assets/img/carousel_prev.png",N="/assets/img/carousel_next.png",Q={components:{Header:K},setup(){const E=z(),{t:e,locale:A}=I(),t=h([]),y=h([]),w=h([]),S=h([2,3,8,7,10,12,15,18,21,24]),m=h(1),s=h([51,53,55,57,59,62,65,68,72,70]),r=h(1),F=h([81,83,85,87,89,92,95,96,93,91]),x=h(1);G();const R=async()=>{try{const n=await fetch("/data/bar.json");if(!n.ok)throw new Error("Network response was not ok");let i=await n.json();S.value.forEach(c=>{t.value.push(i.find(d=>d.id==c))}),s.value.forEach(c=>{y.value.push(i.find(d=>d.id==c))}),F.value.forEach(c=>{w.value.push(i.find(d=>d.id==c))})}catch(n){console.error("There was a problem with the fetch operation:",n)}},q=n=>{const i=document.getElementById(n),c=275,d=300;switch(n){case"northShop":m.value++;break;case"midShop":r.value++;break;case"southShop":x.value++;break}const g=p=>{u||(u=p);const C=p-u,b=Math.min(C/d,1),T=c*b;i.scrollTo({left:i.scrollLeft+T,behavior:"smooth"}),b<1?requestAnimationFrame(g):u=null};let u=null;requestAnimationFrame(g)},M=()=>{E.push({path:"/detail/19"})},V=n=>{const i=document.getElementById(n),c=275,d=300;switch(n){case"northShop":m.value--;break;case"midShop":r.value--;break;case"southShop":x.value--;break}const g=p=>{u||(u=p);const C=p-u,b=Math.min(C/d,1),T=c*b;i.scrollTo({left:i.scrollLeft-T,behavior:"smooth"}),b<1?requestAnimationFrame(g):u=null};let u=null;requestAnimationFrame(g)};return J(()=>{R()}),{t:e,locale:A,northShopData:t,midShopData:y,southShopData:w,northShopHighlight:S,midShopHighlight:s,southShopHighlight:F,scrollToNextSlide:q,scrollToPrevSlide:V,northPage:m,midPage:r,southPage:x,goBannerBar:M}}},U={id:"index"},W={class:"container",id:"bars"},X={class:"row"},Y=o("div",{class:"col-12 px-5 topBarTitle"},[o("h4",null,"本月主打星店家")],-1),Z=o("div",{class:"col-12 px-5 areaHeading"},[o("h5",null,"北部店家")],-1),$={id:"carouselNorth",class:"carousel slide"},oo={class:"barContainer"},so={class:"barRow",id:"northShop"},to={class:"octagonBar"},eo={class:"title"},ao={class:"bar_title"},lo={class:"bar_address"},no={class:"carousel-control-prev"},ro={key:0,src:N},io=o("div",{class:"col-12 px-5 areaHeading"},[o("h5",null,"中部店家")],-1),co={id:"carouselMid",class:"carousel slide"},uo={class:"barContainer"},ho={class:"barRow",id:"midShop"},_o={class:"octagonBar"},mo={class:"title"},vo={class:"bar_title"},go={class:"bar_address"},po={class:"carousel-control-prev"},bo={key:0,src:N},So=o("div",{class:"col-12 px-5 areaHeading"},[o("h5",null,"南部店家")],-1),ko={id:"carouselSouth",class:"carousel slide"},fo={class:"barContainer"},yo={class:"barRow",id:"southShop"},wo={class:"octagonBar"},xo={class:"title"},Co={class:"bar_title"},To={class:"bar_address"},Bo={class:"carousel-control-prev"},Po={key:0,src:N},Do=o("div",{id:"page_bottom"},[o("img",{src:O})],-1);function Ho(E,e,A,t,y,w){const S=j("Header"),m=j("router-link");return a(),l(f,null,[k(S),o("main",U,[o("div",{class:"container monthStar",id:"banner",onClick:e[0]||(e[0]=s=>t.goBannerBar())}),o("div",W,[o("div",X,[Y,Z,o("div",$,[o("div",oo,[o("div",so,[(a(!0),l(f,null,B(t.northShopData,(s,r)=>(a(),l("div",{class:"barCol",key:r},[k(m,{to:"/detail/"+s.id},{default:P(()=>[o("div",to,[o("div",eo,_(s.subtitle),1),o("div",{class:"bar_img",style:D(`background-image: url('/assets/img/shop/${s.id}-1.jpg')`)},null,4),o("div",ao,[o("h5",null,_(s.store_name),1)]),o("div",lo,[o("p",null,"📍"+_(s.store_address),1)])])]),_:2},1032,["to"])]))),128))])]),o("button",no,[t.northPage>1?(a(),l("img",{key:0,src:H,onClick:e[1]||(e[1]=s=>t.scrollToPrevSlide("northShop"))})):v("",!0)]),o("button",{class:"carousel-control-next",onClick:e[2]||(e[2]=s=>t.scrollToNextSlide("northShop"))},[t.northPage<5?(a(),l("img",ro)):v("",!0)])]),io,o("div",co,[o("div",uo,[o("div",ho,[(a(!0),l(f,null,B(t.midShopData,(s,r)=>(a(),l("div",{class:"barCol",key:r},[k(m,{to:"/detail/"+s.id},{default:P(()=>[o("div",_o,[o("div",mo,_(s.subtitle),1),o("div",{class:"bar_img",style:D(`background-image: url('/assets/img/shop/${s.id}-1.jpg')`)},null,4),o("div",vo,[o("h5",null,_(s.store_name),1)]),o("div",go,[o("p",null,"📍"+_(s.store_address),1)])])]),_:2},1032,["to"])]))),128))])]),o("button",po,[t.midPage>1?(a(),l("img",{key:0,src:H,onClick:e[3]||(e[3]=s=>t.scrollToPrevSlide("midShop"))})):v("",!0)]),o("button",{class:"carousel-control-next",onClick:e[4]||(e[4]=s=>t.scrollToNextSlide("midShop"))},[t.midPage<5?(a(),l("img",bo)):v("",!0)])]),So,o("div",ko,[o("div",fo,[o("div",yo,[(a(!0),l(f,null,B(t.southShopData,(s,r)=>(a(),l("div",{class:"barCol",key:r},[k(m,{to:"/detail/"+s.id},{default:P(()=>[o("div",wo,[o("div",xo,_(s.subtitle),1),o("div",{class:"bar_img",style:D(`background-image: url('/assets/img/shop/${s.id}-1.jpg')`)},null,4),o("div",Co,[o("h5",null,_(s.store_name),1)]),o("div",To,[o("p",null,"📍"+_(s.store_address),1)])])]),_:2},1032,["to"])]))),128))])]),o("button",Bo,[t.southPage>1?(a(),l("img",{key:0,src:H,onClick:e[5]||(e[5]=s=>t.scrollToPrevSlide("southShop"))})):v("",!0)]),o("button",{class:"carousel-control-next",onClick:e[6]||(e[6]=s=>t.scrollToNextSlide("southShop"))},[t.southPage<5?(a(),l("img",Po)):v("",!0)])])]),Do])])],64)}const jo=L(Q,[["render",Ho]]);export{jo as default};
