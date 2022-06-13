function productLoad(){
    $("#headerProduct").show();
    $("#headerLogin").hide();
    $("#footerProduct").show()
    $("#footerLogin").hide();
    $.ajax({
        url: "/templete/product.htm",
        method: "GET",
        success: function(responce){
            $("main").html(responce)
        },
        error: function(error){
            console.log(error)
        }
    })
}

function onProductLoad(){
    $.ajax({
        method: "GET",
        url: "http://localhost:2901/categories",
        success: function(data){
            $.each(data, function(key, value){
                $(`<option>${value.category}</option>`).appendTo("#categories");
            })
        }
    })

    $.ajax({
       method: "GET",
       url: "http://localhost:2901/products",
       success: function(product){
        $.each(product, function(key, value){
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
}
onProductLoad();

function forgotPasswordSend(){
    var email = $("#emailId").val();
    
    $.ajax({
        method: "GET",
        url: "http://localhost:2901/getloginDetails",
        success: function(data){
            $.each(data, function(key, value){
                if(email==value.emailId){
                    $("#passShowAfterEmail").show()
                    $("#mandetoryEmail").hide()
                    $("#passShowAfterEmail").html("This is Your Password: " + " " + value.password);
                }if(email==""){
                    $("#mandetoryEmail").show()
                } else {
                    $("#mandetoryEmail").show()
                    $("#mandetoryEmail").html("email not found pls register")
                }
            })
        }
    })
}

function sellerAddProducts(){
    $("#headerProduct").hide();
    $("#headerLogin").show();
    $.ajax({
        method: "GET",
        url: "/templete/adminProduct.htm",
        success: function(responce){
            $("main").html(responce)
        },
        error: function(error){
            console.log(error)
        }
    })
}

function getSellerProductDetails(){
   var detailsObj = {
         title: $("#title").val(),
         price: $("#price").val(),
         description: $("#description").val(),
        category: $("#category").val(),
        image: $("#image").val()
   }
   $.ajax({
       method: "POST",
       url: "http://localhost:2901/addProduct/Details",
       data: detailsObj
   })
   alert("submitted done")
}
