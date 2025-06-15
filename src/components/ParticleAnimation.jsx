import React, { useEffect, useRef } from "react";

// --- Particle Class ---
// This class defines the behavior of a single particle on the canvas.
class Particle {
  constructor(x, y) {
    // Set initial position and properties
    this.x = x;
    this.y = y;
    this.size = Math.random() * 5 + 1;
    // Reduced speed for slower motion
    this.speedX = Math.random() * 0.5 - 0.25; // Changed from 2 - 1
    this.speedY = Math.random() * 0.5 - 0.25; // Changed from 2 - 1
    // Set a base color for the particles
    this.color = "#a0aec0"; // A nice gray color
  }

  // Update the particle's position and handle interactions
  update(mouseX, mouseY) {
    // Basic movement
    this.x += this.speedX;
    this.y += this.speedY;

    // Make particles fade out as they get smaller
    if (this.size > 0.2) this.size -= 0.05;

    // Interaction with the mouse: push particles away
    const dx = this.x - mouseX;
    const dy = this.y - mouseY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 100) {
      // Calculate force and move particle away from the mouse
      const forceDirectionX = dx / distance;
      const forceDirectionY = dy / distance;
      const force = (100 - distance) / 100;
      const directionX = forceDirectionX * force * this.size;
      const directionY = forceDirectionY * force * this.size;

      this.x += directionX;
      this.y += directionY;
    }
  }

  // Draw the particle on the canvas
  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// --- React Component ---
// This component renders the canvas and runs the animation.
function App() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: undefined, y: undefined });
  const animationFrameRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    // Ensure canvas and its 2D context are available
    if (!canvas) {
      console.error("Canvas element not found.");
      return;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.error("2D context not available on canvas.");
      return;
    }

    // Function to initialize or reset particles based on canvas size
    const initParticles = () => {
      particlesRef.current = []; // Clear existing particles
      // Adjust the number of particles based on screen size for better performance
      const numberOfParticles = (canvas.width * canvas.height) / 15000;

      for (let i = 0; i < numberOfParticles; i++) {
        // Random initial position within the canvas
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particlesRef.current.push(new Particle(x, y));
      }
    };

    // Handler for window resize events
    const handleResize = () => {
      // Update canvas dimensions to match window size
      canvas.width = globalThis.innerWidth;
      canvas.height = globalThis.innerHeight;
      initParticles(); // Reinitialize particles for new dimensions
    };

    // The main animation loop for updating and drawing particles
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas for the next frame

      // Iterate over particles, update their state, and draw them
      particlesRef.current.forEach((particle) => {
        // If a particle becomes too small, reinitialize it with new properties
        if (particle.size <= 0.2) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.size = Math.random() * 5 + 1;
          // Reduced speed for slower motion when reinitialized
          particle.speedX = Math.random() * 0.5 - 0.25; // Changed from 2 - 1
          particle.speedY = Math.random() * 0.5 - 0.25; // Changed from 2 - 1
        }
        // Update particle position and interaction with mouse
        particle.update(mouseRef.current.x, mouseRef.current.y);
        particle.draw(ctx); // Draw the particle on the canvas
      });

      // Request the next animation frame
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Handler for mouse movement to update mouse coordinates
    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    // Initial setup when the component mounts
    handleResize(); // Set initial canvas size and particles
    animate(); // Start the animation loop

    // Add event listeners for responsiveness and interactivity
    globalThis.addEventListener("resize", handleResize);
    globalThis.addEventListener("mousemove", handleMouseMove);

    // Cleanup function: runs when the component unmounts
    return () => {
      // Remove event listeners to prevent memory leaks
      globalThis.removeEventListener("resize", handleResize);
      globalThis.removeEventListener("mousemove", handleMouseMove);
      // Cancel any pending animation frames
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    // Canvas element with Tailwind CSS for full-screen positioning and styling
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{ background: "transparent" }} // Set background to transparent
    />
  );
}

export default App;
