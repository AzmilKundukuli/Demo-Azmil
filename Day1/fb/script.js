$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:8
            },
            sname:{
                required:true,
                minlength:4
            },
            emailAddress:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength:6
            },
            day:{
                required:true
            },
            one:{
                required:true
            }
            
        },
        messages:{
            fname:{
                required:"enter first name",
                minlength:"atleast 6 char"
            }
        }

    })
})