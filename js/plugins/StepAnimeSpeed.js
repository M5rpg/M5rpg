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
 * @plugindesc �X�e�b�v�A�j���̑��x�̕ύX
 * @author miyoshi
 *
 * @param shift
 * @desc �X�s�[�h�ύX
 * @default 2.5
 *
 * @help ���̃v���O�C���ɂ́A�v���O�C���R�}���h�͂���܂���B
 * �L�����N�^�[���s���̃X�e�b�v�A�j���̑��x��ύX���܂��B
*/

(function(){
	var shift = 2.5;
	Game_CharacterBase.prototype.animationWait = function() {
    return (9 - this.realMoveSpeed()) * shift;
  };
})();