//=============================================================================
// Title_Setting.js
//=============================================================================
/*:ja
 * @plugindesc タイトル調整用プラグイン
 * @author miyoshi
 *
 * @help
 * 
 *このプラグインにプラグインコマンドはありません。
*/

(function() {
	Scene_Title.prototype.drawGameTitle = function() {
	    var x = 20;
	    var y = Graphics.height / 4;
	    var maxWidth = Graphics.width - x * 2;
	    var text = '  ';
	    this._gameTitleSprite.bitmap.outlineColor = 'black';
	    this._gameTitleSprite.bitmap.outlineWidth = 8;
	    this._gameTitleSprite.bitmap.fontSize = 72;
	    this._gameTitleSprite.bitmap.drawText(text, x, y, maxWidth, 48, 'center');
	};

	Scene_Title.prototype.playTitleMusic = function() {
	    $gameSystem.replayBgm();
	    AudioManager.stopBgs();
	    AudioManager.stopMe();
	};
})();