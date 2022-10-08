function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e,t){return Object.keys(t).forEach((function(n){"default"===n||"__esModule"===n||e.hasOwnProperty(n)||Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[n]}})})),e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};e(i,"popperGenerator",(()=>Ve)),e(i,"detectOverflow",(()=>Ee)),e(i,"createPopperBase",(()=>qe)),e(i,"createPopper",(()=>Be)),e(i,"createPopperLite",(()=>je));var s={};e(s,"top",(()=>r)),e(s,"bottom",(()=>o)),e(s,"right",(()=>a)),e(s,"left",(()=>c)),e(s,"auto",(()=>u)),e(s,"basePlacements",(()=>l)),e(s,"start",(()=>h)),e(s,"end",(()=>d)),e(s,"clippingParents",(()=>f)),e(s,"viewport",(()=>p)),e(s,"popper",(()=>m)),e(s,"reference",(()=>g)),e(s,"variationPlacements",(()=>y)),e(s,"placements",(()=>v)),e(s,"beforeRead",(()=>w)),e(s,"read",(()=>_)),e(s,"afterRead",(()=>b)),e(s,"beforeMain",(()=>I)),e(s,"main",(()=>T)),e(s,"afterMain",(()=>E)),e(s,"beforeWrite",(()=>S)),e(s,"write",(()=>k)),e(s,"afterWrite",(()=>A)),e(s,"modifierPhases",(()=>C));var r="top",o="bottom",a="right",c="left",u="auto",l=[r,o,a,c],h="start",d="end",f="clippingParents",p="viewport",m="popper",g="reference",y=l.reduce((function(e,t){return e.concat([t+"-"+h,t+"-"+d])}),[]),v=[].concat(l,[u]).reduce((function(e,t){return e.concat([t,t+"-"+h,t+"-"+d])}),[]),w="beforeRead",_="read",b="afterRead",I="beforeMain",T="main",E="afterMain",S="beforeWrite",k="write",A="afterWrite",C=[w,_,b,I,T,E,S,k,A],D={};function N(e){return e?(e.nodeName||"").toLowerCase():null}function x(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function O(e){return e instanceof x(e).Element||e instanceof Element}function R(e){return e instanceof x(e).HTMLElement||e instanceof HTMLElement}function L(e){return"undefined"!=typeof ShadowRoot&&(e instanceof x(e).ShadowRoot||e instanceof ShadowRoot)}e(D,"applyStyles",(()=>P)),e(D,"arrow",(()=>ne)),e(D,"computeStyles",(()=>oe)),e(D,"eventListeners",(()=>ce)),e(D,"flip",(()=>ke)),e(D,"hide",(()=>De)),e(D,"offset",(()=>Ne)),e(D,"popperOffsets",(()=>xe)),e(D,"preventOverflow",(()=>Oe));var P={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},i=t.attributes[e]||{},s=t.elements[e];R(s)&&N(s)&&(Object.assign(s.style,n),Object.keys(i).forEach((function(e){var t=i[e];!1===t?s.removeAttribute(e):s.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var i=t.elements[e],s=t.attributes[e]||{},r=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});R(i)&&N(i)&&(Object.assign(i.style,r),Object.keys(s).forEach((function(e){i.removeAttribute(e)})))}))}},requires:["computeStyles"]};function M(e){return e.split("-")[0]}var U=Math.max,F=Math.min,V=Math.round;function q(){var e=navigator.userAgentData;return null!=e&&e.brands?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function B(){return!/^((?!chrome|android).)*safari/i.test(q())}function j(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var i=e.getBoundingClientRect(),s=1,r=1;t&&R(e)&&(s=e.offsetWidth>0&&V(i.width)/e.offsetWidth||1,r=e.offsetHeight>0&&V(i.height)/e.offsetHeight||1);var o=(O(e)?x(e):window).visualViewport,a=!B()&&n,c=(i.left+(a&&o?o.offsetLeft:0))/s,u=(i.top+(a&&o?o.offsetTop:0))/r,l=i.width/s,h=i.height/r;return{width:l,height:h,top:u,right:c+l,bottom:u+h,left:c,x:c,y:u}}function $(e){var t=j(e),n=e.offsetWidth,i=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-i)<=1&&(i=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:i}}function G(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&L(n)){var i=t;do{if(i&&e.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function H(e){return x(e).getComputedStyle(e)}function z(e){return["table","td","th"].indexOf(N(e))>=0}function K(e){return((O(e)?e.ownerDocument:e.document)||window.document).documentElement}function W(e){return"html"===N(e)?e:e.assignedSlot||e.parentNode||(L(e)?e.host:null)||K(e)}function Q(e){return R(e)&&"fixed"!==H(e).position?e.offsetParent:null}function Y(e){for(var t=x(e),n=Q(e);n&&z(n)&&"static"===H(n).position;)n=Q(n);return n&&("html"===N(n)||"body"===N(n)&&"static"===H(n).position)?t:n||function(e){var t=/firefox/i.test(q());if(/Trident/i.test(q())&&R(e)&&"fixed"===H(e).position)return null;var n=W(e);for(L(n)&&(n=n.host);R(n)&&["html","body"].indexOf(N(n))<0;){var i=H(n);if("none"!==i.transform||"none"!==i.perspective||"paint"===i.contain||-1!==["transform","perspective"].indexOf(i.willChange)||t&&"filter"===i.willChange||t&&i.filter&&"none"!==i.filter)return n;n=n.parentNode}return null}(e)||t}function X(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function J(e,t,n){return U(e,F(t,n))}function Z(e,t,n){var i=J(e,t,n);return i>n?n:i}function ee(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function te(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var ne={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,i=e.name,s=e.options,u=n.elements.arrow,h=n.modifiersData.popperOffsets,d=M(n.placement),f=X(d),p=[c,a].indexOf(d)>=0?"height":"width";if(u&&h){var m=function(e,t){return ee("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:te(e,l))}(s.padding,n),g=$(u),y="y"===f?r:c,v="y"===f?o:a,w=n.rects.reference[p]+n.rects.reference[f]-h[f]-n.rects.popper[p],_=h[f]-n.rects.reference[f],b=Y(u),I=b?"y"===f?b.clientHeight||0:b.clientWidth||0:0,T=w/2-_/2,E=m[y],S=I-g[p]-m[v],k=I/2-g[p]/2+T,A=J(E,k,S),C=f;n.modifiersData[i]=((t={})[C]=A,t.centerOffset=A-k,t)}},effect:function(e){var t=e.state,n=e.options.element,i=void 0===n?"[data-popper-arrow]":n;null!=i&&("string"!=typeof i||(i=t.elements.popper.querySelector(i)))&&G(t.elements.popper,i)&&(t.elements.arrow=i)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ie(e){return e.split("-")[1]}var se={top:"auto",right:"auto",bottom:"auto",left:"auto"};function re(e){var t,n=e.popper,i=e.popperRect,s=e.placement,u=e.variation,l=e.offsets,h=e.position,f=e.gpuAcceleration,p=e.adaptive,m=e.roundOffsets,g=e.isFixed,y=l.x,v=void 0===y?0:y,w=l.y,_=void 0===w?0:w,b="function"==typeof m?m({x:v,y:_}):{x:v,y:_};v=b.x,_=b.y;var I=l.hasOwnProperty("x"),T=l.hasOwnProperty("y"),E=c,S=r,k=window;if(p){var A=Y(n),C="clientHeight",D="clientWidth";if(A===x(n)&&"static"!==H(A=K(n)).position&&"absolute"===h&&(C="scrollHeight",D="scrollWidth"),s===r||(s===c||s===a)&&u===d)S=o,_-=(g&&A===k&&k.visualViewport?k.visualViewport.height:A[C])-i.height,_*=f?1:-1;if(s===c||(s===r||s===o)&&u===d)E=a,v-=(g&&A===k&&k.visualViewport?k.visualViewport.width:A[D])-i.width,v*=f?1:-1}var N,O=Object.assign({position:h},p&&se),R=!0===m?function(e){var t=e.x,n=e.y,i=window.devicePixelRatio||1;return{x:V(t*i)/i||0,y:V(n*i)/i||0}}({x:v,y:_}):{x:v,y:_};return v=R.x,_=R.y,f?Object.assign({},O,((N={})[S]=T?"0":"",N[E]=I?"0":"",N.transform=(k.devicePixelRatio||1)<=1?"translate("+v+"px, "+_+"px)":"translate3d("+v+"px, "+_+"px, 0)",N)):Object.assign({},O,((t={})[S]=T?_+"px":"",t[E]=I?v+"px":"",t.transform="",t))}var oe={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,i=n.gpuAcceleration,s=void 0===i||i,r=n.adaptive,o=void 0===r||r,a=n.roundOffsets,c=void 0===a||a,u={placement:M(t.placement),variation:ie(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:s,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,re(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,re(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},ae={passive:!0};var ce={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,i=e.options,s=i.scroll,r=void 0===s||s,o=i.resize,a=void 0===o||o,c=x(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return r&&u.forEach((function(e){e.addEventListener("scroll",n.update,ae)})),a&&c.addEventListener("resize",n.update,ae),function(){r&&u.forEach((function(e){e.removeEventListener("scroll",n.update,ae)})),a&&c.removeEventListener("resize",n.update,ae)}},data:{}},ue={left:"right",right:"left",bottom:"top",top:"bottom"};function le(e){return e.replace(/left|right|bottom|top/g,(function(e){return ue[e]}))}var he={start:"end",end:"start"};function de(e){return e.replace(/start|end/g,(function(e){return he[e]}))}function fe(e){var t=x(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function pe(e){return j(K(e)).left+fe(e).scrollLeft}function me(e,t){var n=x(e),i=K(e),s=n.visualViewport,r=i.clientWidth,o=i.clientHeight,a=0,c=0;if(s){r=s.width,o=s.height;var u=B();(u||!u&&"fixed"===t)&&(a=s.offsetLeft,c=s.offsetTop)}return{width:r,height:o,x:a+pe(e),y:c}}function ge(e){var t,n=K(e),i=fe(e),s=null==(t=e.ownerDocument)?void 0:t.body,r=U(n.scrollWidth,n.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),o=U(n.scrollHeight,n.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-i.scrollLeft+pe(e),c=-i.scrollTop;return"rtl"===H(s||n).direction&&(a+=U(n.clientWidth,s?s.clientWidth:0)-r),{width:r,height:o,x:a,y:c}}function ye(e){var t=H(e),n=t.overflow,i=t.overflowX,s=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+s+i)}function ve(e){return["html","body","#document"].indexOf(N(e))>=0?e.ownerDocument.body:R(e)&&ye(e)?e:ve(W(e))}function we(e,t){var n;void 0===t&&(t=[]);var i=ve(e),s=i===(null==(n=e.ownerDocument)?void 0:n.body),r=x(i),o=s?[r].concat(r.visualViewport||[],ye(i)?i:[]):i,a=t.concat(o);return s?a:a.concat(we(W(o)))}function _e(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function be(e,t,n){return t===p?_e(me(e,n)):O(t)?function(e,t){var n=j(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):_e(ge(K(e)))}function Ie(e,t,n,i){var s="clippingParents"===t?function(e){var t=we(W(e)),n=["absolute","fixed"].indexOf(H(e).position)>=0&&R(e)?Y(e):e;return O(n)?t.filter((function(e){return O(e)&&G(e,n)&&"body"!==N(e)})):[]}(e):[].concat(t),r=[].concat(s,[n]),o=r[0],a=r.reduce((function(t,n){var s=be(e,n,i);return t.top=U(s.top,t.top),t.right=F(s.right,t.right),t.bottom=F(s.bottom,t.bottom),t.left=U(s.left,t.left),t}),be(e,o,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Te(e){var t,n=e.reference,i=e.element,s=e.placement,u=s?M(s):null,l=s?ie(s):null,f=n.x+n.width/2-i.width/2,p=n.y+n.height/2-i.height/2;switch(u){case r:t={x:f,y:n.y-i.height};break;case o:t={x:f,y:n.y+n.height};break;case a:t={x:n.x+n.width,y:p};break;case c:t={x:n.x-i.width,y:p};break;default:t={x:n.x,y:n.y}}var m=u?X(u):null;if(null!=m){var g="y"===m?"height":"width";switch(l){case h:t[m]=t[m]-(n[g]/2-i[g]/2);break;case d:t[m]=t[m]+(n[g]/2-i[g]/2)}}return t}function Ee(e,t){void 0===t&&(t={});var n=t,i=n.placement,s=void 0===i?e.placement:i,c=n.strategy,u=void 0===c?e.strategy:c,h=n.boundary,d=void 0===h?f:h,y=n.rootBoundary,v=void 0===y?p:y,w=n.elementContext,_=void 0===w?m:w,b=n.altBoundary,I=void 0!==b&&b,T=n.padding,E=void 0===T?0:T,S=ee("number"!=typeof E?E:te(E,l)),k=_===m?g:m,A=e.rects.popper,C=e.elements[I?k:_],D=Ie(O(C)?C:C.contextElement||K(e.elements.popper),d,v,u),N=j(e.elements.reference),x=Te({reference:N,element:A,strategy:"absolute",placement:s}),R=_e(Object.assign({},A,x)),L=_===m?R:N,P={top:D.top-L.top+S.top,bottom:L.bottom-D.bottom+S.bottom,left:D.left-L.left+S.left,right:L.right-D.right+S.right},M=e.modifiersData.offset;if(_===m&&M){var U=M[s];Object.keys(P).forEach((function(e){var t=[a,o].indexOf(e)>=0?1:-1,n=[r,o].indexOf(e)>=0?"y":"x";P[e]+=U[n]*t}))}return P}function Se(e,t){void 0===t&&(t={});var n=t,i=n.placement,s=n.boundary,r=n.rootBoundary,o=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,u=void 0===c?v:c,h=ie(i),d=h?a?y:y.filter((function(e){return ie(e)===h})):l,f=d.filter((function(e){return u.indexOf(e)>=0}));0===f.length&&(f=d);var p=f.reduce((function(t,n){return t[n]=Ee(e,{placement:n,boundary:s,rootBoundary:r,padding:o})[M(n)],t}),{});return Object.keys(p).sort((function(e,t){return p[e]-p[t]}))}var ke={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,i=e.name;if(!t.modifiersData[i]._skip){for(var s=n.mainAxis,l=void 0===s||s,d=n.altAxis,f=void 0===d||d,p=n.fallbackPlacements,m=n.padding,g=n.boundary,y=n.rootBoundary,v=n.altBoundary,w=n.flipVariations,_=void 0===w||w,b=n.allowedAutoPlacements,I=t.options.placement,T=M(I),E=p||(T===I||!_?[le(I)]:function(e){if(M(e)===u)return[];var t=le(e);return[de(e),t,de(t)]}(I)),S=[I].concat(E).reduce((function(e,n){return e.concat(M(n)===u?Se(t,{placement:n,boundary:g,rootBoundary:y,padding:m,flipVariations:_,allowedAutoPlacements:b}):n)}),[]),k=t.rects.reference,A=t.rects.popper,C=new Map,D=!0,N=S[0],x=0;x<S.length;x++){var O=S[x],R=M(O),L=ie(O)===h,P=[r,o].indexOf(R)>=0,U=P?"width":"height",F=Ee(t,{placement:O,boundary:g,rootBoundary:y,altBoundary:v,padding:m}),V=P?L?a:c:L?o:r;k[U]>A[U]&&(V=le(V));var q=le(V),B=[];if(l&&B.push(F[R]<=0),f&&B.push(F[V]<=0,F[q]<=0),B.every((function(e){return e}))){N=O,D=!1;break}C.set(O,B)}if(D)for(var j=function(e){var t=S.find((function(t){var n=C.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return N=t,"break"},$=_?3:1;$>0;$--){if("break"===j($))break}t.placement!==N&&(t.modifiersData[i]._skip=!0,t.placement=N,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function Ae(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Ce(e){return[r,a,o,c].some((function(t){return e[t]>=0}))}var De={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,i=t.rects.reference,s=t.rects.popper,r=t.modifiersData.preventOverflow,o=Ee(t,{elementContext:"reference"}),a=Ee(t,{altBoundary:!0}),c=Ae(o,i),u=Ae(a,s,r),l=Ce(c),h=Ce(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":h})}};var Ne={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,i=e.name,s=n.offset,o=void 0===s?[0,0]:s,u=v.reduce((function(e,n){return e[n]=function(e,t,n){var i=M(e),s=[c,r].indexOf(i)>=0?-1:1,o="function"==typeof n?n(Object.assign({},t,{placement:e})):n,u=o[0],l=o[1];return u=u||0,l=(l||0)*s,[c,a].indexOf(i)>=0?{x:l,y:u}:{x:u,y:l}}(n,t.rects,o),e}),{}),l=u[t.placement],h=l.x,d=l.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=h,t.modifiersData.popperOffsets.y+=d),t.modifiersData[i]=u}};var xe={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=Te({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}};var Oe={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,i=e.name,s=n.mainAxis,u=void 0===s||s,l=n.altAxis,d=void 0!==l&&l,f=n.boundary,p=n.rootBoundary,m=n.altBoundary,g=n.padding,y=n.tether,v=void 0===y||y,w=n.tetherOffset,_=void 0===w?0:w,b=Ee(t,{boundary:f,rootBoundary:p,padding:g,altBoundary:m}),I=M(t.placement),T=ie(t.placement),E=!T,S=X(I),k="x"===S?"y":"x",A=t.modifiersData.popperOffsets,C=t.rects.reference,D=t.rects.popper,N="function"==typeof _?_(Object.assign({},t.rects,{placement:t.placement})):_,x="number"==typeof N?{mainAxis:N,altAxis:N}:Object.assign({mainAxis:0,altAxis:0},N),O=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,R={x:0,y:0};if(A){if(u){var L,P="y"===S?r:c,V="y"===S?o:a,q="y"===S?"height":"width",B=A[S],j=B+b[P],G=B-b[V],H=v?-D[q]/2:0,z=T===h?C[q]:D[q],K=T===h?-D[q]:-C[q],W=t.elements.arrow,Q=v&&W?$(W):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[P],ne=ee[V],se=J(0,C[q],Q[q]),re=E?C[q]/2-H-se-te-x.mainAxis:z-se-te-x.mainAxis,oe=E?-C[q]/2+H+se+ne+x.mainAxis:K+se+ne+x.mainAxis,ae=t.elements.arrow&&Y(t.elements.arrow),ce=ae?"y"===S?ae.clientTop||0:ae.clientLeft||0:0,ue=null!=(L=null==O?void 0:O[S])?L:0,le=B+oe-ue,he=J(v?F(j,B+re-ue-ce):j,B,v?U(G,le):G);A[S]=he,R[S]=he-B}if(d){var de,fe="x"===S?r:c,pe="x"===S?o:a,me=A[k],ge="y"===k?"height":"width",ye=me+b[fe],ve=me-b[pe],we=-1!==[r,c].indexOf(I),_e=null!=(de=null==O?void 0:O[k])?de:0,be=we?ye:me-C[ge]-D[ge]-_e+x.altAxis,Ie=we?me+C[ge]+D[ge]-_e-x.altAxis:ve,Te=v&&we?Z(be,me,Ie):J(v?be:ye,me,v?Ie:ve);A[k]=Te,R[k]=Te-me}t.modifiersData[i]=R}},requiresIfExists:["offset"]};function Re(e,t,n){void 0===n&&(n=!1);var i,s,r=R(t),o=R(t)&&function(e){var t=e.getBoundingClientRect(),n=V(t.width)/e.offsetWidth||1,i=V(t.height)/e.offsetHeight||1;return 1!==n||1!==i}(t),a=K(t),c=j(e,o,n),u={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(r||!r&&!n)&&(("body"!==N(t)||ye(a))&&(u=(i=t)!==x(i)&&R(i)?{scrollLeft:(s=i).scrollLeft,scrollTop:s.scrollTop}:fe(i)),R(t)?((l=j(t,!0)).x+=t.clientLeft,l.y+=t.clientTop):a&&(l.x=pe(a))),{x:c.left+u.scrollLeft-l.x,y:c.top+u.scrollTop-l.y,width:c.width,height:c.height}}function Le(e){var t=new Map,n=new Set,i=[];function s(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var i=t.get(e);i&&s(i)}})),i.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||s(e)})),i}function Pe(e){var t=Le(e);return C.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}function Me(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}var Ue={placement:"bottom",modifiers:[],strategy:"absolute"};function Fe(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function Ve(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,i=void 0===n?[]:n,s=t.defaultOptions,r=void 0===s?Ue:s;return function(e,t,n){void 0===n&&(n=r);var s,o,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ue,r),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],u=!1,l={state:a,setOptions:function(n){var s="function"==typeof n?n(a.options):n;h(),a.options=Object.assign({},r,a.options,s),a.scrollParents={reference:O(e)?we(e):e.contextElement?we(e.contextElement):[],popper:we(t)};var o=Pe(Me([].concat(i,a.options.modifiers)));return a.orderedModifiers=o.filter((function(e){return e.enabled})),a.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,i=void 0===n?{}:n,s=e.effect;if("function"==typeof s){var r=s({state:a,name:t,instance:l,options:i}),o=function(){};c.push(r||o)}})),l.update()},forceUpdate:function(){if(!u){var e=a.elements,t=e.reference,n=e.popper;if(Fe(t,n)){a.rects={reference:Re(t,Y(n),"fixed"===a.options.strategy),popper:$(n)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(e){return a.modifiersData[e.name]=Object.assign({},e.data)}));for(var i=0;i<a.orderedModifiers.length;i++)if(!0!==a.reset){var s=a.orderedModifiers[i],r=s.fn,o=s.options,c=void 0===o?{}:o,h=s.name;"function"==typeof r&&(a=r({state:a,options:c,name:h,instance:l})||a)}else a.reset=!1,i=-1}}},update:(s=function(){return new Promise((function(e){l.forceUpdate(),e(a)}))},function(){return o||(o=new Promise((function(e){Promise.resolve().then((function(){o=void 0,e(s())}))}))),o}),destroy:function(){h(),u=!0}};if(!Fe(e,t))return l;function h(){c.forEach((function(e){return e()})),c=[]}return l.setOptions(n).then((function(e){!u&&n.onFirstUpdate&&n.onFirstUpdate(e)})),l}}var qe=Ve(),Be=Ve({defaultModifiers:[ce,xe,oe,P,Ne,ke,Oe,ne,De]}),je=Ve({defaultModifiers:[ce,xe,oe,P]});t(i,s),t(i,D);const $e=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&"#"!==n?n.trim():null}return t},Ge=e=>{const t=$e(e);return t&&document.querySelector(t)?t:null},He=e=>{const t=$e(e);return t?document.querySelector(t):null},ze=e=>{e.dispatchEvent(new Event("transitionend"))},Ke=e=>!(!e||"object"!=typeof e)&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),We=e=>Ke(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(e):null,Qe=e=>{if(!Ke(e)||0===e.getClientRects().length)return!1;const t="visible"===getComputedStyle(e).getPropertyValue("visibility"),n=e.closest("details:not([open])");if(!n)return t;if(n!==e){const t=e.closest("summary");if(t&&t.parentNode!==n)return!1;if(null===t)return!1}return t},Ye=e=>!e||e.nodeType!==Node.ELEMENT_NODE||(!!e.classList.contains("disabled")||(void 0!==e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled"))),Xe=e=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof e.getRootNode){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?Xe(e.parentNode):null},Je=()=>{},Ze=e=>{e.offsetHeight},et=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,tt=[],nt=()=>"rtl"===document.documentElement.dir,it=e=>{var t;t=()=>{const t=et();if(t){const n=e.NAME,i=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=i,e.jQueryInterface)}},"loading"===document.readyState?(tt.length||document.addEventListener("DOMContentLoaded",(()=>{for(const e of tt)e()})),tt.push(t)):t()},st=e=>{"function"==typeof e&&e()},rt=(e,t,n=!0)=>{if(!n)return void st(e);const i=(e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const i=Number.parseFloat(t),s=Number.parseFloat(n);return i||s?(t=t.split(",")[0],n=n.split(",")[0],1e3*(Number.parseFloat(t)+Number.parseFloat(n))):0})(t)+5;let s=!1;const r=({target:n})=>{n===t&&(s=!0,t.removeEventListener("transitionend",r),st(e))};t.addEventListener("transitionend",r),setTimeout((()=>{s||ze(t)}),i)},ot=(e,t,n,i)=>{const s=e.length;let r=e.indexOf(t);return-1===r?!n&&i?e[s-1]:e[0]:(r+=n?1:-1,i&&(r=(r+s)%s),e[Math.max(0,Math.min(r,s-1))])},at=/[^.]*(?=\..*)\.|.*/,ct=/\..*/,ut=/::\d+$/,lt={};let ht=1;const dt={mouseenter:"mouseover",mouseleave:"mouseout"},ft=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function pt(e,t){return t&&`${t}::${ht++}`||e.uidEvent||ht++}function mt(e){const t=pt(e);return e.uidEvent=t,lt[t]=lt[t]||{},lt[t]}function gt(e,t,n=null){return Object.values(e).find((e=>e.callable===t&&e.delegationSelector===n))}function yt(e,t,n){const i="string"==typeof t,s=i?n:t||n;let r=bt(e);return ft.has(r)||(r=e),[i,s,r]}function vt(e,t,n,i,s){if("string"!=typeof t||!e)return;let[r,o,a]=yt(t,n,i);if(t in dt){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};o=e(o)}const c=mt(e),u=c[a]||(c[a]={}),l=gt(u,o,r?n:null);if(l)return void(l.oneOff=l.oneOff&&s);const h=pt(o,t.replace(at,"")),d=r?function(e,t,n){return function i(s){const r=e.querySelectorAll(t);for(let{target:o}=s;o&&o!==this;o=o.parentNode)for(const a of r)if(a===o)return Tt(s,{delegateTarget:o}),i.oneOff&&It.off(e,s.type,t,n),n.apply(o,[s])}}(e,n,o):function(e,t){return function n(i){return Tt(i,{delegateTarget:e}),n.oneOff&&It.off(e,i.type,t),t.apply(e,[i])}}(e,o);d.delegationSelector=r?n:null,d.callable=o,d.oneOff=s,d.uidEvent=h,u[h]=d,e.addEventListener(a,d,r)}function wt(e,t,n,i,s){const r=gt(t[n],i,s);r&&(e.removeEventListener(n,r,Boolean(s)),delete t[n][r.uidEvent])}function _t(e,t,n,i){const s=t[n]||{};for(const r of Object.keys(s))if(r.includes(i)){const i=s[r];wt(e,t,n,i.callable,i.delegationSelector)}}function bt(e){return e=e.replace(ct,""),dt[e]||e}const It={on(e,t,n,i){vt(e,t,n,i,!1)},one(e,t,n,i){vt(e,t,n,i,!0)},off(e,t,n,i){if("string"!=typeof t||!e)return;const[s,r,o]=yt(t,n,i),a=o!==t,c=mt(e),u=c[o]||{},l=t.startsWith(".");if(void 0===r){if(l)for(const n of Object.keys(c))_t(e,c,n,t.slice(1));for(const n of Object.keys(u)){const i=n.replace(ut,"");if(!a||t.includes(i)){const t=u[n];wt(e,c,o,t.callable,t.delegationSelector)}}}else{if(!Object.keys(u).length)return;wt(e,c,o,r,s?n:null)}},trigger(e,t,n){if("string"!=typeof t||!e)return null;const i=et();let s=null,r=!0,o=!0,a=!1;t!==bt(t)&&i&&(s=i.Event(t,n),i(e).trigger(s),r=!s.isPropagationStopped(),o=!s.isImmediatePropagationStopped(),a=s.isDefaultPrevented());let c=new Event(t,{bubbles:r,cancelable:!0});return c=Tt(c,n),a&&c.preventDefault(),o&&e.dispatchEvent(c),c.defaultPrevented&&s&&s.preventDefault(),c}};function Tt(e,t){for(const[n,i]of Object.entries(t||{}))try{e[n]=i}catch(t){Object.defineProperty(e,n,{configurable:!0,get:()=>i})}return e}const Et=new Map,St={set(e,t,n){Et.has(e)||Et.set(e,new Map);const i=Et.get(e);i.has(t)||0===i.size?i.set(t,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)},get:(e,t)=>Et.has(e)&&Et.get(e).get(t)||null,remove(e,t){if(!Et.has(e))return;const n=Et.get(e);n.delete(t),0===n.size&&Et.delete(e)}};function kt(e){if("true"===e)return!0;if("false"===e)return!1;if(e===Number(e).toString())return Number(e);if(""===e||"null"===e)return null;if("string"!=typeof e)return e;try{return JSON.parse(decodeURIComponent(e))}catch(t){return e}}function At(e){return e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}const Ct={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${At(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${At(t)}`)},getDataAttributes(e){if(!e)return{};const t={},n=Object.keys(e.dataset).filter((e=>e.startsWith("bs")&&!e.startsWith("bsConfig")));for(const i of n){let n=i.replace(/^bs/,"");n=n.charAt(0).toLowerCase()+n.slice(1,n.length),t[n]=kt(e.dataset[i])}return t},getDataAttribute:(e,t)=>kt(e.getAttribute(`data-bs-${At(t)}`))};class Dt{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){const n=Ke(t)?Ct.getDataAttribute(t,"config"):{};return{...this.constructor.Default,..."object"==typeof n?n:{},...Ke(t)?Ct.getDataAttributes(t):{},..."object"==typeof e?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(const i of Object.keys(t)){const s=t[i],r=e[i],o=Ke(r)?"element":null==(n=r)?`${n}`:Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(s).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${o}" but expected type "${s}".`)}var n}}class Nt extends Dt{constructor(e,t){super(),(e=We(e))&&(this._element=e,this._config=this._getConfig(t),St.set(this._element,this.constructor.DATA_KEY,this))}dispose(){St.remove(this._element,this.constructor.DATA_KEY),It.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,n=!0){rt(e,t,n)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return St.get(We(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"==typeof t?t:null)}static get VERSION(){return"5.2.1"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const xt=(e,t="hide")=>{const n=`click.dismiss${e.EVENT_KEY}`,i=e.NAME;It.on(document,n,`[data-bs-dismiss="${i}"]`,(function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),Ye(this))return;const s=He(this)||this.closest(`.${i}`);e.getOrCreateInstance(s)[t]()}))};class Ot extends Nt{static get NAME(){return"alert"}close(){if(It.trigger(this._element,"close.bs.alert").defaultPrevented)return;this._element.classList.remove("show");const e=this._element.classList.contains("fade");this._queueCallback((()=>this._destroyElement()),this._element,e)}_destroyElement(){this._element.remove(),It.trigger(this._element,"closed.bs.alert"),this.dispose()}static jQueryInterface(e){return this.each((function(){const t=Ot.getOrCreateInstance(this);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}xt(Ot,"close"),it(Ot);class Rt extends Nt{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(e){return this.each((function(){const t=Rt.getOrCreateInstance(this);"toggle"===e&&t[e]()}))}}It.on(document,"click.bs.button.data-api",'[data-bs-toggle="button"]',(e=>{e.preventDefault();const t=e.target.closest('[data-bs-toggle="button"]');Rt.getOrCreateInstance(t).toggle()})),it(Rt);const Lt={find:(e,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t,e)),findOne:(e,t=document.documentElement)=>Element.prototype.querySelector.call(t,e),children:(e,t)=>[].concat(...e.children).filter((e=>e.matches(t))),parents(e,t){const n=[];let i=e.parentNode.closest(t);for(;i;)n.push(i),i=i.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((e=>`${e}:not([tabindex^="-"])`)).join(",");return this.find(t,e).filter((e=>!Ye(e)&&Qe(e)))}},Pt={endCallback:null,leftCallback:null,rightCallback:null},Mt={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Ut extends Dt{constructor(e,t){super(),this._element=e,e&&Ut.isSupported()&&(this._config=this._getConfig(t),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return Pt}static get DefaultType(){return Mt}static get NAME(){return"swipe"}dispose(){It.off(this._element,".bs.swipe")}_start(e){this._supportPointerEvents?this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX):this._deltaX=e.touches[0].clientX}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),st(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=40)return;const t=e/this._deltaX;this._deltaX=0,t&&st(t>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(It.on(this._element,"pointerdown.bs.swipe",(e=>this._start(e))),It.on(this._element,"pointerup.bs.swipe",(e=>this._end(e))),this._element.classList.add("pointer-event")):(It.on(this._element,"touchstart.bs.swipe",(e=>this._start(e))),It.on(this._element,"touchmove.bs.swipe",(e=>this._move(e))),It.on(this._element,"touchend.bs.swipe",(e=>this._end(e))))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&("pen"===e.pointerType||"touch"===e.pointerType)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Ft={ArrowLeft:"right",ArrowRight:"left"},Vt={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},qt={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Bt extends Nt{constructor(e,t){super(e,t),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=Lt.findOne(".carousel-indicators",this._element),this._addEventListeners(),"carousel"===this._config.ride&&this.cycle()}static get Default(){return Vt}static get DefaultType(){return qt}static get NAME(){return"carousel"}next(){this._slide("next")}nextWhenVisible(){!document.hidden&&Qe(this._element)&&this.next()}prev(){this._slide("prev")}pause(){this._isSliding&&ze(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?It.one(this._element,"slid.bs.carousel",(()=>this.cycle())):this.cycle())}to(e){const t=this._getItems();if(e>t.length-1||e<0)return;if(this._isSliding)return void It.one(this._element,"slid.bs.carousel",(()=>this.to(e)));const n=this._getItemIndex(this._getActive());if(n===e)return;const i=e>n?"next":"prev";this._slide(i,t[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&It.on(this._element,"keydown.bs.carousel",(e=>this._keydown(e))),"hover"===this._config.pause&&(It.on(this._element,"mouseenter.bs.carousel",(()=>this.pause())),It.on(this._element,"mouseleave.bs.carousel",(()=>this._maybeEnableCycle()))),this._config.touch&&Ut.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const e of Lt.find(".carousel-item img",this._element))It.on(e,"dragstart.bs.carousel",(e=>e.preventDefault()));const e={leftCallback:()=>this._slide(this._directionToOrder("left")),rightCallback:()=>this._slide(this._directionToOrder("right")),endCallback:()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),500+this._config.interval))}};this._swipeHelper=new Ut(this._element,e)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=Ft[e.key];t&&(e.preventDefault(),this._slide(this._directionToOrder(t)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const t=Lt.findOne(".active",this._indicatorsElement);t.classList.remove("active"),t.removeAttribute("aria-current");const n=Lt.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);n&&(n.classList.add("active"),n.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=t||this._config.defaultInterval}_slide(e,t=null){if(this._isSliding)return;const n=this._getActive(),i="next"===e,s=t||ot(this._getItems(),n,i,this._config.wrap);if(s===n)return;const r=this._getItemIndex(s),o=t=>It.trigger(this._element,t,{relatedTarget:s,direction:this._orderToDirection(e),from:this._getItemIndex(n),to:r});if(o("slide.bs.carousel").defaultPrevented)return;if(!n||!s)return;const a=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(r),this._activeElement=s;const c=i?"carousel-item-start":"carousel-item-end",u=i?"carousel-item-next":"carousel-item-prev";s.classList.add(u),Ze(s),n.classList.add(c),s.classList.add(c);this._queueCallback((()=>{s.classList.remove(c,u),s.classList.add("active"),n.classList.remove("active",u,c),this._isSliding=!1,o("slid.bs.carousel")}),n,this._isAnimated()),a&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return Lt.findOne(".active.carousel-item",this._element)}_getItems(){return Lt.find(".carousel-item",this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return nt()?"left"===e?"prev":"next":"left"===e?"next":"prev"}_orderToDirection(e){return nt()?"prev"===e?"left":"right":"prev"===e?"right":"left"}static jQueryInterface(e){return this.each((function(){const t=Bt.getOrCreateInstance(this,e);if("number"!=typeof e){if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}else t.to(e)}))}}It.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",(function(e){const t=He(this);if(!t||!t.classList.contains("carousel"))return;e.preventDefault();const n=Bt.getOrCreateInstance(t),i=this.getAttribute("data-bs-slide-to");return i?(n.to(i),void n._maybeEnableCycle()):"next"===Ct.getDataAttribute(this,"slide")?(n.next(),void n._maybeEnableCycle()):(n.prev(),void n._maybeEnableCycle())})),It.on(window,"load.bs.carousel.data-api",(()=>{const e=Lt.find('[data-bs-ride="carousel"]');for(const t of e)Bt.getOrCreateInstance(t)})),it(Bt);const jt={parent:null,toggle:!0},$t={parent:"(null|element)",toggle:"boolean"};class Gt extends Nt{constructor(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];const n=Lt.find('[data-bs-toggle="collapse"]');for(const e of n){const t=Ge(e),n=Lt.find(t).filter((e=>e===this._element));null!==t&&n.length&&this._triggerArray.push(e)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return jt}static get DefaultType(){return $t}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((e=>e!==this._element)).map((e=>Gt.getOrCreateInstance(e,{toggle:!1})))),e.length&&e[0]._isTransitioning)return;if(It.trigger(this._element,"show.bs.collapse").defaultPrevented)return;for(const t of e)t.hide();const t=this._getDimension();this._element.classList.remove("collapse"),this._element.classList.add("collapsing"),this._element.style[t]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const n=`scroll${t[0].toUpperCase()+t.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove("collapsing"),this._element.classList.add("collapse","show"),this._element.style[t]="",It.trigger(this._element,"shown.bs.collapse")}),this._element,!0),this._element.style[t]=`${this._element[n]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(It.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,Ze(this._element),this._element.classList.add("collapsing"),this._element.classList.remove("collapse","show");for(const e of this._triggerArray){const t=He(e);t&&!this._isShown(t)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0;this._element.style[e]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove("collapsing"),this._element.classList.add("collapse"),It.trigger(this._element,"hidden.bs.collapse")}),this._element,!0)}_isShown(e=this._element){return e.classList.contains("show")}_configAfterMerge(e){return e.toggle=Boolean(e.toggle),e.parent=We(e.parent),e}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren('[data-bs-toggle="collapse"]');for(const t of e){const e=He(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}}_getFirstLevelChildren(e){const t=Lt.find(":scope .collapse .collapse",this._config.parent);return Lt.find(e,this._config.parent).filter((e=>!t.includes(e)))}_addAriaAndCollapsedClass(e,t){if(e.length)for(const n of e)n.classList.toggle("collapsed",!t),n.setAttribute("aria-expanded",t)}static jQueryInterface(e){const t={};return"string"==typeof e&&/show|hide/.test(e)&&(t.toggle=!1),this.each((function(){const n=Gt.getOrCreateInstance(this,t);if("string"==typeof e){if(void 0===n[e])throw new TypeError(`No method named "${e}"`);n[e]()}}))}}It.on(document,"click.bs.collapse.data-api",'[data-bs-toggle="collapse"]',(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();const t=Ge(this),n=Lt.find(t);for(const e of n)Gt.getOrCreateInstance(e,{toggle:!1}).toggle()})),it(Gt);const Ht="ArrowUp",zt="ArrowDown",Kt=nt()?"top-end":"top-start",Wt=nt()?"top-start":"top-end",Qt=nt()?"bottom-end":"bottom-start",Yt=nt()?"bottom-start":"bottom-end",Xt=nt()?"left-start":"right-start",Jt=nt()?"right-start":"left-start",Zt={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},en={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class tn extends Nt{constructor(e,t){super(e,t),this._popper=null,this._parent=this._element.parentNode,this._menu=Lt.next(this._element,".dropdown-menu")[0]||Lt.prev(this._element,".dropdown-menu")[0],this._inNavbar=this._detectNavbar()}static get Default(){return Zt}static get DefaultType(){return en}static get NAME(){return"dropdown"}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Ye(this._element)||this._isShown())return;const e={relatedTarget:this._element};if(!It.trigger(this._element,"show.bs.dropdown",e).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const e of[].concat(...document.body.children))It.on(e,"mouseover",Je);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add("show"),this._element.classList.add("show"),It.trigger(this._element,"shown.bs.dropdown",e)}}hide(){if(Ye(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!It.trigger(this._element,"hide.bs.dropdown",e).defaultPrevented){if("ontouchstart"in document.documentElement)for(const e of[].concat(...document.body.children))It.off(e,"mouseover",Je);this._popper&&this._popper.destroy(),this._menu.classList.remove("show"),this._element.classList.remove("show"),this._element.setAttribute("aria-expanded","false"),Ct.removeDataAttribute(this._menu,"popper"),It.trigger(this._element,"hidden.bs.dropdown",e)}}_getConfig(e){if("object"==typeof(e=super._getConfig(e)).reference&&!Ke(e.reference)&&"function"!=typeof e.reference.getBoundingClientRect)throw new TypeError(`${"dropdown".toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(void 0===i)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;"parent"===this._config.reference?e=this._parent:Ke(this._config.reference)?e=We(this._config.reference):"object"==typeof this._config.reference&&(e=this._config.reference);const t=this._getPopperConfig();this._popper=i.createPopper(e,this._menu,t)}_isShown(){return this._menu.classList.contains("show")}_getPlacement(){const e=this._parent;if(e.classList.contains("dropend"))return Xt;if(e.classList.contains("dropstart"))return Jt;if(e.classList.contains("dropup-center"))return"top";if(e.classList.contains("dropdown-center"))return"bottom";const t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains("dropup")?t?Wt:Kt:t?Yt:Qt}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:e}=this._config;return"string"==typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"==typeof e?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(Ct.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,..."function"==typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_selectMenuItem({key:e,target:t}){const n=Lt.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter((e=>Qe(e)));n.length&&ot(n,t,e===zt,!n.includes(t)).focus()}static jQueryInterface(e){return this.each((function(){const t=tn.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}static clearMenus(e){if(2===e.button||"keyup"===e.type&&"Tab"!==e.key)return;const t=Lt.find('[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled).show');for(const n of t){const t=tn.getInstance(n);if(!t||!1===t._config.autoClose)continue;const i=e.composedPath(),s=i.includes(t._menu);if(i.includes(t._element)||"inside"===t._config.autoClose&&!s||"outside"===t._config.autoClose&&s)continue;if(t._menu.contains(e.target)&&("keyup"===e.type&&"Tab"===e.key||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const r={relatedTarget:t._element};"click"===e.type&&(r.clickEvent=e),t._completeHide(r)}}static dataApiKeydownHandler(e){const t=/input|textarea/i.test(e.target.tagName),n="Escape"===e.key,i=[Ht,zt].includes(e.key);if(!i&&!n)return;if(t&&!n)return;e.preventDefault();const s=this.matches('[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)')?this:Lt.prev(this,'[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)')[0]||Lt.next(this,'[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)')[0],r=tn.getOrCreateInstance(s);if(i)return e.stopPropagation(),r.show(),void r._selectMenuItem(e);r._isShown()&&(e.stopPropagation(),r.hide(),s.focus())}}It.on(document,"keydown.bs.dropdown.data-api",'[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',tn.dataApiKeydownHandler),It.on(document,"keydown.bs.dropdown.data-api",".dropdown-menu",tn.dataApiKeydownHandler),It.on(document,"click.bs.dropdown.data-api",tn.clearMenus),It.on(document,"keyup.bs.dropdown.data-api",tn.clearMenus),It.on(document,"click.bs.dropdown.data-api",'[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',(function(e){e.preventDefault(),tn.getOrCreateInstance(this).toggle()})),it(tn);class nn{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"padding-right",(t=>t+e)),this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top","padding-right",(t=>t+e)),this._setElementAttributes(".sticky-top","margin-right",(t=>t-e))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"padding-right"),this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top","padding-right"),this._resetElementAttributes(".sticky-top","margin-right")}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,n){const i=this.getWidth();this._applyManipulationCallback(e,(e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+i)return;this._saveInitialAttribute(e,t);const s=window.getComputedStyle(e).getPropertyValue(t);e.style.setProperty(t,`${n(Number.parseFloat(s))}px`)}))}_saveInitialAttribute(e,t){const n=e.style.getPropertyValue(t);n&&Ct.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){this._applyManipulationCallback(e,(e=>{const n=Ct.getDataAttribute(e,t);null!==n?(Ct.removeDataAttribute(e,t),e.style.setProperty(t,n)):e.style.removeProperty(t)}))}_applyManipulationCallback(e,t){if(Ke(e))t(e);else for(const n of Lt.find(e,this._element))t(n)}}const sn={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},rn={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class on extends Dt{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return sn}static get DefaultType(){return rn}static get NAME(){return"backdrop"}show(e){if(!this._config.isVisible)return void st(e);this._append();const t=this._getElement();this._config.isAnimated&&Ze(t),t.classList.add("show"),this._emulateAnimation((()=>{st(e)}))}hide(e){this._config.isVisible?(this._getElement().classList.remove("show"),this._emulateAnimation((()=>{this.dispose(),st(e)}))):st(e)}dispose(){this._isAppended&&(It.off(this._element,"mousedown.bs.backdrop"),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add("fade"),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=We(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),It.on(e,"mousedown.bs.backdrop",(()=>{st(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(e){rt(e,this._getElement(),this._config.isAnimated)}}const an={autofocus:!0,trapElement:null},cn={autofocus:"boolean",trapElement:"element"};class un extends Dt{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return an}static get DefaultType(){return cn}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),It.off(document,".bs.focustrap"),It.on(document,"focusin.bs.focustrap",(e=>this._handleFocusin(e))),It.on(document,"keydown.tab.bs.focustrap",(e=>this._handleKeydown(e))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,It.off(document,".bs.focustrap"))}_handleFocusin(e){const{trapElement:t}=this._config;if(e.target===document||e.target===t||t.contains(e.target))return;const n=Lt.focusableChildren(t);0===n.length?t.focus():"backward"===this._lastTabNavDirection?n[n.length-1].focus():n[0].focus()}_handleKeydown(e){"Tab"===e.key&&(this._lastTabNavDirection=e.shiftKey?"backward":"forward")}}const ln={backdrop:!0,focus:!0,keyboard:!0},hn={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class dn extends Nt{constructor(e,t){super(e,t),this._dialog=Lt.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new nn,this._addEventListeners()}static get Default(){return ln}static get DefaultType(){return hn}static get NAME(){return"modal"}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||this._isTransitioning)return;It.trigger(this._element,"show.bs.modal",{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add("modal-open"),this._adjustDialog(),this._backdrop.show((()=>this._showElement(e))))}hide(){if(!this._isShown||this._isTransitioning)return;It.trigger(this._element,"hide.bs.modal").defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove("show"),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated()))}dispose(){for(const e of[window,this._dialog])It.off(e,".bs.modal");this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new on({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new un({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const t=Lt.findOne(".modal-body",this._dialog);t&&(t.scrollTop=0),Ze(this._element),this._element.classList.add("show");this._queueCallback((()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,It.trigger(this._element,"shown.bs.modal",{relatedTarget:e})}),this._dialog,this._isAnimated())}_addEventListeners(){It.on(this._element,"keydown.dismiss.bs.modal",(e=>{if("Escape"===e.key)return this._config.keyboard?(e.preventDefault(),void this.hide()):void this._triggerBackdropTransition()})),It.on(window,"resize.bs.modal",(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),It.on(this._element,"mousedown.dismiss.bs.modal",(e=>{It.one(this._element,"click.dismiss.bs.modal",(t=>{this._dialog.contains(e.target)||this._dialog.contains(t.target)||("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove("modal-open"),this._resetAdjustments(),this._scrollBar.reset(),It.trigger(this._element,"hidden.bs.modal")}))}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(It.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._element.style.overflowY;"hidden"===t||this._element.classList.contains("modal-static")||(e||(this._element.style.overflowY="hidden"),this._element.classList.add("modal-static"),this._queueCallback((()=>{this._element.classList.remove("modal-static"),this._queueCallback((()=>{this._element.style.overflowY=t}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;if(n&&!e){const e=nt()?"paddingLeft":"paddingRight";this._element.style[e]=`${t}px`}if(!n&&e){const e=nt()?"paddingRight":"paddingLeft";this._element.style[e]=`${t}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each((function(){const n=dn.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===n[e])throw new TypeError(`No method named "${e}"`);n[e](t)}}))}}It.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',(function(e){const t=He(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),It.one(t,"show.bs.modal",(e=>{e.defaultPrevented||It.one(t,"hidden.bs.modal",(()=>{Qe(this)&&this.focus()}))}));const n=Lt.findOne(".modal.show");n&&dn.getInstance(n).hide();dn.getOrCreateInstance(t).toggle(this)})),xt(dn),it(dn);const fn={backdrop:!0,keyboard:!0,scroll:!1},pn={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class mn extends Nt{constructor(e,t){super(e,t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return fn}static get DefaultType(){return pn}static get NAME(){return"offcanvas"}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown)return;if(It.trigger(this._element,"show.bs.offcanvas",{relatedTarget:e}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||(new nn).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add("showing");this._queueCallback((()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add("show"),this._element.classList.remove("showing"),It.trigger(this._element,"shown.bs.offcanvas",{relatedTarget:e})}),this._element,!0)}hide(){if(!this._isShown)return;if(It.trigger(this._element,"hide.bs.offcanvas").defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add("hiding"),this._backdrop.hide();this._queueCallback((()=>{this._element.classList.remove("show","hiding"),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new nn).reset(),It.trigger(this._element,"hidden.bs.offcanvas")}),this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=Boolean(this._config.backdrop);return new on({className:"offcanvas-backdrop",isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?()=>{"static"!==this._config.backdrop?this.hide():It.trigger(this._element,"hidePrevented.bs.offcanvas")}:null})}_initializeFocusTrap(){return new un({trapElement:this._element})}_addEventListeners(){It.on(this._element,"keydown.dismiss.bs.offcanvas",(e=>{"Escape"===e.key&&(this._config.keyboard?this.hide():It.trigger(this._element,"hidePrevented.bs.offcanvas"))}))}static jQueryInterface(e){return this.each((function(){const t=mn.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}It.on(document,"click.bs.offcanvas.data-api",'[data-bs-toggle="offcanvas"]',(function(e){const t=He(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),Ye(this))return;It.one(t,"hidden.bs.offcanvas",(()=>{Qe(this)&&this.focus()}));const n=Lt.findOne(".offcanvas.show");n&&n!==t&&mn.getInstance(n).hide();mn.getOrCreateInstance(t).toggle(this)})),It.on(window,"load.bs.offcanvas.data-api",(()=>{for(const e of Lt.find(".offcanvas.show"))mn.getOrCreateInstance(e).show()})),It.on(window,"resize.bs.offcanvas",(()=>{for(const e of Lt.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(e).position&&mn.getOrCreateInstance(e).hide()})),xt(mn),it(mn);const gn=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),yn=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,vn=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,wn=(e,t)=>{const n=e.nodeName.toLowerCase();return t.includes(n)?!gn.has(n)||Boolean(yn.test(e.nodeValue)||vn.test(e.nodeValue)):t.filter((e=>e instanceof RegExp)).some((e=>e.test(n)))},_n={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};const bn={allowList:_n,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},In={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Tn={entry:"(string|element|function|null)",selector:"(string|element)"};class En extends Dt{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return bn}static get DefaultType(){return In}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map((e=>this._resolvePossibleFunction(e))).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[t,n]of Object.entries(this._config.content))this._setContent(e,n,t);const t=e.children[0],n=this._resolvePossibleFunction(this._config.extraClass);return n&&t.classList.add(...n.split(" ")),t}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[t,n]of Object.entries(e))super._typeCheckConfig({selector:t,entry:n},Tn)}_setContent(e,t,n){const i=Lt.findOne(n,e);i&&((t=this._resolvePossibleFunction(t))?Ke(t)?this._putElementInTemplate(We(t),i):this._config.html?i.innerHTML=this._maybeSanitize(t):i.textContent=t:i.remove())}_maybeSanitize(e){return this._config.sanitize?function(e,t,n){if(!e.length)return e;if(n&&"function"==typeof n)return n(e);const i=(new window.DOMParser).parseFromString(e,"text/html"),s=[].concat(...i.body.querySelectorAll("*"));for(const e of s){const n=e.nodeName.toLowerCase();if(!Object.keys(t).includes(n)){e.remove();continue}const i=[].concat(...e.attributes),s=[].concat(t["*"]||[],t[n]||[]);for(const t of i)wn(t,s)||e.removeAttribute(t.nodeName)}return i.body.innerHTML}(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return"function"==typeof e?e(this):e}_putElementInTemplate(e,t){if(this._config.html)return t.innerHTML="",void t.append(e);t.textContent=e.textContent}}const Sn=new Set(["sanitize","allowList","sanitizeFn"]),kn={AUTO:"auto",TOP:"top",RIGHT:nt()?"left":"right",BOTTOM:"bottom",LEFT:nt()?"right":"left"},An={allowList:_n,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Cn={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Dn extends Nt{constructor(e,t){if(void 0===i)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e,t),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners()}static get Default(){return An}static get DefaultType(){return Cn}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(e){if(this._isEnabled){if(e){const t=this._initializeOnDelegatedTarget(e);return t._activeTrigger.click=!t._activeTrigger.click,void(t._isWithActiveTrigger()?t._enter():t._leave())}this._isShown()?this._leave():this._enter()}}dispose(){clearTimeout(this._timeout),It.off(this._element.closest(".modal"),"hide.bs.modal",this._hideModalHandler),this.tip&&this.tip.remove(),this._config.originalTitle&&this._element.setAttribute("title",this._config.originalTitle),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const e=It.trigger(this._element,this.constructor.eventName("show")),t=(Xe(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!t)return;this.tip&&(this.tip.remove(),this.tip=null);const n=this._getTipElement();this._element.setAttribute("aria-describedby",n.getAttribute("id"));const{container:i}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(i.append(n),It.trigger(this._element,this.constructor.eventName("inserted"))),this._popper?this._popper.update():this._popper=this._createPopper(n),n.classList.add("show"),"ontouchstart"in document.documentElement)for(const e of[].concat(...document.body.children))It.on(e,"mouseover",Je);this._queueCallback((()=>{It.trigger(this._element,this.constructor.eventName("shown")),!1===this._isHovered&&this._leave(),this._isHovered=!1}),this.tip,this._isAnimated())}hide(){if(!this._isShown())return;if(It.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented)return;const e=this._getTipElement();if(e.classList.remove("show"),"ontouchstart"in document.documentElement)for(const e of[].concat(...document.body.children))It.off(e,"mouseover",Je);this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,this._isHovered=null;this._queueCallback((()=>{this._isWithActiveTrigger()||(this._isHovered||e.remove(),this._element.removeAttribute("aria-describedby"),It.trigger(this._element,this.constructor.eventName("hidden")),this._disposePopper())}),this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const t=this._getTemplateFactory(e).toHtml();if(!t)return null;t.classList.remove("fade","show"),t.classList.add(`bs-${this.constructor.NAME}-auto`);const n=(e=>{do{e+=Math.floor(1e6*Math.random())}while(document.getElementById(e));return e})(this.constructor.NAME).toString();return t.setAttribute("id",n),this._isAnimated()&&t.classList.add("fade"),t}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new En({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._config.originalTitle}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains("fade")}_isShown(){return this.tip&&this.tip.classList.contains("show")}_createPopper(e){const t="function"==typeof this._config.placement?this._config.placement.call(this,e,this._element):this._config.placement,n=kn[t.toUpperCase()];return i.createPopper(this._element,e,this._getPopperConfig(n))}_getOffset(){const{offset:e}=this._config;return"string"==typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"==typeof e?t=>e(t,this._element):e}_resolvePossibleFunction(e){return"function"==typeof e?e.call(this._element):e}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:e=>{this._getTipElement().setAttribute("data-popper-placement",e.state.placement)}}]};return{...t,..."function"==typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_setListeners(){const e=this._config.trigger.split(" ");for(const t of e)if("click"===t)It.on(this._element,this.constructor.eventName("click"),this._config.selector,(e=>this.toggle(e)));else if("manual"!==t){const e="hover"===t?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),n="hover"===t?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");It.on(this._element,e,this._config.selector,(e=>{const t=this._initializeOnDelegatedTarget(e);t._activeTrigger["focusin"===e.type?"focus":"hover"]=!0,t._enter()})),It.on(this._element,n,this._config.selector,(e=>{const t=this._initializeOnDelegatedTarget(e);t._activeTrigger["focusout"===e.type?"focus":"hover"]=t._element.contains(e.relatedTarget),t._leave()}))}this._hideModalHandler=()=>{this._element&&this.hide()},It.on(this._element.closest(".modal"),"hide.bs.modal",this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const e=this._config.originalTitle;e&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",e),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout((()=>{this._isHovered&&this.show()}),this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout((()=>{this._isHovered||this.hide()}),this._config.delay.hide))}_setTimeout(e,t){clearTimeout(this._timeout),this._timeout=setTimeout(e,t)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const t=Ct.getDataAttributes(this._element);for(const e of Object.keys(t))Sn.has(e)&&delete t[e];return e={...t,..."object"==typeof e&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=!1===e.container?document.body:We(e.container),"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e.originalTitle=this._element.getAttribute("title")||"","number"==typeof e.title&&(e.title=e.title.toString()),"number"==typeof e.content&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const t in this._config)this.constructor.Default[t]!==this._config[t]&&(e[t]=this._config[t]);return e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(e){return this.each((function(){const t=Dn.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}it(Dn);const Nn={...Dn.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},xn={...Dn.DefaultType,content:"(null|string|element|function)"};class On extends Dn{static get Default(){return Nn}static get DefaultType(){return xn}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each((function(){const t=On.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}it(On);const Rn={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Ln={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Pn extends Nt{constructor(e,t){super(e,t),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Rn}static get DefaultType(){return Ln}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=We(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,"string"==typeof e.threshold&&(e.threshold=e.threshold.split(",").map((e=>Number.parseFloat(e)))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(It.off(this._config.target,"click.bs.scrollspy"),It.on(this._config.target,"click.bs.scrollspy","[href]",(e=>{const t=this._observableSections.get(e.target.hash);if(t){e.preventDefault();const n=this._rootElement||window,i=t.offsetTop-this._element.offsetTop;if(n.scrollTo)return void n.scrollTo({top:i,behavior:"smooth"});n.scrollTop=i}})))}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver((e=>this._observerCallback(e)),e)}_observerCallback(e){const t=e=>this._targetLinks.get(`#${e.target.id}`),n=e=>{this._previousScrollData.visibleEntryTop=e.target.offsetTop,this._process(t(e))},i=(this._rootElement||document.documentElement).scrollTop,s=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const r of e){if(!r.isIntersecting){this._activeTarget=null,this._clearActiveClass(t(r));continue}const e=r.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(s&&e){if(n(r),!i)return}else s||e||n(r)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=Lt.find("[href]",this._config.target);for(const t of e){if(!t.hash||Ye(t))continue;const e=Lt.findOne(t.hash,this._element);Qe(e)&&(this._targetLinks.set(t.hash,t),this._observableSections.set(t.hash,e))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add("active"),this._activateParents(e),It.trigger(this._element,"activate.bs.scrollspy",{relatedTarget:e}))}_activateParents(e){if(e.classList.contains("dropdown-item"))Lt.findOne(".dropdown-toggle",e.closest(".dropdown")).classList.add("active");else for(const t of Lt.parents(e,".nav, .list-group"))for(const e of Lt.prev(t,".nav-link, .nav-item > .nav-link, .list-group-item"))e.classList.add("active")}_clearActiveClass(e){e.classList.remove("active");const t=Lt.find("[href].active",e);for(const e of t)e.classList.remove("active")}static jQueryInterface(e){return this.each((function(){const t=Pn.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}))}}It.on(window,"load.bs.scrollspy.data-api",(()=>{for(const e of Lt.find('[data-bs-spy="scroll"]'))Pn.getOrCreateInstance(e)})),it(Pn);const Mn="ArrowLeft",Un="ArrowRight",Fn="ArrowUp",Vn="ArrowDown",qn='.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), [data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';class Bn extends Nt{constructor(e){super(e),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),It.on(this._element,"keydown.bs.tab",(e=>this._keydown(e))))}static get NAME(){return"tab"}show(){const e=this._element;if(this._elemIsActive(e))return;const t=this._getActiveElem(),n=t?It.trigger(t,"hide.bs.tab",{relatedTarget:e}):null;It.trigger(e,"show.bs.tab",{relatedTarget:t}).defaultPrevented||n&&n.defaultPrevented||(this._deactivate(t,e),this._activate(e,t))}_activate(e,t){if(!e)return;e.classList.add("active"),this._activate(He(e));this._queueCallback((()=>{"tab"===e.getAttribute("role")?(e.focus(),e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),It.trigger(e,"shown.bs.tab",{relatedTarget:t})):e.classList.add("show")}),e,e.classList.contains("fade"))}_deactivate(e,t){if(!e)return;e.classList.remove("active"),e.blur(),this._deactivate(He(e));this._queueCallback((()=>{"tab"===e.getAttribute("role")?(e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),It.trigger(e,"hidden.bs.tab",{relatedTarget:t})):e.classList.remove("show")}),e,e.classList.contains("fade"))}_keydown(e){if(![Mn,Un,Fn,Vn].includes(e.key))return;e.stopPropagation(),e.preventDefault();const t=[Un,Vn].includes(e.key),n=ot(this._getChildren().filter((e=>!Ye(e))),e.target,t,!0);n&&Bn.getOrCreateInstance(n).show()}_getChildren(){return Lt.find(qn,this._parent)}_getActiveElem(){return this._getChildren().find((e=>this._elemIsActive(e)))||null}_setInitialAttributes(e,t){this._setAttributeIfNotExists(e,"role","tablist");for(const e of t)this._setInitialAttributesOnChild(e)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const t=this._elemIsActive(e),n=this._getOuterElement(e);e.setAttribute("aria-selected",t),n!==e&&this._setAttributeIfNotExists(n,"role","presentation"),t||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const t=He(e);t&&(this._setAttributeIfNotExists(t,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(t,"aria-labelledby",`#${e.id}`))}_toggleDropDown(e,t){const n=this._getOuterElement(e);if(!n.classList.contains("dropdown"))return;const i=(e,i)=>{const s=Lt.findOne(e,n);s&&s.classList.toggle(i,t)};i(".dropdown-toggle","active"),i(".dropdown-menu","show"),i(".dropdown-item","active"),n.setAttribute("aria-expanded",t)}_setAttributeIfNotExists(e,t,n){e.hasAttribute(t)||e.setAttribute(t,n)}_elemIsActive(e){return e.classList.contains("active")}_getInnerElement(e){return e.matches(qn)?e:Lt.findOne(qn,e)}_getOuterElement(e){return e.closest(".nav-item, .list-group-item")||e}static jQueryInterface(e){return this.each((function(){const t=Bn.getOrCreateInstance(this);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}))}}It.on(document,"click.bs.tab",'[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',(function(e){["A","AREA"].includes(this.tagName)&&e.preventDefault(),Ye(this)||Bn.getOrCreateInstance(this).show()})),It.on(window,"load.bs.tab",(()=>{for(const e of Lt.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'))Bn.getOrCreateInstance(e)})),it(Bn);const jn={animation:"boolean",autohide:"boolean",delay:"number"},$n={animation:!0,autohide:!0,delay:5e3};class Gn extends Nt{constructor(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return $n}static get DefaultType(){return jn}static get NAME(){return"toast"}show(){if(It.trigger(this._element,"show.bs.toast").defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add("fade");this._element.classList.remove("hide"),Ze(this._element),this._element.classList.add("show","showing"),this._queueCallback((()=>{this._element.classList.remove("showing"),It.trigger(this._element,"shown.bs.toast"),this._maybeScheduleHide()}),this._element,this._config.animation)}hide(){if(!this.isShown())return;if(It.trigger(this._element,"hide.bs.toast").defaultPrevented)return;this._element.classList.add("showing"),this._queueCallback((()=>{this._element.classList.add("hide"),this._element.classList.remove("showing","show"),It.trigger(this._element,"hidden.bs.toast")}),this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove("show"),super.dispose()}isShown(){return this._element.classList.contains("show")}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t}if(t)return void this._clearTimeout();const n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){It.on(this._element,"mouseover.bs.toast",(e=>this._onInteraction(e,!0))),It.on(this._element,"mouseout.bs.toast",(e=>this._onInteraction(e,!1))),It.on(this._element,"focusin.bs.toast",(e=>this._onInteraction(e,!0))),It.on(this._element,"focusout.bs.toast",(e=>this._onInteraction(e,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each((function(){const t=Gn.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}xt(Gn),it(Gn);var Hn=new class{addRegisterHandler(e,t,n){t.forEach(((t,i)=>{0===i?e.addEventListener(t,n):document.addEventListener(t,(e=>{"Enter"===e.key&&n()}))}))}},zn={},Kn={};e(Kn,"_invalidArgument",(()=>ws)),e(Kn,"_invalidRootOperation",(()=>bs)),e(Kn,"_Location",(()=>Es)),e(Kn,"StringFormat",(()=>Us)),e(Kn,"_dataFromString",(()=>Vs)),e(Kn,"_FbsBlob",(()=>$s)),e(Kn,"_TaskEvent",(()=>pr)),e(Kn,"_TaskState",(()=>mr)),e(Kn,"_UploadTask",(()=>kr)),e(Kn,"getBytes",(()=>qr)),e(Kn,"uploadBytes",(()=>Br)),e(Kn,"uploadString",(()=>jr)),e(Kn,"uploadBytesResumable",(()=>$r)),e(Kn,"getMetadata",(()=>Gr)),e(Kn,"updateMetadata",(()=>Hr)),e(Kn,"list",(()=>zr)),e(Kn,"listAll",(()=>Kr)),e(Kn,"getDownloadURL",(()=>Wr)),e(Kn,"deleteObject",(()=>Qr)),e(Kn,"ref",(()=>Yr)),e(Kn,"_getChild",(()=>Xr)),e(Kn,"getStorage",(()=>Jr)),e(Kn,"connectStorageEmulator",(()=>Zr)),e(Kn,"getBlob",(()=>eo)),e(Kn,"getStream",(()=>to));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wn=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++i)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},Qn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const s=e[t],r=t+1<e.length,o=r?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,u=s>>2,l=(3&s)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,r||(h=64)),i.push(n[u],n[l],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Wn(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(r>>10)),t[i++]=String.fromCharCode(56320+(1023&r))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const s=n[e.charAt(t++)],r=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==s||null==r||null==o||null==a)throw Error();const c=s<<2|r>>4;if(i.push(c),64!==o){const e=r<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Yn=function(e){return function(e){const t=Wn(e);return Qn.encodeByteArray(t,!0)}(e).replace(/\./g,"")},Xn=function(e){try{return Qn.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Yn(JSON.stringify({alg:"none",type:"JWT"})),Yn(JSON.stringify(r)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function ti(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function ni(){const e=ei();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function ii(){return!function(){try{return"[object process]"===Object.prototype.toString.call(n.process)}catch(e){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function si(){return"object"==typeof indexedDB}class ri extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,ri.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,oi.prototype.create)}}class oi{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],r=s?function(e,t){return e.replace(ai,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new ri(i,o,n)}}const ai=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ui(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const n=e[s],r=t[s];if(li(n)&&li(r)){if(!ui(n,r))return!1}else if(n!==r)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function li(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function hi(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function di(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function fi(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(e,t){const n=new mi(e,t);return n.subscribe.bind(n)}class mi{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=gi),void 0===i.error&&(i.error=gi),void 0===i.complete&&(i.complete=gi);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function gi(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yi(e){return e&&e._delegate?e._delegate:e}class vi{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wi{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Jn;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,"[DEFAULT]"===i?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class _i{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new wi(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=[];var Ii,Ti;(Ti=Ii||(Ii={}))[Ti.DEBUG=0]="DEBUG",Ti[Ti.VERBOSE=1]="VERBOSE",Ti[Ti.INFO=2]="INFO",Ti[Ti.WARN=3]="WARN",Ti[Ti.ERROR=4]="ERROR",Ti[Ti.SILENT=5]="SILENT";const Ei={debug:Ii.DEBUG,verbose:Ii.VERBOSE,info:Ii.INFO,warn:Ii.WARN,error:Ii.ERROR,silent:Ii.SILENT},Si=Ii.INFO,ki={[Ii.DEBUG]:"log",[Ii.VERBOSE]:"log",[Ii.INFO]:"info",[Ii.WARN]:"warn",[Ii.ERROR]:"error"},Ai=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),s=ki[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${i}]  ${e.name}:`,...n)};class Ci{constructor(e){this.name=e,this._logLevel=Si,this._logHandler=Ai,this._userLogHandler=null,bi.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ii))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Ei[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ii.DEBUG,...e),this._logHandler(this,Ii.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ii.VERBOSE,...e),this._logHandler(this,Ii.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ii.INFO,...e),this._logHandler(this,Ii.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ii.WARN,...e),this._logHandler(this,Ii.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ii.ERROR,...e),this._logHandler(this,Ii.ERROR,...e)}}let Di,Ni;const xi=new WeakMap,Oi=new WeakMap,Ri=new WeakMap,Li=new WeakMap,Pi=new WeakMap;let Mi={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Oi.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Ri.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vi(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Ui(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Ni||(Ni=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(qi(this),t),Vi(xi.get(this))}:function(...t){return Vi(e.apply(qi(this),t))}:function(t,...n){const i=e.call(qi(this),t,...n);return Ri.set(i,t.sort?t.sort():[t]),Vi(i)}}function Fi(e){return"function"==typeof e?Ui(e):(e instanceof IDBTransaction&&function(e){if(Oi.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",r),e.removeEventListener("abort",r)},s=()=>{t(),i()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",r),e.addEventListener("abort",r)}));Oi.set(e,t)}(e),t=e,(Di||(Di=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,Mi):e);var t}function Vi(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",r)},s=()=>{t(Vi(e.result)),i()},r=()=>{n(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&xi.set(t,e)})).catch((()=>{})),Pi.set(t,e),t}(e);if(Li.has(e))return Li.get(e);const t=Fi(e);return t!==e&&(Li.set(e,t),Pi.set(t,e)),t}const qi=e=>Pi.get(e);function Bi(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(e,t),a=Vi(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(Vi(o.result),e.oldVersion,e.newVersion,Vi(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{r&&e.addEventListener("close",(()=>r())),s&&e.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}const ji=["get","getKey","getAll","getAllKeys","count"],$i=["put","add","delete","clear"],Gi=new Map;function Hi(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Gi.get(t))return Gi.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=$i.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!ji.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&r.done]))[0]};return Gi.set(t,r),r}Mi=(e=>({...e,get:(t,n,i)=>Hi(t,n)||e.get(t,n,i),has:(t,n)=>!!Hi(t,n)||e.has(t,n)}))(Mi);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zi{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Ki=new Ci("@firebase/app"),Wi={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Qi=new Map,Yi=new Map;function Xi(e,t){try{e.container.addComponent(t)}catch(n){Ki.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ji(e){const t=e.name;if(Yi.has(t))return Ki.debug(`There were multiple attempts to register component ${t}.`),!1;Yi.set(t,e);for(const t of Qi.values())Xi(t,e);return!0}function Zi(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function es(e,t,n="[DEFAULT]"){Zi(e,t).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ts=new oi("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ns{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new vi("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ts.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(e="[DEFAULT]"){const t=Qi.get(e);if(!t)throw ts.create("no-app",{appName:e});return t}function ss(e,t,n){var i;let s=null!==(i=Wi[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const e=[`Unable to register library "${s}" with version "${t}":`];return r&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ki.warn(e.join(" "))}Ji(new vi(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}let rs=null;function os(){return rs||(rs=Bi("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw ts.create("idb-open",{originalErrorMessage:e.message})}))),rs}async function as(e,t){var n;try{const n=(await os()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");return await i.put(t,cs(e)),n.done}catch(e){if(e instanceof ri)Ki.warn(e.message);else{const t=ts.create("idb-set",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message});Ki.warn(t.message)}}}function cs(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new hs(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=ls();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=ls(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),ds(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ds(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=Yn(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ls(){return(new Date).toISOString().substring(0,10)}class hs{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!si()&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){var t;try{return(await os()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(cs(e))}catch(e){if(e instanceof ri)Ki.warn(e.message);else{const n=ts.create("idb-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message});Ki.warn(n.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return as(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return as(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ds(e){return Yn(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fs;fs="",Ji(new vi("platform-logger",(e=>new zi(e)),"PRIVATE")),Ji(new vi("heartbeat",(e=>new us(e)),"PRIVATE")),ss("@firebase/app","0.7.33",fs),ss("@firebase/app","0.7.33","esm2017"),ss("fire-js","");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ps extends ri{constructor(e,t){super(ms(e),`Firebase Storage: ${t} (${ms(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ps.prototype)}_codeEquals(e){return ms(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function ms(e){return"storage/"+e}function gs(){return new ps("unknown","An unknown error occurred, please check the error payload for server response.")}function ys(){return new ps("canceled","User canceled the upload/download.")}function vs(){return new ps("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function ws(e){return new ps("invalid-argument",e)}function _s(){return new ps("app-deleted","The Firebase app was deleted.")}function bs(e){return new ps("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Is(e,t){return new ps("invalid-format","String does not match format '"+e+"': "+t)}function Ts(e){throw new ps("internal-error","Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=Es.makeFromUrl(e,t)}catch(t){return new Es(e,"")}if(""===n.path)return n;throw new ps("invalid-default-bucket","Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let n=null;const i="([A-Za-z0-9.\\-_]+)";const s=new RegExp("^gs://"+i+"(/(.*))?$","i");function r(e){e.path_=decodeURIComponent(e.path)}const o=t.replace(/[.]/g,"\\."),a=[{regex:s,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${i}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:r},{regex:new RegExp(`^https?://${"firebasestorage.googleapis.com"===t?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${i}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:r}];for(let t=0;t<a.length;t++){const i=a[t],s=i.regex.exec(e);if(s){const e=s[i.indices.bucket];let t=s[i.indices.path];t||(t=""),n=new Es(e,t),i.postModify(n);break}}if(null==n)throw function(e){return new ps("invalid-url","Invalid URL '"+e+"'.")}(e);return n}}class Ss{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(e){return"string"==typeof e||e instanceof String}function As(e){return Cs()&&e instanceof Blob}function Cs(){return"undefined"!=typeof Blob}function Ds(e,t,n,i){if(i<t)throw ws(`Invalid value for '${e}'. Expected ${t} or greater.`);if(i>n)throw ws(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(e,t,n){let i=t;return null==n&&(i=`https://${t}`),`${n}://${i}/v0${e}`}function xs(e){const t=encodeURIComponent;let n="?";for(const i in e)if(e.hasOwnProperty(i)){n=n+(t(i)+"="+t(e[i]))+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Os,Rs;(Rs=Os||(Os={}))[Rs.NO_ERROR=0]="NO_ERROR",Rs[Rs.NETWORK_ERROR=1]="NETWORK_ERROR",Rs[Rs.ABORT=2]="ABORT";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ls{constructor(e,t,n,i,s,r,o,a,c,u,l){this.url_=e,this.method_=t,this.headers_=n,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=r,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{const n=this.resolve_,i=this.reject_,s=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(s,s.getResponse());void 0!==e?n(e):n()}catch(e){i(e)}else if(null!==s){const e=gs();e.serverResponse=s.getErrorText(),this.errorCallback_?i(this.errorCallback_(s,e)):i(e)}else if(t.canceled){i(this.appDelete_?_s():ys())}else{i(new ps("retry-limit-exceeded","Max retry time for operation exceeded, please try again."))}};this.canceled_?e(0,new Ps(!1,null,!0)):this.backoffId_=function(e,t,n){let i=1,s=null,r=null,o=!1,a=0;function c(){return 2===a}let u=!1;function l(...e){u||(u=!0,t.apply(null,e))}function h(t){s=setTimeout((()=>{s=null,e(f,c())}),t)}function d(){r&&clearTimeout(r)}function f(e,...t){if(u)return void d();if(e)return d(),void l.call(null,e,...t);if(c()||o)return d(),void l.call(null,e,...t);let n;i<64&&(i*=2),1===a?(a=2,n=0):n=1e3*(i+Math.random()),h(n)}let p=!1;function m(e){p||(p=!0,d(),u||(null!==s?(e||(a=2),clearTimeout(s),h(0)):e||(a=1)))}return h(0),r=setTimeout((()=>{o=!0,m(!0)}),n),m}(((e,t)=>{if(t)return void e(!1,new Ps(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const i=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(i),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(i),this.pendingConnection_=null;const t=n.getErrorCode()===Os.NO_ERROR,s=n.getStatus();if(!t||this.isRetryStatusCode_(s)){const t=n.getErrorCode()===Os.ABORT;return void e(!1,new Ps(!1,null,t))}const r=-1!==this.successCodes_.indexOf(s);e(!0,new Ps(r,n))}))}),e,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,n=-1!==[408,429].indexOf(e),i=-1!==this.additionalRetryCodes_.indexOf(e);return t||n||i}}class Ps{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function Ms(...e){const t="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(Cs())return new Blob(e);throw new ps("unsupported-environment","This browser doesn't seem to support creating Blobs")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Us={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Fs{constructor(e,t){this.data=e,this.contentType=t||null}}function Vs(e,t){switch(e){case Us.RAW:return new Fs(qs(t));case Us.BASE64:case Us.BASE64URL:return new Fs(Bs(e,t));case Us.DATA_URL:return new Fs(function(e){const t=new js(e);return t.base64?Bs(Us.BASE64,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw Is(Us.DATA_URL,"Malformed data URL.")}return qs(t)}(t.rest)}(t),new js(t).contentType)}throw gs()}function qs(e){const t=[];for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);if(i<=127)t.push(i);else if(i<=2047)t.push(192|i>>6,128|63&i);else if(55296==(64512&i)){if(n<e.length-1&&56320==(64512&e.charCodeAt(n+1))){i=65536|(1023&i)<<10|1023&e.charCodeAt(++n),t.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|63&i)}else t.push(239,191,189)}else 56320==(64512&i)?t.push(239,191,189):t.push(224|i>>12,128|i>>6&63,128|63&i)}return new Uint8Array(t)}function Bs(e,t){switch(e){case Us.BASE64:{const n=-1!==t.indexOf("-"),i=-1!==t.indexOf("_");if(n||i){throw Is(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case Us.BASE64URL:{const n=-1!==t.indexOf("+"),i=-1!==t.indexOf("/");if(n||i){throw Is(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=atob(t)}catch(t){throw Is(e,"Invalid character found")}const i=new Uint8Array(n.length);for(let e=0;e<n.length;e++)i[e]=n.charCodeAt(e);return i}class js{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw Is(Us.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;var i,s;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */null!=n&&(this.base64=(s=";base64",!!((i=n).length>=s.length)&&i.substring(i.length-s.length)===s),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}class $s{constructor(e,t){let n=0,i="";As(e)?(this.data_=e,n=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(As(this.data_)){const r=this.data_,o=(i=e,s=t,(n=r).webkitSlice?n.webkitSlice(i,s):n.mozSlice?n.mozSlice(i,s):n.slice?n.slice(i,s):null);return null===o?null:new $s(o)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new $s(n,!0)}var n,i,s;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}static getBlob(...e){if(Cs()){const t=e.map((e=>e instanceof $s?e.data_:e));return new $s(Ms.apply(null,t))}{const t=e.map((e=>ks(e)?Vs(Us.RAW,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const i=new Uint8Array(n);let s=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)i[s++]=e[t]})),new $s(i,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(e){let t;try{t=JSON.parse(e)}catch(e){return null}return"object"!=typeof(n=t)||Array.isArray(n)?null:t;var n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(e,t){return t}class Ks{constructor(e,t,n,i){this.server=e,this.local=t||e,this.writable=!!n,this.xform=i||zs}}let Ws=null;function Qs(){if(Ws)return Ws;const e=[];e.push(new Ks("bucket")),e.push(new Ks("generation")),e.push(new Ks("metageneration")),e.push(new Ks("name","fullPath",!0));const t=new Ks("name");t.xform=function(e,t){return function(e){return!ks(e)||e.length<2?e:Hs(e)}(t)},e.push(t);const n=new Ks("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new Ks("timeCreated")),e.push(new Ks("updated")),e.push(new Ks("md5Hash",null,!0)),e.push(new Ks("cacheControl",null,!0)),e.push(new Ks("contentDisposition",null,!0)),e.push(new Ks("contentEncoding",null,!0)),e.push(new Ks("contentLanguage",null,!0)),e.push(new Ks("contentType",null,!0)),e.push(new Ks("metadata","customMetadata",!0)),Ws=e,Ws}function Ys(e,t,n){const i={type:"file"},s=n.length;for(let e=0;e<s;e++){const s=n[e];i[s.local]=s.xform(i,t[s.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){const n=e.bucket,i=e.fullPath,s=new Es(n,i);return t._makeStorageReference(s)}})}(i,e),i}function Xs(e,t,n){const i=Gs(t);if(null===i)return null;return Ys(e,i,n)}function Js(e,t){const n={},i=t.length;for(let s=0;s<i;s++){const i=t[s];i.writable&&(n[i.server]=e[i.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(e,t,n){const i=Gs(n);if(null===i)return null;return function(e,t,n){const i={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n.prefixes)for(const s of n.prefixes){const n=s.replace(/\/$/,""),r=e._makeStorageReference(new Es(t,n));i.prefixes.push(r)}if(n.items)for(const s of n.items){const n=e._makeStorageReference(new Es(t,s.name));i.items.push(n)}return i}(e,t,i)}class er{constructor(e,t,n,i){this.url=e,this.method=t,this.handler=n,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(e){if(!e)throw gs()}function nr(e,t){return function(n,i){const s=Xs(e,i,t);return tr(null!==s),s}}function ir(e,t){return function(n,i){const s=Xs(e,i,t);return tr(null!==s),function(e,t,n,i){const s=Gs(t);if(null===s)return null;if(!ks(s.downloadTokens))return null;const r=s.downloadTokens;if(0===r.length)return null;const o=encodeURIComponent;return r.split(",").map((t=>{const s=e.bucket,r=e.fullPath;return Ns("/b/"+o(s)+"/o/"+o(r),n,i)+xs({alt:"media",token:t})}))[0]}(s,i,e.host,e._protocol)}}function sr(e){return function(t,n){let i;var s,r;return 401===t.getStatus()?i=t.getErrorText().includes("Firebase App Check token is invalid")?new ps("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new ps("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(r=e.bucket,i=new ps("quota-exceeded","Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(s=e.path,i=new ps("unauthorized","User does not have permission to access '"+s+"'.")):i=n,i.serverResponse=n.serverResponse,i}}function rr(e){const t=sr(e);return function(n,i){let s=t(n,i);var r;return 404===n.getStatus()&&(r=e.path,s=new ps("object-not-found","Object '"+r+"' does not exist.")),s.serverResponse=i.serverResponse,s}}function or(e,t,n){const i=Ns(t.fullServerUrl(),e.host,e._protocol),s=e.maxOperationRetryTime,r=new er(i,"GET",nr(e,n),s);return r.errorHandler=rr(t),r}function ar(e,t,n,i,s){const r={};t.isRoot?r.prefix="":r.prefix=t.path+"/",n&&n.length>0&&(r.delimiter=n),i&&(r.pageToken=i),s&&(r.maxResults=s);const o=Ns(t.bucketOnlyServerUrl(),e.host,e._protocol),a=e.maxOperationRetryTime,c=new er(o,"GET",function(e,t){return function(n,i){const s=Zs(e,t,i);return tr(null!==s),s}}(e,t.bucket),a);return c.urlParams=r,c.errorHandler=sr(t),c}function cr(e,t,n){const i=Ns(t.fullServerUrl(),e.host,e._protocol)+"?alt=media",s=e.maxOperationRetryTime,r=new er(i,"GET",((e,t)=>t),s);return r.errorHandler=rr(t),void 0!==n&&(r.headers.Range=`bytes=0-${n}`,r.successCodes=[200,206]),r}function ur(e,t,n){const i=Object.assign({},n);return i.fullPath=e.path,i.size=t.size(),i.contentType||(i.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),i}function lr(e,t,n,i,s){const r=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};const a=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();o["Content-Type"]="multipart/related; boundary="+a;const c=ur(t,i,s),u="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+Js(c,n)+"\r\n--"+a+"\r\nContent-Type: "+c.contentType+"\r\n\r\n",l="\r\n--"+a+"--",h=$s.getBlob(u,i,l);if(null===h)throw vs();const d={name:c.fullPath},f=Ns(r,e.host,e._protocol),p=e.maxUploadRetryTime,m=new er(f,"POST",nr(e,n),p);return m.urlParams=d,m.headers=o,m.body=h.uploadData(),m.errorHandler=sr(t),m}class hr{constructor(e,t,n,i){this.current=e,this.total=t,this.finalized=!!n,this.metadata=i||null}}function dr(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){tr(!1)}return tr(!!n&&-1!==(t||["active"]).indexOf(n)),n}function fr(e,t,n,i,s,r,o,a){const c=new hr(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=i.size()),i.size()!==c.total)throw new ps("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");const u=c.total-c.current;let l=u;s>0&&(l=Math.min(l,s));const h=c.current,d=h+l,f={"X-Goog-Upload-Command":l===u?"upload, finalize":"upload","X-Goog-Upload-Offset":`${c.current}`},p=i.slice(h,d);if(null===p)throw vs();const m=t.maxUploadRetryTime,g=new er(n,"POST",(function(e,n){const s=dr(e,["active","final"]),o=c.current+l,a=i.size();let u;return u="final"===s?nr(t,r)(e,n):null,new hr(o,a,"final"===s,u)}),m);return g.headers=f,g.body=p.uploadData(),g.progressCallback=a||null,g.errorHandler=sr(e),g}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr={STATE_CHANGED:"state_changed"},mr={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function gr(e){switch(e){case"running":case"pausing":case"canceling":return mr.RUNNING;case"paused":return mr.PAUSED;case"success":return mr.SUCCESS;case"canceled":return mr.CANCELED;default:return mr.ERROR}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,t,n){if("function"==typeof e||null!=t||null!=n)this.next=e,this.error=null!=t?t:void 0,this.complete=null!=n?n:void 0;else{const t=e;this.next=t.next,this.error=t.error,this.complete=t.complete}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(e){return(...t)=>{Promise.resolve().then((()=>e(...t)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Os.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=Os.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=Os.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,i){if(this.sent_)throw Ts("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==i)for(const e in i)i.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,i[e].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ts("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ts("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw Ts("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ts("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class _r extends wr{initXhr(){this.xhr_.responseType="text"}}function br(){return new _r}class Ir extends wr{initXhr(){this.xhr_.responseType="arraybuffer"}}function Tr(){return new Ir}class Er extends wr{initXhr(){this.xhr_.responseType="blob"}}function Sr(){return new Er}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=Qs(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{this._request=void 0,this._chunkMultiplier=1,e._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=e,this._transition("error"))},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals("canceled")?this.completeTransitions_():(this._error=e,this._transition("error"))},this._promise=new Promise(((e,t)=>{this._resolve=e,this._reject=t,this._start()})),this._promise.then(null,(()=>{}))}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused")}}))}_createResumable(){this._resolveToken(((e,t)=>{const n=function(e,t,n,i,s){const r=t.bucketOnlyServerUrl(),o=ur(t,i,s),a={name:o.fullPath},c=Ns(r,e.host,e._protocol),u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${i.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},l=Js(o,n),h=e.maxUploadRetryTime,d=new er(c,"POST",(function(e){let t;dr(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){tr(!1)}return tr(ks(t)),t}),h);return d.urlParams=a,d.headers=u,d.body=l,d.errorHandler=sr(t),d}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(n,br,e,t);this._request=i,i.getPromise().then((e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const e=this._uploadUrl;this._resolveToken(((t,n)=>{const i=function(e,t,n,i){const s=e.maxUploadRetryTime,r=new er(n,"POST",(function(e){const t=dr(e,["active","final"]);let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){tr(!1)}n||tr(!1);const s=Number(n);return tr(!isNaN(s)),new hr(s,i.size(),"final"===t)}),s);return r.headers={"X-Goog-Upload-Command":"query"},r.errorHandler=sr(t),r}(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,br,t,n);this._request=s,s.getPromise().then((e=>{this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const e=262144*this._chunkMultiplier,t=new hr(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(((i,s)=>{let r;try{r=fr(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(e){return this._error=e,void this._transition("error")}const o=this._ref.storage._makeRequest(r,br,i,s);this._request=o,o.getPromise().then((e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){262144*this._chunkMultiplier<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((e,t)=>{const n=or(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(n,br,e,t);this._request=i,i.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((e,t)=>{const n=lr(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(n,br,e,t);this._request=i,i.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request&&this._request.cancel();break;case"running":const t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":case"error":case"success":this._state=e,this._notifyObservers();break;case"canceled":this._error=ys(),this._state=e,this._notifyObservers()}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}get snapshot(){const e=gr(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,i){const s=new yr(t||void 0,n||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();this._observers.slice().forEach((e=>{this._notifyObserver(e)}))}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(gr(this._state)){case mr.SUCCESS:vr(this._resolve.bind(null,this.snapshot))();break;case mr.CANCELED:case mr.ERROR:vr(this._reject.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(gr(this._state)){case mr.RUNNING:case mr.PAUSED:e.next&&vr(e.next.bind(e,this.snapshot))();break;case mr.SUCCESS:e.complete&&vr(e.complete.bind(e))();break;case mr.CANCELED:case mr.ERROR:default:e.error&&vr(e.error.bind(e,this._error))()}}resume(){const e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){const e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){const e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,t){this._service=e,this._location=t instanceof Es?t:Es.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ar(e,t)}get root(){const e=new Es(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Hs(this._location.path)}get storage(){return this._service}get parent(){const e=function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new Es(this._location.bucket,e);return new Ar(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw bs(e)}}function Cr(e,t,n){e._throwIfRoot("uploadBytes");const i=lr(e.storage,e._location,Qs(),new $s(t,!0),n);return e.storage.makeRequestWithTokens(i,br).then((t=>({metadata:t,ref:e})))}function Dr(e){const t={prefixes:[],items:[]};return Nr(e,t).then((()=>t))}async function Nr(e,t,n){const i={pageToken:n},s=await xr(e,i);t.prefixes.push(...s.prefixes),t.items.push(...s.items),null!=s.nextPageToken&&await Nr(e,t,s.nextPageToken)}function xr(e,t){null!=t&&"number"==typeof t.maxResults&&Ds("options.maxResults",1,1e3,t.maxResults);const n=t||{},i=ar(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(i,br)}function Or(e,t){e._throwIfRoot("updateMetadata");const n=function(e,t,n,i){const s=Ns(t.fullServerUrl(),e.host,e._protocol),r=Js(n,i),o=e.maxOperationRetryTime,a=new er(s,"PATCH",nr(e,i),o);return a.headers={"Content-Type":"application/json; charset=utf-8"},a.body=r,a.errorHandler=rr(t),a}(e.storage,e._location,t,Qs());return e.storage.makeRequestWithTokens(n,br)}function Rr(e){e._throwIfRoot("getDownloadURL");const t=function(e,t,n){const i=Ns(t.fullServerUrl(),e.host,e._protocol),s=e.maxOperationRetryTime,r=new er(i,"GET",ir(e,n),s);return r.errorHandler=rr(t),r}(e.storage,e._location,Qs());return e.storage.makeRequestWithTokens(t,br).then((e=>{if(null===e)throw new ps("no-download-url","The given file does not have any download URLs.");return e}))}function Lr(e){e._throwIfRoot("deleteObject");const t=function(e,t){const n=Ns(t.fullServerUrl(),e.host,e._protocol),i=e.maxOperationRetryTime,s=new er(n,"DELETE",(function(e,t){}),i);return s.successCodes=[200,204],s.errorHandler=rr(t),s}(e.storage,e._location);return e.storage.makeRequestWithTokens(t,br)}function Pr(e,t){const n=function(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),i=new Es(e._location.bucket,n);return new Ar(e.storage,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(e,t){if(e instanceof Vr){const n=e;if(null==n._bucket)throw new ps("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");const i=new Ar(n,n._bucket);return null!=t?Mr(i,t):i}return void 0!==t?Pr(e,t):e}function Ur(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof Vr)return new Ar(e,t);throw ws("To use ref(service, url), the first argument must be a Storage instance.")}return Mr(e,t)}function Fr(e,t){const n=null==t?void 0:t.storageBucket;return null==n?null:Es.makeFromBucketSpec(n,e)}class Vr{constructor(e,t,n,i,s){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host="firebasestorage.googleapis.com",this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=i?Es.makeFromBucketSpec(i,this._host):Fr(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=Es.makeFromBucketSpec(this._url,e):this._bucket=Fr(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ds("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ds("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ar(this,e)}_makeRequest(e,t,n,i){if(this._deleted)return new Ss(_s());{const s=function(e,t,n,i,s,r){const o=xs(e.urlParams),a=e.url+o,c=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(c,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(c,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(c,r),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(c,i),new Ls(a,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,this._appId,n,i,t,this._firebaseVersion);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(e,t){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,i).getPromise()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qr(e,t){return function(e,t){e._throwIfRoot("getBytes");const n=cr(e.storage,e._location,t);return e.storage.makeRequestWithTokens(n,Tr).then((e=>void 0!==t?e.slice(0,t):e))}(e=yi(e),t)}function Br(e,t,n){return Cr(e=yi(e),t,n)}function jr(e,t,n,i){return function(e,t,n=Us.RAW,i){e._throwIfRoot("uploadString");const s=Vs(n,t),r=Object.assign({},i);return null==r.contentType&&null!=s.contentType&&(r.contentType=s.contentType),Cr(e,s.data,r)}(e=yi(e),t,n,i)}function $r(e,t,n){return function(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new kr(e,new $s(t),n)}(e=yi(e),t,n)}function Gr(e){return function(e){e._throwIfRoot("getMetadata");const t=or(e.storage,e._location,Qs());return e.storage.makeRequestWithTokens(t,br)}(e=yi(e))}function Hr(e,t){return Or(e=yi(e),t)}function zr(e,t){return xr(e=yi(e),t)}function Kr(e){return Dr(e=yi(e))}function Wr(e){return Rr(e=yi(e))}function Qr(e){return Lr(e=yi(e))}function Yr(e,t){return Ur(e=yi(e),t)}function Xr(e,t){return Pr(e,t)}function Jr(e=is(),t){return Zi(e=yi(e),"storage").getImmediate({identifier:t})}function Zr(e,t,n,i={}){!function(e,t,n,i={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:s}=i;s&&(e._overrideAuthToken="string"==typeof s?s:Zn(s,e.app.options.projectId))}(e,t,n,i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(e,t){return function(e,t){e._throwIfRoot("getBlob");const n=cr(e.storage,e._location,t);return e.storage.makeRequestWithTokens(n,Sr).then((e=>void 0!==t?e.slice(0,t):e))}(e=yi(e),t)}function to(e,t){throw new Error("getStream() is only supported by NodeJS builds")}function no(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new Vr(n,i,s,t,"9.10.0")}Ji(new vi("storage",no,"PUBLIC").setMultipleInstances(!0)),ss("@firebase/storage","0.9.9",""),ss("@firebase/storage","0.9.9","esm2017"),t(zn,Kn);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ss("firebase","9.10.0","app");var io={},so={};e(so,"setLogLevel",(()=>Cl)),e(so,"_logWarn",(()=>xl)),e(so,"_debugAssert",(()=>Pl)),e(so,"FirestoreError",(()=>Fl)),e(so,"_EmptyAuthCredentialsProvider",(()=>Bl)),e(so,"_EmptyAppCheckTokenProvider",(()=>Wl)),e(so,"Timestamp",(()=>eh)),e(so,"_FieldPath",(()=>rh)),e(so,"_DocumentKey",(()=>oh)),e(so,"_isBase64Available",(()=>Gh)),e(so,"_DatabaseId",(()=>ed)),e(so,"_validateIsNotUsedTogether",(()=>$w)),e(so,"_cast",(()=>Kw)),e(so,"connectFirestoreEmulator",(()=>Xw)),e(so,"DocumentReference",(()=>Jw)),e(so,"CollectionReference",(()=>e_)),e(so,"Query",(()=>Zw)),e(so,"collection",(()=>t_)),e(so,"collectionGroup",(()=>n_)),e(so,"doc",(()=>i_)),e(so,"refEqual",(()=>s_)),e(so,"queryEqual",(()=>r_)),e(so,"LoadBundleTask",(()=>c_)),e(so,"CACHE_SIZE_UNLIMITED",(()=>u_)),e(so,"Firestore",(()=>l_)),e(so,"initializeFirestore",(()=>h_)),e(so,"getFirestore",(()=>d_)),e(so,"ensureFirestoreConfigured",(()=>f_)),e(so,"enableIndexedDbPersistence",(()=>m_)),e(so,"enableMultiTabIndexedDbPersistence",(()=>g_)),e(so,"clearIndexedDbPersistence",(()=>v_)),e(so,"waitForPendingWrites",(()=>w_)),e(so,"enableNetwork",(()=>__)),e(so,"disableNetwork",(()=>b_)),e(so,"terminate",(()=>I_)),e(so,"loadBundle",(()=>T_)),e(so,"namedQuery",(()=>E_)),e(so,"FieldPath",(()=>k_)),e(so,"documentId",(()=>A_)),e(so,"Bytes",(()=>C_)),e(so,"FieldValue",(()=>D_)),e(so,"GeoPoint",(()=>N_)),e(so,"SnapshotMetadata",(()=>ob)),e(so,"DocumentSnapshot",(()=>ab)),e(so,"QueryDocumentSnapshot",(()=>cb)),e(so,"QuerySnapshot",(()=>ub)),e(so,"snapshotEqual",(()=>hb)),e(so,"QueryConstraint",(()=>fb)),e(so,"query",(()=>pb)),e(so,"where",(()=>gb)),e(so,"orderBy",(()=>vb)),e(so,"limit",(()=>_b)),e(so,"limitToLast",(()=>bb)),e(so,"startAt",(()=>Tb)),e(so,"startAfter",(()=>Eb)),e(so,"endBefore",(()=>kb)),e(so,"endAt",(()=>Ab)),e(so,"AbstractUserDataWriter",(()=>Rb)),e(so,"WriteBatch",(()=>Mb)),e(so,"getDoc",(()=>Fb)),e(so,"getDocFromCache",(()=>qb)),e(so,"getDocFromServer",(()=>Bb)),e(so,"getDocs",(()=>jb)),e(so,"getDocsFromCache",(()=>$b)),e(so,"getDocsFromServer",(()=>Gb)),e(so,"setDoc",(()=>Hb)),e(so,"executeWrite",(()=>Xb)),e(so,"updateDoc",(()=>zb)),e(so,"deleteDoc",(()=>Kb)),e(so,"addDoc",(()=>Wb)),e(so,"onSnapshot",(()=>Qb)),e(so,"onSnapshotsInSync",(()=>Yb)),e(so,"Transaction",(()=>Zb)),e(so,"runTransaction",(()=>eI)),e(so,"deleteField",(()=>tI)),e(so,"serverTimestamp",(()=>nI)),e(so,"arrayUnion",(()=>iI)),e(so,"arrayRemove",(()=>sI)),e(so,"increment",(()=>rI)),e(so,"writeBatch",(()=>oI)),e(so,"setIndexConfiguration",(()=>aI));var ro,oo="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n?n:"undefined"!=typeof self?self:{},ao={},co=co||{},uo=oo||self;function lo(){}function ho(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function fo(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var po="closure_uid_"+(1e9*Math.random()>>>0),mo=0;function go(e,t,n){return e.call.apply(e.bind,arguments)}function yo(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function vo(e,t,n){return(vo=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?go:yo).apply(null,arguments)}function wo(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function _o(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return t.prototype[n].apply(e,s)}}function bo(){this.s=this.s,this.o=this.o}var Io={};bo.prototype.s=!1,bo.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var e=function(e){return Object.prototype.hasOwnProperty.call(e,po)&&e[po]||(e[po]=++mo)}(this);delete Io[e]}},bo.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const To=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Eo(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function So(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(ho(n)){const t=e.length||0,i=n.length||0;e.length=t+i;for(let s=0;s<i;s++)e[t+s]=n[s]}else e.push(n)}}function ko(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}ko.prototype.h=function(){this.defaultPrevented=!0};var Ao=function(){if(!uo.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{uo.addEventListener("test",lo,t),uo.removeEventListener("test",lo,t)}catch(e){}return e}();function Co(e){return/^[\s\xa0]*$/.test(e)}var Do=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function No(e,t){return e<t?-1:e>t?1:0}function xo(){var e=uo.navigator;return e&&(e=e.userAgent)?e:""}function Oo(e){return-1!=xo().indexOf(e)}function Ro(e){return Ro[" "](e),e}Ro[" "]=lo;var Lo,Po,Mo=Oo("Opera"),Uo=Oo("Trident")||Oo("MSIE"),Fo=Oo("Edge"),Vo=Fo||Uo,qo=Oo("Gecko")&&!(-1!=xo().toLowerCase().indexOf("webkit")&&!Oo("Edge"))&&!(Oo("Trident")||Oo("MSIE"))&&!Oo("Edge"),Bo=-1!=xo().toLowerCase().indexOf("webkit")&&!Oo("Edge");function jo(){var e=uo.document;return e?e.documentMode:void 0}e:{var $o="",Go=(Po=xo(),qo?/rv:([^\);]+)(\)|;)/.exec(Po):Fo?/Edge\/([\d\.]+)/.exec(Po):Uo?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Po):Bo?/WebKit\/(\S+)/.exec(Po):Mo?/(?:Version)[ \/]?(\S+)/.exec(Po):void 0);if(Go&&($o=Go?Go[1]:""),Uo){var Ho=jo();if(null!=Ho&&Ho>parseFloat($o)){Lo=String(Ho);break e}}Lo=$o}var zo,Ko={};function Wo(){return function(e){var t=Ko;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=Do(String(Lo)).split("."),n=Do("9").split("."),i=Math.max(t.length,n.length);for(let o=0;0==e&&o<i;o++){var s=t[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==s[0].length&&0==r[0].length)break;e=No(0==s[1].length?0:parseInt(s[1],10),0==r[1].length?0:parseInt(r[1],10))||No(0==s[2].length,0==r[2].length)||No(s[2],r[2]),s=s[3],r=r[3]}while(0==e)}return 0<=e}))}if(uo.document&&Uo){var Qo=jo();zo=Qo||(parseInt(Lo,10)||void 0)}else zo=void 0;var Yo=zo;function Xo(e,t){if(ko.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(qo){e:{try{Ro(t.nodeName);var s=!0;break e}catch(e){}s=!1}s||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Jo[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Xo.X.h.call(this)}}_o(Xo,ko);var Jo={2:"touch",3:"pen",4:"mouse"};Xo.prototype.h=function(){Xo.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Zo="closure_listenable_"+(1e6*Math.random()|0),ea=0;function ta(e,t,n,i,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.ha=s,this.key=++ea,this.ba=this.ea=!1}function na(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function ia(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function sa(e){const t={};for(const n in e)t[n]=e[n];return t}const ra="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function oa(e,t){let n,i;for(let t=1;t<arguments.length;t++){for(n in i=arguments[t],i)e[n]=i[n];for(let t=0;t<ra.length;t++)n=ra[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function aa(e){this.src=e,this.g={},this.h=0}function ca(e,t){var n=t.type;if(n in e.g){var i,s=e.g[n],r=To(s,t);(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(na(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ua(e,t,n,i){for(var s=0;s<e.length;++s){var r=e[s];if(!r.ba&&r.listener==t&&r.capture==!!n&&r.ha==i)return s}return-1}aa.prototype.add=function(e,t,n,i,s){var r=e.toString();(e=this.g[r])||(e=this.g[r]=[],this.h++);var o=ua(e,t,i,s);return-1<o?(t=e[o],n||(t.ea=!1)):((t=new ta(t,this.src,r,!!i,s)).ea=n,e.push(t)),t};var la="closure_lm_"+(1e6*Math.random()|0),ha={};function da(e,t,n,i,s){if(i&&i.once)return pa(e,t,n,i,s);if(Array.isArray(t)){for(var r=0;r<t.length;r++)da(e,t[r],n,i,s);return null}return n=ba(n),e&&e[Zo]?e.N(t,n,fo(i)?!!i.capture:!!i,s):fa(e,t,n,!1,i,s)}function fa(e,t,n,i,s,r){if(!t)throw Error("Invalid event type");var o=fo(s)?!!s.capture:!!s,a=wa(e);if(a||(e[la]=a=new aa(e)),(n=a.add(t,n,i,o,r)).proxy)return n;if(i=function(){function e(n){return t.call(e.src,e.listener,n)}const t=va;return e}(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)Ao||(s=o),void 0===s&&(s=!1),e.addEventListener(t.toString(),i,s);else if(e.attachEvent)e.attachEvent(ya(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function pa(e,t,n,i,s){if(Array.isArray(t)){for(var r=0;r<t.length;r++)pa(e,t[r],n,i,s);return null}return n=ba(n),e&&e[Zo]?e.O(t,n,fo(i)?!!i.capture:!!i,s):fa(e,t,n,!0,i,s)}function ma(e,t,n,i,s){if(Array.isArray(t))for(var r=0;r<t.length;r++)ma(e,t[r],n,i,s);else i=fo(i)?!!i.capture:!!i,n=ba(n),e&&e[Zo]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=ua(r=e.g[t],n,i,s))&&(na(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete e.g[t],e.h--)))):e&&(e=wa(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ua(t,n,i,s)),(n=-1<e?t[e]:null)&&ga(n))}function ga(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[Zo])ca(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(ya(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=wa(t))?(ca(n,e),0==n.h&&(n.src=null,t[la]=null)):na(e)}}}function ya(e){return e in ha?ha[e]:ha[e]="on"+e}function va(e,t){if(e.ba)e=!0;else{t=new Xo(t,this);var n=e.listener,i=e.ha||e.src;e.ea&&ga(e),e=n.call(i,t)}return e}function wa(e){return(e=e[la])instanceof aa?e:null}var _a="__closure_events_fn_"+(1e9*Math.random()>>>0);function ba(e){return"function"==typeof e?e:(e[_a]||(e[_a]=function(t){return e.handleEvent(t)}),e[_a])}function Ia(){bo.call(this),this.i=new aa(this),this.P=this,this.I=null}function Ta(e,t){var n,i=e.I;if(i)for(n=[];i;i=i.I)n.push(i);if(e=e.P,i=t.type||t,"string"==typeof t)t=new ko(t,e);else if(t instanceof ko)t.target=t.target||e;else{var s=t;oa(t=new ko(i,e),s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];s=Ea(o,i,!0,t)&&s}if(s=Ea(o=t.g=e,i,!0,t)&&s,s=Ea(o,i,!1,t)&&s,n)for(r=0;r<n.length;r++)s=Ea(o=t.g=n[r],i,!1,t)&&s}function Ea(e,t,n,i){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var s=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&ca(e.i,o),s=!1!==a.call(c,i)&&s}}return s&&!i.defaultPrevented}_o(Ia,bo),Ia.prototype[Zo]=!0,Ia.prototype.removeEventListener=function(e,t,n,i){ma(this,e,t,n,i)},Ia.prototype.M=function(){if(Ia.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)na(n[i]);delete t.g[e],t.h--}}this.I=null},Ia.prototype.N=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},Ia.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};var Sa=uo.JSON.stringify;function ka(){var e=Ra;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Aa,Ca=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Da),(e=>e.reset()));class Da{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Na(e){uo.setTimeout((()=>{throw e}),0)}function xa(e,t){Aa||function(){var e=uo.Promise.resolve(void 0);Aa=function(){e.then(La)}}(),Oa||(Aa(),Oa=!0),Ra.add(e,t)}var Oa=!1,Ra=new class{constructor(){this.h=this.g=null}add(e,t){const n=Ca.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function La(){for(var e;e=ka();){try{e.h.call(e.g)}catch(e){Na(e)}var t=Ca;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Oa=!1}function Pa(e,t){Ia.call(this),this.h=e||1,this.g=t||uo,this.j=vo(this.kb,this),this.l=Date.now()}function Ma(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function Ua(e,t,n){if("function"==typeof e)n&&(e=vo(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=vo(e.handleEvent,e)}return 2147483647<Number(t)?-1:uo.setTimeout(e,t||0)}function Fa(e){e.g=Ua((()=>{e.g=null,e.i&&(e.i=!1,Fa(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}_o(Pa,Ia),(ro=Pa.prototype).ca=!1,ro.R=null,ro.kb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ta(this,"tick"),this.ca&&(Ma(this),this.start()))}},ro.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},ro.M=function(){Pa.X.M.call(this),Ma(this),delete this.g};class Va extends bo{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Fa(this)}M(){super.M(),this.g&&(uo.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qa(e){bo.call(this),this.h=e,this.g={}}_o(qa,bo);var Ba=[];function ja(e,t,n,i){Array.isArray(n)||(n&&(Ba[0]=n.toString()),n=Ba);for(var s=0;s<n.length;s++){var r=da(t,n[s],i||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function $a(e){ia(e.g,(function(e,t){this.g.hasOwnProperty(t)&&ga(e)}),e),e.g={}}function Ga(){this.g=!0}function Ha(e,t,n,i){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return Sa(n)}catch(e){return t}}(e,n)+(i?" "+i:"")}))}qa.prototype.M=function(){qa.X.M.call(this),$a(this)},qa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ga.prototype.Aa=function(){this.g=!1},Ga.prototype.info=function(){};var za={},Ka=null;function Wa(){return Ka=Ka||new Ia}function Qa(e){ko.call(this,za.Oa,e)}function Ya(e){const t=Wa();Ta(t,new Qa(t,e))}function Xa(e,t){ko.call(this,za.STAT_EVENT,e),this.stat=t}function Ja(e){const t=Wa();Ta(t,new Xa(t,e))}function Za(e,t){ko.call(this,za.Pa,e),this.size=t}function ec(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return uo.setTimeout((function(){e()}),t)}za.Oa="serverreachability",_o(Qa,ko),za.STAT_EVENT="statevent",_o(Xa,ko),za.Pa="timingevent",_o(Za,ko);var tc={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,La:7,TIMEOUT:8,Cb:9},nc={qb:"complete",Mb:"success",Ma:"error",La:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ic(){}function sc(e){return e.h||(e.h=e.i())}function rc(){}ic.prototype.h=null;var oc,ac={OPEN:"a",pb:"b",Ma:"c",Bb:"d"};function cc(){ko.call(this,"d")}function uc(){ko.call(this,"c")}function lc(){}function hc(e,t,n,i){this.l=e,this.j=t,this.m=n,this.U=i||1,this.S=new qa(this),this.O=fc,e=Vo?125:void 0,this.T=new Pa(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new dc}function dc(){this.i=null,this.g="",this.h=!1}_o(cc,ko),_o(uc,ko),_o(lc,ic),lc.prototype.g=function(){return new XMLHttpRequest},lc.prototype.i=function(){return{}},oc=new lc;var fc=45e3,pc={},mc={};function gc(e,t,n){e.K=1,e.v=Pc(Nc(t)),e.s=n,e.P=!0,yc(e,null)}function yc(e,t){e.F=Date.now(),bc(e),e.A=Nc(e.v);var n=e.A,i=e.U;Array.isArray(i)||(i=[String(i)]),Wc(n.i,"t",i),e.C=0,n=e.l.H,e.h=new dc,e.g=Ku(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Va(vo(e.Ka,e,e.g),e.N)),ja(e.S,e.g,"readystatechange",e.hb),t=e.H?sa(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),Ya(1),function(e,t,n,i,s,r){e.info((function(){if(e.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.U,e.s)}function vc(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function wc(e,t,n){let i,s=!0;for(;!e.I&&e.C<n.length;){if(i=_c(e,n),i==mc){4==t&&(e.o=4,Ja(14),s=!1),Ha(e.j,e.m,null,"[Incomplete Response]");break}if(i==pc){e.o=4,Ja(15),Ha(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}Ha(e.j,e.m,i,null),kc(e,i)}vc(e)&&i!=mc&&i!=pc&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Ja(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Vu(t),t.K=!0,Ja(11))):(Ha(e.j,e.m,n,"[Invalid Chunked Response]"),Sc(e),Ec(e))}function _c(e,t){var n=e.C,i=t.indexOf("\n",n);return-1==i?mc:(n=Number(t.substring(n,i)),isNaN(n)?pc:(i+=1)+n>t.length?mc:(t=t.substr(i,n),e.C=i+n,t))}function bc(e){e.V=Date.now()+e.O,Ic(e,e.O)}function Ic(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ec(vo(e.fb,e),t)}function Tc(e){e.B&&(uo.clearTimeout(e.B),e.B=null)}function Ec(e){0==e.l.G||e.I||ju(e.l,e)}function Sc(e){Tc(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Ma(e.T),$a(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function kc(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||eu(n.h,e)))if(!e.J&&eu(n.h,e)&&3==n.G){try{var i=n.Fa.g.parse(t)}catch(e){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Bu(n),xu(n)}Fu(n),Ja(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&0==n.A&&!n.v&&(n.v=ec(vo(n.bb,n),6e3));if(1>=Zc(n.h)&&n.ja){try{n.ja()}catch(e){}n.ja=void 0}}else Gu(n,11)}else if((e.J||n.g==e)&&Bu(n),!Co(t))for(s=n.Fa.g.parse(t),t=0;t<s.length;t++){let u=s[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const t=u[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const s=u[4];null!=s&&(n.Ca=s,n.j.info("SVER="+n.Ca));const l=u[5];null!=l&&"number"==typeof l&&0<l&&(i=1.5*l,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var r=i.h;r.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(tu(r,r.h),r.h=null))}if(i.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.za=e,Lc(i.F,i.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=e;if((i=n).sa=zu(i,i.H?i.ka:null,i.V),o.J){nu(i.h,o);var a=o,c=i.J;c&&a.setTimeout(c),a.B&&(Tc(a),bc(a)),i.g=o}else Uu(i);0<n.i.length&&Ru(n)}else"stop"!=u[0]&&"close"!=u[0]||Gu(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Gu(n,7):Nu(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}Ya(4)}catch(e){}}function Ac(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(ho(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(ho(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const i in e)t[n++]=i;return t}}}(e),i=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(ho(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}(e),s=i.length,r=0;r<s;r++)t.call(void 0,i[r],n&&n[r],e)}(ro=hc.prototype).setTimeout=function(e){this.O=e},ro.hb=function(e){e=e.target;const t=this.L;t&&3==Eu(e)?t.l():this.Ka(e)},ro.Ka=function(e){try{if(e==this.g)e:{const l=Eu(this.g);var t=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(3!=l||Vo||this.g&&(this.h.h||this.g.fa()||Su(this.g)))){this.I||4!=l||7==t||Ya(8==t||0>=h?3:2),Tc(this);var n=this.g.aa();this.Y=n;t:if(vc(this)){var i=Su(this.g);e="";var s=i.length,r=4==Eu(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Sc(this),Ec(this);var o="";break t}this.h.i=new uo.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:r&&t==s-1});i.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(e,t,n,i,s,r,o){e.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+t+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Co(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,Ja(12),Sc(this),Ec(this);break e}Ha(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,kc(this,n)}this.P?(wc(this,l,o),Vo&&this.i&&3==l&&(ja(this.S,this.T,"tick",this.gb),this.T.start())):(Ha(this.j,this.m,o,null),kc(this,o)),4==l&&Sc(this),this.i&&!this.I&&(4==l?ju(this.l,this):(this.i=!1,bc(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Ja(12)):(this.o=0,Ja(13)),Sc(this),Ec(this)}}}catch(e){}},ro.gb=function(){if(this.g){var e=Eu(this.g),t=this.g.fa();this.C<t.length&&(Tc(this),wc(this,e,t),this.i&&4!=e&&bc(this))}},ro.cancel=function(){this.I=!0,Sc(this)},ro.fb=function(){this.B=null;const e=Date.now();0<=e-this.V?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(Ya(3),Ja(17)),Sc(this),this.o=2,Ec(this)):Ic(this,this.V-e)};var Cc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Dc(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Dc){this.h=void 0!==t?t:e.h,xc(this,e.j),this.s=e.s,this.g=e.g,Oc(this,e.m),this.l=e.l,t=e.i;var n=new Gc;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Rc(this,n),this.o=e.o}else e&&(n=String(e).match(Cc))?(this.h=!!t,xc(this,n[1]||"",!0),this.s=Mc(n[2]||""),this.g=Mc(n[3]||"",!0),Oc(this,n[4]),this.l=Mc(n[5]||"",!0),Rc(this,n[6]||"",!0),this.o=Mc(n[7]||"")):(this.h=!!t,this.i=new Gc(null,this.h))}function Nc(e){return new Dc(e)}function xc(e,t,n){e.j=n?Mc(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Oc(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Rc(e,t,n){t instanceof Gc?(e.i=t,function(e,t){t&&!e.j&&(Hc(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(zc(this,t),Wc(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=Uc(t,jc)),e.i=new Gc(t,e.h))}function Lc(e,t,n){e.i.set(t,n)}function Pc(e){return Lc(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Mc(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Uc(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Fc),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Fc(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Dc.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Uc(t,Vc,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Uc(t,Vc,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Uc(n,"/"==n.charAt(0)?Bc:qc,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Uc(n,$c)),e.join("")};var Vc=/[#\/\?@]/g,qc=/[#\?:]/g,Bc=/[#\?]/g,jc=/[#\?@]/g,$c=/#/g;function Gc(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Hc(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),s=null;if(0<=i){var r=e[n].substring(0,i);s=e[n].substring(i+1)}else r=e[n];t(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function zc(e,t){Hc(e),t=Qc(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Kc(e,t){return Hc(e),t=Qc(e,t),e.g.has(t)}function Wc(e,t,n){zc(e,t),0<n.length&&(e.i=null,e.g.set(Qc(e,t),Eo(n)),e.h+=n.length)}function Qc(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(ro=Gc.prototype).add=function(e,t){Hc(this),this.i=null,e=Qc(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},ro.forEach=function(e,t){Hc(this),this.g.forEach((function(n,i){n.forEach((function(n){e.call(t,n,i,this)}),this)}),this)},ro.oa=function(){Hc(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){const s=e[i];for(let e=0;e<s.length;e++)n.push(t[i])}return n},ro.W=function(e){Hc(this);let t=[];if("string"==typeof e)Kc(this,e)&&(t=t.concat(this.g.get(Qc(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},ro.set=function(e,t){return Hc(this),this.i=null,Kc(this,e=Qc(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},ro.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},ro.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];const r=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var s=r;""!==o[i]&&(s+="="+encodeURIComponent(String(o[i]))),e.push(s)}}return this.i=e.join("&")};function Yc(e){this.l=e||Xc,uo.PerformanceNavigationTiming?e=0<(e=uo.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(uo.g&&uo.g.Ga&&uo.g.Ga()&&uo.g.Ga().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Xc=10;function Jc(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Zc(e){return e.h?1:e.g?e.g.size:0}function eu(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function tu(e,t){e.g?e.g.add(t):e.h=t}function nu(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function iu(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Eo(e.i)}function su(){}function ru(){this.g=new su}function ou(e,t,n){const i=n||"";try{Ac(e,(function(e,n){let s=e;fo(e)&&(s=Sa(e)),t.push(i+n+"="+encodeURIComponent(s))}))}catch(e){throw t.push(i+"type="+encodeURIComponent("_badmap")),e}}function au(e,t,n,i,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(i)}catch(e){}}function cu(e){this.l=e.$b||null,this.j=e.ib||!1}function uu(e,t){Ia.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=lu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Yc.prototype.cancel=function(){if(this.i=iu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},su.prototype.stringify=function(e){return uo.JSON.stringify(e,void 0)},su.prototype.parse=function(e){return uo.JSON.parse(e,void 0)},_o(cu,ic),cu.prototype.g=function(){return new uu(this.l,this.j)},cu.prototype.i=function(e){return function(){return e}}({}),_o(uu,Ia);var lu=0;function hu(e){e.j.read().then(e.Sa.bind(e)).catch(e.ga.bind(e))}function du(e){e.readyState=4,e.l=null,e.j=null,e.A=null,fu(e)}function fu(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(ro=uu.prototype).open=function(e,t){if(this.readyState!=lu)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,fu(this)},ro.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||uo).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ga.bind(this))},ro.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,du(this)),this.readyState=lu},ro.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,fu(this)),this.g&&(this.readyState=3,fu(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ga.bind(this));else if(void 0!==uo.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;hu(this)}else e.text().then(this.Ua.bind(this),this.ga.bind(this))},ro.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?du(this):fu(this),3==this.readyState&&hu(this)}},ro.Ua=function(e){this.g&&(this.response=this.responseText=e,du(this))},ro.Ta=function(e){this.g&&(this.response=e,du(this))},ro.ga=function(){this.g&&du(this)},ro.setRequestHeader=function(e,t){this.v.append(e,t)},ro.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},ro.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(uu.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var pu=uo.JSON.parse;function mu(e){Ia.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=gu,this.K=this.L=!1}_o(mu,Ia);var gu="",yu=/^https?$/i,vu=["POST","PUT"];function wu(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,_u(e),Iu(e)}function _u(e){e.D||(e.D=!0,Ta(e,"complete"),Ta(e,"error"))}function bu(e){if(e.h&&void 0!==co&&(!e.C[1]||4!=Eu(e)||2!=e.aa()))if(e.v&&4==Eu(e))Ua(e.Ha,0,e);else if(Ta(e,"readystatechange"),4==Eu(e)){e.h=!1;try{const a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=0===a){var s=String(e.H).match(Cc)[1]||null;if(!s&&uo.self&&uo.self.location){var r=uo.self.location.protocol;s=r.substr(0,r.length-1)}i=!yu.test(s?s.toLowerCase():"")}n=i}if(n)Ta(e,"complete"),Ta(e,"success");else{e.m=6;try{var o=2<Eu(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.aa()+"]",_u(e)}}finally{Iu(e)}}}function Iu(e,t){if(e.g){Tu(e);const n=e.g,i=e.C[0]?lo:null;e.g=null,e.C=null,t||Ta(e,"ready");try{n.onreadystatechange=i}catch(e){}}}function Tu(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(uo.clearTimeout(e.A),e.A=null)}function Eu(e){return e.g?e.g.readyState:0}function Su(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case gu:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function ku(e){let t="";return ia(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Au(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=ku(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Lc(e,t,n))}function Cu(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Du(e){this.Ca=0,this.i=[],this.j=new Ga,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.$a=this.U=0,this.Ya=Cu("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Wa=Cu("baseRetryDelayMs",5e3,e),this.ab=Cu("retryDelaySeedMs",1e4,e),this.Za=Cu("forwardChannelMaxRetries",2,e),this.ta=Cu("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Yb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Yc(e&&e.concurrentRequestLimit),this.Fa=new ru,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Xa=e&&e.Wb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Nu(e){if(Ou(e),3==e.G){var t=e.U++,n=Nc(e.F);Lc(n,"SID",e.I),Lc(n,"RID",t),Lc(n,"TYPE","terminate"),Pu(e,n),(t=new hc(e,e.j,t,void 0)).K=2,t.v=Pc(Nc(n)),n=!1,uo.navigator&&uo.navigator.sendBeacon&&(n=uo.navigator.sendBeacon(t.v.toString(),"")),!n&&uo.Image&&((new Image).src=t.v,n=!0),n||(t.g=Ku(t.l,null),t.g.da(t.v)),t.F=Date.now(),bc(t)}Hu(e)}function xu(e){e.g&&(Vu(e),e.g.cancel(),e.g=null)}function Ou(e){xu(e),e.u&&(uo.clearTimeout(e.u),e.u=null),Bu(e),e.h.cancel(),e.m&&("number"==typeof e.m&&uo.clearTimeout(e.m),e.m=null)}function Ru(e){Jc(e.h)||e.m||(e.m=!0,xa(e.Ja,e),e.C=0)}function Lu(e,t){var n;n=t?t.m:e.U++;const i=Nc(e.F);Lc(i,"SID",e.I),Lc(i,"RID",n),Lc(i,"AID",e.T),Pu(e,i),e.o&&e.s&&Au(i,e.o,e.s),n=new hc(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Mu(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),tu(e.h,n),gc(n,i,t)}function Pu(e,t){e.ia&&ia(e.ia,(function(e,n){Lc(t,n,e)})),e.l&&Ac({},(function(e,n){Lc(t,n,e)}))}function Mu(e,t,n){n=Math.min(e.i.length,n);var i=e.l?vo(e.l.Qa,e.l,e):null;e:{var s=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=s[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let r=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=t,0>n)t=Math.max(0,s[o].h-100),r=!1;else try{ou(a,e,"req"+n+"_")}catch(e){i&&i(a)}}if(r){i=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,i}function Uu(e){e.g||e.u||(e.Z=1,xa(e.Ia,e),e.A=0)}function Fu(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=ec(vo(e.Ia,e),$u(e,e.A)),e.A++,!0)}function Vu(e){null!=e.B&&(uo.clearTimeout(e.B),e.B=null)}function qu(e){e.g=new hc(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=Nc(e.sa);Lc(t,"RID","rpc"),Lc(t,"SID",e.I),Lc(t,"CI",e.L?"0":"1"),Lc(t,"AID",e.T),Lc(t,"TYPE","xmlhttp"),Pu(e,t),e.o&&e.s&&Au(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Pc(Nc(t)),n.s=null,n.P=!0,yc(n,e)}function Bu(e){null!=e.v&&(uo.clearTimeout(e.v),e.v=null)}function ju(e,t){var n=null;if(e.g==t){Bu(e),Vu(e),e.g=null;var i=2}else{if(!eu(e.h,t))return;n=t.D,nu(e.h,t),i=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==i){n=t.s?t.s.length:0,t=Date.now()-t.F;var s=e.C;Ta(i=Wa(),new Za(i,n,t,s)),Ru(e)}else Uu(e);else if(3==(s=t.o)||0==s&&0<e.pa||!(1==i&&function(e,t){return!(Zc(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.C>=(e.Ya?0:e.Za)||(e.m=ec(vo(e.Ja,e,t),$u(e,e.C)),e.C++,0)))}(e,t)||2==i&&Fu(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),s){case 1:Gu(e,5);break;case 4:Gu(e,10);break;case 3:Gu(e,6);break;default:Gu(e,2)}}function $u(e,t){let n=e.Wa+Math.floor(Math.random()*e.ab);return e.l||(n*=2),n*t}function Gu(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var i=vo(e.jb,e);n||(n=new Dc("//www.google.com/images/cleardot.gif"),uo.location&&"http"==uo.location.protocol||xc(n,"https"),Pc(n)),function(e,t){const n=new Ga;if(uo.Image){const i=new Image;i.onload=wo(au,n,i,"TestLoadImage: loaded",!0,t),i.onerror=wo(au,n,i,"TestLoadImage: error",!1,t),i.onabort=wo(au,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=wo(au,n,i,"TestLoadImage: timeout",!1,t),uo.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=e}else t(!1)}(n.toString(),i)}else Ja(2);e.G=0,e.l&&e.l.va(t),Hu(e),Ou(e)}function Hu(e){if(e.G=0,e.la=[],e.l){const t=iu(e.h);0==t.length&&0==e.i.length||(So(e.la,t),So(e.la,e.i),e.h.i.length=0,Eo(e.i),e.i.length=0),e.l.ua()}}function zu(e,t,n){var i=n instanceof Dc?Nc(n):new Dc(n,void 0);if(""!=i.g)t&&(i.g=t+"."+i.g),Oc(i,i.m);else{var s=uo.location;i=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var r=new Dc(null,void 0);i&&xc(r,i),t&&(r.g=t),s&&Oc(r,s),n&&(r.l=n),i=r}return n=e.D,t=e.za,n&&t&&Lc(i,n,t),Lc(i,"VER",e.ma),Pu(e,i),i}function Ku(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Da&&!e.ra?new mu(new cu({ib:!0})):new mu(e.ra)).L=e.H,t}function Wu(){}function Qu(){if(Uo&&!(10<=Number(Yo)))throw Error("Environmental error: no available transport.")}function Yu(e,t){Ia.call(this),this.g=new Du(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Xb)&&!Co(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Co(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Zu(this)}function Xu(e){cc.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Ju(){uc.call(this),this.status=1}function Zu(e){this.g=e}(ro=mu.prototype).da=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():oc.g(),this.C=this.u?sc(this.u):sc(oc),this.g.onreadystatechange=vo(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void wu(this,e)}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const e of i.keys())n.set(e,i.get(e))}i=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),s=uo.FormData&&e instanceof uo.FormData,!(0<=To(vu,t))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Tu(this),0<this.B&&((this.K=function(e){return Uo&&Wo()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=vo(this.qa,this)):this.A=Ua(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){wu(this,e)}},ro.qa=function(){void 0!==co&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ta(this,"timeout"),this.abort(8))},ro.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ta(this,"complete"),Ta(this,"abort"),Iu(this))},ro.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Iu(this,!0)),mu.X.M.call(this)},ro.Ha=function(){this.s||(this.F||this.v||this.l?bu(this):this.eb())},ro.eb=function(){bu(this)},ro.aa=function(){try{return 2<Eu(this)?this.g.status:-1}catch(e){return-1}},ro.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},ro.Ra=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),pu(t)}},ro.Ea=function(){return this.m},ro.Na=function(){return"string"==typeof this.j?this.j:String(this.j)},(ro=Du.prototype).ma=8,ro.G=1,ro.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const s=new hc(this,this.j,e,void 0);let r=this.s;if(this.S&&(r?(r=sa(r),oa(r,this.S)):r=this.S),null!==this.o||this.N||(s.H=r,r=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var i=this.i[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(t+=i)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Mu(this,s,t),Lc(n=Nc(this.F),"RID",e),Lc(n,"CVER",22),this.D&&Lc(n,"X-HTTP-Session-Id",this.D),Pu(this,n),r&&(this.N?t="headers="+encodeURIComponent(String(ku(r)))+"&"+t:this.o&&Au(n,this.o,r)),tu(this.h,s),this.Xa&&Lc(n,"TYPE","init"),this.O?(Lc(n,"$req",t),Lc(n,"SID","null"),s.Z=!0,gc(s,n,null)):gc(s,n,t),this.G=2}}else 3==this.G&&(e?Lu(this,e):0==this.i.length||Jc(this.h)||Lu(this))},ro.Ia=function(){if(this.u=null,qu(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=ec(vo(this.cb,this),e)}},ro.cb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ja(10),xu(this),qu(this))},ro.bb=function(){null!=this.v&&(this.v=null,xu(this),Fu(this),Ja(19))},ro.jb=function(e){e?(this.j.info("Successfully pinged google.com"),Ja(2)):(this.j.info("Failed to ping google.com"),Ja(1))},(ro=Wu.prototype).xa=function(){},ro.wa=function(){},ro.va=function(){},ro.ua=function(){},ro.Qa=function(){},Qu.prototype.g=function(e,t){return new Yu(e,t)},_o(Yu,Ia),Yu.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;Ja(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=zu(e,null,e.V),Ru(e)},Yu.prototype.close=function(){Nu(this.g)},Yu.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=Sa(e),e=n);t.i.push(new class{constructor(e,t){this.h=e,this.g=t}}(t.$a++,e)),3==t.G&&Ru(t)},Yu.prototype.M=function(){this.g.l=null,delete this.j,Nu(this.g),delete this.g,Yu.X.M.call(this)},_o(Xu,cc),_o(Ju,uc),_o(Zu,Wu),Zu.prototype.xa=function(){Ta(this.g,"a")},Zu.prototype.wa=function(e){Ta(this.g,new Xu(e))},Zu.prototype.va=function(e){Ta(this.g,new Ju(e))},Zu.prototype.ua=function(){Ta(this.g,"b")},Qu.prototype.createWebChannel=Qu.prototype.g,Yu.prototype.send=Yu.prototype.u,Yu.prototype.open=Yu.prototype.m,Yu.prototype.close=Yu.prototype.close,tc.NO_ERROR=0,tc.TIMEOUT=8,tc.HTTP_ERROR=6,nc.COMPLETE="complete",rc.EventType=ac,ac.OPEN="a",ac.CLOSE="b",ac.ERROR="c",ac.MESSAGE="d",Ia.prototype.listen=Ia.prototype.N,mu.prototype.listenOnce=mu.prototype.O,mu.prototype.getLastError=mu.prototype.Na,mu.prototype.getLastErrorCode=mu.prototype.Ea,mu.prototype.getStatus=mu.prototype.aa,mu.prototype.getResponseJson=mu.prototype.Ra,mu.prototype.getResponseText=mu.prototype.fa,mu.prototype.send=mu.prototype.da;var el,tl,nl,il=ao.createWebChannelTransport=function(){return new Qu},sl=ao.getStatEventTarget=function(){return Wa()},rl=ao.ErrorCode=tc,ol=ao.EventType=nc,al=ao.Event=za,cl=ao.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},ul=ao.FetchXmlHttpFactory=cu,ll=ao.WebChannel=rc,hl=ao.XhrIo=mu,dl=el={};function fl(){throw new Error("setTimeout has not been defined")}function pl(){throw new Error("clearTimeout has not been defined")}function ml(e){if(tl===setTimeout)return setTimeout(e,0);if((tl===fl||!tl)&&setTimeout)return tl=setTimeout,setTimeout(e,0);try{return tl(e,0)}catch(t){try{return tl.call(null,e,0)}catch(t){return tl.call(this,e,0)}}}!function(){try{tl="function"==typeof setTimeout?setTimeout:fl}catch(e){tl=fl}try{nl="function"==typeof clearTimeout?clearTimeout:pl}catch(e){nl=pl}}();var gl,yl=[],vl=!1,wl=-1;function _l(){vl&&gl&&(vl=!1,gl.length?yl=gl.concat(yl):wl=-1,yl.length&&bl())}function bl(){if(!vl){var e=ml(_l);vl=!0;for(var t=yl.length;t;){for(gl=yl,yl=[];++wl<t;)gl&&gl[wl].run();wl=-1,t=yl.length}gl=null,vl=!1,function(e){if(nl===clearTimeout)return clearTimeout(e);if((nl===pl||!nl)&&clearTimeout)return nl=clearTimeout,clearTimeout(e);try{nl(e)}catch(t){try{return nl.call(null,e)}catch(t){return nl.call(this,e)}}}(e)}}function Il(e,t){this.fun=e,this.array=t}function Tl(){}dl.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];yl.push(new Il(e,t)),1!==yl.length||vl||ml(bl)},Il.prototype.run=function(){this.fun.apply(null,this.array)},dl.title="browser",dl.browser=!0,dl.env={},dl.argv=[],dl.version="",dl.versions={},dl.on=Tl,dl.addListener=Tl,dl.once=Tl,dl.off=Tl,dl.removeListener=Tl,dl.removeAllListeners=Tl,dl.emit=Tl,dl.prependListener=Tl,dl.prependOnceListener=Tl,dl.listeners=function(e){return[]},dl.binding=function(e){throw new Error("process.binding is not supported")},dl.cwd=function(){return"/"},dl.chdir=function(e){throw new Error("process.chdir is not supported")},dl.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class El{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}El.UNAUTHENTICATED=new El(null),El.GOOGLE_CREDENTIALS=new El("google-credentials-uid"),El.FIRST_PARTY=new El("first-party-uid"),El.MOCK_USER=new El("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Sl="9.10.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl=new Ci("@firebase/firestore");function Al(){return kl.logLevel}function Cl(e){kl.setLogLevel(e)}function Dl(e,...t){if(kl.logLevel<=Ii.DEBUG){const n=t.map(Ol);kl.debug(`Firestore (${Sl}): ${e}`,...n)}}function Nl(e,...t){if(kl.logLevel<=Ii.ERROR){const n=t.map(Ol);kl.error(`Firestore (${Sl}): ${e}`,...n)}}function xl(e,...t){if(kl.logLevel<=Ii.WARN){const n=t.map(Ol);kl.warn(`Firestore (${Sl}): ${e}`,...n)}}function Ol(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(e="Unexpected state"){const t=`FIRESTORE (${Sl}) INTERNAL ASSERTION FAILED: `+e;throw Nl(t),new Error(t)}function Ll(e,t){e||Rl()}function Pl(e,t){e||Rl()}function Ml(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Fl extends ri{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Bl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(El.UNAUTHENTICATED)))}shutdown(){}}class jl{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class $l{constructor(e){this.t=e,this.currentUser=El.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let s=new Vl;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Vl,e.enqueueRetryable((()=>i(this.currentUser)))};const r=()=>{const t=s;e.enqueueRetryable((async()=>{await t.promise,await i(this.currentUser)}))},o=e=>{Dl("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Dl("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Vl)}}),0),r()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Dl("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Ll("string"==typeof t.accessToken),new ql(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ll(null===e||"string"==typeof e),new El(e)}}class Gl{constructor(e,t,n,i){this.h=e,this.l=t,this.m=n,this.g=i,this.type="FirstParty",this.user=El.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Ll(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Hl{constructor(e,t,n,i){this.h=e,this.l=t,this.m=n,this.g=i}getToken(){return Promise.resolve(new Gl(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable((()=>t(El.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class zl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Kl{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const n=e=>{null!=e.error&&Dl("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.A;return this.A=e.token,Dl("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const i=e=>{Dl("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit((e=>i(e))),setTimeout((()=>{if(!this.appCheck){const e=this.T.getImmediate({optional:!0});e?i(e):Dl("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Ll("string"==typeof e.token),this.A=e.token,new zl(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}class Wl{getToken(){return Promise.resolve(new zl(""))}invalidateToken(){}start(e,t){}shutdown(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=Ql(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%e.length))}return n}}function Xl(e,t){return e<t?-1:e>t?1:0}function Jl(e,t,n){return e.length===t.length&&e.every(((e,i)=>n(e,t[i])))}function Zl(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Fl(Ul.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Fl(Ul.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Fl(Ul.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Fl(Ul.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return eh.fromMillis(Date.now())}static fromDate(e){return eh.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new eh(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Xl(this.nanoseconds,e.nanoseconds):Xl(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e){this.timestamp=e}static fromTimestamp(e){return new th(e)}static min(){return new th(new eh(0,0))}static max(){return new th(new eh(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,t,n){void 0===t?t=0:t>e.length&&Rl(),void 0===n?n=e.length-t:n>e.length-t&&Rl(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===nh.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof nh?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const n=e.get(i),s=t.get(i);if(n<s)return-1;if(n>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ih extends nh{construct(e,t,n){return new ih(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Fl(Ul.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new ih(t)}static emptyPath(){return new ih([])}}const sh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rh extends nh{construct(e,t,n){return new rh(e,t,n)}static isValidIdentifier(e){return sh.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rh.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new rh(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const s=()=>{if(0===n.length)throw new Fl(Ul.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let r=!1;for(;i<e.length;){const t=e[i];if("\\"===t){if(i+1===e.length)throw new Fl(Ul.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Fl(Ul.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?(r=!r,i++):"."!==t||r?(n+=t,i++):(s(),i++)}if(s(),r)throw new Fl(Ul.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rh(t)}static emptyPath(){return new rh([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e){this.path=e}static fromPath(e){return new oh(ih.fromString(e))}static fromName(e){return new oh(ih.fromString(e).popFirst(5))}static empty(){return new oh(ih.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ih.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ih.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oh(new ih(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}function ch(e){return e.fields.find((e=>2===e.kind))}function uh(e){return e.fields.filter((e=>2!==e.kind))}function lh(e,t){let n=Xl(e.collectionGroup,t.collectionGroup);if(0!==n)return n;for(let i=0;i<Math.min(e.fields.length,t.fields.length);++i)if(n=dh(e.fields[i],t.fields[i]),0!==n)return n;return Xl(e.fields.length,t.fields.length)}ah.UNKNOWN_ID=-1;class hh{constructor(e,t){this.fieldPath=e,this.kind=t}}function dh(e,t){const n=rh.comparator(e.fieldPath,t.fieldPath);return 0!==n?n:Xl(e.kind,t.kind)}class fh{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new fh(0,gh.min())}}function ph(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,s=th.fromTimestamp(1e9===i?new eh(n+1,0):new eh(n,i));return new gh(s,oh.empty(),t)}function mh(e){return new gh(e.readTime,e.key,-1)}class gh{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new gh(th.min(),oh.empty(),-1)}static max(){return new gh(th.max(),oh.empty(),-1)}}function yh(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=oh.comparator(e.documentKey,t.documentKey),0!==n?n:Xl(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _h(e){if(e.code!==Ul.FAILED_PRECONDITION||e.message!==vh)throw e;Dl("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Rl(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new bh(((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof bh?t:bh.resolve(t)}catch(e){return bh.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):bh.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):bh.reject(t)}static resolve(e){return new bh(((t,n)=>{t(e)}))}static reject(e){return new bh(((t,n)=>{n(e)}))}static waitFor(e){return new bh(((t,n)=>{let i=0,s=0,r=!1;e.forEach((e=>{++i,e.next((()=>{++s,r&&s===i&&t()}),(e=>n(e)))})),r=!0,s===i&&t()}))}static or(e){let t=bh.resolve(!1);for(const n of e)t=t.next((e=>e?bh.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,i)=>{n.push(t.call(this,e,i))})),this.waitFor(n)}static mapArray(e,t){return new bh(((n,i)=>{const s=e.length,r=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;t(e[c]).next((e=>{r[c]=e,++o,o===s&&n(r)}),(e=>i(e)))}}))}static doWhile(e,t){return new bh(((n,i)=>{const s=()=>{!0===e()?t().next((()=>{s()}),i):n()};s()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.P=new Vl,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{t.error?this.P.reject(new Sh(e,t.error)):this.P.resolve()},this.transaction.onerror=t=>{const n=Nh(t.target.error);this.P.reject(new Sh(e,n))}}static open(e,t,n,i){try{return new Ih(t,e.transaction(i,n))}catch(e){throw new Sh(t,e)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(Dl("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Ah(t)}}class Th{constructor(e,t,n){this.name=e,this.version=t,this.S=n,12.2===Th.D(ei())&&Nl("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return Dl("SimpleDb","Removing database:",e),Ch(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!si())return!1;if(Th.N())return!0;const e=ei(),t=Th.D(e),n=0<t&&t<10,i=Th.k(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||s)}static N(){var e;return void 0!==el&&"YES"===(void 0===(e={})?void 0:e.M)}static O(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static k(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async F(e){return this.db||(Dl("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=e=>{const n=e.target.result;t(n)},i.onblocked=()=>{n(new Sh(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=t=>{const i=t.target.error;"VersionError"===i.name?n(new Fl(Ul.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===i.name?n(new Fl(Ul.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+i)):n(new Sh(e,i))},i.onupgradeneeded=e=>{Dl("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.S.$(t,i.transaction,e.oldVersion,this.version).next((()=>{Dl("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.B&&(this.db.onversionchange=e=>this.B(e)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,i){const s="readonly"===t;let r=0;for(;;){++r;try{this.db=await this.F(e);const t=Ih.open(this.db,e,s?"readonly":"readwrite",n),r=i(t).next((e=>(t.V(),e))).catch((e=>(t.abort(e),bh.reject(e)))).toPromise();return r.catch((()=>{})),await t.v,r}catch(e){const t=e,n="FirebaseError"!==t.name&&r<3;if(Dl("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Eh{constructor(e){this.U=e,this.q=!1,this.K=null}get isDone(){return this.q}get G(){return this.K}set cursor(e){this.U=e}done(){this.q=!0}j(e){this.K=e}delete(){return Ch(this.U.delete())}}class Sh extends Fl{constructor(e,t){super(Ul.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function kh(e){return"IndexedDbTransactionError"===e.name}class Ah{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(Dl("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(Dl("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Ch(n)}add(e){return Dl("SimpleDb","ADD",this.store.name,e,e),Ch(this.store.add(e))}get(e){return Ch(this.store.get(e)).next((t=>(void 0===t&&(t=null),Dl("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return Dl("SimpleDb","DELETE",this.store.name,e),Ch(this.store.delete(e))}count(){return Dl("SimpleDb","COUNT",this.store.name),Ch(this.store.count())}W(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.H(e,((e,n)=>{t.push(n)})).next((()=>t))}{const e=this.store.getAll(n.range);return new bh(((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}}J(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new bh(((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}}))}Y(e,t){Dl("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.X=!1;const i=this.cursor(n);return this.H(i,((e,t,n)=>n.delete()))}Z(e,t){let n;t?n=e:(n={},t=e);const i=this.cursor(n);return this.H(i,t)}tt(e){const t=this.cursor({});return new bh(((n,i)=>{t.onerror=e=>{const t=Nh(e.target.error);i(t)},t.onsuccess=t=>{const i=t.target.result;i?e(i.primaryKey,i.value).next((e=>{e?i.continue():n()})):n()}}))}H(e,t){const n=[];return new bh(((i,s)=>{e.onerror=e=>{s(e.target.error)},e.onsuccess=e=>{const s=e.target.result;if(!s)return void i();const r=new Eh(s),o=t(s.primaryKey,s.value,r);if(o instanceof bh){const e=o.catch((e=>(r.done(),bh.reject(e))));n.push(e)}r.isDone?i():null===r.G?s.continue():s.continue(r.G)}})).next((()=>bh.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.X?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Ch(e){return new bh(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=Nh(e.target.error);n(t)}}))}let Dh=!1;function Nh(e){const t=Th.D(ei());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new Fl("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Dh||(Dh=!0,setTimeout((()=>{throw e}),0)),e}}return e}class xh{constructor(e,t){this.asyncQueue=e,this.et=t,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}nt(e){Dl("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{Dl("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(e){kh(e)?Dl("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await _h(e)}await this.nt(6e4)}))}}class Oh{constructor(e,t){this.localStore=e,this.persistence=t}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.it(t,e)))}it(e,t){const n=new Set;let i=t,s=!0;return bh.doWhile((()=>!0===s&&i>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((t=>{if(null!==t&&!n.has(t))return Dl("IndexBackiller",`Processing collection: ${t}`),this.rt(e,t,i).next((e=>{i-=e,n.add(t)}));s=!1})))).next((()=>t-i))}rt(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((i=>this.localStore.localDocuments.getNextDocuments(e,t,i,n).next((n=>{const s=n.changes;return this.localStore.indexManager.updateIndexEntries(e,s).next((()=>this.ot(i,n))).next((n=>(Dl("IndexBackiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n)))).next((()=>s.size))}))))}ot(e,t){let n=e;return t.changes.forEach(((e,t)=>{const i=mh(t);yh(i,n)>0&&(n=i)})),new gh(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Ph(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Mh(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rh.at=-1;class Uh{constructor(e,t){this.comparator=e,this.root=t||Vh.EMPTY}insert(e,t){return new Uh(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Vh.BLACK,null,null))}remove(e){return new Uh(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Vh.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fh(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fh(this.root,e,this.comparator,!0)}}class Fh{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Vh{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:Vh.RED,this.left=null!=i?i:Vh.EMPTY,this.right=null!=s?s:Vh.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,s){return new Vh(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Vh.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return Vh.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Vh.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Vh.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Rl();if(this.right.isRed())throw Rl();const e=this.left.check();if(e!==this.right.check())throw Rl();return e+(this.isRed()?0:1)}}Vh.EMPTY=null,Vh.RED=!0,Vh.BLACK=!1,Vh.EMPTY=new class{constructor(){this.size=0}get key(){throw Rl()}get value(){throw Rl()}get color(){throw Rl()}get left(){throw Rl()}get right(){throw Rl()}copy(e,t,n,i,s){return this}insert(e,t,n){return new Vh(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qh{constructor(e){this.comparator=e,this.data=new Uh(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Bh(this.data.getIterator())}getIteratorFrom(e){return new Bh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof qh))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new qh(this.comparator);return t.data=e,t}}class Bh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function jh(e){return e.hasNext()?e.getNext():void 0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e){this.fields=e,e.sort(rh.comparator)}static empty(){return new $h([])}unionWith(e){let t=new qh(rh.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new $h(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Jl(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Hh(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Hh(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Xl(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Hh.EMPTY_BYTE_STRING=new Hh("");const zh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kh(e){if(Ll(!!e),"string"==typeof e){let t=0;const n=zh.exec(e);if(Ll(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:Wh(e.seconds),nanos:Wh(e.nanos)}}function Wh(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Qh(e){return"string"==typeof e?Hh.fromBase64String(e):Hh.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Xh(e){const t=e.mapValue.fields.__previous_value__;return Yh(t)?Xh(t):t}function Jh(e){const t=Kh(e.mapValue.fields.__local_write_time__.timestampValue);return new eh(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,t,n,i,s,r,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class ed{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ed("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof ed&&e.projectId===this.projectId&&e.database===this.database}}function td(e){return null==e}function nd(e){return 0===e&&1/e==-1/0}function id(e){return"number"==typeof e&&Number.isInteger(e)&&!nd(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},rd={nullValue:"NULL_VALUE"};function od(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Yh(e)?4:_d(e)?9007199254740991:10:Rl()}function ad(e,t){if(e===t)return!0;const n=od(e);if(n!==od(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Jh(e).isEqual(Jh(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Kh(e.timestampValue),i=Kh(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Qh(e.bytesValue).isEqual(Qh(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Wh(e.geoPointValue.latitude)===Wh(t.geoPointValue.latitude)&&Wh(e.geoPointValue.longitude)===Wh(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Wh(e.integerValue)===Wh(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Wh(e.doubleValue),i=Wh(t.doubleValue);return n===i?nd(n)===nd(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return Jl(e.arrayValue.values||[],t.arrayValue.values||[],ad);case 10:return function(e,t){const n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(Lh(n)!==Lh(i))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===i[e]||!ad(n[e],i[e])))return!1;return!0}(e,t);default:return Rl()}}function cd(e,t){return void 0!==(e.values||[]).find((e=>ad(e,t)))}function ud(e,t){if(e===t)return 0;const n=od(e),i=od(t);if(n!==i)return Xl(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Xl(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Wh(e.integerValue||e.doubleValue),i=Wh(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return ld(e.timestampValue,t.timestampValue);case 4:return ld(Jh(e),Jh(t));case 5:return Xl(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Qh(e),i=Qh(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),i=t.split("/");for(let e=0;e<n.length&&e<i.length;e++){const t=Xl(n[e],i[e]);if(0!==t)return t}return Xl(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Xl(Wh(e.latitude),Wh(t.latitude));return 0!==n?n:Xl(Wh(e.longitude),Wh(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],i=t.values||[];for(let e=0;e<n.length&&e<i.length;++e){const t=ud(n[e],i[e]);if(t)return t}return Xl(n.length,i.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===sd.mapValue&&t===sd.mapValue)return 0;if(e===sd.mapValue)return 1;if(t===sd.mapValue)return-1;const n=e.fields||{},i=Object.keys(n),s=t.fields||{},r=Object.keys(s);i.sort(),r.sort();for(let e=0;e<i.length&&e<r.length;++e){const t=Xl(i[e],r[e]);if(0!==t)return t;const o=ud(n[i[e]],s[r[e]]);if(0!==o)return o}return Xl(i.length,r.length)}(e.mapValue,t.mapValue);default:throw Rl()}}function ld(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Xl(e,t);const n=Kh(e),i=Kh(t),s=Xl(n.seconds,i.seconds);return 0!==s?s:Xl(n.nanos,i.nanos)}function hd(e){return dd(e)}function dd(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Kh(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Qh(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,oh.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const i of e.values||[])n?n=!1:t+=",",t+=dd(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",i=!0;for(const s of t)i?i=!1:n+=",",n+=`${s}:${dd(e.fields[s])}`;return n+"}"}(e.mapValue):Rl()}function fd(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function pd(e){return!!e&&"integerValue"in e}function md(e){return!!e&&"arrayValue"in e}function gd(e){return!!e&&"nullValue"in e}function yd(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function vd(e){return!!e&&"mapValue"in e}function wd(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Ph(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=wd(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=wd(e.arrayValue.values[n]);return t}return Object.assign({},e)}function _d(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function bd(e){return"nullValue"in e?rd:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?fd(ed.empty(),oh.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:Rl()}function Id(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?fd(ed.empty(),oh.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?sd:Rl()}function Td(e,t){const n=ud(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function Ed(e,t){const n=ud(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e){this.value=e}static empty(){return new Sd({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!vd(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=wd(t)}setAll(e){let t=rh.emptyPath(),n={},i=[];e.forEach(((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=s.popLast()}e?n[s.lastSegment()]=wd(e):i.push(s.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){const t=this.field(e.popLast());vd(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ad(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];vd(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){Ph(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new Sd(wd(this.value))}}function kd(e){const t=[];return Ph(e.fields,((e,n)=>{const i=new rh([e]);if(vd(n)){const e=kd(n.mapValue).fields;if(0===e.length)t.push(i);else for(const n of e)t.push(i.child(n))}else t.push(i)})),new $h(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ad{constructor(e,t,n,i,s,r){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.data=s,this.documentState=r}static newInvalidDocument(e){return new Ad(e,0,th.min(),th.min(),Sd.empty(),0)}static newFoundDocument(e,t,n){return new Ad(e,1,t,th.min(),n,0)}static newNoDocument(e,t){return new Ad(e,2,t,th.min(),Sd.empty(),0)}static newUnknownDocument(e,t){return new Ad(e,3,t,th.min(),Sd.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Sd.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Sd.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=th.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Ad&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ad(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,t=null,n=[],i=[],s=null,r=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=r,this.endAt=o,this.ht=null}}function Dd(e,t=null,n=[],i=[],s=null,r=null,o=null){return new Cd(e,t,n,i,s,r,o)}function Nd(e){const t=Ml(e);if(null===t.ht){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>{var t;return(t=e).field.canonicalString()+t.op.toString()+hd(t.value)})).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),td(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>hd(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>hd(e))).join(",")),t.ht=e}return t.ht}function xd(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Kd(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let s=0;s<e.filters.length;s++)if(n=e.filters[s],i=t.filters[s],n.op!==i.op||!n.field.isEqual(i.field)||!ad(n.value,i.value))return!1;var n,i;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Qd(e.startAt,t.startAt)&&Qd(e.endAt,t.endAt)}function Od(e){return oh.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function Rd(e,t){return e.filters.filter((e=>e instanceof Md&&e.field.isEqual(t)))}function Ld(e,t,n){let i=rd,s=!0;for(const n of Rd(e,t)){let e=rd,t=!0;switch(n.op){case"<":case"<=":e=bd(n.value);break;case"==":case"in":case">=":e=n.value;break;case">":e=n.value,t=!1;break;case"!=":case"not-in":e=rd}Td({value:i,inclusive:s},{value:e,inclusive:t})<0&&(i=e,s=t)}if(null!==n)for(let r=0;r<e.orderBy.length;++r)if(e.orderBy[r].field.isEqual(t)){const e=n.position[r];Td({value:i,inclusive:s},{value:e,inclusive:n.inclusive})<0&&(i=e,s=n.inclusive);break}return{value:i,inclusive:s}}function Pd(e,t,n){let i=sd,s=!0;for(const n of Rd(e,t)){let e=sd,t=!0;switch(n.op){case">=":case">":e=Id(n.value),t=!1;break;case"==":case"in":case"<=":e=n.value;break;case"<":e=n.value,t=!1;break;case"!=":case"not-in":e=sd}Ed({value:i,inclusive:s},{value:e,inclusive:t})>0&&(i=e,s=t)}if(null!==n)for(let r=0;r<e.orderBy.length;++r)if(e.orderBy[r].field.isEqual(t)){const e=n.position[r];Ed({value:i,inclusive:s},{value:e,inclusive:n.inclusive})>0&&(i=e,s=n.inclusive);break}return{value:i,inclusive:s}}class Md extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.lt(e,t,n):new Ud(e,t,n):"array-contains"===t?new Bd(e,n):"in"===t?new jd(e,n):"not-in"===t?new $d(e,n):"array-contains-any"===t?new Gd(e,n):new Md(e,t,n)}static lt(e,t,n){return"in"===t?new Fd(e,n):new Vd(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.ft(ud(t,this.value)):null!==t&&od(this.value)===od(t)&&this.ft(ud(t,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Rl()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Ud extends Md{constructor(e,t,n){super(e,t,n),this.key=oh.fromName(n.referenceValue)}matches(e){const t=oh.comparator(e.key,this.key);return this.ft(t)}}class Fd extends Md{constructor(e,t){super(e,"in",t),this.keys=qd("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Vd extends Md{constructor(e,t){super(e,"not-in",t),this.keys=qd("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function qd(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>oh.fromName(e.referenceValue)))}class Bd extends Md{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return md(t)&&cd(t.arrayValue,this.value)}}class jd extends Md{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&cd(this.value.arrayValue,t)}}class $d extends Md{constructor(e,t){super(e,"not-in",t)}matches(e){if(cd(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!cd(this.value.arrayValue,t)}}class Gd extends Md{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!md(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>cd(this.value.arrayValue,e)))}}class Hd{constructor(e,t){this.position=e,this.inclusive=t}}class zd{constructor(e,t="asc"){this.field=e,this.dir=t}}function Kd(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Wd(e,t,n){let i=0;for(let s=0;s<e.position.length;s++){const r=t[s],o=e.position[s];if(i=r.field.isKeyField()?oh.comparator(oh.fromName(o.referenceValue),n.key):ud(o,n.data.field(r.field)),"desc"===r.dir&&(i*=-1),0!==i)break}return i}function Qd(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ad(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,t=null,n=[],i=[],s=null,r="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=a,this._t=null,this.wt=null,this.startAt,this.endAt}}function Xd(e,t,n,i,s,r,o,a){return new Yd(e,t,n,i,s,r,o,a)}function Jd(e){return new Yd(e)}function Zd(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function ef(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function tf(e){for(const t of e.filters)if(t.dt())return t.field;return null}function nf(e){return null!==e.collectionGroup}function sf(e){const t=Ml(e);if(null===t._t){t._t=[];const e=tf(t),n=ef(t);if(null!==e&&null===n)e.isKeyField()||t._t.push(new zd(e)),t._t.push(new zd(rh.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t._t.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t._t.push(new zd(rh.keyField(),e))}}}return t._t}function rf(e){const t=Ml(e);if(!t.wt)if("F"===t.limitType)t.wt=Dd(t.path,t.collectionGroup,sf(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of sf(t)){const t="desc"===n.dir?"asc":"desc";e.push(new zd(n.field,t))}const n=t.endAt?new Hd(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Hd(t.startAt.position,t.startAt.inclusive):null;t.wt=Dd(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}return t.wt}function of(e,t,n){return new Yd(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function af(e,t){return xd(rf(e),rf(t))&&e.limitType===t.limitType}function cf(e){return`${Nd(rf(e))}|lt:${e.limitType}`}function uf(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{var t;return`${(t=e).field.canonicalString()} ${t.op} ${hd(t.value)}`})).join(", ")}]`),td(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>hd(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>hd(e))).join(",")),`Target(${t})`}(rf(e))}; limitType=${e.limitType})`}function lf(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):oh.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const i=Wd(e,t,n);return e.inclusive?i<=0:i<0}(e.startAt,sf(e),t))&&!(e.endAt&&!function(e,t,n){const i=Wd(e,t,n);return e.inclusive?i>=0:i>0}(e.endAt,sf(e),t))}(e,t)}function hf(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function df(e){return(t,n)=>{let i=!1;for(const s of sf(e)){const e=ff(s,t,n);if(0!==e)return e;i=i||s.field.isKeyField()}return 0}}function ff(e,t,n){const i=e.field.isKeyField()?oh.comparator(t.key,n.key):function(e,t,n){const i=t.data.field(e),s=n.data.field(e);return null!==i&&null!==s?ud(i,s):Rl()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return Rl()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(e,t){if(e.gt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nd(t)?"-0":t}}function mf(e){return{integerValue:""+e}}function gf(e,t){return id(t)?mf(t):pf(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(){this._=void 0}}function vf(e,t,n){return e instanceof bf?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof If?Tf(e,t):e instanceof Ef?Sf(e,t):function(e,t){const n=_f(e,t),i=Af(n)+Af(e.yt);return pd(n)&&pd(e.yt)?mf(i):pf(e.It,i)}(e,t)}function wf(e,t,n){return e instanceof If?Tf(e,t):e instanceof Ef?Sf(e,t):n}function _f(e,t){var n;return e instanceof kf?pd(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null}class bf extends yf{}class If extends yf{constructor(e){super(),this.elements=e}}function Tf(e,t){const n=Cf(t);for(const t of e.elements)n.some((e=>ad(e,t)))||n.push(t);return{arrayValue:{values:n}}}class Ef extends yf{constructor(e){super(),this.elements=e}}function Sf(e,t){let n=Cf(t);for(const t of e.elements)n=n.filter((e=>!ad(e,t)));return{arrayValue:{values:n}}}class kf extends yf{constructor(e,t){super(),this.It=e,this.yt=t}}function Af(e){return Wh(e.integerValue||e.doubleValue)}function Cf(e){return md(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e,t){this.field=e,this.transform=t}}class Nf{constructor(e,t){this.version=e,this.transformResults=t}}class xf{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new xf}static exists(e){return new xf(void 0,e)}static updateTime(e){return new xf(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Of(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Rf{}function Lf(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Gf(e.key,xf.none()):new Vf(e.key,e.data,xf.none());{const n=e.data,i=Sd.empty();let s=new qh(rh.comparator);for(let e of t.fields)if(!s.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?i.delete(e):i.set(e,t),s=s.add(e)}return new qf(e.key,i,new $h(s.toArray()),xf.none())}}function Pf(e,t,n){e instanceof Vf?function(e,t,n){const i=e.value.clone(),s=jf(e.fieldTransforms,t,n.transformResults);i.setAll(s),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):e instanceof qf?function(e,t,n){if(!Of(e.precondition,t))return void t.convertToUnknownDocument(n.version);const i=jf(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(Bf(e)),s.setAll(i),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Mf(e,t,n,i){return e instanceof Vf?function(e,t,n,i){if(!Of(e.precondition,t))return n;const s=e.value.clone(),r=$f(e.fieldTransforms,i,t);return s.setAll(r),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null}(e,t,n,i):e instanceof qf?function(e,t,n,i){if(!Of(e.precondition,t))return n;const s=$f(e.fieldTransforms,i,t),r=t.data;return r.setAll(Bf(e)),r.setAll(s),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,i):function(e,t,n){return Of(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function Uf(e,t){let n=null;for(const i of e.fieldTransforms){const e=t.data.field(i.field),s=_f(i.transform,e||null);null!=s&&(null===n&&(n=Sd.empty()),n.set(i.field,s))}return n||null}function Ff(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Jl(e,t,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof If&&t instanceof If||e instanceof Ef&&t instanceof Ef?Jl(e.elements,t.elements,ad):e instanceof kf&&t instanceof kf?ad(e.yt,t.yt):e instanceof bf&&t instanceof bf}(e.transform,t.transform)}(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Vf extends Rf{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class qf extends Rf{constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Bf(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}})),t}function jf(e,t,n){const i=new Map;Ll(e.length===n.length);for(let s=0;s<n.length;s++){const r=e[s],o=r.transform,a=t.data.field(r.field);i.set(r.field,wf(o,a,n[s]))}return i}function $f(e,t,n){const i=new Map;for(const s of e){const e=s.transform,r=n.data.field(s.field);i.set(s.field,vf(e,r,t))}return i}class Gf extends Rf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Hf extends Rf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kf,Wf;function Qf(e){switch(e){default:return Rl();case Ul.CANCELLED:case Ul.UNKNOWN:case Ul.DEADLINE_EXCEEDED:case Ul.RESOURCE_EXHAUSTED:case Ul.INTERNAL:case Ul.UNAVAILABLE:case Ul.UNAUTHENTICATED:return!1;case Ul.INVALID_ARGUMENT:case Ul.NOT_FOUND:case Ul.ALREADY_EXISTS:case Ul.PERMISSION_DENIED:case Ul.FAILED_PRECONDITION:case Ul.ABORTED:case Ul.OUT_OF_RANGE:case Ul.UNIMPLEMENTED:case Ul.DATA_LOSS:return!0}}function Yf(e){if(void 0===e)return Nl("GRPC error has no .code"),Ul.UNKNOWN;switch(e){case Kf.OK:return Ul.OK;case Kf.CANCELLED:return Ul.CANCELLED;case Kf.UNKNOWN:return Ul.UNKNOWN;case Kf.DEADLINE_EXCEEDED:return Ul.DEADLINE_EXCEEDED;case Kf.RESOURCE_EXHAUSTED:return Ul.RESOURCE_EXHAUSTED;case Kf.INTERNAL:return Ul.INTERNAL;case Kf.UNAVAILABLE:return Ul.UNAVAILABLE;case Kf.UNAUTHENTICATED:return Ul.UNAUTHENTICATED;case Kf.INVALID_ARGUMENT:return Ul.INVALID_ARGUMENT;case Kf.NOT_FOUND:return Ul.NOT_FOUND;case Kf.ALREADY_EXISTS:return Ul.ALREADY_EXISTS;case Kf.PERMISSION_DENIED:return Ul.PERMISSION_DENIED;case Kf.FAILED_PRECONDITION:return Ul.FAILED_PRECONDITION;case Kf.ABORTED:return Ul.ABORTED;case Kf.OUT_OF_RANGE:return Ul.OUT_OF_RANGE;case Kf.UNIMPLEMENTED:return Ul.UNIMPLEMENTED;case Kf.DATA_LOSS:return Ul.DATA_LOSS;default:return Rl()}}(Wf=Kf||(Kf={}))[Wf.OK=0]="OK",Wf[Wf.CANCELLED=1]="CANCELLED",Wf[Wf.UNKNOWN=2]="UNKNOWN",Wf[Wf.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Wf[Wf.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Wf[Wf.NOT_FOUND=5]="NOT_FOUND",Wf[Wf.ALREADY_EXISTS=6]="ALREADY_EXISTS",Wf[Wf.PERMISSION_DENIED=7]="PERMISSION_DENIED",Wf[Wf.UNAUTHENTICATED=16]="UNAUTHENTICATED",Wf[Wf.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Wf[Wf.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Wf[Wf.ABORTED=10]="ABORTED",Wf[Wf.OUT_OF_RANGE=11]="OUT_OF_RANGE",Wf[Wf.UNIMPLEMENTED=12]="UNIMPLEMENTED",Wf[Wf.INTERNAL=13]="INTERNAL",Wf[Wf.UNAVAILABLE=14]="UNAVAILABLE",Wf[Wf.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xf{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,i]of n)if(this.equalsFn(t,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(void 0===i)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],e))return void(i[n]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ph(this.inner,((t,n)=>{for(const[t,i]of n)e(t,i)}))}isEmpty(){return Mh(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf=new Uh(oh.comparator);function Zf(){return Jf}const ep=new Uh(oh.comparator);function tp(...e){let t=ep;for(const n of e)t=t.insert(n.key,n);return t}function np(e){let t=ep;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function ip(){return rp()}function sp(){return rp()}function rp(){return new Xf((e=>e.toString()),((e,t)=>e.isEqual(t)))}const op=new Uh(oh.comparator),ap=new qh(oh.comparator);function cp(...e){let t=ap;for(const n of e)t=t.add(n);return t}const up=new qh(Xl);function lp(){return up}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,dp.createSynthesizedTargetChangeForCurrentChange(e,t)),new hp(th.min(),n,lp(),Zf(),cp())}}class dp{constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t){return new dp(Hh.EMPTY_BYTE_STRING,t,cp(),cp(),cp())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e,t,n,i){this.Tt=e,this.removedTargetIds=t,this.key=n,this.Et=i}}class pp{constructor(e,t){this.targetId=e,this.At=t}}class mp{constructor(e,t,n=Hh.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class gp{constructor(){this.Rt=0,this.bt=wp(),this.Pt=Hh.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=cp(),t=cp(),n=cp();return this.bt.forEach(((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:Rl()}})),new dp(this.Pt,this.vt,e,t,n)}Nt(){this.Vt=!1,this.bt=wp()}kt(e,t){this.Vt=!0,this.bt=this.bt.insert(e,t)}Mt(e){this.Vt=!0,this.bt=this.bt.remove(e)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class yp{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=Zf(),this.qt=vp(),this.Kt=new qh(Xl)}Gt(e){for(const t of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(t,e.Et):this.jt(t,e.key,e.Et);for(const t of e.removedTargetIds)this.jt(t,e.key,e.Et)}Wt(e){this.forEachTarget(e,(t=>{const n=this.zt(t);switch(e.state){case 0:this.Ht(t)&&n.Ct(e.resumeToken);break;case 1:n.Ft(),n.St||n.Nt(),n.Ct(e.resumeToken);break;case 2:n.Ft(),n.St||this.removeTarget(t);break;case 3:this.Ht(t)&&(n.$t(),n.Ct(e.resumeToken));break;case 4:this.Ht(t)&&(this.Jt(t),n.Ct(e.resumeToken));break;default:Rl()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Lt.forEach(((e,n)=>{this.Ht(n)&&t(n)}))}Yt(e){const t=e.targetId,n=e.At.count,i=this.Xt(t);if(i){const e=i.target;if(Od(e))if(0===n){const n=new oh(e.path);this.jt(t,n,Ad.newNoDocument(n,th.min()))}else Ll(1===n);else this.Zt(t)!==n&&(this.Jt(t),this.Kt=this.Kt.add(t))}}te(e){const t=new Map;this.Lt.forEach(((n,i)=>{const s=this.Xt(i);if(s){if(n.current&&Od(s.target)){const t=new oh(s.target.path);null!==this.Ut.get(t)||this.ee(i,t)||this.jt(i,t,Ad.newNoDocument(t,e))}n.Dt&&(t.set(i,n.xt()),n.Nt())}}));let n=cp();this.qt.forEach(((e,t)=>{let i=!0;t.forEachWhile((e=>{const t=this.Xt(e);return!t||2===t.purpose||(i=!1,!1)})),i&&(n=n.add(e))})),this.Ut.forEach(((t,n)=>n.setReadTime(e)));const i=new hp(e,t,this.Kt,this.Ut,n);return this.Ut=Zf(),this.qt=vp(),this.Kt=new qh(Xl),i}Qt(e,t){if(!this.Ht(e))return;const n=this.ee(e,t.key)?2:0;this.zt(e).kt(t.key,n),this.Ut=this.Ut.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ne(t.key).add(e))}jt(e,t,n){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,t)?i.kt(t,1):i.Mt(t),this.qt=this.qt.insert(t,this.ne(t).delete(e)),n&&(this.Ut=this.Ut.insert(t,n))}removeTarget(e){this.Lt.delete(e)}Zt(e){const t=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.zt(e).Ot()}zt(e){let t=this.Lt.get(e);return t||(t=new gp,this.Lt.set(e,t)),t}ne(e){let t=this.qt.get(e);return t||(t=new qh(Xl),this.qt=this.qt.insert(e,t)),t}Ht(e){const t=null!==this.Xt(e);return t||Dl("WatchChangeAggregator","Detected inactive target",e),t}Xt(e){const t=this.Lt.get(e);return t&&t.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new gp),this.Bt.getRemoteKeysForTarget(e).forEach((t=>{this.jt(e,t,null)}))}ee(e,t){return this.Bt.getRemoteKeysForTarget(e).has(t)}}function vp(){return new Uh(oh.comparator)}function wp(){return new Uh(oh.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p={asc:"ASCENDING",desc:"DESCENDING"},bp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class Ip{constructor(e,t){this.databaseId=e,this.gt=t}}function Tp(e,t){return e.gt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ep(e,t){return e.gt?t.toBase64():t.toUint8Array()}function Sp(e,t){return Tp(e,t.toTimestamp())}function kp(e){return Ll(!!e),th.fromTimestamp(function(e){const t=Kh(e);return new eh(t.seconds,t.nanos)}(e))}function Ap(e,t){return function(e){return new ih(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Cp(e){const t=ih.fromString(e);return Ll(Yp(t)),t}function Dp(e,t){return Ap(e.databaseId,t.path)}function Np(e,t){const n=Cp(t);if(n.get(1)!==e.databaseId.projectId)throw new Fl(Ul.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Fl(Ul.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new oh(Lp(n))}function xp(e,t){return Ap(e.databaseId,t)}function Op(e){const t=Cp(e);return 4===t.length?ih.emptyPath():Lp(t)}function Rp(e){return new ih(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Lp(e){return Ll(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Pp(e,t,n){return{name:Dp(e,t),fields:n.value.mapValue.fields}}function Mp(e,t,n){const i=Np(e,t.name),s=kp(t.updateTime),r=new Sd({mapValue:{fields:t.fields}}),o=Ad.newFoundDocument(i,s,r);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function Up(e,t){let n;if(t instanceof Vf)n={update:Pp(e,t.key,t.value)};else if(t instanceof Gf)n={delete:Dp(e,t.key)};else if(t instanceof qf)n={update:Pp(e,t.key,t.data),updateMask:Qp(t.fieldMask)};else{if(!(t instanceof Hf))return Rl();n={verify:Dp(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof bf)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof If)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ef)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof kf)return{fieldPath:t.field.canonicalString(),increment:n.yt};throw Rl()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Sp(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Rl()}(e,t.precondition)),n}function Fp(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?xf.updateTime(kp(e.updateTime)):void 0!==e.exists?xf.exists(e.exists):xf.none()}(t.currentDocument):xf.none(),i=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)Ll("REQUEST_TIME"===t.setToServerValue),n=new bf;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new If(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new Ef(e)}else"increment"in t?n=new kf(e,t.increment):Rl();const i=rh.fromServerFormat(t.fieldPath);return new Df(i,n)}(e,t))):[];if(t.update){t.update.name;const s=Np(e,t.update.name),r=new Sd({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new $h(t.map((e=>rh.fromServerFormat(e))))}(t.updateMask);return new qf(s,r,e,n,i)}return new Vf(s,r,n,i)}if(t.delete){const i=Np(e,t.delete);return new Gf(i,n)}if(t.verify){const i=Np(e,t.verify);return new Hf(i,n)}return Rl()}function Vp(e,t){return{documents:[xp(e,t.path)]}}function qp(e,t){const n={structuredQuery:{}},i=t.path;null!==t.collectionGroup?(n.parent=xp(e,i),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=xp(e,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(yd(e.value))return{unaryFilter:{field:Hp(e.field),op:"IS_NAN"}};if(gd(e.value))return{unaryFilter:{field:Hp(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(yd(e.value))return{unaryFilter:{field:Hp(e.field),op:"IS_NOT_NAN"}};if(gd(e.value))return{unaryFilter:{field:Hp(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hp(e.field),op:Gp(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);s&&(n.structuredQuery.where=s);const r=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Hp(e.field),direction:$p(e.dir)}}(e)))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(e,t){return e.gt||td(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Bp(e){let t=Op(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){Ll(1===i);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let r=[];n.where&&(r=jp(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new zd(zp(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,td(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Hd(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Hd(n,t)}(n.endAt)),Xd(t,s,o,r,a,"F",c,u)}function jp(e){return e?void 0!==e.unaryFilter?[Wp(e)]:void 0!==e.fieldFilter?[Kp(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>jp(e))).reduce(((e,t)=>e.concat(t))):Rl():[]}function $p(e){return _p[e]}function Gp(e){return bp[e]}function Hp(e){return{fieldPath:e.canonicalString()}}function zp(e){return rh.fromServerFormat(e.fieldPath)}function Kp(e){return Md.create(zp(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Rl()}}(e.fieldFilter.op),e.fieldFilter.value)}function Wp(e){switch(e.unaryFilter.op){case"IS_NAN":const t=zp(e.unaryFilter.field);return Md.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=zp(e.unaryFilter.field);return Md.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=zp(e.unaryFilter.field);return Md.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=zp(e.unaryFilter.field);return Md.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Rl()}}function Qp(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Yp(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Zp(t)),t=Jp(e.get(n),t);return Zp(t)}function Jp(e,t){let n=t;const i=e.length;for(let t=0;t<i;t++){const i=e.charAt(t);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function Zp(e){return e+""}function em(e){const t=e.length;if(Ll(t>=2),2===t)return Ll(""===e.charAt(0)&&""===e.charAt(1)),ih.emptyPath();const n=t-2,i=[];let s="";for(let r=0;r<t;){const t=e.indexOf("",r);switch((t<0||t>n)&&Rl(),e.charAt(t+1)){case"":const n=e.substring(r,t);let o;0===s.length?o=n:(s+=n,o=s,s=""),i.push(o);break;case"":s+=e.substring(r,t),s+="\0";break;case"":s+=e.substring(r,t+1);break;default:Rl()}r=t+2}return new ih(i)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(e,t){return[e,Xp(t)]}function im(e,t,n){return[e,Xp(t),n]}const sm={},rm=["prefixPath","collectionGroup","readTime","documentId"],om=["prefixPath","collectionGroup","documentId"],am=["collectionGroup","readTime","prefixPath","documentId"],cm=["canonicalId","targetId"],um=["targetId","path"],lm=["path","targetId"],hm=["collectionId","parent"],dm=["indexId","uid"],fm=["uid","sequenceNumber"],pm=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],mm=["indexId","uid","orderedDocumentKey"],gm=["userId","collectionPath","documentId"],ym=["userId","collectionPath","largestBatchId"],vm=["userId","collectionGroup","largestBatchId"],wm=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],_m=[...wm,"documentOverlays"],bm=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Im=bm,Tm=[...Im,"indexConfiguration","indexState","indexEntries"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em extends wh{constructor(e,t){super(),this.ie=e,this.currentSequenceNumber=t}}function Sm(e,t){const n=Ml(e);return Th.O(n.ie,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const i=this.mutations[t];i.key.isEqual(e.key)&&Pf(i,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Mf(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Mf(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=sp();return this.mutations.forEach((i=>{const s=e.get(i.key),r=s.overlayedDocument;let o=this.applyToLocalView(r,s.mutatedFields);o=t.has(i.key)?null:o;const a=Lf(r,o);null!==a&&n.set(i.key,a),r.isValidDocument()||r.convertToNoDocument(th.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),cp())}isEqual(e){return this.batchId===e.batchId&&Jl(this.mutations,e.mutations,((e,t)=>Ff(e,t)))&&Jl(this.baseMutations,e.baseMutations,((e,t)=>Ff(e,t)))}}class Am{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){Ll(e.mutations.length===n.length);let i=op;const s=e.mutations;for(let e=0;e<s.length;e++)i=i.insert(s[e].key,n[e].version);return new Am(e,t,n,i)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,t,n,i,s=th.min(),r=th.min(),o=Hh.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(e){return new Dm(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Dm(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Dm(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e){this.re=e}}function xm(e,t){const n=t.key,i={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Om(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())i.document=function(e,t){return{name:Dp(e,t.key),fields:t.data.value.mapValue.fields,updateTime:Tp(e,t.version.toTimestamp())}}(e.re,t);else if(t.isNoDocument())i.noDocument={path:n.path.toArray(),readTime:Rm(t.version)};else{if(!t.isUnknownDocument())return Rl();i.unknownDocument={path:n.path.toArray(),version:Rm(t.version)}}return i}function Om(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function Rm(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Lm(e){const t=new eh(e.seconds,e.nanoseconds);return th.fromTimestamp(t)}function Pm(e,t){const n=(t.baseMutations||[]).map((t=>Fp(e.re,t)));for(let e=0;e<t.mutations.length-1;++e){const n=t.mutations[e];if(e+1<t.mutations.length&&void 0!==t.mutations[e+1].transform){const i=t.mutations[e+1];n.updateTransforms=i.transform.fieldTransforms,t.mutations.splice(e+1,1),++e}}const i=t.mutations.map((t=>Fp(e.re,t))),s=eh.fromMillis(t.localWriteTimeMs);return new km(t.batchId,s,n,i)}function Mm(e){const t=Lm(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?Lm(e.lastLimboFreeSnapshotVersion):th.min();let i;var s;return void 0!==e.query.documents?(Ll(1===(s=e.query).documents.length),i=rf(Jd(Op(s.documents[0])))):i=function(e){return rf(Bp(e))}(e.query),new Dm(i,e.targetId,0,e.lastListenSequenceNumber,t,n,Hh.fromBase64String(e.resumeToken))}function Um(e,t){const n=Rm(t.snapshotVersion),i=Rm(t.lastLimboFreeSnapshotVersion);let s;s=Od(t.target)?Vp(e.re,t.target):qp(e.re,t.target);const r=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Nd(t.target),readTime:n,resumeToken:r,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:i,query:s}}function Fm(e){const t=Bp({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?of(t,t.limit,"L"):t}function Vm(e,t){return new Cm(t.largestBatchId,Fp(e.re,t.overlayMutation))}function qm(e,t){const n=t.path.lastSegment();return[e,Xp(t.path.popLast()),n]}function Bm(e,t,n,i){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:Rm(i.readTime),documentKey:Xp(i.documentKey.path),largestBatchId:i.largestBatchId}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{getBundleMetadata(e,t){return $m(e).get(t).next((e=>{if(e)return{id:(t=e).bundleId,createTime:Lm(t.createTime),version:t.version};var t}))}saveBundleMetadata(e,t){var n;return $m(e).put({bundleId:(n=t).id,createTime:Rm(kp(n.createTime)),version:n.version})}getNamedQuery(e,t){return Gm(e).get(t).next((e=>{if(e)return{name:(t=e).name,query:Fm(t.bundledQuery),readTime:Lm(t.readTime)};var t}))}saveNamedQuery(e,t){return Gm(e).put(function(e){return{name:e.name,readTime:Rm(kp(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function $m(e){return Sm(e,"bundles")}function Gm(e){return Sm(e,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,t){this.It=e,this.userId=t}static oe(e,t){const n=t.uid||"";return new Hm(e,n)}getOverlay(e,t){return zm(e).get(qm(this.userId,t)).next((e=>e?Vm(this.It,e):null))}getOverlays(e,t){const n=ip();return bh.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){const i=[];return n.forEach(((n,s)=>{const r=new Cm(t,s);i.push(this.ue(e,r))})),bh.waitFor(i)}removeOverlaysForBatchId(e,t,n){const i=new Set;t.forEach((e=>i.add(Xp(e.getCollectionPath()))));const s=[];return i.forEach((t=>{const i=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);s.push(zm(e).Y("collectionPathOverlayIndex",i))})),bh.waitFor(s)}getOverlaysForCollection(e,t,n){const i=ip(),s=Xp(t),r=IDBKeyRange.bound([this.userId,s,n],[this.userId,s,Number.POSITIVE_INFINITY],!0);return zm(e).W("collectionPathOverlayIndex",r).next((e=>{for(const t of e){const e=Vm(this.It,t);i.set(e.getKey(),e)}return i}))}getOverlaysForCollectionGroup(e,t,n,i){const s=ip();let r;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return zm(e).Z({index:"collectionGroupOverlayIndex",range:o},((e,t,n)=>{const o=Vm(this.It,t);s.size()<i||o.largestBatchId===r?(s.set(o.getKey(),o),r=o.largestBatchId):n.done()})).next((()=>s))}ue(e,t){return zm(e).put(function(e,t,n){const[i,s,r]=qm(t,n.mutation.key);return{userId:t,collectionPath:s,documentId:r,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:Up(e.re,n.mutation)}}(this.It,this.userId,t))}}function zm(e){return Sm(e,"documentOverlays")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(){}ce(e,t){this.ae(e,t),t.he()}ae(e,t){if("nullValue"in e)this.le(t,5);else if("booleanValue"in e)this.le(t,10),t.fe(e.booleanValue?1:0);else if("integerValue"in e)this.le(t,15),t.fe(Wh(e.integerValue));else if("doubleValue"in e){const n=Wh(e.doubleValue);isNaN(n)?this.le(t,13):(this.le(t,15),nd(n)?t.fe(0):t.fe(n))}else if("timestampValue"in e){const n=e.timestampValue;this.le(t,20),"string"==typeof n?t.de(n):(t.de(`${n.seconds||""}`),t.fe(n.nanos||0))}else if("stringValue"in e)this._e(e.stringValue,t),this.we(t);else if("bytesValue"in e)this.le(t,30),t.me(Qh(e.bytesValue)),this.we(t);else if("referenceValue"in e)this.ge(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.le(t,45),t.fe(n.latitude||0),t.fe(n.longitude||0)}else"mapValue"in e?_d(e)?this.le(t,Number.MAX_SAFE_INTEGER):(this.ye(e.mapValue,t),this.we(t)):"arrayValue"in e?(this.pe(e.arrayValue,t),this.we(t)):Rl()}_e(e,t){this.le(t,25),this.Ie(e,t)}Ie(e,t){t.de(e)}ye(e,t){const n=e.fields||{};this.le(t,55);for(const e of Object.keys(n))this._e(e,t),this.ae(n[e],t)}pe(e,t){const n=e.values||[];this.le(t,50);for(const e of n)this.ae(e,t)}ge(e,t){this.le(t,37),oh.fromName(e).path.forEach((e=>{this.le(t,60),this.Ie(e,t)}))}le(e,t){e.fe(t)}we(e){e.fe(2)}}function Wm(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function Qm(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const i=Wm(255&e[n]);if(t+=i,8!==i)break}return t}(e);return Math.ceil(t/8)}Km.Te=new Km;class Ym{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ee(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ae(n.value),n=t.next();this.Re()}be(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Pe(n.value),n=t.next();this.ve()}Ve(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ae(e);else if(e<2048)this.Ae(960|e>>>6),this.Ae(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ae(480|e>>>12),this.Ae(128|63&e>>>6),this.Ae(128|63&e);else{const e=t.codePointAt(0);this.Ae(240|e>>>18),this.Ae(128|63&e>>>12),this.Ae(128|63&e>>>6),this.Ae(128|63&e)}}this.Re()}Se(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Pe(e);else if(e<2048)this.Pe(960|e>>>6),this.Pe(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Pe(480|e>>>12),this.Pe(128|63&e>>>6),this.Pe(128|63&e);else{const e=t.codePointAt(0);this.Pe(240|e>>>18),this.Pe(128|63&e>>>12),this.Pe(128|63&e>>>6),this.Pe(128|63&e)}}this.ve()}De(e){const t=this.Ce(e),n=Qm(t);this.xe(1+n),this.buffer[this.position++]=255&n;for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=255&t[e]}Ne(e){const t=this.Ce(e),n=Qm(t);this.xe(1+n),this.buffer[this.position++]=~(255&n);for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=~(255&t[e])}ke(){this.Me(255),this.Me(255)}Oe(){this.Fe(255),this.Fe(255)}reset(){this.position=0}seed(e){this.xe(e.length),this.buffer.set(e,this.position),this.position+=e.length}$e(){return this.buffer.slice(0,this.position)}Ce(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let e=1;e<t.length;++e)t[e]^=n?255:0;return t}Ae(e){const t=255&e;0===t?(this.Me(0),this.Me(255)):255===t?(this.Me(255),this.Me(0)):this.Me(t)}Pe(e){const t=255&e;0===t?(this.Fe(0),this.Fe(255)):255===t?(this.Fe(255),this.Fe(0)):this.Fe(e)}Re(){this.Me(0),this.Me(1)}ve(){this.Fe(0),this.Fe(1)}Me(e){this.xe(1),this.buffer[this.position++]=e}Fe(e){this.xe(1),this.buffer[this.position++]=~e}xe(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const i=new Uint8Array(n);i.set(this.buffer),this.buffer=i}}class Xm{constructor(e){this.Be=e}me(e){this.Be.Ee(e)}de(e){this.Be.Ve(e)}fe(e){this.Be.De(e)}he(){this.Be.ke()}}class Jm{constructor(e){this.Be=e}me(e){this.Be.be(e)}de(e){this.Be.Se(e)}fe(e){this.Be.Ne(e)}he(){this.Be.Oe()}}class Zm{constructor(){this.Be=new Ym,this.Le=new Xm(this.Be),this.Ue=new Jm(this.Be)}seed(e){this.Be.seed(e)}qe(e){return 0===e?this.Le:this.Ue}$e(){return this.Be.$e()}reset(){this.Be.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e,t,n,i){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=i}Ke(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new eg(this.indexId,this.documentKey,this.arrayValue,n)}}function tg(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=ng(e.arrayValue,t.arrayValue),0!==n?n:(n=ng(e.directionalValue,t.directionalValue),0!==n?n:oh.comparator(e.documentKey,t.documentKey)))}function ng(e,t){for(let n=0;n<e.length&&n<t.length;++n){const i=e[n]-t[n];if(0!==i)return i}return e.length-t.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e){this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Ge=e.orderBy,this.Qe=[];for(const t of e.filters){const e=t;e.dt()?this.je=e:this.Qe.push(e)}}We(e){const t=ch(e);if(void 0!==t&&!this.ze(t))return!1;const n=uh(e);let i=0,s=0;for(;i<n.length&&this.ze(n[i]);++i);if(i===n.length)return!0;if(void 0!==this.je){const e=n[i];if(!this.He(this.je,e)||!this.Je(this.Ge[s++],e))return!1;++i}for(;i<n.length;++i){const e=n[i];if(s>=this.Ge.length||!this.Je(this.Ge[s++],e))return!1}return!0}ze(e){for(const t of this.Qe)if(this.He(t,e))return!0;return!1}He(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}Je(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(){this.Ye=new rg}addToCollectionParentIndex(e,t){return this.Ye.add(t),bh.resolve()}getCollectionParents(e,t){return bh.resolve(this.Ye.getEntries(t))}addFieldIndex(e,t){return bh.resolve()}deleteFieldIndex(e,t){return bh.resolve()}getDocumentsMatchingTarget(e,t){return bh.resolve(null)}getIndexType(e,t){return bh.resolve(0)}getFieldIndexes(e,t){return bh.resolve([])}getNextCollectionGroupToUpdate(e){return bh.resolve(null)}getMinOffset(e,t){return bh.resolve(gh.min())}getMinOffsetFromCollectionGroup(e,t){return bh.resolve(gh.min())}updateCollectionGroup(e,t,n){return bh.resolve()}updateIndexEntries(e,t){return bh.resolve()}}class rg{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new qh(ih.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new qh(ih.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=new Uint8Array(0);class ag{constructor(e,t){this.user=e,this.databaseId=t,this.Xe=new rg,this.Ze=new Xf((e=>Nd(e)),((e,t)=>xd(e,t))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Xe.has(t)){const n=t.lastSegment(),i=t.popLast();e.addOnCommittedListener((()=>{this.Xe.add(t)}));const s={collectionId:n,parent:Xp(i)};return cg(e).put(s)}return bh.resolve()}getCollectionParents(e,t){const n=[],i=IDBKeyRange.bound([t,""],[Zl(t),""],!1,!0);return cg(e).W(i).next((e=>{for(const i of e){if(i.collectionId!==t)break;n.push(em(i.parent))}return n}))}addFieldIndex(e,t){const n=lg(e),i=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map((e=>[e.fieldPath.canonicalString(),e.kind]))}}(t);delete i.indexId;const s=n.add(i);if(t.indexState){const n=hg(e);return s.next((e=>{n.put(Bm(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))}))}return s.next()}deleteFieldIndex(e,t){const n=lg(e),i=hg(e),s=ug(e);return n.delete(t.indexId).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}getDocumentsMatchingTarget(e,t){const n=ug(e);let i=!0;const s=new Map;return bh.forEach(this.tn(t),(t=>this.en(e,t).next((e=>{i&&(i=!!e),s.set(t,e)})))).next((()=>{if(i){let e=cp();const i=[];return bh.forEach(s,((s,r)=>{var o;Dl("IndexedDbIndexManager",`Using index ${o=s,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map((e=>`${e.fieldPath}:${e.kind}`)).join(",")}`} to execute ${Nd(t)}`);const a=function(e,t){const n=ch(t);if(void 0===n)return null;for(const t of Rd(e,n.fieldPath))switch(t.op){case"array-contains-any":return t.value.arrayValue.values||[];case"array-contains":return[t.value]}return null}(r,s),c=function(e,t){const n=new Map;for(const i of uh(t))for(const t of Rd(e,i.fieldPath))switch(t.op){case"==":case"in":n.set(i.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(i.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(r,s),u=function(e,t){const n=[];let i=!0;for(const s of uh(t)){const t=0===s.kind?Ld(e,s.fieldPath,e.startAt):Pd(e,s.fieldPath,e.startAt);n.push(t.value),i&&(i=t.inclusive)}return new Hd(n,i)}(r,s),l=function(e,t){const n=[];let i=!0;for(const s of uh(t)){const t=0===s.kind?Pd(e,s.fieldPath,e.endAt):Ld(e,s.fieldPath,e.endAt);n.push(t.value),i&&(i=t.inclusive)}return new Hd(n,i)}(r,s),h=this.nn(s,r,u),d=this.nn(s,r,l),f=this.sn(s,r,c),p=this.rn(s.indexId,a,h,u.inclusive,d,l.inclusive,f);return bh.forEach(p,(s=>n.J(s,t.limit).next((t=>{t.forEach((t=>{const n=oh.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),i.push(n))}))}))))})).next((()=>i))}return bh.resolve(null)}))}tn(e){let t=this.Ze.get(e);return t||(t=[e],this.Ze.set(e,t),t)}rn(e,t,n,i,s,r,o){const a=(null!=t?t.length:1)*Math.max(n.length,s.length),c=a/(null!=t?t.length:1),u=[];for(let l=0;l<a;++l){const a=t?this.on(t[l/c]):og,h=this.un(e,a,n[l%c],i),d=this.cn(e,a,s[l%c],r),f=o.map((t=>this.un(e,a,t,!0)));u.push(...this.createRange(h,d,f))}return u}un(e,t,n,i){const s=new eg(e,oh.empty(),t,n);return i?s:s.Ke()}cn(e,t,n,i){const s=new eg(e,oh.empty(),t,n);return i?s.Ke():s}en(e,t){const n=new ig(t),i=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next((e=>{let t=null;for(const i of e)n.We(i)&&(!t||i.fields.length>t.fields.length)&&(t=i);return t}))}getIndexType(e,t){let n=2;return bh.forEach(this.tn(t),(t=>this.en(e,t).next((e=>{e?0!==n&&e.fields.length<function(e){let t=new qh(rh.comparator),n=!1;for(const i of e.filters){const e=i;e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field))}for(const n of e.orderBy)n.field.isKeyField()||(t=t.add(n.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})))).next((()=>n))}an(e,t){const n=new Zm;for(const i of uh(e)){const e=t.data.field(i.fieldPath);if(null==e)return null;const s=n.qe(i.kind);Km.Te.ce(e,s)}return n.$e()}on(e){const t=new Zm;return Km.Te.ce(e,t.qe(0)),t.$e()}hn(e,t){const n=new Zm;return Km.Te.ce(fd(this.databaseId,t),n.qe(function(e){const t=uh(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.$e()}sn(e,t,n){if(null===n)return[];let i=[];i.push(new Zm);let s=0;for(const r of uh(e)){const e=n[s++];for(const n of i)if(this.ln(t,r.fieldPath)&&md(e))i=this.fn(i,r,e);else{const t=n.qe(r.kind);Km.Te.ce(e,t)}}return this.dn(i)}nn(e,t,n){return this.sn(e,t,n.position)}dn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].$e();return t}fn(e,t,n){const i=[...e],s=[];for(const e of n.arrayValue.values||[])for(const n of i){const i=new Zm;i.seed(n.$e()),Km.Te.ce(e,i.qe(t.kind)),s.push(i)}return s}ln(e,t){return!!e.filters.find((e=>e instanceof Md&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op)))}getFieldIndexes(e,t){const n=lg(e),i=hg(e);return(t?n.W("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.W()).next((e=>{const t=[];return bh.forEach(e,(e=>i.get([e.indexId,this.uid]).next((n=>{t.push(function(e,t){const n=t?new fh(t.sequenceNumber,new gh(Lm(t.readTime),new oh(em(t.documentKey)),t.largestBatchId)):fh.empty(),i=e.fields.map((([e,t])=>new hh(rh.fromServerFormat(e),t)));return new ah(e.indexId,e.collectionGroup,i,n)}(e,n))})))).next((()=>t))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((e=>0===e.length?null:(e.sort(((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:Xl(e.collectionGroup,t.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(e,t,n){const i=lg(e),s=hg(e);return this._n(e).next((e=>i.W("collectionGroupIndex",IDBKeyRange.bound(t,t)).next((t=>bh.forEach(t,(t=>s.put(Bm(t.indexId,this.user,e,n))))))))}updateIndexEntries(e,t){const n=new Map;return bh.forEach(t,((t,i)=>{const s=n.get(t.collectionGroup);return(s?bh.resolve(s):this.getFieldIndexes(e,t.collectionGroup)).next((s=>(n.set(t.collectionGroup,s),bh.forEach(s,(n=>this.wn(e,t,n).next((t=>{const s=this.mn(i,n);return t.isEqual(s)?bh.resolve():this.gn(e,i,n,t,s)})))))))}))}yn(e,t,n,i){return ug(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.hn(n,t.key),documentKey:t.key.path.toArray()})}pn(e,t,n,i){return ug(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.hn(n,t.key),t.key.path.toArray()])}wn(e,t,n){const i=ug(e);let s=new qh(tg);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.hn(n,t)])},((e,i)=>{s=s.add(new eg(n.indexId,t,i.arrayValue,i.directionalValue))})).next((()=>s))}mn(e,t){let n=new qh(tg);const i=this.an(t,e);if(null==i)return n;const s=ch(t);if(null!=s){const r=e.data.field(s.fieldPath);if(md(r))for(const s of r.arrayValue.values||[])n=n.add(new eg(t.indexId,e.key,this.on(s),i))}else n=n.add(new eg(t.indexId,e.key,og,i));return n}gn(e,t,n,i,s){Dl("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const r=[];return function(e,t,n,i,s){const r=e.getIterator(),o=t.getIterator();let a=jh(r),c=jh(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const i=n(a,c);i<0?t=!0:i>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(i(c),c=jh(o)):t?(s(a),a=jh(r)):(a=jh(r),c=jh(o))}}(i,s,tg,(i=>{r.push(this.yn(e,t,n,i))}),(i=>{r.push(this.pn(e,t,n,i))})),bh.waitFor(r)}_n(e){let t=1;return hg(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((e,n,i)=>{i.done(),t=n.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((e,t)=>tg(e,t))).filter(((e,t,n)=>!t||0!==tg(e,n[t-1])));const i=[];i.push(e);for(const s of n){const n=tg(s,e),r=tg(s,t);if(0===n)i[0]=e.Ke();else if(n>0&&r<0)i.push(s),i.push(s.Ke());else if(r>0)break}i.push(t);const s=[];for(let e=0;e<i.length;e+=2)s.push(IDBKeyRange.bound([i[e].indexId,this.uid,i[e].arrayValue,i[e].directionalValue,og,[]],[i[e+1].indexId,this.uid,i[e+1].arrayValue,i[e+1].directionalValue,og,[]]));return s}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(dg)}getMinOffset(e,t){return bh.mapArray(this.tn(t),(t=>this.en(e,t).next((e=>e||Rl())))).next(dg)}}function cg(e){return Sm(e,"collectionParents")}function ug(e){return Sm(e,"indexEntries")}function lg(e){return Sm(e,"indexConfiguration")}function hg(e){return Sm(e,"indexState")}function dg(e){Ll(0!==e.length);let t=e[0].indexState.offset,n=t.largestBatchId;for(let i=1;i<e.length;i++){const s=e[i].indexState.offset;yh(s,t)<0&&(t=s),n<s.largestBatchId&&(n=s.largestBatchId)}return new gh(t.readTime,t.documentKey,n)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class pg{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new pg(e,pg.DEFAULT_COLLECTION_PERCENTILE,pg.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(e,t,n){const i=e.store("mutations"),s=e.store("documentMutations"),r=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=i.Z({range:o},((e,t,n)=>(a++,n.delete())));r.push(c.next((()=>{Ll(1===a)})));const u=[];for(const e of n.mutations){const i=im(t,e.key.path,n.batchId);r.push(s.delete(i)),u.push(e.key)}return bh.waitFor(r).next((()=>u))}function gg(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw Rl();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pg.DEFAULT_COLLECTION_PERCENTILE=10,pg.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,pg.DEFAULT=new pg(41943040,pg.DEFAULT_COLLECTION_PERCENTILE,pg.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),pg.DISABLED=new pg(-1,0,0);class yg{constructor(e,t,n,i){this.userId=e,this.It=t,this.indexManager=n,this.referenceDelegate=i,this.In={}}static oe(e,t,n,i){Ll(""!==e.uid);const s=e.isAuthenticated()?e.uid:"";return new yg(s,t,n,i)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return wg(e).Z({index:"userMutationsIndex",range:n},((e,n,i)=>{t=!1,i.done()})).next((()=>t))}addMutationBatch(e,t,n,i){const s=_g(e),r=wg(e);return r.add({}).next((o=>{Ll("number"==typeof o);const a=new km(o,t,n,i),c=function(e,t,n){const i=n.baseMutations.map((t=>Up(e.re,t))),s=n.mutations.map((t=>Up(e.re,t)));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:i,mutations:s}}(this.It,this.userId,a),u=[];let l=new qh(((e,t)=>Xl(e.canonicalString(),t.canonicalString())));for(const e of i){const t=im(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(r.put(c)),u.push(s.put(t,sm))}return l.forEach((t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.In[o]=a.keys()})),bh.waitFor(u).next((()=>a))}))}lookupMutationBatch(e,t){return wg(e).get(t).next((e=>e?(Ll(e.userId===this.userId),Pm(this.It,e)):null))}Tn(e,t){return this.In[t]?bh.resolve(this.In[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.In[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return wg(e).Z({index:"userMutationsIndex",range:i},((e,t,i)=>{t.userId===this.userId&&(Ll(t.batchId>=n),s=Pm(this.It,t)),i.done()})).next((()=>s))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return wg(e).Z({index:"userMutationsIndex",range:t,reverse:!0},((e,t,i)=>{n=t.batchId,i.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return wg(e).W("userMutationsIndex",t).next((e=>e.map((e=>Pm(this.It,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=nm(this.userId,t.path),i=IDBKeyRange.lowerBound(n),s=[];return _g(e).Z({range:i},((n,i,r)=>{const[o,a,c]=n,u=em(a);if(o===this.userId&&t.path.isEqual(u))return wg(e).get(c).next((e=>{if(!e)throw Rl();Ll(e.userId===this.userId),s.push(Pm(this.It,e))}));r.done()})).next((()=>s))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new qh(Xl);const i=[];return t.forEach((t=>{const s=nm(this.userId,t.path),r=IDBKeyRange.lowerBound(s),o=_g(e).Z({range:r},((e,i,s)=>{const[r,o,a]=e,c=em(o);r===this.userId&&t.path.isEqual(c)?n=n.add(a):s.done()}));i.push(o)})),bh.waitFor(i).next((()=>this.En(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1,s=nm(this.userId,n),r=IDBKeyRange.lowerBound(s);let o=new qh(Xl);return _g(e).Z({range:r},((e,t,s)=>{const[r,a,c]=e,u=em(a);r===this.userId&&n.isPrefixOf(u)?u.length===i&&(o=o.add(c)):s.done()})).next((()=>this.En(e,o)))}En(e,t){const n=[],i=[];return t.forEach((t=>{i.push(wg(e).get(t).next((e=>{if(null===e)throw Rl();Ll(e.userId===this.userId),n.push(Pm(this.It,e))})))})),bh.waitFor(i).next((()=>n))}removeMutationBatch(e,t){return mg(e.ie,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.An(t.batchId)})),bh.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return bh.resolve();const n=IDBKeyRange.lowerBound([this.userId]),i=[];return _g(e).Z({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=em(e[1]);i.push(t)}else n.done()})).next((()=>{Ll(0===i.length)}))}))}containsKey(e,t){return vg(e,this.userId,t)}Rn(e){return bg(e).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function vg(e,t,n){const i=nm(t,n.path),s=i[1],r=IDBKeyRange.lowerBound(i);let o=!1;return _g(e).Z({range:r,X:!0},((e,n,i)=>{const[r,a,c]=e;r===t&&a===s&&(o=!0),i.done()})).next((()=>o))}function wg(e){return Sm(e,"mutations")}function _g(e){return Sm(e,"documentMutations")}function bg(e){return Sm(e,"mutationQueues")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Ig(0)}static vn(){return new Ig(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e,t){this.referenceDelegate=e,this.It=t}allocateTargetId(e){return this.Vn(e).next((t=>{const n=new Ig(t.highestTargetId);return t.highestTargetId=n.next(),this.Sn(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.Vn(e).next((e=>th.fromTimestamp(new eh(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.Vn(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.Vn(e).next((i=>(i.highestListenSequenceNumber=t,n&&(i.lastRemoteSnapshotVersion=n.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Sn(e,i))))}addTargetData(e,t){return this.Dn(e,t).next((()=>this.Vn(e).next((n=>(n.targetCount+=1,this.Cn(t,n),this.Sn(e,n))))))}updateTargetData(e,t){return this.Dn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Eg(e).delete(t.targetId))).next((()=>this.Vn(e))).next((t=>(Ll(t.targetCount>0),t.targetCount-=1,this.Sn(e,t))))}removeTargets(e,t,n){let i=0;const s=[];return Eg(e).Z(((r,o)=>{const a=Mm(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(i++,s.push(this.removeTargetData(e,a)))})).next((()=>bh.waitFor(s))).next((()=>i))}forEachTarget(e,t){return Eg(e).Z(((e,n)=>{const i=Mm(n);t(i)}))}Vn(e){return Sg(e).get("targetGlobalKey").next((e=>(Ll(null!==e),e)))}Sn(e,t){return Sg(e).put("targetGlobalKey",t)}Dn(e,t){return Eg(e).put(Um(this.It,t))}Cn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Vn(e).next((e=>e.targetCount))}getTargetData(e,t){const n=Nd(t),i=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return Eg(e).Z({range:i,index:"queryTargetsIndex"},((e,n,i)=>{const r=Mm(n);xd(t,r.target)&&(s=r,i.done())})).next((()=>s))}addMatchingKeys(e,t,n){const i=[],s=kg(e);return t.forEach((t=>{const r=Xp(t.path);i.push(s.put({targetId:n,path:r})),i.push(this.referenceDelegate.addReference(e,n,t))})),bh.waitFor(i)}removeMatchingKeys(e,t,n){const i=kg(e);return bh.forEach(t,(t=>{const s=Xp(t.path);return bh.waitFor([i.delete([n,s]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=kg(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(i)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),i=kg(e);let s=cp();return i.Z({range:n,X:!0},((e,t,n)=>{const i=em(e[1]),r=new oh(i);s=s.add(r)})).next((()=>s))}containsKey(e,t){const n=Xp(t.path),i=IDBKeyRange.bound([n],[Zl(n)],!1,!0);let s=0;return kg(e).Z({index:"documentTargetsIndex",X:!0,range:i},(([e,t],n,i)=>{0!==e&&(s++,i.done())})).next((()=>s>0))}se(e,t){return Eg(e).get(t).next((e=>e?Mm(e):null))}}function Eg(e){return Sm(e,"targets")}function Sg(e){return Sm(e,"targetGlobal")}function kg(e){return Sm(e,"targetDocuments")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag([e,t],[n,i]){const s=Xl(e,n);return 0===s?Xl(t,i):s}class Cg{constructor(e){this.xn=e,this.buffer=new qh(Ag),this.Nn=0}kn(){return++this.Nn}Mn(e){const t=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Ag(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Dg{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.On=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Fn(6e4)}stop(){this.On&&(this.On.cancel(),this.On=null)}get started(){return null!==this.On}Fn(e){Dl("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.On=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.On=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){kh(e)?Dl("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await _h(e)}await this.Fn(3e5)}))}}class Ng{constructor(e,t){this.$n=e,this.params=t}calculateTargetCount(e,t){return this.$n.Bn(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return bh.resolve(Rh.at);const n=new Cg(t);return this.$n.forEachTarget(e,(e=>n.Mn(e.sequenceNumber))).next((()=>this.$n.Ln(e,(e=>n.Mn(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.$n.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.$n.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(Dl("LruGarbageCollector","Garbage collection skipped; disabled"),bh.resolve(fg)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(Dl("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),fg):this.Un(e,t)))}getCacheSize(e){return this.$n.getCacheSize(e)}Un(e,t){let n,i,s,r,o,a,c;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(Dl("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),i=this.params.maximumSequenceNumbersToCollect):i=t,r=Date.now(),this.nthSequenceNumber(e,i)))).next((i=>(n=i,o=Date.now(),this.removeTargets(e,n,t)))).next((t=>(s=t,a=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(c=Date.now(),Al()<=Ii.DEBUG&&Dl("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${r-u}ms\n\tDetermined least recently used ${i} in `+(o-r)+"ms\n"+`\tRemoved ${s} targets in `+(a-o)+"ms\n"+`\tRemoved ${e} documents in `+(c-a)+"ms\n"+`Total Duration: ${c-u}ms`),bh.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:e}))))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new Ng(e,t)}(this,t)}Bn(e){const t=this.qn(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}qn(e){let t=0;return this.Ln(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Ln(e,t){return this.Kn(e,((e,n)=>t(n)))}addReference(e,t,n){return Og(e,n)}removeReference(e,t,n){return Og(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Og(e,t)}Gn(e,t){return function(e,t){let n=!1;return bg(e).tt((i=>vg(e,i,t).next((e=>(e&&(n=!0),bh.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Kn(e,((r,o)=>{if(o<=t){const t=this.Gn(e,r).next((t=>{if(!t)return s++,n.getEntry(e,r).next((()=>(n.removeEntry(r,th.min()),kg(e).delete([0,Xp(r.path)]))))}));i.push(t)}})).next((()=>bh.waitFor(i))).next((()=>n.apply(e))).next((()=>s))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Og(e,t)}Kn(e,t){const n=kg(e);let i,s=Rh.at;return n.Z({index:"documentTargetsIndex"},(([e,n],{path:r,sequenceNumber:o})=>{0===e?(s!==Rh.at&&t(new oh(em(i)),s),s=o,i=r):s=Rh.at})).next((()=>{s!==Rh.at&&t(new oh(em(i)),s)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Og(e,t){return kg(e).put(function(e,t){return{targetId:0,path:Xp(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(){this.changes=new Xf((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ad.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?bh.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e){this.It=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Fg(e).put(n)}removeEntry(e,t,n){return Fg(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],Om(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.Qn(e,n))))}getEntry(e,t){let n=Ad.newInvalidDocument(t);return Fg(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Vg(t))},((e,i)=>{n=this.jn(t,i)})).next((()=>n))}Wn(e,t){let n={size:0,document:Ad.newInvalidDocument(t)};return Fg(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Vg(t))},((e,i)=>{n={document:this.jn(t,i),size:gg(i)}})).next((()=>n))}getEntries(e,t){let n=Zf();return this.zn(e,t,((e,t)=>{const i=this.jn(e,t);n=n.insert(e,i)})).next((()=>n))}Hn(e,t){let n=Zf(),i=new Uh(oh.comparator);return this.zn(e,t,((e,t)=>{const s=this.jn(e,t);n=n.insert(e,s),i=i.insert(e,gg(t))})).next((()=>({documents:n,Jn:i})))}zn(e,t,n){if(t.isEmpty())return bh.resolve();let i=new qh(Bg);t.forEach((e=>i=i.add(e)));const s=IDBKeyRange.bound(Vg(i.first()),Vg(i.last())),r=i.getIterator();let o=r.getNext();return Fg(e).Z({index:"documentKeyIndex",range:s},((e,t,i)=>{const s=oh.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&Bg(o,s)<0;)n(o,null),o=r.getNext();o&&o.isEqual(s)&&(n(o,t),o=r.hasNext()?r.getNext():null),o?i.j(Vg(o)):i.done()})).next((()=>{for(;o;)n(o,null),o=r.hasNext()?r.getNext():null}))}getAllFromCollection(e,t,n){const i=[t.popLast().toArray(),t.lastSegment(),Om(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],s=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Fg(e).W(IDBKeyRange.bound(i,s,!0)).next((e=>{let t=Zf();for(const n of e){const e=this.jn(oh.fromSegments(n.prefixPath.concat(n.collectionGroup,n.documentId)),n);t=t.insert(e.key,e)}return t}))}getAllFromCollectionGroup(e,t,n,i){let s=Zf();const r=qg(t,n),o=qg(t,gh.max());return Fg(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(r,o,!0)},((e,t,n)=>{const r=this.jn(oh.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);s=s.insert(r.key,r),s.size===i&&n.done()})).next((()=>s))}newChangeBuffer(e){return new Mg(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return Ug(e).get("remoteDocumentGlobalKey").next((e=>(Ll(!!e),e)))}Qn(e,t){return Ug(e).put("remoteDocumentGlobalKey",t)}jn(e,t){if(t){const e=function(e,t){let n;if(t.document)n=Mp(e.re,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=oh.fromSegments(t.noDocument.path),i=Lm(t.noDocument.readTime);n=Ad.newNoDocument(e,i),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return Rl();{const e=oh.fromSegments(t.unknownDocument.path),i=Lm(t.unknownDocument.version);n=Ad.newUnknownDocument(e,i)}}return t.readTime&&n.setReadTime(function(e){const t=new eh(e[0],e[1]);return th.fromTimestamp(t)}(t.readTime)),n}(this.It,t);if(!e.isNoDocument()||!e.version.isEqual(th.min()))return e}return Ad.newInvalidDocument(e)}}function Pg(e){return new Lg(e)}class Mg extends Rg{constructor(e,t){super(),this.Yn=e,this.trackRemovals=t,this.Xn=new Xf((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let n=0,i=new qh(((e,t)=>Xl(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((s,r)=>{const o=this.Xn.get(s);if(t.push(this.Yn.removeEntry(e,s,o.readTime)),r.isValidDocument()){const a=xm(this.Yn.It,r);i=i.add(s.path.popLast());const c=gg(a);n+=c-o.size,t.push(this.Yn.addEntry(e,s,a))}else if(n-=o.size,this.trackRemovals){const n=xm(this.Yn.It,r.convertToNoDocument(th.min()));t.push(this.Yn.addEntry(e,s,n))}})),i.forEach((n=>{t.push(this.Yn.indexManager.addToCollectionParentIndex(e,n))})),t.push(this.Yn.updateMetadata(e,n)),bh.waitFor(t)}getFromCache(e,t){return this.Yn.Wn(e,t).next((e=>(this.Xn.set(t,{size:e.size,readTime:e.document.readTime}),e.document)))}getAllFromCache(e,t){return this.Yn.Hn(e,t).next((({documents:e,Jn:t})=>(t.forEach(((t,n)=>{this.Xn.set(t,{size:n,readTime:e.get(t).readTime})})),e)))}}function Ug(e){return Sm(e,"remoteDocumentGlobal")}function Fg(e){return Sm(e,"remoteDocumentsV14")}function Vg(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function qg(e,t){const n=t.documentKey.path.toArray();return[e,Om(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Bg(e,t){const n=e.path.toArray(),i=t.path.toArray();let s=0;for(let e=0;e<n.length-2&&e<i.length-2;++e)if(s=Xl(n[e],i[e]),s)return s;return s=Xl(n.length,i.length),s||(s=Xl(n[n.length-2],i[i.length-2]),s||Xl(n[n.length-1],i[i.length-1]))
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class jg{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(n=i,this.getBaseDocument(e,t,n)))).next((e=>(null!==n&&Mf(n.mutation,e,$h.empty(),eh.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,cp()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=cp()){const i=ip();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,n).next((e=>{let t=tp();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=ip();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,cp())))}populateOverlays(e,t,n){const i=[];return n.forEach((e=>{t.has(e)||i.push(e)})),this.documentOverlayCache.getOverlays(e,i).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,i){let s=Zf();const r=rp(),o=rp();return t.forEach(((e,t)=>{const o=n.get(t.key);i.has(t.key)&&(void 0===o||o.mutation instanceof qf)?s=s.insert(t.key,t):void 0!==o&&(r.set(t.key,o.mutation.getFieldMask()),Mf(o.mutation,t,o.mutation.getFieldMask(),eh.now()))})),this.recalculateAndSaveOverlays(e,s).next((e=>(e.forEach(((e,t)=>r.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new jg(t,null!==(n=r.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=rp();let i=new Uh(((e,t)=>e-t)),s=cp();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const s of e)s.keys().forEach((e=>{const r=t.get(e);if(null===r)return;let o=n.get(e)||$h.empty();o=s.applyToLocalView(r,o),n.set(e,o);const a=(i.get(s.batchId)||cp()).add(e);i=i.insert(s.batchId,a)}))})).next((()=>{const r=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,c=i.value,u=sp();c.forEach((e=>{if(!s.has(e)){const i=Lf(t.get(e),n.get(e));null!==i&&u.set(e,i),s=s.add(e)}})),r.push(this.documentOverlayCache.saveOverlays(e,a,u))}return bh.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return oh.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):nf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next((s=>{const r=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-s.size):bh.resolve(ip());let o=-1,a=s;return r.next((t=>bh.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(t)?bh.resolve():this.getBaseDocument(e,t,n).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,s))).next((()=>this.computeViews(e,a,t,cp()))).next((e=>({batchId:o,changes:np(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new oh(t)).next((e=>{let t=tp();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const i=t.collectionGroup;let s=tp();return this.indexManager.getCollectionParents(e,i).next((r=>bh.forEach(r,(r=>{const o=function(e,t){return new Yd(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,r.child(i));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n){let i;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next((s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId)))).next((e=>{e.forEach(((e,t)=>{const n=t.getKey();null===i.get(n)&&(i=i.insert(n,Ad.newInvalidDocument(n)))}));let n=tp();return i.forEach(((i,s)=>{const r=e.get(i);void 0!==r&&Mf(r.mutation,s,$h.empty(),eh.now()),lf(t,s)&&(n=n.insert(i,s))})),n}))}getBaseDocument(e,t,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(e,t):bh.resolve(Ad.newInvalidDocument(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return bh.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:kp(n.createTime)}),bh.resolve()}getNamedQuery(e,t){return bh.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,function(e){return{name:e.name,query:Fm(e.bundledQuery),readTime:kp(e.readTime)}}(t)),bh.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(){this.overlays=new Uh(oh.comparator),this.es=new Map}getOverlay(e,t){return bh.resolve(this.overlays.get(t))}getOverlays(e,t){const n=ip();return bh.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,i)=>{this.ue(e,t,i)})),bh.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.es.get(n);return void 0!==i&&(i.forEach((e=>this.overlays=this.overlays.remove(e))),this.es.delete(n)),bh.resolve()}getOverlaysForCollection(e,t,n){const i=ip(),s=t.length+1,r=new oh(t.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const e=o.getNext().value,r=e.getKey();if(!t.isPrefixOf(r.path))break;r.path.length===s&&e.largestBatchId>n&&i.set(e.getKey(),e)}return bh.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new Uh(((e,t)=>e-t));const r=this.overlays.getIterator();for(;r.hasNext();){const e=r.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=ip(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=ip(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=i)););return bh.resolve(o)}ue(e,t,n){const i=this.overlays.get(n.key);if(null!==i){const e=this.es.get(i.largestBatchId).delete(n.key);this.es.set(i.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Cm(t,n));let s=this.es.get(t);void 0===s&&(s=cp(),this.es.set(t,s)),this.es.set(t,s.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(){this.ns=new qh(Kg.ss),this.rs=new qh(Kg.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){const n=new Kg(e,t);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.cs(new Kg(e,t))}hs(e,t){e.forEach((e=>this.removeReference(e,t)))}ls(e){const t=new oh(new ih([])),n=new Kg(t,e),i=new Kg(t,e+1),s=[];return this.rs.forEachInRange([n,i],(e=>{this.cs(e),s.push(e.key)})),s}fs(){this.ns.forEach((e=>this.cs(e)))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new oh(new ih([])),n=new Kg(t,e),i=new Kg(t,e+1);let s=cp();return this.rs.forEachInRange([n,i],(e=>{s=s.add(e.key)})),s}containsKey(e){const t=new Kg(e,0),n=this.ns.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Kg{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return oh.comparator(e.key,t.key)||Xl(e._s,t._s)}static os(e,t){return Xl(e._s,t._s)||oh.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new qh(Kg.ss)}checkEmpty(e){return bh.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new km(s,t,n,i);this.mutationQueue.push(r);for(const t of i)this.gs=this.gs.add(new Kg(t.key,s)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return bh.resolve(r)}lookupMutationBatch(e,t){return bh.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.ps(n),s=i<0?0:i;return bh.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return bh.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return bh.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Kg(t,0),i=new Kg(t,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([n,i],(e=>{const t=this.ys(e._s);s.push(t)})),bh.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new qh(Xl);return t.forEach((e=>{const t=new Kg(e,0),i=new Kg(e,Number.POSITIVE_INFINITY);this.gs.forEachInRange([t,i],(e=>{n=n.add(e._s)}))})),bh.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let s=n;oh.isDocumentKey(s)||(s=s.child(""));const r=new Kg(new oh(s),0);let o=new qh(Xl);return this.gs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===i&&(o=o.add(e._s)),!0)}),r),bh.resolve(this.Is(o))}Is(e){const t=[];return e.forEach((e=>{const n=this.ys(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Ll(0===this.Ts(t.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return bh.forEach(t.mutations,(i=>{const s=new Kg(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.gs=n}))}An(e){}containsKey(e,t){const n=new Kg(t,0),i=this.gs.firstAfterOrEqual(n);return bh.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,bh.resolve()}Ts(e,t){return this.ps(e)}ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e){this.Es=e,this.docs=new Uh(oh.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),s=i?i.size:0,r=this.Es(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:r}),this.size+=r-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return bh.resolve(n?n.document.mutableCopy():Ad.newInvalidDocument(t))}getEntries(e,t){let n=Zf();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Ad.newInvalidDocument(e))})),bh.resolve(n)}getAllFromCollection(e,t,n){let i=Zf();const s=new oh(t.child("")),r=this.docs.getIteratorFrom(s);for(;r.hasNext();){const{key:e,value:{document:s}}=r.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||yh(mh(s),n)<=0||(i=i.insert(s.key,s.mutableCopy()))}return bh.resolve(i)}getAllFromCollectionGroup(e,t,n,i){Rl()}As(e,t){return bh.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Yg(this)}getSize(e){return bh.resolve(this.size)}}class Yg extends Rg{constructor(e){super(),this.Yn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?t.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(n)})),bh.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e){this.persistence=e,this.Rs=new Xf((e=>Nd(e)),xd),this.lastRemoteSnapshotVersion=th.min(),this.highestTargetId=0,this.bs=0,this.Ps=new zg,this.targetCount=0,this.vs=Ig.Pn()}forEachTarget(e,t){return this.Rs.forEach(((e,n)=>t(n))),bh.resolve()}getLastRemoteSnapshotVersion(e){return bh.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return bh.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),bh.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),bh.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new Ig(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,bh.resolve()}updateTargetData(e,t){return this.Dn(t),bh.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,bh.resolve()}removeTargets(e,t,n){let i=0;const s=[];return this.Rs.forEach(((r,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Rs.delete(r),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),i++)})),bh.waitFor(s).next((()=>i))}getTargetCount(e){return bh.resolve(this.targetCount)}getTargetData(e,t){const n=this.Rs.get(t)||null;return bh.resolve(n)}addMatchingKeys(e,t,n){return this.Ps.us(t,n),bh.resolve()}removeMatchingKeys(e,t,n){this.Ps.hs(t,n);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach((t=>{s.push(i.markPotentiallyOrphaned(e,t))})),bh.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),bh.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Ps.ds(t);return bh.resolve(n)}containsKey(e,t){return bh.resolve(this.Ps.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e,t){this.Vs={},this.overlays={},this.Ss=new Rh(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Xg(this),this.indexManager=new sg,this.remoteDocumentCache=function(e){return new Qg(e)}((e=>this.referenceDelegate.xs(e))),this.It=new Nm(t),this.Ns=new Gg(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Hg,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Vs[e.toKey()];return n||(n=new Wg(t,this.referenceDelegate),this.Vs[e.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,n){Dl("MemoryPersistence","Starting transaction:",e);const i=new Zg(this.Ss.next());return this.referenceDelegate.ks(),n(i).next((e=>this.referenceDelegate.Ms(i).next((()=>e)))).toPromise().then((e=>(i.raiseOnCommittedEvent(),e)))}Os(e,t){return bh.or(Object.values(this.Vs).map((n=>()=>n.containsKey(e,t))))}}class Zg extends wh{constructor(e){super(),this.currentSequenceNumber=e}}class ey{constructor(e){this.persistence=e,this.Fs=new zg,this.$s=null}static Bs(e){return new ey(e)}get Ls(){if(this.$s)return this.$s;throw Rl()}addReference(e,t,n){return this.Fs.addReference(n,t),this.Ls.delete(n.toString()),bh.resolve()}removeReference(e,t,n){return this.Fs.removeReference(n,t),this.Ls.add(n.toString()),bh.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),bh.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach((e=>this.Ls.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ls.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}ks(){this.$s=new Set}Ms(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return bh.forEach(this.Ls,(n=>{const i=oh.fromPath(n);return this.Us(e,i).next((e=>{e||t.removeEntry(i,th.min())}))})).next((()=>(this.$s=null,t.apply(e))))}updateLimboDocument(e,t){return this.Us(e,t).next((e=>{e?this.Ls.delete(t.toString()):this.Ls.add(t.toString())}))}xs(e){return 0}Us(e,t){return bh.or([()=>bh.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Os(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e){this.It=e}$(e,t,n,i){const s=new Ih("createOrUpgrade",t);n<1&&i>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",tm,{unique:!0}),e.createObjectStore("documentMutations")}(e),ny(e),function(e){e.createObjectStore("remoteDocuments")}(e));let r=bh.resolve();return n<3&&i>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),ny(e)),r=r.next((()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:th.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(s)))),n<4&&i>=4&&(0!==n&&(r=r.next((()=>function(e,t){return t.store("mutations").W().next((n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",tm,{unique:!0});const i=t.store("mutations"),s=n.map((e=>i.put(e)));return bh.waitFor(s)}))}(e,s)))),r=r.next((()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)}))),n<5&&i>=5&&(r=r.next((()=>this.qs(s)))),n<6&&i>=6&&(r=r.next((()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(s))))),n<7&&i>=7&&(r=r.next((()=>this.Gs(s)))),n<8&&i>=8&&(r=r.next((()=>this.Qs(e,s)))),n<9&&i>=9&&(r=r.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)}))),n<10&&i>=10&&(r=r.next((()=>this.js(s)))),n<11&&i>=11&&(r=r.next((()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)}))),n<12&&i>=12&&(r=r.next((()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:gm});t.createIndex("collectionPathOverlayIndex",ym,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",vm,{unique:!1})}(e)}))),n<13&&i>=13&&(r=r.next((()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:rm});t.createIndex("documentKeyIndex",om),t.createIndex("collectionGroupIndex",am)}(e))).next((()=>this.Ws(e,s))).next((()=>e.deleteObjectStore("remoteDocuments")))),n<14&&i>=14&&(r=r.next((()=>this.zs(e,s)))),n<15&&i>=15&&(r=r.next((()=>function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:dm}).createIndex("sequenceNumberIndex",fm,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:pm}).createIndex("documentKeyIndex",mm,{unique:!1})}(e)))),r}Ks(e){let t=0;return e.store("remoteDocuments").Z(((e,n)=>{t+=gg(n)})).next((()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)}))}qs(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.W().next((t=>bh.forEach(t,(t=>{const i=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.W("userMutationsIndex",i).next((n=>bh.forEach(n,(n=>{Ll(n.userId===t.userId);const i=Pm(this.It,n);return mg(e,t.userId,i).next((()=>{}))}))))}))))}Gs(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next((e=>{const i=[];return n.Z(((n,s)=>{const r=new ih(n),o=function(e){return[0,Xp(e)]}(r);i.push(t.get(o).next((n=>n?bh.resolve():(n=>t.put({targetId:0,path:Xp(n),sequenceNumber:e.highestListenSequenceNumber}))(r))))})).next((()=>bh.waitFor(i)))}))}Qs(e,t){e.createObjectStore("collectionParents",{keyPath:hm});const n=t.store("collectionParents"),i=new rg,s=e=>{if(i.add(e)){const t=e.lastSegment(),i=e.popLast();return n.put({collectionId:t,parent:Xp(i)})}};return t.store("remoteDocuments").Z({X:!0},((e,t)=>{const n=new ih(e);return s(n.popLast())})).next((()=>t.store("documentMutations").Z({X:!0},(([e,t,n],i)=>{const r=em(t);return s(r.popLast())}))))}js(e){const t=e.store("targets");return t.Z(((e,n)=>{const i=Mm(n),s=Um(this.It,i);return t.put(s)}))}Ws(e,t){const n=t.store("remoteDocuments"),i=[];return n.Z(((e,n)=>{const s=t.store("remoteDocumentsV14"),r=(o=n,o.document?new oh(ih.fromString(o.document.name).popFirst(5)):o.noDocument?oh.fromSegments(o.noDocument.path):o.unknownDocument?oh.fromSegments(o.unknownDocument.path):Rl()).path.toArray();var o;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a={prefixPath:r.slice(0,r.length-2),collectionGroup:r[r.length-2],documentId:r[r.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};i.push(s.put(a))})).next((()=>bh.waitFor(i)))}zs(e,t){const n=t.store("mutations"),i=Pg(this.It),s=new Jg(ey.Bs,this.It.re);return n.W().next((e=>{const n=new Map;return e.forEach((e=>{var t;let i=null!==(t=n.get(e.userId))&&void 0!==t?t:cp();Pm(this.It,e).keys().forEach((e=>i=i.add(e))),n.set(e.userId,i)})),bh.forEach(n,((e,n)=>{const r=new El(n),o=Hm.oe(this.It,r),a=s.getIndexManager(r),c=yg.oe(r,this.It,a,s.referenceDelegate);return new $g(i,c,o,a).recalculateAndSaveOverlaysForDocumentKeys(new Em(t,Rh.at),e).next()}))}))}}function ny(e){e.createObjectStore("targetDocuments",{keyPath:um}).createIndex("documentTargetsIndex",lm,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",cm,{unique:!0}),e.createObjectStore("targetGlobal")}const iy="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class sy{constructor(e,t,n,i,s,r,o,a,c,u,l=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Hs=s,this.window=r,this.document=o,this.Js=c,this.Ys=u,this.Xs=l,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=e=>Promise.resolve(),!sy.C())throw new Fl(Ul.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new xg(this,i),this.ii=t+"main",this.It=new Nm(a),this.ri=new Th(this.ii,this.Xs,new ty(this.It)),this.Cs=new Tg(this.referenceDelegate,this.It),this.remoteDocumentCache=Pg(this.It),this.Ns=new jm,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,!1===u&&Nl("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new Fl(Ul.FAILED_PRECONDITION,iy);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Cs.getHighestSequenceNumber(e)))})).then((e=>{this.Ss=new Rh(e,this.Js)})).then((()=>{this.Ds=!0})).catch((e=>(this.ri&&this.ri.close(),Promise.reject(e))))}li(e){return this.si=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget((async()=>{this.started&&await this.ui()})))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>oy(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.fi(e).next((e=>{e||(this.isPrimary=!1,this.Hs.enqueueRetryable((()=>this.si(!1))))}))})).next((()=>this.di(e))).next((t=>this.isPrimary&&!t?this._i(e).next((()=>!1)):!!t&&this.wi(e).next((()=>!0)))))).catch((e=>{if(kh(e))return Dl("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return Dl("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable((()=>this.si(e))),this.isPrimary=e}))}fi(e){return ry(e).get("owner").next((e=>bh.resolve(this.mi(e))))}gi(e){return oy(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=Sm(e,"clientMetadata");return t.W().next((e=>{const n=this.Ii(e,18e5),i=e.filter((e=>-1===n.indexOf(e)));return bh.forEach(i,(e=>t.delete(e.clientId))).next((()=>i))}))})).catch((()=>[]));if(this.oi)for(const t of e)this.oi.removeItem(this.Ti(t.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.ui().then((()=>this.yi())).then((()=>this.hi()))))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?bh.resolve(!0):ry(e).get("owner").next((t=>{if(null!==t&&this.pi(t.leaseTimestampMs,5e3)&&!this.Ei(t.ownerId)){if(this.mi(t)&&this.networkEnabled)return!0;if(!this.mi(t)){if(!t.allowTabSynchronization)throw new Fl(Ul.FAILED_PRECONDITION,iy);return!1}}return!(!this.networkEnabled||!this.inForeground)||oy(e).W().next((e=>void 0===this.Ii(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,i=this.networkEnabled===e.networkEnabled;if(t||n&&i)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&Dl("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(e=>{const t=new Em(e,Rh.at);return this._i(t).next((()=>this.gi(t)))})),this.ri.close(),this.Pi()}Ii(e,t){return e.filter((e=>this.pi(e.updateTimeMs,t)&&!this.Ei(e.clientId)))}vi(){return this.runTransaction("getActiveClients","readonly",(e=>oy(e).W().next((e=>this.Ii(e,18e5).map((e=>e.clientId))))))}get started(){return this.Ds}getMutationQueue(e,t){return yg.oe(e,this.It,t,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new ag(e,this.It.re.databaseId)}getDocumentOverlayCache(e){return Hm.oe(this.It,e)}getBundleCache(){return this.Ns}runTransaction(e,t,n){Dl("IndexedDbPersistence","Starting transaction:",e);const i="readonly"===t?"readonly":"readwrite",s=15===(r=this.Xs)?Tm:14===r?Im:13===r?bm:12===r?_m:11===r?wm:void Rl();var r;let o;return this.ri.runTransaction(e,i,s,(i=>(o=new Em(i,this.Ss?this.Ss.next():Rh.at),"readwrite-primary"===t?this.fi(o).next((e=>!!e||this.di(o))).next((t=>{if(!t)throw Nl(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable((()=>this.si(!1))),new Fl(Ul.FAILED_PRECONDITION,vh);return n(o)})).next((e=>this.wi(o).next((()=>e)))):this.Vi(o).next((()=>n(o)))))).then((e=>(o.raiseOnCommittedEvent(),e)))}Vi(e){return ry(e).get("owner").next((e=>{if(null!==e&&this.pi(e.leaseTimestampMs,5e3)&&!this.Ei(e.ownerId)&&!this.mi(e)&&!(this.Ys||this.allowTabSynchronization&&e.allowTabSynchronization))throw new Fl(Ul.FAILED_PRECONDITION,iy)}))}wi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ry(e).put("owner",t)}static C(){return Th.C()}_i(e){const t=ry(e);return t.get("owner").next((e=>this.mi(e)?(Dl("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):bh.resolve()))}pi(e,t){const n=Date.now();return!(e<n-t||e>n&&(Nl(`Detected an update time that is in the future: ${e} > ${n}`),1))}ci(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ti=()=>{this.Hs.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.ui())))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground="visible"===this.document.visibilityState)}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Zs=()=>{this.Ai(),ii()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var t;try{const n=null!==(null===(t=this.oi)||void 0===t?void 0:t.getItem(this.Ti(e)));return Dl("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return Nl("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(e){Nl("Failed to set zombie client id.",e)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch(e){}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ry(e){return Sm(e,"owner")}function oy(e){return Sm(e,"clientMetadata")}function ay(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class cy{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Si=n,this.Di=i}static Ci(e,t){let n=cp(),i=cp();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:i=i.add(e.doc.key)}return new cy(e,t.fromCache,n,i)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,n,i){return this.ki(e,t).next((s=>s||this.Mi(e,t,i,n))).next((n=>n||this.Oi(e,t)))}ki(e,t){if(Zd(t))return bh.resolve(null);let n=rf(t);return this.indexManager.getIndexType(e,n).next((i=>0===i?null:(null!==t.limit&&1===i&&(t=of(t,null,"F"),n=rf(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((i=>{const s=cp(...i);return this.Ni.getDocuments(e,s).next((i=>this.indexManager.getMinOffset(e,n).next((n=>{const r=this.Fi(t,i);return this.$i(t,r,s,n.readTime)?this.ki(e,of(t,null,"F")):this.Bi(e,r,t,n)}))))})))))}Mi(e,t,n,i){return Zd(t)||i.isEqual(th.min())?this.Oi(e,t):this.Ni.getDocuments(e,n).next((s=>{const r=this.Fi(t,s);return this.$i(t,r,n,i)?this.Oi(e,t):(Al()<=Ii.DEBUG&&Dl("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),uf(t)),this.Bi(e,r,t,ph(i,-1)))}))}Fi(e,t){let n=new qh(df(e));return t.forEach(((t,i)=>{lf(e,i)&&(n=n.add(i))})),n}$i(e,t,n,i){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Oi(e,t){return Al()<=Ii.DEBUG&&Dl("QueryEngine","Using full collection scan to execute query:",uf(t)),this.Ni.getDocumentsMatchingQuery(e,t,gh.min())}Bi(e,t,n,i){return this.Ni.getDocumentsMatchingQuery(e,n,i).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,t,n,i){this.persistence=e,this.Li=t,this.It=i,this.Ui=new Uh(Xl),this.qi=new Xf((e=>Nd(e)),xd),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(n)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $g(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ui)))}}function hy(e,t,n,i){return new ly(e,t,n,i)}async function dy(e,t){const n=Ml(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let i;return n.mutationQueue.getAllMutationBatches(e).next((s=>(i=s,n.Qi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const s=[],r=[];let o=cp();for(const e of i){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({ji:e,removedBatchIds:s,addedBatchIds:r})))}))}))}function fy(e){const t=Ml(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Cs.getLastRemoteSnapshotVersion(e)))}function py(e,t,n){let i=cp(),s=cp();return n.forEach((e=>i=i.add(e))),t.getEntries(e,i).next((e=>{let i=Zf();return n.forEach(((n,r)=>{const o=e.get(n);r.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),r.isNoDocument()&&r.version.isEqual(th.min())?(t.removeEntry(n,r.readTime),i=i.insert(n,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(r),i=i.insert(n,r)):Dl("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",r.version)})),{Wi:i,zi:s}}))}function my(e,t){const n=Ml(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function gy(e,t){const n=Ml(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let i;return n.Cs.getTargetData(e,t).next((s=>s?(i=s,bh.resolve(i)):n.Cs.allocateTargetId(e).next((s=>(i=new Dm(t,s,0,e.currentSequenceNumber),n.Cs.addTargetData(e,i).next((()=>i)))))))})).then((e=>{const i=n.Ui.get(e.targetId);return(null===i||e.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(e.targetId,e),n.qi.set(t,e.targetId)),e}))}async function yy(e,t,n){const i=Ml(e),s=i.Ui.get(t),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,(e=>i.persistence.referenceDelegate.removeTarget(e,s)))}catch(e){if(!kh(e))throw e;Dl("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}i.Ui=i.Ui.remove(t),i.qi.delete(s.target)}function vy(e,t,n){const i=Ml(e);let s=th.min(),r=cp();return i.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const i=Ml(e),s=i.qi.get(n);return void 0!==s?bh.resolve(i.Ui.get(s)):i.Cs.getTargetData(t,n)}(i,e,rf(t)).next((t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,i.Cs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{r=e}))})).next((()=>i.Li.getDocumentsMatchingQuery(e,t,n?s:th.min(),n?r:cp()))).next((e=>(by(i,hf(t),e),{documents:e,Hi:r})))))}function wy(e,t){const n=Ml(e),i=Ml(n.Cs),s=n.Ui.get(t);return s?Promise.resolve(s.target):n.persistence.runTransaction("Get target data","readonly",(e=>i.se(e,t).next((e=>e?e.target:null))))}function _y(e,t){const n=Ml(e),i=n.Ki.get(t)||th.min();return n.persistence.runTransaction("Get new document changes","readonly",(e=>n.Gi.getAllFromCollectionGroup(e,t,ph(i,-1),Number.MAX_SAFE_INTEGER))).then((e=>(by(n,t,e),e)))}function by(e,t,n){let i=th.min();n.forEach(((e,t)=>{t.readTime.compareTo(i)>0&&(i=t.readTime)})),e.Ki.set(t,i)}async function Iy(e,t,n=cp()){const i=await gy(e,rf(Fm(t.bundledQuery))),s=Ml(e);return s.persistence.runTransaction("Save named query","readwrite",(e=>{const r=kp(t.readTime);if(i.snapshotVersion.compareTo(r)>=0)return s.Ns.saveNamedQuery(e,t);const o=i.withResumeToken(Hh.EMPTY_BYTE_STRING,r);return s.Ui=s.Ui.insert(o.targetId,o),s.Cs.updateTargetData(e,o).next((()=>s.Cs.removeMatchingKeysForTargetId(e,i.targetId))).next((()=>s.Cs.addMatchingKeys(e,n,i.targetId))).next((()=>s.Ns.saveNamedQuery(e,t)))}))}function Ty(e,t){return`firestore_clients_${e}_${t}`}function Ey(e,t,n){let i=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(i+=`_${t.uid}`),i}function Sy(e,t){return`firestore_targets_${e}_${t}`}class ky{constructor(e,t,n,i){this.user=e,this.batchId=t,this.state=n,this.error=i}static Zi(e,t,n){const i=JSON.parse(n);let s,r="object"==typeof i&&-1!==["pending","acknowledged","rejected"].indexOf(i.state)&&(void 0===i.error||"object"==typeof i.error);return r&&i.error&&(r="string"==typeof i.error.message&&"string"==typeof i.error.code,r&&(s=new Fl(i.error.code,i.error.message))),r?new ky(e,t,i.state,s):(Nl("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ay{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Zi(e,t){const n=JSON.parse(t);let i,s="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return s&&n.error&&(s="string"==typeof n.error.message&&"string"==typeof n.error.code,s&&(i=new Fl(n.error.code,n.error.message))),s?new Ay(e,n.state,i):(Nl("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Cy{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Zi(e,t){const n=JSON.parse(t);let i="object"==typeof n&&n.activeTargetIds instanceof Array,s=lp();for(let e=0;i&&e<n.activeTargetIds.length;++e)i=id(n.activeTargetIds[e]),s=s.add(n.activeTargetIds[e]);return i?new Cy(e,s):(Nl("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Dy{constructor(e,t){this.clientId=e,this.onlineState=t}static Zi(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new Dy(t.clientId,t.onlineState):(Nl("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Ny{constructor(){this.activeTargetIds=lp()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class xy{constructor(e,t,n,i,s){this.window=e,this.Hs=t,this.persistenceKey=n,this.sr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new Uh(Xl),this.started=!1,this.cr=[];const r=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ar=Ty(this.persistenceKey,this.sr),this.hr=function(e){return`firestore_sequence_number_${e}`}(this.persistenceKey),this.ur=this.ur.insert(this.sr,new Ny),this.lr=new RegExp(`^firestore_clients_${r}_([^_]*)$`),this.dr=new RegExp(`^firestore_mutations_${r}_(\\d+)(?:_(.*))?$`),this._r=new RegExp(`^firestore_targets_${r}_(\\d+)$`),this.wr=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this.mr=function(e){return`firestore_bundle_loaded_v2_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this.ir)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.vi();for(const t of e){if(t===this.sr)continue;const e=this.getItem(Ty(this.persistenceKey,t));if(e){const n=Cy.Zi(t,e);n&&(this.ur=this.ur.insert(n.clientId,n))}}this.gr();const t=this.storage.getItem(this.wr);if(t){const e=this.yr(t);e&&this.pr(e)}for(const e of this.cr)this.rr(e);this.cr=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let t=!1;return this.ur.forEach(((n,i)=>{i.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,t,n){this.Tr(e,t,n),this.Er(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(Sy(this.persistenceKey,e));if(n){const i=Ay.Zi(e,n);i&&(t=i.state)}}return this.Ar.er(e),this.gr(),t}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Sy(this.persistenceKey,e))}updateQueryState(e,t,n){this.Rr(e,t,n)}handleUserChange(e,t,n){t.forEach((e=>{this.Er(e)})),this.currentUser=e,n.forEach((e=>{this.addPendingMutation(e)}))}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return Dl("SharedClientState","READ",e,t),t}setItem(e,t){Dl("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){Dl("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){const t=e;if(t.storageArea===this.storage){if(Dl("SharedClientState","EVENT",t.key,t.newValue),t.key===this.ar)return void Nl("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable((async()=>{if(this.started){if(null!==t.key)if(this.lr.test(t.key)){if(null==t.newValue){const e=this.vr(t.key);return this.Vr(e,null)}{const e=this.Sr(t.key,t.newValue);if(e)return this.Vr(e.clientId,e)}}else if(this.dr.test(t.key)){if(null!==t.newValue){const e=this.Dr(t.key,t.newValue);if(e)return this.Cr(e)}}else if(this._r.test(t.key)){if(null!==t.newValue){const e=this.Nr(t.key,t.newValue);if(e)return this.kr(e)}}else if(t.key===this.wr){if(null!==t.newValue){const e=this.yr(t.newValue);if(e)return this.pr(e)}}else if(t.key===this.hr){const e=function(e){let t=Rh.at;if(null!=e)try{const n=JSON.parse(e);Ll("number"==typeof n),t=n}catch(e){Nl("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==Rh.at&&this.sequenceNumberHandler(e)}else if(t.key===this.mr){const e=this.Mr(t.newValue);await Promise.all(e.map((e=>this.syncEngine.Or(e))))}}else this.cr.push(t)}))}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,t,n){const i=new ky(this.currentUser,e,t,n),s=Ey(this.persistenceKey,this.currentUser,e);this.setItem(s,i.tr())}Er(e){const t=Ey(this.persistenceKey,this.currentUser,e);this.removeItem(t)}br(e){const t={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(t))}Rr(e,t,n){const i=Sy(this.persistenceKey,e),s=new Ay(e,t,n);this.setItem(i,s.tr())}Pr(e){const t=JSON.stringify(Array.from(e));this.setItem(this.mr,t)}vr(e){const t=this.lr.exec(e);return t?t[1]:null}Sr(e,t){const n=this.vr(e);return Cy.Zi(n,t)}Dr(e,t){const n=this.dr.exec(e),i=Number(n[1]),s=void 0!==n[2]?n[2]:null;return ky.Zi(new El(s),i,t)}Nr(e,t){const n=this._r.exec(e),i=Number(n[1]);return Ay.Zi(i,t)}yr(e){return Dy.Zi(e)}Mr(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);Dl("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,t){const n=t?this.ur.insert(e,t):this.ur.remove(e),i=this.Ir(this.ur),s=this.Ir(n),r=[],o=[];return s.forEach((e=>{i.has(e)||r.push(e)})),i.forEach((e=>{s.has(e)||o.push(e)})),this.syncEngine.Br(r,o).then((()=>{this.ur=n}))}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let t=lp();return e.forEach(((e,n)=>{t=t.unionWith(n.activeTargetIds)})),t}}class Oy{constructor(){this.Lr=new Ny,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,t,n){this.Ur[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Ny,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{qr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){Dl("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){Dl("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Py={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,t,n,i,s){const r=this.ao(e,t);Dl("RestConnection","Sending: ",r,n);const o={};return this.ho(o,i,s),this.lo(e,r,o,n).then((e=>(Dl("RestConnection","Received: ",e),e)),(t=>{throw xl("RestConnection",`${e} failed with error: `,t,"url: ",r,"request:",n),t}))}fo(e,t,n,i,s,r){return this.co(e,t,n,i,s)}ho(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Sl,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}ao(e,t){const n=Py[e];return`${this.oo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,t,n,i){return new Promise(((s,r)=>{const o=new hl;o.listenOnce(ol.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case rl.NO_ERROR:const t=o.getResponseJson();Dl("Connection","XHR received:",JSON.stringify(t)),s(t);break;case rl.TIMEOUT:Dl("Connection",'RPC "'+e+'" timed out'),r(new Fl(Ul.DEADLINE_EXCEEDED,"Request time out"));break;case rl.HTTP_ERROR:const n=o.getStatus();if(Dl("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Ul).indexOf(t)>=0?t:Ul.UNKNOWN}(e.status);r(new Fl(t,e.message))}else r(new Fl(Ul.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new Fl(Ul.UNAVAILABLE,"Connection failed."));break;default:Rl()}}finally{Dl("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(i);o.send(t,"POST",a,n,15)}))}_o(e,t,n){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=il(),r=sl(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new ul({})),this.ho(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;const a=i.join("");Dl("Connection","Creating WebChannel: "+a,o);const c=s.createWebChannel(a,o);let u=!1,l=!1;const h=new My({Hr:e=>{l?Dl("Connection","Not sending because WebChannel is closed:",e):(u||(Dl("Connection","Opening WebChannel transport."),c.open(),u=!0),Dl("Connection","WebChannel sending:",e),c.send(e))},Jr:()=>c.close()}),d=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return d(c,ll.EventType.OPEN,(()=>{l||Dl("Connection","WebChannel transport opened.")})),d(c,ll.EventType.CLOSE,(()=>{l||(l=!0,Dl("Connection","WebChannel transport closed"),h.io())})),d(c,ll.EventType.ERROR,(e=>{l||(l=!0,xl("Connection","WebChannel transport errored:",e),h.io(new Fl(Ul.UNAVAILABLE,"The operation could not be completed")))})),d(c,ll.EventType.MESSAGE,(e=>{var t;if(!l){const n=e.data[0];Ll(!!n);const i=n,s=i.error||(null===(t=i[0])||void 0===t?void 0:t.error);if(s){Dl("Connection","WebChannel received error:",s);const e=s.status;let t=function(e){const t=Kf[e];if(void 0!==t)return Yf(t)}(e),n=s.message;void 0===t&&(t=Ul.INTERNAL,n="Unknown error status: "+e+" with message "+s.message),l=!0,h.io(new Fl(t,n)),c.close()}else Dl("Connection","WebChannel received:",n),h.ro(n)}})),d(r,al.STAT_EVENT,(e=>{e.stat===cl.PROXY?Dl("Connection","Detected buffering proxy"):e.stat===cl.NOPROXY&&Dl("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.so()}),0),h}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fy(){return"undefined"!=typeof window?window:null}function Vy(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(e){return new Ip(e,!0)}class By{constructor(e,t,n=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=t,this.wo=n,this.mo=i,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const t=Math.floor(this.po+this.Ro()),n=Math.max(0,Date.now()-this.To),i=Math.max(0,t-n);i>0&&Dl("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,i,(()=>(this.To=Date.now(),e()))),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,t,n,i,s,r,o,a){this.Hs=e,this.Po=n,this.vo=i,this.Vo=s,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new By(e,t)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,(()=>this.$o())))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,4!==e?this.xo.reset():t&&t.code===Ul.RESOURCE_EXHAUSTED?(Nl(t.toString()),Nl("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):t&&t.code===Ul.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.So===t&&this.Go(e,n)}),(t=>{e((()=>{const e=new Fl(Ul.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Qo(e)}))}))}Go(e,t){const n=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((e=>{n((()=>this.Qo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Mo(){this.state=5,this.xo.Ao((async()=>{this.state=0,this.start()}))}Qo(e){return Dl("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget((()=>this.So===e?t():(Dl("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class $y extends jy{constructor(e,t,n,i,s,r){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,r),this.It=s}jo(e,t){return this.Vo._o("Listen",e,t)}onMessage(e){this.xo.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const i=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Rl()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],r=function(e,t){return e.gt?(Ll(void 0===t||"string"==typeof t),Hh.fromBase64String(t||"")):(Ll(void 0===t||t instanceof Uint8Array),Hh.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?Ul.UNKNOWN:Yf(e.code);return new Fl(t,e.message||"")}(o);n=new mp(i,s,r,a||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const s=Np(e,i.document.name),r=kp(i.document.updateTime),o=new Sd({mapValue:{fields:i.document.fields}}),a=Ad.newFoundDocument(s,r,o),c=i.targetIds||[],u=i.removedTargetIds||[];n=new fp(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const s=Np(e,i.document),r=i.readTime?kp(i.readTime):th.min(),o=Ad.newNoDocument(s,r),a=i.removedTargetIds||[];n=new fp([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const s=Np(e,i.document),r=i.removedTargetIds||[];n=new fp([],r,s,null)}else{if(!("filter"in t))return Rl();{t.filter;const e=t.filter;e.targetId;const i=e.count||0,s=new zf(i),r=e.targetId;n=new pp(r,s)}}return n}(this.It,e),n=function(e){if(!("targetChange"in e))return th.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?th.min():t.readTime?kp(t.readTime):th.min()}(e);return this.listener.Wo(t,n)}zo(e){const t={};t.database=Rp(this.It),t.addTarget=function(e,t){let n;const i=t.target;return n=Od(i)?{documents:Vp(e,i)}:{query:qp(e,i)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=Ep(e,t.resumeToken):t.snapshotVersion.compareTo(th.min())>0&&(n.readTime=Tp(e,t.snapshotVersion.toTimestamp())),n}(this.It,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Rl()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.It,e);n&&(t.labels=n),this.Bo(t)}Ho(e){const t={};t.database=Rp(this.It),t.removeTarget=e,this.Bo(t)}}class Gy extends jy{constructor(e,t,n,i,s,r){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,r),this.It=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,t){return this.Vo._o("Write",e,t)}onMessage(e){if(Ll(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const t=function(e,t){return e&&e.length>0?(Ll(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?kp(e.updateTime):kp(t);return n.isEqual(th.min())&&(n=kp(t)),new Nf(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=kp(e.commitTime);return this.listener.Zo(n,t)}return Ll(!e.writeResults||0===e.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Rp(this.It),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Up(this.It,e)))};this.Bo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.Vo=n,this.It=i,this.nu=!1}su(){if(this.nu)throw new Fl(Ul.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.Vo.co(e,t,n,i,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Ul.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Fl(Ul.UNKNOWN,e.toString())}))}fo(e,t,n,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,r])=>this.Vo.fo(e,t,n,s,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Ul.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Fl(Ul.UNKNOWN,e.toString())}))}terminate(){this.nu=!0}}class zy{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Nl(t),this.ou=!1):Dl("OnlineStateTracker",t)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.qr((e=>{n.enqueueAndForget((async()=>{nv(this)&&(Dl("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Ml(e);t._u.add(4),await Qy(t),t.gu.set("Unknown"),t._u.delete(4),await Wy(t)}(this))}))})),this.gu=new zy(n,i)}}async function Wy(e){if(nv(e))for(const t of e.wu)await t(!0)}async function Qy(e){for(const t of e.wu)await t(!1)}function Yy(e,t){const n=Ml(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),tv(n)?ev(n):_v(n).ko()&&Jy(n,t))}function Xy(e,t){const n=Ml(e),i=_v(n);n.du.delete(t),i.ko()&&Zy(n,t),0===n.du.size&&(i.ko()?i.Fo():nv(n)&&n.gu.set("Unknown"))}function Jy(e,t){e.yu.Ot(t.targetId),_v(e).zo(t)}function Zy(e,t){e.yu.Ot(t),_v(e).Ho(t)}function ev(e){e.yu=new yp({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),se:t=>e.du.get(t)||null}),_v(e).start(),e.gu.uu()}function tv(e){return nv(e)&&!_v(e).No()&&e.du.size>0}function nv(e){return 0===Ml(e)._u.size}function iv(e){e.yu=void 0}async function sv(e){e.du.forEach(((t,n)=>{Jy(e,t)}))}async function rv(e,t){iv(e),tv(e)?(e.gu.hu(t),ev(e)):e.gu.set("Unknown")}async function ov(e,t,n){if(e.gu.set("Online"),t instanceof mp&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const i of t.targetIds)e.du.has(i)&&(await e.remoteSyncer.rejectListen(i,n),e.du.delete(i),e.yu.removeTarget(i))}(e,t)}catch(n){Dl("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await av(e,n)}else if(t instanceof fp?e.yu.Gt(t):t instanceof pp?e.yu.Yt(t):e.yu.Wt(t),!n.isEqual(th.min()))try{const t=await fy(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.yu.te(t);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const s=e.du.get(i);s&&e.du.set(i,s.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.du.get(t);if(!n)return;e.du.set(t,n.withResumeToken(Hh.EMPTY_BYTE_STRING,n.snapshotVersion)),Zy(e,t);const i=new Dm(n.target,t,1,n.sequenceNumber);Jy(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Dl("RemoteStore","Failed to raise snapshot:",t),await av(e,t)}}async function av(e,t,n){if(!kh(t))throw t;e._u.add(1),await Qy(e),e.gu.set("Offline"),n||(n=()=>fy(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Dl("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await Wy(e)}))}function cv(e,t){return t().catch((n=>av(e,n,t)))}async function uv(e){const t=Ml(e),n=bv(t);let i=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;lv(t);)try{const e=await my(t.localStore,i);if(null===e){0===t.fu.length&&n.Fo();break}i=e.batchId,hv(t,e)}catch(e){await av(t,e)}dv(t)&&fv(t)}function lv(e){return nv(e)&&e.fu.length<10}function hv(e,t){e.fu.push(t);const n=bv(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function dv(e){return nv(e)&&!bv(e).No()&&e.fu.length>0}function fv(e){bv(e).start()}async function pv(e){bv(e).eu()}async function mv(e){const t=bv(e);for(const n of e.fu)t.Xo(n.mutations)}async function gv(e,t,n){const i=e.fu.shift(),s=Am.from(i,t,n);await cv(e,(()=>e.remoteSyncer.applySuccessfulWrite(s))),await uv(e)}async function yv(e,t){t&&bv(e).Yo&&await async function(e,t){if(Qf(n=t.code)&&n!==Ul.ABORTED){const n=e.fu.shift();bv(e).Oo(),await cv(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await uv(e)}var n}(e,t),dv(e)&&fv(e)}async function vv(e,t){const n=Ml(e);n.asyncQueue.verifyOperationInProgress(),Dl("RemoteStore","RemoteStore received new credentials");const i=nv(n);n._u.add(3),await Qy(n),i&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await Wy(n)}async function wv(e,t){const n=Ml(e);t?(n._u.delete(2),await Wy(n)):t||(n._u.add(2),await Qy(n),n.gu.set("Unknown"))}function _v(e){return e.pu||(e.pu=function(e,t,n){const i=Ml(e);return i.su(),new $y(t,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,n)}(e.datastore,e.asyncQueue,{Yr:sv.bind(null,e),Zr:rv.bind(null,e),Wo:ov.bind(null,e)}),e.wu.push((async t=>{t?(e.pu.Oo(),tv(e)?ev(e):e.gu.set("Unknown")):(await e.pu.stop(),iv(e))}))),e.pu}function bv(e){return e.Iu||(e.Iu=function(e,t,n){const i=Ml(e);return i.su(),new Gy(t,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,n)}(e.datastore,e.asyncQueue,{Yr:pv.bind(null,e),Zr:yv.bind(null,e),tu:mv.bind(null,e),Zo:gv.bind(null,e)}),e.wu.push((async t=>{t?(e.Iu.Oo(),await uv(e)):(await e.Iu.stop(),e.fu.length>0&&(Dl("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))}))),e.Iu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Iv{constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new Vl,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,i,s){const r=Date.now()+n,o=new Iv(e,t,r,i,s);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Fl(Ul.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tv(e,t){if(Nl("AsyncQueue",`${t}: ${e}`),kh(e))return new Fl(Ul.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e){this.comparator=e?(t,n)=>e(t,n)||oh.comparator(t.key,n.key):(e,t)=>oh.comparator(e.key,t.key),this.keyedMap=tp(),this.sortedSet=new Uh(this.comparator)}static emptySet(e){return new Ev(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ev))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(!e.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Ev;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(){this.Tu=new Uh(oh.comparator)}track(e){const t=e.doc.key,n=this.Tu.get(t);n?0!==e.type&&3===n.type?this.Tu=this.Tu.insert(t,e):3===e.type&&1!==n.type?this.Tu=this.Tu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Tu=this.Tu.remove(t):1===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):Rl():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class kv{constructor(e,t,n,i,s,r,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new kv(e,t,Ev.emptySet(t),s,n,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&af(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(){this.Au=void 0,this.listeners=[]}}class Cv{constructor(){this.queries=new Xf((e=>cf(e)),af),this.onlineState="Unknown",this.Ru=new Set}}async function Dv(e,t){const n=Ml(e),i=t.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new Av),s)try{r.Au=await n.onListen(i)}catch(e){const n=Tv(e,`Initialization of query '${uf(t.query)}' failed`);return void t.onError(n)}n.queries.set(i,r),r.listeners.push(t),t.bu(n.onlineState),r.Au&&t.Pu(r.Au)&&Rv(n)}async function Nv(e,t){const n=Ml(e),i=t.query;let s=!1;const r=n.queries.get(i);if(r){const e=r.listeners.indexOf(t);e>=0&&(r.listeners.splice(e,1),s=0===r.listeners.length)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function xv(e,t){const n=Ml(e);let i=!1;for(const e of t){const t=e.query,s=n.queries.get(t);if(s){for(const t of s.listeners)t.Pu(e)&&(i=!0);s.Au=e}}i&&Rv(n)}function Ov(e,t,n){const i=Ml(e),s=i.queries.get(t);if(s)for(const e of s.listeners)e.onError(n);i.queries.delete(t)}function Rv(e){e.Ru.forEach((e=>{e.next()}))}class Lv{constructor(e,t,n){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new kv(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return!(this.options.Nu&&n||e.docs.isEmpty()&&"Offline"!==t)}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}xu(e){e=kv.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Vu=!0,this.vu.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e,t){this.payload=e,this.byteLength=t}ku(){return"metadata"in this.payload}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(e){this.It=e}Ji(e){return Np(this.It,e)}Yi(e){return e.metadata.exists?Mp(this.It,e.document,!1):Ad.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return kp(e)}}class Uv{constructor(e,t,n){this.Mu=e,this.localStore=t,this.It=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Fv(e)}Ou(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.payload.namedQuery)this.queries.push(e.payload.namedQuery);else if(e.payload.documentMetadata){this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t;const n=ih.fromString(e.payload.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Fu(e){const t=new Map,n=new Mv(this.It);for(const i of e)if(i.metadata.queries){const e=n.Ji(i.metadata.name);for(const n of i.metadata.queries){const i=(t.get(n)||cp()).add(e);t.set(n,i)}}return t}async complete(){const e=await async function(e,t,n,i){const s=Ml(e);let r=cp(),o=Zf();for(const e of n){const n=t.Ji(e.metadata.name);e.document&&(r=r.add(n));const i=t.Yi(e);i.setReadTime(t.Xi(e.metadata.readTime)),o=o.insert(n,i)}const a=s.Gi.newChangeBuffer({trackRemovals:!0}),c=await gy(s,function(e){return rf(Jd(ih.fromString(`__bundle__/docs/${e}`)))}(i));return s.persistence.runTransaction("Apply bundle documents","readwrite",(e=>py(e,a,o).next((t=>(a.apply(e),t))).next((t=>s.Cs.removeMatchingKeysForTargetId(e,c.targetId).next((()=>s.Cs.addMatchingKeys(e,r,c.targetId))).next((()=>s.localDocuments.getLocalViewOfDocuments(e,t.Wi,t.zi))).next((()=>t.Wi))))))}(this.localStore,new Mv(this.It),this.documents,this.Mu.id),t=this.Fu(this.documents);for(const e of this.queries)await Iy(this.localStore,e,t.get(e.name));return this.progress.taskState="Success",{progress:this.progress,$u:this.collectionGroups,Bu:e}}}function Fv(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e){this.key=e}}class qv{constructor(e){this.key=e}}class Bv{constructor(e,t){this.query=e,this.Lu=t,this.Uu=null,this.current=!1,this.qu=cp(),this.mutatedKeys=cp(),this.Ku=df(e),this.Gu=new Ev(this.Ku)}get Qu(){return this.Lu}ju(e,t){const n=t?t.Wu:new Sv,i=t?t.Gu:this.Gu;let s=t?t.mutatedKeys:this.mutatedKeys,r=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,c="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((e,t)=>{const u=i.get(e),l=lf(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.zu(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Ku(l,a)>0||c&&this.Ku(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(r=r.add(l),s=d?s.add(e):s.delete(e)):(r=r.delete(e),s=s.delete(e)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const e="F"===this.query.limitType?r.last():r.first();r=r.delete(e.key),s=s.delete(e.key),n.track({type:1,doc:e})}return{Gu:r,Wu:n,$i:o,mutatedKeys:s}}zu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.Wu.Eu();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Rl()}};return n(e)-n(t)}(e.type,t.type)||this.Ku(e.doc,t.doc))),this.Hu(n);const r=t?this.Ju():[],o=0===this.qu.size&&this.current?1:0,a=o!==this.Uu;return this.Uu=o,0!==s.length||a?{snapshot:new kv(this.query,e.Gu,i,s,e.mutatedKeys,0===o,a,!1),Yu:r}:{Yu:r}}bu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new Sv,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach((e=>this.Lu=this.Lu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Lu=this.Lu.delete(e))),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.qu;this.qu=cp(),this.Gu.forEach((e=>{this.Xu(e.key)&&(this.qu=this.qu.add(e.key))}));const t=[];return e.forEach((e=>{this.qu.has(e)||t.push(new qv(e))})),this.qu.forEach((n=>{e.has(n)||t.push(new Vv(n))})),t}Zu(e){this.Lu=e.Hi,this.qu=cp();const t=this.ju(e.documents);return this.applyChanges(t,!0)}tc(){return kv.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,0===this.Uu)}}class jv{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class $v{constructor(e){this.key=e,this.ec=!1}}class Gv{constructor(e,t,n,i,s,r){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=r,this.nc={},this.sc=new Xf((e=>cf(e)),af),this.ic=new Map,this.rc=new Set,this.oc=new Uh(oh.comparator),this.uc=new Map,this.cc=new zg,this.ac={},this.hc=new Map,this.lc=Ig.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return!0===this.fc}}async function Hv(e,t){const n=yw(e);let i,s;const r=n.sc.get(t);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.tc();else{const e=await gy(n.localStore,rf(t));n.isPrimaryClient&&Yy(n.remoteStore,e);const r=n.sharedClientState.addLocalQueryTarget(e.targetId);i=e.targetId,s=await zv(n,t,i,"current"===r)}return s}async function zv(e,t,n,i){e.dc=(t,n,i)=>async function(e,t,n,i){let s=t.view.ju(n);s.$i&&(s=await vy(e.localStore,t.query,!1).then((({documents:e})=>t.view.ju(e,s))));const r=i&&i.targetChanges.get(t.targetId),o=t.view.applyChanges(s,e.isPrimaryClient,r);return iw(e,t.targetId,o.Yu),o.snapshot}(e,t,n,i);const s=await vy(e.localStore,t,!0),r=new Bv(t,s.Hi),o=r.ju(s.documents),a=dp.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==e.onlineState),c=r.applyChanges(o,e.isPrimaryClient,a);iw(e,n,c.Yu);const u=new jv(t,n,r);return e.sc.set(t,u),e.ic.has(n)?e.ic.get(n).push(t):e.ic.set(n,[t]),c.snapshot}async function Kv(e,t){const n=Ml(e),i=n.sc.get(t),s=n.ic.get(i.targetId);if(s.length>1)return n.ic.set(i.targetId,s.filter((e=>!af(e,t)))),void n.sc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await yy(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),Xy(n.remoteStore,i.targetId),tw(n,i.targetId)})).catch(_h)):(tw(n,i.targetId),await yy(n.localStore,i.targetId,!0))}async function Wv(e,t){const n=Ml(e);try{const e=await function(e,t){const n=Ml(e),i=t.snapshotVersion;let s=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const r=n.Gi.newChangeBuffer({trackRemovals:!0});s=n.Ui;const o=[];t.targetChanges.forEach(((r,a)=>{const c=s.get(a);if(!c)return;o.push(n.Cs.removeMatchingKeys(e,r.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(e,r.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(Hh.EMPTY_BYTE_STRING,th.min()).withLastLimboFreeSnapshotVersion(th.min()):r.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(r.resumeToken,i)),s=s.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(c,u,r)&&o.push(n.Cs.updateTargetData(e,u))}));let a=Zf(),c=cp();if(t.documentUpdates.forEach((i=>{t.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,i))})),o.push(py(e,r,t.documentUpdates).next((e=>{a=e.Wi,c=e.zi}))),!i.isEqual(th.min())){const t=n.Cs.getLastRemoteSnapshotVersion(e).next((t=>n.Cs.setTargetsMetadata(e,e.currentSequenceNumber,i)));o.push(t)}return bh.waitFor(o).next((()=>r.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.Ui=s,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const i=n.uc.get(t);i&&(Ll(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?i.ec=!0:e.modifiedDocuments.size>0?Ll(i.ec):e.removedDocuments.size>0&&(Ll(i.ec),i.ec=!1))})),await ow(n,e,t)}catch(e){await _h(e)}}function Qv(e,t,n){const i=Ml(e);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const e=[];i.sc.forEach(((n,i)=>{const s=i.view.bu(t);s.snapshot&&e.push(s.snapshot)})),function(e,t){const n=Ml(e);n.onlineState=t;let i=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.bu(t)&&(i=!0)})),i&&Rv(n)}(i.eventManager,t),e.length&&i.nc.Wo(e),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function Yv(e,t,n){const i=Ml(e);i.sharedClientState.updateQueryState(t,"rejected",n);const s=i.uc.get(t),r=s&&s.key;if(r){let e=new Uh(oh.comparator);e=e.insert(r,Ad.newNoDocument(r,th.min()));const n=cp().add(r),s=new hp(th.min(),new Map,new qh(Xl),e,n);await Wv(i,s),i.oc=i.oc.remove(r),i.uc.delete(t),rw(i)}else await yy(i.localStore,t,!1).then((()=>tw(i,t,n))).catch(_h)}async function Xv(e,t){const n=Ml(e),i=t.batch.batchId;try{const e=await function(e,t){const n=Ml(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const i=t.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,i){const s=n.batch,r=s.keys();let o=bh.resolve();return r.forEach((e=>{o=o.next((()=>i.getEntry(t,e))).next((t=>{const r=n.docVersions.get(e);Ll(null!==r),t.version.compareTo(r)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),i.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,s)))}(n,e,t,s).next((()=>s.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=cp();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,i)))}))}(n.localStore,t);ew(n,i,null),Zv(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await ow(n,e)}catch(e){await _h(e)}}async function Jv(e,t,n){const i=Ml(e);try{const e=await function(e,t){const n=Ml(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let i;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(Ll(null!==t),i=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,i))).next((()=>n.localDocuments.getDocuments(e,i)))}))}(i.localStore,t);ew(i,t,n),Zv(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await ow(i,e)}catch(e){await _h(e)}}function Zv(e,t){(e.hc.get(t)||[]).forEach((e=>{e.resolve()})),e.hc.delete(t)}function ew(e,t,n){const i=Ml(e);let s=i.ac[i.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),i.ac[i.currentUser.toKey()]=s}}function tw(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e.ic.get(t))e.sc.delete(i),n&&e.nc._c(i,n);e.ic.delete(t),e.isPrimaryClient&&e.cc.ls(t).forEach((t=>{e.cc.containsKey(t)||nw(e,t)}))}function nw(e,t){e.rc.delete(t.path.canonicalString());const n=e.oc.get(t);null!==n&&(Xy(e.remoteStore,n),e.oc=e.oc.remove(t),e.uc.delete(n),rw(e))}function iw(e,t,n){for(const i of n)i instanceof Vv?(e.cc.addReference(i.key,t),sw(e,i)):i instanceof qv?(Dl("SyncEngine","Document no longer in limbo: "+i.key),e.cc.removeReference(i.key,t),e.cc.containsKey(i.key)||nw(e,i.key)):Rl()}function sw(e,t){const n=t.key,i=n.path.canonicalString();e.oc.get(n)||e.rc.has(i)||(Dl("SyncEngine","New document in limbo: "+n),e.rc.add(i),rw(e))}function rw(e){for(;e.rc.size>0&&e.oc.size<e.maxConcurrentLimboResolutions;){const t=e.rc.values().next().value;e.rc.delete(t);const n=new oh(ih.fromString(t)),i=e.lc.next();e.uc.set(i,new $v(n)),e.oc=e.oc.insert(n,i),Yy(e.remoteStore,new Dm(rf(Jd(n.path)),i,2,Rh.at))}}async function ow(e,t,n){const i=Ml(e),s=[],r=[],o=[];i.sc.isEmpty()||(i.sc.forEach(((e,a)=>{o.push(i.dc(a,t,n).then((e=>{if(e){i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),s.push(e);const t=cy.Ci(a.targetId,e);r.push(t)}})))})),await Promise.all(o),i.nc.Wo(s),await async function(e,t){const n=Ml(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>bh.forEach(t,(t=>bh.forEach(t.Si,(i=>n.persistence.referenceDelegate.addReference(e,t.targetId,i))).next((()=>bh.forEach(t.Di,(i=>n.persistence.referenceDelegate.removeReference(e,t.targetId,i)))))))))}catch(e){if(!kh(e))throw e;Dl("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.Ui.get(t),i=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(i);n.Ui=n.Ui.insert(t,s)}}}(i.localStore,r))}async function aw(e,t){const n=Ml(e);if(!n.currentUser.isEqual(t)){Dl("SyncEngine","User change. New user:",t.toKey());const e=await dy(n.localStore,t);n.currentUser=t,function(e,t){e.hc.forEach((e=>{e.forEach((e=>{e.reject(new Fl(Ul.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),e.hc.clear()}(n),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await ow(n,e.ji)}}function cw(e,t){const n=Ml(e),i=n.uc.get(t);if(i&&i.ec)return cp().add(i.key);{let e=cp();const i=n.ic.get(t);if(!i)return e;for(const t of i){const i=n.sc.get(t);e=e.unionWith(i.view.Qu)}return e}}async function uw(e,t){const n=Ml(e),i=await vy(n.localStore,t.query,!0),s=t.view.Zu(i);return n.isPrimaryClient&&iw(n,t.targetId,s.Yu),s}async function lw(e,t){const n=Ml(e);return _y(n.localStore,t).then((e=>ow(n,e)))}async function hw(e,t,n,i){const s=Ml(e),r=await function(e,t){const n=Ml(e),i=Ml(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",(e=>i.Tn(e,t).next((t=>t?n.localDocuments.getDocuments(e,t):bh.resolve(null)))))}(s.localStore,t);null!==r?("pending"===n?await uv(s.remoteStore):"acknowledged"===n||"rejected"===n?(ew(s,t,i||null),Zv(s,t),function(e,t){Ml(Ml(e).mutationQueue).An(t)}(s.localStore,t)):Rl(),await ow(s,r)):Dl("SyncEngine","Cannot apply mutation batch with id: "+t)}async function dw(e,t,n){const i=Ml(e),s=[],r=[];for(const e of t){let t;const n=i.ic.get(e);if(n&&0!==n.length){t=await gy(i.localStore,rf(n[0]));for(const e of n){const t=i.sc.get(e),n=await uw(i,t);n.snapshot&&r.push(n.snapshot)}}else{const n=await wy(i.localStore,e);t=await gy(i.localStore,n),await zv(i,fw(n),e,!1)}s.push(t)}return i.nc.Wo(r),s}function fw(e){return Xd(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function pw(e){const t=Ml(e);return Ml(Ml(t.localStore).persistence).vi()}async function mw(e,t,n,i){const s=Ml(e);if(s.fc)return void Dl("SyncEngine","Ignoring unexpected query state notification.");const r=s.ic.get(t);if(r&&r.length>0)switch(n){case"current":case"not-current":{const e=await _y(s.localStore,hf(r[0])),i=hp.createSynthesizedRemoteEventForCurrentChange(t,"current"===n);await ow(s,e,i);break}case"rejected":await yy(s.localStore,t,!0),tw(s,t,i);break;default:Rl()}}async function gw(e,t,n){const i=yw(e);if(i.fc){for(const e of t){if(i.ic.has(e)){Dl("SyncEngine","Adding an already active target "+e);continue}const t=await wy(i.localStore,e),n=await gy(i.localStore,t);await zv(i,fw(t),n.targetId,!1),Yy(i.remoteStore,n)}for(const e of n)i.ic.has(e)&&await yy(i.localStore,e,!1).then((()=>{Xy(i.remoteStore,e),tw(i,e)})).catch(_h)}}function yw(e){const t=Ml(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Wv.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=cw.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Yv.bind(null,t),t.nc.Wo=xv.bind(null,t.eventManager),t.nc._c=Ov.bind(null,t.eventManager),t}function vw(e){const t=Ml(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Xv.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Jv.bind(null,t),t}class ww{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=qy(e.databaseInfo.databaseId),this.sharedClientState=this.mc(e),this.persistence=this.gc(e),await this.persistence.start(),this.localStore=this.yc(e),this.gcScheduler=this.Ic(e,this.localStore),this.indexBackfillerScheduler=this.Tc(e,this.localStore)}Ic(e,t){return null}Tc(e,t){return null}yc(e){return hy(this.persistence,new uy,e.initialUser,this.It)}gc(e){return new Jg(ey.Bs,this.It)}mc(e){return new Oy}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class _w extends ww{constructor(e,t,n){super(),this.Ec=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ec.initialize(this,e),await vw(this.Ec.syncEngine),await uv(this.Ec.remoteStore),await this.persistence.li((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}yc(e){return hy(this.persistence,new uy,e.initialUser,this.It)}Ic(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Dg(n,e.asyncQueue,t)}Tc(e,t){const n=new Oh(t,this.persistence);return new xh(e.asyncQueue,n)}gc(e){const t=ay(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?pg.withCacheSize(this.cacheSizeBytes):pg.DEFAULT;return new sy(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Fy(),Vy(),this.It,this.sharedClientState,!!this.forceOwnership)}mc(e){return new Oy}}class bw extends _w{constructor(e,t){super(e,t,!1),this.Ec=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ec.syncEngine;this.sharedClientState instanceof xy&&(this.sharedClientState.syncEngine={Fr:hw.bind(null,t),$r:mw.bind(null,t),Br:gw.bind(null,t),vi:pw.bind(null,t),Or:lw.bind(null,t)},await this.sharedClientState.start()),await this.persistence.li((async e=>{await async function(e,t){const n=Ml(e);if(yw(n),vw(n),!0===t&&!0!==n.fc){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await dw(n,e.toArray());n.fc=!0,await wv(n.remoteStore,!0);for(const e of t)Yy(n.remoteStore,e)}else if(!1===t&&!1!==n.fc){const e=[];let t=Promise.resolve();n.ic.forEach(((i,s)=>{n.sharedClientState.isLocalQueryTarget(s)?e.push(s):t=t.then((()=>(tw(n,s),yy(n.localStore,s,!0)))),Xy(n.remoteStore,s)})),await t,await dw(n,e),function(e){const t=Ml(e);t.uc.forEach(((e,n)=>{Xy(t.remoteStore,n)})),t.cc.fs(),t.uc=new Map,t.oc=new Uh(oh.comparator)}(n),n.fc=!1,await wv(n.remoteStore,!1)}}(this.Ec.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())}))}mc(e){const t=Fy();if(!xy.C(t))throw new Fl(Ul.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=ay(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new xy(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class Iw{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Qv(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=aw.bind(null,this.syncEngine),await wv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Cv}createDatastore(e){const t=qy(e.databaseInfo.databaseId),n=(i=e.databaseInfo,new Uy(i));var i;return function(e,t,n,i){return new Hy(e,t,n,i)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t,n,i,s,r;return t=this.localStore,n=this.datastore,i=e.asyncQueue,s=e=>Qv(this.syncEngine,e,0),r=Ly.C()?new Ly:new Ry,new Ky(t,n,i,s,r)}createSyncEngine(e,t){return function(e,t,n,i,s,r,o){const a=new Gv(e,t,n,i,s,r);return o&&(a.fc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Ml(e);Dl("RemoteStore","RemoteStore shutting down."),t._u.add(5),await Qy(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const i={value:e.slice(n,n+t),done:!1};return n+=t,i}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ac(this.observer.next,e)}error(e){this.observer.error?this.Ac(this.observer.error,e):Nl("Uncaught Error in snapshot listener:",e)}Rc(){this.muted=!0}Ac(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e,t){this.bc=e,this.It=t,this.metadata=new Vl,this.buffer=new Uint8Array,this.Pc=new TextDecoder("utf-8"),this.vc().then((e=>{e&&e.ku()?this.metadata.resolve(e.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.payload)}`))}),(e=>this.metadata.reject(e)))}close(){return this.bc.cancel()}async getMetadata(){return this.metadata.promise}async wc(){return await this.getMetadata(),this.vc()}async vc(){const e=await this.Vc();if(null===e)return null;const t=this.Pc.decode(e),n=Number(t);isNaN(n)&&this.Sc(`length string (${t}) is not valid number`);const i=await this.Dc(n);return new Pv(JSON.parse(i),e.length+n)}Cc(){return this.buffer.findIndex((e=>e==="{".charCodeAt(0)))}async Vc(){for(;this.Cc()<0&&!await this.xc(););if(0===this.buffer.length)return null;const e=this.Cc();e<0&&this.Sc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Dc(e){for(;this.buffer.length<e;)await this.xc()&&this.Sc("Reached the end of bundle when more is expected.");const t=this.Pc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Sc(e){throw this.bc.cancel(),new Error(`Invalid bundle format: ${e}`)}async xc(){const e=await this.bc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new Fl(Ul.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=Ml(e),i=Rp(n.It)+"/documents",s={documents:t.map((e=>Dp(n.It,e)))},r=await n.fo("BatchGetDocuments",i,s,t.length),o=new Map;r.forEach((e=>{const t=function(e,t){return"found"in t?function(e,t){Ll(!!t.found),t.found.name,t.found.updateTime;const n=Np(e,t.found.name),i=kp(t.found.updateTime),s=new Sd({mapValue:{fields:t.found.fields}});return Ad.newFoundDocument(n,i,s)}(e,t):"missing"in t?function(e,t){Ll(!!t.missing),Ll(!!t.readTime);const n=Np(e,t.missing),i=kp(t.readTime);return Ad.newNoDocument(n,i)}(e,t):Rl()}(n.It,e);o.set(t.key.toString(),t)}));const a=[];return t.forEach((e=>{const t=o.get(e.toString());Ll(!!t),a.push(t)})),a}(this.datastore,e);return t.forEach((e=>this.recordVersion(e))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new Gf(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((e,t)=>{const n=oh.fromPath(t);this.mutations.push(new Hf(n,this.precondition(n)))})),await async function(e,t){const n=Ml(e),i=Rp(n.It)+"/documents",s={writes:t.map((e=>Up(n.It,e)))};await n.co("Commit",i,s)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw Rl();t=th.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new Fl(Ul.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(th.min())?xf.exists(!1):xf.updateTime(t):xf.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(th.min()))throw new Fl(Ul.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return xf.updateTime(t)}return xf.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e,t,n,i,s){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=i,this.deferred=s,this.Nc=n.maxAttempts,this.xo=new By(this.asyncQueue,"transaction_retry")}run(){this.Nc-=1,this.kc()}kc(){this.xo.Ao((async()=>{const e=new kw(this.datastore),t=this.Mc(e);t&&t.then((t=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(t)})).catch((e=>{this.Oc(e)}))))})).catch((e=>{this.Oc(e)}))}))}Mc(e){try{const t=this.updateFunction(e);return!td(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Oc(e){this.Nc>0&&this.Fc(e)?(this.Nc-=1,this.asyncQueue.enqueueAndForget((()=>(this.kc(),Promise.resolve())))):this.deferred.reject(e)}Fc(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||!Qf(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=El.UNAUTHENTICATED,this.clientId=Yl.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Dl("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Dl("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Fl(Ul.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vl;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Tv(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Dw(e,t){e.asyncQueue.verifyOperationInProgress(),Dl("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener((async e=>{i.isEqual(e)||(await dy(t.localStore,e),i=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function Nw(e,t){e.asyncQueue.verifyOperationInProgress();const n=await xw(e);Dl("FirestoreClient","Initializing OnlineComponentProvider");const i=await e.getConfiguration();await t.initialize(n,i),e.setCredentialChangeListener((e=>vv(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>vv(t.remoteStore,n))),e.onlineComponents=t}async function xw(e){return e.offlineComponents||(Dl("FirestoreClient","Using default OfflineComponentProvider"),await Dw(e,new ww)),e.offlineComponents}async function Ow(e){return e.onlineComponents||(Dl("FirestoreClient","Using default OnlineComponentProvider"),await Nw(e,new Iw)),e.onlineComponents}function Rw(e){return xw(e).then((e=>e.persistence))}function Lw(e){return xw(e).then((e=>e.localStore))}function Pw(e){return Ow(e).then((e=>e.remoteStore))}function Mw(e){return Ow(e).then((e=>e.syncEngine))}async function Uw(e){const t=await Ow(e),n=t.eventManager;return n.onListen=Hv.bind(null,t.syncEngine),n.onUnlisten=Kv.bind(null,t.syncEngine),n}function Fw(e,t,n={}){const i=new Vl;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,i,s){const r=new Ew({next:r=>{t.enqueueAndForget((()=>Nv(e,o)));const a=r.docs.has(n);!a&&r.fromCache?s.reject(new Fl(Ul.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&r.fromCache&&i&&"server"===i.source?s.reject(new Fl(Ul.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(r)},error:e=>s.reject(e)}),o=new Lv(Jd(n.path),r,{includeMetadataChanges:!0,Nu:!0});return Dv(e,o)}(await Uw(e),e.asyncQueue,t,n,i))),i.promise}function Vw(e,t,n={}){const i=new Vl;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,i,s){const r=new Ew({next:n=>{t.enqueueAndForget((()=>Nv(e,o))),n.fromCache&&"server"===i.source?s.reject(new Fl(Ul.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:e=>s.reject(e)}),o=new Lv(n,r,{includeMetadataChanges:!0,Nu:!0});return Dv(e,o)}(await Uw(e),e.asyncQueue,t,n,i))),i.promise}function qw(e,t,n,i){const s=function(e,t){let n;return n="string"==typeof e?(new TextEncoder).encode(e):e,function(e,t){return new Sw(e,t)}(function(e,t){if(e instanceof Uint8Array)return Tw(e,t);if(e instanceof ArrayBuffer)return Tw(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}(n,qy(t));e.asyncQueue.enqueueAndForget((async()=>{!function(e,t,n){const i=Ml(e);(async function(e,t,n){try{const i=await t.getMetadata();if(await function(e,t){const n=Ml(e),i=kp(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(e=>n.Ns.getBundleMetadata(e,t.id))).then((e=>!!e&&e.createTime.compareTo(i)>=0))}(e.localStore,i))return await t.close(),n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(i)),Promise.resolve(new Set);n._updateProgress(Fv(i));const s=new Uv(i,e.localStore,t.It);let r=await t.wc();for(;r;){const e=await s.Ou(r);e&&n._updateProgress(e),r=await t.wc()}const o=await s.complete();return await ow(e,o.Bu,void 0),await function(e,t){const n=Ml(e);return n.persistence.runTransaction("Save bundle","readwrite",(e=>n.Ns.saveBundleMetadata(e,t)))}(e.localStore,i),n._completeWith(o.progress),Promise.resolve(o.$u)}catch(e){return xl("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}})(i,t,n).then((e=>{i.sharedClientState.notifyBundleLoaded(e)}))}(await Mw(e),s,i)}))}const Bw=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(e,t,n){if(!n)throw new Fl(Ul.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function $w(e,t,n,i){if(!0===t&&!0===i)throw new Fl(Ul.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Gw(e){if(!oh.isDocumentKey(e))throw new Fl(Ul.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Hw(e){if(oh.isDocumentKey(e))throw new Fl(Ul.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function zw(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Rl()}function Kw(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Fl(Ul.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=zw(e);throw new Fl(Ul.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function Ww(e,t){if(t<=0)throw new Fl(Ul.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Fl(Ul.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Fl(Ul.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,$w("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qw({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Fl(Ul.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Fl(Ul.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qw(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Bl;switch(e.type){case"gapi":const t=e.client;return new Hl(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Fl(Ul.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Bw.get(e);t&&(Dl("ComponentProvider","Removing Datastore"),Bw.delete(e),t.terminate())}(this),Promise.resolve()}}function Xw(e,t,n,i={}){var s;const r=(e=Kw(e,Yw))._getSettings();if("firestore.googleapis.com"!==r.host&&r.host!==t&&xl("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${n}`,ssl:!1})),i.mockUserToken){let t,n;if("string"==typeof i.mockUserToken)t=i.mockUserToken,n=El.MOCK_USER;else{t=Zn(i.mockUserToken,null===(s=e._app)||void 0===s?void 0:s.options.projectId);const r=i.mockUserToken.sub||i.mockUserToken.user_id;if(!r)throw new Fl(Ul.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new El(r)}e._authCredentials=new jl(new ql(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new e_(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Jw(this.firestore,e,this._key)}}class Zw{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Zw(this.firestore,e,this._query)}}class e_ extends Zw{constructor(e,t,n){super(e,t,Jd(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Jw(this.firestore,null,new oh(e))}withConverter(e){return new e_(this.firestore,e,this._path)}}function t_(e,t,...n){if(e=yi(e),jw("collection","path",t),e instanceof Yw){const i=ih.fromString(t,...n);return Hw(i),new e_(e,null,i)}{if(!(e instanceof Jw||e instanceof e_))throw new Fl(Ul.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(ih.fromString(t,...n));return Hw(i),new e_(e.firestore,null,i)}}function n_(e,t){if(e=Kw(e,Yw),jw("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new Fl(Ul.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Zw(e,null,function(e){return new Yd(ih.emptyPath(),e)}(t))}function i_(e,t,...n){if(e=yi(e),1===arguments.length&&(t=Yl.R()),jw("doc","path",t),e instanceof Yw){const i=ih.fromString(t,...n);return Gw(i),new Jw(e,null,new oh(i))}{if(!(e instanceof Jw||e instanceof e_))throw new Fl(Ul.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(ih.fromString(t,...n));return Gw(i),new Jw(e.firestore,e instanceof e_?e.converter:null,new oh(i))}}function s_(e,t){return e=yi(e),t=yi(t),(e instanceof Jw||e instanceof e_)&&(t instanceof Jw||t instanceof e_)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function r_(e,t){return e=yi(e),t=yi(t),e instanceof Zw&&t instanceof Zw&&e.firestore===t.firestore&&af(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class o_{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new By(this,"async_queue_retry"),this.jc=()=>{const e=Vy();e&&Dl("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.bo()};const e=Vy();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Wc(),this.zc(e)}enterRestrictedMode(e){if(!this.Lc){this.Lc=!0,this.Gc=e||!1;const t=Vy();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Wc(),this.Lc)return new Promise((()=>{}));const t=new Vl;return this.zc((()=>this.Lc&&this.Gc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Bc.push(e),this.Hc())))}async Hc(){if(0!==this.Bc.length){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(e){if(!kh(e))throw e;Dl("AsyncQueue","Operation failed with retryable error: "+e)}this.Bc.length>0&&this.xo.Ao((()=>this.Hc()))}}zc(e){const t=this.$c.then((()=>(this.Kc=!0,e().catch((e=>{this.qc=e,this.Kc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e);throw Nl("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Kc=!1,e))))));return this.$c=t,t}enqueueAfterDelay(e,t,n){this.Wc(),this.Qc.indexOf(e)>-1&&(t=0);const i=Iv.createAndSchedule(this,e,t,n,(e=>this.Jc(e)));return this.Uc.push(i),i}Wc(){this.qc&&Rl()}verifyOperationInProgress(){}async Yc(){let e;do{e=this.$c,await e}while(e!==this.$c)}Xc(e){for(const t of this.Uc)if(t.timerId===e)return!0;return!1}Zc(e){return this.Yc().then((()=>{this.Uc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Uc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Yc()}))}ta(e){this.Qc.push(e)}Jc(e){const t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}function a_(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const e of["next","error","complete"])if(e in n&&"function"==typeof n[e])return!0;return!1}(e)}class c_{constructor(){this._progressObserver={},this._taskCompletionResolver=new Vl,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_=-1;class l_ extends Yw{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new o_,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||p_(this),this._firestoreClient.terminate()}}function h_(e,t,n){n||(n="(default)");const i=Zi(e,"firestore");if(i.isInitialized(n)){const e=i.getImmediate({identifier:n});if(ui(i.getOptions(n),t))return e;throw new Fl(Ul.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(void 0!==t.cacheSizeBytes&&-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Fl(Ul.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return i.initialize({options:t,instanceIdentifier:n})}function d_(e,t){const n="string"==typeof e?e:t||"(default)";return Zi("object"==typeof e?e:is(),"firestore").getImmediate({identifier:n})}function f_(e){return e._firestoreClient||p_(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function p_(e){var t;const n=e._freezeSettings(),i=function(e,t,n,i){return new Zh(e,t,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Cw(e._authCredentials,e._appCheckCredentials,e._queue,i)}function m_(e,t){S_(e=Kw(e,l_));const n=f_(e),i=e._freezeSettings(),s=new Iw;return y_(n,s,new _w(s,i.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function g_(e){S_(e=Kw(e,l_));const t=f_(e),n=e._freezeSettings(),i=new Iw;return y_(t,i,new bw(i,n.cacheSizeBytes))}function y_(e,t,n){const i=new Vl;return e.asyncQueue.enqueue((async()=>{try{await Dw(e,n),await Nw(e,t),i.resolve()}catch(e){const t=e;if(!function(e){return"FirebaseError"===e.name?e.code===Ul.FAILED_PRECONDITION||e.code===Ul.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||(22===e.code||20===e.code||11===e.code)}(t))throw t;xl("Error enabling offline persistence. Falling back to persistence disabled: "+t),i.reject(t)}})).then((()=>i.promise))}function v_(e){if(e._initialized&&!e._terminated)throw new Fl(Ul.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new Vl;return e._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(e){if(!Th.C())return Promise.resolve();const t=e+"main";await Th.delete(t)}(ay(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}})),t.promise}function w_(e){return function(e){const t=new Vl;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t){const n=Ml(e);nv(n.remoteStore)||Dl("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=Ml(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(e=>t.mutationQueue.getHighestUnacknowledgedBatchId(e)))}(n.localStore);if(-1===e)return void t.resolve();const i=n.hc.get(e)||[];i.push(t),n.hc.set(e,i)}catch(e){const n=Tv(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}(await Mw(e),t))),t.promise}(f_(e=Kw(e,l_)))}function __(e){return function(e){return e.asyncQueue.enqueue((async()=>{const t=await Rw(e),n=await Pw(e);return t.setNetworkEnabled(!0),function(e){const t=Ml(e);return t._u.delete(0),Wy(t)}(n)}))}(f_(e=Kw(e,l_)))}function b_(e){return function(e){return e.asyncQueue.enqueue((async()=>{const t=await Rw(e),n=await Pw(e);return t.setNetworkEnabled(!1),async function(e){const t=Ml(e);t._u.add(0),await Qy(t),t.gu.set("Offline")}(n)}))}(f_(e=Kw(e,l_)))}function I_(e){return es(e.app,"firestore",e._databaseId.database),e._delete()}function T_(e,t){const n=f_(e=Kw(e,l_)),i=new c_;return qw(n,e._databaseId,t,i),i}function E_(e,t){return function(e,t){return e.asyncQueue.enqueue((async()=>function(e,t){const n=Ml(e);return n.persistence.runTransaction("Get named query","readonly",(e=>n.Ns.getNamedQuery(e,t)))}(await Lw(e),t)))}(f_(e=Kw(e,l_)),t).then((t=>t?new Zw(e,null,t.query):null))}function S_(e){if(e._initialized||e._terminated)throw new Fl(Ul.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Fl(Ul.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rh(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function A_(){return new k_("__name__")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e){this._byteString=e}static fromBase64String(e){try{return new C_(Hh.fromBase64String(e))}catch(e){throw new Fl(Ul.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new C_(Hh.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Fl(Ul.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Fl(Ul.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Xl(this._lat,e._lat)||Xl(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_=/^__.*__$/;class O_{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new qf(e,this.data,this.fieldMask,t,this.fieldTransforms):new Vf(e,this.data,t,this.fieldTransforms)}}class R_{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new qf(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function L_(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Rl()}}class P_{constructor(e,t,n,i,s,r){this.settings=e,this.databaseId=t,this.It=n,this.ignoreUndefinedProperties=i,void 0===s&&this.ea(),this.fieldTransforms=s||[],this.fieldMask=r||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(e){return new P_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.sa({path:n,ra:!1});return i.oa(e),i}ua(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.sa({path:n,ra:!1});return i.ea(),i}ca(e){return this.sa({path:void 0,ra:!0})}aa(e){return tb(e,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}ea(){if(this.path)for(let e=0;e<this.path.length;e++)this.oa(this.path.get(e))}oa(e){if(0===e.length)throw this.aa("Document fields must not be empty");if(L_(this.na)&&x_.test(e))throw this.aa('Document fields cannot begin and end with "__"')}}class M_{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.It=n||qy(e)}fa(e,t,n,i=!1){return new P_({na:e,methodName:t,la:n,path:rh.emptyPath(),ra:!1,ha:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function U_(e){const t=e._freezeSettings(),n=qy(e._databaseId);return new M_(e._databaseId,!!t.ignoreUndefinedProperties,n)}function F_(e,t,n,i,s,r={}){const o=e.fa(r.merge||r.mergeFields?2:0,t,n,s);X_("Data must be an object, but it was:",o,i);const a=Q_(i,o);let c,u;if(r.merge)c=new $h(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const e=[];for(const i of r.mergeFields){const s=J_(t,i,n);if(!o.contains(s))throw new Fl(Ul.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);nb(e,s)||e.push(s)}c=new $h(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new O_(new Sd(a),c,u)}class V_ extends D_{_toFieldTransform(e){if(2!==e.na)throw 1===e.na?e.aa(`${this._methodName}() can only appear at the top level of your update data`):e.aa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof V_}}function q_(e,t,n){return new P_({na:3,la:t.settings.la,methodName:e._methodName,ra:n},t.databaseId,t.It,t.ignoreUndefinedProperties)}class B_ extends D_{_toFieldTransform(e){return new Df(e.path,new bf)}isEqual(e){return e instanceof B_}}class j_ extends D_{constructor(e,t){super(e),this.da=t}_toFieldTransform(e){const t=q_(this,e,!0),n=this.da.map((e=>W_(e,t))),i=new If(n);return new Df(e.path,i)}isEqual(e){return this===e}}class $_ extends D_{constructor(e,t){super(e),this.da=t}_toFieldTransform(e){const t=q_(this,e,!0),n=this.da.map((e=>W_(e,t))),i=new Ef(n);return new Df(e.path,i)}isEqual(e){return this===e}}class G_ extends D_{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=new kf(e.It,gf(e.It,this._a));return new Df(e.path,t)}isEqual(e){return this===e}}function H_(e,t,n,i){const s=e.fa(1,t,n);X_("Data must be an object, but it was:",s,i);const r=[],o=Sd.empty();Ph(i,((e,i)=>{const a=eb(t,e,n);i=yi(i);const c=s.ua(a);if(i instanceof V_)r.push(a);else{const e=W_(i,c);null!=e&&(r.push(a),o.set(a,e))}}));const a=new $h(r);return new R_(o,a,s.fieldTransforms)}function z_(e,t,n,i,s,r){const o=e.fa(1,t,n),a=[J_(t,i,n)],c=[s];if(r.length%2!=0)throw new Fl(Ul.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<r.length;e+=2)a.push(J_(t,r[e])),c.push(r[e+1]);const u=[],l=Sd.empty();for(let e=a.length-1;e>=0;--e)if(!nb(u,a[e])){const t=a[e];let n=c[e];n=yi(n);const i=o.ua(t);if(n instanceof V_)u.push(t);else{const e=W_(n,i);null!=e&&(u.push(t),l.set(t,e))}}const h=new $h(u);return new R_(l,h,o.fieldTransforms)}function K_(e,t,n,i=!1){return W_(n,e.fa(i?4:3,t))}function W_(e,t){if(Y_(e=yi(e)))return X_("Unsupported field value:",t,e),Q_(e,t);if(e instanceof D_)return function(e,t){if(!L_(t.na))throw t.aa(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.aa(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ra&&4!==t.na)throw t.aa("Nested arrays are not supported");return function(e,t){const n=[];let i=0;for(const s of e){let e=W_(s,t.ca(i));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),i++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=yi(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return gf(t.It,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=eh.fromDate(e);return{timestampValue:Tp(t.It,n)}}if(e instanceof eh){const n=new eh(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Tp(t.It,n)}}if(e instanceof N_)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof C_)return{bytesValue:Ep(t.It,e._byteString)};if(e instanceof Jw){const n=t.databaseId,i=e.firestore._databaseId;if(!i.isEqual(n))throw t.aa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Ap(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.aa(`Unsupported field value: ${zw(e)}`)}(e,t)}function Q_(e,t){const n={};return Mh(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ph(e,((e,i)=>{const s=W_(i,t.ia(e));null!=s&&(n[e]=s)})),{mapValue:{fields:n}}}function Y_(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof eh||e instanceof N_||e instanceof C_||e instanceof Jw||e instanceof D_)}function X_(e,t,n){if(!Y_(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const i=zw(n);throw"an object"===i?t.aa(e+" a custom object"):t.aa(e+" "+i)}}function J_(e,t,n){if((t=yi(t))instanceof k_)return t._internalPath;if("string"==typeof t)return eb(e,t);throw tb("Field path arguments must be of type string or ",e,!1,void 0,n)}const Z_=new RegExp("[~\\*/\\[\\]]");function eb(e,t,n){if(t.search(Z_)>=0)throw tb(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new k_(...t.split("."))._internalPath}catch(i){throw tb(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function tb(e,t,n,i,s){const r=i&&!i.isEmpty(),o=void 0!==s;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new Fl(Ul.INVALID_ARGUMENT,a+e+c)}function nb(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Jw(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new sb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(rb("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class sb extends ib{data(){return super.data()}}function rb(e,t){return"string"==typeof t?eb(e,t):t instanceof k_?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ab extends ib{constructor(e,t,n,i,s,r){super(e,t,n,i,r),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new cb(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(rb("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class cb extends ab{data(e={}){return super.data(e)}}class ub{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new ob(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new cb(this._firestore,this._userDataWriter,n.key,n,new ob(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Fl(Ul.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>({type:"added",doc:new cb(e._firestore,e._userDataWriter,n.doc.key,n.doc,new ob(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++})))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const i=new cb(e._firestore,e._userDataWriter,t.doc.key,t.doc,new ob(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let s=-1,r=-1;return 0!==t.type&&(s=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),r=n.indexOf(t.doc.key)),{type:lb(t.type),doc:i,oldIndex:s,newIndex:r}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function lb(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Rl()}}function hb(e,t){return e instanceof ab&&t instanceof ab?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof ub&&t instanceof ub&&e._firestore===t._firestore&&r_(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function db(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new Fl(Ul.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fb{}function pb(e,...t){for(const n of t)e=n._apply(e);return e}class mb extends fb{constructor(e,t,n){super(),this.wa=e,this.ma=t,this.ga=n,this.type="where"}_apply(e){const t=U_(e.firestore),n=function(e,t,n,i,s,r,o){let a;if(s.isKeyField()){if("array-contains"===r||"array-contains-any"===r)throw new Fl(Ul.INVALID_ARGUMENT,`Invalid Query. You can't perform '${r}' queries on documentId().`);if("in"===r||"not-in"===r){Nb(o,r);const t=[];for(const n of o)t.push(Db(i,e,n));a={arrayValue:{values:t}}}else a=Db(i,e,o)}else"in"!==r&&"not-in"!==r&&"array-contains-any"!==r||Nb(o,r),a=K_(n,"where",o,"in"===r||"not-in"===r);const c=Md.create(s,r,a);return function(e,t){if(t.dt()){const n=tf(e);if(null!==n&&!n.isEqual(t.field))throw new Fl(Ul.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const i=ef(e);null!==i&&xb(e,t.field,i)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new Fl(Ul.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Fl(Ul.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,c),c}(e._query,0,t,e.firestore._databaseId,this.wa,this.ma,this.ga);return new Zw(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new Yd(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function gb(e,t,n){const i=t,s=rb("where",e);return new mb(s,i,n)}class yb extends fb{constructor(e,t){super(),this.wa=e,this.ya=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new Fl(Ul.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new Fl(Ul.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const i=new zd(t,n);return function(e,t){if(null===ef(e)){const n=tf(e);null!==n&&xb(e,n,t.field)}}(e,i),i}(e._query,this.wa,this.ya);return new Zw(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new Yd(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function vb(e,t="asc"){const n=t,i=rb("orderBy",e);return new yb(i,n)}class wb extends fb{constructor(e,t,n){super(),this.type=e,this.pa=t,this.Ia=n}_apply(e){return new Zw(e.firestore,e.converter,of(e._query,this.pa,this.Ia))}}function _b(e){return Ww("limit",e),new wb("limit",e,"F")}function bb(e){return Ww("limitToLast",e),new wb("limitToLast",e,"L")}class Ib extends fb{constructor(e,t,n){super(),this.type=e,this.Ta=t,this.Ea=n}_apply(e){const t=Cb(e,this.type,this.Ta,this.Ea);return new Zw(e.firestore,e.converter,function(e,t){return new Yd(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function Tb(...e){return new Ib("startAt",e,!0)}function Eb(...e){return new Ib("startAfter",e,!1)}class Sb extends fb{constructor(e,t,n){super(),this.type=e,this.Ta=t,this.Ea=n}_apply(e){const t=Cb(e,this.type,this.Ta,this.Ea);return new Zw(e.firestore,e.converter,function(e,t){return new Yd(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function kb(...e){return new Sb("endBefore",e,!1)}function Ab(...e){return new Sb("endAt",e,!0)}function Cb(e,t,n,i){if(n[0]=yi(n[0]),n[0]instanceof ib)return function(e,t,n,i,s){if(!i)throw new Fl(Ul.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const r=[];for(const n of sf(e))if(n.field.isKeyField())r.push(fd(t,i.key));else{const e=i.data.field(n.field);if(Yh(e))throw new Fl(Ul.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+n.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=n.field.canonicalString();throw new Fl(Ul.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}r.push(e)}return new Hd(r,s)}(e._query,e.firestore._databaseId,t,n[0]._document,i);{const s=U_(e.firestore);return function(e,t,n,i,s,r){const o=e.explicitOrderBy;if(s.length>o.length)throw new Fl(Ul.INVALID_ARGUMENT,`Too many arguments provided to ${i}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let r=0;r<s.length;r++){const c=s[r];if(o[r].field.isKeyField()){if("string"!=typeof c)throw new Fl(Ul.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${i}(), but got a ${typeof c}`);if(!nf(e)&&-1!==c.indexOf("/"))throw new Fl(Ul.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${i}() must be a plain document ID, but '${c}' contains a slash.`);const n=e.path.child(ih.fromString(c));if(!oh.isDocumentKey(n))throw new Fl(Ul.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${i}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const s=new oh(n);a.push(fd(t,s))}else{const e=K_(n,i,c);a.push(e)}}return new Hd(a,r)}(e._query,e.firestore._databaseId,s,t,n,i)}}function Db(e,t,n){if("string"==typeof(n=yi(n))){if(""===n)throw new Fl(Ul.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!nf(t)&&-1!==n.indexOf("/"))throw new Fl(Ul.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=t.path.child(ih.fromString(n));if(!oh.isDocumentKey(i))throw new Fl(Ul.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return fd(e,new oh(i))}if(n instanceof Jw)return fd(e,n._key);throw new Fl(Ul.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${zw(n)}.`)}function Nb(e,t){if(!Array.isArray(e)||0===e.length)throw new Fl(Ul.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new Fl(Ul.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function xb(e,t,n){if(!n.isEqual(t))throw new Fl(Ul.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob={maxAttempts:5};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{convertValue(e,t="none"){switch(od(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Wh(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Qh(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Rl()}}convertObject(e,t){const n={};return Ph(e.fields,((e,i)=>{n[e]=this.convertValue(i,t)})),n}convertGeoPoint(e){return new N_(Wh(e.latitude),Wh(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Xh(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Jh(e));default:return null}}convertTimestamp(e){const t=Kh(e);return new eh(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ih.fromString(e);Ll(Yp(n));const i=new ed(n.get(1),n.get(3)),s=new oh(n.popFirst(5));return i.isEqual(t)||Nl(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lb(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}class Pb extends Rb{constructor(e){super(),this.firestore=e}convertBytes(e){return new C_(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Jw(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=U_(e)}set(e,t,n){this._verifyNotCommitted();const i=Ub(e,this._firestore),s=Lb(i.converter,t,n),r=F_(this._dataReader,"WriteBatch.set",i._key,s,null!==i.converter,n);return this._mutations.push(r.toMutation(i._key,xf.none())),this}update(e,t,n,...i){this._verifyNotCommitted();const s=Ub(e,this._firestore);let r;return r="string"==typeof(t=yi(t))||t instanceof k_?z_(this._dataReader,"WriteBatch.update",s._key,t,n,i):H_(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(r.toMutation(s._key,xf.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Ub(e,this._firestore);return this._mutations=this._mutations.concat(new Gf(t._key,xf.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new Fl(Ul.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ub(e,t){if((e=yi(e)).firestore!==t)throw new Fl(Ul.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fb(e){e=Kw(e,Jw);const t=Kw(e.firestore,l_);return Fw(f_(t),e._key).then((n=>Jb(t,e,n)))}class Vb extends Rb{constructor(e){super(),this.firestore=e}convertBytes(e){return new C_(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Jw(this.firestore,null,t)}}function qb(e){e=Kw(e,Jw);const t=Kw(e.firestore,l_),n=f_(t),i=new Vb(t);return function(e,t){const n=new Vl;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const i=await function(e,t){const n=Ml(e);return n.persistence.runTransaction("read document","readonly",(e=>n.localDocuments.getDocument(e,t)))}(e,t);i.isFoundDocument()?n.resolve(i):i.isNoDocument()?n.resolve(null):n.reject(new Fl(Ul.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const i=Tv(e,`Failed to get document '${t} from cache`);n.reject(i)}}(await Lw(e),t,n))),n.promise}(n,e._key).then((n=>new ab(t,i,e._key,n,new ob(null!==n&&n.hasLocalMutations,!0),e.converter)))}function Bb(e){e=Kw(e,Jw);const t=Kw(e.firestore,l_);return Fw(f_(t),e._key,{source:"server"}).then((n=>Jb(t,e,n)))}function jb(e){e=Kw(e,Zw);const t=Kw(e.firestore,l_),n=f_(t),i=new Vb(t);return db(e._query),Vw(n,e._query).then((n=>new ub(t,i,e,n)))}function $b(e){e=Kw(e,Zw);const t=Kw(e.firestore,l_),n=f_(t),i=new Vb(t);return function(e,t){const n=new Vl;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const i=await vy(e,t,!0),s=new Bv(t,i.Hi),r=s.ju(i.documents),o=s.applyChanges(r,!1);n.resolve(o.snapshot)}catch(e){const i=Tv(e,`Failed to execute query '${t} against cache`);n.reject(i)}}(await Lw(e),t,n))),n.promise}(n,e._query).then((n=>new ub(t,i,e,n)))}function Gb(e){e=Kw(e,Zw);const t=Kw(e.firestore,l_),n=f_(t),i=new Vb(t);return Vw(n,e._query,{source:"server"}).then((n=>new ub(t,i,e,n)))}function Hb(e,t,n){e=Kw(e,Jw);const i=Kw(e.firestore,l_),s=Lb(e.converter,t,n);return Xb(i,[F_(U_(i),"setDoc",e._key,s,null!==e.converter,n).toMutation(e._key,xf.none())])}function zb(e,t,n,...i){e=Kw(e,Jw);const s=Kw(e.firestore,l_),r=U_(s);let o;return o="string"==typeof(t=yi(t))||t instanceof k_?z_(r,"updateDoc",e._key,t,n,i):H_(r,"updateDoc",e._key,t),Xb(s,[o.toMutation(e._key,xf.exists(!0))])}function Kb(e){return Xb(Kw(e.firestore,l_),[new Gf(e._key,xf.none())])}function Wb(e,t){const n=Kw(e.firestore,l_),i=i_(e),s=Lb(e.converter,t);return Xb(n,[F_(U_(e.firestore),"addDoc",i._key,s,null!==e.converter,{}).toMutation(i._key,xf.exists(!1))]).then((()=>i))}function Qb(e,...t){var n,i,s;e=yi(e);let r={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||a_(t[o])||(r=t[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(a_(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(i=e.error)||void 0===i?void 0:i.bind(e),t[o+2]=null===(s=e.complete)||void 0===s?void 0:s.bind(e)}let c,u,l;if(e instanceof Jw)u=Kw(e.firestore,l_),l=Jd(e._key.path),c={next:n=>{t[o]&&t[o](Jb(u,e,n))},error:t[o+1],complete:t[o+2]};else{const n=Kw(e,Zw);u=Kw(n.firestore,l_),l=n._query;const i=new Vb(u);c={next:e=>{t[o]&&t[o](new ub(u,i,n,e))},error:t[o+1],complete:t[o+2]},db(e._query)}return function(e,t,n,i){const s=new Ew(i),r=new Lv(t,s,n);return e.asyncQueue.enqueueAndForget((async()=>Dv(await Uw(e),r))),()=>{s.Rc(),e.asyncQueue.enqueueAndForget((async()=>Nv(await Uw(e),r)))}}(f_(u),l,a,c)}function Yb(e,t){return function(e,t){const n=new Ew(t);return e.asyncQueue.enqueueAndForget((async()=>function(e,t){Ml(e).Ru.add(t),t.next()}(await Uw(e),n))),()=>{n.Rc(),e.asyncQueue.enqueueAndForget((async()=>function(e,t){Ml(e).Ru.delete(t)}(await Uw(e),n)))}}(f_(e=Kw(e,l_)),a_(t)?t:{next:t})}function Xb(e,t){return function(e,t){const n=new Vl;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const i=vw(e);try{const e=await function(e,t){const n=Ml(e),i=eh.now(),s=t.reduce(((e,t)=>e.add(t.key)),cp());let r,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Zf(),c=cp();return n.Gi.getEntries(e,s).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((s=>{r=s;const o=[];for(const e of t){const t=Uf(e,r.get(e.key).overlayedDocument);null!=t&&o.push(new qf(e.key,t,kd(t.value.mapValue),xf.exists(!0)))}return n.mutationQueue.addMutationBatch(e,i,o,t)})).next((t=>{o=t;const i=t.applyToLocalDocumentSet(r,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:np(r)})))}(i.localStore,t);i.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let i=e.ac[e.currentUser.toKey()];i||(i=new Uh(Xl)),i=i.insert(t,n),e.ac[e.currentUser.toKey()]=i}(i,e.batchId,n),await ow(i,e.changes),await uv(i.remoteStore)}catch(e){const t=Tv(e,"Failed to persist write");n.reject(t)}}(await Mw(e),t,n))),n.promise}(f_(e),t)}function Jb(e,t,n){const i=n.docs.get(t._key),s=new Vb(e);return new ab(e,s,t._key,i,new ob(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=U_(e)}get(e){const t=Ub(e,this._firestore),n=new Pb(this._firestore);return this._transaction.lookup([t._key]).then((e=>{if(!e||1!==e.length)return Rl();const i=e[0];if(i.isFoundDocument())return new ib(this._firestore,n,i.key,i,t.converter);if(i.isNoDocument())return new ib(this._firestore,n,t._key,null,t.converter);throw Rl()}))}set(e,t,n){const i=Ub(e,this._firestore),s=Lb(i.converter,t,n),r=F_(this._dataReader,"Transaction.set",i._key,s,null!==i.converter,n);return this._transaction.set(i._key,r),this}update(e,t,n,...i){const s=Ub(e,this._firestore);let r;return r="string"==typeof(t=yi(t))||t instanceof k_?z_(this._dataReader,"Transaction.update",s._key,t,n,i):H_(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,r),this}delete(e){const t=Ub(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Ub(e,this._firestore),n=new Vb(this._firestore);return super.get(e).then((e=>new ab(this._firestore,n,t._key,e._document,new ob(!1,!1),t.converter)))}}function eI(e,t,n){e=Kw(e,l_);const i=Object.assign(Object.assign({},Ob),n);return function(e){if(e.maxAttempts<1)throw new Fl(Ul.INVALID_ARGUMENT,"Max attempts must be at least 1")}(i),function(e,t,n){const i=new Vl;return e.asyncQueue.enqueueAndForget((async()=>{const s=await function(e){return Ow(e).then((e=>e.datastore))}(e);new Aw(e.asyncQueue,s,n,t,i).run()})),i.promise}(f_(e),(n=>t(new Zb(e,n))),i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(){return new V_("deleteField")}function nI(){return new B_("serverTimestamp")}function iI(...e){return new j_("arrayUnion",e)}function sI(...e){return new $_("arrayRemove",e)}function rI(e){return new G_("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oI(e){return f_(e=Kw(e,l_)),new Mb(e,(t=>Xb(e,t)))
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}function aI(e,t){var n;const i=f_(e=Kw(e,l_));if(!(null===(n=i.offlineComponents)||void 0===n?void 0:n.indexBackfillerScheduler))return xl("Cannot enable indexes when persistence is disabled"),Promise.resolve();const s=function(e){const t="string"==typeof e?function(e){var t;try{return JSON.parse(e)}catch(e){throw new Fl(Ul.INVALID_ARGUMENT,"Failed to parse JSON: "+(null===(t=e)||void 0===t?void 0:t.message))}}(e):e,n=[];if(Array.isArray(t.indexes))for(const e of t.indexes){const t=cI(e,"collectionGroup"),i=[];if(Array.isArray(e.fields))for(const t of e.fields){const e=eb("setIndexConfiguration",cI(t,"fieldPath"));"CONTAINS"===t.arrayConfig?i.push(new hh(e,2)):"ASCENDING"===t.order?i.push(new hh(e,0)):"DESCENDING"===t.order&&i.push(new hh(e,1))}n.push(new ah(ah.UNKNOWN_ID,t,i,fh.empty()))}return n}(t);return Lw(i).then((e=>async function(e,t){const n=Ml(e),i=n.indexManager,s=[];return n.persistence.runTransaction("Configure indexes","readwrite",(e=>i.getFieldIndexes(e).next((n=>function(e,t,n,i,s){e=[...e],t=[...t],e.sort(n),t.sort(n);const r=e.length,o=t.length;let a=0,c=0;for(;a<o&&c<r;){const r=n(e[c],t[a]);r<0?s(e[c++]):r>0?i(t[a++]):(a++,c++)}for(;a<o;)i(t[a++]);for(;c<r;)s(e[c++])}(n,t,lh,(t=>{s.push(i.addFieldIndex(e,t))}),(t=>{s.push(i.deleteFieldIndex(e,t))})))).next((()=>bh.waitFor(s)))))}(e,s)))}function cI(e,t){if("string"!=typeof e[t])throw new Fl(Ul.INVALID_ARGUMENT,"Missing string value for: "+t);return e[t]}!function(e,t=!0){Sl="9.10.0",Ji(new vi("firestore",((e,{instanceIdentifier:n,options:i})=>{const s=e.getProvider("app").getImmediate(),r=new l_(new $l(e.getProvider("auth-internal")),new Kl(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Fl(Ul.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ed(e.options.projectId,t)}(s,n),s);return i=Object.assign({useFetchStreams:t},i),r._setSettings(i),r}),"PUBLIC").setMultipleInstances(!0)),ss("@firebase/firestore","3.5.0",e),ss("@firebase/firestore","3.5.0","esm2017")}(),t(io,so);var uI={},lI={};e(lI,"ActionCodeOperation",(()=>gI)),e(lI,"ActionCodeURL",(()=>jT)),e(lI,"AuthCredential",(()=>RT)),e(lI,"AuthErrorCodes",(()=>bI)),e(lI,"EmailAuthCredential",(()=>UT)),e(lI,"EmailAuthProvider",(()=>GT)),e(lI,"FacebookAuthProvider",(()=>WT)),e(lI,"FactorId",(()=>dI)),e(lI,"GithubAuthProvider",(()=>YT)),e(lI,"GoogleAuthProvider",(()=>QT)),e(lI,"OAuthCredential",(()=>VT)),e(lI,"OAuthProvider",(()=>KT)),e(lI,"OperationType",(()=>mI)),e(lI,"PhoneAuthCredential",(()=>BT)),e(lI,"PhoneAuthProvider",(()=>MS)),e(lI,"PhoneMultiFactorGenerator",(()=>Ak)),e(lI,"ProviderId",(()=>fI)),e(lI,"RecaptchaVerifier",(()=>DS)),e(lI,"SAMLAuthProvider",(()=>JT)),e(lI,"SignInMethod",(()=>pI)),e(lI,"TwitterAuthProvider",(()=>ZT)),e(lI,"applyActionCode",(()=>bE)),e(lI,"beforeAuthStateChanged",(()=>HE)),e(lI,"browserLocalPersistence",(()=>rS)),e(lI,"browserPopupRedirectResolver",(()=>Sk)),e(lI,"browserSessionPersistence",(()=>aS)),e(lI,"checkActionCode",(()=>IE)),e(lI,"confirmPasswordReset",(()=>_E)),e(lI,"connectAuthEmulator",(()=>NT)),e(lI,"createUserWithEmailAndPassword",(()=>EE)),e(lI,"debugErrorMap",(()=>vI)),e(lI,"deleteUser",(()=>YE)),e(lI,"fetchSignInMethodsForEmail",(()=>DE)),e(lI,"getAdditionalUserInfo",(()=>jE)),e(lI,"getAuth",(()=>Nk)),e(lI,"getIdToken",(()=>JI)),e(lI,"getIdTokenResult",(()=>ZI)),e(lI,"getMultiFactorResolver",(()=>ZE)),e(lI,"getRedirectResult",(()=>ik)),e(lI,"inMemoryPersistence",(()=>hT)),e(lI,"indexedDBLocalPersistence",(()=>wS)),e(lI,"initializeAuth",(()=>LI)),e(lI,"isSignInWithEmailLink",(()=>AE)),e(lI,"linkWithCredential",(()=>fE)),e(lI,"linkWithPhoneNumber",(()=>OS)),e(lI,"linkWithPopup",(()=>zS)),e(lI,"linkWithRedirect",(()=>nk)),e(lI,"multiFactor",(()=>nS)),e(lI,"onAuthStateChanged",(()=>zE)),e(lI,"onIdTokenChanged",(()=>GE)),e(lI,"parseActionCodeURL",(()=>$T)),e(lI,"prodErrorMap",(()=>wI)),e(lI,"reauthenticateWithCredential",(()=>pE)),e(lI,"reauthenticateWithPhoneNumber",(()=>RS)),e(lI,"reauthenticateWithPopup",(()=>HS)),e(lI,"reauthenticateWithRedirect",(()=>tk)),e(lI,"reload",(()=>oT)),e(lI,"sendEmailVerification",(()=>NE)),e(lI,"sendPasswordResetEmail",(()=>wE)),e(lI,"sendSignInLinkToEmail",(()=>kE)),e(lI,"setPersistence",(()=>$E)),e(lI,"signInAnonymously",(()=>iE)),e(lI,"signInWithCredential",(()=>dE)),e(lI,"signInWithCustomToken",(()=>mE)),e(lI,"signInWithEmailAndPassword",(()=>SE)),e(lI,"signInWithEmailLink",(()=>CE)),e(lI,"signInWithPhoneNumber",(()=>xS)),e(lI,"signInWithPopup",(()=>GS)),e(lI,"signInWithRedirect",(()=>ek)),e(lI,"signOut",(()=>QE)),e(lI,"unlink",(()=>aE)),e(lI,"updateCurrentUser",(()=>WE)),e(lI,"updateEmail",(()=>RE)),e(lI,"updatePassword",(()=>LE)),e(lI,"updatePhoneNumber",(()=>PS)),e(lI,"updateProfile",(()=>OE)),e(lI,"useDeviceLanguage",(()=>KE)),e(lI,"verifyBeforeUpdateEmail",(()=>xE)),e(lI,"verifyPasswordResetCode",(()=>TE));function hI(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]])}return n}Object.create;Object.create;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dI={PHONE:"phone"},fI={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},pI={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},mI={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},gI={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};function yI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vI=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}},wI=yI,_I=new oi("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),bI={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized"},II=new Ci("@firebase/auth");function TI(e,...t){II.logLevel<=Ii.ERROR&&II.error(`Auth (9.10.0): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EI(e,...t){throw CI(e,...t)}function SI(e,...t){return CI(e,...t)}function kI(e,t,n){const i=Object.assign(Object.assign({},wI()),{[t]:n});return new oi("auth","Firebase",i).create(t,{appName:e.name})}function AI(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&EI(e,"argument-error"),kI(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function CI(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return _I.create(e,...t)}function DI(e,t,...n){if(!e)throw CI(t,...n)}function NI(e){const t="INTERNAL ASSERTION FAILED: "+e;throw TI(t),new Error(t)}function xI(e,t){e||NI(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI=new Map;function RI(e){xI(e instanceof Function,"Expected a class definition");let t=OI.get(e);return t?(xI(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,OI.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(e,t){const n=Zi(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(ui(n.getOptions(),null!=t?t:{}))return e;EI(e,"already-initialized")}return n.initialize({options:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function PI(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function MI(){return"http:"===UI()||"https:"===UI()}function UI(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(MI()||ti()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class VI{constructor(e,t){this.shortDelay=e,this.longDelay=t,xI(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ei())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return FI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qI(e,t){xI(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void NI("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void NI("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void NI("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},$I=new VI(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function HI(e,t,n,i,s={}){return zI(e,s,(async()=>{let s={},r={};i&&("GET"===t?r=i:s={body:JSON.stringify(i)});const o=hi(Object.assign({key:e.config.apiKey},r)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),BI.fetch()(WI(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},s))}))}async function zI(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},jI),t);try{const t=new QI(e),s=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const r=await s.json();if("needConfirmation"in r)throw YI(e,"account-exists-with-different-credential",r);if(s.ok&&!("errorMessage"in r))return r;{const t=s.ok?r.errorMessage:r.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw YI(e,"credential-already-in-use",r);if("EMAIL_EXISTS"===n)throw YI(e,"email-already-in-use",r);if("USER_DISABLED"===n)throw YI(e,"user-disabled",r);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw kI(e,a,o);EI(e,a)}}catch(t){if(t instanceof ri)throw t;EI(e,"network-request-failed")}}async function KI(e,t,n,i,s={}){const r=await HI(e,t,n,i,s);return"mfaPendingCredential"in r&&EI(e,"multi-factor-auth-required",{_serverResponse:r}),r}function WI(e,t,n,i){const s=`${t}${n}?${i}`;return e.config.emulator?qI(e.config,s):`${e.config.apiScheme}://${s}`}class QI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(SI(this.auth,"network-request-failed"))),$I.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function YI(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=SI(e,t,i);return s.customData._tokenResponse=n,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function XI(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(e,t=!1){return yi(e).getIdToken(t)}async function ZI(e,t=!1){const n=yi(e),i=await n.getIdToken(t),s=tT(i);DI(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r="object"==typeof s.firebase?s.firebase:void 0,o=null==r?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:XI(eT(s.auth_time)),issuedAtTime:XI(eT(s.iat)),expirationTime:XI(eT(s.exp)),signInProvider:o||null,signInSecondFactor:(null==r?void 0:r.sign_in_second_factor)||null}}function eT(e){return 1e3*Number(e)}function tT(e){var t;const[n,i,s]=e.split(".");if(void 0===n||void 0===i||void 0===s)return TI("JWT malformed, contained fewer than 3 sections"),null;try{const e=Xn(i);return e?JSON.parse(e):(TI("Failed to decode base64 JWT payload"),null)}catch(e){return TI("Caught error parsing JWT payload as JSON",null===(t=e)||void 0===t?void 0:t.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function nT(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof ri&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class iT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=XI(this.lastLoginAt),this.creationTime=XI(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rT(e){var t;const n=e.auth,i=await e.getIdToken(),s=await nT(e,async function(e,t){return HI(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));DI(null==s?void 0:s.users.length,n,"internal-error");const r=s.users[0];e._notifyReloadListener(r);const o=(null===(t=r.providerUserInfo)||void 0===t?void 0:t.length)?r.providerUserInfo.map((e=>{var{providerId:t}=e,n=hI(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,u=o,[...c.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var c,u;const l=e.isAnonymous,h=!(e.email&&r.passwordHash||(null==a?void 0:a.length)),d=!!l&&h,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new sT(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(e,f)}async function oT(e){const t=yi(e);await rT(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class aT{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){DI(e.idToken,"internal-error"),DI(void 0!==e.idToken,"internal-error"),DI(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=tT(e);return DI(t,"internal-error"),DI(void 0!==t.exp,"internal-error"),DI(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return DI(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await zI(e,{},(async()=>{const n=hi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,r=WI(e,i,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",BI.fetch()(r,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,r=new aT;return n&&(DI("string"==typeof n,"internal-error",{appName:e}),r.refreshToken=n),i&&(DI("string"==typeof i,"internal-error",{appName:e}),r.accessToken=i),s&&(DI("number"==typeof s,"internal-error",{appName:e}),r.expirationTime=s),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new aT,this.toJSON())}_performRefresh(){return NI("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cT(e,t){DI("string"==typeof e||void 0===e,"internal-error",{appName:t})}class uT{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=hI(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new iT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new sT(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await nT(this,this.stsTokenManager.getToken(this.auth,e));return DI(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ZI(this,e)}reload(){return oT(this)}_assign(e){this!==e&&(DI(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new uT(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){DI(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await rT(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await nT(this,async function(e,t){return HI(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,r,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(s=t.phoneNumber)&&void 0!==s?s:void 0,f=null!==(r=t.photoURL)&&void 0!==r?r:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:_,providerData:b,stsTokenManager:I}=t;DI(v&&I,e,"internal-error");const T=aT.fromJSON(this.name,I);DI("string"==typeof v,e,"internal-error"),cT(l,e.name),cT(h,e.name),DI("boolean"==typeof w,e,"internal-error"),DI("boolean"==typeof _,e,"internal-error"),cT(d,e.name),cT(f,e.name),cT(p,e.name),cT(m,e.name),cT(g,e.name),cT(y,e.name);const E=new uT({uid:v,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:y});return b&&Array.isArray(b)&&(E.providerData=b.map((e=>Object.assign({},e)))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(e,t,n=!1){const i=new aT;i.updateFromServerResponse(t);const s=new uT({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await rT(s),s}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}lT.type="NONE";const hT=lT;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dT(e,t,n){return`firebase:${e}:${t}:${n}`}class fT{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=dT(this.userKey,i.apiKey,s),this.fullPersistenceKey=dT("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?uT._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new fT(RI(hT),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let s=i[0]||RI(hT);const r=dT(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(r);if(t){const i=uT._fromJSON(e,t);n!==s&&(o=i),s=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(r,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==s)try{await e._remove(r)}catch(e){}}))),new fT(s,e,n)):new fT(s,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(vT(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(mT(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(_T(t))return"Blackberry";if(bT(t))return"Webos";if(gT(t))return"Safari";if((t.includes("chrome/")||yT(t))&&!t.includes("edge/"))return"Chrome";if(wT(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function mT(e=ei()){return/firefox\//i.test(e)}function gT(e=ei()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function yT(e=ei()){return/crios\//i.test(e)}function vT(e=ei()){return/iemobile/i.test(e)}function wT(e=ei()){return/android/i.test(e)}function _T(e=ei()){return/blackberry/i.test(e)}function bT(e=ei()){return/webos/i.test(e)}function IT(e=ei()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function TT(){return ni()&&10===document.documentMode}function ET(e=ei()){return IT(e)||wT(e)||bT(e)||_T(e)||/windows phone/i.test(e)||vT(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ST(e,t=[]){let n;switch(e){case"Browser":n=pT(ei());break;case"Worker":n=`${pT(ei())}-${e}`;break;default:n=e}return`${n}/JsCore/9.10.0/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(e){n.reverse();for(const e of n)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=e)||void 0===t?void 0:t.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new DT(this),this.idTokenSubscription=new DT(this),this.beforeStateQueue=new kT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_I,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=RI(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await fT.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==r||!(null==o?void 0:o.user)||(i=o.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return DI(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await rT(e)}catch(e){if("auth/network-request-failed"!==(null===(t=e)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?yi(e):null;return t&&DI(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&DI(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(RI(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new oi("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&RI(e)||this._popupRedirectResolver;DI(t,this,"argument-error"),this.redirectPersistenceManager=await fT.create(this,[RI(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s="function"==typeof t?t:t.next.bind(t),r=this._isInitialized?Promise.resolve():this._initializationPromise;return DI(r,this,"internal-error"),r.then((()=>s(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return DI(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ST(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function CT(e){return yi(e)}class DT{constructor(e){this.auth=e,this.observer=null,this.addObserver=pi((e=>this.observer=e))}get next(){return DI(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function NT(e,t,n){const i=CT(e);DI(i._canInitEmulator,i,"emulator-config-failed"),DI(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const s=!!(null==n?void 0:n.disableWarnings),r=xT(t),{host:o,port:a}=function(e){const t=xT(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const e=s[1];return{host:e,port:OT(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:OT(t)}}}(t),c=null===a?"":`:${a}`;i.config.emulator={url:`${r}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function xT(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function OT(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class RT{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return NI("not implemented")}_getIdTokenResponse(e){return NI("not implemented")}_linkToIdToken(e,t){return NI("not implemented")}_getReauthenticationResolver(e){return NI("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LT(e,t){return HI(e,"POST","/v1/accounts:resetPassword",GI(e,t))}async function PT(e,t){return HI(e,"POST","/v1/accounts:update",t)}async function MT(e,t){return HI(e,"POST","/v1/accounts:sendOobCode",GI(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class UT extends RT{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new UT(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new UT(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return KI(e,"POST","/v1/accounts:signInWithPassword",GI(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return KI(e,"POST","/v1/accounts:signInWithEmailLink",GI(e,t))}(e,{email:this._email,oobCode:this._password});default:EI(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return PT(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return KI(e,"POST","/v1/accounts:signInWithEmailLink",GI(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:EI(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FT(e,t){return KI(e,"POST","/v1/accounts:signInWithIdp",GI(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT extends RT{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new VT(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):EI("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=hI(t,["providerId","signInMethod"]);if(!n||!i)return null;const r=new VT(n,i);return r.idToken=s.idToken||void 0,r.accessToken=s.accessToken||void 0,r.secret=s.secret,r.nonce=s.nonce,r.pendingToken=s.pendingToken||null,r}_getIdTokenResponse(e){return FT(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,FT(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,FT(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=hi(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class BT extends RT{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new BT({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new BT({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return KI(e,"POST","/v1/accounts:signInWithPhoneNumber",GI(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await KI(e,"POST","/v1/accounts:signInWithPhoneNumber",GI(e,t));if(n.temporaryProof)throw YI(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return KI(e,"POST","/v1/accounts:signInWithPhoneNumber",GI(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),qT)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}=e;return n||t||i||s?new BT({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e){var t,n,i,s,r,o;const a=di(fi(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,u=null!==(n=a.oobCode)&&void 0!==n?n:null,l=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);DI(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(s=a.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(r=a.languageCode)&&void 0!==r?r:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=di(fi(e)).link,n=t?di(fi(t)).deep_link_id:null,i=di(fi(e)).deep_link_id;return(i?di(fi(i)).link:null)||i||n||t||e}(e);try{return new jT(t)}catch(e){return null}}}function $T(e){return jT.parseLink(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(){this.providerId=GT.PROVIDER_ID}static credential(e,t){return UT._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=jT.parseLink(t);return DI(n,"argument-error"),UT._fromEmailAndCode(e,n.code,n.tenantId)}}GT.PROVIDER_ID="password",GT.EMAIL_PASSWORD_SIGN_IN_METHOD="password",GT.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class HT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT extends HT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class KT extends zT{static credentialFromJSON(e){const t="string"==typeof e?JSON.parse(e):e;return DI("providerId"in t&&"signInMethod"in t,"argument-error"),VT._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return DI(e.idToken||e.accessToken,"argument-error"),VT._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return KT.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return KT.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:s,nonce:r,providerId:o}=e;if(!(n||i||t||s))return null;if(!o)return null;try{return new KT(o)._credential({idToken:t,accessToken:n,nonce:r,pendingToken:s})}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT extends zT{constructor(){super("facebook.com")}static credential(e){return VT._fromParams({providerId:WT.PROVIDER_ID,signInMethod:WT.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return WT.credentialFromTaggedObject(e)}static credentialFromError(e){return WT.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return WT.credential(e.oauthAccessToken)}catch(e){return null}}}WT.FACEBOOK_SIGN_IN_METHOD="facebook.com",WT.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class QT extends zT{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return VT._fromParams({providerId:QT.PROVIDER_ID,signInMethod:QT.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return QT.credentialFromTaggedObject(e)}static credentialFromError(e){return QT.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return QT.credential(t,n)}catch(e){return null}}}QT.GOOGLE_SIGN_IN_METHOD="google.com",QT.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class YT extends zT{constructor(){super("github.com")}static credential(e){return VT._fromParams({providerId:YT.PROVIDER_ID,signInMethod:YT.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return YT.credentialFromTaggedObject(e)}static credentialFromError(e){return YT.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return YT.credential(e.oauthAccessToken)}catch(e){return null}}}YT.GITHUB_SIGN_IN_METHOD="github.com",YT.PROVIDER_ID="github.com";class XT extends RT{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){return FT(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,FT(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,FT(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i,pendingToken:s}=t;return n&&i&&s&&n===i?new XT(n,s):null}static _create(e,t){return new XT(e,t)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT extends HT{constructor(e){DI(e.startsWith("saml."),"argument-error"),super(e)}static credentialFromResult(e){return JT.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return JT.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=XT.fromJSON(e);return DI(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return XT._create(n,t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT extends zT{constructor(){super("twitter.com")}static credential(e,t){return VT._fromParams({providerId:ZT.PROVIDER_ID,signInMethod:ZT.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ZT.credentialFromTaggedObject(e)}static credentialFromError(e){return ZT.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return ZT.credential(t,n)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function eE(e,t){return KI(e,"POST","/v1/accounts:signUp",GI(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ZT.TWITTER_SIGN_IN_METHOD="twitter.com",ZT.PROVIDER_ID="twitter.com";class tE{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const s=await uT._fromIdTokenResponse(e,n,i),r=nE(n);return new tE({user:s,providerId:r,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=nE(n);return new tE({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function nE(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iE(e){var t;const n=CT(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new tE({user:n.currentUser,providerId:null,operationType:"signIn"});const i=await eE(n,{returnSecureToken:!0}),s=await tE._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(s.user),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE extends ri{constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,sE.prototype),this.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new sE(e,t,n,i)}}function rE(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw sE._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aE(e,t){const n=yi(e);await uE(!0,n,t);const{providerUserInfo:i}=await async function(e,t){return HI(e,"POST","/v1/accounts:update",t)}(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),s=oE(i||[]);return n.providerData=n.providerData.filter((e=>s.has(e.providerId))),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function cE(e,t,n=!1){const i=await nT(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return tE._forOperation(e,"link",i)}async function uE(e,t,n){await rT(t);const i=!1===e?"provider-already-linked":"no-such-provider";DI(oE(t.providerData).has(n)===e,t.auth,i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lE(e,t,n=!1){var i;const{auth:s}=e,r="reauthenticate";try{const i=await nT(e,rE(s,r,t,e),n);DI(i.idToken,s,"internal-error");const o=tT(i.idToken);DI(o,s,"internal-error");const{sub:a}=o;return DI(e.uid===a,s,"user-mismatch"),tE._forOperation(e,r,i)}catch(e){throw"auth/user-not-found"===(null===(i=e)||void 0===i?void 0:i.code)&&EI(s,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hE(e,t,n=!1){const i="signIn",s=await rE(e,i,t),r=await tE._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(r.user),r}async function dE(e,t){return hE(CT(e),t)}async function fE(e,t){const n=yi(e);return await uE(!1,n,t.providerId),cE(n,t)}async function pE(e,t){return lE(yi(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function mE(e,t){const n=CT(e),i=await async function(e,t){return KI(e,"POST","/v1/accounts:signInWithCustomToken",GI(e,t))}(n,{token:t,returnSecureToken:!0}),s=await tE._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(s.user),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?yE._fromServerResponse(e,t):EI(e,"internal-error")}}class yE extends gE{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new yE(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(e,t,n){var i;DI((null===(i=n.url)||void 0===i?void 0:i.length)>0,e,"invalid-continue-uri"),DI(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(DI(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(DI(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wE(e,t,n){const i=yi(e),s={requestType:"PASSWORD_RESET",email:t};n&&vE(i,s,n),await async function(e,t){return MT(e,t)}(i,s)}async function _E(e,t,n){await LT(yi(e),{oobCode:t,newPassword:n})}async function bE(e,t){await async function(e,t){return HI(e,"POST","/v1/accounts:update",GI(e,t))}(yi(e),{oobCode:t})}async function IE(e,t){const n=yi(e),i=await LT(n,{oobCode:t}),s=i.requestType;switch(DI(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":DI(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":DI(i.mfaInfo,n,"internal-error");default:DI(i.email,n,"internal-error")}let r=null;return i.mfaInfo&&(r=gE._fromServerResponse(CT(n),i.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.newEmail:i.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.email:i.newEmail)||null,multiFactorInfo:r},operation:s}}async function TE(e,t){const{data:n}=await IE(yi(e),t);return n.email}async function EE(e,t,n){const i=CT(e),s=await eE(i,{returnSecureToken:!0,email:t,password:n}),r=await tE._fromIdTokenResponse(i,"signIn",s);return await i._updateCurrentUser(r.user),r}function SE(e,t,n){return dE(yi(e),GT.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kE(e,t,n){const i=yi(e),s={requestType:"EMAIL_SIGNIN",email:t};DI(n.handleCodeInApp,i,"argument-error"),n&&vE(i,s,n),await async function(e,t){return MT(e,t)}(i,s)}function AE(e,t){const n=jT.parseLink(t);return"EMAIL_SIGNIN"===(null==n?void 0:n.operation)}async function CE(e,t,n){const i=yi(e),s=GT.credentialWithLink(t,n||PI());return DI(s._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),dE(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function DE(e,t){const n={identifier:t,continueUri:MI()?PI():"http://localhost"},{signinMethods:i}=await async function(e,t){return HI(e,"POST","/v1/accounts:createAuthUri",GI(e,t))}(yi(e),n);return i||[]}async function NE(e,t){const n=yi(e),i={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&vE(n.auth,i,t);const{email:s}=await async function(e,t){return MT(e,t)}(n.auth,i);s!==e.email&&await e.reload()}async function xE(e,t,n){const i=yi(e),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await e.getIdToken(),newEmail:t};n&&vE(i.auth,s,n);const{email:r}=await async function(e,t){return MT(e,t)}(i.auth,s);r!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function OE(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=yi(e),s={idToken:await i.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},r=await nT(i,async function(e,t){return HI(e,"POST","/v1/accounts:update",t)}(i.auth,s));i.displayName=r.displayName||null,i.photoURL=r.photoUrl||null;const o=i.providerData.find((({providerId:e})=>"password"===e));o&&(o.displayName=i.displayName,o.photoURL=i.photoURL),await i._updateTokensIfNecessary(r)}function RE(e,t){return PE(yi(e),t,null)}function LE(e,t){return PE(yi(e),null,t)}async function PE(e,t,n){const{auth:i}=e,s={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);const r=await nT(e,PT(i,s));await e._updateTokensIfNecessary(r,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class UE extends ME{constructor(e,t,n,i){super(e,t,n),this.username=i}}class FE extends ME{constructor(e,t){super(e,"facebook.com",t)}}class VE extends UE{constructor(e,t){super(e,"github.com",t,"string"==typeof(null==t?void 0:t.login)?null==t?void 0:t.login:null)}}class qE extends ME{constructor(e,t){super(e,"google.com",t)}}class BE extends UE{constructor(e,t,n){super(e,"twitter.com",t,n)}}function jE(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:function(e){var t,n;if(!e)return null;const{providerId:i}=e,s=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},r=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!i&&(null==e?void 0:e.idToken)){const i=null===(n=null===(t=tT(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n.sign_in_provider;if(i)return new ME(r,"anonymous"!==i&&"custom"!==i?i:null)}if(!i)return null;switch(i){case"facebook.com":return new FE(r,s);case"github.com":return new VE(r,s);case"google.com":return new qE(r,s);case"twitter.com":return new BE(r,s,e.screenName||null);case"custom":case"anonymous":return new ME(r,null);default:return new ME(r,i,s)}}(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(e,t){return yi(e).setPersistence(t)}function GE(e,t,n,i){return yi(e).onIdTokenChanged(t,n,i)}function HE(e,t,n){return yi(e).beforeAuthStateChanged(t,n)}function zE(e,t,n,i){return yi(e).onAuthStateChanged(t,n,i)}function KE(e){yi(e).useDeviceLanguage()}function WE(e,t){return yi(e).updateCurrentUser(t)}function QE(e){return yi(e).signOut()}async function YE(e){return yi(e).delete()}class XE{constructor(e,t,n){this.type=e,this.credential=t,this.auth=n}static _fromIdtoken(e,t){return new XE("enroll",e,t)}static _fromMfaPendingCredential(e){return new XE("signin",e)}toJSON(){return{multiFactorSession:{["enroll"===this.type?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,n;if(null==e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return XE._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return XE._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=CT(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map((e=>gE._fromServerResponse(n,e)));DI(i.mfaPendingCredential,n,"internal-error");const r=XE._fromMfaPendingCredential(i.mfaPendingCredential);return new JE(r,s,(async e=>{const s=await e._process(n,r);delete i.mfaInfo,delete i.mfaPendingCredential;const o=Object.assign(Object.assign({},i),{idToken:s.idToken,refreshToken:s.refreshToken});switch(t.operationType){case"signIn":const e=await tE._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return DI(t.user,n,"internal-error"),tE._forOperation(t.user,t.operationType,o);default:EI(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function ZE(e,t){var n;const i=yi(e),s=t;return DI(t.customData.operationType,i,"argument-error"),DI(null===(n=s.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,i,"argument-error"),JE._fromError(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>gE._fromServerResponse(e.auth,t))))}))}static _fromUser(e){return new eS(e)}async getSession(){return XE._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const n=e,i=await this.getSession(),s=await nT(this.user,n._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){var t;const n="string"==typeof e?e:e.uid,i=await this.user.getIdToken(),s=await nT(this.user,(r=this.user.auth,o={idToken:i,mfaEnrollmentId:n},HI(r,"POST","/v2/accounts/mfaEnrollment:withdraw",GI(r,o))));var r,o;this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==n)),await this.user._updateTokensIfNecessary(s);try{await this.user.reload()}catch(e){if("auth/user-token-expired"!==(null===(t=e)||void 0===t?void 0:t.code))throw e}}}const tS=new WeakMap;function nS(e){const t=yi(e);return tS.has(t)||tS.set(t,eS._fromUser(t)),tS.get(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class iS{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS extends iS{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=ei();return gT(e)||IT(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=ET(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);TT()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}sS.type="LOCAL";const rS=sS;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS extends iS{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}oS.type="SESSION";const aS=oS;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cS{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new cS(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,r=this.handlersMap[i];if(!(null==r?void 0:r.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(r).map((async e=>e(t.origin,s))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function uS(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cS.receivers=[];class lS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,r;return new Promise(((o,a)=>{const c=uS("",20);i.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);r={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(t.data.response);break;default:clearTimeout(u),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(r),i.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hS(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function dS(){return void 0!==hS().WorkerGlobalScope&&"function"==typeof hS().importScripts}class fS{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function pS(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function mS(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new fS(e).toPromise()}(),t(await mS()))}))}))}async function gS(e,t,n){const i=pS(e,!0).put({fbase_key:t,value:n});return new fS(i).toPromise()}function yS(e,t){const n=pS(e,!0).delete(t);return new fS(n).toPromise()}class vS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await mS()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cS._getInstance(dS()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new lS(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mS();return await gS(e,"__sak","1"),await yS(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>gS(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=pS(e,!1).get(t),i=await new fS(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>yS(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=pS(e,!1).getAll();return new fS(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}vS.type="LOCAL";const wS=vS;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _S(e){return new Promise(((t,n)=>{const i=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var s,r;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=SI("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(r=null===(s=document.getElementsByTagName("head"))||void 0===s?void 0:s[0])&&void 0!==r?r:document).appendChild(i)}))}function bS(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e){this.auth=e,this.counter=1e12,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new TS(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||1e12;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||1e12;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||1e12;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class TS{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i="string"==typeof e?document.getElementById(e):e;DI(i,"argument-error",{appName:t}),this.container=i,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=function(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<e;i++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(e){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(e){}this.isVisible&&this.execute()}),6e4)}),500))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}const ES=bS("rcb"),SS=new VI(3e4,6e4);class kS{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=hS().grecaptcha)||void 0===e?void 0:e.render)}load(e,t=""){return DI(function(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(hS().grecaptcha):new Promise(((n,i)=>{const s=hS().setTimeout((()=>{i(SI(e,"network-request-failed"))}),SS.get());hS()[ES]=()=>{hS().clearTimeout(s),delete hS()[ES];const r=hS().grecaptcha;if(!r)return void i(SI(e,"internal-error"));const o=r.render;r.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(r)};_S(`https://www.google.com/recaptcha/api.js??${hi({onload:ES,render:"explicit",hl:t})}`).catch((()=>{clearTimeout(s),i(SI(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=hS().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}class AS{async load(e){return new IS(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS={theme:"light",type:"image"};class DS{constructor(e,t=Object.assign({},CS),n){this.parameters=t,this.type="recaptcha",this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=CT(n),this.isInvisible="invisible"===this.parameters.size,DI("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment");const i="string"==typeof e?document.getElementById(e):e;DI(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new AS:new kS,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const i=e=>{e&&(this.tokenChangeListeners.delete(i),n(e))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){DI(!this.parameters.sitekey,this.auth,"argument-error"),DI(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),DI("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"==typeof e)e(t);else if("string"==typeof e){const n=hS()[e];"function"==typeof n&&n(t)}}}assertNotDestroyed(){DI(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){DI(MI()&&!dS(),this.auth,"internal-error"),await function(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e){return(await HI(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}(this.auth);DI(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return DI(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}class NS{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=BT._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function xS(e,t,n){const i=CT(e),s=await LS(i,t,yi(n));return new NS(s,(e=>dE(i,e)))}async function OS(e,t,n){const i=yi(e);await uE(!1,i,"phone");const s=await LS(i.auth,t,yi(n));return new NS(s,(e=>fE(i,e)))}async function RS(e,t,n){const i=yi(e),s=await LS(i.auth,t,yi(n));return new NS(s,(e=>pE(i,e)))}async function LS(e,t,n){var i;const s=await n.verify();try{let r;if(DI("string"==typeof s,e,"argument-error"),DI("recaptcha"===n.type,e,"argument-error"),r="string"==typeof t?{phoneNumber:t}:t,"session"in r){const t=r.session;if("phoneNumber"in r){DI("enroll"===t.type,e,"internal-error");const n=await function(e,t){return HI(e,"POST","/v2/accounts/mfaEnrollment:start",GI(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:s}});return n.phoneSessionInfo.sessionInfo}{DI("signin"===t.type,e,"internal-error");const n=(null===(i=r.multiFactorHint)||void 0===i?void 0:i.uid)||r.multiFactorUid;DI(n,e,"missing-multi-factor-info");const o=await function(e,t){return HI(e,"POST","/v2/accounts/mfaSignIn:start",GI(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:s}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return HI(e,"POST","/v1/accounts:sendVerificationCode",GI(e,t))}(e,{phoneNumber:r.phoneNumber,recaptchaToken:s});return t}}finally{n._reset()}}async function PS(e,t){await cE(yi(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e){this.providerId=MS.PROVIDER_ID,this.auth=CT(e)}verifyPhoneNumber(e,t){return LS(this.auth,e,yi(t))}static credential(e,t){return BT._fromVerification(e,t)}static credentialFromResult(e){const t=e;return MS.credentialFromTaggedObject(t)}static credentialFromError(e){return MS.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?BT._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function US(e,t){return t?RI(t):(DI(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */MS.PROVIDER_ID="phone",MS.PHONE_SIGN_IN_METHOD="phone";class FS extends RT{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return FT(e,this._buildIdpRequest())}_linkToIdToken(e,t){return FT(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return FT(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function VS(e){return hE(e.auth,new FS(e),e.bypassAuthState)}function qS(e){const{auth:t,user:n}=e;return DI(n,t,"internal-error"),lE(n,new FS(e),e.bypassAuthState)}async function BS(e){const{auth:t,user:n}=e;return DI(n,t,"internal-error"),cE(n,new FS(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:r,type:o}=e;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return VS;case"linkViaPopup":case"linkViaRedirect":return BS;case"reauthViaPopup":case"reauthViaRedirect":return qS;default:EI(this.auth,"internal-error")}}resolve(e){xI(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xI(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S=new VI(2e3,1e4);async function GS(e,t,n){const i=CT(e);AI(e,t,HT);const s=US(i,n);return new KS(i,"signInViaPopup",t,s).executeNotNull()}async function HS(e,t,n){const i=yi(e);AI(i.auth,t,HT);const s=US(i.auth,n);return new KS(i.auth,"reauthViaPopup",t,s,i).executeNotNull()}async function zS(e,t,n){const i=yi(e);AI(i.auth,t,HT);const s=US(i.auth,n);return new KS(i.auth,"linkViaPopup",t,s,i).executeNotNull()}class KS extends jS{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,KS.currentPopupAction&&KS.currentPopupAction.cancel(),KS.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return DI(e,this.auth,"internal-error"),e}async onExecution(){xI(1===this.filter.length,"Popup operations only handle one event");const e=uS();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(SI(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(SI(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,KS.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(SI(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,$S.get())};e()}}KS.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const WS=new Map;class QS extends jS{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=WS.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=ZS(t),i=JS(e);if(!await i._isAvailable())return!1;const s="true"===await i._get(n);return await i._remove(n),s}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}WS.set(this.auth._key(),e)}return this.bypassAuthState||WS.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function YS(e,t){return JS(e)._set(ZS(t),"true")}function XS(e,t){WS.set(e._key(),t)}function JS(e){return RI(e._redirectPersistence)}function ZS(e){return dT("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(e,t,n){return async function(e,t,n){const i=CT(e);AI(e,t,HT);const s=US(i,n);return await YS(s,i),s._openRedirect(i,t,"signInViaRedirect")}(e,t,n)}function tk(e,t,n){return async function(e,t,n){const i=yi(e);AI(i.auth,t,HT);const s=US(i.auth,n);await YS(s,i.auth);const r=await rk(i);return s._openRedirect(i.auth,t,"reauthViaRedirect",r)}(e,t,n)}function nk(e,t,n){return async function(e,t,n){const i=yi(e);AI(i.auth,t,HT);const s=US(i.auth,n);await uE(!1,i,t.providerId),await YS(s,i.auth);const r=await rk(i);return s._openRedirect(i.auth,t,"linkViaRedirect",r)}(e,t,n)}async function ik(e,t){return await CT(e)._initializationPromise,sk(e,t,!1)}async function sk(e,t,n=!1){const i=CT(e),s=US(i,t),r=new QS(i,s,n),o=await r.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}async function rk(e){const t=uS(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ck(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!ck(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(SI(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ak(e))}saveEventToCache(e){this.cachedEventUids.add(ak(e)),this.lastProcessedEventTime=Date.now()}}function ak(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function ck({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const uk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lk=/^https?/;async function hk(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return HI(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(dk(e))return}catch(e){}EI(e,"unauthorized-domain")}function dk(e){const t=PI(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===i}if(!lk.test(n))return!1;if(uk.test(e))return i===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fk=new VI(3e4,6e4);function pk(){const e=hS().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let mk=null;function gk(e){return mk=mk||function(e){return new Promise(((t,n)=>{var i,s,r;function o(){pk(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{pk(),n(SI(e,"network-request-failed"))},timeout:fk.get()})}if(null===(s=null===(i=hS().gapi)||void 0===i?void 0:i.iframes)||void 0===s?void 0:s.Iframe)t(gapi.iframes.getContext());else{if(!(null===(r=hS().gapi)||void 0===r?void 0:r.load)){const t=bS("iframefcb");return hS()[t]=()=>{gapi.load?o():n(SI(e,"network-request-failed"))},_S(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw mk=null,e}))}(e),mk}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk=new VI(5e3,15e3),vk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _k(e){const t=e.config;DI(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?qI(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:"9.10.0"},s=wk.get(e.config.apiHost);s&&(i.eid=s);const r=e._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${hi(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Ik{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Tk(e,t,n,i=500,s=600){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},bk),{width:i.toString(),height:s.toString(),top:r,left:o}),u=ei().toLowerCase();n&&(a=yT(u)?"_blank":n),mT(u)&&(t=t||"http://localhost",c.scrollbars="yes");const l=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=ei()){var t;return IT(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new Ik(null);const h=window.open(t||"",a,l);DI(h,e,"popup-blocked");try{h.focus()}catch(e){}return new Ik(h)}function Ek(e,t,n,i,s,r){DI(e.config.authDomain,e,"auth-domain-config-required"),DI(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:"9.10.0",eventId:s};if(t instanceof HT){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",ci(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(r||{}))o[e]=t}if(t instanceof zT){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?qI(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${hi(a).slice(1)}`}const Sk=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=aS,this._completeRedirectFn=sk,this._overrideRedirectResult=XS}async _openPopup(e,t,n,i){var s;xI(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");return Tk(e,Ek(e,t,n,PI(),i),uS())}async _openRedirect(e,t,n,i){var s;return await this._originValidation(e),s=Ek(e,t,n,PI(),i),hS().location.href=s,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(xI(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await gk(e),n=hS().gapi;return DI(n,e,"internal-error"),t.open({where:document.body,url:_k(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vk,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const s=SI(e,"network-request-failed"),r=hS().setTimeout((()=>{i(s)}),yk.get());function o(){hS().clearTimeout(r),n(t)}t.ping(o).then(o,(()=>{i(s)}))}))))}(e),n=new ok(e);return t.register("authEvent",(t=>{DI(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const s=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==s&&t(!!s),EI(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=hk(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ET()||gT()||IT()}};class kk extends class{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return NI("unexpected MultiFactorSessionType")}}}{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new kk(e)}_finalizeEnroll(e,t,n){return function(e,t){return HI(e,"POST","/v2/accounts/mfaEnrollment:finalize",GI(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return function(e,t){return HI(e,"POST","/v2/accounts/mfaSignIn:finalize",GI(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Ak{constructor(){}static assertion(e){return kk._fromCredential(e)}}Ak.FACTOR_ID="phone";var Ck;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){DI(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nk(e=is()){const t=Zi(e,"auth");return t.isInitialized()?t.getImmediate():LI(e,{popupRedirectResolver:Sk,persistence:[wS,rS,aS]})}Ck="Browser",Ji(new vi("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:r}=n.options;return((e,n)=>{DI(s&&!s.includes(":"),"invalid-api-key",{appName:e.name}),DI(!(null==r?void 0:r.includes(":")),"argument-error",{appName:e.name});const i={apiKey:s,authDomain:r,clientPlatform:Ck,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ST(Ck)},o=new AT(e,n,i);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(RI);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Ji(new vi("auth-internal",(e=>(e=>new Dk(e))(CT(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),ss("@firebase/auth","0.20.7",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Ck)),ss("@firebase/auth","0.20.7","esm2017"),t(uI,lI);const xk=function(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw ts.create("bad-app-name",{appName:String(i)});const s=Qi.get(i);if(s){if(ui(e,s.options)&&ui(n,s.config))return s;throw ts.create("duplicate-app",{appName:i})}const r=new _i(i);for(const e of Yi.values())r.addComponent(e);const o=new ns(e,n,r);return Qi.set(i,o),o}({apiKey:"AIzaSyClKsQ0RqE67VEGi0ly_cK2tHKmtQpNC08",authDomain:"diplomski-risuio.firebaseapp.com",projectId:"diplomski-risuio",storageBucket:"diplomski-risuio.appspot.com",messagingSenderId:"880031557579",appId:"1:880031557579:web:d283e5b95f01059c72384e"}),Ok=d_(xk),Rk=Nk(xk);null===localStorage.getItem("log")&&localStorage.setItem("log","false"),null===localStorage.getItem("theme")&&localStorage.setItem("theme","light"),null===localStorage.getItem("language")&&localStorage.setItem("language","EN"),null!==localStorage.getItem("search")&&"http://localhost:1234/index.html"!==location.href||localStorage.setItem("search",JSON.stringify({from:"",to:""}));const Lk=async(e,t)=>{const n=io.doc(Ok,e,t);return await io.getDoc(n)},Pk=async(e,t,n,i)=>{try{const s=io.query(io.collection(Ok,e),io.where(n,t,i));return await io.getDocs(s)}catch(e){}},Mk=async(e,t,n,i,s,r,o)=>{try{const a=io.query(io.collection(Ok,e),io.where(n,t,i),io.where(r,s,o));return await io.getDocs(a)}catch(e){}},Uk=async e=>await io.getDocs(io.collection(Ok,e)),Fk=async(e,t,n)=>{try{const i=io.doc(Ok,e,t);await io.updateDoc(i,n)}catch(e){}},Vk=async e=>{try{const t=zn.getStorage();return await Wr(zn.ref(t,e))}catch(e){}};var qk=new class{profilePfp=document.querySelector(".profile-pfp");profileName=document.querySelector(".profile-name");profileEmail=document.querySelector(".profile-email");allFlights=document.querySelector(".all-flights");userData=JSON.parse(localStorage.getItem("loggedUser"));async renderProfile(){try{const e=await Vk(`pfp/${this.userData.pfp}`);this.profilePfp.setAttribute("src",e),this.profileName.textContent=`${this.userData.firstName} ${this.userData.lastName}`,this.profileEmail.textContent=this.userData.email;(await Pk("users","==","email",this.userData.email))?.forEach((e=>e.data().reservations.forEach((async e=>{try{const t=`\n            <div class="d-flex flex-lg-row flex-md-column flex-sm-column mb-5 w-100 py-5 bg-white shadow">\n              <div class="d-flex flex-row mb-lg-0 mb-md-3 mb-sm-3">\n                <img class="mx-5 img-fluid my-auto" src="${await Vk(`airlines/${e.airline}.png`)}" alt="airway" style="width: 100px" />\n                <p class="text-center my-auto fs-4 me-lg-5 ms-lg-0 ms-md-auto ms-sm-auto">${e.date}</p>\n                <p class="text-center my-auto fs-4 mx-5">${e.time}</p>\n              </div>\n              <div class="d-flex flex-row ms-auto mb-lg-0 mb-md-3 mb-sm-3">\n                <p class="text-center my-auto fs-4 mx-5">${e.airports}</p>\n                <p class="text-center my-auto fs-4 me-5">${e.seats} ${Number(e.seats)>1?"TICKETS":"&nbsp TICKET"}</p>\n              </div>\n            </div>\n            `;this.allFlights?.insertAdjacentHTML("afterbegin",t)}catch(e){}}))))}catch(e){}}};var Bk=new class{destinationsContainer=document.querySelector(".destinations-container");searchInputs=JSON.parse(localStorage.getItem("search"));async renderDestinations(){(await Uk("destinations")).forEach((async e=>{let t=await Vk(`destinations/${e.data().place.toLowerCase()}.jpg`);t||(t=await Vk("destinations/default.jpg")),console.log(e.data().place);const n=`\n        <div class="col-lg-3 col-md-5 col-sm-6 d-flex flex-column mb-5">\n            <img class="destination-card img-fluid" src="${t}" alt=""  style="cursor: pointer"  id="${e.data().place}" />\n            <div class="d-flex flex-column">\n                <p class="fs-2 fw-normal mt-3 m-0">${e.data().place}</p>\n                <p class="fs-4 fw-lighter mt-1 mb-0">${e.data().country}</p>\n            </div>\n        </div>\n    `;this.destinationsContainer.insertAdjacentHTML("afterbegin",n)})),document.addEventListener("click",(e=>{e.target.classList.contains("destination-card")&&(this.searchInputs.from="Belgrade",this.searchInputs.to=e.target.id,console.log(e.target.id),localStorage.setItem("search",JSON.stringify(this.searchInputs)),location.href="http://localhost:1234/flights.html")}))}};var jk=new class{userDropdown=document.querySelector(".user-dropdown");signinBtn=document.querySelector(".signin-btn");pfpDropdown=document.querySelector(".pfp-dropdown");dropEmail=document.querySelector(".drop-email");adminLink=document.querySelector(".admin-link");spinner=document.querySelector(".spinner");contentContainer=document.querySelector(".content-container");footerContainer=document.querySelector(".footer-container");userData=JSON.parse(localStorage.getItem("loggedUser"));removeSpinner(){setTimeout((()=>{this.spinner.classList.replace("d-flex","d-none"),this.contentContainer.classList.remove("d-none"),this.footerContainer.classList.remove("d-none")}),250)}async renderNav(){try{if("true"===localStorage.getItem("log")){this.userDropdown.classList.remove("d-none"),this.signinBtn.classList.add("d-none");const e=await Vk(`pfp/${this.userData.pfp}`);this.pfpDropdown.insertAdjacentHTML("afterbegin",`<img class="nav-pfp mb-1" src="${e}" alt="pfp" style="width: 40px; border-radius: 20px"\n        />`),this.dropEmail.textContent=this.userData.email,1==this.userData.admin&&this.adminLink.classList.remove("d-none"),this.removeSpinner()}else this.userDropdown.classList.add("d-none"),this.signinBtn.classList.remove("d-none"),this.removeSpinner()}catch(e){}}addLoginHandler(e,t,n){t.forEach(((t,i)=>0===i?e.addEventListener(t,n):document.addEventListener(t,(e=>{"Enter"===e.key&&n()}))))}addLogoutHandler(e,t){document.addEventListener(e,(e=>{e.target.classList.contains("logout-btn")&&t()}))}};var $k=new class{from=document.querySelector(".from-input");to=document.querySelector(".to-input");searchContainer=document.querySelector(".search-container");searchHash=document.querySelector(".search-hash");searchInputs=JSON.parse(localStorage.getItem("search"));userData=JSON.parse(localStorage.getItem("loggedUser"));async renderSearchResults(){try{if(this.from.setAttribute("value",this.searchInputs.from),this.to.setAttribute("value",this.searchInputs.to),"http://localhost:1234/flights.html"===location.href){let e=await Mk("flights","==","from",this.searchInputs.from.toLowerCase(),"==","to",this.searchInputs.to.toLowerCase());this.searchHash.textContent=`${this.searchInputs.from.toUpperCase()} - ${this.searchInputs.to.toUpperCase()}`,this.searchContainer.innerHTML="",e?.forEach((async e=>{try{const t=`\n            <div class="d-flex flex-lg-row flex-md-column flex-sm-column mb-5 w-100 py-5 bg-white shadow">\n                <div class="d-flex flex-row mb-lg-0 mb-md-3 mb-sm-3">\n                    <img class="mx-5 img-fluid my-auto" src="${await Vk(`airlines/${e.data().airline.toLowerCase()}.png`)}" alt="" style="width: 100px" />\n                    <p class="text-center my-auto fs-4 me-lg-5 ms-lg-0 ms-md-auto ms-sm-auto">${e.data().date}</p>\n                    <p class="text-center my-auto fs-4 mx-5">${e.data().time}</p>\n                </div>\n                <div class="d-flex flex-row mb-lg-0 mb-md-3 mb-sm-3">\n                    <p class="text-center my-auto fs-4 mx-5">${e.data().airports}</p>\n                    <p class="text-center my-auto fs-4 me-lg-5 me-md-auto me-sm-auto ms-lg-5 ms-md-5 ms-sm-5">${void 0===e.data().seats?"SOLD OUT":e.data().seats} ${e.data().seats>1&&void 0!==e.data().seats?"SEATS":""}</p>\n                    <p class="text-center my-auto fs-4 mx-5">${e.data().price}</p>\n                    \n                </div>\n                <input type="number" class="ticket-quantity text-center mx-5 my-auto" value="1" style="width:50px; height:40px"/>\n                ${void 0===e.data().seats?'<button type="button" class="btn btn-riot-red fs-5 ms-lg-auto me-lg-5 mx-lg-0 mx-md-5 mx-sm-5 mt-lg-0 mt-md-3 mt-sm-3 px-4" disabled>SOLD</button>':`<button type="button" class="reserve-btn btn btn-riot-red fs-5 ms-lg-auto me-lg-5 mx-lg-0 mx-md-5 mx-sm-5 mt-lg-0 mt-md-3 mt-sm-3" id="${e.id}">RESERVE</button>`}\n\n            </div>\n            `;this.searchContainer.insertAdjacentHTML("afterbegin",t)}catch(e){}}))}}catch(e){}}addSearchHandler(e,t){e.forEach(((e,n)=>e.addEventListener(t,(()=>{0==n&&(this.searchInputs.from=e.value),1==n&&(this.searchInputs.to=e.value),localStorage.setItem("search",JSON.stringify(this.searchInputs)),this.searchContainer=document.querySelector(".search-container"),"http://localhost:1234/flights.html"===location.href&&this.renderSearchResults()}))))}async addReserveHandler(){try{const e=[];let t=!1;const n=await Lk("users",this.userData.id);n.data().cart.forEach((t=>{e.push(t)})),document.addEventListener("click",(async i=>{const s=i.target,r=Number(s.previousElementSibling?.value);if(s.classList.contains("reserve-btn")){const s=await Lk("flights",i.target.id),o={...s.data(),id:s.id};console.log(o),e.map((e=>{e.id===o.id&&(e.seats=String(Number(e.seats)+r),t=!0)})),!1===t&&(o.seats=r,e.push(o)),Fk("users",n.id,{cart:e}),this.userData.cart=e,localStorage.setItem("loggedUser",JSON.stringify(this.userData))}}))}catch(e){}}};var Gk=new class{checkoutContainer=document.querySelector(".checkout-container");totalPrice=document.querySelector(".price-total");confirmBtn=document.querySelector(".confirm-btn");userData=JSON.parse(localStorage.getItem("loggedUser"));async renderCheckout(){try{let e=await Lk("users",this.userData.id),t=0;const n=e.data();this.checkoutContainer.innerHTML="",n?.cart?.forEach((async e=>{try{const n=Number(e.price.substring(1));t+=Number(e.seats)*n;const i=`\n            <div class="d-flex flex-lg-row flex-md-column flex-sm-column mb-5 w-100 py-5 bg-white shadow">\n                <div class="d-flex flex-row mb-lg-0 mb-md-3 mb-sm-3">\n                    <img class="mx-5 img-fluid my-auto" src="${await Vk(`airlines/${e.airline.toLowerCase()}.png`)}" alt="" style="width: 100px" />\n                    <p class="text-center my-auto fs-4 me-lg-5 ms-lg-0 ms-md-auto ms-sm-auto">${e.date}</p>\n                    <p class="text-center my-auto fs-4 mx-5">${e.time}</p>\n                </div>\n                <div class="d-flex flex-row mb-lg-0 mb-md-3 mb-sm-3">\n                    <p class="text-center my-auto fs-4 mx-5">${e.airports}</p>\n                    <p class="text-center my-auto fs-4 me-lg-5 me-md-auto me-sm-auto ms-lg-5 ms-md-5 ms-sm-5">${void 0===e.seats?"SOLD OUT":e.seats} ${e.seats>1&&void 0!==e.seats?"SEATS":"SEAT"}</p>\n                    <p class="text-center my-auto fs-4 mx-5">${e.price} x ${e.seats}</p>\n                    \n                </div>\n                ${void 0===e.seats?'<button type="button" class="btn btn-riot-red fs-5 ms-lg-auto me-lg-5 mx-lg-0 mx-md-5 mx-sm-5 mt-lg-0 mt-md-3 mt-sm-3 px-4" disabled>SOLD</button>':`<button type="button" class="remove-btn btn btn-riot-red fs-5 ms-lg-auto me-lg-5 mx-lg-0 mx-md-5 mx-sm-5 mt-lg-0 mt-md-3 mt-sm-3" id="${e.id}">REMOVE</button>`}\n\n            </div>\n            `;this.checkoutContainer.insertAdjacentHTML("afterbegin",i)}catch(e){}})),this.totalPrice.textContent=`TOTAL: $${t}`}catch(e){}}async addRemoveHandler(){try{const e=[],t=await Lk("users",this.userData.id);t.data().cart.forEach((t=>{e.push(t)})),document.addEventListener("click",(async n=>{const i=n.target;i.classList.contains("remove-btn")&&e.map(((n,s)=>{n.id===i.id&&(e.splice(s,1),Fk("users",t.id,{cart:e}),this.userData.cart=e,localStorage.setItem("loggedUser",JSON.stringify(this.userData)),this.renderCheckout())}))}))}catch(e){}}async addConfirmHandler(){try{const e=[],t=await Lk("users",this.userData.id),n=t.data();n.cart.forEach((t=>{e.push(t)}));const i=[...e];n.reservations.forEach((e=>{i.push(e)})),this.confirmBtn.addEventListener("click",(async()=>{Fk("users",t.id,{cart:[],reservations:i}),this.userData.cart=[],localStorage.setItem("loggedUser",JSON.stringify(this.userData)),this.renderCheckout()}))}catch(e){}}};var Hk=new class{profilePfp=document.querySelector(".profile-pfp");editName=document.querySelector(".edit-name");resetPassword=document.querySelector(".reset-password-link");confirmChangeBtn=document.querySelector(".confirm-change-btn");uploadImg=document.querySelector(".upload-img");userData=JSON.parse(localStorage.getItem("loggedUser"));async renderEdit(){try{const e=await Vk(`pfp/${this.userData.pfp}`);this.profilePfp.setAttribute("src",e);const t=await Lk("users",this.userData.id);this.editName.value=`${t?.data().firstName} ${t?.data().lastName}`,this.confirmChangeBtn.addEventListener("click",(async()=>{try{const e=this.editName.value.split(" ");Fk("users",this.userData.id,{firstName:e[0],lastName:e[1]}),this.userData.firstName=e[0],this.userData.lastName=e[1],localStorage.setItem("loggedUser",JSON.stringify(this.userData)),setTimeout((()=>{location.href="http://localhost:1234/profile.html"}),500)}catch(e){}})),this.resetPassword.addEventListener("click",(()=>{console.log("click");const e=this.userData.email;uI.sendPasswordResetEmail(Rk,e).then((()=>{console.log("email sent")})).catch((e=>{e.code,e.message}))})),this.uploadImg.addEventListener("change",(async e=>{const t=zn.getStorage(),n=String(this.uploadImg.value).split("\\")[2],i=zn.ref(t,`pfp/${n}`);await zn.uploadBytes(i,e.target.files[0]);const s=await Vk(`pfp/${n}`);this.profilePfp.setAttribute("src",s),this.userData.pfp=n,localStorage.setItem("loggedUser",JSON.stringify(this.userData))}))}catch(e){}}};const zk=document.querySelector(".log-email"),Kk=document.querySelector(".log-password"),Wk=document.querySelector(".reg-email"),Qk=document.querySelector(".reg-password"),Yk=document.querySelector(".reg-cpassword"),Xk=document.querySelector(".log-btn"),Jk=document.querySelector(".reg-btn"),Zk=document.querySelectorAll(".from-input"),eA=document.querySelectorAll(".to-input"),tA=async()=>{const e=zk?.value,t=Kk?.value;uI.signInWithEmailAndPassword(Rk,e,t).then((e=>{console.log(e.user),console.log({success:"User logged succesfuly."}),localStorage.setItem("log","true")})).then((()=>{const t=io.query(io.collection(Ok,"users"),io.where("email","==",e));return io.getDocs(t)})).then((e=>{e.forEach((e=>{const t={id:e.id,...e.data()};localStorage.setItem("loggedUser",JSON.stringify(t))})),location.href="./index.html"})).catch((e=>{console.log({error:e.message}),console.log(e.code)}))},nA=()=>{const e=Wk?.value,t=Qk?.value,n=Yk?.value;t===n&&uI.createUserWithEmailAndPassword(Rk,e,t).then((e=>{console.log(e.user),console.log({success:"User registered succesfuly."})})).then((()=>{const t={firstName:"",lastName:"",email:e,pfp:"default-pfp.png",cart:[],reservations:[]},n=io.doc(io.collection(Ok,"users"));io.setDoc(n,t)})).catch((e=>{console.log({error:e.message}),console.log(e.code)}))},iA=()=>{localStorage.setItem("log","false"),localStorage.removeItem("loggedUser"),location.href="./index.html"};jk.renderNav(),jk.addLogoutHandler("click",iA),jk.addLoginHandler(Xk,["click","keypress"],tA),"http://localhost:1234/register.html"===location.href&&Hn.addRegisterHandler(Jk,["click","keypress"],nA),"http://localhost:1234/profile.html"===location.href&&qk.renderProfile(),"http://localhost:1234/destinations.html"===location.href&&Bk.renderDestinations(),"http://localhost:1234/index.html"!==location.href&&"http://localhost:1234/flights.html"!==location.href||($k.renderSearchResults(),$k.addSearchHandler([...Zk,...eA],"keyup"),$k.addReserveHandler()),"http://localhost:1234/checkout.html"===location.href&&(Gk.renderCheckout(),Gk.addRemoveHandler(),Gk.addConfirmHandler()),"http://localhost:1234/editProfile.html"===location.href&&Hk.renderEdit();
//# sourceMappingURL=index.18273a20.js.map
