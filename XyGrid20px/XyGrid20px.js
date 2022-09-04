/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class XyGrid20px extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("grid20trans", "./XyGrid20px/costumes/grid20trans.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [new Sound("pop", "./XyGrid20px/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "grid" }, this.whenIReceiveGrid)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.stage.vars.gridOn = 0;
  }

  *whenIReceiveGrid() {
    if (this.stage.vars.gridOn == 0) {
      this.stage.vars.gridOn = 1;
      this.visible = true;
    } else {
      this.stage.vars.gridOn = 0;
      this.visible = false;
    }
  }
}
