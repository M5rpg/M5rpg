//=============================================================================
// Torigoya_InputNamePrompt.js
//=============================================================================

/*:
 * @plugindesc Input name with prompt
 * @author ru_shalm
 *
 * @param Max Length
 * @desc name of max length (default: 10)
 * @default 10
 *
 * @param Message
 * @desc input prompt message
 * @default Please, input name.
 *
 * @param Maximum Message
 * @desc maximum number of characters message (default: (%1 characters or less) )
 * %1 - max length value
 * @default (%1 characters or less)
 *
 * @help
 *
 * Plugin Command:
 *   InputNamePrompt 1      # display input name prompt of Actor ID: 1
 *   InputNamePrompt 1 100  # display input name prompt of Actor ID: 1 (max length: 100)
 *   InputNamePrompt 1 100 Please, input your name.  # display input name prompt with custom message
 */

/*:ja
 * @plugindesc ���O���̓_�C�A���O�@�\��ǉ����܂�
 * @author ru_shalm
 *
 * @param Max Length
 * @desc ���O�̍ő�̒��� (default: 10)
 * @default 10
 *
 * @param Message
 * @desc ���͎��ɕ\�����郁�b�Z�[�W (default: ���O����͂��Ă�������)
 * @default ���O����͂��Ă�������
 *
 * @param Maximum Message
 * @desc �ő啶�����̕\�� (default: (%1 �����ȓ�) )
 * %1 - ����������l
 * @default (%1 �����ȓ��œ���)
 *
 * @help
 *
 * �v���O�C���R�}���h:
 *   InputNamePrompt 1      # �A�N�^�[1�Ԃ̖��O���̓_�C�A���O��\������
 *   InputNamePrompt 1 100  # �A�N�^�[1�Ԃ̖��O���̓_�C�A���O��\������ (�ő� 100 ����)
 *   InputNamePrompt 1 100 ���O����͂���̂���  # ���b�Z�[�W�̕ύX
 */

(function (global) {
    'use strict';

    var PLUGIN_NAME = 'Torigoya_InputNamePrompt';
    var settings = (function () {
        var parameters = PluginManager.parameters(PLUGIN_NAME);
        return {
            maxLength: Number(parameters['Max Length'] || 10),
            message: String(parameters['Message']),
            maximumMessage: String(parameters['Maximum Message']),
            getMessage: function () {
                return this.message || ($gameSystem && $gameSystem.isJapanese() ? '���O����͂��Ă�������' : 'Please, input name.');
            },
            getMaximumMessage: function () {
                return this.maximumMessage || ($gameSystem && $gameSystem.isJapanese() ? '(%1 �����ȓ��œ���)' : '(%1 characters or less)');
            }
        };
    })();

    var runCommand = function (args) {
        var actor = $gameActors.actor(~~args.shift());
        var max = Math.max(~~args.shift(), settings.maxLength);
        var message = args.join(' ') || settings.getMessage();
        message += '\n' + settings.getMaximumMessage().replace(/%1/g, '' + max);
        var name = window.prompt(message, actor.name());
        if (name) {
            name = name.trim();
            if (name.length > 0) {
                actor.setName(name.substr(0, max));
            }
        }
    };

    var upstream_Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        if (command === 'InputNamePrompt') {
            return runCommand(args);
        }
        upstream_Game_Interpreter_pluginCommand.apply(this, arguments);
    };

    global.Torigoya = (global.Torigoya || {});
    global.Torigoya.InputNamePrompt = {
        name: PLUGIN_NAME,
        settings: settings,
        command: runCommand
    };
})(this);