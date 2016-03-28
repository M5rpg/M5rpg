//=============================================================================
// TitleCommandPosition.js
//=============================================================================

/*:
 * @plugindesc Changes the position of the title command window.
 * @author Yoji Ojima
 *
 * @param Offset X
 * @desc The offset value for the x coordinate.
 * @default 0
 *
 * @param Offset Y
 * @desc The offset value for the y coordinate.
 * @default 0
 *
 * @param Width
 * @desc The width of the command window.
 * @default 240
 *
 * @param Background
 * @desc The background type. 0: Normal, 1: Dim, 2: Transparent
 * @default 0
 *
 * @help This plugin does not provide plugin commands.
 */

/*:ja
 * @plugindesc �^�C�g���R�}���h�E�B���h�E�̈ʒu��ύX���܂��B
 * @author Yoji Ojima
 *
 * @param Offset X
 * @desc X���W�̃I�t�Z�b�g�l�ł��B
 * @default 0
 *
 * @param Offset Y
 * @desc Y���W�̃I�t�Z�b�g�l�ł��B
 * @default 0
 *
 * @param Width
 * @desc �R�}���h�E�B���h�E�̕��ł��B
 * @default 240
 *
 * @param Background
 * @desc �w�i�^�C�v�ł��B0: �ʏ�A1: �Â�����A2: ����
 * @default 0
 *
 * @help ���̃v���O�C���ɂ́A�v���O�C���R�}���h�͂���܂���B
 */

(function() {

    var parameters = PluginManager.parameters('TitleCommandPosition');
    var offsetX = Number(parameters['Offset X'] || 0);
    var offsetY = Number(parameters['Offset Y'] || 0);
    var width = Number(parameters['Width'] || 240);
    var background = Number(parameters['Background'] || 0);

    var _Window_TitleCommand_updatePlacement =
            Window_TitleCommand.prototype.updatePlacement;
    Window_TitleCommand.prototype.updatePlacement = function() {
        _Window_TitleCommand_updatePlacement.call(this);
        this.x += offsetX;
        this.y += offsetY;
        this.setBackgroundType(background);
    };

    Window_TitleCommand.prototype.windowWidth = function() {
        return width;
    };

})();