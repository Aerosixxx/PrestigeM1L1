/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Repeat10 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./Repeat10/costumes/1.svg", { x: 33, y: 41 }),
      new Costume("2", "./Repeat10/costumes/2.svg", { x: 33, y: 41 }),
      new Costume("3", "./Repeat10/costumes/3.svg", { x: 33, y: 41 }),
      new Costume("4", "./Repeat10/costumes/4.svg", { x: 33, y: 41 }),
      new Costume("5", "./Repeat10/costumes/5.svg", { x: 33, y: 41 }),
      new Costume("6", "./Repeat10/costumes/6.svg", { x: 33, y: 41 }),
      new Costume("7", "./Repeat10/costumes/7.svg", { x: 33, y: 41 }),
      new Costume("8", "./Repeat10/costumes/8.svg", { x: 33, y: 41 }),
      new Costume("9", "./Repeat10/costumes/9.svg", { x: 33, y: 41 })
    ];

    this.sounds = [new Sound("pop", "./Repeat10/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "blockchange" },
        this.whenIReceiveBlockchange
      )
    ];

    this.vars.plus10 = 174;
  }

  *whenGreenFlagClicked() {
    this.costume = 1;
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.costumeNumber += 1;
    this.stage.vars.repeat.splice(10 - 1, 1, this.costumeNumber);
  }

  *whenIReceiveBlockchange() {
    if (
      this.stage.vars.instructions[10 - 1] == "hide" ||
      this.stage.vars.instructions[10 - 1] == "show" ||
      this.stage.vars.instructions[10 - 1] == ""
    ) {
      this.visible = false;
    } else {
      this.visible = true;
    }
  }
}
