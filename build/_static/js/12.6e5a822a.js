(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{420:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=420},429:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));n(51),n(52),n(53),n(122),n(306),n(40),n(417),n(54),n(55),n(41),n(123),n(56),n(307),n(57);var i=n(0),o=n.n(i);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=n(419);window.Cesium=f,n(421);var p=function(e){function t(){var e,n,i,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var u=arguments.length,c=new Array(u),f=0;f<u;f++)c[f]=arguments[f];return i=this,n=!(o=(e=s(t)).call.apply(e,[this].concat(c)))||"object"!==r(o)&&"function"!=typeof o?a(i):o,l(a(n),"_viewer",void 0),l(a(n),"state",{beActived:!1}),n}var n,i,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,e),n=t,f=[{key:"ins",get:function(){var e=this;return null!=this._ins?Promise.resolve(this._ins):new Promise((function(t,n){e.listener.push((function(e){t(e)}))}))}},{key:"__ins",set:function(e){t.listener.length>0&&(t.listener.forEach((function(t){return t(e)})),t.listener=[]),this._ins=e}}],(i=[{key:"componentDidMount",value:function(){0!=this.props.setUp&&this.setUp(),t.__ins=this}},{key:"setUp",value:function(){console.warn("ceisum 启动！！"),this.setState({beActived:!0}),Cesium.Ion.defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiMzJmNDgwZi1iNmQ2LTQ0NWEtOWRkNi0wODkxYzYxYTg0ZDIiLCJpZCI6ODUzMiwic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU1MjIwMjY4OH0.u4d7x0IxZY06ThT4JFmxrfgBxVjQcfI6xXDLu-fsWsY";var e,t=new Cesium.Viewer(this.containerId,d.MAPOPTIONS);return t.cesiumWidget.creditContainer.style.display="none",t.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK),t.scene.globe.enableLighting=d.global.enableLighting,t.scene.globe.depthTestAgainstTerrain=d.global.depthTestAgainstTerrain,t.scene.highDynamicRange=!0,t.frameUpdate=new Cesium.Event,t.scene.preUpdate.addEventListener((function(n){var i=Date.now(),o=null!=e?i-e:0;e=i,t.frameUpdate.raiseEvent(o)})),null!=this.props.onViewerLoaded&&this.props.onViewerLoaded(t),this._viewer=t,t}},{key:"destroy",value:function(){this.state.beActived&&(this.setState({beActived:!1}),this._viewer&&(console.warn("ceisum destroy！！"),this._viewer.destroy(),this._viewer=null))}},{key:"componentWillUnmount",value:function(){this.destroy()}},{key:"render",value:function(){var e={width:"100%",height:"100%",top:0,left:0,bottom:0,right:0,position:"absolute",display:this.state.beActived?"inline":"none"};return o.a.createElement("div",{id:this.containerId,style:e})}},{key:"containerId",get:function(){return this.props.id||"__cesiumContainer"}},{key:"viewer",get:function(){return this.state.beActived?this._viewer:this.setUp()}}])&&u(n.prototype,i),f&&u(n,f),t}(o.a.Component);l(p,"_ins",void 0),l(p,"listener",[]);var d={ION:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhMGRlYTM0ZS0zYjQzLTQ0N2EtYTk4ZS0zNmIwMmU3MDRkNTIiLCJpZCI6MTkzMSwiaWF0IjoxNTMwNzU5NTg3fQ.nt8CVoWjIXTeDM9T6qPs-dM7tb7IWnNc56mzAqhcBBY",global:{enableLighting:!1,depthTestAgainstTerrain:!0},MAPOPTIONS:{imageryProviderViewModels:[new Cesium.ProviderViewModel({name:"Google卫星",iconUrl:"http://img3.cache.netease.com/photo/0031/2012-03-22/7T6QCSPH1CA10031.jpg",tooltip:"Google卫星",creationFunction:function(){return new Cesium.UrlTemplateImageryProvider({url:"http://www.google.cn/maps/vt?lyrs=s&x={x}&y={y}&z={z}",tilingScheme:new Cesium.WebMercatorTilingScheme,minimumLevel:1,maximumLevel:200,credit:"Google Earth"})}})],shouldAnimate:!0,geocoder:!1,shadows:!1,terrainProviderViewModels:[],animation:!1,baseLayerPicker:!1,fullscreenButton:!1,vrButton:!1,homeButton:!1,infoBox:!1,sceneModePicker:!1,selectionIndicator:!1,timeline:!1,navigationHelpButton:!1,terrainShadows:Cesium.ShadowMode.DISABLED}}},503:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));n(51),n(52),n(53),n(122),n(40),n(418),n(54),n(55),n(41),n(56),n(57);var i=n(0),o=n.n(i),r=n(429),u=n(427);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function e(){p(this,e),d(this,"heightAdjust",0),d(this,"rotAngle",0)},h=function(e){function t(){var e,n,i,o;p(this,t);for(var r=arguments.length,u=new Array(r),a=0;a<r;a++)u[a]=arguments[a];return i=this,n=!(o=(e=c(t)).call.apply(e,[this].concat(u)))||"object"!==s(o)&&"function"!=typeof o?l(i):o,d(l(n),"gui",void 0),d(l(n),"bemount",void 0),n}var n,i,h;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(i=[{key:"handleViewerLoaded",value:function(e){var t=this,n=e.scene.primitives.add(new Cesium.Cesium3DTileset({url:"http://cloudv2bucket.oss-cn-shanghai.aliyuncs.com/185/1254/resultCC/Production_1.json",maximumScreenSpaceError:.8,maximumNumberOfLoadedTiles:100}));e.zoomTo(n);var i=new m,o=new u.a.GUI;this.gui=o,n.readyPromise.then((function(e){t.bemount&&o.add(i,"heightAdjust",-50,50).onChange((function(t){var n=Cesium.Ellipsoid.WGS84.geodeticSurfaceNormal(e.boundingSphere.center),i=Cesium.Cartesian3.multiplyByScalar(n,t,new Cesium.Cartesian3);e.modelMatrix=Cesium.Matrix4.fromTranslation(i)}))}))}},{key:"componentDidMount",value:function(){this.bemount=!0}},{key:"componentWillUnmount",value:function(){this.bemount=!1,this.gui&&this.gui.destroy()}},{key:"render",value:function(){return o.a.createElement(r.a,{id:this.constructor.name,onViewerLoaded:this.handleViewerLoaded.bind(this)})}}])&&a(n.prototype,i),h&&a(n,h),t}(o.a.Component)}}]);