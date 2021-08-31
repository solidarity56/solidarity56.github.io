$(document).ready(function() {
  
  
  // Tooltip above and centered, this is the default setting
  
  $('#demo-tooltip-above').jBox('Tooltip', {
  attach: '.tooltip',
  trigger: 'click'
});
  
  
  // Tooltip below to the right
  
  $('#demo-tooltip-below').jBox('Tooltip', {
    theme: 'TooltipDark',
    position: {
      x: 'right',
      y: 'bottom'
    }
  });
  
  
  // Tooltip with the pointer moved to the right
  
  $('#demo-tooltip-pointer').jBox('Tooltip', {
    theme: 'TooltipDark',
    pointer: 'right:15' // The pointer is moved to the right with a 15 pixel offset
  });
  
  
  // Tooltip at a different target
  
  $('#demo-tooltip-target').jBox('Tooltip', {
    theme: 'TooltipDark',
    target: jQuery('#demo-tooltip-below')
  });
  
  
  // Tooltip with an offset
  
  $('#demo-tooltip-offset').jBox('Tooltip', {
    theme: 'TooltipDark',
    offset: {
      y: -20
    }
  });
  
  
  // Tooltip to the left
  
  $('#demo-tooltip-left').jBox('Tooltip', {
    theme: 'TooltipDark',
    position: {
      x: 'left',
      y: 'center'
    },
    outside: 'x' // Horizontal Tooltips need to change their outside position
  });
  
  
  // Tooltip to the right
  
  $('#demo-tooltip-right').jBox('Tooltip', {
    theme: 'TooltipDark',
    position: {
      x: 'right',
      y: 'center'
    },
    outside: 'x' // Horizontal Tooltips need to change their outside position
  });
  
  
  // Mouse following tooltips have the type 'Mouse' instead of 'Tooltip'
  
  $('#demo-tooltip-mouse').jBox('Mouse', {
    theme: 'TooltipDark',
    content: 'I will follow you'
  });
  
});