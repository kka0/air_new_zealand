  $(document).ready(function(){
      $('.visual_main').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 2500,
          arrows: false,
          dots: true,
          pauseOnFocus: false,
      });
  });

  $(function(){
    $('#decreaseQuantity').click(function(e){
      e.preventDefault();
      var stat = $('#numberUpDown').text();
      var num = parseInt(stat,10);
      num--;
      if(num<0){
      alert('탑승객 수를 선택하세요.');
      num =1;
      }
      $('#numberUpDown').text(num);
      });
      $('#increaseQuantity').click(function(e){
      e.preventDefault();
      var stat = $('#numberUpDown').text();
      var num = parseInt(stat,10);
      num++;
      
      if(num>9){
      alert('10명 이상의 단체 승객은 단체 구매 서비스를 이용해주세요.');
      num=9;
      }
      $('#numberUpDown').text(num);
      });
    });

  $(function(){
    $('#decrease').click(function(e){
      e.preventDefault();
      var stat = $('#UpDown').text();
      var num = parseInt(stat,10);
      num--;
      if(num<0){
      alert('탑승객 수를 선택하세요.');
      num =0;
      }
      $('#UpDown').text(num);
      });
      $('#increase').click(function(e){
      e.preventDefault();
      var stat = $('#UpDown').text();
      var num = parseInt(stat,10);
      num++;
      
      if(num>9){
      alert('10명 이상의 단체 승객은 단체 구매 서비스를 이용해주세요.');
      num=9;
      }
      $('#UpDown').text(num);
      });
    });

    $(function(){
        $('#decre').click(function(e){
        e.preventDefault();
        var stat = $('#number').text();
        var num = parseInt(stat,10);
        num--;
        if(num<0){
        alert('탑승객 수를 선택하세요.');
        num =1;
        }
        $('#number').text(num);
        });
        $('#incre').click(function(e){
        e.preventDefault();
        var stat = $('#number').text();
        var num = parseInt(stat,10);
        num++;
        
        if(num>9){
        alert('10명 이상의 단체 승객은 단체 구매 서비스를 이용해주세요.');
        num=9;
        }
        $('#number').text(num);
        });
      });


    $(function(){
      $("#date_01").datepicker({ minDate: 0});
    });

    $.datepicker.setDefaults({
      dateFormat: 'yymmdd',

      monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
      monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
      dayNames: ['일', '월', '화', '수', '목', '금', '토'],
      dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
      dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
      showMonthAfterYear: true,
      yearSuffix: '년'
  });


    $(function(){
      $("#date_02").datepicker({ minDate: 0});
    });

    $.datepicker.setDefaults({
      dateFormat: 'yymmdd',

      monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
      monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
      dayNames: ['일', '월', '화', '수', '목', '금', '토'],
      dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
      dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
      showMonthAfterYear: true,
      yearSuffix: '년'
  });


