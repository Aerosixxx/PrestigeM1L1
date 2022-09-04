/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Crab extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("crab-a", "./Crab/costumes/crab-a.svg", { x: 75, y: 75 })
    ];

    this.sounds = [new Sound("pop", "./Crab/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "home" }, this.whenIReceiveHome),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveHome() {
    yield* this.wait(1);
    this.goto(200, -17);
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(200, -17);
    while (true) {
      if (this.stage.costume.name == "underwater2") {
        this.visible = true;
      } else {
        this.visible = false;
      }
      if (this.touching(this.sprites[undefined].andClones())) {
        yield* this.sayAndWait("Hello!", 2);
        for (let i = 0; i < 30; i++) {
          this.direction += 15;
          yield;
        }
        this.direction = 90;
        yield* this.glide(1, -240, 180);
      }
      yield;
    }
  }
}
