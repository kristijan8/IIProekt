class Shoe {
  constructor(id, name, type, description, imgUrl, price) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.description = description;
    this.imgUrl = imgUrl;
    this.price = price;
  }
}
const shoes = [
  new Shoe(
    0,
    "Nike Air Force",
    "Sport Shoes",
    "Running Shoe",
    "https://www.shutterstock.com/image-photo/pavia-italy-april-4-2019-260nw-1359621764.jpg",
    120.0
  ),
  new Shoe(
    1,
    "Adidas Ultraboost",
    "Sport Shoes",
    "Running Shoe",
    "https://i.ebayimg.com/images/g/xbAAAOSwdHVjKnId/s-l1200.webp",
    150.0
  ),
  new Shoe(
    2,
    "New Balance 990",
    "Sport Shoes",
    "Running Shoe",
    "https://i.ebayimg.com/images/g/tSgAAOSwmOFkjFXd/s-l1200.webp",
    100.0
  ),
  new Shoe(
    3,
    "Timberland Boot",
    "Boots",
    "Soccer Cleat",
    "https://st2.depositphotos.com/1525739/5899/i/450/depositphotos_58991611-stock-photo-timberland-6-inch-premium-waterproof.jpg",
    180.0
  ),
  new Shoe(
    4,
    "Dr. Martens 1460",
    "Boots",
    "Soccer Cleat",
    "https://www.shutterstock.com/image-photo/london-england-05052019-dr-martens-600nw-1483409846.jpg",
    130.0
  ),
  new Shoe(
    5,
    "UGG Classic Short",
    "Boots",
    "Soccer Cleat",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq1TXW52eZgj71oq9doZ3PPSrm1D6qcH-vxPO8cUgsLQ&s",
    200.0
  ),
  new Shoe(
    6,
    "Clarks Desert Boot",
    "Classic Shoes",
    "Loafer",
    "https://www.themgoods.com/cdn/shop/products/26155484_W_1_5c475d7b-4b54-42d9-aa97-4563a3801b41.jpg?v=1692276761&width=2000",
    90.0
  ),
  new Shoe(
    7,
    "Gucci Horsebit Loafer",
    "Classic Shoes",
    "Loafer",
    "https://media.gucci.com/style/DarkGray_Center_0_0_980x980/1659723314/307929_BLM00_1000_012_100_0000_Light-Mens-Horsebit-1953-loafer.jpg",
    300.0
  ),
  new Shoe(
    8,
    "Allen Edmonds Strand",
    "Classic Shoes",
    "Brogue",
    "https://www.allenedmonds.com/blob/product-images/39099/ec/40/00391/ec4000391_single_large.jpg",
    250.0
  ),
  new Shoe(
    9,
    "Vans Old Skool",
    "Sport Shoes",
    "Running Shoe",
    "https://www.vans.co.nz/media/catalog/product/v/n/vn-0d3hy28_blk_01.jpg?auto=webp&quality=85&format=pjpg&width=100%25&fit=cover",
    80.0
  ),
];
let storedJsonString = localStorage.getItem("myIntegerArray");
let storedIntegerArray = JSON.parse(storedJsonString);
$().ready(function () {
  $("#buy").on("click", function () {
    let najaven = localStorage.getItem("registered");
    if (najaven == "false") {
      alert("Please log in in to buy");
      return;
    }
    let suma = 0;
    $("#cart>div").each(function () {
      let tekst = $(this).find("#cena").text().split(" ")[1].split("$")[0];
      let cena = parseInt(tekst);
      let kolicina = parseInt($(this).find("input").val());
      suma = suma + kolicina * cena;
    });
    if (suma > 0) {
      let p = $("<p>").html(
        "Successful purchase. Your order amounts to " +
          suma +
          " dollars. You will receive it at the address: " +
          localStorage.getItem("homeAddress") +
          " within 5 business days. We will contact you at the email address: " +
          localStorage.getItem("email") +
          " or the phone: " +
          localStorage.getItem("phone")
      );
      alert(p.prop("innerHTML"));
      $("#container div button").prop("disabled", false);
      $("#cart").children().remove();
    } else {
      alert("Please add items to your cart");
    }
  });

  funkcija();
  funkcija3();
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#container div h4").filter(function () {
      $(this)
        .parent()
        .toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

function funkcija() {
  var container = $("#container");
  for (const shoe of shoes) {
    var novProizvod = $("<div>");
    novProizvod.attr("id", "id" + String(shoe.id));
    novProizvod.addClass("klasa");
    let ime = $("<h4>");
    let p1 = $("<p>"),
      p2 = $("<p>"),
      p3 = $("<p>"),
      likes = $("<p>");
    ime.text(shoe.name);
    p1.text("Type: " + shoe.type);
    p2.text("Description: " + shoe.description);
    p3.text("Price: " + shoe.price + "$");
    p3.attr("id", "cena");
    let img = $("<img>");
    img.attr("src", shoe.imgUrl);
    novProizvod.append(ime);
    novProizvod.append(p1);
    novProizvod.append(p2);
    novProizvod.append(img);
    novProizvod.append(p3);
    likes.text("Likes: " + String(storedIntegerArray[shoe.id]));
    likes.addClass("likes");
    novProizvod.append(likes);

    let LikeKopce = $("<button>");
    LikeKopce.text("Like");
    LikeKopce.attr("id", "kopce" + String(shoe.id));
    LikeKopce.addClass("likes-btn");
    novProizvod.append(LikeKopce);
    LikeKopce.on("click", function (event) {
      if (localStorage.getItem("registered") != "false") {
        event.preventDefault();
        let broj = parseInt(likes.text().split(" ")[1]);
        broj = broj + 1;
        storedIntegerArray[shoe.id] = broj;
        likes.text("Likes: " + String(broj));
        let jsonString = JSON.stringify(storedIntegerArray);
        localStorage.setItem("myIntegerArray", jsonString);
        $(this).off("click");
      }
    });

    var button1 = $("<button>");
    novProizvod.append(button1);
    button1.text("Add to cart");
    button1.on("click", function (event) {
      event.preventDefault();
      let roditel = $(this).parent();
      let klonirano = roditel.clone();
      let id = roditel.attr("id");
      klonirano.attr("id", "cartEl" + String(id));
      let cart = $("#cart");
      cart.append(klonirano);
      $(this).prop("disabled", "true");
      funkcija2(id, event);
    });
    container.append(novProizvod);
  }
}
function funkcija2(rodID, event) {
  event.preventDefault();
  let cart = $("#cart");
  let p = $("<p>");
  p.text("Quantity: ");
  let kojid = "cartEl" + String(rodID);
  let komu = $("#" + kojid);
  komu.removeClass("klasa");
  komu.addClass("klasa2");
  $("#cart div button").hide();
  let kolicina = $("<input>");
  kolicina.attr("type", "number");
  kolicina.attr("min", 1);
  kolicina.attr("step", 1);
  kolicina.attr("value", 1);
  komu.append(p);
  komu.append(kolicina);
  let pomosenParagraf = $("<p>");
  pomosenParagraf.text("Remove from cart");
  pomosenParagraf.css("background-color", "red");
  pomosenParagraf.css("font-size", "xx-large");
  komu.prepend(pomosenParagraf);
  let pom = rodID;
  pomosenParagraf.on("click", function (event) {
    event.preventDefault();
    $("#" + rodID + " button").prop("disabled", false);
    komu.remove();
  });
}
function funkcija3() {
  let najaven = localStorage.getItem("registered");
  let username = localStorage.getItem("username");
  if (najaven != "false") {
    document.getElementById("username-container").innerHTML = username;
  }
}
function logOut(event) {
  event.preventDefault();
  localStorage.setItem("firstName", null);
  localStorage.setItem("lastName", null);
  localStorage.setItem("username", null);
  localStorage.setItem("email", null);
  localStorage.setItem("bankCard", null);
  localStorage.setItem("homeAddress", null);
  localStorage.setItem("phone", null);
  localStorage.setItem("registered", false);
  window.location.replace("home.html");
}
