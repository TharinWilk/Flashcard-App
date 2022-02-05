(function(e){function t(t){for(var n,o,s=t[0],d=t[1],l=t[2],u=0,p=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&p.push(c[o][0]),c[o]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);i&&i(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var d=r[s];0!==c[d]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},c={app:0},a=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/flashcard-app/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var i=d;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"3cfe":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),c={class:"screen"},a={class:"nav-list"};function o(e,t,r,o,s,d){var l=Object(n["j"])("Welcome"),i=Object(n["j"])("CreateCard"),u=Object(n["j"])("Flashcards"),p=Object(n["j"])("Settings");return Object(n["h"])(),Object(n["d"])("div",c,[Object(n["e"])("nav",null,[Object(n["e"])("div",a,[Object(n["e"])("button",{onClick:t[0]||(t[0]=function(){return d.openCreateModal&&d.openCreateModal.apply(d,arguments)}),class:"nav-button"},"New Card"),Object(n["e"])("button",{onClick:t[1]||(t[1]=function(){return d.showCards&&d.showCards.apply(d,arguments)}),class:"nav-button"},"Study Flashcards"),Object(n["e"])("button",{onClick:t[2]||(t[2]=function(){return d.openSettings&&d.openSettings.apply(d,arguments)}),class:"nav-button"},"Settings")])]),Object(n["e"])("main",null,[Object(n["o"])(Object(n["f"])(l,null,null,512),[[n["m"],s.atHomeScreen]]),Object(n["o"])(Object(n["f"])(i,{onCloseCreate:d.closeCreateModal,onCardAdded:d.addNewCard},null,8,["onCloseCreate","onCardAdded"]),[[n["m"],s.createIsOpen]]),Object(n["o"])(Object(n["f"])(u,{deck:s.deck},null,8,["deck"]),[[n["m"],s.studying]]),Object(n["o"])(Object(n["f"])(p,null,null,512),[[n["m"],s.settingsOpen]])])])}var s={class:"card-area"},d=Object(n["e"])("div",{class:"card-face card-front welcome-card flex-column-center-center"},[Object(n["e"])("h5",null,"Welcome!"),Object(n["e"])("p",null,'Click "New Card" to get started.'),Object(n["e"])("p",null,'After adding your cards click "Study Flashcards" to begin studying.')],-1),l=Object(n["e"])("div",{class:"card-face card-back welcome-card flex-column-center-center"},[Object(n["e"])("p",null,"When studying, click on a card to flip it."),Object(n["e"])("p",null,'Click "Correct!" or "Try Again" to move to the next card.')],-1),i=[d,l];function u(e,t,r,c,a,o){return Object(n["h"])(),Object(n["d"])("div",s,[Object(n["e"])("div",{class:Object(n["g"])(["card",{flipped:a.flipped}]),onClick:t[0]||(t[0]=function(){return o.flipWelcome&&o.flipWelcome.apply(o,arguments)})},i,2)])}var p={data:function(){return{flipped:!1,flipTimer:null}},methods:{flipWelcome:function(){this.flipped=!this.flipped,clearInterval(this.flipTimer)}},mounted:function(){var e=this;this.flipTimer=setInterval((function(){e.flipped=!e.flipped}),1e4)}},b=r("6b0d"),f=r.n(b);const h=f()(p,[["render",u]]);var O=h,j={id:"create-section"},m=Object(n["e"])("h1",null,"Create New Flashcard",-1),y={class:"create-front inputs"},v=Object(n["e"])("h3",null,"Create Flashcard Front",-1),C={class:"create-back inputs"},g=Object(n["e"])("h3",null,"Create Flashcard Back",-1),k={class:"buttons"};function x(e,t,r,c,a,o){return Object(n["h"])(),Object(n["d"])("section",j,[m,Object(n["e"])("div",y,[v,Object(n["o"])(Object(n["e"])("textarea",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.cardFront=e}),type:"text",maxlength:"150"},null,512),[[n["l"],a.cardFront]])]),Object(n["e"])("div",C,[g,Object(n["o"])(Object(n["e"])("textarea",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.cardBack=e}),type:"text",maxlength:"150"},null,512),[[n["l"],a.cardBack]])]),Object(n["e"])("div",k,[Object(n["e"])("button",{type:"button",class:"section-button",onClick:t[2]||(t[2]=function(){return o.addCard&&o.addCard.apply(o,arguments)})},"Add Card"),Object(n["e"])("button",{type:"button",class:"section-button",onClick:t[3]||(t[3]=function(){return o.closeCreateModal&&o.closeCreateModal.apply(o,arguments)})},"Close")])])}r("e9c4");var S={data:function(){return{cardFront:"",cardBack:"",cardId:1,cards:[]}},watch:{cards:{handler:function(e){localStorage.cards=JSON.stringify(e)},deep:!0}},mounted:function(){localStorage.cards&&(this.cards=JSON.parse(localStorage.cards),this.cardId=this.cards.length+1,this.$emit("cardAdded",this.cards))},methods:{closeCreateModal:function(){this.$emit("closeCreate")},addCard:function(){var e={};e.front=this.cardFront,e.back=this.cardBack,e.id=this.cardId,this.cards.push(e),this.cardFront="",this.cardBack="",this.cardId++,this.$emit("cardAdded",this.cards)}}};const w=f()(S,[["render",x]]);var P=w,T={class:"flashcardSection"},F={class:"card-area"},I={class:"card-front card-face flex-column-center-center"},A={class:"card-back card-face flex-column-center-center"},M={class:"flashcard-buttons"};function N(e,t,r,c,a,o){return Object(n["h"])(),Object(n["d"])("div",T,[Object(n["e"])("div",F,[(Object(n["h"])(!0),Object(n["d"])(n["a"],null,Object(n["i"])(r.deck,(function(e){return Object(n["h"])(),Object(n["d"])("div",{key:e.id},[Object(n["f"])(n["b"],{name:"fade"},{default:Object(n["n"])((function(){return[Object(n["o"])(Object(n["e"])("div",{class:Object(n["g"])(["card",{flipped:a.flipped}]),onClick:t[0]||(t[0]=function(){return o.flipCard&&o.flipCard.apply(o,arguments)})},[Object(n["e"])("div",I,Object(n["k"])(e.front),1),Object(n["e"])("div",A,Object(n["k"])(e.back),1)],2),[[n["m"],e.id===a.cardNumber]])]})),_:2},1024)])})),128))]),Object(n["f"])(n["b"],{name:"fade"},{default:Object(n["n"])((function(){return[Object(n["o"])(Object(n["e"])("div",M,[Object(n["e"])("button",{class:"section-button",onClick:t[1]||(t[1]=function(){return o.nextCard&&o.nextCard.apply(o,arguments)})},"Correct!"),Object(n["e"])("button",{onClick:t[2]||(t[2]=function(){return o.nextCard&&o.nextCard.apply(o,arguments)}),class:"section-button"},"Try Again")],512),[[n["m"],a.flipped]])]})),_:1})])}var B={props:["deck"],data:function(){return{flipped:!1,cardNumber:1}},methods:{flipCard:function(){this.flipped=!this.flipped},nextCard:function(){this.flipped=!1,this.cardNumber<this.deck.length?this.cardNumber++:this.cardNumber=1}}};const D=f()(B,[["render",N]]);var _=D,W={id:"settings"},H=Object(n["e"])("h1",null,"Settings",-1),J={class:"controls"};function $(e,t,r,c,a,o){var s=Object(n["j"])("CardControls"),d=Object(n["j"])("ColorControls");return Object(n["h"])(),Object(n["d"])("section",W,[H,Object(n["e"])("div",J,[Object(n["f"])(s),Object(n["f"])(d)])])}var U={class:"card-controls"},V={class:"control-deck"},E=Object(n["e"])("h3",null,"Delete Flashcards",-1),q=Object(n["e"])("p",{class:"section-text"},"Click here to delete the currently stored deck of flashcards.",-1);function z(e,t,r,c,a,o){return Object(n["h"])(),Object(n["d"])("div",U,[Object(n["e"])("div",V,[E,q,Object(n["e"])("button",{class:"section-button",onClick:t[0]||(t[0]=function(){return o.deleteDeck&&o.deleteDeck.apply(o,arguments)})}," Delete Flashcards")])])}var G={methods:{deleteDeck:function(){localStorage.removeItem("cards"),window.location.reload()}}};const K=f()(G,[["render",z]]);var L=K,Q={class:"colorSettings flexColumn"},R=Object(n["e"])("div",{class:"colorSettingsText"},[Object(n["e"])("h3",null,"Change Theme"),Object(n["e"])("p",{class:"section-text"},"Select a theme to change the color of the text, background, and cards")],-1),X=Object(n["e"])("div",{class:"exampleCard"},[Object(n["e"])("p",null,"Example Text")],-1),Y={class:"themeOptions"};function Z(e,t,r,c,a,o){return Object(n["h"])(),Object(n["d"])("div",Q,[R,X,Object(n["e"])("div",Y,[Object(n["e"])("button",{class:"section-button",onClick:t[0]||(t[0]=function(){return o.standardTheme&&o.standardTheme.apply(o,arguments)})},"Standard"),Object(n["e"])("button",{class:"section-button",onClick:t[1]||(t[1]=function(){return o.darkTheme&&o.darkTheme.apply(o,arguments)})},"Dark")])])}var ee={methods:{standardTheme:function(){var e=document.body.style;e.setProperty("--primary-text","#000080"),e.setProperty("--primary-color","#ddd"),e.setProperty("--primary-hover","#fff"),e.setProperty("--secondary-text","#333"),e.setProperty("--light-primary-color","#f5f5f5"),e.setProperty("--secondary-hover","#bbb"),e.setProperty("--secondary-foucus","#c3c3c3"),e.setProperty("--primary-focus","#eee")},darkTheme:function(){var e=document.body.style;e.setProperty("--primary-text","#D3D3D3"),e.setProperty("--primary-color","#212121"),e.setProperty("--primary-hover","#555"),e.setProperty("--secondary-text","#B3B3B3"),e.setProperty("--light-primary-color","#404040"),e.setProperty("--secondary-hover","#333"),e.setProperty("--secondary-foucus","#AAA"),e.setProperty("--primary-focus","#181818")}}};const te=f()(ee,[["render",Z]]);var re=te,ne={components:{CardControls:L,ColorControls:re}};const ce=f()(ne,[["render",$]]);var ae=ce,oe={name:"App",components:{Welcome:O,CreateCard:P,Flashcards:_,Settings:ae},data:function(){return{atHomeScreen:!0,createIsOpen:!1,deck:null,studying:!1,settingsOpen:!1}},methods:{openCreateModal:function(){this.createIsOpen=!0,this.studying=!1,this.atHomeScreen=!1,this.settingsOpen=!1},closeCreateModal:function(){this.createIsOpen=!1,this.atHomeScreen=!0},addNewCard:function(e){this.deck=e},showCards:function(){this.createIsOpen=!1,this.studying=!this.studying,this.atHomeScreen=!this.studying,this.settingsOpen=!1},openSettings:function(){this.settingsOpen=!this.settingsOpen,this.createIsOpen=!1,this.studying=!1,this.atHomeScreen=!this.settingsOpen}}};r("7568");const se=f()(oe,[["render",o]]);var de=se;Object(n["c"])(de).mount("#app")},7568:function(e,t,r){"use strict";r("3cfe")}});
//# sourceMappingURL=app.e2720a2c.js.map