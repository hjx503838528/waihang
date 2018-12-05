var __reflect=this&&this.__reflect||function(t,e,n){t.__class__=e,n?n.push(e):n=[e],t.__types__=t.__types__?n.concat(t.__types__):n},__extends=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);n.prototype=e.prototype,t.prototype=new n},__awaiter=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(a,r){function s(t){try{h(i.next(t))}catch(e){r(e)}}function o(t){try{h(i["throw"](t))}catch(e){r(e)}}function h(t){t.done?a(t.value):new n(function(e){e(t.value)}).then(s,o)}h((i=i.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function n(t){return function(e){return i([t,e])}}function i(n){if(a)throw new TypeError("Generator is already executing.");for(;h;)try{if(a=1,r&&(s=r[2&n[0]?"return":n[0]?"throw":"next"])&&!(s=s.call(r,n[1])).done)return s;switch(r=0,s&&(n=[0,s.value]),n[0]){case 0:case 1:s=n;break;case 4:return h.label++,{value:n[1],done:!1};case 5:h.label++,r=n[1],n=[0];continue;case 7:n=h.ops.pop(),h.trys.pop();continue;default:if(s=h.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){h=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){h.label=n[1];break}if(6===n[0]&&h.label<s[1]){h.label=s[1],s=n;break}if(s&&h.label<s[2]){h.label=s[2],h.ops.push(n);break}s[2]&&h.ops.pop(),h.trys.pop();continue}n=e.call(t,h)}catch(i){n=[6,i],r=0}finally{a=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var a,r,s,o,h={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return o={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o},BaseClass=function(){function t(){}return t.ins=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=this;if(!n._instance){var i=t.length;0==i?n._instance=new n:1==i?n._instance=new n(t[0]):2==i?n._instance=new n(t[0],t[1]):3==i?n._instance=new n(t[0],t[1],t[2]):4==i?n._instance=new n(t[0],t[1],t[2],t[3]):5==i&&(n._instance=new n(t[0],t[1],t[2],t[3],t[4]))}return n._instance},t}();__reflect(BaseClass.prototype,"BaseClass");var BaseView=function(t){function e(){var e=t.call(this)||this;return e.event=[],e}return __extends(e,t),e.prototype.childrenCreated=function(){},e.prototype.addTouchEvent=function(t,e){this.addEvent(egret.TouchEvent.TOUCH_TAP,t,e)},e.prototype.addTouchEndEvent=function(t,e){this.addEvent(egret.TouchEvent.TOUCH_END,t,e)},e.prototype.addChangeEvent=function(t,e){this.addEvent(egret.TouchEvent.CHANGE,t,e)},e.prototype.addEvent=function(t,e,n){e.addEventListener(t,n,this),this.event.push([t,n,e])},e.prototype.removeTouchEvent=function(t,e){t.removeEventListener(egret.TouchEvent.TOUCH_TAP,e,this)},e.prototype.removeEvents=function(){for(var t=0,e=this.event;t<e.length;t++){var n=e[t];n[2].removeEventListener(n[0],n[1],this)}this.event=[]},e.prototype.$onClose=function(){var t=function(n){for(var i=0;i<n.numChildren;i++){var a=n.getChildAt(i);a instanceof e?a.$onClose():a instanceof egret.DisplayObjectContainer&&t(a)}};t(this),this.removeEvents()},e.prototype.setSkinPart=function(n,i){if(t.prototype.setSkinPart.call(this,n,i),this.skin[n]&&this.skin[n]!=i){var a=this.skin[n].parent,r=a.getChildIndex(this.skin[n]);StageUtils.removeChild(this.skin[n]);for(var s=0;s<e.replaceKeys.length;s++){var o=e.replaceKeys[s];i[o]=this.skin[n][o]}this.skin[n]=i,a.addChildAt(i,r)}},e.replaceKeys=["x","y","alpha","anchorOffsetX","anchorOffsetY","blendMode","bottom","cacheAsBitmap","currentState","enabled","filters","height","horizontalCenter","hostComponentKey","includeInLayout","left","mask","matrix","maxHeight","maxWidth","minHeight","minWidth","name","percentHeight","percentWidth","right","rotation","scaleX","scaleY","scrollRect","skewX","skewY","skinName","top","touchChildren","touchEnabled","verticalCenter","visible","width"],e}(eui.Component);__reflect(BaseView.prototype,"BaseView");var ThemeAdapter=function(){function t(){}return t.prototype.getTheme=function(t,e,n,i){function a(t){e.call(i,t)}function r(e){e.resItem.url==t&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,r,null),n.call(i))}var s=this;if("undefined"!=typeof generateEUI)egret.callLater(function(){e.call(i,generateEUI)},this);else if("undefined"!=typeof generateEUI2)RES.getResByUrl("resource/gameEui.json",function(t,n){window.JSONParseClass.setData(t),egret.callLater(function(){e.call(i,generateEUI2)},s)},this,RES.ResourceItem.TYPE_JSON);else if("undefined"!=typeof generateJSON)if(t.indexOf(".exml")>-1){var o=t.split("/");o.pop();var h=o.join("/")+"_EUI.json";generateJSON.paths[t]?egret.callLater(function(){e.call(i,generateJSON.paths[t])},this):RES.getResByUrl(h,function(n){window.JSONParseClass.setData(n),egret.callLater(function(){e.call(i,generateJSON.paths[t])},s)},this,RES.ResourceItem.TYPE_JSON)}else egret.callLater(function(){e.call(i,generateJSON)},this);else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,r,null),RES.getResByUrl(t,a,this,RES.ResourceItem.TYPE_TEXT)},t}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var AwardItem=function(t){function e(){var e=t.call(this)||this;return e.skinName="AwardItemSkin",e}return __extends(e,t),e.prototype.dataChanged=function(){this.data},Object.defineProperty(e.prototype,"data",{get:function(){return this._data},set:function(t){this._data=t,eui.PropertyEvent.dispatchPropertyEvent(this,eui.PropertyEvent.PROPERTY_CHANGE,"data"),this.dataChanged()},enumerable:!0,configurable:!0}),e}(eui.ItemRenderer);__reflect(AwardItem.prototype,"AwardItem");var LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.addEventListener(egret.Event.ADDED_TO_STAGE,e.createView,e),e}return __extends(e,t),e.prototype.createView=function(){this.stageW=StageUtils.ins().getWidth(),this.stageH=StageUtils.ins().getHeight(),this.bg=new egret.Bitmap,this.bg.texture=RES.getRes("loading_bg_jpg"),this.bg.x=this.stageW/2-this.bg.width/2,this.addChildAt(this.bg,0);var t=new egret.Shape;t.graphics.beginFill(0,.6),t.graphics.drawRect(0,0,this.stageW,this.stageH),t.graphics.endFill(),this.addChild(t),this.con=new egret.DisplayObjectContainer,this.addChild(this.con),this.barBg=new egret.Bitmap,this.barBg.texture=RES.getRes("bar_bg");var e=new egret.Rectangle(34,30,5,3);this.barBg.scale9Grid=e,this.barBg.width=625,this.con.addChild(this.barBg),this.con.width=this.barBg.width,this.con.height=this.barBg.height,this.con.x=this.stageW/2-this.con.width/2,this.con.y=this.stageH/2-this.con.height/2-30;var n=new egret.Rectangle(12,10,1,1);this.bar=new egret.Bitmap,this.bar.texture=RES.getRes("bar_thumb"),this.bar.x=16,this.bar.y=18,this.bar.width=595,this.bar.scale9Grid=n,this.con.addChild(this.bar),this.mack=new egret.Bitmap,this.mack.texture=RES.getRes("black"),this.mack.x=this.bar.x,this.mack.y=this.bar.y,this.mack.width=0,this.mack.height=this.bar.height,this.con.addChild(this.mack),this.bar.mask=this.mack,this.textField=new egret.TextField,this.textField.width=200,this.textField.height=50,this.textField.size=24,this.textField.textColor=3355443,this.textField.textAlign=egret.HorizontalAlign.CENTER,this.textField.verticalAlign=egret.VerticalAlign.MIDDLE,this.textField.x=this.con.width/2-this.textField.width/2,this.textField.y=this.con.height/2-this.textField.height/2,this.con.addChild(this.textField);var i=new egret.TextField;i.width=200,i.size=34,i.textColor=13163263,i.textAlign=egret.HorizontalAlign.CENTER,i.text="加载中...",i.fontFamily="黑体",i.x=this.stageW/2-i.width/2,i.y=this.con.y+80,this.addChild(i)},e.prototype.onProgress=function(t,e){var n=Math.floor(t/e*100);this.textField.text=n+"%";var i=this.bar.width*(t/e);this.mack.width=i},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var BaseComponent=function(t){function e(){var e=t.call(this)||this;return e.className="使用此组件必须填写逻辑类名",e}return __extends(e,t),e.prototype.childrenCreated=function(){try{var t=window[this.className],n=new t;if(null!=n)for(var i in n)null!=this[i]&&-1==e.copyKeys.indexOf(i)||-1!=e.filterKeys.indexOf(i)||(this[i]=n[i]);this.init&&this.init()}catch(a){egret.log("BaseComponent的className为空："+egret.getQualifiedClassName(this)+"，请查看资源里面的BaseComponent组件是否有未绑定的逻辑类")}},e.prototype.open=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},e.prototype.close=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},Object.defineProperty(e.prototype,"data",{get:function(){return this._data},set:function(t){this._data=t,eui.PropertyEvent.dispatchPropertyEvent(this,eui.PropertyEvent.PROPERTY_CHANGE,"data"),this.dataChanged&&this.dataChanged()},enumerable:!0,configurable:!0}),e.filterKeys=["data"],e.copyKeys=["open","close"],e}(BaseView);__reflect(BaseComponent.prototype,"BaseComponent");var AssetAdapter=function(){function t(){}return t.prototype.getAsset=function(t,e,n){function i(i){e.call(n,i,t)}if(RES.hasRes(t)){var a=RES.getRes(t);a?i(a):RES.getResAsync(t,i,this)}else RES.getResByUrl(t,i,this,RES.ResourceItem.TYPE_IMAGE)},t}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var GameData=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.prototype.getUrlData=function(){var t=window.location.search,n={};if(-1!=t.indexOf("?")){for(var i=t.substr(1),a=i.split("&"),r=0;r<a.length;r++)n[a[r].split("=")[0]]=a[r].split("=")[1];e.token=n.token,e.id=n.id,e.avatarUrl=decodeURIComponent(n.avatarUrl),e.isSkip=n.skip,egret.log(n)}},e.prototype.getData=function(){var t=this;return new Promise(function(n,i){var a={token:e.token},r=new egret.HttpRequest;r.responseType=egret.HttpResponseType.TEXT,r.open(e.url,egret.HttpMethod.POST),r.setRequestHeader("Content-Type","application/json"),r.send(JSON.stringify(a)),r.addEventListener(egret.Event.COMPLETE,function(t){var i=t.currentTarget,a=JSON.parse(i.response).data;console.log(a),e.DATA=a,MapData.MAX=e.DATA.tasks.length;for(var r=e.DATA.tasks.length,s=0;r>s;s++)e.DATA.tasks[s].index=s+1;e.avatarUrl||(e.avatarUrl=e.DATA.user.avatarUrl),n(a)},t),r.addEventListener(egret.IOErrorEvent.IO_ERROR,function(t){i(t)},t)})},e.prototype.getCurIndex=function(){for(var t=0,n=e.DATA.tasks.length,i=0;n>i;i++)if(0==e.DATA.tasks[i].state){t=i;break}return t},e.ins=function(){return t.ins.call(this)},e.url="https://test.dingxiangsai.cn/api/goout/home",e.taskUrl="https://test.dingxiangsai.cn/api/goout/tasks/",e.txUrl="https://test.dingxiangsai.cn/api/goout/tasks/join/",e.token="o2O1G48pd9-3kXHK1wIcX3HxfkW4",e}(BaseClass);__reflect(GameData.prototype,"GameData");var GameUrl=function(){function t(){}return t.SELECTURL="/pages/TaskSelect/TaskSelect",t.PICTUREURL="/pages/TaskPicture/TaskPicture",t.VIDEOURL="/pages/TaskVideo/TaskVideo",t.AUDIOURL="/pages/TaskAudio/TaskAudio",t.CODEURL="/pages/TaskQrcode/TaskQrcode",t}();__reflect(GameUrl.prototype,"GameUrl");var Type;!function(t){t[t.SELECT=1]="SELECT",t[t.PICTURE=2]="PICTURE",t[t.VIDEO=3]="VIDEO",t[t.QR_CODE=4]="QR_CODE",t[t.AUDIO=5]="AUDIO"}(Type||(Type={}));var Http=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.ins=function(){return t.ins.call(this)},e.prototype.send=function(t,e,n,i,a,r,s){var o=new egret.HttpRequest;o.responseType=e?egret.HttpResponseType.TEXT:egret.HttpResponseType.ARRAY_BUFFER,o.open(t,n?egret.HttpMethod.GET:egret.HttpMethod.POST),o.once(egret.Event.COMPLETE,a,i),o.once(egret.IOErrorEvent.IO_ERROR,r?r:function(){},i),o.once(egret.ProgressEvent.PROGRESS,s?s:function(){},i),o.send()},e}(BaseClass);__reflect(Http.prototype,"Http");var ImageLoader=function(){function t(){}return t.Image=function(t){var e=this;return new Promise(function(n,i){var a=new egret.ImageLoader;a.once(egret.Event.COMPLETE,function(t){var e=t.currentTarget,i=e.data,a=new egret.Texture;a.bitmapData=i,n(a)},e),a.once(egret.IOErrorEvent.IO_ERROR,function(t){i(t)},e),t?a.load(t):i("图片地址不存在")})},t.createImg=function(t){return new Promise(function(e,n){var i=new Image;i.onload=function(){i.onload=null;var t=new egret.BitmapData(i),n=new egret.Texture;n.bitmapData=t;var a=new egret.Bitmap;a.texture=n,e(a)},i.src=t})},t.createImg2=function(t){return new Promise(function(e,n){var i=t.replace("data:image/png;base64,","");egret.BitmapData.create("base64",i,function(t){var n=new egret.Texture;n.bitmapData=t;var i=new egret.Bitmap(n);e(i)})})},t.imaBase64=function(t,e,n){void 0===e&&(e=!0),void 0===n&&(n=1);var i=new egret.RenderTexture,a=new egret.Rectangle(0,0,t.width,t.height);i.drawToTexture(t,a);var r=i.toDataURL(e?"image/png":"image/jpeg",a,n);return r},t}();__reflect(ImageLoader.prototype,"ImageLoader");var DebugPlatform=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var StageUtils=function(t){function e(){var n=t.call(this)||this;return n.top=0,null==e._uiStage&&(e._uiStage=new eui.UILayer,e._uiStage.touchEnabled=!1,e._uiStage.percentHeight=100,e._uiStage.percentWidth=100,n.getStage().addChild(e._uiStage)),n}return __extends(e,t),e.ins=function(){return t.ins.call(this)},e.prototype.getHeight=function(){return this.getStage().stageHeight},e.prototype.getWidth=function(){return this.getStage().stageWidth},e.prototype.setTouchChildren=function(t){this.getStage().touchChildren=t},e.prototype.setMaxTouches=function(t){this.getStage().maxTouches=t},e.prototype.setFrameRate=function(t){this.getStage().frameRate=t},e.prototype.setScaleMode=function(t){this.getStage().scaleMode=t},e.prototype.getStage=function(){return egret.MainContext.instance.stage},e.prototype.getUIStage=function(){return e._uiStage},e.addChild=function(t){null!=t&&e.ins().getUIStage().addChild(t)},e.removeChild=function(t){t&&null!=t.parent&&t.parent.removeChild(t)},e.w=540,e.h=930,e}(BaseClass);__reflect(StageUtils.prototype,"StageUtils");var Main=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.createChildren=function(){t.prototype.createChildren.call(this),egret.ImageLoader.crossOrigin="anonymous",egret.lifecycle.addLifecycleListener(function(t){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var e=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",e),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),GameData.ins().getUrlData(),this.runGame()["catch"](function(t){console.log(t)})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,this.loadResource()];case 1:return t.sent(),this.createGameScene(),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,5,,6]),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return n.sent(),t=new LoadingUI,[4,RES.loadGroup("loading")];case 2:return n.sent(),this.stage.addChild(t),[4,this.loadTheme()];case 3:return n.sent(),[4,RES.loadGroup("preload",0,t)];case 4:return n.sent(),this.stage.removeChild(t),[3,6];case 5:return e=n.sent(),console.error(e),[3,6];case 6:return[2]}})})},e.prototype.loadTheme=function(){var t=this;return new Promise(function(e,n){var i=new eui.Theme("resource/default.thm.json",t.stage);i.addEventListener(eui.UIEvent.COMPLETE,function(){e()},t)})},e.prototype.createGameScene=function(){StageUtils.removeChild(this),GameData.ins().getData().then(function(t){StageUtils.addChild(new GameWin),GameData.ins().isNewData=Utils.ins().isNewData(),GameData.ins().isNewData&&StageUtils.addChild(new SignInWin)})},e}(eui.UILayer);__reflect(Main.prototype,"Main");var Utils=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.ins=function(){return t.ins.call(this)},e.prototype.isNewData=function(){var t,e=new Date,n=e.getDate(),i=(e.getMonth()+1,e.getFullYear(),"data"),a=egret.localStorage.getItem(i);if(null==a||a!=n.toString()){var r=n.toString();egret.localStorage.setItem(i,r),t=!0}else t=!1;return t},e.prototype.playAnimation=function(t,e){if(e)for(var n in t.items)t.items[n].props={loop:!0};t.play()},e}(BaseClass);__reflect(Utils.prototype,"Utils");var GameWin=function(t){function e(){var e=t.call(this)||this;return e.max=30,e.skinName="GameSkin",e.percentHeight=e.percentWidth=100,e.addEventListener(egret.Event.ADDED_TO_STAGE,e.addtoStage,e),e.addEventListener(egret.Event.REMOVED_FROM_STAGE,e.removeStage,e),e}return __extends(e,t),e.prototype.addtoStage=function(){this.jiaBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.xiaoxiBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.bagBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.rankBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.helpBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.friendBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),Utils.ins().playAnimation(this.yun,!0),this.txImg.mask=this.rectMack,this.map=new Map,this.guankaCon.addChild(this.map),this.initData()},e.prototype.initData=function(){var t=this,e=GameData.DATA;GameData.avatarUrl&&ImageLoader.Image(GameData.avatarUrl).then(function(e){t.txImg.source=e}),e&&e.user&&(this.lvTxt.text="Lv."+e.user.level,this.goldTxt.text=e.user.coin+"",this.mdalTxt.text=e.user.medal+"")},e.prototype.onClick=function(t){switch(t.target){case this.xiaoxiBtn:StageUtils.addChild(new MessageWin);break;case this.bagBtn:break;case this.rankBtn:StageUtils.addChild(new RankWin);break;case this.helpBtn:var e="帮助文字一大堆啊啊啊帮助文字一大堆啊啊啊帮助文字一大堆啊啊啊帮助文字一大堆啊啊啊";StageUtils.addChild(new MessageWin("帮助",e));break;case this.friendBtn:StageUtils.addChild(new CommanView(0))}},e.prototype.removeStage=function(){this.jiaBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.xiaoxiBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.bagBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.rankBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.helpBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.friendBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.yun.stop()},e}(eui.Component);__reflect(GameWin.prototype,"GameWin");var GkItem=function(t){function e(){var e=t.call(this)||this;return e.strs=["icon_guanka1","icon_guanka2","icon_guanka3"],e.stateIcon=["icon13","icon14","icon15"],e.skinName="GkItemSkin",e.touchEnabled=!0,e.touchChildren=!1,e}return __extends(e,t),e.prototype.dataChanged=function(){var t=this.data;this.labelDisplay.text=t.index+"",0==t.state?(this.stateImg.visible=!1,this.iconDisplay.source=this.strs[0],this.touchEnabled=!1,t.index-1==GameData.ins().getCurIndex()&&(this.iconDisplay.source=this.strs[2],this.touchEnabled=!0)):(this.iconDisplay.source=this.strs[1],this.stateImg.visible=!0,this.touchEnabled=!0,this.stateImg.source="icon13")},e.prototype.setLable=function(t){this.labelDisplay.text=t+""},e.prototype.setIcon=function(t){this.iconDisplay.source=t},Object.defineProperty(e.prototype,"data",{get:function(){return this._data},set:function(t){this._data=t,eui.PropertyEvent.dispatchPropertyEvent(this,eui.PropertyEvent.PROPERTY_CHANGE,"data"),this.dataChanged()},enumerable:!0,configurable:!0}),e}(eui.ItemRenderer);__reflect(GkItem.prototype,"GkItem");var GuankaWin=function(t){function e(){var e=t.call(this)||this;return e.max=30,e.btnArr=[],e.skinName="GuanKaSkin",e.left=e.right=e.top=e.bottom=0,e.addEventListener(egret.Event.ADDED_TO_STAGE,e.addtoStage,e),e.addEventListener(egret.Event.REMOVED_FROM_STAGE,e.removeStage,e),e}return __extends(e,t),e.prototype.addtoStage=function(){for(var t=0;t<this.max;t++){var e=this["btn"+t];e.name=""+t,this.btnArr.push(e),e.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this)}this.setData()},e.prototype.setData=function(){if(GameData.DATA&&GameData.DATA.tasks){this.datas=GameData.DATA.tasks;for(var t=0;t<this.datas.length;t++){this.datas[t].state;this.datas[t].index=t+1;var e=this["btn"+t];e.data=this.datas[t]}}else console.log("数据异常")},e.prototype.onClick=function(t){if(t.target instanceof GkItem){var e=parseInt(t.target.name),n=void 0;n=e>=this.datas.length?this.datas.length-1:e;var i=this.datas[n];StageUtils.addChild(new TaskView(i))}},e.prototype.removeStage=function(){for(var t=0;t<this.btnArr.length;t++)this.btnArr[t].removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this)},e}(BaseView);__reflect(GuankaWin.prototype,"GuankaWin");var HomeScene=function(t){function e(){var e=t.call(this)||this;return e.skinName="HomeSkin",e.left=e.right=e.top=e.bottom=0,e.addEventListener(egret.Event.ADDED_TO_STAGE,e.addtoStage,e),e.addEventListener(egret.Event.REMOVED_FROM_STAGE,e.removeStage,e),e}return __extends(e,t),e.prototype.addtoStage=function(){this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),Utils.ins().playAnimation(this.yun,!0)},e.prototype.onClick=function(t){switch(t.target){case this.startBtn:StageUtils.removeChild(this),StageUtils.addChild(new GameWin),egret.localStorage.clear(),GameData.ins().isNewData=Utils.ins().isNewData(),GameData.ins().isNewData&&StageUtils.addChild(new SignInWin)}},e.prototype.removeStage=function(){this.startBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.yun.stop()},e}(eui.Component);__reflect(HomeScene.prototype,"HomeScene");var Map=function(t){function e(){var e=t.call(this)||this;return e.numArr=[[3,6,6],[4,6,6],[6,6],[6,6],[3,6,6],[6,6]],e.xArr=[[1,1,1],[-1,-1,-1],[0,0],[0,0],[1,1,1],[0,0]],e.yArr=[[0,1,2],[0,1,2],[1,2],[1,2],[0,1,2],[1,2]],e.skinName="MapSkin",e.left=e.right=e.top=e.bottom=0,e.addEventListener(egret.Event.ADDED_TO_STAGE,e.addtoStage,e),e.addEventListener(egret.Event.REMOVED_FROM_STAGE,e.removeStage,e),e}return __extends(e,t),e.prototype.addtoStage=function(){this.initGuanDao(),this.btnCon.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this)},e.prototype.onClick=function(t){t.target instanceof GkItem&&StageUtils.addChild(new TaskView(t.target.data))},e.prototype.initGuanDao=function(){if(this.btnArr=[],GameData.DATA&&GameData.DATA.tasks){for(var t=MapData.MAX,e=MapData.getMaxRow(t)+2,n=0;t>n;n++){for(var i=MapData.getIndex(n+1),a=MapData.guandao[i].gird.length,r=0;a>r;r++){var s=MapData.guandao[i].gird[r],o=MapData.getCorRow(s[2],n,t),h=new eui.Image;h.source="guandao"+s[1],h.x=200*s[0],h.y=200*(e-o),this.gdCon.addChild(h),n==t-1&&r==a-1&&(this.endPoint=new egret.Point(h.x,h.y),this.upEndGd(i,r))}var c=new GkItem;c.setLable(n+1),c.data=GameData.DATA.tasks[n];var d=MapData.getCorRow(MapData.guandao[i].row,n,t);c.x=MapData.guandao[i].x,c.y=200*(e-d)+MapData.guandao[i].y,n>=MapData.MAXNUM&&n%MapData.MAXNUM==0&&(c.y+=50),this.btnCon.addChild(c),this.btnArr.push(c)}this.setLayout()}},e.prototype.upEndGd=function(t,e){var n=MapData.guandao[t].gird.length,i=MapData.guandao[t].gird[e][1]-1;if(4==i){var a=MapData.guandao[t].gird[e][0],r=void 0;if(r=1==n?MapData.guandao[t-1].gird[MapData.guandao[t-1].gird.length-1][0]:MapData.guandao[t].gird[e-1][0],a>r)this.numArr[i][0]=3;else{this.numArr[i][0]=4;for(var s=0;s<this.xArr.length;s++)this.xArr[i][s]=-1}}MapData.MAX%MapData.MAXNUM>=20&&MapData.MAX%MapData.MAXNUM<=23?this.setDataArr(t,e):this.createRoad(t,e,i,this.numArr,this.xArr,this.yArr)},e.prototype.setDataArr=function(t,e){var n=[[3,5,4,6,6,6,6],[5,4,6,6,6,6],[4,6,6,6,6],[6,6,6]],i=[[0,-1,-2,-2,-2,-2,-2],[-1,-2,-2,-2,-2,-2],[-1,-1,-1,-1,-1],[0,0,0]],a=[[-1,-1,-1,0,1,2,3],[0,0,1,2,3,4],[0,1,2,3,4],[1,2,3]],r=MapData.MAX%MapData.MAXNUM-20;this.createRoad(t,e,r,n,i,a)},e.prototype.createRoad=function(t,e,n,i,a,r){for(var s=0;s<i[n].length;s++){var o=new eui.Image;o.source="guandao"+i[n][s];var h=200*(MapData.guandao[t].gird[e][0]+a[n][s]),c=this.endPoint.y-200*r[n][s];o.x=h,o.y=c,this.gdCon.addChild(o)}},e.prototype.setLayout=function(){var t=1334,e=t;this.gdCon.y+this.gdCon.height>this.height&&(e=this.gdCon.y+this.gdCon.height+100,this.mainCon.height=e);for(var n=Math.ceil(e/t),i=0;n>i;i++){var a=new eui.Image;a.source="bg1_png",a.y=i*t,this.bgCon.addChild(a)}this.bgCon.height=e>this.height?e:StageUtils.ins().getHeight(),this.scroller.height=StageUtils.ins().getHeight(),this.scroller.viewport.validateNow(),this.scroller.viewport.scrollV=this.scroller.viewport.contentHeight-this.scroller.height},e.prototype.removeStage=function(){this.btnCon.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this)},e}(eui.Component);__reflect(Map.prototype,"Map");var MapData=function(){function t(){}return t.getMaxRow=function(e){if(!(0>=e)){for(var n=t.getIndex(e),i=0,a=0;n>=a;a++)t.guandao[a].row>i&&(i=t.guandao[a].row);var r=i+t.getRow(e)*t.MAXROW;return r}},t.getIndex=function(e){var n;return n=e%t.MAXNUM==0?t.MAXNUM-1:e%t.MAXNUM-1},t.getRow=function(e){var n=Math.floor(e/t.MAXNUM);return e%t.MAXNUM==0&&(n=Math.floor(e/t.MAXNUM)-1),n},t.getCorRow=function(e,n,i){var a=0;return n<t.MAXNUM?a=e:n==t.MAXNUM?a=t.MAXROW:n>t.MAXNUM&&(a=n%t.MAXNUM==0?e+Math.floor(n/t.MAXNUM)*t.MAXROW:e+t.getRow(n)*t.MAXROW),a},t.MAXNUM=30,t.MAXROW=13,t.MAX=0,t.guandao=[{index:1,x:437.5,y:0,gird:[[2,6,0]],row:0},{index:2,x:380,y:50,gird:[[2,2,1]],row:1},{index:3,x:100,y:50,gird:[[1,5,1],[0,4,1]],row:1},{index:4,x:65,y:50,gird:[[0,1,2]],row:2},{index:5,x:300,y:50,gird:[[1,5,2],[2,5,2]],row:2},{index:6,x:575,y:50,gird:[[3,3,2]],row:2},{index:7,x:600,y:50,gird:[[3,2,3]],row:3},{index:8,x:365,y:50,gird:[[2,5,3],[1,4,3]],row:3},{index:9,x:237.5,y:150,gird:[[1,1,4]],row:4},{index:10,x:400,y:50,gird:[[2,3,4]],row:4},{index:11,x:350,y:50,gird:[[2,2,5],[1,5,5]],row:5},{index:12,x:100,y:50,gird:[[0,4,5]],row:5},{index:13,x:60,y:50,gird:[[0,1,6]],row:6},{index:14,x:350,y:50,gird:[[1,5,6],[2,5,6]],row:6},{index:15,x:637,y:50,gird:[[3,3,6]],row:6},{index:16,x:637,y:50,gird:[[3,6,7]],row:7},{index:17,x:637,y:50,gird:[[3,6,8]],row:8},{index:18,x:600,y:50,gird:[[3,2,9]],row:9},{index:19,x:380,y:50,gird:[[2,5,9]],row:9},{index:20,x:260,y:50,gird:[[1,1,9],[1,4,8],[2,2,8]],row:8},{index:21,x:380,y:50,gird:[[2,3,7]],row:7},{index:22,x:150,y:50,gird:[[1,5,7]],row:7},{index:23,x:37.5,y:70,gird:[[0,4,7],[0,6,8]],row:8},{index:24,x:37.5,y:70,gird:[[0,6,9]],row:9},{index:25,x:37.5,y:70,gird:[[0,1,10]],row:10},{index:26,x:237,y:50,gird:[[1,3,10]],row:10},{index:27,x:200,y:50,gird:[[1,2,11]],row:11},{index:28,x:40,y:150,gird:[[0,4,11],[0,1,12]],row:12},{index:29,x:200,y:50,gird:[[1,5,12]],row:12},{index:30,x:410,y:50,gird:[[2,3,12]],row:12}],t}();__reflect(MapData.prototype,"MapData");var MessageWin=function(t){function e(e,n){var i=t.call(this)||this;return i.viewHeight=0,i.skinName="MessageSkin",i.left=i.right=i.top=i.bottom=0,i.titleStr=e?e:null,i.contentStr=n?n:null,i.addEventListener(egret.Event.ADDED_TO_STAGE,i.addtoStage,i),i.addEventListener(egret.Event.REMOVED_FROM_STAGE,i.removeStage,i),i}return __extends(e,t),e.prototype.addtoStage=function(){this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.shade.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.initData()},e.prototype.initData=function(){this.titleStr&&(this.titleTxt.text=this.titleStr),this.contentStr&&(this.contentTxt.text=this.contentStr),this.viewHeight=this.contentTxt.y+this.contentTxt.height+249,this.viewHeight>this.bg.height&&(this.bg.height=this.viewHeight)},e.prototype.onClick=function(t){switch(t.target){case this.closeBtn:case this.shade:case this.startBtn:StageUtils.removeChild(this)}},e.prototype.removeStage=function(){this.closeBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.shade.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.startBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this)},e}(eui.Component);__reflect(MessageWin.prototype,"MessageWin");var RankItem=function(t){function e(){var e=t.call(this)||this;return e.skinName="RankItemSkin",e.iconImg.mask=e.mackRect,e}return __extends(e,t),e.prototype.dataChanged=function(){var t=this,e=this.data;e&&(ImageLoader.Image(e.source).then(function(e){t.iconImg.source=e}),this.lvTxt.text="Lv."+e.lv,this.nameTxt.text=e.name,e.rank<=3?(this.rankNum.visible=!1,this.rankIcon.visible=!0,this.rankIcon.source="rank"+e.rank):(this.rankNum.visible=!0,this.rankIcon.visible=!1,this.rankNum.text=e.rank))},e}(eui.ItemRenderer);__reflect(RankItem.prototype,"RankItem");var RankWin=function(t){function e(){var e=t.call(this)||this;return e.skinName="RankSkin",e.left=e.right=e.top=e.bottom=0,e.addEventListener(egret.Event.ADDED_TO_STAGE,e.addtoStage,e),e.addEventListener(egret.Event.REMOVED_FROM_STAGE,e.removeStage,e),e}return __extends(e,t),e.prototype.addtoStage=function(){this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.shade.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.initData()},e.prototype.initData=function(){for(var t=[],e=0;15>e;e++){var n={};n.rank=e+1,4>e?(n.lv=99,n.name="派大星"):(n.lv=9,n.name="派大星派大星派..."),n.source=GameData.avatarUrl,t.push(n)}this.list.itemRenderer=RankItem,this.list.dataProvider=new eui.ArrayCollection(t)},e.prototype.onClick=function(t){switch(t.target){case this.closeBtn:case this.shade:StageUtils.removeChild(this)}},e.prototype.removeStage=function(){this.closeBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.shade.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this)},e}(eui.Component);__reflect(RankWin.prototype,"RankWin");var CommanView=function(t){function e(e){var n=t.call(this)||this;return n.skinName="CommanViewSkin",n.left=n.right=n.top=n.bottom=0,n.editable.maxChars=4,n.editable.restrict="0-9",n.editable.inputType=egret.TextFieldInputType.TEL,n.currentState=0==e?"input":"output",n.addEventListener(egret.Event.ADDED_TO_STAGE,n.addtoStage,n),n.addEventListener(egret.Event.REMOVED_FROM_STAGE,n.removeStage,n),n}return __extends(e,t),e.prototype.addtoStage=function(){this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.shade.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.editable.addEventListener(egret.Event.CHANGE,this.setKeyNum,this),this.editable.addEventListener(egret.FocusEvent.FOCUS_IN,this.upEditableText,this),this.initData()},e.prototype.initData=function(){var t=this;this.txImg.mask=this.rectMack,GameData.avatarUrl&&(this.txImg.mask=this.rectMack,ImageLoader.Image(GameData.avatarUrl).then(function(e){t.txImg.source=e})),this.nameTxt.text=GameData.DATA.user.nickName},e.prototype.setKeyNum=function(){parseInt(this.editable.text);this.numTxt.text=this.editable.text},e.prototype.upEditableText=function(){this.editable.text="",this.numTxt.text=""},e.prototype.focusInHandler=function(){},e.prototype.onClick=function(t){switch(t.target){case this.startBtn:break;case this.closeBtn:case this.shade:StageUtils.removeChild(this)}},e.prototype.removeStage=function(){this.closeBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.startBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.shade.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.editable.removeEventListener(egret.Event.CHANGE,this.setKeyNum,this),this.editable.removeEventListener(egret.FocusEvent.FOCUS_IN,this.upEditableText,this)},e}(eui.Component);__reflect(CommanView.prototype,"CommanView");var FriendHelpView=function(t){function e(){var e=t.call(this)||this;return e.skinName="FriendHelpSkin",e.left=e.right=e.top=e.bottom=0,e.addEventListener(egret.Event.ADDED_TO_STAGE,e.addtoStage,e),e.addEventListener(egret.Event.REMOVED_FROM_STAGE,e.removeStage,e),e
}return __extends(e,t),e.prototype.addtoStage=function(){this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.refreshBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.shareBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.shade.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.initData()},e.prototype.initData=function(){var t=this;GameData.DATA;GameData.avatarUrl&&(this.txImg.mask=this.rectMack,ImageLoader.Image(GameData.avatarUrl).then(function(e){t.txImg.source=e}));this.list.itemRenderer=AwardItem;var e=[{source:"gold2",text:"+30"},{source:"icon_xp1",text:"+100"},{source:"icon_xz2",text:"+20"}];this.list.dataProvider=new eui.ArrayCollection(e),this.nameTxt.text=GameData.DATA.user.nickName},e.prototype.onClick=function(t){switch(t.target){case this.refreshBtn:break;case this.shareBtn:break;case this.startBtn:break;case this.closeBtn:case this.shade:StageUtils.removeChild(this)}},e.prototype.removeStage=function(){this.startBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.closeBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.refreshBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.shareBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.shade.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this)},e}(eui.Component);__reflect(FriendHelpView.prototype,"FriendHelpView");var SignInWin=function(t){function e(){var e=t.call(this)||this;return e.skinName="SignInSkin",e.left=e.right=e.top=e.bottom=0,e.addEventListener(egret.Event.ADDED_TO_STAGE,e.addtoStage,e),e.addEventListener(egret.Event.REMOVED_FROM_STAGE,e.removeStage,e),e}return __extends(e,t),e.prototype.addtoStage=function(){for(var t=1;8>t;t++){var e=this["btn"+t];e.name=""+t,e.data={text:t,state:0},e.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this)}this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.shade.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this)},e.prototype.onClick=function(t){switch(t.target){case this.closeBtn:case this.shade:StageUtils.removeChild(this)}t.target instanceof DayItem&&t.target.setCurrentState()},e.prototype.removeStage=function(){for(var t=1;8>t;t++)this["btn"+t].removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this);this.closeBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.shade.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this)},e}(BaseView);__reflect(SignInWin.prototype,"SignInWin");var DayItem=function(t){function e(){var e=t.call(this)||this;return e.skinName="DayItemSkin",e.touchEnabled=!0,e.touchChildren=!1,e}return __extends(e,t),e.prototype.dataChanged=function(){this.labelDisplay.text=this.data.text},e.prototype.setData=function(t){this.labelDisplay.text=t+""},e.prototype.setCurrentState=function(){this.isYes=!this.isYes,this.currentState=this.isYes?"yes":"no"},Object.defineProperty(e.prototype,"data",{get:function(){return this._data},set:function(t){this._data=t,eui.PropertyEvent.dispatchPropertyEvent(this,eui.PropertyEvent.PROPERTY_CHANGE,"data"),this.dataChanged()},enumerable:!0,configurable:!0}),e}(eui.Component);__reflect(DayItem.prototype,"DayItem");var TaskView=function(t){function e(e){var n=t.call(this)||this;return n.skinName="TaskViewSkin",n.left=n.right=n.top=n.bottom=0,n.data=e,n.addEventListener(egret.Event.ADDED_TO_STAGE,n.addtoStage,n),n.addEventListener(egret.Event.REMOVED_FROM_STAGE,n.removeStage,n),n}return __extends(e,t),e.prototype.addtoStage=function(){this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.shade.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.txList.itemRenderer=TxItem,this.list.itemRenderer=AwardItem,Http.ins().send(GameData.taskUrl+this.data.index,!0,!0,this,this.initData)},e.prototype.initData=function(t){var e=t.currentTarget,n=JSON.parse(e.response).data;n.member&&n.member.avatar&&(this.txList.dataProvider=new eui.ArrayCollection(n.member.avatar));var i=n.task.goldcoin?n.task.goldcoin:0,a=n.task.experience?n.task.experience:0,r=n.task.medal?n.task.medal:0,s=[{source:"gold2",text:"+"+i},{source:"icon_xp1",text:"+"+a},{source:"icon_xz2",text:"+"+r}];this.list.dataProvider=new eui.ArrayCollection(s),this.numTxt.text=n.member.count+"人正在参加…"},e.prototype.onClick=function(t){switch(t.target){case this.startBtn:this.upTxData(),this.setToData(),StageUtils.removeChild(this);break;case this.closeBtn:case this.shade:StageUtils.removeChild(this)}},e.prototype.upTxData=function(){if(0==this.data.state){var t={avatar:GameData.avatarUrl},e=new egret.HttpRequest;e.responseType=egret.HttpResponseType.TEXT,e.open(GameData.txUrl+this.data.index,egret.HttpMethod.POST),e.setRequestHeader("Content-Type","application/json"),e.send(JSON.stringify(t))}},e.prototype.setToData=function(){var t={task:this.data.id,coin:GameData.DATA.user.coin,level:GameData.DATA.user.level,medal:GameData.DATA.user.medal,index:this.data.index},e="?";for(var n in t){var i=n+"="+t[n]+"&";e+=i}switch(e=e.substring(0,e.length-1),this.data.typeId){case Type.SELECT:wx.miniProgram.navigateTo({url:GameUrl.SELECTURL+e});break;case Type.PICTURE:wx.miniProgram.navigateTo({url:GameUrl.PICTUREURL+e});break;case Type.VIDEO:wx.miniProgram.navigateTo({url:GameUrl.VIDEOURL+e});break;case Type.QR_CODE:wx.miniProgram.navigateTo({url:GameUrl.CODEURL+e});break;case Type.AUDIO:wx.miniProgram.navigateTo({url:GameUrl.AUDIOURL+e})}},e.prototype.removeStage=function(){this.startBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.closeBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.shade.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this)},e}(eui.Component);__reflect(TaskView.prototype,"TaskView");var TxItem=function(t){function e(){var e=t.call(this)||this;return e.skinName="TxItemSkin",e.iconImg.mask=e.mackRect,e}return __extends(e,t),e.prototype.dataChanged=function(){var t=this,e=this.data;ImageLoader.Image(e).then(function(e){t.iconImg.source=e})},e}(eui.ItemRenderer);__reflect(TxItem.prototype,"TxItem");