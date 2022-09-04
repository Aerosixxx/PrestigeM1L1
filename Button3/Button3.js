/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Button3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button3-a", "./Button3/costumes/button3-a.svg", {
        x: 239.27032833616298,
        y: 174.33665256366714
      }),
      new Costume("button3-b", "./Button3/costumes/button3-b.svg", {
        x: 72,
        y: 72
      })
    ];

    this.sounds = [new Sound("pop", "./Button3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.moveBehind();
  }
}
