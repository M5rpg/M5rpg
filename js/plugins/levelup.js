//=============================================================================
// levelup.js
// ----------------------------------------------------------------------------
// <利用規約>
//  利用はRPGツクールMV/RPGMakerMVの正規ユーザーに限られます。
//  商用、非商用、ゲームの内容を問わず利用可能です。
//  ゲームへの利用の際、報告や出典元の記載等は必須ではありません。
//  二次配布や転載は禁止します。
//  ソースコードURL、ダウンロードURLへの直接リンクも禁止します。
//  不具合対応以外のサポートやリクエストは受け付けておりません。
//  スクリプト利用により生じたいかなる問題においても、一切責任を負いかねます。
//=============================================================================

/*:
 * @plugindesc レベルアップのSEを鳴らします。
 * @author Miyoshi
 *
 * @param SE_name
 * @desc 棺桶画像のファイル名を指定してください。
 * @default levelup
  *
 * @param SE_pan
 * @desc SEのパンを指定してください。
 * @default levelup
 *
 * @param SE_pitch
 * @desc SEのピッチを指定してください。
 * @default levelup
 *
 * @param SSE_volume
 * @desc SEのボリュームを指定してください。
 * @default levelup
 *
 * @help
 * このプラグインはプラグインコマンドはありません
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