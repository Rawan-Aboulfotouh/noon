$("#home").animate({width:"100%"},function(){
    $("#home").animate({height:"100vh"},1000,function(){
        $("#home h1").fadeIn (1000,function(){
            $(".col-md-4:nth-child(1)").slideDown(1000, function(){
                $(".col-md-4:nth-child(2)").slideDown(1000,function(){
                    $(".col-md-4:nth-child(3)").slideDown(1000)

                })
                
                
            })
        })
        
    })
    
})