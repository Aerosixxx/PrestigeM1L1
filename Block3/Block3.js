/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Block3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("empty", "./Block3/costumes/empty.png", { x: 44, y: 38 }),
      new Costume("right", "./Block3/costumes/right.png", { x: 44, y: 38 }),
      new Costume("left", "./Block3/costumes/left.png", { x: 44, y: 38 }),
      new Costume("up", "./Block3/costumes/up.png", { x: 44, y: 38 }),
      new Costume("down", "./Block3/costumes/down.png", { x: 44, y: 38 }),
      new Costume("turnleft", "./Block3/costumes/turnleft.png", {
        x: 44,
        y: 38
      }),
      new Costume("turnright", "./Block3/costumes/turnright.png", {
        x: 44,
        y: 38
      }),
      new Costume("hop", "./Block3/costumes/hop.png", { x: 44, y: 38 }),
      new Costume("show", "./Block3/costumes/show.png", { x: 44, y: 38 }),
      new Costume("hide", "./Block3/costumes/hide.png", { x: 44, y: 38 })
    ];

    this.sounds = [new Sound("pop", "./Block3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenthisspriteclicked() {
    this.broadcast("blockchange");
    this.costumeNumber += 1;
    if (this.costumeNumber == 1) {
      this.stage.vars.instructions.splice(3 - 1, 1, "");
    }
    if (this.costumeNumber == 2) {
      this.stage.vars.instructions.splice(3 - 1, 1, "right");
    }
    if (this.costumeNumber == 3) {
      this.stage.vars.instructions.splice(3 - 1, 1, "left");
    }
    if (this.costumeNumber == 4) {
      this.stage.vars.instructions.splice(3 - 1, 1, "up");
    }
    if (this.costumeNumber == 5) {
      this.stage.vars.instructions.splice(3 - 1, 1, "down");
    }
    if (this.costumeNumber == 6) {
      this.stage.vars.instructions.splice(3 - 1, 1, "turnleft");
    }
    if (this.costumeNumber == 7) {
      this.stage.vars.instructions.splice(3 - 1, 1, "turnright");
    }
    if (this.costumeNumber == 8) {
      this.stage.vars.instructions.splice(3 - 1, 1, "hop");
    }
    if (this.costumeNumber == 9) {
      this.stage.vars.instructions.splice(3 - 1, 1, "show");
    }
    if (this.costumeNumber == 10) {
      this.stage.vars.instructions.splice(3 - 1, 1, "hide");
    }
  }

  *whenGreenFlagClicked() {
    this.costume = "empty";
  }
}
