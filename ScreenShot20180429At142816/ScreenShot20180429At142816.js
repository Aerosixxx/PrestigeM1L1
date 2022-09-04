/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ScreenShot20180429At142816 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Screen Shot 2018-04-29 at 14.28.16",
        "./ScreenShot20180429At142816/costumes/Screen Shot 2018-04-29 at 14.28.16.png",
        { x: 46, y: 48 }
      )
    ];

    this.sounds = [
      new Sound("pop", "./ScreenShot20180429At142816/sounds/pop.wav")
    ];

    this.triggers = [new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)];
  }

  *whenthisspriteclicked() {
    this.stage.costume = "next backdrop";
    if (this.stage.costume.name == "underwater2") {
      this.stage.vars.homex = -200;
      this.stage.vars.homey = 97;
    } else {
      if (this.stage.costume.name == "boardwalk") {
        this.broadcast("sunset");
        this.stage.vars.homex = 188;
        this.stage.vars.homey = 160;
      } else {
        this.stage.vars.homex = -196;
        this.stage.vars.homey = -56;
      }
    }
    if (this.stage.costume.name == "yellow") {
      this.broadcast("not-sunset");
    }
    this.broadcast("home");
  }
}
