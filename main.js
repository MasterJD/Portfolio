/**
 * Portfolio - Scroll Animations & Diagram System
 * 
 * Minimal, purposeful animations using GSAP ScrollTrigger.
 * Diagrams animate data flow to reinforce technical content.
 */

(function() {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /**
   * Initialize all animations
   */
  function init() {
    document.documentElement.classList.remove('no-js');
    
    if (prefersReducedMotion) {
      showAllElements();
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    gsap.defaults({
      ease: 'power2.out',
      duration: 1
    });

    initIntroAnimations();
    initIntroDiagram();
    initScrollAnimations();
    initSystemMap();
    initProjectDiagrams();
    initResizeHandler();
  }

  /**
   * Show all elements without animation
   */
  function showAllElements() {
    document.querySelectorAll('[data-animate]').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    document.querySelectorAll('.map-items, .packet, .arch-packet, .flow-packet').forEach(el => {
      el.style.opacity = '1';
    });
  }

  /**
   * Intro section text animations
   */
  function initIntroAnimations() {
    const introElements = document.querySelectorAll('.section--intro [data-animate]');
    
    gsap.to(introElements, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      stagger: 0.15,
      delay: 0.5,
      ease: 'power2.out'
    });
  }

  /**
   * Intro diagram - API → Queue → Workers → DB
   */
  function initIntroDiagram() {
    const diagram = document.querySelector('.system-diagram');
    if (!diagram) return;

    const nodes = diagram.querySelectorAll('.diagram-node');
    const lines = diagram.querySelectorAll('.diagram-line');
    const packets = diagram.querySelectorAll('.packet');

    // Initial setup
    gsap.set(nodes, { opacity: 0 });
    gsap.set(lines, { strokeDasharray: 40, strokeDashoffset: 40 });

    // Build timeline
    const tl = gsap.timeline({ delay: 0.8 });

    // Fade in nodes sequentially
    tl.to(nodes, {
      opacity: 1,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power2.out'
    });

    // Draw connection lines
    tl.to(lines, {
      strokeDashoffset: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.inOut'
    }, '-=0.4');

    // Start continuous packet animation after initial build
    tl.call(() => {
      animatePackets(packets);
    });
  }

  /**
   * Animate data packets flowing through diagram
   */
  function animatePackets(packets) {
    packets.forEach((packet, i) => {
      const paths = [
        { start: 64, end: 104 },   // API to Queue
        { start: 160, end: 200 },  // Queue to Workers
        { start: 256, end: 296 }   // Workers to DB
      ];

      const path = paths[i];
      if (!path) return;

      // Continuous loop with staggered starts
      gsap.timeline({ repeat: -1, delay: i * 1.2 })
        .set(packet, { opacity: 0, attr: { cx: path.start } })
        .to(packet, {
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out'
        })
        .to(packet, {
          attr: { cx: path.end },
          duration: 2,
          ease: 'none'
        }, '<')
        .to(packet, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.in'
        }, '-=0.3')
        .set(packet, { attr: { cx: path.start } })
        .to({}, { duration: 1 }); // Pause before next cycle
    });
  }

  /**
   * Generic scroll-triggered fade-up animations
   */
  function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]:not(.section--intro [data-animate])');
    
    animatedElements.forEach(el => {
      const delay = parseFloat(el.dataset.delay) || 0;
      
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        opacity: 1,
        y: 0,
        duration: 1,
        delay: delay,
        ease: 'power2.out'
      });
    });
  }

  /**
   * Skills System Map - engineering schematic style
   */
  function initSystemMap() {
    const map = document.querySelector('.system-map');
    if (!map) return;

    const clusters = map.querySelectorAll('.map-cluster');
    const connections = map.querySelectorAll('.map-connection');
    const flowPackets = map.querySelectorAll('.flow-packet');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: map,
        start: 'top 75%',
        toggleActions: 'play none none none'
      }
    });

    // Animate each cluster
    clusters.forEach((cluster, i) => {
      const zone = cluster.querySelector('.map-zone');
      const label = cluster.querySelector('.map-zone-label');
      const items = cluster.querySelector('.map-items');

      // Zone border draws in
      tl.fromTo(zone, 
        { strokeDasharray: 800, strokeDashoffset: 800 },
        { strokeDashoffset: 0, duration: 1.2, ease: 'power2.inOut' },
        i * 0.2
      );

      // Label fades in
      tl.fromTo(label,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        i * 0.2 + 0.3
      );

      // Items fade in together
      tl.to(items,
        { opacity: 1, duration: 0.8 },
        i * 0.2 + 0.5
      );
    });

    // Connection lines
    tl.fromTo(connections,
      { strokeDasharray: 20, strokeDashoffset: 20 },
      { strokeDashoffset: 0, duration: 0.6, stagger: 0.1 },
      '-=0.5'
    );

    // Start flow animation
    tl.call(() => {
      animateMapFlow(flowPackets);
    });
  }

  /**
   * Animate flow packets on system map
   */
  function animateMapFlow(packets) {
    // Horizontal flows
    const hFlows = [
      { packet: packets[0], start: 192, end: 208, attr: 'x' },
      { packet: packets[1], start: 384, end: 400, attr: 'x' }
    ];

    // Vertical flows
    const vFlows = [
      { packet: packets[2], start: 152, end: 168, attr: 'y' },
      { packet: packets[3], start: 152, end: 168, attr: 'y' },
      { packet: packets[4], start: 152, end: 168, attr: 'y' }
    ];

    [...hFlows, ...vFlows].forEach((flow, i) => {
      if (!flow.packet) return;

      gsap.timeline({ repeat: -1, delay: i * 0.8 })
        .set(flow.packet, { opacity: 0, attr: { [flow.attr]: flow.start } })
        .to(flow.packet, { opacity: 1, duration: 0.2 })
        .to(flow.packet, {
          attr: { [flow.attr]: flow.end },
          duration: 1.5,
          ease: 'none'
        }, '<')
        .to(flow.packet, { opacity: 0, duration: 0.2 }, '-=0.2')
        .to({}, { duration: 2 });
    });
  }

  /**
   * Project architecture diagrams
   */
  function initProjectDiagrams() {
    const diagrams = document.querySelectorAll('.project__diagram');

    diagrams.forEach(diagram => {
      const svg = diagram.querySelector('.arch-diagram');
      if (!svg) return;

      const nodes = svg.querySelectorAll('.arch-node');
      const lines = svg.querySelectorAll('.arch-line');
      const packets = svg.querySelectorAll('.arch-packet');

      // Initial state
      gsap.set(nodes, { opacity: 0 });
      gsap.set(lines, { strokeDasharray: 100, strokeDashoffset: 100 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: diagram,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });

      // Nodes appear
      tl.to(nodes, {
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
      });

      // Lines draw
      tl.to(lines, {
        strokeDashoffset: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: 'power2.inOut'
      }, '-=0.3');

      // Start packet animation
      if (packets.length) {
        tl.call(() => {
          animateArchPackets(svg, packets);
        });
      }
    });
  }

  /**
   * Animate packets in architecture diagrams
   */
  function animateArchPackets(svg, packets) {
    packets.forEach((packet, i) => {
      // Get path data from packet
      const pathName = packet.dataset.path;
      let animation;

      // Define paths based on diagram type
      if (pathName === 'to-scheduler') {
        animation = { x1: 80, x2: 128, y: 52 };
      } else if (pathName === 'to-workers') {
        animation = { x1: 208, x2: 256, y: 56 };
      } else if (pathName === 'to-db') {
        animation = { x1: 312, x2: 344, y: 54 };
      } else if (pathName === 'to-fluentd') {
        animation = { x1: 152, x2: 184, y: 44, isRect: true };
      } else if (pathName === 'to-elastic') {
        animation = { x1: 240, x2: 272, y: 44, isRect: true };
      }

      if (!animation) return;

      const attr = animation.isRect ? 'x' : 'cx';
      const yAttr = animation.isRect ? 'y' : 'cy';

      gsap.timeline({ repeat: -1, delay: i * 1.5 })
        .set(packet, { 
          opacity: 0, 
          attr: { [attr]: animation.x1, [yAttr]: animation.y } 
        })
        .to(packet, { opacity: 1, duration: 0.2 })
        .to(packet, {
          attr: { [attr]: animation.x2 },
          duration: 1.8,
          ease: 'none'
        }, '<')
        .to(packet, { opacity: 0, duration: 0.2 }, '-=0.2')
        .to({}, { duration: 1.5 });
    });
  }

  /**
   * Handle resize
   */
  function initResizeHandler() {
    let resizeTimer;
    
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 250);
    });
  }

  // Initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.addEventListener('load', () => {
    if (!prefersReducedMotion) {
      ScrollTrigger.refresh();
    }
  });

})();
