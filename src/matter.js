// src/matter.js

import Matter from 'matter-js';
import MatterAttractors from 'matter-attractors';
import MatterWrap from 'matter-wrap';

// Disable ESLint hook warning (they're not React hooks)
// eslint-disable-next-line react-hooks/rules-of-hooks
Matter.use(MatterAttractors);
// eslint-disable-next-line react-hooks/rules-of-hooks
Matter.use(MatterWrap);

export function runMatter(canvasElement) {
  const {
    Engine,
    Events,
    Runner,
    Render,
    World,
    Body,
    Mouse,
    Common,
    Bodies,
  } = Matter;

  let dimensions = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  //  Clear existing children (like extra canvas) to prevent duplicates
  while (canvasElement.firstChild) {
    canvasElement.removeChild(canvasElement.firstChild);
  }

  const engine = Engine.create();
  const world = engine.world;

  engine.world.gravity.y = 0;
  engine.world.gravity.x = 0;
  engine.world.gravity.scale = 0.1;

  const render = Render.create({
    element: canvasElement,
    engine,
    options: {
      width: dimensions.width,
      height: dimensions.height,
      wireframes: false,
      background: 'transparent',
      showVelocity: false,
    },
  });

  const runner = Runner.create();
  world.gravity.scale = 0;

  const attractiveBody = Bodies.circle(
    dimensions.width / 2,
    dimensions.height / 2,
    Math.max(dimensions.width / 25, dimensions.height / 25) / 2,
    {
      isStatic: true,
      render: {
        fillStyle: '#adb5bd',
        strokeStyle: '#fff',
        lineWidth: 0,
      },
      plugin: {
        attractors: [
          (bodyA, bodyB) => ({
            x: (bodyA.position.x - bodyB.position.x) * 1e-6,
            y: (bodyA.position.y - bodyB.position.y) * 1e-6,
          }),
        ],
      },
    }
  );

  World.add(world, attractiveBody);

  for (let i = 0; i < 75; i++) {
    const x = Common.random(0, dimensions.width);
    const y = Common.random(0, dimensions.height);
    const s = Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
    const polygonNumber = Common.random(3, 6);
    const r = Common.random(0, 1);

    const shape = Bodies.polygon(x, y, polygonNumber, s, {
      mass: s / 50,
      friction: 0,
      frictionAir: 0.02,
      angle: Math.round(Math.random() * 360),
      render: {
        fillStyle: '#222222',
        strokeStyle: '#000000',
        lineWidth: 2,
      },
    });

    const circle1 = Bodies.circle(x, y, Common.random(2, 8), {
      mass: 0.1,
      friction: 0,
      frictionAir: 0.01,
      render: {
        fillStyle: r > 0.3 ? '#27292d' : '#444444',
        strokeStyle: '#000000',
        lineWidth: 2,
      },
    });

    const circle2 = Bodies.circle(x, y, Common.random(2, 20), {
      mass: 0.5,
      friction: 0,
      frictionAir: 0,
      render: {
        fillStyle: r > 0.3 ? '#edf2fb44' : '#222222',
        strokeStyle: '#111111',
        lineWidth: 4,
      },
    });

    const circle3 = Bodies.circle(x, y, Common.random(2, 30), {
      mass: 0.75,
      friction: 0.6,
      frictionAir: 0.8,
      render: {
        fillStyle: '#191919',
        strokeStyle: '#111111',
        lineWidth: 3,
      },
    });

    World.add(world, [shape, circle1, circle2, circle3]);
  }

  const mouse = Mouse.create(render.canvas);

  Events.on(engine, 'afterUpdate', () => {
    if (!mouse.position.x) return;
    Body.translate(attractiveBody, {
      x: (mouse.position.x - attractiveBody.position.x) * 0.12,
      y: (mouse.position.y - attractiveBody.position.y) * 0.12,
    });
  });

  Runner.run(runner, engine);
  Render.run(render);

  // Return clean control methods
  return {
    engine,
    render,
    runner,
    stop: () => {
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);

      if (render.canvas && render.canvas.parentNode) {
        render.canvas.parentNode.removeChild(render.canvas);
      }
    },
    play: () => {
      Runner.run(runner, engine);
      Render.run(render);
    },
  };
}
