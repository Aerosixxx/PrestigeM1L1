/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Button4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button3-a", "./Button4/costumes/button3-a.svg", {
        x: 233.43237651134544,
        y: 122.37888132279124
      }),
      new Costume("button3-b", "./Button4/costumes/button3-b.svg", {
        x: 72,
        y: 72
      })
    ];

    this.sounds = [new Sound("pop", "./Button4/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.moveBehind();
  }
}
