/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Block1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("empty", "./Block1/costumes/empty.png", { x: 44, y: 38 }),
      new Costume("right", "./Block1/costumes/right.png", { x: 44, y: 38 })
    ];

    this.sounds = [new Sound("pop", "./Block1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenthisspriteclicked() {
    this.broadcast("blockchange");
    this.costumeNumber += 1;
    if (this.costumeNumber == 1) {
      this.stage.vars.instructions.splice(1 - 1, 1, "");
    }
    if (this.costumeNumber == 2) {
      this.stage.vars.instructions.splice(1 - 1, 1, "right");
    }
  }

  *whenGreenFlagClicked() {
    this.costume = "empty";
  }
}
