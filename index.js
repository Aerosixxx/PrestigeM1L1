import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Go from "./Go/Go.js";
import HomeButton from "./HomeButton/HomeButton.js";
import ScreenShot20180429At142816 from "./ScreenShot20180429At142816/ScreenShot20180429At142816.js";
import Abc from "./Abc/Abc.js";
import Onflag from "./Onflag/Onflag.js";
import End from "./End/End.js";
import Block1 from "./Block1/Block1.js";
import Repeat1 from "./Repeat1/Repeat1.js";
import Block2 from "./Block2/Block2.js";
import Repeat2 from "./Repeat2/Repeat2.js";
import Block3 from "./Block3/Block3.js";
import Repeat3 from "./Repeat3/Repeat3.js";
import Block4 from "./Block4/Block4.js";
import Repeat4 from "./Repeat4/Repeat4.js";
import Block5 from "./Block5/Block5.js";
import Repeat5 from "./Repeat5/Repeat5.js";
import Block6 from "./Block6/Block6.js";
import Repeat6 from "./Repeat6/Repeat6.js";
import Block7 from "./Block7/Block7.js";
import Repeat7 from "./Repeat7/Repeat7.js";
import Block8 from "./Block8/Block8.js";
import Repeat8 from "./Repeat8/Repeat8.js";
import Block9 from "./Block9/Block9.js";
import Repeat9 from "./Repeat9/Repeat9.js";
import Block10 from "./Block10/Block10.js";
import Repeat10 from "./Repeat10/Repeat10.js";
import XyGrid20px from "./XyGrid20px/XyGrid20px.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Spaceship from "./Spaceship/Spaceship.js";
import BallSoccer from "./BallSoccer/BallSoccer.js";
import Crab from "./Crab/Crab.js";
import Penguin from "./Penguin/Penguin.js";
import Button3 from "./Button3/Button3.js";
import Button2 from "./Button2/Button2.js";
import Button4 from "./Button4/Button4.js";
import Button5 from "./Button5/Button5.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Sprite1: new Sprite1({
    x: -96,
    y: -56,
    direction: 90,
    costumeNumber: 1,
    size: 39,
    visible: true,
    layerOrder: 34
  }),
  Go: new Go({
    x: 128,
    y: 159,
    direction: 90,
    costumeNumber: 1,
    size: 20.000000000000014,
    visible: true,
    layerOrder: 19
  }),
  HomeButton: new HomeButton({
    x: 88.05000000000001,
    y: 155,
    direction: 90,
    costumeNumber: 1,
    size: 85,
    visible: true,
    layerOrder: 20
  }),
  ScreenShot20180429At142816: new ScreenShot20180429At142816({
    x: -21,
    y: 151,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 31
  }),
  Abc: new Abc({
    x: 33,
    y: 154,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 6
  }),
  Onflag: new Onflag({
    x: -197,
    y: -120,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 36
  }),
  End: new End({
    x: 210,
    y: -124,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 27
  }),
  Block1: new Block1({
    x: -158,
    y: -123,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: true,
    layerOrder: 35
  }),
  Repeat1: new Repeat1({
    x: -153,
    y: -147,
    direction: 90,
    costumeNumber: 5,
    size: 40.000000000000014,
    visible: true,
    layerOrder: 37
  }),
  Block2: new Block2({
    x: -121,
    y: -124,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 7
  }),
  Repeat2: new Repeat2({
    x: -123,
    y: -149,
    direction: 90,
    costumeNumber: 1,
    size: 40.000000000000014,
    visible: false,
    layerOrder: 8
  }),
  Block3: new Block3({
    x: -84,
    y: -124,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 21
  }),
  Repeat3: new Repeat3({
    x: -85,
    y: -149,
    direction: 90,
    costumeNumber: 1,
    size: 40.000000000000014,
    visible: false,
    layerOrder: 22
  }),
  Block4: new Block4({
    x: -47,
    y: -124,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 9
  }),
  Repeat4: new Repeat4({
    x: -50,
    y: -149,
    direction: 90,
    costumeNumber: 1,
    size: 40.000000000000014,
    visible: false,
    layerOrder: 10
  }),
  Block5: new Block5({
    x: -10,
    y: -124,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 23
  }),
  Repeat5: new Repeat5({
    x: -12,
    y: -149,
    direction: 90,
    costumeNumber: 1,
    size: 40.000000000000014,
    visible: false,
    layerOrder: 24
  }),
  Block6: new Block6({
    x: 26,
    y: -124,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 11
  }),
  Repeat6: new Repeat6({
    x: 24,
    y: -149,
    direction: 90,
    costumeNumber: 1,
    size: 40.000000000000014,
    visible: false,
    layerOrder: 12
  }),
  Block7: new Block7({
    x: 63,
    y: -124,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 13
  }),
  Repeat7: new Repeat7({
    x: 61,
    y: -149,
    direction: 90,
    costumeNumber: 1,
    size: 40.000000000000014,
    visible: false,
    layerOrder: 26
  }),
  Block8: new Block8({
    x: 100,
    y: -124,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 14
  }),
  Repeat8: new Repeat8({
    x: 99,
    y: -149,
    direction: 90,
    costumeNumber: 1,
    size: 40.000000000000014,
    visible: false,
    layerOrder: 25
  }),
  Block9: new Block9({
    x: 136,
    y: -124,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 15
  }),
  Repeat9: new Repeat9({
    x: 135,
    y: -149,
    direction: 90,
    costumeNumber: 1,
    size: 40.000000000000014,
    visible: false,
    layerOrder: 16
  }),
  Block10: new Block10({
    x: 173,
    y: -124,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 17
  }),
  Repeat10: new Repeat10({
    x: 171,
    y: -149,
    direction: 90,
    costumeNumber: 1,
    size: 40.000000000000014,
    visible: false,
    layerOrder: 18
  }),
  XyGrid20px: new XyGrid20px({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 5
  }),
  Sprite2: new Sprite2({
    x: -79,
    y: 153,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 28
  }),
  Spaceship: new Spaceship({
    x: 196,
    y: 88,
    direction: 90,
    costumeNumber: 1,
    size: 60,
    visible: false,
    layerOrder: 29
  }),
  BallSoccer: new BallSoccer({
    x: 81,
    y: -65,
    direction: 90,
    costumeNumber: 1,
    size: 50.000000000000014,
    visible: false,
    layerOrder: 30
  }),
  Crab: new Crab({
    x: 200,
    y: -17,
    direction: 90,
    costumeNumber: 1,
    size: 50.000000000000014,
    visible: false,
    layerOrder: 32
  }),
  Penguin: new Penguin({
    x: 122,
    y: 35,
    direction: 90,
    costumeNumber: 1,
    size: 50.000000000000014,
    visible: false,
    layerOrder: 33
  }),
  Button3: new Button3({
    x: -1,
    y: -276,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4
  }),
  Button2: new Button2({
    x: 270.8902170360132,
    y: -42.790250143131644,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Button4: new Button4({
    x: -7.935258474739726,
    y: 9.583982417851814,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  Button5: new Button5({
    x: -201.60969021282475,
    y: -35.91903608988857,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
