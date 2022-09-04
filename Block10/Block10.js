/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Block10 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("empty", "./Block10/costumes/empty.png", { x: 44, y: 38 }),
      new Costume("right", "./Block10/costumes/right.png", { x: 44, y: 38 }),
      new Costume("left", "./Block10/costumes/left.png", { x: 44, y: 38 }),
      new Costume("up", "./Block10/costumes/up.png", { x: 44, y: 38 }),
      new Costume("down", "./Block10/costumes/down.png", { x: 44, y: 38 }),
      new Costume("turnleft", "./Block10/costumes/turnleft.png", {
        x: 44,
        y: 38
      }),
      new Costume("turnright", "./Block10/costumes/turnright.png", {
        x: 44,
        y: 38
      }),
      new Costume("hop", "./Block10/costumes/hop.png", { x: 44, y: 38 }),
      new Costume("show", "./Block10/costumes/show.png", { x: 44, y: 38 }),
      new Costume("hide", "./Block10/costumes/hide.png", { x: 44, y: 38 })
    ];

    this.sounds = [new Sound("pop", "./Block10/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenthisspriteclicked() {
    this.broadcast("blockchange");
    this.costumeNumber += 1;
    if (this.costumeNumber == 1) {
      this.stage.vars.instructions.splice(10 - 1, 1, "");
    }
    if (this.costumeNumber == 2) {
      this.stage.vars.instructions.splice(10 - 1, 1, "right");
    }
    if (this.costumeNumber == 3) {
      this.stage.vars.instructions.splice(10 - 1, 1, "left");
    }
    if (this.costumeNumber == 4) {
      this.stage.vars.instructions.splice(10 - 1, 1, "up");
    }
    if (this.costumeNumber == 5) {
      this.stage.vars.instructions.splice(10 - 1, 1, "down");
    }
    if (this.costumeNumber == 6) {
      this.stage.vars.instructions.splice(10 - 1, 1, "turnleft");
    }
    if (this.costumeNumber == 7) {
      this.stage.vars.instructions.splice(10 - 1, 1, "turnright");
    }
    if (this.costumeNumber == 8) {
      this.stage.vars.instructions.splice(10 - 1, 1, "hop");
    }
    if (this.costumeNumber == 9) {
      this.stage.vars.instructions.splice(10 - 1, 1, "show");
    }
    if (this.costumeNumber == 10) {
      this.stage.vars.instructions.splice(10 - 1, 1, "hide");
    }
  }

  *whenGreenFlagClicked() {
    this.costume = "empty";
  }
}
