/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Block2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("empty", "./Block2/costumes/empty.png", { x: 44, y: 38 }),
      new Costume("right", "./Block2/costumes/right.png", { x: 44, y: 38 }),
      new Costume("left", "./Block2/costumes/left.png", { x: 44, y: 38 })
    ];

    this.sounds = [new Sound("pop", "./Block2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenthisspriteclicked() {
    this.broadcast("blockchange");
    this.costumeNumber += 1;
    if (this.costumeNumber == 1) {
      this.stage.vars.instructions.splice(2 - 1, 1, "");
    }
    if (this.costumeNumber == 2) {
      this.stage.vars.instructions.splice(2 - 1, 1, "right");
    }
    if (this.costumeNumber == 3) {
      this.stage.vars.instructions.splice(2 - 1, 1, "left");
    }
  }

  *whenGreenFlagClicked() {
    this.costume = "empty";
  }
}
