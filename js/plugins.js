// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[

{"name":"UCHU_MobileOperation","status":true,"description":"スマホ操作用プラグイン。横持ち/縦持ちに対応した仮想ボタン、\r\nタッチ操作の方法を追加拡張し、スマホプレイを快適にします。","parameters":{"---PC Option---":"","PC BtnDisplay":"false","PC TouchExtend":"true","---File Path---":"","DPad Image":"./img/system/DirPad.png","ActionBtn Image":"./img/system/ActionButton.png","CancelBtn Image":"./img/system/CancelButton.png","---Button Customize---":"","Button Opacity":"1","Vertical BtnZoom":"1.7","Tablet BtnZoom":"0.8","TabVertical BtnZoom":"1.1","HideButton OnMessage":"false","DPad Visible":"true","DPad Size":"200","DPad Margin":"10; 10","DPad Orientation":"left; bottom","DPad OpelationRange":"1.3","DPad DiagonalRange":"0.3","ActionBtn Visible":"true","ActionBtn Size":"100","ActionBtn Margin":"10; 90","ActionBtn Orientation":"right; bottom","CancelBtn Visible":"true","CancelBtn Size":"100","CancelBtn Margin":"110; 10","CancelBtn Orientation":"right; bottom","---TouchInput Extend---":"","Flick PageUp-PageDown":"true","HoldCanvas ActionBtn":"true","OutCanvas CancelBtn":"false","OutCanvas ActionBtn":"false","--!need AnalogMove.js!--":"","Analog Move":"false","Analog Sensitivity":"1.8"}},
{"name":"TkoolMV_PluginCommandBook","status":false,"description":"プラグインコマンド集","parameters":{"制御文字の拡張":"はい"}},
{"name":"OrangeCustomEvents","status":true,"description":"This plugin Will let you add or copy events to the current map","parameters":{}},
{"name":"AdjustPictureGraphical","status":true,"description":"ピクチャのグラフィカルな位置調整プラグイン","parameters":{}},
{"name":"BattleBalanceCustom","status":true,"description":"デフォルトで変更できない戦闘バランスを調整します。","parameters":{"criRate":"2","lukRate":"0.001","maxBuff":"4","buffRate":"0.25","iconBussStart":"32,40","iconDebussStart":"48,56","initTpRand":"25","initTpPlus":"0","damageTpBase":"50","damageTpPlus":"0"}},
{"name":"PictureCallCommon","status":false,"description":"ピクチャのボタン化プラグイン","parameters":{"透明色を考慮":"ON","ピクチャ番号の変数番号":"21"}},
{"name":"HIME_EquipSlotsCore","status":false,"description":"Provides you with tools to set up custom equip slots for\r\neach actor individually.","parameters":{}},
{"name":"BattleActorFaceVisibility","status":false,"description":"戦闘中顔グラフィック表示プラグイン","parameters":{}},
{"name":"UR65_SmartPhoneUI","status":true,"description":"スマホ用UI  ver 1.0.0\nUIのサイズをスマートフォン向けに最適化します。","parameters":{"タイトル":"1","メニュー":"1","アイテム":"1","スキル":"1","装備":"0","オプション":"1","ゲーム終了":"1","戦闘":"0","ショップ":"1","イベント関係":"0","アイコン位置修正":"1"}},
{"name":"TitleCommandPosition","status":false,"description":"タイトルコマンドウィンドウの位置を変更します。","parameters":{"Offset X":"120","Offset Y":"0","Width":"240","Background":"0"}},
{"name":"MaxItems","status":true,"description":"アイテムの所持可能数を変更.","parameters":{}},
{"name":"YEP_BattleEngineCore","status":true,"description":"戦闘システムをカスタムし、様々な要素を変更することができます","parameters":{"---一般---":"","Action Speed":"agi","Immortal State ID":"3","Default System":"dtb","---アニメーション---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"120","Physical Animation":"0","Magical Animation":"0","Enemy Attack Animation":"0","Reflect Animation":"42","Motion Waiting":"false","---フロントビュー---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","---サイドビュー---":"","Home Position X":"Graphics.boxWidth - 216 + index * 32","Home Position Y":"Graphics.boxHeight - 344 + index * 48","Default X Anchor":"0.5","Default Y Anchor":"1.0","Step Distance":"48","Flinch Distance":"12","---ダメージポップアップ---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---ウィンドウセッティング---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"left","Start Actor Command":"true","---選択ヘルプ---":"","Select Help Window":"true","User Help Text":"ユーザー","Ally Help Text":"味方","Allies Help Text":"味方","Enemy Help Text":"敵","Enemies Help Text":"敵","All Help Text":"全ての %1","Random Help Text":"%2 ランダムな %1","---エネミーセレクト---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Enemy Font Size":"20","Enemy Auto Select":"0","---アクターセレクト---":"","Visual Actor Select":"true","---バトルログ---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"true","Show State Text":"true","Show Buff Text":"true","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"true","Show Critical Text":"true","Show Miss Text":"true","Show Evasion Text":"true","Show HP Text":"true","Show MP Text":"true","Show TP Text":"true"}},
{"name":"SSEP_BattleSpeedUp_v2","status":true,"description":"[ver2.01] 戦闘速度を上げるプラグインです。YanflyEngine対応。\n利用時は、必ずYanflyEngineの後に読み込んでください。","parameters":{"---General Setting---":"","BattleSpeed (Default)":"1","BattleSpeed (Boost)":"2","OkayKeyBoost":"true","VisibleSwitch":"true","BoostToggleSwitch":"shift","---Detail Setting---":"","StateIcon":"40","StateOverlay":"8","Weapon":"12","Motion":"12","Balloon":"12","Damage":"90","DamageMin":"60","--BattleLog Setting--":"","LogAnime BaseDelay":"8","LogAnime NextDelay":"12","LogWaitCount Default":"1","LogWaitCount Boost":"2","---Switch Setting---":"","SE BoostON":"Decision2","SE BoostOFF":"Decision2","SE Volume":"50","SwitchImage":"Balloon","SwitchX":"10","SwitchY":"10","SwitchWidth":"48","SwitchHeight":"48","SwitchTop":"2","SwitchLeft":"1","SwitchAnimePattern":"8","SwitchAnimeSpeed":"5","---YEP BattleCore---":"","YEP Battle MotionWait":"20","---YEP ATB---":"","YEP ATB BoostSwitch":"true","---ATB Speed---":"","ATB Speed(Default)":"1","ATB Speed(Boost)":"2","---YEP Victory AM---":"","YEP Victory Wait":"true"}},
{"name":"enemybars","status":true,"description":"Makes enemy hp bar appear in battle.","parameters":{"High HP Color":"#009900","Medium HP Color":"#ffcc00","Low HP Color":"#ff6600","Critical HP Color":"#ff3300"}},
{"name":"Yami_8DIR","status":false,"description":"プレイヤーの8方向の移動が可能になります。","parameters":{}},
{"name":"MPP_ChoiceEX","status":false,"description":"【MPP】選択肢の機能拡張","parameters":{"maxPageRow":"8"}},
{"name":"PictureVariableSetting","status":true,"description":"ピクチャの変数設定プラグイン","parameters":{"初期値":"OFF"}},
{"name":"Torigoya_QuickSkill","status":false,"description":"選択するとターンを消費せずに即発動するスキルを追加します。","parameters":{}},
{"name":"YEP_SkillCore","status":false,"description":"スキルシステムにより多くの機能を実装し、\r\nコストの設定などができるようになります。","parameters":{"---一般---":"","Cost Padding":"4","Command Alignment":"center","---HP消費---":"","HP Format":"%1%2","HP Font Size":"20","HP Text Color":"18","HP Icon":"162","---MP消費---":"","MP Format":"%1%2","MP Font Size":"20","MP Text Color":"23","MP Icon":"165","---TP Costs---":"","TP Format":"%1%2","TP Font Size":"20","TP Text Color":"29","TP Icon":"164"}},
{"name":"YEP_X_SkillCooldowns","status":true,"description":"スキルが連続で使われるのを防ぐため、\nクールダウンのシステムを導入できます。","parameters":{"---クールダウン---":"","Cooldown Format":"%1CD","Cooldown Font Size":"20","Cooldown Text Color":"6","Cooldown Icon":"75","Cooldown After Battle":"-10","Cooldown Steps":"5","Cooldown Bypass":"1 2 3 4 5 6 7","---ウォームアップ---":"","Warmup Format":"%1WU","Warmup Font Size":"20","Warmup Text Color":"4","Warmup Icon":"75"}},
{"name":"ItemBook","status":true,"description":"アイテム図鑑です。アイテムの詳細なステータスを表示します。","parameters":{"Unknown Data":"？？？？？？","Price Text":"価格","Equip Text":"装備","Type Text":"タイプ"}},
{"name":"YEP_AutoPassiveStates","status":false,"description":"アクター、敵、スキル、装備のステートをパッシブにできます","parameters":{}},
{"name":"EST_Build_And_Decor_EX","status":false,"description":"This plugin is the MANAGER to swap event with building / decorations based on item.\r\n<EST_BUILD_AND_DECOR>","parameters":{"VarIdForSelection":"25","DecorMoveSwitchId":"25","DecorMoveSelfSwitch":"C","DecorMoveCancelSelfSwitch":"B","DecorMoveMovementDelay":"15","CannotBePlacedOpacity":"150"}},
{"name":"EST_Clone_Transform_Delete_Event","status":true,"description":"This plugin can add new event / transform existing event based on other event. and finally can delete the event.\r\n<EST_CLONE_TRANSFORM_DELETE_EVENT>","parameters":{}},
{"name":"EST_Save_Map_Event","status":true,"description":"This plugin can make us save the map events so it won't be reloaded from database when entering new map.\r\n<EST_SAVE_MAP_EVENT>","parameters":{}},
{"name":"YEP_MessageCore","status":true,"description":"メッセージの表示方法や機能をカスタマイズすることができます。","parameters":{"---一般---":"","Default Rows":"4","Default Width":"Graphics.boxWidth","Face Indent":"Window_Base._faceWidth + 24","Fast Forward":"Input.isPressed('pagedown')","Word Wrapping":"false","Description Wrap":"false","---フォント---":"","Font Name":"GameFont","Font Size":"28","Font Size Change":"12","Font Changed Max":"96","Font Changed Min":"12","---Name Box---":"","Name Box Buffer X":"-28","Name Box Buffer Y":"0","Name Box Padding":"this.standardPadding() * 4","Name Box Color":"0","Name Box Clear":"false","Name Box Added Text":"\\c[6]"}},
{"name":"AKUNOU_OptionWindowOpacity","status":true,"description":"オプションにウィンドウ透明度の変更を追加します。","parameters":{"Window Opacity Term":"ウィンドウ透明度","Window Opacity Offset":"0","Window Opacity Default":"255"}},
{"name":"mv_actor_stepping_animation","status":true,"description":"Allows party leader/followers to have stepping anim on map","parameters":{}},
{"name":"StepAnimeSpeed","status":true,"description":"ステップアニメの速度の変更","parameters":{"shift":"0.5"}}
];
