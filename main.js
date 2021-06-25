console.log("script loaded");

/*API DATA 
*/
var productData = {
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "photos": [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "size": [
      1,
      1,
      0,
      1,
      0
    ],
    "isAccessory": false,
    "brand": "United Colors of Benetton",
    "price": 2599
}

var product_Title = productData["name"];
var product_brand = productData["brand"];
var product_Desc = productData["description"];
var product_Price = productData["price"];

document.getElementById("name").innerHTML = product_Title;
document.getElementById("brand").innerHTML = product_brand;
document.getElementById("description").innerHTML = product_Desc;
document.getElementById("price").innerHTML = product_Price;


var mainProduct_img_left = document.getElementById("productImg");



/*
    Try to change the Image on click event.
    https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg

*/
mainProduct_img_left.src =  document.getElementById("img0").src;
document.getElementById("img0").className="active";

document.getElementById("img0").addEventListener("click", function() {
    mainProduct_img_left.src =  document.getElementById("img0").src;
    document.getElementById("img0").className="active";
    document.getElementById("img1").classList.remove("active");
    document.getElementById("img2").classList.remove("active");
    document.getElementById("img3").classList.remove("active");
    document.getElementById("img5").classList.remove("active");
  });
  document.getElementById("img1").addEventListener("click", function() {
    mainProduct_img_left.src =  document.getElementById("img1").src;
    document.getElementById("img1").className="active";
    document.getElementById("img0").classList.remove("active");
    document.getElementById("img2").classList.remove("active");
    document.getElementById("img3").classList.remove("active");
    document.getElementById("img5").classList.remove("active");
  });
  document.getElementById("img2").addEventListener("click", function() {
    mainProduct_img_left.src =  document.getElementById("img2").src;
    document.getElementById("img2").className="active";
    document.getElementById("img0").classList.remove("active");
    document.getElementById("img1").classList.remove("active");
    document.getElementById("img4").classList.remove("active");
    document.getElementById("img3").classList.remove("active");
    document.getElementById("img5").classList.remove("active");
  });
  document.getElementById("img3").addEventListener("click", function() {
    mainProduct_img_left.src =  document.getElementById("img3").src;
    document.getElementById("img3").className="active";
    document.getElementById("img0").classList.remove("active");
    document.getElementById("img1").classList.remove("active");
    document.getElementById("img2").classList.remove("active");
    document.getElementById("img4").classList.remove("active");
    document.getElementById("img5").classList.remove("active");
  });

  document.getElementById("img4").addEventListener("click", function() {
    mainProduct_img_left.src =  document.getElementById("img4").src;
    document.getElementById("img4").className="active";
    document.getElementById("img0").classList.remove("active");
    document.getElementById("img1").classList.remove("active");
    document.getElementById("img2").classList.remove("active");
    document.getElementById("img3").classList.remove("active");
    document.getElementById("img5").classList.remove("active");
  });


  document.getElementById("img5").addEventListener("click", function() {
    mainProduct_img_left.src =  document.getElementById("img5").src;
    document.getElementById("img5").className="active";
    document.getElementById("img0").classList.remove("active");
    document.getElementById("img1").classList.remove("active");
    document.getElementById("img2").classList.remove("active");
    document.getElementById("img3").classList.remove("active");
    document.getElementById("img4").classList.remove("active");

    console.log("")
  });





