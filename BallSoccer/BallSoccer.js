/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class BallSoccer extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ball-soccer", "./BallSoccer/costumes/ball-soccer.svg", {
        x: 32,
        y: 34
      })
    ];

    this.sounds = [new Sound("pop", "./BallSoccer/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "home" }, this.whenIReceiveHome)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(81, -65);
    while (true) {
      if (this.stage.costume.name == "goal1") {
        this.visible = true;
      } else {
        this.visible = false;
      }
      if (this.touching(this.sprites[undefined].andClones())) {
        yield* this.glide(1, 230, -65);
      }
      yield;
    }
  }

  *whenIReceiveHome() {
    this.goto(81, -65);
  }
}
