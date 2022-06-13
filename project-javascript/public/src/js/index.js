function headerSearch(){
    var search = $("#headerSearch").val()
    $("#products").html("")
    
    if(search==""){
        alert("enter valid search")
        onProductLoad();
    } else if(search=="lenovo" || search=="dell" || search=="macbook" || search=="hp") {
        $.ajax({
            method: "GET",
            url: `http://localhost:2901/products/get/${search}`,
            success: function(singleProduct){
                $.each(singleProduct, function(key, value){
                 $(`
                     <div class="card cardContainer mt-4 ms-3">
                         <div class="laptopImg mt-3"><span class="bi bi-heart-fill heartIcon"></span><img src=${value.image} class="card-img-top cardImg"></div>
                         <div class="card-header Laptoptitle">${value.title}</div>
                         <div class="card-body">
                             <p class="description">${value.description}</p>
                             <p>&#8377; ${value.price}</p>
                             <p><span class="bi bi-star-fill text-warning"></span><span class="bi bi-star-fill text-warning"></span><span class="bi bi-star-half text-warning"></span><span class="border border-success ms-1 me-1 bg-success rounded text-white pe-1"> ${value.rating.rate}</span> <b>Ratings</b></p>
                             <p>${value.rating.count} <b>Reviews</b></p>
                         </div>
                         <div class="card-footer mb-3"><button class="btn btn-danger w-100 addToCard">Add to Card</button></div>
                     </div>
                 `).appendTo('#products')
                })
            }
        })
    } else{
        alert("This Product NOT Found")
    }
}

function onLoadPage(type){
    $("#headerProduct").hide();
    $("#headerLogin").show();
    $("#footerProduct").hide()
    $("#footerLogin").show();
    var templateUrl;
    switch(type){
        case "signIn":
            templateUrl = "/templete/signIn.htm";
            break;
        case "registretion":
            templateUrl = "/templete/registration.htm";
            break;
        case "forgot":
            templateUrl = "/templete/forgot.htm";
            break;
    }
    $.ajax({
        url: templateUrl,
        method: "GET",
        success: function(response){
            $("main").html(response)
            $("body").css('background-color', 'whitesmoke')
        },
        error: function(error){
            console.log(error)
        }
    })
}
function signIn(){
    onLoadPage("signIn")
}
function registration(){
    onLoadPage("registretion")
}

function forgotPass(){
    onLoadPage("forgot")
}

$(function(){
    $("#registerUser").click(function(){
        var registerData = {
            userName: $('#userName').val(),
            emailId: $('#emailId').val(),
            password: $('#userPass').val(),
            confirmPass: $('#confirmPass').val()
        }

        if(registerData.userName==""){
            $('#mandetoryUserName').show();
        } else if(registerData.emailId==""){
            $('#mandetoryEmail').show();
            $('#mandetoryUserName').hide();
            $('#mandetoryUserName').hide();
        } else if(registerData.password==""){
            $('#mandetoryPass').show();
            $('#mandetoryEmail').hide();
            $('#mandetoryUserName').hide();
        } else if(registerData.confirmPass==""){
            $('#mandetoryPassConfirm').html("password mandetory");
            $('#mandetoryPassConfirm').show();
            $('#mandetoryPass').hide()
            $('#mandetoryEmail').hide();
            $('#mandetoryUserName').hide();
        }else if(registerData.password != "" && registerData.password == registerData.confirmPass){
            $.ajax({
                method: "POST",
                data: registerData,
                url: "http://localhost:2901/userDetails/registration"
            })
            alert('submitted successfully')
            signIn()
        } else {
            $('#mandetoryPassConfirm').show();
            $('#mandetoryPass').hide()
            $('#mandetoryEmail').hide();
            $('#mandetoryUserName').hide();
            $('#mandetoryPassConfirm').html("password not match");
        }   
    })
})

$(function(){

    $("#signInbtn").click(function(){
        $.ajax({
            url: "http://localhost:2901/getloginDetails",
            method: "GET",
            success: function(response){
                $.each(response, function(key, value){
                    if(value.userName==$('#userName').val() && value.password==$('#userPassword').val()){
                        productLoad();                                               
                    } else {
                        $(".invalidSignIn").show();
                    }
                })
            }
        })
    })
})

$("#clickEye").click(function(){
    $(".showtext").attr('type', 'text');
})
$("#clickEyeConfirmPass").click(function(){
    $(".showConfirmPass").attr('type', 'text');
})

function privacyPolicy(){
    $("#headerProduct").hide();
    $("#headerLogin").show();
    $("#footerProduct").show()
    $("#footerLogin").hide();
    $.ajax({
        method: "GET",
        url: "/templete/privacyPolicy.htm",
        success: function(response){
            $("main").html(response);
        }
    })
}
function conditionOfUses(){
    $("#headerProduct").hide();
    $("#headerLogin").show();
    $("#footerProduct").show()
    $("#footerLogin").hide();
    $.ajax({
        method: "GET",
        url: "/templete/conditionsOfUse.htm",
        success: function(response){
            $("main").html(response)
        }
    })
}

