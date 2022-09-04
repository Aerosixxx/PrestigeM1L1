/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class End extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("end", "./End/costumes/end.png", { x: 42, y: 38 }),
      new Costume("forever", "./End/costumes/forever.png", { x: 42, y: 38 })
    ];

    this.sounds = [new Sound("pop", "./End/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenthisspriteclicked() {
    this.costumeNumber += 1;
    if (this.stage.vars.forever == 0) {
      this.stage.vars.forever = 1;
    } else {
      this.stage.vars.forever = 0;
    }
  }

  *whenGreenFlagClicked() {
    this.stage.vars.forever = 0;
    this.costume = "end";
  }
}
