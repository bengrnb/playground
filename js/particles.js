const options = {
  background: {
    color: "#f1f5f9", // the canvas background color
  },
  interactivity: {
    detect_on: 'window',
    events: {
      onClick: {
        // this handles the mouse click event
        enable: false,
        mode: "push", // this adds particles
      },
      onHover: {
        // this handles the mouse hover event
        enable: false,
        mode: "grab",
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 100,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: .4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      },
    }
  },
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 1020
      }
    },
    color: {
      value: "#cbd5e1"
    },
    shape: {
      type: ["circle", "triangle", "polygon"],
      stroke: {
        width: 0,
        color: "#cbd5e1"
      },
      polygon: {
        nb_sides: 5
      },
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: false,
        speed: .1,
        opacity_min: .1,
        sync: false
      }
    },
    size: {
      value: 6,
      random: true,
      anim: {
        enable: true,
        speed: 10,
        size_min: .1,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#94a3b8",
      opacity: .4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: outerHeight,
      bounce: true,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  retina_detect: true
};

// tsParticles.load has two parameters, the first one is the id of the container, the second one is an object with the options
tsParticles.load("particles-js", options);