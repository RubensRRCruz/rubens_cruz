$(document).ready(function() {
    // Activate the gallery carousel
    $('#gallery-carousel').carousel();
  
    // Enable gallery image lightbox
    $('.gallery-item img').click(function() {
      var src = $(this).attr('src');
      var img = '<img src="' + src + '" class="img-responsive"/>';
  
      // Start of new code
      var index = $(this).parent().index();
      var html = '';
      html += img;
      html += '<div style="height:25px;clear:both;display:block;">';
      html += '<a class="controls next" href="' + (index + 2) + '"><i class="fa fa-chevron-right"></i></a>';
      html += '<a class="controls previous" href="' + (index) + '"><i class="fa fa-chevron-left"></i></a>';
      html += '</div>';
  
      $('#myModal').modal();
      $('#myModal').on('shown.bs.modal', function() {
        $('#myModal .modal-body').html(html);
        // End of new code
  
        // Start of old code
        $('a.controls').trigger('click');
        // End of old code
      });
      $('#myModal').on('hidden.bs.modal', function() {
        $('#myModal .modal-body').html('');
      });
    });
  });
  