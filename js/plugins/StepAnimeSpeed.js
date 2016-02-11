//==========================================================
// StepAnimeSpeed.js
//=========================================================

/*:
 * @plugindesc Plugin sample to set monsters left-side.
 * @author aueki
 *
 * @param shift
 * @desc Value to add x. 
 * @default -150
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
 * @default 0.5
 *
 * @help このプラグインには、プラグインコマンドはありません。
 * キャラクター歩行時のステップアニメの速度を変更します。
*/

(function(){
	var shift = 0.5;
	Game_CharacterBase.prototype.updatePattern = function() {
    if (!this.hasStepAnime() && this._stopCount > 0) {
        this.resetPattern();
    } else {
        this._pattern = (this._pattern + shift) % this.maxPattern();
    }
};
})();