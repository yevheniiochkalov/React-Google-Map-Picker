(this["webpackJsonpreact-google-map-picker-example"]=this["webpackJsonpreact-google-map-picker-example"]||[]).push([[0],{12:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=(n(8),n(1)),c=n.n(o),i=n(5),s=n.n(i),l=n(4),u=n(2);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e,t){if(function(e){for(var t=document.head.getElementsByTagName("script"),n=0;n<t.length;n++)if(t[n].getAttribute("id")===e)return!0;return!1}(t))return new Promise((function(e){return setTimeout(e,500)}));var n=document.createElement("script");return n.setAttribute("async",""),n.setAttribute("id",t),n.src=e,document.querySelector("head").appendChild(n),new Promise((function(e){n.onload=function(){e()}}))}!function(e){e.Roadmap="roadmap",e.Satellite="satellite",e.Hybrid="hybrid",e.Terrain="terrain"}(a||(a={}));var m=function(e){var t=e.apiKey,n=e.defaultLocation,a=e.zoom,r=void 0===a?7:a,o=e.onChangeLocation,i=e.onChangeZoom,s=e.style,l=e.className,u=e.mapTypeId,m="google-map-view-"+Math.random().toString(36).substr(2,9),j=c.a.useRef(null),b=c.a.useRef(null);function g(){if(o){var e=b.current.getPosition();o(e.lat(),e.lng())}}function h(){i&&i(j.current.getZoom())}function f(){var e,t=window.google,a=(e=n)&&Math.abs(e.lat)<=90&&Math.abs(e.lng)<=180?n:{lat:0,lng:0};j.current=new t.maps.Map(document.getElementById(m),d({center:a,zoom:r},u&&{mapTypeId:u})),b.current?b.current.setPosition(a):(b.current=new t.maps.Marker({position:a,map:j.current,draggable:!0}),t.maps.event.addListener(b.current,"dragend",g)),j.current.addListener("click",(function(e){var t=e.latLng;b.current.setPosition(t),g()})),j.current.addListener("zoom_changed",h)}c.a.useEffect((function(){p("https://maps.googleapis.com/maps/api/js?libraries=places&key="+t,"google-maps-"+t).then(f)}),[]),c.a.useEffect((function(){b.current&&(j.current.setCenter(n),b.current.setPosition(n))}),[n]),c.a.useEffect((function(){j.current&&j.current.setZoom(r)}),[r]);var O=Object.assign({width:"100%",height:"600px"},s||{});return c.a.createElement("div",{id:m,style:O,className:l})},j={lat:10,lng:106},b=function(){var e=Object(o.useState)(j),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(o.useState)(n),i=Object(u.a)(c,2),s=i[0],d=i[1],p=Object(o.useState)(10),b=Object(u.a)(p,2),g=b[0],h=b[1];function f(e,t){d({lat:e,lng:t})}function O(e){h(e)}return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("button",{onClick:function(){a(Object(l.a)({},j)),d(Object(l.a)({},j)),h(10)},children:"Reset Location"}),Object(r.jsx)("label",{children:"Latitute:"}),Object(r.jsx)("input",{type:"text",value:s.lat,disabled:!0}),Object(r.jsx)("label",{children:"Longitute:"}),Object(r.jsx)("input",{type:"text",value:s.lng,disabled:!0}),Object(r.jsx)("label",{children:"Zoom:"}),Object(r.jsx)("input",{type:"text",value:g,disabled:!0}),Object(r.jsxs)("div",{class:"row",children:[Object(r.jsxs)("div",{class:"column",children:[Object(r.jsx)("h4",{children:"Map 1 (roadmap)"}),Object(r.jsx)(m,{defaultLocation:n,zoom:g,mapTypeId:"roadmap",style:{height:"700px"},onChangeLocation:f,onChangeZoom:O,apiKey:"AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8"})]}),Object(r.jsxs)("div",{class:"column",children:[Object(r.jsx)("h4",{children:"Map 2 (satellite)"}),Object(r.jsx)(m,{defaultLocation:n,zoom:g,mapTypeId:"satellite",style:{height:"700px"},onChangeLocation:f,onChangeZoom:O,apiKey:"AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8"})]})]})]})};s.a.render(Object(r.jsx)(b,{}),document.getElementById("root"))},8:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.4c6789c7.chunk.js.map