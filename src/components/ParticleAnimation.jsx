import React, { useEffect, useRef } from "react";

const PARTICLE_CONFIG = {
  color: "rgba(160, 174, 192, 1)",

  connectDistance: 50,

  lineWidth: 0.5,
};

// --- Particle Class ---
// This class defines the behavior of a single particle (a node in our constellation).
class Particle {
  constructor(canvas) {
    // We need the canvas dimensions to place and move the particle.
    this.canvas = canvas;
    // Set a random initial position within the canvas bounds.
    this.x = Math.random() * this.canvas.width;
    this.y = Math.random() * this.canvas.height;
    // Set a random size for a bit of visual variety.
    this.size = Math.random() * 2 + 1;
    // Set a slow, random velocity for a gentle drifting motion.
    this.speedX = Math.random() * 0.4 - 0.2;
    this.speedY = Math.random() * 0.4 - 0.2;
  }

  // update() handles the particle's movement for each frame of the animation.
  update() {
    // Move the particle based on its speed.
    this.x += this.speedX;
    this.y += this.speedY;

    // Implement a "wrap-around" effect. If a particle goes off one edge
    // of the canvas, it reappears on the opposite edge.
    if (this.x < 0) this.x = this.canvas.width;
    if (this.x > this.canvas.width) this.x = 0;
    if (this.y < 0) this.y = this.canvas.height;
    if (this.y > this.canvas.height) this.y = 0;
  }

  // draw() renders the particle onto the canvas.
  draw(ctx) {
    ctx.fillStyle = PARTICLE_CONFIG.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// --- React Component ---
// This component renders the canvas and runs the entire constellation animation.
function App() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  // We track mouse position to create interactive connections.
  const mouseRef = useRef({ x: undefined, y: undefined, isActive: false });
  const animationFrameRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Exit if the canvas is not yet available.
    const ctx = canvas.getContext("2d");
    if (!ctx) return; // Exit if the 2D context can't be created.

    // This function populates the particles array based on screen size.
    const initParticles = () => {
      particlesRef.current = [];
      // Create more particles on larger screens for a denser network.
      const numberOfParticles = (canvas.width * canvas.height) / 9000;
      for (let i = 0; i < numberOfParticles; i++) {
        particlesRef.current.push(new Particle(canvas));
      }
    };

    // This function handles the logic for drawing lines between close particles.
    const connectParticles = () => {
      const particles = particlesRef.current;
      const connectDist = PARTICLE_CONFIG.connectDistance;

      // Loop through every particle to compare it with every other particle.
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // If two particles are close enough, draw a line between them.
          if (distance < connectDist) {
            // The line's opacity is based on how close the particles are.
            // Closer particles get a more opaque line.
            const opacity = 1 - distance / connectDist;
            ctx.strokeStyle = `rgba(160, 174, 192, ${opacity})`;
            ctx.lineWidth = PARTICLE_CONFIG.lineWidth;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }

      // Also, connect particles to the mouse cursor if it's active on the canvas.
      if (mouseRef.current.isActive) {
        const mouse = mouseRef.current;
        for (let i = 0; i < particles.length; i++) {
          const dx = particles[i].x - mouse.x;
          const dy = particles[i].y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectDist) {
            const opacity = 1 - distance / connectDist;
            ctx.strokeStyle = `rgba(160, 174, 192, ${opacity})`;
            ctx.lineWidth = PARTICLE_CONFIG.lineWidth;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y); // Start line from the mouse
            ctx.lineTo(particles[i].x, particles[i].y);
            ctx.stroke();
          }
        }
      }
    };

    // The main animation loop. It runs on every frame.
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw each particle.
      particlesRef.current.forEach((particle) => {
        particle.update();
        particle.draw(ctx);
      });

      // Draw the connecting lines.
      connectParticles();

      // Request the next frame to continue the animation.
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Handler for window resize events to keep the canvas full-screen.
    const handleResize = () => {
      canvas.width = globalThis.innerWidth;
      canvas.height = globalThis.innerHeight;
      initParticles(); // Re-initialize particles for the new canvas size.
    };

    // Event handlers for mouse movement.
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.isActive = true;
    };

    // Deactivate mouse connections when the cursor leaves the window.
    const handleMouseOut = () => {
      mouseRef.current.isActive = false;
    };

    // --- Setup and Teardown ---
    handleResize();
    animate();

    // Add event listeners when the component mounts.
    globalThis.addEventListener("resize", handleResize);
    globalThis.addEventListener("mousemove", handleMouseMove);
    globalThis.addEventListener("mouseout", handleMouseOut);

    // Cleanup function: runs when the component unmounts.
    return () => {
      // Remove event listeners to prevent memory leaks.
      globalThis.removeEventListener("resize", handleResize);
      globalThis.removeEventListener("mousemove", handleMouseMove);
      globalThis.removeEventListener("mouseout", handleMouseOut);

      // Stop the animation loop.
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount.

  return (
    // The canvas element is positioned to be a full-screen background.
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full -z-10"
      style={{ background: "linear-gradient(to bottom, #1a202c, #2d3748)" }}
    />
  );
}

export default App;
