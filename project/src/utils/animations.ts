// Animation utilities for smooth transitions and scroll-triggered animations

export class AnimationObserver {
  private observer: IntersectionObserver;
  private elements: Map<Element, string> = new Map();

  constructor() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animationClass = this.elements.get(entry.target);
            if (animationClass) {
              entry.target.classList.add('visible');
              // Optional: unobserve after animation to improve performance
              this.observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );
  }

  observe(element: Element, animationClass: string = 'fade-in-up') {
    element.classList.add(animationClass);
    this.elements.set(element, animationClass);
    this.observer.observe(element);
  }

  disconnect() {
    this.observer.disconnect();
    this.elements.clear();
  }
}

// Initialize scroll animations
export const initScrollAnimations = () => {
  const animationObserver = new AnimationObserver();

  // Animate sections on scroll
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    const animationClass = index % 2 === 0 ? 'fade-in-up' : 'fade-in-left';
    animationObserver.observe(section, animationClass);
  });

  // Animate cards
  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    animationObserver.observe(card, 'scale-in');
  });

  // Animate buttons
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    animationObserver.observe(button, 'fade-in-up');
  });

  return animationObserver;
};

// Stagger animation utility
export const staggerAnimation = (elements: NodeListOf<Element>, delay: number = 100) => {
  elements.forEach((element, index) => {
    (element as HTMLElement).style.animationDelay = `${index * delay}ms`;
  });
};

// Page transition effects
export const pageTransition = {
  enter: (element: HTMLElement) => {
    element.classList.add('page-enter');
    requestAnimationFrame(() => {
      element.classList.add('page-enter-active');
      element.classList.remove('page-enter');
    });
  },

  exit: (element: HTMLElement) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(-20px)';
  },
};

// Smooth scroll with easing
export const smoothScrollTo = (target: string | Element, duration: number = 800) => {
  const targetElement = typeof target === 'string' 
    ? document.querySelector(target) 
    : target;

  if (!targetElement) return;

  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  const easeInOutQuart = (t: number): number => {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
  };

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutQuart(progress);

    window.scrollTo(0, startPosition + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

// Parallax effect utility
export const initParallax = () => {
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    
    parallaxElements.forEach((element) => {
      const rate = scrolled * -0.5;
      (element as HTMLElement).style.transform = `translateY(${rate}px)`;
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

// Typing animation effect
export const typeWriter = (element: HTMLElement, text: string, speed: number = 50) => {
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

// Counter animation
export const animateCounter = (
  element: HTMLElement, 
  start: number, 
  end: number, 
  duration: number = 2000
) => {
  const range = end - start;
  const increment = end > start ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / range));
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    element.textContent = current.toString();
    
    if (current === end) {
      clearInterval(timer);
    }
  }, stepTime);
  
  return timer;
};

// Ripple effect for buttons
export const addRippleEffect = (button: HTMLButtonElement) => {
  button.addEventListener('click', (e) => {
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
};

// Loading animation
export const showLoading = (element: HTMLElement) => {
  element.classList.add('loading-skeleton');
};

export const hideLoading = (element: HTMLElement) => {
  element.classList.remove('loading-skeleton');
};

// Magnetic effect for interactive elements
export const addMagneticEffect = (element: HTMLElement, strength: number = 0.3) => {
  element.addEventListener('mousemove', (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    element.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  });
  
  element.addEventListener('mouseleave', () => {
    element.style.transform = 'translate(0, 0)';
  });
};