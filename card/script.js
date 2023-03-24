$('.close-button').on('click', function() {
    $(this).closest('.popup').hide();
  });

$('.sections').on('click', function() {
var popupId = $(this).data('popup');
$('.popup').hide();
$('#' + popupId).show();
});

const btnCssButtons = document.querySelector('.btn-cssbuttons');
const tooltip = btnCssButtons.querySelector('.tooltip');

btnCssButtons.addEventListener('click', function() {
tooltip.classList.toggle('tooltip-show');
});