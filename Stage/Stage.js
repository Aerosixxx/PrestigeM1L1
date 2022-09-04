/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("yellow", "./Stage/costumes/yellow.svg", {
        x: 239.8917,
        y: 180
      }),
      new Costume("blue sky", "./Stage/costumes/blue sky.svg", {
        x: 240,
        y: 180
      }),
      new Costume(
        "night city with street",
        "./Stage/costumes/night city with street.png",
        { x: 480, y: 360 }
      ),
      new Costume("urban2", "./Stage/costumes/urban2.png", { x: 480, y: 360 }),
      new Costume("castle3", "./Stage/costumes/castle3.png", {
        x: 480,
        y: 360
      }),
      new Costume("goal1", "./Stage/costumes/goal1.png", { x: 480, y: 360 }),
      new Costume("neon tunnel", "./Stage/costumes/neon tunnel.svg", {
        x: 240,
        y: 180
      }),
      new Costume("space", "./Stage/costumes/space.svg", { x: 240, y: 180 }),
      new Costume("moon", "./Stage/costumes/moon.png", { x: 480, y: 360 }),
      new Costume("stars", "./Stage/costumes/stars.png", { x: 480, y: 360 }),
      new Costume("underwater2", "./Stage/costumes/underwater2.png", {
        x: 480,
        y: 360
      }),
      new Costume("slopes", "./Stage/costumes/slopes.svg", { x: 240, y: 180 }),
      new Costume("gingerbread", "./Stage/costumes/gingerbread.png", {
        x: 480,
        y: 360
      }),
      new Costume("winter-lights", "./Stage/costumes/winter-lights.svg", {
        x: 240,
        y: 180
      }),
      new Costume("xy-grid-20px", "./Stage/costumes/xy-grid-20px.svg", {
        x: 240,
        y: 180
      }),
      new Costume("boardwalk", "./Stage/costumes/boardwalk.png", {
        x: 480,
        y: 360
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.KEY_PRESSED, { key: "2" }, this.whenKey2Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "3" }, this.whenKey3Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "4" }, this.whenKey4Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "5" }, this.whenKey5Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "6" }, this.whenKey6Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "1" }, this.whenKey1Pressed)
    ];

    this.vars.distance = 30;
    this.vars.step = 10;
    this.vars.name = "fred";
    this.vars.date = "4 / 9 / 2022";
    this.vars.size = 20;
    this.vars.forever = 0;
    this.vars.ishow = 0;
    this.vars.running = 0;
    this.vars.dateshow = 1;
    this.vars.gridOn = 0;
    this.vars.homex = -196;
    this.vars.homey = -56;
    this.vars.oldcostume = 1;
    this.vars.instructions = ["right", 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.vars.repeat = [5, 1, 1, 1, 1, 1, 1, 1, 1, 1];

    this.watchers.name = new Watcher({
      label: "name",
      style: "large",
      visible: false,
      value: () => this.vars.name,
      x: 242,
      y: 177
    });
    this.watchers.date = new Watcher({
      label: "date",
      style: "normal",
      visible: true,
      value: () => this.vars.date,
      x: 240,
      y: 145
    });
  }

  *whenKey2Pressed() {
    this.costume = "urban2";
  }

  *whenKey3Pressed() {
    this.costume = "space";
  }

  *whenKey4Pressed() {
    this.costume = "stars";
  }

  *whenKey5Pressed() {
    this.costume = "castle3";
  }

  *whenKey6Pressed() {
    this.costume = "moon";
  }

  *whenKey1Pressed() {
    this.costume = "night city with street";
  }
}
