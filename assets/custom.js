  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    centerMode: false,
    vertical: true,
    focusOnSelect: true,
    responsive: [
        {
          breakpoint: 767,
          settings: {
            vertical: false,
          }
        }
      ]
  }); 
 //product slider change on click
 const slide_li = document.querySelectorAll(".slider-for li")
 $(document).on("click",".product__info-container fieldset.product-form__input.sel-Color label",function(e){
    const sel = $(this).attr("data-x");
    const filt = Array.from(slide_li).find(e=>{ 
        const dataVal = e.dataset.var; 
        return dataVal == sel;
     });
    $('.slider-nav').slick('slickGoTo', $(filt).attr('data-slick-index'));   
 });




 $( document ).ready(function() {
    const divVal = document.querySelectorAll(".git-sel > div");
   function checkSoldout() {
       
    //   const selectedVal = document.querySelectorAll(".get-input fieldset");
   

        $("fieldset.product-form__input.sel-Size input").each(function(){
            const checkedVal = $(this).is(':checked');
            const tr = $(this).val().toLowerCase();
            const input = $(this).next("label");
            const inputThis = $(this);
            $(".git-sel > div").each(function(index,val){
                myArray = $(this).attr("data-class").split("__"); 
                const fl =  myArray.filter((e)=>{
                   return Array.from(e);
                })
                console.log(fl)
                
                if((checkedVal != true) && tr == myArray[0]){ 
                    inputThis.removeAttr('checked');
                    input.addClass("active")
                    //console.log(myArray[0])
                        $("fieldset.product-form__input.sel-Color input").each(function(){
                            const checkedVal2 = $(this).is(':checked');
                            const tr2 = $(this).val().toLowerCase();
                            const input2 = $(this).next("label");
                            const inputThis2 = $(this);
                                if((checkedVal2 != true) && tr2 == myArray[1]){ 
                                    inputThis2.removeAttr('checked');
                                    input2.addClass("active")
                                    //console.log($(this).val())
                                }
                        })


                        $("fieldset.product-form__input.sel-Style input").each(function(){
                            const checkedVal3 = $(this).is(':checked');
                            const tr3 = $(this).val().toLowerCase();
                            const input3 = $(this).next("label");
                            const inputThis3 = $(this);
                           // console.log(tr3)
                                if((checkedVal3 != true) && tr3 == myArray[2]){ 
                                    inputThis3.removeAttr('checked');
                                    input3.addClass("active")
                                   // console.log($(this).val())
                                }
                        })
              }
            })
           
            
            if(checkedVal == true && ($(this).val().toLowerCase()) == myArray[0]) {
                $(this).addClass("active")
                console.log(myArray[0])
            }
        })
 
        }

  
   $(document).on("click", ".product-form__input label" ,function(){
    $(this).prev("input").trigger("click");
    checkSoldout();
   })

   checkSoldout();
  });