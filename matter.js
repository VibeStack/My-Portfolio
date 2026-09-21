// src/matter.js

import Matter from "matter-js";
import MatterAttractors from "matter-attractors";
import MatterWrap from "matter-wrap";

// Disable ESLint hook warning (they're not React hooks)
// eslint-disable-next-line react-hooks/rules-of-hooks
Matter.use(MatterAttractors);
// eslint-disable-next-line react-hooks/rules-of-hooks
Matter.use(MatterWrap);

export function runMatter(canvasElement) {
  const { Engine, Events, Runner, Render, World, Body, Mouse, Common, Bodies } =
    Matter;

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
      background: "transparent",
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
        fillStyle: "#9d4edd18",
        strokeStyle: "#c084fc33",
        lineWidth: 1,
      },
      plugin: {
        attractors: [
          (bodyA, bodyB) => {
            const dx = bodyA.position.x - bodyB.position.x;
            const dy = bodyA.position.y - bodyB.position.y;
            const dist = Math.sqrt(dx * dx + dy * dy) || 1;
            // Realistic inertia: Acceleration a = F / m.
            // Small light bodies have lower mass so they experience higher acceleration and zoom towards cursor fast.
            // Big heavy bodies have higher inertia so they move steadily and powerfully with more weight.
            const mass = bodyB.mass || 1;
            const baseAccel = 0.0035; 
            const acceleration = baseAccel / Math.pow(mass, 0.45);
            const forceMagnitude = Math.min(0.02, acceleration * mass);

            return {
              x: (dx / dist) * forceMagnitude,
              y: (dy / dist) * forceMagnitude,
            };
          },
        ],
      },
    }
  );

  World.add(world, attractiveBody);

  for (let i = 0; i < 75; i++) {
    const x = Common.random(0, dimensions.width);
    const y = Common.random(0, dimensions.height);
    const s =
      Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
    const polygonNumber = Common.random(3, 6);
    const r = Common.random(0, 1);

    // Realistic scale: mass directly proportional to size/area (s^2)
    // Small elements have low frictionAir (nimble & fast)
    // Large heavy elements have more frictionAir and resistance (feel heavy & grounded)
    const shape = Bodies.polygon(x, y, polygonNumber, s, {
      mass: (s * s) / 25,
      friction: 0.1,
      frictionAir: 0.001 + (s / 80) * 0.006,
      angle: Math.round(Math.random() * 360),
      render: {
        fillStyle: "#222222",
        strokeStyle: "#000000",
        lineWidth: 2,
      },
    });

    const r1 = Common.random(2, 8); // Tiny circle: extremely light, fast & reactive
    const circle1 = Bodies.circle(x, y, r1, {
      mass: (r1 * r1) / 30,
      friction: 0.05,
      frictionAir: 0.001,
      render: {
        fillStyle: r > 0.3 ? "#27292d" : "#444444",
        strokeStyle: "#000000",
        lineWidth: 2,
      },
    });

    const r2 = Common.random(8, 20); // Medium circle
    const circle2 = Bodies.circle(x, y, r2, {
      mass: (r2 * r2) / 25,
      friction: 0.1,
      frictionAir: 0.002,
      render: {
        fillStyle: r > 0.3 ? "#edf2fb44" : "#222222",
        strokeStyle: "#111111",
        lineWidth: 4,
      },
    });

    const r3 = Common.random(20, 36); // Big circle: heavy weight, steady momentum
    const circle3 = Bodies.circle(x, y, r3, {
      mass: (r3 * r3) / 15,
      friction: 0.2,
      frictionAir: 0.005,
      render: {
        fillStyle: "#191919",
        strokeStyle: "#111111",
        lineWidth: 3,
      },
    });

    World.add(world, [shape, circle1, circle2, circle3]);
  }

  // Track global window mouse coordinates so canvas position is tracked everywhere across the viewport
  const mousePos = {
    x: dimensions.width / 2,
    y: dimensions.height / 2,
    active: false,
  };

  const handleMouseMove = (e) => {
    mousePos.x = e.clientX;
    mousePos.y = e.clientY;
    mousePos.active = true;
    // Set attractive body position directly on mouse move for instantaneous response
    Body.setPosition(attractiveBody, { x: mousePos.x, y: mousePos.y });
  };

  window.addEventListener("mousemove", handleMouseMove, { passive: true });

  Events.on(engine, "afterUpdate", () => {
    if (!mousePos.active) return;
    // Ensure attractive center is locked to cursor position every frame
    Body.setPosition(attractiveBody, {
      x: mousePos.x,
      y: mousePos.y,
    });
  });

  Runner.run(runner, engine);
  Render.run(render);

  function handleResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Update canvas size
    render.canvas.width = width;
    render.canvas.height = height;

    render.options.width = width;
    render.options.height = height;

    // Reposition attractive body in the center
    Body.setPosition(attractiveBody, {
      x: width / 2,
      y: height / 2,
    });
  }

  window.addEventListener("resize", handleResize);
  // --- End resize handler ---

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
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    },
    play: () => {
      Runner.run(runner, engine);
      Render.run(render);
    },
  };
}
