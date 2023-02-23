(function(){"use strict";var t={7274:function(t,n,e){var o=e(6369),i=function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"app"}},[n("EditorWYSIWYG")],1)},a=[],r=function(){var t=this,n=t._self._c;return n("div",{staticClass:"Editor"},[n("EditorButton")],1)},s=[],l=function(){var t=this,n=t._self._c;return n("div",{staticClass:"EditorButton"},[n("div",{staticClass:"EditorButton_buttonGroup"},[n("button",{staticClass:"EditorButton__button-undo",attrs:{type:"button",disabled:0===t.index},on:{click:t.undo}},[n("img",{attrs:{src:t.buttonIcon.ButtonUndo,alt:""}})]),n("button",{staticClass:"EditorButton__button-redo",attrs:{type:"button"},on:{click:t.redo}},[n("img",{attrs:{src:t.buttonIcon.ButtonRedo,alt:""}})]),n("button",{staticClass:"EditorButton__button-headerText",attrs:{type:"button"},on:{click:t.handleFS31}},[n("img",{attrs:{src:t.buttonIcon.ButtonHeaderText,alt:""}})]),n("button",{staticClass:"EditorButton__button-paragraphText",attrs:{type:"button"},on:{click:t.handleFS15}},[n("img",{attrs:{src:t.buttonIcon.ButtonParagraphText,alt:""}})]),n("button",{staticClass:"EditorButton__button-imageDownload",attrs:{type:"button"},on:{click:t.openModal}},[n("img",{attrs:{src:t.buttonIcon.ButtonImageDownload,alt:""}})]),n("button",{staticClass:"EditorButton__button-copyHtml",attrs:{type:"button"},on:{click:t.copyHtml}},[t._v(" Скопировать-HTML ")])]),t.modalActive?n("ImgModal",{key:t.modalActive,on:{url:t.pasteImage,cancelModal:t.cancelModal}}):t._e(),n("TextArea",{ref:"textarea",attrs:{content:"content"},on:{onInput:t.onInput}})],1)},c=[],u=(e(7658),function(){var t=this,n=t._self._c;return n("div",{staticClass:"textArea"},[n("div",{ref:"editor",staticClass:"textArea__div",attrs:{contenteditable:"true",innerHTML:t.content},on:{input:t.handleOnInput}})])}),d=[],h=e.p+"img/monkeys.61eb4837.jpg",p={name:"TextArea",props:["content"],data(){return{monkeys:h}},methods:{handleOnInput(){this.$emit("onInput")}}},m=p,g=e(1001),f=(0,g.Z)(m,u,d,!1,null,"00c09408",null),v=f.exports,b=function(){var t=this,n=t._self._c;return n("div",{staticClass:"imgModal"},[n("div",{staticClass:"imgModalContent"},[n("div",{staticClass:"imgDownloadIsUrl"},[n("label",[t._v("Вставьте Url: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],staticClass:"imgDownloadIsUrl__input-url",attrs:{type:"url"},domProps:{value:t.url},on:{input:function(n){n.target.composing||(t.url=n.target.value)}}})]),n("div",{staticClass:"imgButtons"},[n("button",{staticClass:"imgButton imgButtons__ok",on:{click:t.emitDataToParent}},[t._v(" Ok ")]),n("button",{staticClass:"imgButton imgButtons__cancel",on:{click:t.cancelModal}},[t._v(" Отмена ")])])])])},x=[],_={name:"ImgModal",data(){return{url:""}},methods:{cancelModal(){this.$emit("cancelModal")},emitDataToParent(){this.$emit("url",{url:this.url})}}},y=_,w=(0,g.Z)(y,b,x,!1,null,"5df724b7",null),B=w.exports,C=e.p+"img/undo.d27133f5.svg",I=e.p+"img/redo.fc13d5ec.svg",T=e.p+"img/paragraphText.1785abe1.svg",M=e.p+"img/imageDownload.c765d23a.svg",k=e.p+"img/headerText.ab40e2cc.svg";const E={ButtonUndo:C,ButtonRedo:I,ButtonParagraphText:T,ButtonImageDownload:M,ButtonHeaderText:k};var $={name:"EditorButton",components:{ImgModal:B,TextArea:v},data(){return{buttonIcon:E,modalActive:!1,url:"",content:"",changes:[],index:0}},methods:{onInput(){const t=this.$refs.textarea.$el.children[0].innerHTML;t!==this.content&&(this.content=t,this.changes=this.changes.slice(0,this.index),this.changes.push(this.content),this.index++)},undo(){this.index>0&&(this.index--,this.content=this.changes[this.index],this.$refs.textarea.$el.children[0].innerHTML=this.content)},redo(){this.index<this.changes.length-1&&(this.index++,this.content=this.changes[this.index],this.$refs.textarea.$el.children[0].innerHTML=this.content)},handleFS(t,n,e){const o=window.getSelection().getRangeAt(0),i=document.createElement(n);i.style.fontSize=t,i.style.display="inline",i.style.fontWeight=e,o.surroundContents(i)},handleFS31(){this.handleFS("31px","h1")},handleFS15(){this.handleFS("15px","span",400)},pasteImage(t){const n=this.$refs.textarea.$refs.editor,e=window.getSelection(),o=document.createRange();o.selectNodeContents(n),o.collapse(!1),e.removeAllRanges(),e.addRange(o);const i=document.createElement("img");i.src=`${t.url}`,i.style.maxWidth="100%",i.style.maxHeight="100%",i.style.display="block",i.style.borderRadius="10px",i.style.resize="both",o.surroundContents(i),this.modalActive=!1},copyHtml(){const t=this.$refs.textarea.$el;navigator.clipboard.writeText(t.innerHTML)},openModal(){this.modalActive=!0},cancelModal(){this.modalActive=!1}}},A=$,O=(0,g.Z)(A,l,c,!1,null,"5114682e",null),S=O.exports,H={name:"EditorWYSIWYG",components:{EditorButton:S}},P=H,D=(0,g.Z)(P,r,s,!1,null,"9afb5a98",null),F=D.exports,W={name:"App",components:{EditorWYSIWYG:F}},j=W,R=(0,g.Z)(j,i,a,!1,null,null,null),Z=R.exports;o.ZP.config.productionTip=!1,new o.ZP({render:t=>t(Z)}).$mount("#app")}},n={};function e(o){var i=n[o];if(void 0!==i)return i.exports;var a=n[o]={exports:{}};return t[o](a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(n,o,i,a){if(!o){var r=1/0;for(u=0;u<t.length;u++){o=t[u][0],i=t[u][1],a=t[u][2];for(var s=!0,l=0;l<o.length;l++)(!1&a||r>=a)&&Object.keys(e.O).every((function(t){return e.O[t](o[l])}))?o.splice(l--,1):(s=!1,a<r&&(r=a));if(s){t.splice(u--,1);var c=i();void 0!==c&&(n=c)}}return n}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[o,i,a]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){e.p="/wysiwyg-editor/"}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var i,a,r=o[0],s=o[1],l=o[2],c=0;if(r.some((function(n){return 0!==t[n]}))){for(i in s)e.o(s,i)&&(e.m[i]=s[i]);if(l)var u=l(e)}for(n&&n(o);c<r.length;c++)a=r[c],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(u)},o=self["webpackChunkwysiwyg_editor"]=self["webpackChunkwysiwyg_editor"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(7274)}));o=e.O(o)})();
//# sourceMappingURL=app.dd4cc874.js.map