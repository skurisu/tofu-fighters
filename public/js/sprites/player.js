// sprite class contructor

ToeFu.Player = function(game, id, name) {
  this.game = game;
  this.id = id;
  this.name = name? name : 'Player '+(id+1);

  //super constructor call
  Phaser.Sprite.call(this, game, 0, 0, ToeFu.ASSETS.SPRITESHEET.PLAYER.name);
};

ToeFu.Player.prototype = Object.create(Phaser.Sprite.prototype, {
  constructor : {
    value : ToeFu.Player
  }

});