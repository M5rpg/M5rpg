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

    Game_Actor.prototype.levelUp = function() {
    this._level++;
    SoundManager.playLevelUp();
    this.currentClass().learnings.forEach(function(learning) {
        if (learning.level === this._level) {
            this.learnSkill(learning.skillId);
        }
    }, this);
};

})();