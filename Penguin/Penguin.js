/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Penguin extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("penguin3-a", "./Penguin/costumes/penguin3-a.svg", {
        x: 59,
        y: 98
      })
    ];

    this.sounds = [new Sound("pop", "./Penguin/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "home" }, this.whenIReceiveHome),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveHome() {
    yield* this.wait(1);
    this.goto(122, 35);
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(122, 35);
    while (true) {
      if (this.stage.costume.name == "slopes") {
        this.visible = true;
      } else {
        this.visible = false;
      }
      if (this.touching(this.sprites[undefined].andClones())) {
        yield* this.sayAndWait("Let's ski!", 2);
        yield* this.glide(1, 45, -85);
        yield* this.glide(1, -67, -91);
        yield* this.glide(1, -214, 134);
      }
      yield;
    }
  }
}
