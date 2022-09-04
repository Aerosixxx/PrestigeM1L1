/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Go extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("go", "./Go/costumes/go.svg", { x: 77, y: 76 }),
      new Costume("stop", "./Go/costumes/stop.svg", { x: 76, y: 67 })
    ];

    this.sounds = [new Sound("pop", "./Go/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.running == 0) {
      this.broadcast("go");
      this.costume = "stop";
      this.stage.vars.running = 1;
    } else {
      this.broadcast("stop");
      this.costume = "go";
      this.stage.vars.running = 0;
    }
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.stage.vars.running == 0) {
        this.costume = "go";
      }
      yield;
    }
  }
}
