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
 * @plugindesc �X�e�b�v�A�j���̑��x�̕ύX
 * @author miyoshi
 *
 * @param shift
 * @desc �X�s�[�h�ύX
 * @default 0.8
 *
 * @help ���̃v���O�C���ɂ́A�v���O�C���R�}���h�͂���܂���B
 * �L�����N�^�[���s���̃X�e�b�v�A�j���̑��x��ύX���܂��B
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