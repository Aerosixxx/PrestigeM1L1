/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Onflag extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("onflag", "./Onflag/costumes/onflag.png", { x: 50, y: 38 })
    ];

    this.sounds = [new Sound("pop", "./Onflag/sounds/pop.wav")];

    this.triggers = [];
  }
}
