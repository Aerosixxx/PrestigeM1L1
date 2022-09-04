/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Spaceship extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("spaceship-a", "./Spaceship/costumes/spaceship-a.svg", {
        x: 59,
        y: 84
      }),
      new Costume("spaceship-b", "./Spaceship/costumes/spaceship-b.svg", {
        x: 62,
        y: 83
      })
    ];

    this.sounds = [new Sound("pop", "./Spaceship/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "home" }, this.whenIReceiveHome)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(196, 88);
    this.visible = false;
    while (true) {
      if (this.stage.costume.name == "moon") {
        this.visible = true;
      } else {
        this.visible = false;
      }
      if (this.touching(this.sprites[undefined].andClones())) {
        yield* this.glide(1, 196, 300);
      }
      yield;
    }
  }

  *whenIReceiveHome() {
    yield* this.wait(1);
    this.goto(196, 88);
  }
}
