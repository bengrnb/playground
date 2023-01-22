const options = {
  background: {
    color: "#FFFFFF", // the canvas background color
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
        enable: true,
        mode: "grab", // this make particles move away from the mouse
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
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
      value: 80,
      density: {
        enable: true,
        value_area: 900
      }
    },
    color: {
      value: "#1e293b"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#1e293b"
      },
      polygon: {
        nb_sides: 5
      },
    },
    opacity: {
      value: .05,
      random: false,
      anim: {
        enable: false,
        speed: 0.1,
        opacity_min: .1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 10,
        size_min: .1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#1e293b",
      opacity: .4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: outerHeight,
      bounce: false,
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