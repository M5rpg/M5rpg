//==========================================================
// StepAnimeSpeed.js
//=========================================================

/*:
 * @plugindesc Plugin  to set charactors steping animation.
 * @author miyoshi
 *
 * @param shift
 * @desc Value to add shift. 
 * @default 2.5
 *
 *
 * @help This plugin does not provide plugin commands.
 *
 */

/*:ja
 * @plugindesc ステップアニメの速度の変更
 * @author miyoshi
 *
 * @param shift
 * @desc スピード変更
 * @default 2.5
 *
 * @help このプラグインには、プラグインコマンドはありません。
 * キャラクター歩行時のステップアニメの速度を変更します。
*/

(function(){
	var shift = 2.5;
	Game_CharacterBase.prototype.animationWait = function() {
    return (9 - this.realMoveSpeed()) * shift;
  };
})();