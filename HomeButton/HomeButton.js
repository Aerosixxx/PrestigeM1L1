/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class HomeButton extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("reset", "./HomeButton/costumes/reset.png", { x: 48, y: 46 }),
      new Costume("home button", "./HomeButton/costumes/home button.svg", {
        x: 72,
        y: 72
      })
    ];

    this.sounds = [new Sound("pop", "./HomeButton/sounds/pop.wav")];

    this.triggers = [new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)];
  }

  *whenthisspriteclicked() {
    this.broadcast("home");
  }
}
