$(document).ready(function () {
    $('#removeModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // 選則當初觸發事件的按鈕
        var title = button.data('title') // 使用 data-* 來取得特定內容
        var modal = $(this)
        modal.find('.modal-title').text('確認刪除' + title + '？') // 寫入資料
        modal.find('.modal-text').text('是否確認刪除' + title + '？') // 寫入資料


    });

    var button;
    var deleteTr;
    $('#removeModal').on('show.bs.modal', function (event) {
        button = $(event.relatedTarget); // 選則當初觸發事件的按鈕
        deleteTr = button.parent().parent();
    });
    
    // var deleteArray = ['a','a'];
    // var cartNum = deleteArray.length;
    // console.log(deleteArray, deleteArray.length);
    
    
    
    var cartNum=2;
    $("#delete-submit").click(function (e) {
        // console.log('cartNum', cartNum);
        deleteTr.html("");
        cartNum -= 1 ;
        $('.cart-num').text(cartNum);
        console.log('cartNum', cartNum);
        alert("已刪除商品");
        // deleteArray.shift();
        // console.log(deleteArray, deleteArray.length);
        if (cartNum <= 0) {
            // console.log('11111');
            $('#cart-content').html('<div class="text-center">這裡還沒有東西喔！</br>快來加入新商品吧</div>');
        }
    });
    


    $('.no-href').click(function (e) {
        $(this).find('a');
        e.preventDefault();
    });


    $("#submit-button").click(function () {
        console.log(11111);
        if ($("#inputName").val() == "") {
            // alert("你尚未填寫姓名");
            // eval("document.form1['name'].focus()");
         } else if ($("#inputEmail").val() == "") {
            // alert("你尚未填寫Email");
            // eval("document.form1['phone'].focus()");
        } else if ($("#inputPostalcode").val() == "") {
            // alert("你尚未填寫地址");
            // eval("document.form1['address'].focus()");
        } else if ($("#inputAddress").val() == "") {
       } else {
            $('form').attr('onclick','return false')
          $('#check-input').addClass('d-none');
            $('#check-done').removeClass('d-none').addClass('d-block');
       };
/*         if ($("#inputName").val() == "") {
            alert("你尚未填寫姓名");
            eval("document.form1['name'].focus()");
        } else if ($("#inputEmail").val() == "") {
            alert("你尚未填寫Email");
            eval("document.form1['phone'].focus()");
        } else if ($("#address").val() == "") {
            alert("你尚未填寫地址");
            eval("document.form1['address'].focus()");
        } else {
            $('#check-input').addClass('d-none');
            $('#check-done').removeClass('d-none').addClass('d-block');
        } */

    });

    // var id = button.parent().parent().attr('id');






    /* 
            $("#delete-item01, #delete-item02").click(function (e) { 
                e.preventDefault();
                var 
                $(".delete-text").text();
            });
            $("#delete-submit").click(function (e) {
                e.preventDefault();
                $("#delete-item01, #delete-item02").find().text("是否確認刪除" + "？");
            });
     */




    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
        'use strict';
        window.addEventListener('load', function () {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function (form) {
                form.addEventListener('submit', function (event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);
    });
});