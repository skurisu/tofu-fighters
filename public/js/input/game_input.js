(function () {
  var BIND = {
    PLAYER : [
      // 0
      {
        JUMP : Phaser.KeyCode.W,
        DIVE : Phaser.KeyCode.S,
        LEFT : Phaser.KeyCode.A,
        RIGHT : Phaser.KeyCode.D
      },
      // 1
      {
        JUMP : Phaser.KeyCode.UP,
        DIVE : Phaser.KeyCode.DOWN,
        LEFT : Phaser.KeyCode.LEFT,
        RIGHT : Phaser.KeyCode.RIGHT
      }
    ],
    STATE : {
      CONTINUE : Phaser.KeyCode.ENTER,
      B : Phaser.KeyCode.B,
      M : Phaser.KeyCode.M,
      O : Phaser.KeyCode.O
    }
  };

  ToeFu.GameInput = function (state) {
    this.state = state;
    
    this.player_1_keys = this.state.game.input.keyboard.addKeys(BIND.PLAYER[0]);
    this.player_2_keys = this.state.game.input.keyboard.addKeys(BIND.PLAYER[1]);
    this.state_keys = this.state.game.input.keyboard.addKeys(BIND.STATE);

    // key up and down listeners
    this.player_1_keys.JUMP.onDown.add( this.state.player_1.jump.bind(this.state.player_1) );
    this.player_1_keys.DIVE.onDown.add( this.state.player_1.dive.bind(this.state.player_1) );
    this.player_1_keys.DIVE.onUp.add( this.state.player_1.dive_stop.bind(this.state.player_1) );
    this.player_1_keys.LEFT.onDown.add( this.state.player_1.step_left.bind(this.state.player_1) );
    this.player_1_keys.LEFT.onUp.add( this.state.player_1.stop.bind(this.state.player_1) );
    this.player_1_keys.RIGHT.onDown.add( this.state.player_1.step_right.bind(this.state.player_1) );
    this.player_1_keys.RIGHT.onUp.add( this.state.player_1.stop.bind(this.state.player_1) );

    this.player_2_keys.JUMP.onDown.add( this.state.player_2.jump.bind(this.state.player_2) );
    this.player_2_keys.DIVE.onDown.add( this.state.player_2.dive.bind(this.state.player_2) );
    this.player_2_keys.DIVE.onUp.add( this.state.player_2.dive_stop.bind(this.state.player_2) );
    this.player_2_keys.LEFT.onDown.add( this.state.player_2.step_left.bind(this.state.player_2) );
    this.player_2_keys.LEFT.onUp.add( this.state.player_2.stop.bind(this.state.player_2) );
    this.player_2_keys.RIGHT.onDown.add( this.state.player_2.step_right.bind(this.state.player_2) );
    this.player_2_keys.RIGHT.onUp.add( this.state.player_2.stop.bind(this.state.player_2) );

    this.state_keys.CONTINUE.onUp.add( this.state.continue.bind(this.state) );

  };

})();