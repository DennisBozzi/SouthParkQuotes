 
function recarregar() {

    const api = "https://southparkquotes.onrender.com/v1/quotes";

    $.getJSON(api, function (dados) {

        $("#texto").html(dados[0].quote);
        $("#nome").html(dados[0].character);
        carregarImagem(dados[0].character);

    });

}

recarregar();

function carregarImagem(valor) {

    $(".imgReload").addClass("spin");

    setTimeout(function () {
        $(".imgReload").removeClass("spin");
    }, 500);

    switch (valor) {
        case "Cartman":
            $("#divImagem").html('<img class="profile" src="images/Cartman.jpeg" alt="">');
            break;
        case "Stan":
            $("#divImagem").html('<img class="profile" src="images/Stan.jpeg" alt="">');
            break;
        case "Kyle":
            $("#divImagem").html('<img class="profile" src="images/Kyle.jpeg" alt="">');
            break;
        case "Mr. Garrison":
            $("#divImagem").html('<img class="profile" src="images/Mr Garrison.jpeg" alt="">');
            break;
        case "Randy":
            $("#divImagem").html('<img class="profile" src="images/Randy.jpeg" alt="">');
            break;
        case "Mr. Mackey":
            $("#divImagem").html('<img class="profile" src="images/Mr Mackey.jpeg" alt="">');
            break;
        case "Jimbo":
            $("#divImagem").html('<img class="profile" src="images/Jimbo.jpeg" alt="">');
            break;
        case "Chef":
            $("#divImagem").html('<img class="profile" src="images/Chef.jpeg" alt="">');
            break;
        case "Butters":
            $("#divImagem").html('<img class="profile" src="images/Butters.jpeg" alt="">');
            break;
        case "Honey Boo Boo":
            $("#divImagem").html('<img class="profile" src="images/Honey Boo.jpeg" alt="">');
            break;
        case "Towelie":
            $("#divImagem").html('<img class="profile" src="images/Towelie.jpeg" alt="">');
            break;
        case "Timmy":
            $("#divImagem").html('<img class="profile" src="images/Timmy.jpeg" alt="">');
            break;
        case "Mr. Slave":
            $("#divImagem").html('<img class="profile" src="images/Mr Slave.jpeg" alt="">');
            break;
        case "Newscaster Ned":
            $("#divImagem").html('<img class="profile" src="images/Ned Gerblanski.png" alt="">');
            break;
        case "Mrs. Broflovski":
            $("#divImagem").html('<img class="profile" src="images/Mrs Broflovski.png" alt="">');
            break;
        case "Sharon Marsh":
            $("#divImagem").html('<img class="profile" src="images/Sharon Marsh.jpeg" alt="">');
            break;
        case "Matthew McConaughey":
            $("#divImagem").html('<img class="profile" src="images/Matthew.jpg" alt="">');
            break;
        default:
            $("#divImagem").html('');
            break;
    }
}

carregarImagem();