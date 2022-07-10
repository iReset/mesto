(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e,this._handlers=n,this._headers=r}var n,r;return n=t,(r=[{key:"setLike",value:function(e,t){return fetch("".concat(this._baseUrl,"/").concat(this._handlers.likes,"/").concat(e),{method:t?"PUT":"DELETE",headers:this._headers}).then(this._getJson)}},{key:"addCard",value:function(e){return fetch("".concat(this._baseUrl,"/").concat(this._handlers.cards),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(this._getJson)}},{key:"editProfile",value:function(e){return fetch("".concat(this._baseUrl,"/").concat(this._handlers.me),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._getJson)}},{key:"loadUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/").concat(this._handlers.me),{headers:this._headers}).then(this._getJson)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/").concat(this._handlers.cards,"/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getJson)}},{key:"editAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/").concat(this._handlers.avatar),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._getJson)}},{key:"loadCards",value:function(){return fetch("".concat(this._baseUrl,"/").concat(this._handlers.cards),{headers:this._headers}).then(this._getJson)}},{key:"_getJson",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n,r){var o=r.handleCardClick,i=r.handleLikeClick,a=r.handleRemoveClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._id=t.id,this._caption=t.name,this._imageLink=t.link,this._likes=t.likes,this._liked=t.liked,this._imageAlt=t.alt,this._canDelete=t.canDelete,this._handleCardClick=o,this._handleLikeClick=i,this._handleRemoveClick=a,this._options=n,this._template=this._getTemplateElement(n.template),this._element=null,this._elementCaption=null,this._elementImage=null,this._elementLike=null,this._elementQuantity=null,this._elementRemove=null}var t,r;return t=e,(r=[{key:"_getTemplateElement",value:function(e){return document.querySelector(e).content.querySelector(this._options.classCard)}},{key:"getCountLikes",value:function(){return this._likes}},{key:"isLiked",value:function(){return this._liked}},{key:"setLike",value:function(e,t){this._likes=t,this._liked=e,this._elementLike.classList.toggle(this._options.likeButtonActive,this._liked),this._elementQuantity.textContent=this._likes}},{key:"getId",value:function(){return this._id}},{key:"removeCard",value:function(){this._element.remove(),this._element=null,this._elementCaption=null,this._elementImage=null,this._elementLike=null,this._elementQuantity=null,this._elementRemove=null}},{key:"_setEventListeners",value:function(){var e=this;this._elementImage.addEventListener("click",(function(){return e._handleCardClick({link:e._imageLink,alt:e._imageAlt,name:e._caption})})),this._elementLike.addEventListener("click",(function(){return e._handleLikeClick()})),this._canDelete&&this._elementRemove.addEventListener("click",(function(){return e._handleRemoveClick()}))}},{key:"createCard",value:function(){return this._element=this._template.cloneNode(!0),this._elementCaption=this._element.querySelector(this._options.caption),this._elementImage=this._element.querySelector(this._options.image),this._elementLike=this._element.querySelector(this._options.likeButton),this._elementQuantity=this._element.querySelector(this._options.quantity),this._elementRemove=this._element.querySelector(this._options.removeButton),this._canDelete||(this._elementRemove.remove(),this._elementRemove=null),this._elementCaption.textContent=this._caption,this._elementImage.src=this._imageLink,this._elementImage.alt=this._imageAlt,this.setLike(this._liked,this._likes),this._setEventListeners(),this._element}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=t,this._buttonElement=t.querySelector(".".concat(n.buttonSubmitClass)),this._inputList=Array.from(t.querySelectorAll(".".concat(n.inputSelector))),this._inputErrorClass=n.inputErrorClass}var t,n;return t=e,(n=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_disableButton",value:function(){this._buttonElement.disabled=!0}},{key:"_enableButton",value:function(){this._buttonElement.disabled=!1}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disableButton():this._enableButton()}},{key:"_showInputError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.hidden=!1}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));t.hidden=!0,t.textContent="",e.classList.remove(this._inputErrorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){return e._hideInputError(t)})),this._disableButton()}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._button=this._popup.querySelector(".popup__close-button"),this._handleEscape=this._handleEscape.bind(this)}var t,n;return t=e,(n=[{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscape)}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscape)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup")&&e.close()})),this._button.addEventListener("click",this.close.bind(this))}},{key:"_handleEscape",value:function(e){"Escape"===e.key&&this.close()}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},s.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function h(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function a(e,t){var n,r=t.formSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._form=n._popup.querySelector(r),n._handleSubmit=null,n}return t=a,(n=[{key:"setEventListeners",value:function(){s(d(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._submit.bind(this))}},{key:"setHandler",value:function(e){this._handleSubmit=e}},{key:"_submit",value:function(e){e.preventDefault(),this._handleSubmit(),this.close()}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=b(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function b(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function g(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function a(e,t,n,r){var o,l=t.buttonSelector,u=t.formSelector,c=t.inputSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(o=i.call(this,e))._form=o._popup.querySelector(u),o._buttonSave=o._popup.querySelector(l),o._inputList=o._popup.querySelectorAll(c),o._handleSubmit=n,o._getInitial=r,o}return t=a,(n=[{key:"getForm",value:function(){return this._form}},{key:"close",value:function(){m(w(a.prototype),"close",this).call(this),this._form.reset()}},{key:"open",value:function(){this._initFields(),this._buttonSave.textContent="Сохранить",m(w(a.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){m(w(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._submit.bind(this))}},{key:"_initFields",value:function(){if(this._getInitial){var e=this._getInitial();this._inputList.forEach((function(t){e[t.name]&&(t.value=e[t.name])}))}}},{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"_submit",value:function(e){e.preventDefault(),this._buttonSave.textContent="Сохранение...",this._handleSubmit(this._getInputValues())}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=L(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},C.apply(this,arguments)}function L(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}function j(e,t){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},j(e,t)}function P(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(r);if(o){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function a(e,t){var n,r=t.captionSelector,o=t.imageSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._caption=n._popup.querySelector(r),n._image=n._popup.querySelector(o),n}return t=a,(n=[{key:"close",value:function(){C(I(a.prototype),"close",this).call(this)}},{key:"open",value:function(e){var t=e.link,n=e.alt,r=void 0===n?o:n,o=e.name;this._image.src=t,this._image.alt=r,this._caption.textContent=o,C(I(a.prototype),"open",this).call(this)}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;this._clear(),e.forEach((function(e){return t._renderer(e)}))}},{key:"_clear",value:function(){this._container.innerHTML=""}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var U=function(){function e(t){var n=t.selectorName,r=t.selectorAbout,o=t.selectorAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._about=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserId",value:function(){return this._id}},{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"setAvatar",value:function(e){this._avatar.src=e}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e._id,o=e.avatar;this._name.textContent=t,this._about.textContent=n,this._id=r,o&&this.setAvatar(o)}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),B={template:"#element",classCard:".element",likeButton:".element__like-button",quantity:".element__like-quantity",removeButton:".element__remove-button",likeButtonActive:"element__like-button_active",image:".element__image",caption:".element__caption"},x={buttonSubmitClass:"popup__save-button",inputErrorClass:"popup__input_type_error",inputSelector:"popup__input"},D={buttonSelector:".popup__save-button",formSelector:".popup__form",inputSelector:".popup__input"},V=document.querySelector(".profile__add-button"),J=document.querySelector(".profile__avatar-edit"),F=document.querySelector(".profile__edit-button"),N="".concat("f2d32e19-46c1-44b6-b01c-9dafb3d301cf"),H="".concat("cohort-44"),Q="".concat("https://nomoreparties.co/v1","/").concat(H);function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var z=new U({selectorName:".profile__name",selectorAbout:".profile__about",selectorAvatar:".profile__avatar"}),$=new S(".popup_type_edit-profile",D,(function(e){var t=e.name,n=e.about;le.editProfile({name:t.trim(),about:n.trim()}).then((function(e){z.setUserInfo({name:e.name,about:e.about})})).catch(console.log).finally((function(e){return $.close()}))}),z.getUserInfo.bind(z));$.setEventListeners();var G=new i($.getForm(),x);G.enableValidation();var K=new S(".popup_type_edit-avatar",D,(function(e){var t=e.avatar_link;le.editAvatar({avatar:t.trim()}).then((function(e){z.setAvatar(e.avatar)})).catch(console.log).finally((function(e){return K.close()}))}));K.setEventListeners();var W=new i(K.getForm(),x);W.enableValidation();var X=new S(".popup_type_add-card",D,(function(e){var t=e.title,n=e.link;le.addCard({name:t.trim(),link:n.trim()}).then((function(e){ae({id:e._id,name:e.name,link:e.link,likes:e.likes.length,liked:e.likes.filter((function(e){return e._id==z.getUserId()})).length>0,canDelete:!0})})).catch(console.log).finally((function(e){return X.close()}))}));X.setEventListeners();var Y=new i(X.getForm(),x);function Z(){var e=this;ee.close(),le.deleteCard(this.getId()).then((function(t){console.log(t),e.removeCard()})).catch(console.log)}Y.enableValidation();var ee=new _(".popup_type_confirm",{formSelector:".popup__form"});ee.setEventListeners();var te=new R(".popup_type_open-image",{captionSelector:".popup__caption",imageSelector:".popup__image"});te.setEventListeners();var ne=new T({renderer:ae},".elements__list");function re(e){te.open(e)}function oe(){ee.setHandler(Z.bind(this)),ee.open()}function ie(){var e=this,t=!this.isLiked(),n=this.getCountLikes();this.setLike(t,n+(t?1:-1)),le.setLike(this.getId(),t).then((function(t){e.setLike(null!=t.likes.find((function(e){return e._id==z.getUserId()})),t.likes.length)})).catch(console.log)}function ae(e){var t=new r(e,B,{handleCardClick:re,handleLikeClick:ie,handleRemoveClick:oe});ne.addItem(t.createCard())}V.addEventListener("click",(function(e){Y.resetValidation(),X.open.bind(X)()})),F.addEventListener("click",(function(e){G.resetValidation(),$.open.bind($)()})),J.addEventListener("click",(function(e){W.resetValidation(),K.open.bind(K)()}));var le=new t(Q,{me:"users/me",avatar:"users/me/avatar",cards:"cards",likes:"cards/likes"},{authorization:N,"Content-Type":"application/json"});Promise.all([le.loadUserInfo(),le.loadCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];z.setUserInfo(o),ne.renderItems(i.reverse().map((function(e){return{id:e._id,name:e.name,link:e.link,likes:e.likes.length,liked:null!=e.likes.find((function(e){return e._id==z.getUserId()})),canDelete:e.owner._id&&e.owner._id==z.getUserId()}})))})).catch(console.log)})();