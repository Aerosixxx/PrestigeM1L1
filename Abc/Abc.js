/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Abc extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("abc", "./Abc/costumes/abc.png", { x: 44, y: 46 })
    ];

    this.sounds = [new Sound("pop", "./Abc/sounds/pop.wav")];

    this.triggers = [new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)];
  }

  *whenthisspriteclicked() {
    yield* this.askAndWait("Type your name");
    this.stage.vars.name = this.answer;
    this.stage.watchers.name.visible = true;
  }
}
