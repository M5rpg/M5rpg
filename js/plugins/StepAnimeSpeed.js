//==========================================================
// StepAnimeSpeed.js
//=========================================================

/*:
 * @plugindesc Plugin to set charactors steping animation.
 * @author miyoshi
 *
 * @param shift
 * @desc Value to add shift. 
 * @default 0.8
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
 * @default 0.8
 *
 * @help このプラグインには、プラグインコマンドはありません。
 * キャラクター歩行時のステップアニメの速度を変更します。
*/

(function(){
    var shift = 0.8;

    Game_CharacterBase.prototype.updateAnimationCount = function() {
    if (this.isMoving() && this.hasWalkAnime()) {
        this._animationCount += 1.5 - shift;
    } else if (this.hasStepAnime() || !this.isOriginalPattern()) {
        this._animationCount += 1.0 - shift;
    }
};

})();