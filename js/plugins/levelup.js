//=============================================================================
// levelup.js
// ----------------------------------------------------------------------------
// <���p�K��>
//  ���p��RPG�c�N�[��MV/RPGMakerMV�̐��K���[�U�[�Ɍ����܂��B
//  ���p�A�񏤗p�A�Q�[���̓��e���킸���p�\�ł��B
//  �Q�[���ւ̗��p�̍ہA�񍐂�o�T���̋L�ړ��͕K�{�ł͂���܂���B
//  �񎟔z�z��]�ڂ͋֎~���܂��B
//  �\�[�X�R�[�hURL�A�_�E�����[�hURL�ւ̒��ڃ����N���֎~���܂��B
//  �s��Ή��ȊO�̃T�|�[�g�⃊�N�G�X�g�͎󂯕t���Ă���܂���B
//  �X�N���v�g���p�ɂ�萶���������Ȃ���ɂ����Ă��A��ؐӔC�𕉂����˂܂��B
//=============================================================================

/*:
 * @plugindesc ���x���A�b�v��SE��炵�܂��B
 * @author Miyoshi
 *
 * @param SE_name
 * @desc �����摜�̃t�@�C�������w�肵�Ă��������B
 * @default levelup
  *
 * @param SE_pan
 * @desc SE�̃p�����w�肵�Ă��������B
 * @default levelup
 *
 * @param SE_pitch
 * @desc SE�̃s�b�`���w�肵�Ă��������B
 * @default levelup
 *
 * @param SSE_volume
 * @desc SE�̃{�����[�����w�肵�Ă��������B
 * @default levelup
 *
 * @help
 * ���̃v���O�C���̓v���O�C���R�}���h�͂���܂���
 */
(function () {
    var SE_name = "LevelUp";
    var SE_pan = 0;
    var SE_pitch = 100;
    var SE_volume = 100;

    SoundManager.playLevelUp = function() {
       var Se = {"name": SE_name,
		 "pan" : SE_pan,
		 "pitch": SE_pitch,
		 "volume": SE_volume
		 };
       AudioManager.playSe(Se);
    };

    Game_Actor.prototype.displayLevelUp = function(newSkills) {
    var text = TextManager.levelUp.format(this._name, TextManager.level, this._level);
    $gameMessage.newPage();
    $gameMessage.add(text);
    SoundManager.playLevelUp();
    AudioManager.stopMe();
    newSkills.forEach(function(skill) {
        $gameMessage.add(TextManager.obtainSkill.format(skill.name));
    });
};

})();