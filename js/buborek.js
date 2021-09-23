$(document).ready(function () {


  // SZÖVEGBUBORÉKOK 

  $('#szoveg1').jBox('Tooltip', {
    attach: '.tooltip',
    trigger: 'mouseenter',
    position: {
      x: 'right',
      y: 'top'
    },
    width: 270
  });

  $('#szoveg2').jBox('Tooltip', {
    attach: '.tooltip',
    trigger: 'mouseenter',
    position: {
      x: 'left',
      y: 'top'
    },
    width: 260
  });

  $('#szoveg3').jBox('Tooltip', {
    attach: '.tooltip',
    trigger: 'mouseenter',
    position: {
      x: 'center',
      y: 'top'
    },
    width: 260
  });

  $('#szoveg4').jBox('Tooltip', {
    attach: '.tooltip',
    trigger: 'mouseenter',
    position: {
      x: 'center',
      y: 'top'
    },
    width: 260
  });
  $('#szoveg5').jBox('Tooltip', {
    attach: '.tooltip',
    trigger: 'mouseenter',
    position: {
      x: 'center',
      y: 'top'
    },
    width: 260
  });
  $('#szoveg6').jBox('Tooltip', {
    attach: '.tooltip',
    trigger: 'mouseenter',
    position: {
      x: 'right',
      y: 'top'
    },
    width: 185
  });
  $('#szoveg7').jBox('Tooltip', {
    attach: '.tooltip',
    trigger: 'mouseenter',
    position: {
      x: 'right',
      y: 'top'
    },
    width: 285
  });
  $('#szoveg8').jBox('Tooltip', {
    attach: '.tooltip',
    trigger: 'mouseenter',
    position: {
      x: 'right',
      y: 'top'
    },
    outside: 'x',
    offset: { x: -25, y: -30 },
    width: 200
  });


  // Gondolat

  $('#szoveg9').jBox('Tooltip', {
    attach: '.tooltip',
    trigger: 'mouseenter',

    position: {
      x: 'left',
      y: 'top'
    },
    offset: { x: -15, y: -50 },
    width: 200,
    addClass: 'thought'
  });

  $('#szoveg10').jBox('Tooltip', {
    attach: '.tooltip',
    trigger: 'mouseenter',

    position: {
      x: 'left',
      y: 'top'
    },
    offset: { x: -15, y: -50 },
    width: 200,
    addClass: 'thought'
  });

});