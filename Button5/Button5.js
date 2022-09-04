/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Button5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button3-a", "./Button5/costumes/button3-a.svg", {
        x: 37.64671052631576,
        y: 178.73992675721553
      }),
      new Costume("button3-b", "./Button5/costumes/button3-b.svg", {
        x: 72,
        y: 72
      })
    ];

    this.sounds = [new Sound("pop", "./Button5/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.moveBehind();
  }
}
