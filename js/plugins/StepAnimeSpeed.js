//==========================================================
// StepAnimeSpeed.js
//=========================================================

/*:
 * @plugindesc Plugin to change speed of steping animation.
 * @author miyoshi
 *
 * @param speed_shift
 * @desc Value to add shift. 
 * @default 0.5
 *
 *
 * @help This plugin does not provide plugin commands.
 *
 */

/*:ja
 * @plugindesc ステップアニメの速度の変更
 * @author miyoshi
 *
 * @param speed_shift
 * @desc スピード変更
 * @default 0.5
 *
 * @help このプラグインには、プラグインコマンドはありません。
 * キャラクター歩行時のステップアニメの速度を変更します。
*/

(function(){
    var speed_shift = 0.5;

    Game_CharacterBase.prototype.updateAnimationCount = function() {
    if (this.isMoving() && this.hasWalkAnime()) {
        this._animationCount += 1.5 - speed_shift;
    } else if (this.hasStepAnime() || !this.isOriginalPattern()) {
        this._animationCount += 1.0 - speed_shift;
    }
};

})();