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
 * @plugindesc �X�e�b�v�A�j���̑��x�̕ύX
 * @author miyoshi
 *
 * @param shift
 * @desc �X�s�[�h�ύX
 * @default 0.5
 *
 * @help ���̃v���O�C���ɂ́A�v���O�C���R�}���h�͂���܂���B
 * �L�����N�^�[���s���̃X�e�b�v�A�j���̑��x��ύX���܂��B
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