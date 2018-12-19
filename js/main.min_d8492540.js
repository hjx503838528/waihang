var __reflect=this&&this.__reflect||function(t,e,i){t.__class__=e,i?i.push(e):i=[e],t.__types__=t.__types__?i.concat(t.__types__):i},__extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var a in e)e.hasOwnProperty(a)&&(t[a]=e[a]);i.prototype=e.prototype,t.prototype=new i},__awaiter=this&&this.__awaiter||function(t,e,i,a){return new(i||(i=Promise))(function(n,r){function s(t){try{h(a.next(t))}catch(e){r(e)}}function o(t){try{h(a["throw"](t))}catch(e){r(e)}}function h(t){t.done?n(t.value):new i(function(e){e(t.value)}).then(s,o)}h((a=a.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function i(t){return function(e){return a([t,e])}}function a(i){if(n)throw new TypeError("Generator is already executing.");for(;h;)try{if(n=1,r&&(s=r[2&i[0]?"return":i[0]?"throw":"next"])&&!(s=s.call(r,i[1])).done)return s;switch(r=0,s&&(i=[0,s.value]),i[0]){case 0:case 1:s=i;break;case 4:return h.label++,{value:i[1],done:!1};case 5:h.label++,r=i[1],i=[0];continue;case 7:i=h.ops.pop(),h.trys.pop();continue;default:if(s=h.trys,!(s=s.length>0&&s[s.length-1])&&(6===i[0]||2===i[0])){h=0;continue}if(3===i[0]&&(!s||i[1]>s[0]&&i[1]<s[3])){h.label=i[1];break}if(6===i[0]&&h.label<s[1]){h.label=s[1],s=i;break}if(s&&h.label<s[2]){h.label=s[2],h.ops.push(i);break}s[2]&&h.ops.pop(),h.trys.pop();continue}i=e.call(t,h)}catch(a){i=[6,a],r=0}finally{n=s=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}var n,r,s,o,h={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return o={next:i(0),"throw":i(1),"return":i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o},BaseClass=function(){function t(){}return t.ins=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var i=this;if(!i._instance){var a=t.length;0==a?i._instance=new i:1==a?i._instance=new i(t[0]):2==a?i._instance=new i(t[0],t[1]):3==a?i._instance=new i(t[0],t[1],t[2]):4==a?i._instance=new i(t[0],t[1],t[2],t[3]):5==a&&(i._instance=new i(t[0],t[1],t[2],t[3],t[4]))}return i._instance},t}();__reflect(BaseClass.prototype,"BaseClass");var BaseView=function(t){function e(){var e=t.call(this)||this;return e.event=[],e.percentWidth=100,e.percentHeight=100,e.addEventListener(egret.Event.ADDED_TO_STAGE,e.addFromStage,e),e.addEventListener(egret.Event.REMOVED_FROM_STAGE,e.removeFromStage,e),e}return __extends(e,t),e.prototype.addFromStage=function(){this.open()},e.prototype.removeFromStage=function(){this.close()},e.prototype.open=function(){},e.prototype.close=function(){},e.prototype.addTouchEvent=function(t,e){this.addEvent(egret.TouchEvent.TOUCH_TAP,t,e)},e.prototype.addTouchEndEvent=function(t,e){this.addEvent(egret.TouchEvent.TOUCH_END,t,e)},e.prototype.addTouchBeginEvent=function(t,e){this.addEvent(egret.TouchEvent.TOUCH_BEGIN,t,e)},e.prototype.addChangeEvent=function(t,e){this.addEvent(egret.TouchEvent.CHANGE,t,e)},e.prototype.addEvent=function(t,e,i){e.addEventListener(t,i,this),this.event.push([t,i,e])},e.prototype.removeTouchEvent=function(t,e){t.removeEventListener(egret.TouchEvent.TOUCH_TAP,e,this)},e.prototype.removeEvents=function(){for(var t=0,e=this.event;t<e.length;t++){var i=e[t];i[2].removeEventListener(i[0],i[1],this)}this.event=[]},e.prototype.$onClose=function(){var t=function(i){for(var a=0;a<i.numChildren;a++){var n=i.getChildAt(a);n instanceof e?n.$onClose():n instanceof egret.DisplayObjectContainer&&t(n)}};t(this),this.removeEvents()},e.prototype.setSkinPart=function(i,a){if(t.prototype.setSkinPart.call(this,i,a),this.skin[i]&&this.skin[i]!=a){var n=this.skin[i].parent,r=n.getChildIndex(this.skin[i]);StageUtils.removeChild(this.skin[i]);for(var s=0;s<e.replaceKeys.length;s++){var o=e.replaceKeys[s];a[o]=this.skin[i][o]}this.skin[i]=a,n.addChildAt(a,r)}},e.replaceKeys=["x","y","alpha","anchorOffsetX","anchorOffsetY","blendMode","bottom","cacheAsBitmap","currentState","enabled","filters","height","horizontalCenter","hostComponentKey","includeInLayout","left","mask","matrix","maxHeight","maxWidth","minHeight","minWidth","name","percentHeight","percentWidth","right","rotation","scaleX","scaleY","scrollRect","skewX","skewY","skinName","top","touchChildren","touchEnabled","verticalCenter","visible","width"],e}(eui.Component);__reflect(BaseView.prototype,"BaseView");var AwardItem=function(t){function e(){var e=t.call(this)||this;return e.skinName="AwardItemSkin",e}return __extends(e,t),e.prototype.dataChanged=function(){this.data},Object.defineProperty(e.prototype,"data",{get:function(){return this._data},set:function(t){this._data=t,eui.PropertyEvent.dispatchPropertyEvent(this,eui.PropertyEvent.PROPERTY_CHANGE,"data"),this.dataChanged()},enumerable:!0,configurable:!0}),e}(eui.ItemRenderer);__reflect(AwardItem.prototype,"AwardItem");var LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.addEventListener(egret.Event.ADDED_TO_STAGE,e.createView,e),e}return __extends(e,t),e.prototype.createView=function(){this.stageW=StageUtils.ins().getWidth(),this.stageH=StageUtils.ins().getHeight(),this.width=this.stageW,this.height=this.stageH,this.bg=new egret.Bitmap,this.bg.texture=RES.getRes("loading_bg_jpg"),this.bg.x=this.stageW/2-this.bg.width/2,this.addChildAt(this.bg,0);var t=new egret.Shape;t.graphics.beginFill(0,.6),t.graphics.drawRect(0,0,this.stageW,this.stageH),t.graphics.endFill(),this.addChild(t),this.con=new egret.DisplayObjectContainer,this.addChild(this.con),this.barBg=new egret.Bitmap,this.barBg.texture=RES.getRes("bar_bg");var e=new egret.Rectangle(34,30,5,3);this.barBg.scale9Grid=e,this.barBg.width=625,this.con.addChild(this.barBg),this.con.width=this.barBg.width,this.con.height=this.barBg.height,this.con.x=this.stageW/2-this.con.width/2,this.con.y=this.stageH/2-this.con.height/2-30;var i=new egret.Rectangle(12,10,1,1);this.bar=new egret.Bitmap,this.bar.texture=RES.getRes("bar_thumb"),this.bar.x=16,this.bar.y=18,this.bar.width=595,this.bar.scale9Grid=i,this.con.addChild(this.bar),this.mack=new egret.Bitmap,this.mack.texture=RES.getRes("black"),this.mack.x=this.bar.x,this.mack.y=this.bar.y,this.mack.width=0,this.mack.height=this.bar.height,this.con.addChild(this.mack),this.bar.mask=this.mack,this.textField=new egret.TextField,this.textField.width=200,this.textField.height=50,this.textField.size=24,this.textField.textColor=3355443,this.textField.textAlign=egret.HorizontalAlign.CENTER,this.textField.verticalAlign=egret.VerticalAlign.MIDDLE,this.textField.x=this.con.width/2-this.textField.width/2,this.textField.y=this.con.height/2-this.textField.height/2,this.con.addChild(this.textField);var a=new egret.TextField;a.width=200,a.size=34,a.textColor=13163263,a.textAlign=egret.HorizontalAlign.CENTER,a.text="加载中...",a.fontFamily="黑体",a.x=this.stageW/2-a.width/2,a.y=this.con.y+80,this.addChild(a)},e.prototype.onProgress=function(t,e){var i=Math.floor(t/e*100);this.textField.text=i+"%";var a=this.bar.width*(t/e);this.mack.width=a},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var BaseComponent=function(t){function e(){var e=t.call(this)||this;return e.className="使用此组件必须填写逻辑类名",e}return __extends(e,t),e.prototype.childrenCreated=function(){try{var t=window[this.className],i=new t;if(null!=i)for(var a in i)null!=this[a]&&-1==e.copyKeys.indexOf(a)||-1!=e.filterKeys.indexOf(a)||(this[a]=i[a]);this.init&&this.init()}catch(n){egret.log("BaseComponent的className为空："+egret.getQualifiedClassName(this)+"，请查看资源里面的BaseComponent组件是否有未绑定的逻辑类")}},e.prototype.open=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},e.prototype.close=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},Object.defineProperty(e.prototype,"data",{get:function(){return this._data},set:function(t){this._data=t,eui.PropertyEvent.dispatchPropertyEvent(this,eui.PropertyEvent.PROPERTY_CHANGE,"data"),this.dataChanged&&this.dataChanged()},enumerable:!0,configurable:!0}),e.filterKeys=["data"],e.copyKeys=["open","close"],e}(BaseView);__reflect(BaseComponent.prototype,"BaseComponent");var AssetAdapter=function(){function t(){}return t.prototype.getAsset=function(t,e,i){function a(a){e.call(i,a,t)}if(RES.hasRes(t)){var n=RES.getRes(t);n?a(n):RES.getResAsync(t,a,this)}else RES.getResByUrl(t,a,this,RES.ResourceItem.TYPE_IMAGE)},t}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var ThemeAdapter=function(){function t(){}return t.prototype.getTheme=function(t,e,i,a){function n(t){e.call(a,t)}function r(e){e.resItem.url==t&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,r,null),i.call(a))}var s=this;if("undefined"!=typeof generateEUI)egret.callLater(function(){e.call(a,generateEUI)},this);else if("undefined"!=typeof generateEUI2)RES.getResByUrl("resource/gameEui.json",function(t,i){window.JSONParseClass.setData(t),egret.callLater(function(){e.call(a,generateEUI2)},s)},this,RES.ResourceItem.TYPE_JSON);else if("undefined"!=typeof generateJSON)if(t.indexOf(".exml")>-1){var o=t.split("/");o.pop();var h=o.join("/")+"_EUI.json";generateJSON.paths[t]?egret.callLater(function(){e.call(a,generateJSON.paths[t])},this):RES.getResByUrl(h,function(i){window.JSONParseClass.setData(i),egret.callLater(function(){e.call(a,generateJSON.paths[t])},s)},this,RES.ResourceItem.TYPE_JSON)}else egret.callLater(function(){e.call(a,generateJSON)},this);else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,r,null),RES.getResByUrl(t,n,this,RES.ResourceItem.TYPE_TEXT)},t}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var GameData=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.prototype.getUrlData=function(){var t=window.location.search,i={};if(-1!=t.indexOf("?")){for(var a=t.substr(1),n=a.split("&"),r=0;r<n.length;r++)i[n[r].split("=")[0]]=n[r].split("=")[1];e.token=i.token,e.id=i.id,e.avatarUrl=decodeURIComponent(i.avatarUrl),e.isSkip=i.skip,egret.log(i)}},e.prototype.getData=function(){var t=this;return new Promise(function(i,a){var n={token:e.token};Http.ins().sendPost(e.url,n,t,function(t){var a=t.currentTarget,n=JSON.parse(a.response).data;if(console.log(n),e.DATA=n,e.DATA){var r=e.DATA.tasks.length?e.DATA.tasks.length:0;MapData.MAX=r;for(var s=0;r>s;s++)e.DATA.tasks[s].index=s+1;e.avatarUrl||(e.avatarUrl=e.DATA.user.avatarUrl)}i(n)},function(t){a(t)})})},e.prototype.getCurIndex=function(){for(var t=0,i=e.DATA.tasks.length,a=0;i>a;a++)if(0==e.DATA.tasks[a].state){t=a;break}return t},e.ins=function(){return t.ins.call(this)},e.url="https://test.dingxiangsai.cn/api/goout/home",e.taskUrl="https://test.dingxiangsai.cn/api/goout/tasks/",e.inviteUrl="https://test.dingxiangsai.cn/api/goout/invite/join/",e.txUrl="https://test.dingxiangsai.cn/api/goout/tasks/join/",e.rankUrl="https://test.dingxiangsai.cn/api/goout/ranklist",e.signinUrl="https://test.dingxiangsai.cn/api/goout/dailybonus",e.token="o2O1G48pd9-3kXHK1wIcX3HxfkW4",e}(BaseClass);__reflect(GameData.prototype,"GameData");var GameUrl=function(){function t(){}return t.SELECTURL="/pages/TaskSelect/TaskSelect",t.PICTUREURL="/pages/TaskPicture/TaskPicture",t.VIDEOURL="/pages/TaskVideo/TaskVideo",t.AUDIOURL="/pages/TaskAudio/TaskAudio",t.CODEURL="/pages/TaskQrcode/TaskQrcode",t}();__reflect(GameUrl.prototype,"GameUrl");var Http=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.ins=function(){return t.ins.call(this)},e.prototype.send=function(t,e,i,a,n,r){var s=new egret.HttpRequest;s.responseType=e?egret.HttpResponseType.TEXT:egret.HttpResponseType.ARRAY_BUFFER,s.open(t,egret.HttpMethod.GET),s.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),s.once(egret.Event.COMPLETE,a,i),s.once(egret.IOErrorEvent.IO_ERROR,n?n:function(){},i),s.once(egret.ProgressEvent.PROGRESS,r?r:function(){},i),s.send()},e.prototype.sendPost=function(t,e,i,a,n,r){var s=new egret.HttpRequest;s.responseType=egret.HttpResponseType.TEXT,s.open(t,egret.HttpMethod.POST),s.setRequestHeader("Content-Type","application/json"),s.once(egret.Event.COMPLETE,a?a:function(){},i),s.once(egret.IOErrorEvent.IO_ERROR,n?n:function(){},i),s.once(egret.ProgressEvent.PROGRESS,r?r:function(){},i),s.send(JSON.stringify(e))},e.prototype.sendMagCallBack=function(t,e,i,a,n){var r=new egret.URLLoader;r.dataFormat=egret.URLLoaderDataFormat.TEXT;var s=new egret.URLRequest(t);s.method=a,s.data=e,r.addEventListener(egret.Event.COMPLETE,function(t){var e=t.target,a=e.data,r=JSON.parse(a.toString());i.call(n,r)},this),r.load(s)},e.prototype.GetRequest=function(t,e,i){var a=new egret.HttpRequest;a.responseType=egret.HttpResponseType.TEXT,a.open(t,egret.HttpMethod.GET),a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.send(),a.once(egret.Event.COMPLETE,function(t){var a=t.currentTarget,n=JSON.parse(a.response);e.call(i,n)},this)},e}(BaseClass);__reflect(Http.prototype,"Http");var ImageLoader=function(){function t(){}return t.Image=function(t){var e=this;return new Promise(function(i,a){var n=new egret.ImageLoader;n.once(egret.Event.COMPLETE,function(t){var e=t.currentTarget,a=e.data,n=new egret.Texture;n.bitmapData=a,i(n)},e),n.once(egret.IOErrorEvent.IO_ERROR,function(t){a(t)},e),t?n.load(t):a("图片地址不存在")})},t.createImg=function(t){return new Promise(function(e,i){var a=new Image;a.onload=function(){a.onload=null;var t=new egret.BitmapData(a),i=new egret.Texture;i.bitmapData=t;var n=new egret.Bitmap;n.texture=i,e(n)},a.src=t})},t.createImg2=function(t){return new Promise(function(e,i){var a=t.replace("data:image/png;base64,","");egret.BitmapData.create("base64",a,function(t){var i=new egret.Texture;i.bitmapData=t;var a=new egret.Bitmap(i);e(a)})})},t.imaBase64=function(t,e,i){void 0===e&&(e=!0),void 0===i&&(i=1);var a=new egret.RenderTexture,n=new egret.Rectangle(0,0,t.width,t.height);a.drawToTexture(t,n);var r=a.toDataURL(e?"image/png":"image/jpeg",n,i);return r},t}();__reflect(ImageLoader.prototype,"ImageLoader");var StageUtils=function(t){function e(){var i=t.call(this)||this;return i.top=0,null==e._uiStage&&(e._uiStage=new eui.UILayer,e._uiStage.touchEnabled=!1,e._uiStage.percentHeight=100,e._uiStage.percentWidth=100,i.getStage().addChild(e._uiStage)),i}return __extends(e,t),e.ins=function(){return t.ins.call(this)},e.prototype.getHeight=function(){return this.getStage().stageHeight},e.prototype.getWidth=function(){return this.getStage().stageWidth},e.prototype.setTouchChildren=function(t){this.getStage().touchChildren=t},e.prototype.setMaxTouches=function(t){this.getStage().maxTouches=t},e.prototype.setFrameRate=function(t){this.getStage().frameRate=t},e.prototype.setScaleMode=function(t){this.getStage().scaleMode=t},e.prototype.getStage=function(){return egret.MainContext.instance.stage},e.prototype.getUIStage=function(){return e._uiStage},e.addChild=function(t){null!=t&&e.ins().getUIStage().addChild(t)},e.removeChild=function(t){t&&null!=t.parent&&t.parent.removeChild(t)},e.w=750,e.h=1334,e}(BaseClass);__reflect(StageUtils.prototype,"StageUtils");var Type;!function(t){t[t.SELECT=1]="SELECT",t[t.PICTURE=2]="PICTURE",t[t.VIDEO=3]="VIDEO",t[t.QR_CODE=4]="QR_CODE",t[t.AUDIO=5]="AUDIO"}(Type||(Type={}));var GameState;!function(t){t[t.NO=0]="NO",t[t.YES=1]="YES",t[t.DEFEATED=2]="DEFEATED",t[t.CHECKING=3]="CHECKING"}(GameState||(GameState={}));var Utils=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.ins=function(){return t.ins.call(this)},e.prototype.isNewData=function(){var t,e=new Date,i=e.getDate(),a=(e.getMonth()+1,e.getFullYear(),"data"),n=egret.localStorage.getItem(a);if(null==n||n!=i.toString()){var r=i.toString();egret.localStorage.setItem(a,r),t=!0}else t=!1;return t},e.prototype.playAnimation=function(t,e){if(e)for(var i in t.items)t.items[i].props={loop:!0};t.play()},e.getStringLength=function(t){for(var i=t.split(""),a=0,n=0;n<i.length;n++){var r=i[n];a+=e.isChinese(r)?2:1}return a},e.isChinese=function(t){var e=/^[\u4E00-\u9FA5]+$/;return e.test(t)?!0:!1},e}(BaseClass);__reflect(Utils.prototype,"Utils");var Wx=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.prototype.navigateTo=function(t){wx.miniProgram.navigateTo({url:t})},e.prototype.navigateBack=function(t){wx.miniProgram.navigateBack({delta:t})},e.prototype.redirectTo=function(t){wx.miniProgram.redirectTo({url:t})},e.prototype.reLaunch=function(t){wx.miniProgram.reLaunch({url:t})},e.prototype.switchTab=function(t){wx.miniProgram.switchTab({url:t})},e.prototype.config=function(){var t;wx.config({debug:!1,appId:t[0],timestamp:t[1],nonceStr:t[2],signature:t[3],jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","updateAppMessageShareData"]}),wx.ready(function(){var t={title:"外行城市",desc:"外行城市",imgUrl:"resource/assets/bg3.png",link:"https://test.dingxiangsai.cn",success:function(){console.log("分享成功")},fail:function(){console.log("分享失败")},complete:function(){console.log("分享接口调用结束")}};wx.onMenuShareAppMessage(t)}),wx.error(function(t){alert("好像出错了！！")})},e}(BaseClass);__reflect(Wx.prototype,"Wx");var Main=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.createChildren=function(){t.prototype.createChildren.call(this),egret.ImageLoader.crossOrigin="anonymous",egret.lifecycle.addLifecycleListener(function(t){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var e=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",e),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),GameData.ins().getUrlData(),this.runGame()["catch"](function(t){console.log(t)})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,this.loadResource()];case 1:return t.sent(),this.createGameScene(),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(i){switch(i.label){case 0:return i.trys.push([0,5,,6]),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return i.sent(),t=new LoadingUI,[4,RES.loadGroup("loading")];case 2:return i.sent(),this.stage.addChild(t),[4,this.loadTheme()];case 3:return i.sent(),[4,RES.loadGroup("preload",0,t)];case 4:return i.sent(),this.stage.removeChild(t),[3,6];case 5:return e=i.sent(),console.error(e),[3,6];case 6:return[2]}})})},e.prototype.loadTheme=function(){var t=this;return new Promise(function(e,i){var a=new eui.Theme("resource/default.thm.json",t.stage);a.addEventListener(eui.UIEvent.COMPLETE,function(){e()},t)})},e.prototype.createGameScene=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return StageUtils.removeChild(this),GameData.btnMusic=RES.getRes("button_mp3"),[4,GameData.ins().getData()];case 1:return t.sent(),StageUtils.addChild(new GameWin),GameData.ins().isNewData=Utils.ins().isNewData(),GameData.ins().isNewData&&StageUtils.addChild(new SignInWin),[2]}})})},e}(eui.UILayer);__reflect(Main.prototype,"Main");var GameWin=function(t){function e(){var e=t.call(this)||this;return e.musicLoc=0,e.musicRotation=0,e.skinName="GameSkin",e}return __extends(e,t),e.prototype.open=function(){this.addTouchEvent(this.jiaBtn,this.onClick),this.addTouchEvent(this.xiaoxiBtn,this.onClick),this.addTouchEvent(this.bagBtn,this.onClick),this.addTouchEvent(this.rankBtn,this.onClick),this.addTouchEvent(this.helpBtn,this.onClick),this.addTouchEvent(this.friendBtn,this.onClick),this.addTouchEvent(this.musicBtn,this.onClick),this.upMusic(),Utils.ins().playAnimation(this.yun,!0),this.txImg.mask=this.rectMack,this.map=new Map,this.mapCon.addChild(this.map),this.initData()},e.prototype.initData=function(){var t=this,e=GameData.DATA;GameData.avatarUrl&&ImageLoader.Image(GameData.avatarUrl).then(function(e){t.txImg.source=e}),e&&e.user&&(this.lvTxt.text="Lv."+e.user.level,this.goldTxt.text=e.user.coin+"",this.mdalTxt.text=e.user.medal+"")},e.prototype.upMusic=function(){if(this.musicBtn.source=this.isPlay?"music_on_png":"music_off_png",GameData.bgm||(GameData.bgm=RES.getRes("bgm_mp3")),this.isPlay){GameData.bgmChannel?GameData.bgmChannel=GameData.bgm.play(this.musicLoc,1):GameData.bgmChannel=GameData.bgm.play(),this.musicBtn.rotation=this.musicRotation;var t=11*(360-this.musicRotation);egret.Tween.get(this.musicBtn,{loop:!0}).to({rotation:360},t)}else GameData.bgmChannel&&(this.musicLoc=GameData.bgmChannel.position,GameData.bgmChannel.stop(),this.musicRotation=this.musicBtn.rotation,egret.Tween.removeTweens(this.musicBtn));GameData.bgmChannel&&GameData.bgmChannel.addEventListener(egret.Event.SOUND_COMPLETE,this.play,this)},e.prototype.play=function(){GameData.bgmChannel.removeEventListener(egret.Event.SOUND_COMPLETE,this.play,this),GameData.bgmChannel=GameData.bgm.play()},e.prototype.onClick=function(t){switch(GameData.btnMusic.play(0,1),t.target){case this.xiaoxiBtn:StageUtils.addChild(new MessageWin);break;case this.bagBtn:StageUtils.addChild(new DailyTaskView);break;case this.rankBtn:StageUtils.addChild(new RankWin);break;case this.helpBtn:var e="帮助文字一大堆啊啊啊帮助文字一大堆啊啊啊帮助文字一大堆啊啊啊帮助文字一大堆啊啊啊";StageUtils.addChild(new MessageWin("帮助",e));break;case this.friendBtn:StageUtils.addChild(new CommanView(0));break;case this.musicBtn:this.isPlay=!this.isPlay,this.upMusic()}},e.prototype.close=function(){this.removeEvents(),this.yun.stop()},e}(BaseView);__reflect(GameWin.prototype,"GameWin");var HomeScene=function(t){function e(){var e=t.call(this)||this;return e.skinName="HomeSkin",e}return __extends(e,t),e.prototype.open=function(){this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),Utils.ins().playAnimation(this.yun,!0)},e.prototype.onClick=function(t){switch(t.target){case this.startBtn:}},e.prototype.removeStage=function(){this.startBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.yun.stop()},e}(BaseView);__reflect(HomeScene.prototype,"HomeScene");var GkItem=function(t){function e(){var e=t.call(this)||this;return e.strs=["icon_guanka1","icon_guanka2","icon_guanka3"],e.stateIcon=["icon13","icon14","icon15"],e.skinName="GkItemSkin",e.touchEnabled=!0,e.touchChildren=!1,e}return __extends(e,t),e.prototype.dataChanged=function(){var t=this.data;if(this.labelDisplay.text=t.index+"",t.state==GameState.NO)this.stateImg.visible=!1,this.iconDisplay.source=this.strs[0],this.touchEnabled=!1,t.index-1==GameData.ins().getCurIndex()&&(this.iconDisplay.source=this.strs[2],this.touchEnabled=!0);else switch(this.iconDisplay.source=this.strs[1],this.stateImg.visible=!0,this.touchEnabled=!0,t.state){case GameState.YES:this.stateImg.source="icon13";break;case GameState.DEFEATED:this.stateImg.source="icon15";break;case GameState.CHECKING:this.stateImg.source="icon14"}},Object.defineProperty(e.prototype,"lable",{get:function(){return this.labelDisplay.text},set:function(t){this.labelDisplay.text=t+""},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"icon",{set:function(t){this.iconDisplay.source=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"data",{get:function(){return this._data},set:function(t){this._data=t,eui.PropertyEvent.dispatchPropertyEvent(this,eui.PropertyEvent.PROPERTY_CHANGE,"data"),this.dataChanged()},enumerable:!0,configurable:!0}),e}(eui.ItemRenderer);__reflect(GkItem.prototype,"GkItem");var GuankaWin=function(t){function e(){var e=t.call(this)||this;return e.max=30,e.btnArr=[],e.skinName="GuanKaSkin",e.left=e.right=e.top=e.bottom=0,e.addEventListener(egret.Event.ADDED_TO_STAGE,e.addtoStage,e),e.addEventListener(egret.Event.REMOVED_FROM_STAGE,e.removeStage,e),e}return __extends(e,t),e.prototype.addtoStage=function(){for(var t=0;t<this.max;t++){var e=this["btn"+t];e.name=""+t,this.btnArr.push(e),e.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this)}this.setData()},e.prototype.setData=function(){if(GameData.DATA&&GameData.DATA.tasks){this.datas=GameData.DATA.tasks;for(var t=0;t<this.datas.length;t++){this.datas[t].state;this.datas[t].index=t+1;var e=this["btn"+t];e.data=this.datas[t]}}else console.log("数据异常")},e.prototype.onClick=function(t){if(t.target instanceof GkItem){var e=parseInt(t.target.name),i=void 0;i=e>=this.datas.length?this.datas.length-1:e;var a=this.datas[i];StageUtils.addChild(new TaskView(a))}},e.prototype.removeStage=function(){for(var t=0;t<this.btnArr.length;t++)this.btnArr[t].removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this)},e}(BaseView);__reflect(GuankaWin.prototype,"GuankaWin");var Map=function(t){function e(){var e=t.call(this)||this;return e.numArr=[[3,6,6],[4,6,6],[6,6],[6,6],[3,6,6],[6,6]],e.xArr=[[1,1,1],[-1,-1,-1],[0,0],[0,0],[1,1,1],[0,0]],e.yArr=[[0,1,2],[0,1,2],[1,2],[1,2],[0,1,2],[1,2]],e.skinName="MapSkin",e.left=e.right=e.top=e.bottom=0,e.addEventListener(egret.Event.ADDED_TO_STAGE,e.addtoStage,e),e.addEventListener(egret.Event.REMOVED_FROM_STAGE,e.removeStage,e),e}return __extends(e,t),e.prototype.addtoStage=function(){this.initGuanDao(),this.btnCon.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this)},e.prototype.onClick=function(t){t.target instanceof GkItem&&StageUtils.addChild(new TaskView(t.target.data)),GameData.btnMusic.play(0,1)},e.prototype.initGuanDao=function(){if(this.btnArr=[],GameData.DATA&&GameData.DATA.tasks){for(var t=MapData.MAX,e=MapData.getMaxRow(t)+2,i=0;t>i;i++){for(var a=MapData.getIndex(i+1),n=MapData.mapData[a].gird.length,r=0;n>r;r++){var s=MapData.mapData[a].gird[r],o=MapData.getCorRow(s[2],i,t),h=new eui.Image;h.source="guandao"+s[1],h.x=200*s[0],h.y=200*(e-o),this.gdCon.addChild(h),i==t-1&&r==n-1&&(this.endPoint=new egret.Point(h.x,h.y),this.upEndGd(a,r))}var c=new GkItem;c.lable=""+(i+1),c.data=GameData.DATA.tasks[i];var l=MapData.getCorRow(MapData.mapData[a].row,i,t);c.x=MapData.mapData[a].x,c.y=200*(e-l)+MapData.mapData[a].y,i>=MapData.MAXNUM&&i%MapData.MAXNUM==0&&(c.y+=50),this.btnCon.addChild(c),this.btnArr.push(c)}this.setLayout()}},e.prototype.upEndGd=function(t,e){var i=MapData.mapData[t].gird.length,a=MapData.mapData[t].gird[e][1]-1;if(4==a){var n=MapData.mapData[t].gird[e][0],r=void 0;if(r=1==i?MapData.mapData[t-1].gird[MapData.mapData[t-1].gird.length-1][0]:MapData.mapData[t].gird[e-1][0],n>r)this.numArr[a][0]=3;else{this.numArr[a][0]=4;for(var s=0;s<this.xArr.length;s++)this.xArr[a][s]=-1}}MapData.MAX%MapData.MAXNUM>=20&&MapData.MAX%MapData.MAXNUM<=23?this.setDataArr(t,e):this.createRoad(t,e,a,this.numArr,this.xArr,this.yArr)},e.prototype.setDataArr=function(t,e){var i=[[3,5,4,6,6,6,6],[5,4,6,6,6,6],[4,6,6,6,6],[6,6,6]],a=[[0,-1,-2,-2,-2,-2,-2],[-1,-2,-2,-2,-2,-2],[-1,-1,-1,-1,-1],[0,0,0]],n=[[-1,-1,-1,0,1,2,3],[0,0,1,2,3,4],[0,1,2,3,4],[1,2,3]],r=MapData.MAX%MapData.MAXNUM-20;this.createRoad(t,e,r,i,a,n)},e.prototype.createRoad=function(t,e,i,a,n,r){for(var s=0;s<a[i].length;s++){var o=new eui.Image;o.source="guandao"+a[i][s];var h=200*(MapData.mapData[t].gird[e][0]+n[i][s]),c=this.endPoint.y-200*r[i][s];o.x=h,o.y=c,this.gdCon.addChild(o)}},e.prototype.setLayout=function(){var t=1334,e=t;this.gdCon.y+this.gdCon.height>this.height&&(e=this.gdCon.y+this.gdCon.height+100,this.mainCon.height=e);for(var i=Math.ceil(e/t),a=0;i>a;a++){var n=new eui.Image;n.source="bg1_png",n.y=a*t,this.bgCon.addChild(n)}this.bgCon.height=e>this.height?e:StageUtils.ins().getHeight(),this.scroller.height=StageUtils.ins().getHeight(),this.scroller.viewport.validateNow(),this.scroller.viewport.scrollV=this.scroller.viewport.contentHeight-this.scroller.height},e.prototype.removeStage=function(){this.btnCon.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this)},e}(eui.Component);__reflect(Map.prototype,"Map");var MapData=function(){function t(){}return t.getMaxRow=function(e){if(!(0>=e)){for(var i=t.getIndex(e),a=0,n=0;i>=n;n++)t.mapData[n].row>a&&(a=t.mapData[n].row);var r=a+t.getRow(e)*t.MAXROW;return r}},t.getIndex=function(e){var i;return i=e%t.MAXNUM==0?t.MAXNUM-1:e%t.MAXNUM-1},t.getRow=function(e){var i=Math.floor(e/t.MAXNUM);return e%t.MAXNUM==0&&(i=Math.floor(e/t.MAXNUM)-1),i},t.getCorRow=function(e,i,a){var n=0;return i<t.MAXNUM?n=e:i==t.MAXNUM?n=t.MAXROW:i>t.MAXNUM&&(n=i%t.MAXNUM==0?e+Math.floor(i/t.MAXNUM)*t.MAXROW:e+t.getRow(i)*t.MAXROW),n},t.MAXNUM=30,t.MAXROW=13,t.MAX=0,t.mapData=[{index:1,x:437.5,y:0,gird:[[2,6,0]],row:0},{index:2,x:380,y:50,gird:[[2,2,1]],row:1},{index:3,x:100,y:50,gird:[[1,5,1],[0,4,1]],row:1},{index:4,x:65,y:50,gird:[[0,1,2]],row:2},{index:5,x:300,y:50,gird:[[1,5,2],[2,5,2]],row:2},{index:6,x:575,y:50,gird:[[3,3,2]],row:2},{index:7,x:600,y:50,gird:[[3,2,3]],row:3},{index:8,x:365,y:50,gird:[[2,5,3],[1,4,3]],row:3},{index:9,x:237.5,y:150,gird:[[1,1,4]],row:4},{index:10,x:400,y:50,gird:[[2,3,4]],row:4},{index:11,x:350,y:50,gird:[[2,2,5],[1,5,5]],row:5},{index:12,x:100,y:50,gird:[[0,4,5]],row:5},{index:13,x:60,y:50,gird:[[0,1,6]],row:6},{index:14,x:350,y:50,gird:[[1,5,6],[2,5,6]],row:6},{index:15,x:637,y:50,gird:[[3,3,6]],row:6},{index:16,x:637,y:50,gird:[[3,6,7]],row:7},{index:17,x:637,y:50,gird:[[3,6,8]],row:8},{index:18,x:600,y:50,gird:[[3,2,9]],row:9},{index:19,x:380,y:50,gird:[[2,5,9]],row:9},{index:20,x:260,y:50,gird:[[1,1,9],[1,4,8],[2,2,8]],row:8},{index:21,x:380,y:50,gird:[[2,3,7]],row:7},{index:22,x:150,y:50,gird:[[1,5,7]],row:7},{index:23,x:37.5,y:70,gird:[[0,4,7],[0,6,8]],row:8},{index:24,x:37.5,y:70,gird:[[0,6,9]],row:9},{index:25,x:37.5,y:70,gird:[[0,1,10]],row:10},{index:26,x:237,y:50,gird:[[1,3,10]],row:10},{index:27,x:200,y:50,gird:[[1,2,11]],row:11},{index:28,x:40,y:150,gird:[[0,4,11],[0,1,12]],row:12},{index:29,x:200,y:50,gird:[[1,5,12]],row:12},{index:30,x:410,y:50,gird:[[2,3,12]],row:12}],t}();__reflect(MapData.prototype,"MapData");var RankItem=function(t){function e(){var e=t.call(this)||this;return e.skinName="RankItemSkin",e.iconImg.mask=e.mackRect,e}return __extends(e,t),e.prototype.dataChanged=function(){var t=this,e=this.data;if(this.index=this.itemIndex+1,e){ImageLoader.Image(e.avatarUrl).then(function(e){t.iconImg.source=e}),this.lvTxt.text="Lv."+e.level;var i=Utils.getStringLength(e.nickName),a=e.nickName;i>16&&(a=e.nickName.substring(0,8)+"..."),this.nameTxt.text=a,this.index<=3?(this.rankNum.visible=!1,this.rankIcon.visible=!0,this.rankIcon.source="rank"+this.index):(this.rankNum.visible=!0,this.rankIcon.visible=!1,this.rankNum.text=this.index+"")}},e}(eui.ItemRenderer);__reflect(RankItem.prototype,"RankItem");var RankWin=function(t){function e(){var e=t.call(this)||this;return e.skinName="RankSkin",e}return __extends(e,t),e.prototype.open=function(){this.addTouchEvent(this.closeBtn,this.onClick),this.addTouchEvent(this.shade,this.onClick),Http.ins().send(GameData.rankUrl,!0,this,this.initData)},e.prototype.initData=function(t){var e=t.currentTarget,i=JSON.parse(e.response).data;this.list.itemRenderer=RankItem,this.list.dataProvider=new eui.ArrayCollection(i)},e.prototype.onClick=function(t){switch(GameData.btnMusic.play(0,1),t.target){case this.closeBtn:case this.shade:StageUtils.removeChild(this)}},e.prototype.close=function(){this.removeEvents()},e}(BaseView);__reflect(RankWin.prototype,"RankWin");var CommanView=function(t){function e(e){var i=t.call(this)||this;return i.skinName="CommanViewSkin",i.editable.maxChars=4,i.editable.restrict="0-9",i.editable.inputType=egret.TextFieldInputType.TEL,i.currentState=0==e?"input":"output",i}return __extends(e,t),e.prototype.open=function(){this.addTouchEvent(this.closeBtn,this.onClick),this.addTouchEvent(this.startBtn,this.onClick),this.addTouchEvent(this.shade,this.onClick),this.editable.addEventListener(egret.Event.CHANGE,this.setKeyNum,this),this.editable.addEventListener(egret.FocusEvent.FOCUS_IN,this.upEditableText,this),this.editable.addEventListener(egret.FocusEvent.FOCUS_OUT,this.focusoutHandler,this),this.initData()},e.prototype.initData=function(){var t=this;this.txImg.mask=this.rectMack,GameData.avatarUrl&&(this.txImg.mask=this.rectMack,ImageLoader.Image(GameData.avatarUrl).then(function(e){t.txImg.source=e})),this.nameTxt.text=GameData.DATA?GameData.DATA.user.nickName:""
},e.prototype.setKeyNum=function(){parseInt(this.editable.text);this.numTxt.text=this.editable.text},e.prototype.upEditableText=function(){this.editable.text="",this.numTxt.text=""},e.prototype.focusoutHandler=function(){document.body.scrollTop=0},e.prototype.onClick=function(t){switch(GameData.btnMusic.play(0,1),t.target){case this.startBtn:Http.ins().send(GameData.inviteUrl+this.numTxt.text,!0,this,this.sendInvite);break;case this.closeBtn:case this.shade:StageUtils.removeChild(this)}},e.prototype.sendInvite=function(t){var e=t.currentTarget;JSON.parse(e.response).data},e.prototype.close=function(){this.removeEvents(),this.editable.removeEventListener(egret.Event.CHANGE,this.setKeyNum,this),this.editable.removeEventListener(egret.FocusEvent.FOCUS_IN,this.upEditableText,this),this.editable.removeEventListener(egret.FocusEvent.FOCUS_OUT,this.focusoutHandler,this)},e}(BaseView);__reflect(CommanView.prototype,"CommanView");var DailyTaskView=function(t){function e(){var e=t.call(this)||this;return e.skinName="DailyTaskSkin",e}return __extends(e,t),e.prototype.open=function(){this.addTouchEvent(this.shade,this.onClick),this.addTouchEvent(this.closeBtn,this.onClick)},e.prototype.onClick=function(t){switch(t.target){case this.shade:case this.closeBtn:StageUtils.removeChild(this)}},e.prototype.close=function(){this.removeEvents()},e}(BaseView);__reflect(DailyTaskView.prototype,"DailyTaskView");var FriendHelpView=function(t){function e(){var e=t.call(this)||this;return e.skinName="FriendHelpSkin",e}return __extends(e,t),e.prototype.open=function(){this.addTouchEvent(this.startBtn,this.onClick),this.addTouchEvent(this.closeBtn,this.onClick),this.addTouchEvent(this.refreshBtn,this.onClick),this.addTouchEvent(this.shareBtn,this.onClick),this.addTouchEvent(this.shade,this.onClick),this.initData()},e.prototype.initData=function(){var t=this;GameData.DATA;GameData.avatarUrl&&(this.txImg.mask=this.rectMack,ImageLoader.Image(GameData.avatarUrl).then(function(e){t.txImg.source=e}));var e={source:"gold2",text:"+30"};this.iconBase=new AwardItem,this.iconBase.height=this.infoCon.height,this.infoCon.addChild(this.iconBase),this.iconBase.data=e,this.list.itemRenderer=AwardItem;var i=[{source:"gold2",text:"+30"},{source:"icon_xp1",text:"+100"},{source:"icon_xz2",text:"+20"}];this.list.dataProvider=new eui.ArrayCollection(i),this.nameTxt.text=GameData.DATA.user.nickName},e.prototype.onClick=function(t){switch(GameData.btnMusic.play(0,1),t.target){case this.refreshBtn:break;case this.shareBtn:break;case this.startBtn:break;case this.closeBtn:case this.shade:StageUtils.removeChild(this)}},e.prototype.close=function(){this.removeEvents()},e}(BaseView);__reflect(FriendHelpView.prototype,"FriendHelpView");var MessageWin=function(t){function e(e,i){var a=t.call(this)||this;return a.viewHeight=0,a.skinName="MessageSkin",a.titleStr=e?e:null,a.contentStr=i?i:null,a}return __extends(e,t),e.prototype.open=function(){this.addTouchEvent(this.closeBtn,this.onClick),this.addTouchEvent(this.shade,this.onClick),this.addTouchEvent(this.startBtn,this.onClick),this.initData()},e.prototype.initData=function(){this.titleStr&&(this.titleTxt.text=this.titleStr),this.contentStr&&(this.contentTxt.text=this.contentStr),this.viewHeight=this.contentTxt.y+this.contentTxt.height+249,this.viewHeight>this.bg.height&&(this.bg.height=this.viewHeight)},e.prototype.onClick=function(t){switch(GameData.btnMusic.play(0,1),t.target){case this.closeBtn:case this.shade:case this.startBtn:StageUtils.removeChild(this)}},e.prototype.close=function(){this.removeEvents()},e}(BaseView);__reflect(MessageWin.prototype,"MessageWin");var SignInWin=function(t){function e(){var e=t.call(this)||this;return e.skinName="SignInSkin",e}return __extends(e,t),e.prototype.open=function(){this.btnArr=[],this.list.itemRenderer=AwardItem;for(var t=1;8>t;t++){var e=new DayItem;e.name=""+t,e.data={text:t,state:0},4>t?this.topCon.addChild(e):this.bottomCon.addChild(e),this.btnArr.push(e)}this.addTouchEvent(this.closeBtn,this.onClick),this.addTouchEvent(this.startBtn,this.onClick),this.addTouchEvent(this.shade,this.onClick);var i={token:GameData.token};Http.ins().sendPost(GameData.signinUrl,i,this,this.upData)},e.prototype.upData=function(t){for(var e=t.currentTarget,i=JSON.parse(e.response).data,a=i.daily?i.daily.length:0,n=0;a>n;n++)this.btnArr[n].curState=i.daily[n];var r=[{source:"gold2",text:"+"+i.bonus.coin},{source:"icon_xp1",text:"+"+i.bonus.exp}];this.list.dataProvider=new eui.ArrayCollection(r)},e.prototype.onClick=function(t){switch(GameData.btnMusic.play(0,1),t.target){case this.closeBtn:case this.shade:StageUtils.removeChild(this);break;case this.startBtn:}},e.prototype.close=function(){this.removeEvents()},e}(BaseView);__reflect(SignInWin.prototype,"SignInWin");var DayItem=function(t){function e(){var e=t.call(this)||this;return e.skinName="DayItemSkin",e.touchEnabled=!1,e.touchChildren=!1,e}return __extends(e,t),e.prototype.dataChanged=function(){this.labelDisplay.text=this.data.text},e.prototype.setData=function(t){this.labelDisplay.text=t+""},Object.defineProperty(e.prototype,"curState",{set:function(t){this.currentState=t?"yes":"no"},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"data",{get:function(){return this._data},set:function(t){this._data=t,eui.PropertyEvent.dispatchPropertyEvent(this,eui.PropertyEvent.PROPERTY_CHANGE,"data"),this.dataChanged()},enumerable:!0,configurable:!0}),e}(eui.Component);__reflect(DayItem.prototype,"DayItem");var TaskView=function(t){function e(e){var i=t.call(this)||this;return i.skinName="TaskViewSkin",i.data=e,i}return __extends(e,t),e.prototype.open=function(){this.addTouchEvent(this.startBtn,this.onClick),this.addTouchEvent(this.closeBtn,this.onClick),this.addTouchEvent(this.shade,this.onClick),this.txList.itemRenderer=TxItem,Http.ins().send(GameData.taskUrl+this.data.index,!0,this,this.initData)},e.prototype.initData=function(t){var e=t.currentTarget,i=JSON.parse(e.response).data;i.member&&i.member.avatar&&(this.txList.dataProvider=new eui.ArrayCollection(i.member.avatar));var a=i.task.goldcoin?i.task.goldcoin:0,n=i.task.experience?i.task.experience:0,r=i.task.medal?i.task.medal:0,s=[{source:"gold2",text:"+"+a},{source:"icon_xp1",text:"+"+n},{source:"icon_xz2",text:"+"+r}];this.list.dataProvider=new eui.ArrayCollection(s),this.numTxt.text=i.member.count+"人正在参加…"},e.prototype.onClick=function(t){switch(GameData.btnMusic.play(0,1),t.target){case this.startBtn:this.setToData(),this.putInData(),StageUtils.removeChild(this);break;case this.closeBtn:case this.shade:StageUtils.removeChild(this)}},e.prototype.putInData=function(){if(this.data.state==GameState.NO){var t={avatar:GameData.avatarUrl};Http.ins().sendPost(GameData.txUrl+this.data.index,t,this)}},e.prototype.setToData=function(){var t={task:this.data.id,coin:GameData.DATA.user.coin,level:GameData.DATA.user.level,medal:GameData.DATA.user.medal,index:this.data.index,state:this.data.state},e="?";for(var i in t){var a=i+"="+t[i]+"&";e+=a}switch(e=e.substring(0,e.length-1),this.data.typeId){case Type.SELECT:wx.miniProgram.redirectTo({url:GameUrl.SELECTURL+e});break;case Type.PICTURE:wx.miniProgram.redirectTo({url:GameUrl.PICTUREURL+e});break;case Type.VIDEO:wx.miniProgram.redirectTo({url:GameUrl.VIDEOURL+e});break;case Type.QR_CODE:wx.miniProgram.redirectTo({url:GameUrl.CODEURL+e});break;case Type.AUDIO:wx.miniProgram.redirectTo({url:GameUrl.AUDIOURL+e})}},e.prototype.close=function(){this.removeEvents()},e}(BaseView);__reflect(TaskView.prototype,"TaskView");var TxItem=function(t){function e(){var e=t.call(this)||this;return e.skinName="TxItemSkin",e.iconImg.mask=e.mackRect,e}return __extends(e,t),e.prototype.dataChanged=function(){var t=this,e=this.data;ImageLoader.Image(e).then(function(e){t.iconImg.source=e})},e}(eui.ItemRenderer);__reflect(TxItem.prototype,"TxItem");