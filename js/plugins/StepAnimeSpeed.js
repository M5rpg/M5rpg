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
 * @default 100
 *
 * @help ���̃v���O�C���ɂ́A�v���O�C���R�}���h�͂���܂���B
 * �L�����N�^�[���s���̃X�e�b�v�A�j���̑��x��ύX���܂��B
*/

(function(){
	var shift = 100;
	Game_CharacterBase.prototype.animationWait = function() {
    return (9 - this.realMoveSpeed()) * shift;
  };
})();