"use strict";(self.webpackChunkproje=self.webpackChunkproje||[]).push([[484],{10484:(t,e,s)=>{s.r(e),s.d(e,{default:()=>j});var l=s(9950),a=s(28429),n=s(3814),i=s(26906),c=s(1201),o=s(96032),r=s(39076),_=s(18442),m=s(30948),d=s(1443);const u={container:"style_container__FT+II",header:"style_header__3SJ7v",wallet:"style_wallet__8apOO",icon:"style_icon__GFHQr",amount:"style_amount__A25WI",refresh:"style_refresh__BkGg0",refreshing:"style_refreshing__pDKQX",rotation:"style_rotation__ynUmi",button:"style_button__QwWRp",logoPng:"style_logoPng__0yGUl",content:"style_content__0m0C7",title1:"style_title1__9w4CQ",title2:"style_title2__6pP6q",title3:"style_title3__jmOd6",title5:"style_title5__0fKAT",title4:"style_title4__IHaQo",concactItem:"style_concactItem__VgqZ6",kefu:"style_kefu__3GXcF",title:"style_title__yU2eD",concactWrap:"style_concactWrap__MD9pz","fix-bet-limit-toast":"style_fix-bet-limit-toast__SER4r","fix-bet-limit-toast-content":"style_fix-bet-limit-toast-content__O229m"};var h=s(7901),y=s(4159),p=s.n(y),x=s(40032),N=s(89856),g=s(44414);const j=()=>{const t=(0,o.A)(),{userName:e,isLogin:s}=(0,c.A)(),[y,j]=(0,l.useState)(!1),v=(0,a.Zp)(),{balance:f,setBalance:T}=(0,i.wq)(),[b,I]=(0,l.useState)(null),{data:k}=(0,h.I)({queryKey:["sportMaintenance"],queryFn:async()=>{try{return await(0,n.Fw)({channelType:1})}catch(t){return null}},refetchInterval:15e3});(0,l.useEffect)((()=>{(0,N.Ay)((0,g.jsxs)("div",{className:u["fix-bet-limit-toast-content"],children:[(0,g.jsx)("img",{src:x,alt:""}),(0,g.jsx)("span",{children:"S\u1ea3nh Th\u1ec3 Thao 2Q \u0111ang b\u1ea3o tr\xec"})]}),{className:u["fix-bet-limit-toast"],duration:4e3,icon:null,TOAST_LIMIT:1})}),[]),(0,l.useEffect)((()=>{var t;k&&Object.keys(k).length>0&&(null!==k&&void 0!==k&&k.data&&1===(null===k||void 0===k||null===(t=k.data)||void 0===t?void 0:t.switchs)?I(null===k||void 0===k?void 0:k.data):setTimeout((()=>{v("/sports")}),1e3))}),[k]);const H=async()=>{var t;j(!0);const e=await(0,n.T_)({});T(null===(t=e.data)||void 0===t?void 0:t.totalAvailableAmount),j(!1)};return(0,g.jsxs)("div",{className:u.container,children:[(0,g.jsx)(N.l$,{toastOptions:{style:{borderRadius:"40px"}}}),(0,g.jsxs)("section",{className:u.header,children:[s&&(0,g.jsxs)("div",{className:u.wallet,children:[(0,g.jsx)("img",{className:u.icon,src:r,alt:""}),(0,g.jsx)("div",{className:u.amount,children:f}),(0,g.jsx)("img",{className:"".concat(u.refresh," ").concat(y?u.refreshing:""),src:_,alt:"",onClick:H})]}),(0,g.jsx)("a",{className:"".concat(u.button," ").concat(u.buttonBlue),onClick:()=>{s?v("/deposit",{state:{type:1}}):v("/login")},children:s?"N\u1ea0P TI\u1ec0N":"\u0110\u0102NG NH\u1eacP"})]}),(0,g.jsx)("img",{className:u.logoPng,src:"https://thang.2qwin.top/file/static/sports/images/common/img/2qLogo.png"}),(0,g.jsxs)("section",{className:u.content,children:[(0,g.jsx)("p",{className:u.title2,children:"TH\u1ec2 THAO 2Q XIN TR\xc2N TR\u1eccNG TH\xd4NG B\xc1O"}),(0,g.jsxs)("p",{className:u.title3,children:["Th\u1eddi gian b\u1ea3o tr\xec b\u1eaft \u0111\u1ea7u : ",(null===b||void 0===b?void 0:b.startTime)&&p()(null===b||void 0===b?void 0:b.startTime).format("DD-MM HH:mm")," - ",(null===b||void 0===b?void 0:b.endTime)&&p()(null===b||void 0===b?void 0:b.endTime).format("DD-MM HH:mm"),"."]}),(0,g.jsx)("p",{className:u.title5,dangerouslySetInnerHTML:{__html:null===b||void 0===b?void 0:b.content}}),(0,g.jsx)("p",{className:u.title4,children:"Tr\xe2n tr\u1ecdng c\u1ea3m \u01a1n!"})]}),(0,g.jsxs)("div",{className:u.concactWrap,children:[(0,g.jsxs)("section",{className:u.concactItem,onClick:()=>{v("/games")},children:[(0,g.jsx)("p",{className:u.kefu,children:(0,g.jsx)("img",{src:d})}),(0,g.jsx)("span",{className:u.title,children:"V\u1ec0 TRANG CH\u1ee6"})]}),(0,g.jsxs)("section",{className:u.concactItem,onClick:t,children:[(0,g.jsx)("p",{className:u.kefu,children:(0,g.jsx)("img",{src:m})}),(0,g.jsx)("span",{className:u.title,children:"LI\xcaN H\u1ec6 CSKH"})]})]})]})}}}]);