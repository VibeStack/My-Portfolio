import React, { useEffect, useRef, useState } from "react";

/**
 * Senior-Grade Lightweight Constellation Canvas Background
 * Architecture & Constraints:
 * 1. Strictly Confined to Margin Safe Zones:
 *    - Left Zone: 0% -> 18% width
 *    - Right Zone: 82% -> 100% width
 *    - Center Zone: 100% star-free, zero overlap with hero titles, about cards, or main content.
 * 2. Mobile Optimization:
 *    - Viewports < 768px: Completely unmounted from the DOM (returns null) for maximum mobile performance and clean readability.
 * 3. Micro-Interactivity:
 *    - Gentle mouse repulsion within safe bounds without aggressive jumping.
 *    - Subtle connecting lines between nearby constellation nodes.
 */
export default function Interactive3DBackground() {
  const canvasRef = useRef(null);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handleResizeCheck = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResizeCheck);
    return () => window.removeEventListener("resize", handleResizeCheck);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates with easing
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 130,
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    window.addEventListener("resize", handleResize);

    // Star node generation restricted to margins
    let stars = [];
    const STARS_PER_ZONE = 32;

    const initStars = () => {
      stars = [];
      const leftMarginMax = width * 0.18;
      const rightMarginMin = width * 0.82;

      // Left constellation cluster
      for (let i = 0; i < STARS_PER_ZONE; i++) {
        stars.push({
          x: Math.random() * leftMarginMax,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          baseRadius: Math.random() * 1.5 + 1.2,
          zone: "left",
          color: i % 3 === 0 ? "#ffffff" : i % 2 === 0 ? "#e0aaff" : "#c084fc",
          alpha: Math.random() * 0.4 + 0.35,
        });
      }

      // Right constellation cluster
      for (let i = 0; i < STARS_PER_ZONE; i++) {
        stars.push({
          x: rightMarginMin + Math.random() * (width - rightMarginMin),
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          baseRadius: Math.random() * 1.5 + 1.2,
          zone: "right",
          color: i % 3 === 0 ? "#ffffff" : i % 2 === 0 ? "#e0aaff" : "#c084fc",
          alpha: Math.random() * 0.4 + 0.35,
        });
      }
    };

    initStars();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const leftMarginMax = width * 0.18;
      const rightMarginMin = width * 0.82;
      const maxConnectDist = 120;

      // 1. Update & draw stars within strict zones
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        // Position update
        s.x += s.vx;
        s.y += s.vy;

        // Bounce vertically
        if (s.y < 0) {
          s.y = 0;
          s.vx *= -1;
          s.vy = Math.abs(s.vy);
        } else if (s.y > height) {
          s.y = height;
          s.vy = -Math.abs(s.vy);
        }

        // Strictly enforce boundary per zone (never trespass into middle)
        if (s.zone === "left") {
          if (s.x < 0) {
            s.x = 0;
            s.vx = Math.abs(s.vx);
          } else if (s.x > leftMarginMax) {
            s.x = leftMarginMax;
            s.vx = -Math.abs(s.vx);
          }
        } else if (s.zone === "right") {
          if (s.x < rightMarginMin) {
            s.x = rightMarginMin;
            s.vx = Math.abs(s.vx);
          } else if (s.x > width) {
            s.x = width;
            s.vx = -Math.abs(s.vx);
          }
        }

        // Subtle mouse repulsion
        const dx = mouse.x - s.x;
        const dy = mouse.y - s.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius && dist > 0) {
          const force = (mouse.radius - dist) / mouse.radius;
          const pushX = (dx / dist) * force * 1.2;
          const pushY = (dy / dist) * force * 1.2;
          s.x -= pushX;
          s.y -= pushY;
        }

        // Draw star node
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.baseRadius, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.alpha;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;

        // 2. Connect stars in the same zone
        for (let j = i + 1; j < stars.length; j++) {
          const s2 = stars[j];
          if (s.zone !== s2.zone) continue; // No cross-screen spanning lines

          const distNodes = Math.hypot(s.x - s2.x, s.y - s2.y);
          if (distNodes < maxConnectDist) {
            const lineAlpha = (1 - distNodes / maxConnectDist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(s.x, s.y);
            ctx.lineTo(s2.x, s2.y);
            ctx.strokeStyle = `rgba(192, 132, 252, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  // Completely eliminate canvas from DOM on mobile viewports (<768px)
  if (isMobile) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 w-full h-full select-none"
      aria-hidden="true"
    />
  );
}
