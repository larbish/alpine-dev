import f from"./ContentSlot.5e7b678f.js";import y from"./ButtonLink.d21803b6.js";import h from"./Terminal.ea38f343.js";import k from"./VideoPlayer.45a4174d.js";import{d as v,b as s,c as a,e as o,g as c,f as r,w as i,D as u,K as l,F as $,t as d,V as B,l as w}from"./entry.f77b1015.js";import"./index.8e3d706b.js";const g={class:"block-hero"},S={class:"layout"},V={class:"content"},b={key:0,class:"announce"},C={class:"title"},H={class:"description"},q={key:1,class:"extra"},N={class:"actions"},x=["href"],A={class:"support"},T=v({__name:"BlockHero",props:{cta:{type:Array,required:!1,default:()=>[]},secondary:{type:Array,required:!1,default:()=>[]},video:{type:String,required:!1,default:""},snippet:{type:[Array,String],required:!1,default:""}},setup(e){return(t,D)=>{const n=f,_=y,p=h,m=k;return s(),a("section",g,[o("div",S,[o("div",V,[t.$slots.announce?(s(),a("p",b,[c(n,{use:t.$slots.announce,unwrap:"p"},null,8,["use"])])):r("",!0),o("h1",C,[c(n,{use:t.$slots.title,unwrap:"p"},{default:i(()=>[u(" Hero Title ")]),_:1},8,["use"])]),o("p",H,[c(n,{use:t.$slots.description,unwrap:"p"},{default:i(()=>[u(" Hero default description. ")]),_:1},8,["use"])]),t.$slots.extra?(s(),a("div",q,[c(n,{use:t.$slots.extra,unwrap:"p"},null,8,["use"])])):r("",!0),o("div",N,[t.$slots.actions?(s(),l(n,{key:0,use:t.$slots.actions,unwrap:"p"},null,8,["use"])):(s(),a($,{key:1},[e.cta?(s(),l(_,{key:0,class:"cta",bold:"",size:"medium",href:e.cta[1]},{default:i(()=>[u(d(e.cta[0]),1)]),_:1},8,["href"])):r("",!0),e.secondary?(s(),a("a",{key:1,href:e.secondary[1],class:"secondary"},d(e.secondary[0]),9,x)):r("",!0)],64))])]),o("div",A,[B(t.$slots,"support",{},()=>[e.snippet?(s(),l(p,{key:0,content:e.snippet},null,8,["content"])):e.video?(s(),l(m,{key:1,src:e.video},null,8,["src"])):r("",!0)],!0)])])])}}});const P=w(T,[["__scopeId","data-v-b7c89672"]]);export{P as default};