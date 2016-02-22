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
 * @plugindesc �X�e�b�v�A�j���̑��x�̕ύX
 * @author miyoshi
 *
 * @param speed_shift
 * @desc �X�s�[�h�ύX
 * @default 0.5
 *
 * @help ���̃v���O�C���ɂ́A�v���O�C���R�}���h�͂���܂���B
 * �L�����N�^�[���s���̃X�e�b�v�A�j���̑��x��ύX���܂��B
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