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

    // Üzlet

    $('#uzlet1').jBox('Tooltip', {
      attach: '.tooltip',
      trigger: 'mouseenter',
      theme: 'TooltipDark',
      title: '<strong>Gerbeaud Royal Pavilon</strong>',
      position: {
        x: 'center',
        y: 'top'
      },
      width: 500,
    });

    $('#uzlet2').jBox('Tooltip', {
      attach: '.tooltip',
      trigger: 'mouseenter',
      theme: 'TooltipDark',
      title: '<strong>Gerbeaud a Royal Nagy Szállodásban</strong>',
      position: {
        x: 'center',
        y: 'top'
      },
      width: 400,
    });

    $('#uzlet3').jBox('Tooltip', {
      attach: '.tooltip',
      trigger: 'mouseenter',
      theme: 'TooltipDark',
      title: '<strong>Duna utcai csokoládégyár</strong>',
      position: {
        x: 'center',
        y: 'top'
      },
      width: 400,
    });

    $('#uzlet4').jBox('Tooltip', {
      attach: '.tooltip',
      trigger: 'mouseenter',
      theme: 'TooltipDark',
      title: '<strong>Mozsár utca 14.</strong>',
      position: {
        x: 'center',
        y: 'top'
      },
      width: 400,
    });

    $('#uzlet5').jBox('Tooltip', {
      attach: '.tooltip',
      trigger: 'mouseenter',
      theme: 'TooltipDark',
      title: '<strong>Gizella tér 7.</strong>',
      position: {
        x: 'center',
        y: 'top'
      },
      width: 400,
    });

    $('#uzlet6').jBox('Tooltip', {
      attach: '.tooltip',
      trigger: 'mouseenter',
      theme: 'TooltipDark',
      title: '<strong>Kossuth Lajos utca 20. és Andrássy út 29.</strong>',
      position: {
        x: 'center',
        y: 'top'
      },
      width: 400,
    });

});