// Animation utilities and helpers

// Intersection Observer for scroll animations
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        
        // Add staggered animation to children
        const children = entry.target.querySelectorAll('.stagger-item');
        children.forEach((child, index) => {
          setTimeout(() => {
            child.classList.add('animate-slide-up');
          }, index * 100);
        });
      }
    });
  }, observerOptions);

  // Observe all sections
  const sections = document.querySelectorAll('section');
  sections.forEach((section) => observer.observe(section));

  return observer;
};

// Parallax effect for elements
export const initParallaxEffect = () => {
  const parallaxElements = document.querySelectorAll('.parallax-element');
  
  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    parallaxElements.forEach((element) => {
      const htmlElement = element as HTMLElement;
      htmlElement.style.transform = `translateY(${rate}px)`;
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  
  return () => window.removeEventListener('scroll', handleScroll);
};

// Smooth scroll to element
export const smoothScrollTo = (elementId: string, offset: number = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// Ripple effect for buttons
export const createRippleEffect = (event: MouseEvent, element: HTMLElement) => {
  const circle = document.createElement('span');
  const diameter = Math.max(element.clientWidth, element.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - element.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - element.offsetTop - radius}px`;
  circle.classList.add('ripple');

  const ripple = element.getElementsByClassName('ripple')[0];
  if (ripple) {
    ripple.remove();
  }

  element.appendChild(circle);
};

// Typewriter effect
export const typewriterEffect = (element: HTMLElement, text: string, speed: number = 50) => {
  let i = 0;
  element.innerHTML = '';
  
  const timer = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
  
  return timer;
};

// Confetti animation for success states
export const triggerConfetti = () => {
  // Simple confetti effect using CSS animations
  const confettiContainer = document.createElement('div');
  confettiContainer.className = 'fixed inset-0 pointer-events-none z-50';
  document.body.appendChild(confettiContainer);

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'absolute w-2 h-2 bg-cyan-500 rounded-full animate-bounce';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.animationDelay = Math.random() * 2 + 's';
    confetti.style.animationDuration = (Math.random() * 2 + 1) + 's';
    confettiContainer.appendChild(confetti);
  }

  setTimeout(() => {
    document.body.removeChild(confettiContainer);
  }, 3000);
};

// Loading animation
export const showLoadingSpinner = (container: HTMLElement) => {
  const spinner = document.createElement('div');
  spinner.className = 'loading-spinner mx-auto';
  spinner.id = 'loading-spinner';
  container.appendChild(spinner);
};

export const hideLoadingSpinner = () => {
  const spinner = document.getElementById('loading-spinner');
  if (spinner) {
    spinner.remove();
  }
};

// Animate counter numbers
export const animateCounter = (element: HTMLElement, start: number, end: number, duration: number = 2000) => {
  const startTimestamp = performance.now();
  
  const step = (timestamp: number) => {
    const elapsed = timestamp - startTimestamp;
    const progress = Math.min(elapsed / duration, 1);
    
    const current = Math.floor(progress * (end - start) + start);
    element.textContent = current.toString();
    
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };
  
  requestAnimationFrame(step);
};

// Staggered animation for lists
export const staggerAnimation = (elements: NodeListOf<Element>, delay: number = 100) => {
  elements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('animate-slide-up');
    }, index * delay);
  });
};

// Morphing shape animation
export const morphShape = (element: HTMLElement, shapes: string[]) => {
  let currentShape = 0;
  
  const morph = () => {
    element.style.clipPath = shapes[currentShape];
    currentShape = (currentShape + 1) % shapes.length;
  };
  
  const interval = setInterval(morph, 2000);
  return () => clearInterval(interval);
};

// Floating animation for elements
export const floatingAnimation = (element: HTMLElement, intensity: number = 10) => {
  let start: number;
  
  const animate = (timestamp: number) => {
    if (!start) start = timestamp;
    const elapsed = timestamp - start;
    
    const y = Math.sin(elapsed * 0.002) * intensity;
    element.style.transform = `translateY(${y}px)`;
    
    requestAnimationFrame(animate);
  };
  
  requestAnimationFrame(animate);
};

// Glitch effect for text
export const glitchEffect = (element: HTMLElement, duration: number = 1000) => {
  const originalText = element.textContent || '';
  const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  
  let iterations = 0;
  const maxIterations = duration / 50;
  
  const interval = setInterval(() => {
    element.textContent = originalText
      .split('')
      .map((char, index) => {
        if (index < iterations) {
          return originalText[index];
        }
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join('');
    
    if (iterations >= originalText.length) {
      clearInterval(interval);
      element.textContent = originalText;
    }
    
    iterations += 1 / 3;
  }, 50);
};

// Magnetic effect for interactive elements
export const magneticEffect = (element: HTMLElement, strength: number = 0.3) => {
  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    element.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };
  
  const handleMouseLeave = () => {
    element.style.transform = 'translate(0px, 0px)';
  };
  
  element.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mouseleave', handleMouseLeave);
  
  return () => {
    element.removeEventListener('mousemove', handleMouseMove);
    element.removeEventListener('mouseleave', handleMouseLeave);
  };
};

// Performance monitoring for animations
export const monitorAnimationPerformance = () => {
  let frameCount = 0;
  let lastTime = performance.now();
  
  const measureFPS = () => {
    frameCount++;
    const currentTime = performance.now();
    
    if (currentTime >= lastTime + 1000) {
      const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
      console.log(`Animation FPS: ${fps}`);
      
      // Reduce animations if performance is poor
      if (fps < 30) {
        document.body.classList.add('reduce-animations');
      }
      
      frameCount = 0;
      lastTime = currentTime;
    }
    
    requestAnimationFrame(measureFPS);
  };
  
  requestAnimationFrame(measureFPS);
};

// Initialize all animations
export const initAllAnimations = () => {
  // Initialize scroll animations
  initScrollAnimations();
  
  // Initialize parallax effect
  initParallaxEffect();
  
  // Monitor performance
  monitorAnimationPerformance();
  
  // Add ripple effect to buttons
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('ripple-effect')) {
      createRippleEffect(e, target);
    }
  });
  
  // Add magnetic effect to interactive elements
  document.querySelectorAll('.magnetic').forEach((element) => {
    magneticEffect(element as HTMLElement);
  });
  
  console.log('All animations initialized');
};