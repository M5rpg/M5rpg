// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"UCHU_MobileOperation","status":true,"description":"スマホ操作用プラグイン。横持ち/縦持ちに対応した仮想ボタン、\r\nタッチ操作の方法を追加拡張し、スマホプレイを快適にします。","parameters":{"---PC Option---":"","PC BtnDisplay":"false","PC TouchExtend":"true","---File Path---":"","DPad Image":"./img/system/DirPad.png","ActionBtn Image":"./img/system/ActionButton.png","CancelBtn Image":"./img/system/CancelButton.png","---Button Customize---":"","Button Opacity":"0.7","Vertical BtnZoom":"1.7","Tablet BtnZoom":"0.8","TabVertical BtnZoom":"1.1","HideButton OnMessage":"true","DPad Visible":"true","DPad Size":"200","DPad Margin":"10; 10","DPad Orientation":"left; bottom","DPad OpelationRange":"1.3","DPad DiagonalRange":"0.3","ActionBtn Visible":"true","ActionBtn Size":"100","ActionBtn Margin":"10; 90","ActionBtn Orientation":"right; bottom","CancelBtn Visible":"true","CancelBtn Size":"100","CancelBtn Margin":"110; 10","CancelBtn Orientation":"right; bottom","---TouchInput Extend---":"","Flick PageUp-PageDown":"true","HoldCanvas ActionBtn":"true","OutCanvas CancelBtn":"false","OutCanvas ActionBtn":"false","--!need AnalogMove.js!--":"","Analog Move":"false","Analog Sensitivity":"1.8"}},
{"name":"KMS_AccelerateFileScene","status":true,"description":"[v0.1.0] セーブ/ロード画面の描画を高速化します。","parameters":{}},
{"name":"KMS_SaveWithSnap","status":true,"description":"[v0.1.0] セーブ/ロード画面にスクリーンショットを追加します。","parameters":{"Image scale":"0.15","Enable JPEG":"1"}},
{"name":"liply_memoryleak_patch","status":false,"description":"メモリリークパッチ","parameters":{}},
{"name":"WebAudioCache","status":true,"description":"A cache for WebAudio which keeps preloaded objects in memory while they are still recent or in use. Combined with TDDP Preload Manager, this should hopefully reduce BGM play lag to a minimum.","parameters":{}},
{"name":"TDDP_PreloadManager","status":false,"description":"1.1.1 Preload resources on scene/map load as well as game startup for a smoother gameplay experience.          id:TDDP_PreloadManager","parameters":{"Preload On Map Load":"true","Preload System Music":"false","Preload System SFX":"false","Print Debug to Console":"false"}},
{"name":"Cache Manager","status":false,"description":"Selectively clear the image cache for memory usage improvements","parameters":{"Mobile only":"Y","--------------------------------------------":"","Clear All":"Y","Clear Animations":"Y","Clear Battlebacks":"Y","Clear Battlers":"Y","Clear Characters":"Y","Clear Faces":"Y","Clear Parallaxes":"Y","Clear Pictures":"Y","Clear System":"N","Clear Tilesets":"Y","Clear Titles":"Y","Custom Images":""}},
{"name":"liply_preload","status":false,"description":"テクスチャキャッシュの量を制限し、イベントで使用する画像を事前読み込みします。","parameters":{"Memory Limit":"50","Debug":"false"}}
];
