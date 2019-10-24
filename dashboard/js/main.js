/* ---- particles.js config ---- */

particlesJS("particles-js", {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      }
    },
    opacity: {
      value: 0.2,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 11,
      random: true,
      opacity: 0.4,
      anim: {
        enable: false,
        speed: 30,

        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 80,
      color: "#ffffff",
      opacity: 0.1,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
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
        size: 20,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});

// overall chart
$(document).ready(function() {
  //chart overall
  var ctx = $("#chart-overall");

  var data = {
    labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
    datasets: [
      {
        label: "RESOLVED",
        data: [-1.5, -0.7, -0.9, -0.5, -0.4, -0.7, -1.5],
        borderWidth: 1,
        backgroundColor: "#02ce9d",
        borderColor: "#02ce9d",
        fill: false,
        lineTension: 0.5,
        pointRadius: 0
      },
      {
        label: "OVERALL TASK",
        data: [-0.5, -0.2, -1.3, 0.3, 0, -0.8, 0, 1.5],
        borderWidth: 1,
        backgroundColor: "#ff7007",
        borderColor: "#ff7007",
        fill: false,
        lineTension: 0.5,
        pointRadius: 0
      }
    ]
  };

  var options = {
    scales: {
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "INCOMING TASK"
          },

          gridLines: {
            display: true,
            borderDash: [5]
          }
        }
      ]
    },
    legend: {
      display: true,
      labels: {
        symbol: "rect",
        position: "top",
        fulllwidth: "true",
        boxWidth: 13,
        boxHeight: 5
      }
    }
  };

  Chart.defaults.global.defaultFontFamily = "Roboto";
  var chart = new Chart(ctx, {
    type: "line",
    data: data,
    options: options
  });

  //chart Resolved
  var ctx1 = $("#chart-resolved ");

  var data1 = {
    labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
    datasets: [
      {
        label: "RESOLVED",
        data: [-1.5, -0.3, 0.5, -0.5, 0.3, -0.3, -0.5, 1.0],
        borderWidth: 1.5,
        backgroundColor: "#02ce9d",
        borderColor: "#02ce9d",
        fill: false,
        lineTension: 0.5,
        pointRadius: 0
      }
    ]
  };

  var options1 = {
    scales: {
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Resolved by bot"
          },

          gridLines: {
            display: true,
            borderDash: [5]
          }
        }
      ]
    },
    legend: {
      display: true,
      labels: {
        fontColor: "#fff",
        fulllwidth: "true",
        boxWidth: 0,
        boxHeight: 0
      }
    }
  };

  Chart.defaults.global.defaultFontFamily = "Roboto";
  var chart1 = new Chart(ctx1, {
    type: "line",
    data: data1,
    options: options1
  });

  //donut chat
  // Seed data to populate the donut pie chart
  var seedData = [
    {
      value: 5
    },
    {
      value: 15
    },
    {
      value: 25
    }
  ];

  // Define size & radius of donut pie chart
  var width = 220,
    height = 220,
    radius = Math.min(width, height) / 2;

  // Define arc colours
  var colour = d3.scaleOrdinal(["#ff4229", "#ffa429", "#02ce9d"]);

  // Define arc ranges
  var arcText = d3.scaleOrdinal().range([0, width]);

  // Determine size of arcs
  var arc = d3
    .arc()
    .innerRadius(radius - 15)
    .outerRadius(radius - 10);

  // Create the donut pie chart layout
  var pie = d3
    .pie()
    .value(function(d) {
      return d["value"];
    })
    .sort(null);

  // Append SVG attributes and append g to the SVG
  var svg = d3
    .select("#donut-chart")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + radius + "," + radius + ")");

  // Define inner circle
  svg
    .append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 100)
    .attr("fill", "#fff");

  // Calculate SVG paths and fill in the colours
  var g = svg
    .selectAll(".arc")
    .data(pie(seedData))
    .enter()
    .append("g")
    .attr("class", "arc")

    // Make each arc clickable
    .on("click", function(d, i) {
      window.location = seedData[i].link;
    });

  // Append the path to each g
  g.append("path")
    .attr("d", arc)
    .attr("fill", function(d, i) {
      return colour(i);
    });

  // mobile menu
  $(".menu-btn").on("click", function() {
    $(".main-nav").addClass("open-menu");
  });
  $(".close-btn").on("click", function() {
    $(".main-nav").removeClass("open-menu");
  });
});
