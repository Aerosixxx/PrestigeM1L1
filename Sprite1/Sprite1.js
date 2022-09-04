/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("unnamed", "./Sprite1/costumes/unnamed.png", {
        x: 155,
        y: 226
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "go" }, this.whenIReceiveGo),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "home" }, this.whenIReceiveHome),
      new Trigger(Trigger.KEY_PRESSED, { key: "n" }, this.whenKeyNPressed),
      new Trigger(
        Trigger.BROADCAST,
        { name: "not-sunset" },
        this.whenIReceiveNotSunset
      ),
      new Trigger(Trigger.BROADCAST, { name: "stop" }, this.whenIReceiveStop),
      new Trigger(
        Trigger.BROADCAST,
        { name: "sunset" },
        this.whenIReceiveSunset
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "i" }, this.whenKeyIPressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "d" }, this.whenKeyDPressed),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];

    this.vars.repeatx = 10;
  }

  *whenIReceiveGo() {
    this.stage.vars.step = 0;
    yield* this.glide(1, this.stage.vars.homex, this.stage.vars.homey);
    this.direction = 90;
    this.visible = true;
    if (this.stage.vars.forever == 1) {
      this.vars.repeatx = 999;
    } else {
      this.vars.repeatx = 10;
    }
    for (let i = 0; i < this.vars.repeatx; i++) {
      if (this.x > 240) {
        this.x = -240;
      }
      if (this.x < -240) {
        this.x = 240;
      }
      if (this.y > 180) {
        this.y = -180;
      }
      this.stage.vars.step += 1;
      if (this.stage.vars.step > 10) {
        this.stage.vars.step = 1;
      }
      if (!(this.stage.vars.instructions[this.stage.vars.step - 1] == "")) {
        if (
          this.stage.vars.instructions[this.stage.vars.step - 1] == "turnright"
        ) {
          this.direction +=
            30 * this.stage.vars.repeat[this.stage.vars.step - 1];
        }
        if (
          this.stage.vars.instructions[this.stage.vars.step - 1] == "turnleft"
        ) {
          this.direction -= 10;
        }
        if (this.stage.vars.instructions[this.stage.vars.step - 1] == "right") {
          for (
            let i = 0;
            i < this.stage.vars.repeat[this.stage.vars.step - 1];
            i++
          ) {
            yield* this.wait(0.1);
            this.goto(this.x + this.stage.vars.size, this.y);
            yield;
          }
        }
        if (this.stage.vars.instructions[this.stage.vars.step - 1] == "left") {
          for (
            let i = 0;
            i < this.stage.vars.repeat[this.stage.vars.step - 1];
            i++
          ) {
            yield* this.wait(0.1);
            this.goto(this.x - this.stage.vars.size, this.y);
            yield;
          }
        }
        if (this.stage.vars.instructions[this.stage.vars.step - 1] == "up") {
          for (
            let i = 0;
            i < this.stage.vars.repeat[this.stage.vars.step - 1];
            i++
          ) {
            yield* this.wait(0.1);
            this.goto(this.x, this.y + this.stage.vars.size);
            yield;
          }
        }
        if (this.stage.vars.instructions[this.stage.vars.step - 1] == "down") {
          for (
            let i = 0;
            i < this.stage.vars.repeat[this.stage.vars.step - 1];
            i++
          ) {
            yield* this.wait(0.1);
            this.goto(this.x, this.y - this.stage.vars.size);
            yield;
          }
        }
        if (this.stage.vars.instructions[this.stage.vars.step - 1] == "hop") {
          yield* this.glide(
            0.5,
            this.x,
            this.y +
              this.stage.vars.size *
                this.stage.vars.repeat[this.stage.vars.step - 1]
          );
          yield* this.glide(
            0.5,
            this.x,
            this.y -
              this.stage.vars.size *
                this.stage.vars.repeat[this.stage.vars.step - 1]
          );
        }
        if (this.stage.vars.instructions[this.stage.vars.step - 1] == "hide") {
          this.visible = false;
        }
        if (this.stage.vars.instructions[this.stage.vars.step - 1] == "show") {
          this.visible = true;
        }
      }
      /* TODO: Implement motion_ifonedgebounce */ null;
      yield;
    }
    this.stage.vars.running = 0;
  }

  *whenGreenFlagClicked() {
    if (this.stage.costume.name == "underwater2") {
      this.stage.vars.homex = -200;
      this.stage.vars.homey = 97;
    } else {
      this.stage.vars.homex = -196;
      this.stage.vars.homey = -56;
    }
    this.stage.vars.dateshow = 1;
    this.stage.vars.running = 0;
    this.stage.vars.ishow = 0;
    this.stage.watchers.instructions.visible = false;
    this.penDown = false;
    this.stage.vars.date =
      "" +
      ("" +
        ("" +
          ("" + new Date().getDate() + " / ") +
          (new Date().getMonth() + 1)) +
        " / ") +
      new Date().getFullYear();
    this.stage.watchers.date.visible = true;
    this.stage.watchers.name.visible = false;
    this.costume = "cat1-a";
    this.stage.vars.size = 20;
    this.goto(this.stage.vars.homex, this.stage.vars.homey);
    this.direction = 90;
    this.stage.vars.instructions = [];
    this.stage.vars.repeat = [];
    for (let i = 0; i < 10; i++) {
      this.stage.vars.instructions.push("");
      this.stage.vars.repeat.push(1);
      yield;
    }
    yield* this.sayAndWait(
      "Click the blue blocks and the go flag to make me move!",
      5
    );
    if (this.touching(this.sprites["Button5"].andClones())) {
      yield* this.glide(
        0,
        this.sprites["Button5"].x,
        this.sprites["Button5"].y
      );
    }
    if (this.touching(this.sprites["Button2"].andClones())) {
      yield* this.glide(
        0,
        this.sprites["Button2"].x,
        this.sprites["Button2"].y
      );
    }
  }

  *whenIReceiveHome() {
    this.direction = 90;
    yield* this.glide(1, this.stage.vars.homex, this.stage.vars.homey);
    this.visible = true;
  }

  *whenKeyNPressed() {
    this.stage.watchers.name.visible = false;
    this.stage.vars.homex = -196;
    this.stage.vars.homey = -56;
  }

  *whenIReceiveNotSunset() {
    this.costume = this.stage.vars.oldcostume;
  }

  *whenIReceiveStop() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveSunset() {
    this.stage.vars.oldcostume = this.costumeNumber;
    this.costume = "sun";
    yield* this.sayAndWait("Make the sun set!", 4);
  }

  *whenKeyIPressed() {
    if (this.stage.vars.ishow == 0) {
      this.stage.watchers.instructions.visible = true;
      this.stage.vars.ishow = 1;
    } else {
      this.stage.watchers.instructions.visible = false;
      this.stage.vars.ishow = 0;
    }
  }

  *whenKeyDPressed() {
    if (this.stage.vars.dateshow == 0) {
      this.stage.watchers.date.visible = true;
      this.stage.vars.dateshow = 1;
    } else {
      this.stage.watchers.date.visible = false;
      this.stage.vars.dateshow = 0;
    }
  }

  *whenGreenFlagClicked2() {
    this.goto(0, 0);
  }
}
