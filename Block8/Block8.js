/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Block8 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("empty", "./Block8/costumes/empty.png", { x: 44, y: 38 }),
      new Costume("right", "./Block8/costumes/right.png", { x: 44, y: 38 }),
      new Costume("left", "./Block8/costumes/left.png", { x: 44, y: 38 }),
      new Costume("up", "./Block8/costumes/up.png", { x: 44, y: 38 }),
      new Costume("down", "./Block8/costumes/down.png", { x: 44, y: 38 }),
      new Costume("turnleft", "./Block8/costumes/turnleft.png", {
        x: 44,
        y: 38
      }),
      new Costume("turnright", "./Block8/costumes/turnright.png", {
        x: 44,
        y: 38
      }),
      new Costume("hop", "./Block8/costumes/hop.png", { x: 44, y: 38 }),
      new Costume("show", "./Block8/costumes/show.png", { x: 44, y: 38 }),
      new Costume("hide", "./Block8/costumes/hide.png", { x: 44, y: 38 })
    ];

    this.sounds = [new Sound("pop", "./Block8/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenthisspriteclicked() {
    this.broadcast("blockchange");
    this.costumeNumber += 1;
    if (this.costumeNumber == 1) {
      this.stage.vars.instructions.splice(8 - 1, 1, "");
    }
    if (this.costumeNumber == 2) {
      this.stage.vars.instructions.splice(8 - 1, 1, "right");
    }
    if (this.costumeNumber == 3) {
      this.stage.vars.instructions.splice(8 - 1, 1, "left");
    }
    if (this.costumeNumber == 4) {
      this.stage.vars.instructions.splice(8 - 1, 1, "up");
    }
    if (this.costumeNumber == 5) {
      this.stage.vars.instructions.splice(8 - 1, 1, "down");
    }
    if (this.costumeNumber == 6) {
      this.stage.vars.instructions.splice(8 - 1, 1, "turnleft");
    }
    if (this.costumeNumber == 7) {
      this.stage.vars.instructions.splice(8 - 1, 1, "turnright");
    }
    if (this.costumeNumber == 8) {
      this.stage.vars.instructions.splice(8 - 1, 1, "hop");
    }
    if (this.costumeNumber == 9) {
      this.stage.vars.instructions.splice(8 - 1, 1, "show");
    }
    if (this.costumeNumber == 10) {
      this.stage.vars.instructions.splice(8 - 1, 1, "hide");
    }
  }

  *whenGreenFlagClicked() {
    this.costume = "empty";
  }
}
