import { expect, test } from "bun:test";
import { Controller } from "../src/Controller";
import { Rover, type point } from "../src/Rover";
import { MarsMap } from "../src/MarsMap";

test("receives commands test", () => {
  const initalPoint: point = { x: 1, y: 1 };
  const initalCommands = "f f b";
  const rover: Rover = new Rover(initalPoint, "N");
  const controller: Controller = new Controller();
  rover.move(controller.sendCommands(initalCommands));
  expect(rover.getCommands()).toEqual(initalCommands.split(" "));
});

test("Rover wraps around left edge", () => {
  const initalPoint: point = { x: 1, y: 1 };
  const initalCommands = "l l";
  const rover: Rover = new Rover(initalPoint, "N");
  const controller: Controller = new Controller();
  rover.move(controller.sendCommands(initalCommands));
  const marsMap: MarsMap = new MarsMap("3 3");
  console.log(marsMap.getMap());
  expect(rover.getPosition().x).toEqual(3);
});
