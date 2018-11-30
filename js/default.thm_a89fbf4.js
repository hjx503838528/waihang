window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source",checkbox_select_up_png)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source",checkbox_select_down_png)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source",checkbox_select_disabled_png)
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100%;
		t.percentWidth = 100%;
		t.elementsContent = [this._layout1_i(),this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._layout1_i = function () {
		var t = new eui.layout();
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = scale;
		t.source = checkbox_unselect_png;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = Tahoma;
		t.size = 20;
		t.textAlign = center;
		t.textColor = 0x707070;
		t.verticalAlign = middle;
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = track_sb_png;
		t.verticalCenter = 0;
		t.percentWidth = 100%;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = thumb_png;
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source",button_down_png)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100%;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = button_up_png;
		t.percentWidth = 100%;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = Tahoma;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = center;
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = middle;
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = border_png;
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = header_png;
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = Tahoma;
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = close;
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100%;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = track_pb_png;
		t.verticalCenter = 0;
		t.percentWidth = 100%;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100%;
		t.source = thumb_pb_png;
		t.percentWidth = 100%;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = Tahoma;
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = center;
		t.textColor = 0x707070;
		t.verticalAlign = middle;
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source",radiobutton_select_up_png)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source",radiobutton_select_down_png)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source",radiobutton_select_disabled_png)
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100%;
		t.percentWidth = 100%;
		t.elementsContent = [this._layout1_i(),this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._layout1_i = function () {
		var t = new eui.layout();
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = scale;
		t.source = radiobutton_unselect_png;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = Tahoma;
		t.size = 20;
		t.textAlign = center;
		t.textColor = 0x707070;
		t.verticalAlign = middle;
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100%;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100%;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 90;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i(),this.promptDisplay_i()];
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
				])
			,
			new eui.State ("disabledWithPrompt",
				[
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100%;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = button_up_png;
		t.percentWidth = 100%;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100%;
		t.percentWidth = 100%;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.percentWidth = 100%;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.BitmapLabel();
		this.promptDisplay = t;
		t.font = font1_fnt;
		t.verticalCenter = 0;
		t.x = 58;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TipsViewSkin.exml'] = window.TipsViewSkin = (function (_super) {
	__extends(TipsViewSkin, _super);
	function TipsViewSkin() {
		_super.call(this);
		this.skinParts = ["shade","titleTxt","tispCon"];
		
		this.height = 1134;
		this.width = 750;
		this.elementsContent = [this.shade_i(),this.tispCon_i()];
	}
	var _proto = TipsViewSkin.prototype;

	_proto.shade_i = function () {
		var t = new eui.Rect();
		this.shade = t;
		t.bottom = 0;
		t.fillAlpha = 0.7;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.tispCon_i = function () {
		var t = new eui.Group();
		this.tispCon = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.titleTxt_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = tips2;
		return t;
	};
	_proto.titleTxt_i = function () {
		var t = new eui.Label();
		this.titleTxt = t;
		t.fontFamily = 黑体;
		t.horizontalCenter = 0;
		t.size = 50;
		t.text = 1;
		t.textColor = 0xffffff;
		t.y = 202;
		return t;
	};
	return TipsViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source",off_png)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source",off_png)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source",off_png)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = on_png;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = handle_png;
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100%;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = track_png;
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = thumb_png;
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/skins/AwardItemSkin.exml'] = window.AwardItemSkin = (function (_super) {
	__extends(AwardItemSkin, _super);
	function AwardItemSkin() {
		_super.call(this);
		this.skinParts = ["iconImg","labTxt"];
		
		this.height = 40;
		this.minWidth = 90;
		this.elementsContent = [this.iconImg_i(),this.labTxt_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.source"],[0],this.iconImg,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.text"],[0],this.labTxt,"text");
	}
	var _proto = AwardItemSkin.prototype;

	_proto.iconImg_i = function () {
		var t = new eui.Image();
		this.iconImg = t;
		t.verticalCenter = 0;
		t.x = 2;
		return t;
	};
	_proto.labTxt_i = function () {
		var t = new eui.Label();
		this.labTxt = t;
		t.fontFamily = 黑体;
		t.size = 26;
		t.textColor = 0x666666;
		t.verticalCenter = 0;
		t.x = 42;
		return t;
	};
	return AwardItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/btn/ButSkin1.exml'] = window.ButSkin1 = (function (_super) {
	__extends(ButSkin1, _super);
	function ButSkin1() {
		_super.call(this);
		this.skinParts = ["iconDisplay","labelDisplay"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = ButSkin1.prototype;

	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.right = -3;
		t.scale9Grid = new egret.Rectangle(21,23,6,6);
		t.source = icon1;
		t.y = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bold = true;
		t.bottom = -25;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = 消息;
		t.textAlign = center;
		t.textColor = 0x333333;
		t.verticalAlign = middle;
		return t;
	};
	return ButSkin1;
})(eui.Skin);generateEUI.paths['resource/skins/btn/ButSkin3.exml'] = window.ButSkin3 = (function (_super) {
	__extends(ButSkin3, _super);
	function ButSkin3() {
		_super.call(this);
		this.skinParts = ["iconDisplay","labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.iconDisplay_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = ButSkin3.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = kuang_1;
		t.verticalCenter = 0;
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.source = icon_mail;
		t.verticalCenter = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bold = true;
		t.bottom = -25;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = 消息;
		t.textAlign = center;
		t.textColor = 0x333333;
		t.verticalAlign = middle;
		return t;
	};
	return ButSkin3;
})(eui.Skin);generateEUI.paths['resource/skins/btn/ButSkin5.exml'] = window.ButSkin5 = (function (_super) {
	__extends(ButSkin5, _super);
	function ButSkin5() {
		_super.call(this);
		this.skinParts = ["iconDisplay","labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.iconDisplay_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = ButSkin5.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = kuang_3;
		t.verticalCenter = 0;
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 2;
		t.source = icon_mail;
		t.verticalCenter = 2;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bold = true;
		t.bottom = -25;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = 消息;
		t.textAlign = center;
		t.textColor = 0x333333;
		t.verticalAlign = middle;
		return t;
	};
	return ButSkin5;
})(eui.Skin);generateEUI.paths['resource/skins/btn/ButSkin6.exml'] = window.ButSkin6 = (function (_super) {
	__extends(ButSkin6, _super);
	function ButSkin6() {
		_super.call(this);
		this.skinParts = [];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = ButSkin6.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = kuang_7;
		t.verticalCenter = 0;
		return t;
	};
	return ButSkin6;
})(eui.Skin);generateEUI.paths['resource/skins/btn/DayItemSkin.exml'] = window.DayItemSkin = (function (_super) {
	__extends(DayItemSkin, _super);
	function DayItemSkin() {
		_super.call(this);
		this.skinParts = ["iconDisplay","labelDisplay"];
		
		this.currentState = no;
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.iconDisplay_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("yes",
				[
				])
			,
			new eui.State ("no",
				[
					new eui.SetProperty("_Image1","source",kuang_3),
					new eui.SetProperty("iconDisplay","source",gold2)
				])
		];
	}
	var _proto = DayItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.source = kuang_2;
		t.verticalCenter = 0;
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 2;
		t.source = icon_right;
		t.verticalCenter = 15;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = 1;
		t.textAlign = center;
		t.textColor = 0x333333;
		t.verticalAlign = middle;
		t.y = 20;
		return t;
	};
	return DayItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/btn/GkItemSkin.exml'] = window.GkItemSkin = (function (_super) {
	__extends(GkItemSkin, _super);
	function GkItemSkin() {
		_super.call(this);
		this.skinParts = ["iconDisplay","labelDisplay"];
		
		this.height = 100;
		this.width = 125;
		this.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
	}
	var _proto = GkItemSkin.prototype;

	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 2;
		t.source = icon_guanka1;
		t.verticalCenter = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 50;
		t.text = 1;
		t.textAlign = center;
		t.textColor = 0xffffff;
		t.verticalAlign = middle;
		t.verticalCenter = 0;
		return t;
	};
	return GkItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/CommanViewSkin.exml'] = window.CommanViewSkin = (function (_super) {
	__extends(CommanViewSkin, _super);
	function CommanViewSkin() {
		_super.call(this);
		this.skinParts = ["shade","titleTxt","taskTxt","numTxt","editable","startLable","startBtn","closeBtn","txImg","rectMack","nameTxt"];
		
		this.currentState = input;
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.shade_i(),this._Group4_i()];
		this.states = [
			new eui.State ("input",
				[
					new eui.SetProperty("taskTxt","visible",false),
					new eui.SetProperty("txImg","visible",false),
					new eui.SetProperty("_Group3","visible",false),
					new eui.SetProperty("nameTxt","visible",false)
				])
			,
			new eui.State ("output",
				[
					new eui.SetProperty("titleTxt","text",口令确认),
					new eui.SetProperty("_Group2","visible",false),
					new eui.SetProperty("startLable","text",马上开始),
					new eui.SetProperty("txImg","x",53),
					new eui.SetProperty("txImg","y",0),
					new eui.SetProperty("txImg","scaleX",1),
					new eui.SetProperty("txImg","scaleY",1)
				])
		];
	}
	var _proto = CommanViewSkin.prototype;

	_proto.shade_i = function () {
		var t = new eui.Rect();
		this.shade = t;
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.titleTxt_i(),this.taskTxt_i(),this._Group2_i(),this.startBtn_i(),this.closeBtn_i(),this._Group3_i(),this.nameTxt_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = bg3_png;
		t.verticalCenter = 0;
		return t;
	};
	_proto.titleTxt_i = function () {
		var t = new eui.Label();
		this.titleTxt = t;
		t.fontFamily = 黑体;
		t.horizontalCenter = 3;
		t.size = 40;
		t.text = 输入口令;
		t.textColor = 0x333333;
		t.y = 120;
		return t;
	};
	_proto.taskTxt_i = function () {
		var t = new eui.Label();
		this.taskTxt = t;
		t.fontFamily = 黑体;
		t.horizontalCenter = 3;
		t.lineSpacing = 4;
		t.size = 30;
		t.text = 将代替“阿婆”，完成“激流勇进”关卡;
		t.textColor = 0x333333;
		t.width = 540;
		t.y = 226;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		this._Group2 = t;
		t.horizontalCenter = 0;
		t.y = 240;
		t.elementsContent = [this.numTxt_i(),this.editable_i(),this._Group1_i()];
		return t;
	};
	_proto.numTxt_i = function () {
		var t = new eui.BitmapLabel();
		this.numTxt = t;
		t.font = font1_fnt;
		t.letterSpacing = 50;
		t.text = 0000;
		t.touchEnabled = false;
		return t;
	};
	_proto.editable_i = function () {
		var t = new eui.EditableText();
		this.editable = t;
		t.alpha = 0.1;
		t.height = 90;
		t.width = 430;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 53;
		t.y = 110;
		t.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this._Rect4_i(),this._layout1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x666666;
		t.height = 6;
		t.width = 80;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x666666;
		t.height = 6;
		t.width = 80;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x666666;
		t.height = 6;
		t.width = 80;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x666666;
		t.height = 6;
		t.width = 80;
		return t;
	};
	_proto._layout1_i = function () {
		var t = new eui.layout();
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Group();
		this.startBtn = t;
		t.bottom = 105;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.elementsContent = [this._Image2_i(),this.startLable_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = kuang_6;
		t.y = 0;
		return t;
	};
	_proto.startLable_i = function () {
		var t = new eui.Label();
		this.startLable = t;
		t.fontFamily = 黑体;
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = 加 入;
		t.verticalCenter = 0;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.icon = icon_close;
		t.right = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = ButSkin1;
		t.y = 50;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		this._Group3 = t;
		t.horizontalCenter = 0;
		t.y = 293;
		t.elementsContent = [this.txImg_i(),this.rectMack_i()];
		return t;
	};
	_proto.txImg_i = function () {
		var t = new eui.Image();
		this.txImg = t;
		t.height = 95;
		t.horizontalCenter = 0;
		t.width = 95;
		return t;
	};
	_proto.rectMack_i = function () {
		var t = new eui.Rect();
		this.rectMack = t;
		t.ellipseWidth = 100;
		t.fillAlpha = 1;
		t.height = 90;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 90;
		return t;
	};
	_proto.nameTxt_i = function () {
		var t = new eui.Label();
		this.nameTxt = t;
		t.fontFamily = 黑体;
		t.horizontalCenter = 3;
		t.lineSpacing = 4;
		t.size = 30;
		t.text = 阿婆;
		t.textColor = 0x333333;
		t.y = 408;
		return t;
	};
	return CommanViewSkin;
})(eui.Skin);generateEUI.paths['resource/skins/FriendHelpSkin.exml'] = window.FriendHelpSkin = (function (_super) {
	__extends(FriendHelpSkin, _super);
	function FriendHelpSkin() {
		_super.call(this);
		this.skinParts = ["shade","titleTxt","list","awardNameTxt","txImg","rectMack","txCon","nameTxt","iconBase","infoCon","refreshBtn","shareBtn","startLable","startBtn","hintTxt","closeBtn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.shade_i(),this._Group2_i()];
	}
	var _proto = FriendHelpSkin.prototype;

	_proto.shade_i = function () {
		var t = new eui.Rect();
		this.shade = t;
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.titleTxt_i(),this._Group1_i(),this._Image3_i(),this.awardNameTxt_i(),this.infoCon_i(),this.refreshBtn_i(),this.shareBtn_i(),this.startBtn_i(),this.hintTxt_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = bg4_png;
		t.verticalCenter = 0;
		return t;
	};
	_proto.titleTxt_i = function () {
		var t = new eui.Label();
		this.titleTxt = t;
		t.fontFamily = 黑体;
		t.horizontalCenter = 3;
		t.size = 40;
		t.text = 好友帮助通关;
		t.textColor = 0x333333;
		t.y = 120;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 190;
		t.elementsContent = [this._Image2_i(),this.list_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = kuang_8;
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = AwardItemSkin;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = icon_gift;
		t.y = 330;
		return t;
	};
	_proto.awardNameTxt_i = function () {
		var t = new eui.Label();
		this.awardNameTxt = t;
		t.fontFamily = 黑体;
		t.horizontalCenter = 3;
		t.size = 30;
		t.text = 特别礼物;
		t.textColor = 0x333333;
		t.y = 540;
		return t;
	};
	_proto.infoCon_i = function () {
		var t = new eui.Group();
		this.infoCon = t;
		t.horizontalCenter = 0;
		t.y = 600;
		t.elementsContent = [this.txCon_i(),this.nameTxt_i(),this.iconBase_i()];
		return t;
	};
	_proto.txCon_i = function () {
		var t = new eui.Group();
		this.txCon = t;
		t.height = 100;
		t.width = 100;
		t.elementsContent = [this.txImg_i(),this.rectMack_i()];
		return t;
	};
	_proto.txImg_i = function () {
		var t = new eui.Image();
		this.txImg = t;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.rectMack_i = function () {
		var t = new eui.Rect();
		this.rectMack = t;
		t.ellipseWidth = 100;
		t.fillAlpha = 1;
		t.height = 90;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 90;
		return t;
	};
	_proto.nameTxt_i = function () {
		var t = new eui.Label();
		this.nameTxt = t;
		t.fontFamily = 黑体;
		t.size = 30;
		t.text = 阿婆;
		t.textColor = 0x333333;
		t.verticalCenter = 0;
		t.x = 120;
		return t;
	};
	_proto.iconBase_i = function () {
		var t = new AwardItem();
		this.iconBase = t;
		t.skinName = AwardItemSkin;
		t.verticalCenter = 0;
		t.x = 220;
		return t;
	};
	_proto.refreshBtn_i = function () {
		var t = new eui.Image();
		this.refreshBtn = t;
		t.left = 75;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = icon_refresh;
		t.y = 737;
		return t;
	};
	_proto.shareBtn_i = function () {
		var t = new eui.Image();
		this.shareBtn = t;
		t.right = 75;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = icon_share;
		t.y = 737;
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Group();
		this.startBtn = t;
		t.bottom = 105;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.elementsContent = [this._Image4_i(),this.startLable_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = kuang_6;
		t.y = 0;
		return t;
	};
	_proto.startLable_i = function () {
		var t = new eui.Label();
		this.startLable = t;
		t.fontFamily = 黑体;
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = 下一关;
		t.verticalCenter = 0;
		return t;
	};
	_proto.hintTxt_i = function () {
		var t = new eui.Label();
		this.hintTxt = t;
		t.bottom = 60;
		t.fontFamily = 黑体;
		t.horizontalCenter = 3;
		t.size = 26;
		t.text = 分享得20金币;
		t.textColor = 0x666666;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.icon = icon_close;
		t.right = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = ButSkin1;
		t.y = 50;
		return t;
	};
	return FriendHelpSkin;
})(eui.Skin);generateEUI.paths['resource/skins/GameSkin.exml'] = window.GameSkin = (function (_super) {
	__extends(GameSkin, _super);
	function GameSkin() {
		_super.call(this);
		this.skinParts = ["yun","bg","guankaCon","viewstack","scroller","yun0","yun1","yun2","yun3","yun4","yunCon","lvTxt","lvBtn","jiaBtn","goldTxt","mdalTxt","mdalBtn","friendBtn","txImg","rectMack","xiaoxiBtn","bagBtn","rankBtn","helpBtn","bottomCom"];
		
		this.height = 1334;
		this.width = 750;
		this.yun_i();
		this.elementsContent = [this.bg_i(),this.scroller_i(),this.yunCon_i(),this._Group2_i(),this.friendBtn_i(),this.bottomCom_i()];
	}
	var _proto = GameSkin.prototype;

	_proto.yun_i = function () {
		var t = new egret.tween.TweenGroup();
		this.yun = t;
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = bg1_png;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.bottom = 0;
		t.bounces = false;
		t.horizontalCenter = 0;
		t.scrollPolicyH = off;
		t.scrollPolicyV = on;
		t.top = 0;
		t.width = 750;
		t.viewport = this.viewstack_i();
		return t;
	};
	_proto.viewstack_i = function () {
		var t = new eui.ViewStack();
		this.viewstack = t;
		t.anchorOffsetY = 0;
		t.selectedIndex = 0;
		t.width = 750;
		return t;
	};
	_proto.yunCon_i = function () {
		var t = new eui.Group();
		this.yunCon = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.elementsContent = [this.yun0_i(),this.yun1_i(),this.yun2_i(),this.yun3_i(),this.yun4_i()];
		return t;
	};
	_proto.yun0_i = function () {
		var t = new eui.Image();
		this.yun0 = t;
		t.source = yun12;
		t.x = 75;
		t.y = -85;
		return t;
	};
	_proto.yun1_i = function () {
		var t = new eui.Image();
		this.yun1 = t;
		t.source = this.yun1;
		t.x = 336;
		t.y = -97;
		if(this.yun1)
		{
			this.yun1.source = this.yun1;
		}
		return t;
	};
	_proto.yun2_i = function () {
		var t = new eui.Image();
		this.yun2 = t;
		t.source = this.yun2;
		t.x = -162;
		t.y = -97;
		if(this.yun2)
		{
			this.yun2.source = this.yun2;
		}
		return t;
	};
	_proto.yun3_i = function () {
		var t = new eui.Image();
		this.yun3 = t;
		t.source = this.yun3;
		t.x = 242;
		t.y = 77;
		if(this.yun3)
		{
			this.yun3.source = this.yun3;
		}
		return t;
	};
	_proto.yun4_i = function () {
		var t = new eui.Image();
		this.yun4 = t;
		t.source = this.yun4;
		t.x = -125;
		t.y = 72;
		if(this.yun4)
		{
			this.yun4.source = this.yun4;
		}
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 44;
		t.elementsContent = [this.lvBtn_i(),this._Group1_i(),this.mdalBtn_i(),this._layout1_i()];
		return t;
	};
	_proto.lvBtn_i = function () {
		var t = new eui.Group();
		this.lvBtn = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.lvTxt_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = kuang_7;
		t.verticalCenter = 0;
		t.width = 210;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = icon_zs;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lvTxt_i = function () {
		var t = new eui.Label();
		this.lvTxt = t;
		t.bold = true;
		t.size = 36;
		t.text = Lv.1;
		t.textAlign = center;
		t.textColor = 0xffffff;
		t.verticalCenter = 0;
		t.width = 110;
		t.x = 70;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this.jiaBtn_i(),this.goldTxt_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(36,33,14,13);
		t.source = kuang_7;
		t.verticalCenter = 0;
		t.width = 232;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = gold1;
		return t;
	};
	_proto.jiaBtn_i = function () {
		var t = new eui.Image();
		this.jiaBtn = t;
		t.right = -25;
		t.source = icon6;
		t.y = -22;
		return t;
	};
	_proto.goldTxt_i = function () {
		var t = new eui.Label();
		this.goldTxt = t;
		t.bold = true;
		t.size = 36;
		t.text = 1234;
		t.textAlign = center;
		t.textColor = 0xffffff;
		t.verticalCenter = 0;
		t.width = 122;
		t.x = 74;
		return t;
	};
	_proto.mdalBtn_i = function () {
		var t = new eui.Group();
		this.mdalBtn = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this.mdalTxt_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = kuang_7;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = icon_xz1;
		t.x = 0;
		return t;
	};
	_proto.mdalTxt_i = function () {
		var t = new eui.Label();
		this.mdalTxt = t;
		t.bold = true;
		t.size = 36;
		t.text = 1;
		t.textAlign = center;
		t.textColor = 0xffffff;
		t.verticalCenter = 0;
		t.width = 100;
		t.x = 70;
		return t;
	};
	_proto._layout1_i = function () {
		var t = new eui.layout();
		return t;
	};
	_proto.friendBtn_i = function () {
		var t = new eui.Button();
		this.friendBtn = t;
		t.icon = icon12;
		t.right = 40;
		t.skinName = ButSkin3;
		t.y = 169;
		return t;
	};
	_proto.bottomCom_i = function () {
		var t = new eui.Group();
		this.bottomCom = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.elementsContent = [this._Image7_i(),this._Group3_i(),this._Group4_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.bottom = -6;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(60,66,36,64);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = bottom;
		t.y = 51;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.bottom = 50;
		t.horizontalCenter = -275;
		t.elementsContent = [this._Image8_i(),this._Rect1_i(),this.txImg_i(),this.rectMack_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = kuang_4;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 100;
		t.fillColor = 0xc0d4fe;
		t.height = 94;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 94;
		return t;
	};
	_proto.txImg_i = function () {
		var t = new eui.Image();
		this.txImg = t;
		t.height = 142;
		t.width = 142;
		t.x = 9;
		t.y = 9;
		return t;
	};
	_proto.rectMack_i = function () {
		var t = new eui.Rect();
		this.rectMack = t;
		t.ellipseWidth = 200;
		t.fillAlpha = 1;
		t.height = 142;
		t.width = 142;
		t.x = 9;
		t.y = 9;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 100;
		t.y = 28;
		t.elementsContent = [this.xiaoxiBtn_i(),this.bagBtn_i(),this.rankBtn_i(),this.helpBtn_i(),this._layout2_i()];
		return t;
	};
	_proto.xiaoxiBtn_i = function () {
		var t = new eui.Button();
		this.xiaoxiBtn = t;
		t.icon = icon_mail;
		t.label = 消息;
		t.skinName = ButSkin3;
		t.x = -7.83;
		t.y = -579.05;
		return t;
	};
	_proto.bagBtn_i = function () {
		var t = new eui.Button();
		this.bagBtn = t;
		t.icon = icon_bag;
		t.label = 口袋;
		t.skinName = ButSkin3;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.rankBtn_i = function () {
		var t = new eui.Button();
		this.rankBtn = t;
		t.icon = icon_rank;
		t.label = 排行;
		t.skinName = ButSkin3;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.helpBtn_i = function () {
		var t = new eui.Button();
		this.helpBtn = t;
		t.icon = icon_help;
		t.label = 帮助;
		t.skinName = ButSkin3;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._layout2_i = function () {
		var t = new eui.layout();
		return t;
	};
	return GameSkin;
})(eui.Skin);generateEUI.paths['resource/skins/GuanKaSkin.exml'] = window.GuanKaSkin = (function (_super) {
	__extends(GuanKaSkin, _super);
	function GuanKaSkin() {
		_super.call(this);
		this.skinParts = ["btn0","btn1","btn2","btn3","btn4","btn5","btn6","btn7","btn8","btn9","btn10","btn11","btn12","btn13","btn14","btn15","btn16","btn17","btn18","btn19","btn20","btn21","btn22","btn23","btn24","btn25","btn26","btn27","btn28","btn29"];
		
		this.height = 3050;
		this.width = 800;
		this.elementsContent = [this._Group3_i()];
	}
	var _proto = GuanKaSkin.prototype;

	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.width = 800;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.source = bg1_png;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.source = bg1_png;
		t.y = 1124;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.source = bg1_png;
		t.y = 2748;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 2600;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 800;
		t.x = 0;
		t.y = 350;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Image21_i(),this._Image22_i(),this._Image23_i(),this._Image24_i(),this._Image25_i(),this._Image26_i(),this._Image27_i(),this._Image28_i(),this._Image29_i(),this._Image30_i(),this._Image31_i(),this._Image32_i(),this._Image33_i(),this._Image34_i(),this._Image35_i(),this._Image36_i(),this._Image37_i(),this._Image38_i(),this._Image39_i(),this._Image40_i(),this._Image41_i(),this._Image42_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = guandao3;
		t.x = 400;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = guandao5;
		t.x = 200;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = guandao1;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = guandao4;
		t.x = 0;
		t.y = 200;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = guandao2;
		t.x = 200;
		t.y = 200;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = guandao3;
		t.x = 200;
		t.y = 400;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = guandao1;
		t.x = 0;
		t.y = 400;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = guandao6;
		t.x = 0;
		t.y = 600;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = guandao6;
		t.x = 0;
		t.y = 800;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = guandao4;
		t.x = 0;
		t.y = 1000;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = guandao5;
		t.x = 200;
		t.y = 1000;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = guandao3;
		t.x = 400;
		t.y = 1000;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = guandao2;
		t.x = 400;
		t.y = 800;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = guandao4;
		t.x = 200;
		t.y = 800;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = guandao1;
		t.x = 200;
		t.y = 600;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = guandao5;
		t.x = 400;
		t.y = 600;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = guandao2;
		t.x = 600;
		t.y = 600;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.source = guandao6;
		t.x = 600;
		t.y = 800;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.source = guandao6;
		t.x = 600;
		t.y = 1000;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.source = guandao3;
		t.x = 600;
		t.y = 1200;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.source = guandao5;
		t.x = 400;
		t.y = 1200;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.source = guandao5;
		t.x = 200;
		t.y = 1200;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.source = guandao1;
		t.x = 0;
		t.y = 1200;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.source = guandao4;
		t.x = 0;
		t.y = 1400;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.source = guandao5;
		t.x = 200;
		t.y = 1400;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.source = guandao2;
		t.x = 400;
		t.y = 1400;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.source = guandao3;
		t.x = 400;
		t.y = 1600;
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.source = guandao1;
		t.x = 200;
		t.y = 1600;
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.source = guandao4;
		t.x = 200;
		t.y = 1800;
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.source = guandao5;
		t.x = 400;
		t.y = 1800;
		return t;
	};
	_proto._Image34_i = function () {
		var t = new eui.Image();
		t.source = guandao2;
		t.x = 600;
		t.y = 1800;
		return t;
	};
	_proto._Image35_i = function () {
		var t = new eui.Image();
		t.source = guandao3;
		t.x = 600;
		t.y = 2000;
		return t;
	};
	_proto._Image36_i = function () {
		var t = new eui.Image();
		t.source = guandao5;
		t.x = 400;
		t.y = 2000;
		return t;
	};
	_proto._Image37_i = function () {
		var t = new eui.Image();
		t.source = guandao5;
		t.x = 200;
		t.y = 2000;
		return t;
	};
	_proto._Image38_i = function () {
		var t = new eui.Image();
		t.source = guandao1;
		t.x = 0;
		t.y = 2000;
		return t;
	};
	_proto._Image39_i = function () {
		var t = new eui.Image();
		t.source = guandao4;
		t.x = 0;
		t.y = 2200;
		return t;
	};
	_proto._Image40_i = function () {
		var t = new eui.Image();
		t.source = guandao5;
		t.x = 200;
		t.y = 2200;
		return t;
	};
	_proto._Image41_i = function () {
		var t = new eui.Image();
		t.source = guandao2;
		t.x = 400;
		t.y = 2200;
		return t;
	};
	_proto._Image42_i = function () {
		var t = new eui.Image();
		t.source = guandao6;
		t.x = 400;
		t.y = 2400;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 350;
		t.elementsContent = [this.btn0_i(),this.btn1_i(),this.btn2_i(),this.btn3_i(),this.btn4_i(),this.btn5_i(),this.btn6_i(),this.btn7_i(),this.btn8_i(),this.btn9_i(),this.btn10_i(),this.btn11_i(),this.btn12_i(),this.btn13_i(),this.btn14_i(),this.btn15_i(),this.btn16_i(),this.btn17_i(),this.btn18_i(),this.btn19_i(),this.btn20_i(),this.btn21_i(),this.btn22_i(),this.btn23_i(),this.btn24_i(),this.btn25_i(),this.btn26_i(),this.btn27_i(),this.btn28_i(),this.btn29_i()];
		return t;
	};
	_proto.btn0_i = function () {
		var t = new eui.Component();
		this.btn0 = t;
		t.skinName = "GkItemSkin";
		t.x = 437.5;
		t.y = 2400;
		return t;
	};
	_proto.btn1_i = function () {
		var t = new eui.Component();
		this.btn1 = t;
		t.skinName = "GkItemSkin";
		t.x = 400;
		t.y = 2250;
		return t;
	};
	_proto.btn2_i = function () {
		var t = new eui.Component();
		this.btn2 = t;
		t.skinName = "GkItemSkin";
		t.x = 150;
		t.y = 2250;
		return t;
	};
	_proto.btn3_i = function () {
		var t = new eui.Component();
		this.btn3 = t;
		t.skinName = "GkItemSkin";
		t.x = 65;
		t.y = 2050;
		return t;
	};
	_proto.btn4_i = function () {
		var t = new eui.Component();
		this.btn4 = t;
		t.skinName = "GkItemSkin";
		t.x = 300;
		t.y = 2050;
		return t;
	};
	_proto.btn5_i = function () {
		var t = new eui.Component();
		this.btn5 = t;
		t.skinName = "GkItemSkin";
		t.x = 575;
		t.y = 2050;
		return t;
	};
	_proto.btn6_i = function () {
		var t = new eui.Component();
		this.btn6 = t;
		t.skinName = "GkItemSkin";
		t.x = 600;
		t.y = 1850;
		return t;
	};
	_proto.btn7_i = function () {
		var t = new eui.Component();
		this.btn7 = t;
		t.skinName = "GkItemSkin";
		t.x = 367;
		t.y = 1850;
		return t;
	};
	_proto.btn8_i = function () {
		var t = new eui.Component();
		this.btn8 = t;
		t.skinName = "GkItemSkin";
		t.x = 240;
		t.y = 1754;
		return t;
	};
	_proto.btn9_i = function () {
		var t = new eui.Component();
		this.btn9 = t;
		t.skinName = "GkItemSkin";
		t.x = 400;
		t.y = 1650;
		return t;
	};
	_proto.btn10_i = function () {
		var t = new eui.Component();
		this.btn10 = t;
		t.skinName = "GkItemSkin";
		t.x = 350;
		t.y = 1450;
		return t;
	};
	_proto.btn11_i = function () {
		var t = new eui.Component();
		this.btn11 = t;
		t.skinName = "GkItemSkin";
		t.x = 100;
		t.y = 1450;
		return t;
	};
	_proto.btn12_i = function () {
		var t = new eui.Component();
		this.btn12 = t;
		t.skinName = "GkItemSkin";
		t.x = 38;
		t.y = 1250;
		return t;
	};
	_proto.btn13_i = function () {
		var t = new eui.Component();
		this.btn13 = t;
		t.skinName = "GkItemSkin";
		t.x = 350;
		t.y = 1250;
		return t;
	};
	_proto.btn14_i = function () {
		var t = new eui.Component();
		this.btn14 = t;
		t.skinName = "GkItemSkin";
		t.x = 637;
		t.y = 1250;
		return t;
	};
	_proto.btn15_i = function () {
		var t = new eui.Component();
		this.btn15 = t;
		t.skinName = "GkItemSkin";
		t.x = 637;
		t.y = 1050;
		return t;
	};
	_proto.btn16_i = function () {
		var t = new eui.Component();
		this.btn16 = t;
		t.skinName = "GkItemSkin";
		t.x = 637;
		t.y = 850;
		return t;
	};
	_proto.btn17_i = function () {
		var t = new eui.Component();
		this.btn17 = t;
		t.skinName = "GkItemSkin";
		t.x = 600;
		t.y = 650;
		return t;
	};
	_proto.btn18_i = function () {
		var t = new eui.Component();
		this.btn18 = t;
		t.skinName = "GkItemSkin";
		t.x = 400;
		t.y = 650;
		return t;
	};
	_proto.btn19_i = function () {
		var t = new eui.Component();
		this.btn19 = t;
		t.skinName = "GkItemSkin";
		t.x = 237;
		t.y = 750;
		return t;
	};
	_proto.btn20_i = function () {
		var t = new eui.Component();
		this.btn20 = t;
		t.skinName = "GkItemSkin";
		t.x = 400;
		t.y = 1050;
		return t;
	};
	_proto.btn21_i = function () {
		var t = new eui.Component();
		this.btn21 = t;
		t.skinName = "GkItemSkin";
		t.x = 200;
		t.y = 1050;
		return t;
	};
	_proto.btn22_i = function () {
		var t = new eui.Component();
		this.btn22 = t;
		t.skinName = "GkItemSkin";
		t.x = 37.5;
		t.y = 950;
		return t;
	};
	_proto.btn23_i = function () {
		var t = new eui.Component();
		this.btn23 = t;
		t.skinName = "GkItemSkin";
		t.x = 40;
		t.y = 750;
		return t;
	};
	_proto.btn24_i = function () {
		var t = new eui.Component();
		this.btn24 = t;
		t.skinName = "GkItemSkin";
		t.x = 37;
		t.y = 550;
		return t;
	};
	_proto.btn25_i = function () {
		var t = new eui.Component();
		this.btn25 = t;
		t.skinName = "GkItemSkin";
		t.x = 237;
		t.y = 450;
		return t;
	};
	_proto.btn26_i = function () {
		var t = new eui.Component();
		this.btn26 = t;
		t.skinName = "GkItemSkin";
		t.x = 200;
		t.y = 250;
		return t;
	};
	_proto.btn27_i = function () {
		var t = new eui.Component();
		this.btn27 = t;
		t.skinName = "GkItemSkin";
		t.x = 40;
		t.y = 150;
		return t;
	};
	_proto.btn28_i = function () {
		var t = new eui.Component();
		this.btn28 = t;
		t.skinName = "GkItemSkin";
		t.x = 200;
		t.y = 50;
		return t;
	};
	_proto.btn29_i = function () {
		var t = new eui.Component();
		this.btn29 = t;
		t.skinName = "GkItemSkin";
		t.x = 400;
		t.y = 50;
		return t;
	};
	return GuanKaSkin;
})(eui.Skin);generateEUI.paths['resource/skins/GuanKaSkin1.exml'] = window.GuanKaSkin1 = (function (_super) {
	__extends(GuanKaSkin1, _super);
	function GuanKaSkin1() {
		_super.call(this);
		this.skinParts = ["btn0","btn1","btn2","btn3","btn4","btn5","btn6","btn7","btn8","btn9","btn10","btn11","btn12","btn13","btn14","btn15","btn16","btn17","btn18","btn19","btn20","btn21","btn22","btn23","btn24","btn25","btn26","btn27","btn28","btn29"];
		
		this.height = 5000;
		this.width = 720;
		this.elementsContent = [this._Group4_i()];
	}
	var _proto = GuanKaSkin1.prototype;

	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.top = 0;
		t.width = 800;
		t.x = 0;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 800;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Image21_i(),this._Image22_i(),this._Image23_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = guandao3;
		t.x = 400;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = guandao5;
		t.x = 200;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = guandao1;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = guandao4;
		t.x = 0;
		t.y = 200;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = guandao2;
		t.x = 200;
		t.y = 200;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = guandao3;
		t.x = 200;
		t.y = 400;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = guandao1;
		t.x = 0;
		t.y = 400;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = guandao6;
		t.x = 0;
		t.y = 600;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = guandao6;
		t.x = 0;
		t.y = 800;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = guandao4;
		t.x = 0;
		t.y = 1000;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = guandao5;
		t.x = 200;
		t.y = 1000;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = guandao3;
		t.x = 400;
		t.y = 1000;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = guandao2;
		t.x = 400;
		t.y = 800;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = guandao4;
		t.x = 200;
		t.y = 800;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = guandao1;
		t.x = 200;
		t.y = 600;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = guandao5;
		t.x = 400;
		t.y = 600;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = guandao2;
		t.x = 600;
		t.y = 600;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = guandao6;
		t.x = 600;
		t.y = 800;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = guandao6;
		t.x = 600;
		t.y = 1000;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = guandao3;
		t.x = 600;
		t.y = 1200;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.source = guandao5;
		t.x = 400;
		t.y = 1200;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.source = guandao5;
		t.x = 200;
		t.y = 1200;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.source = guandao1;
		t.x = 0;
		t.y = 1200;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.width = 800;
		t.y = 1400;
		t.elementsContent = [this._Image24_i(),this._Image25_i(),this._Image26_i(),this._Image27_i(),this._Image28_i(),this._Image29_i(),this._Image30_i(),this._Image31_i(),this._Image32_i(),this._Image33_i(),this._Image34_i(),this._Image35_i(),this._Image36_i(),this._Image37_i(),this._Image38_i(),this._Image39_i()];
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = guandao6;
		t.x = 400;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.bottom = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = guandao2;
		t.x = 400;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.bottom = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = guandao5;
		t.x = 200;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.bottom = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = guandao4;
		t.x = 0;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.bottom = 400;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = guandao1;
		t.x = 0;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.bottom = 400;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = guandao5;
		t.x = 200;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.bottom = 400;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = guandao5;
		t.x = 400;
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.bottom = 400;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = guandao3;
		t.x = 600;
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.bottom = 600;
		t.source = guandao2;
		t.x = 600;
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.bottom = 600;
		t.source = guandao5;
		t.x = 400;
		return t;
	};
	_proto._Image34_i = function () {
		var t = new eui.Image();
		t.bottom = 600;
		t.source = guandao4;
		t.x = 200;
		return t;
	};
	_proto._Image35_i = function () {
		var t = new eui.Image();
		t.bottom = 800;
		t.source = guandao1;
		t.x = 200;
		return t;
	};
	_proto._Image36_i = function () {
		var t = new eui.Image();
		t.bottom = 800;
		t.source = guandao3;
		t.x = 400;
		return t;
	};
	_proto._Image37_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = guandao2;
		t.x = 400;
		t.y = 0;
		return t;
	};
	_proto._Image38_i = function () {
		var t = new eui.Image();
		t.bottom = 1000;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = guandao5;
		t.x = 200;
		return t;
	};
	_proto._Image39_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = guandao4;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.btn0_i(),this.btn1_i(),this.btn2_i(),this.btn3_i(),this.btn4_i(),this.btn5_i(),this.btn6_i(),this.btn7_i(),this.btn8_i(),this.btn9_i(),this.btn10_i(),this.btn11_i(),this.btn12_i(),this.btn13_i(),this.btn14_i(),this.btn15_i(),this.btn16_i(),this.btn17_i(),this.btn18_i(),this.btn19_i(),this.btn20_i(),this.btn21_i(),this.btn22_i(),this.btn23_i(),this.btn24_i(),this.btn25_i(),this.btn26_i(),this.btn27_i(),this.btn28_i(),this.btn29_i()];
		return t;
	};
	_proto.btn0_i = function () {
		var t = new eui.Component();
		this.btn0 = t;
		t.skinName = "GkItemSkin";
		t.x = 437.5;
		t.y = 2400;
		return t;
	};
	_proto.btn1_i = function () {
		var t = new eui.Component();
		this.btn1 = t;
		t.skinName = "GkItemSkin";
		t.x = 400;
		t.y = 2250;
		return t;
	};
	_proto.btn2_i = function () {
		var t = new eui.Component();
		this.btn2 = t;
		t.skinName = "GkItemSkin";
		t.x = 150;
		t.y = 2250;
		return t;
	};
	_proto.btn3_i = function () {
		var t = new eui.Component();
		this.btn3 = t;
		t.skinName = "GkItemSkin";
		t.x = 65;
		t.y = 2050;
		return t;
	};
	_proto.btn4_i = function () {
		var t = new eui.Component();
		this.btn4 = t;
		t.skinName = "GkItemSkin";
		t.x = 300;
		t.y = 2050;
		return t;
	};
	_proto.btn5_i = function () {
		var t = new eui.Component();
		this.btn5 = t;
		t.skinName = "GkItemSkin";
		t.x = 575;
		t.y = 2050;
		return t;
	};
	_proto.btn6_i = function () {
		var t = new eui.Component();
		this.btn6 = t;
		t.skinName = "GkItemSkin";
		t.x = 600;
		t.y = 1850;
		return t;
	};
	_proto.btn7_i = function () {
		var t = new eui.Component();
		this.btn7 = t;
		t.skinName = "GkItemSkin";
		t.x = 367;
		t.y = 1850;
		return t;
	};
	_proto.btn8_i = function () {
		var t = new eui.Component();
		this.btn8 = t;
		t.skinName = "GkItemSkin";
		t.x = 240;
		t.y = 1754;
		return t;
	};
	_proto.btn9_i = function () {
		var t = new eui.Component();
		this.btn9 = t;
		t.skinName = "GkItemSkin";
		t.x = 400;
		t.y = 1650;
		return t;
	};
	_proto.btn10_i = function () {
		var t = new eui.Component();
		this.btn10 = t;
		t.skinName = "GkItemSkin";
		t.x = 350;
		t.y = 1450;
		return t;
	};
	_proto.btn11_i = function () {
		var t = new eui.Component();
		this.btn11 = t;
		t.skinName = "GkItemSkin";
		t.x = 100;
		t.y = 1450;
		return t;
	};
	_proto.btn12_i = function () {
		var t = new eui.Component();
		this.btn12 = t;
		t.skinName = "GkItemSkin";
		t.x = 38;
		t.y = 1250;
		return t;
	};
	_proto.btn13_i = function () {
		var t = new eui.Component();
		this.btn13 = t;
		t.skinName = "GkItemSkin";
		t.x = 350;
		t.y = 1250;
		return t;
	};
	_proto.btn14_i = function () {
		var t = new eui.Component();
		this.btn14 = t;
		t.skinName = "GkItemSkin";
		t.x = 637;
		t.y = 1250;
		return t;
	};
	_proto.btn15_i = function () {
		var t = new eui.Component();
		this.btn15 = t;
		t.skinName = "GkItemSkin";
		t.x = 637;
		t.y = 1050;
		return t;
	};
	_proto.btn16_i = function () {
		var t = new eui.Component();
		this.btn16 = t;
		t.skinName = "GkItemSkin";
		t.x = 637;
		t.y = 850;
		return t;
	};
	_proto.btn17_i = function () {
		var t = new eui.Component();
		this.btn17 = t;
		t.skinName = "GkItemSkin";
		t.x = 600;
		t.y = 650;
		return t;
	};
	_proto.btn18_i = function () {
		var t = new eui.Component();
		this.btn18 = t;
		t.skinName = "GkItemSkin";
		t.x = 400;
		t.y = 650;
		return t;
	};
	_proto.btn19_i = function () {
		var t = new eui.Component();
		this.btn19 = t;
		t.skinName = "GkItemSkin";
		t.x = 237;
		t.y = 750;
		return t;
	};
	_proto.btn20_i = function () {
		var t = new eui.Component();
		this.btn20 = t;
		t.skinName = "GkItemSkin";
		t.x = 400;
		t.y = 1050;
		return t;
	};
	_proto.btn21_i = function () {
		var t = new eui.Component();
		this.btn21 = t;
		t.skinName = "GkItemSkin";
		t.x = 200;
		t.y = 1050;
		return t;
	};
	_proto.btn22_i = function () {
		var t = new eui.Component();
		this.btn22 = t;
		t.skinName = "GkItemSkin";
		t.x = 37.5;
		t.y = 950;
		return t;
	};
	_proto.btn23_i = function () {
		var t = new eui.Component();
		this.btn23 = t;
		t.skinName = "GkItemSkin";
		t.x = 40;
		t.y = 750;
		return t;
	};
	_proto.btn24_i = function () {
		var t = new eui.Component();
		this.btn24 = t;
		t.skinName = "GkItemSkin";
		t.x = 37;
		t.y = 550;
		return t;
	};
	_proto.btn25_i = function () {
		var t = new eui.Component();
		this.btn25 = t;
		t.skinName = "GkItemSkin";
		t.x = 237;
		t.y = 450;
		return t;
	};
	_proto.btn26_i = function () {
		var t = new eui.Component();
		this.btn26 = t;
		t.skinName = "GkItemSkin";
		t.x = 200;
		t.y = 250;
		return t;
	};
	_proto.btn27_i = function () {
		var t = new eui.Component();
		this.btn27 = t;
		t.skinName = "GkItemSkin";
		t.x = 40;
		t.y = 150;
		return t;
	};
	_proto.btn28_i = function () {
		var t = new eui.Component();
		this.btn28 = t;
		t.skinName = "GkItemSkin";
		t.x = 200;
		t.y = 50;
		return t;
	};
	_proto.btn29_i = function () {
		var t = new eui.Component();
		this.btn29 = t;
		t.skinName = "GkItemSkin";
		t.x = 400;
		t.y = 50;
		return t;
	};
	return GuanKaSkin1;
})(eui.Skin);generateEUI.paths['resource/skins/HomeSkin.exml'] = window.HomeSkin = (function (_super) {
	__extends(HomeSkin, _super);
	function HomeSkin() {
		_super.call(this);
		this.skinParts = ["yun","yun15","yun1","yun2","yun3","yun4","yun5","yun6","yun7","yun8","yun14","yun9","yun13","yun16","yun12","yun11","yun10","yun0","yunCon","icon","title","iconCon","startBtn"];
		
		this.height = 1334;
		this.width = 750;
		this.yun_i();
		this.elementsContent = [this._Image1_i(),this.yunCon_i(),this.iconCon_i(),this.startBtn_i()];
	}
	var _proto = HomeSkin.prototype;

	_proto.yun_i = function () {
		var t = new egret.tween.TweenGroup();
		this.yun = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = bg1_png;
		t.top = 0;
		return t;
	};
	_proto.yunCon_i = function () {
		var t = new eui.Group();
		this.yunCon = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.yun15_i(),this.yun1_i(),this.yun2_i(),this.yun3_i(),this.yun4_i(),this.yun5_i(),this.yun6_i(),this.yun7_i(),this.yun8_i(),this.yun14_i(),this.yun9_i(),this.yun13_i(),this.yun16_i(),this.yun12_i(),this.yun11_i(),this.yun10_i(),this.yun0_i()];
		return t;
	};
	_proto.yun15_i = function () {
		var t = new eui.Image();
		this.yun15 = t;
		t.source = this.yun1;
		t.x = -118;
		t.y = -64;
		return t;
	};
	_proto.yun1_i = function () {
		var t = new eui.Image();
		this.yun1 = t;
		t.source = this.yun2;
		t.x = 174;
		t.y = -87;
		if(this.yun15)
		{
			this.yun15.source = this.yun1;
		}
		return t;
	};
	_proto.yun2_i = function () {
		var t = new eui.Image();
		this.yun2 = t;
		t.source = this.yun3;
		t.x = -201;
		t.y = 220;
		if(this.yun1)
		{
			this.yun1.source = this.yun2;
		}
		return t;
	};
	_proto.yun3_i = function () {
		var t = new eui.Image();
		this.yun3 = t;
		t.source = this.yun4;
		t.x = 343;
		t.y = 151;
		if(this.yun2)
		{
			this.yun2.source = this.yun3;
		}
		return t;
	};
	_proto.yun4_i = function () {
		var t = new eui.Image();
		this.yun4 = t;
		t.source = this.yun5;
		t.x = 11;
		t.y = 400;
		if(this.yun3)
		{
			this.yun3.source = this.yun4;
		}
		return t;
	};
	_proto.yun5_i = function () {
		var t = new eui.Image();
		this.yun5 = t;
		t.source = this.yun6;
		t.x = 302;
		t.y = 350;
		if(this.yun4)
		{
			this.yun4.source = this.yun5;
		}
		return t;
	};
	_proto.yun6_i = function () {
		var t = new eui.Image();
		this.yun6 = t;
		t.source = this.yun1;
		t.x = -147;
		t.y = 550;
		if(this.yun5)
		{
			this.yun5.source = this.yun6;
		}
		return t;
	};
	_proto.yun7_i = function () {
		var t = new eui.Image();
		this.yun7 = t;
		t.source = this.yun2;
		t.x = 247;
		t.y = 610;
		return t;
	};
	_proto.yun8_i = function () {
		var t = new eui.Image();
		this.yun8 = t;
		t.source = this.yun3;
		t.x = -150;
		t.y = 755.5;
		return t;
	};
	_proto.yun14_i = function () {
		var t = new eui.Image();
		this.yun14 = t;
		t.bottom = 290;
		t.source = this.yun1;
		t.x = 157;
		return t;
	};
	_proto.yun9_i = function () {
		var t = new eui.Image();
		this.yun9 = t;
		t.source = this.yun1;
		t.x = 320;
		t.y = 820;
		return t;
	};
	_proto.yun13_i = function () {
		var t = new eui.Image();
		this.yun13 = t;
		t.bottom = 115;
		t.source = this.yun1;
		t.x = -129;
		return t;
	};
	_proto.yun16_i = function () {
		var t = new eui.Image();
		this.yun16 = t;
		t.bottom = -120;
		t.source = this.yun3;
		t.x = 220;
		return t;
	};
	_proto.yun12_i = function () {
		var t = new eui.Image();
		this.yun12 = t;
		t.bottom = 90;
		t.source = this.yun5;
		t.x = 355;
		return t;
	};
	_proto.yun11_i = function () {
		var t = new eui.Image();
		this.yun11 = t;
		t.bottom = -100;
		t.source = this.yun1;
		t.x = 278;
		return t;
	};
	_proto.yun10_i = function () {
		var t = new eui.Image();
		this.yun10 = t;
		t.bottom = -50;
		t.source = this.yun5;
		t.x = -139;
		return t;
	};
	_proto.yun0_i = function () {
		var t = new eui.Image();
		this.yun0 = t;
		t.source = this.yun1;
		t.x = -122;
		t.y = -10;
		return t;
	};
	_proto.iconCon_i = function () {
		var t = new eui.Group();
		this.iconCon = t;
		t.horizontalCenter = 0;
		t.y = 150;
		t.elementsContent = [this.icon_i(),this.title_i()];
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = this.icon;
		if(this.icon)
		{
			this.icon.source = this.icon;
		}
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Image();
		this.title = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = title1;
		t.y = 210;
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Button();
		this.startBtn = t;
		t.bottom = 300;
		t.horizontalCenter = 0;
		t.icon = icon11;
		t.skinName = ButSkin1;
		return t;
	};
	return HomeSkin;
})(eui.Skin);generateEUI.paths['resource/skins/message/MessageSkin.exml'] = window.MessageSkin = (function (_super) {
	__extends(MessageSkin, _super);
	function MessageSkin() {
		_super.call(this);
		this.skinParts = ["shade","bg","titleTxt","contentTxt","startLable","startBtn","closeBtn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.shade_i(),this._Group1_i()];
	}
	var _proto = MessageSkin.prototype;

	_proto.shade_i = function () {
		var t = new eui.Rect();
		this.shade = t;
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.bg_i(),this.titleTxt_i(),this.contentTxt_i(),this.startBtn_i(),this.closeBtn_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(354,458,144,78);
		t.source = bg3_png;
		t.verticalCenter = 0;
		return t;
	};
	_proto.titleTxt_i = function () {
		var t = new eui.Label();
		this.titleTxt = t;
		t.fontFamily = 黑体;
		t.horizontalCenter = 3;
		t.size = 40;
		t.text = 通知;
		t.textColor = 0x333333;
		t.y = 120;
		return t;
	};
	_proto.contentTxt_i = function () {
		var t = new eui.Label();
		this.contentTxt = t;
		t.fontFamily = 黑体;
		t.horizontalCenter = 0;
		t.lineSpacing = 12;
		t.size = 30;
		t.text = 想说什么想说什么想说什么想说什么想说什么想说什么想说什么想说什么想说什么想说什么想说什么想说什么想说什么想说什么想说什么想说什么想说什么想说什么想说什么想说什么想说什么想说什么想说什么;
		t.textAlign = center;
		t.textColor = 0x333333;
		t.width = 560;
		t.y = 196;
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Group();
		this.startBtn = t;
		t.bottom = 90;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.elementsContent = [this._Image1_i(),this.startLable_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = kuang_6;
		t.y = 0;
		return t;
	};
	_proto.startLable_i = function () {
		var t = new eui.Label();
		this.startLable = t;
		t.fontFamily = 黑体;
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = 知道啦;
		t.verticalCenter = 0;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.icon = icon_close;
		t.right = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = ButSkin1;
		t.y = 50;
		return t;
	};
	return MessageSkin;
})(eui.Skin);generateEUI.paths['resource/skins/rank/RankItemSkin.exml'] = window.RankItemSkin = (function (_super) {
	__extends(RankItemSkin, _super);
	function RankItemSkin() {
		_super.call(this);
		this.skinParts = ["rankIcon","rankNum","iconImg","mackRect","nameTxt","lvTxt"];
		
		this.height = 86;
		this.width = 600;
		this.elementsContent = [this.rankIcon_i(),this.rankNum_i(),this._Group1_i(),this.nameTxt_i(),this.lvTxt_i()];
	}
	var _proto = RankItemSkin.prototype;

	_proto.rankIcon_i = function () {
		var t = new eui.Image();
		this.rankIcon = t;
		t.source = rank1;
		t.verticalCenter = 0;
		t.x = 30;
		return t;
	};
	_proto.rankNum_i = function () {
		var t = new eui.Label();
		this.rankNum = t;
		t.fontFamily = 黑体;
		t.text = 1;
		t.textAlign = center;
		t.textColor = 0x333333;
		t.verticalCenter = 0;
		t.width = 70;
		t.x = 24;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 64;
		t.verticalCenter = 0;
		t.width = 64;
		t.x = 120;
		t.elementsContent = [this._Rect1_i(),this.iconImg_i(),this.mackRect_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.ellipseWidth = 100;
		t.fillColor = 0xc0d4fe;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.iconImg_i = function () {
		var t = new eui.Image();
		this.iconImg = t;
		t.height = 60;
		t.horizontalCenter = 0;
		t.mask = this.mackRect;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 60;
		t.x = 170;
		t.y = 2;
		return t;
	};
	_proto.mackRect_i = function () {
		var t = new eui.Rect();
		this.mackRect = t;
		t.ellipseWidth = 100;
		t.height = 60;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 60;
		if(this.iconImg)
		{
			this.iconImg.mask = this.mackRect;
		}
		return t;
	};
	_proto.nameTxt_i = function () {
		var t = new eui.Label();
		this.nameTxt = t;
		t.fontFamily = 黑体;
		t.text = 派大星;
		t.textColor = 0x333333;
		t.verticalCenter = 0;
		t.x = 205;
		return t;
	};
	_proto.lvTxt_i = function () {
		var t = new eui.Label();
		this.lvTxt = t;
		t.fontFamily = 黑体;
		t.text = Lv.99;
		t.textColor = 0x333333;
		t.verticalCenter = 0;
		t.x = 490;
		return t;
	};
	return RankItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/rank/RankSkin.exml'] = window.RankSkin = (function (_super) {
	__extends(RankSkin, _super);
	function RankSkin() {
		_super.call(this);
		this.skinParts = ["shade","titleTxt","closeBtn","list","scroller"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.shade_i(),this._Group1_i()];
	}
	var _proto = RankSkin.prototype;

	_proto.shade_i = function () {
		var t = new eui.Rect();
		this.shade = t;
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.titleTxt_i(),this.closeBtn_i(),this.scroller_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = bg4_png;
		t.verticalCenter = 0;
		return t;
	};
	_proto.titleTxt_i = function () {
		var t = new eui.Label();
		this.titleTxt = t;
		t.fontFamily = 黑体;
		t.horizontalCenter = 3;
		t.size = 40;
		t.text = 排行榜;
		t.textColor = 0x333333;
		t.y = 120;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.icon = icon_close;
		t.right = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = ButSkin1;
		t.y = 50;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.height = 697;
		t.horizontalCenter = 0;
		t.width = 610;
		t.y = 195;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.itemRendererSkinName = RankItemSkin;
		return t;
	};
	return RankSkin;
})(eui.Skin);generateEUI.paths['resource/skins/SignInSkin.exml'] = window.SignInSkin = (function (_super) {
	__extends(SignInSkin, _super);
	function SignInSkin() {
		_super.call(this);
		this.skinParts = ["shade","titleTxt","hintTxt1","hintTxt2","infoTxt3","btn1","btn2","btn3","btn4","btn5","btn6","btn7","list","startLable","startBtn","closeBtn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.shade_i(),this._Group3_i()];
	}
	var _proto = SignInSkin.prototype;

	_proto.shade_i = function () {
		var t = new eui.Rect();
		this.shade = t;
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.titleTxt_i(),this.hintTxt1_i(),this.hintTxt2_i(),this.infoTxt3_i(),this._Group1_i(),this._Group2_i(),this.list_i(),this.startBtn_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = bg4_png;
		t.verticalCenter = 0;
		return t;
	};
	_proto.titleTxt_i = function () {
		var t = new eui.Label();
		this.titleTxt = t;
		t.fontFamily = 黑体;
		t.horizontalCenter = 3;
		t.size = 40;
		t.text = 签到成功;
		t.textColor = 0x333333;
		t.y = 120;
		return t;
	};
	_proto.hintTxt1_i = function () {
		var t = new eui.Label();
		this.hintTxt1 = t;
		t.fontFamily = 黑体;
		t.horizontalCenter = 3;
		t.size = 26;
		t.text = 连续签到7天可获得大礼包;
		t.textColor = 0x666666;
		t.y = 195;
		return t;
	};
	_proto.hintTxt2_i = function () {
		var t = new eui.Label();
		this.hintTxt2 = t;
		t.fontFamily = 黑体;
		t.horizontalCenter = 3;
		t.size = 26;
		t.text = 连续一天签到，您获得了：;
		t.textColor = 0x333333;
		t.y = 562;
		return t;
	};
	_proto.infoTxt3_i = function () {
		var t = new eui.Label();
		this.infoTxt3 = t;
		t.fontFamily = 黑体;
		t.horizontalCenter = 3;
		t.size = 26;
		t.text = 分享到群里，额外获得20金币;
		t.textColor = 0x333333;
		t.y = 851;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 275;
		t.elementsContent = [this.btn1_i(),this.btn2_i(),this.btn3_i(),this.btn4_i(),this._layout1_i()];
		return t;
	};
	_proto.btn1_i = function () {
		var t = new eui.Component();
		this.btn1 = t;
		t.skinName = "DayItemSkin";
		return t;
	};
	_proto.btn2_i = function () {
		var t = new eui.Component();
		this.btn2 = t;
		t.skinName = "DayItemSkin";
		return t;
	};
	_proto.btn3_i = function () {
		var t = new eui.Component();
		this.btn3 = t;
		t.skinName = "DayItemSkin";
		return t;
	};
	_proto.btn4_i = function () {
		var t = new eui.Component();
		this.btn4 = t;
		t.skinName = "DayItemSkin";
		return t;
	};
	_proto._layout1_i = function () {
		var t = new eui.layout();
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 415;
		t.elementsContent = [this.btn5_i(),this.btn6_i(),this.btn7_i(),this._layout2_i()];
		return t;
	};
	_proto.btn5_i = function () {
		var t = new eui.Component();
		this.btn5 = t;
		t.skinName = "DayItemSkin";
		return t;
	};
	_proto.btn6_i = function () {
		var t = new eui.Component();
		this.btn6 = t;
		t.skinName = "DayItemSkin";
		return t;
	};
	_proto.btn7_i = function () {
		var t = new eui.Component();
		this.btn7 = t;
		t.skinName = "DayItemSkin";
		return t;
	};
	_proto._layout2_i = function () {
		var t = new eui.layout();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = AwardItemSkin;
		t.y = 634;
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Group();
		this.startBtn = t;
		t.bottom = 110;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.elementsContent = [this._Image2_i(),this.startLable_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = kuang_5;
		return t;
	};
	_proto.startLable_i = function () {
		var t = new eui.Label();
		this.startLable = t;
		t.fontFamily = 黑体;
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = 炫 耀;
		t.verticalCenter = 0;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.icon = icon_close;
		t.right = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = ButSkin1;
		t.y = 50;
		return t;
	};
	return SignInSkin;
})(eui.Skin);generateEUI.paths['resource/skins/TaskViewSkin.exml'] = window.TaskViewSkin = (function (_super) {
	__extends(TaskViewSkin, _super);
	function TaskViewSkin() {
		_super.call(this);
		this.skinParts = ["shade","titleTxt","list","awardNameTxt","txList","numTxt","renwuCon","startLable","startBtn","closeBtn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.shade_i(),this._Group2_i()];
	}
	var _proto = TaskViewSkin.prototype;

	_proto.shade_i = function () {
		var t = new eui.Rect();
		this.shade = t;
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.titleTxt_i(),this._Group1_i(),this._Image3_i(),this.awardNameTxt_i(),this.renwuCon_i(),this.startBtn_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = bg4_png;
		t.verticalCenter = 0;
		return t;
	};
	_proto.titleTxt_i = function () {
		var t = new eui.Label();
		this.titleTxt = t;
		t.fontFamily = 黑体;
		t.horizontalCenter = 3;
		t.size = 40;
		t.text = 这里是任务名称;
		t.textColor = 0x333333;
		t.y = 120;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 190;
		t.elementsContent = [this._Image2_i(),this.list_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = kuang_8;
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = AwardItemSkin;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = icon_gift;
		t.y = 330;
		return t;
	};
	_proto.awardNameTxt_i = function () {
		var t = new eui.Label();
		this.awardNameTxt = t;
		t.fontFamily = 黑体;
		t.horizontalCenter = 3;
		t.size = 30;
		t.text = 特别礼物;
		t.textColor = 0x333333;
		t.y = 540;
		return t;
	};
	_proto.renwuCon_i = function () {
		var t = new eui.Group();
		this.renwuCon = t;
		t.horizontalCenter = 0;
		t.y = 610;
		t.elementsContent = [this.txList_i(),this.numTxt_i()];
		return t;
	};
	_proto.txList_i = function () {
		var t = new eui.List();
		this.txList = t;
		t.itemRendererSkinName = TxItemSkin;
		t.scaleX = 1;
		t.scaleY = 1;
		return t;
	};
	_proto.numTxt_i = function () {
		var t = new eui.Label();
		this.numTxt = t;
		t.fontFamily = 黑体;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = 232人正在参加…;
		t.textColor = 0x333333;
		t.verticalCenter = 0;
		t.x = 155;
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Group();
		this.startBtn = t;
		t.bottom = 105;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.elementsContent = [this._Image4_i(),this.startLable_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = kuang_6;
		t.y = 0;
		return t;
	};
	_proto.startLable_i = function () {
		var t = new eui.Label();
		this.startLable = t;
		t.fontFamily = 黑体;
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = 开 始;
		t.verticalCenter = 0;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.icon = icon_close;
		t.right = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = ButSkin1;
		t.y = 50;
		return t;
	};
	return TaskViewSkin;
})(eui.Skin);generateEUI.paths['resource/skins/TxItemSkin.exml'] = window.TxItemSkin = (function (_super) {
	__extends(TxItemSkin, _super);
	function TxItemSkin() {
		_super.call(this);
		this.skinParts = ["iconImg","mackRect"];
		
		this.height = 60;
		this.width = 60;
		this.elementsContent = [this.iconImg_i(),this.mackRect_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.source"],[0],this.iconImg,"source");
	}
	var _proto = TxItemSkin.prototype;

	_proto.iconImg_i = function () {
		var t = new eui.Image();
		this.iconImg = t;
		t.height = 60;
		t.horizontalCenter = 0;
		t.mask = this.mackRect;
		t.verticalCenter = 0;
		t.width = 60;
		return t;
	};
	_proto.mackRect_i = function () {
		var t = new eui.Rect();
		this.mackRect = t;
		t.bottom = 0;
		t.ellipseWidth = 100;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		if(this.iconImg)
		{
			this.iconImg.mask = this.mackRect;
		}
		return t;
	};
	return TxItemSkin;
})(eui.Skin);