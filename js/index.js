$(document).ready(function () {
    getPokemonListV2();
  
    $(document).on("click", "#btn-get-data", function () {
      getPokemonListV2();
    });
  
    function getPokemonListV1() {
      $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon",
        method: "GET",
      }).done(function (resp) {
        var listadoPomemon = resp.results;
        listadoPomemon.forEach(function (pokemon) {
          var template = `<p><h1 class="pokemon" pokemonid="1">${pokemon.name}</h1></p>`;
          $("#data-content").append(template);
        });
      });
    }
  
    function getPokemonListV2() {
      $(".star-container").html("<img src='loading.gif' />");
      $.ajax({
          url: "https://pokeapi.co/api/v2/pokemon",
          method: "GET",
      }).done(function (resp) {
          setTimeout(function () {
              $(".star-container").html("");
              var listadoPomemon = resp.results;
              listadoPomemon.forEach(function (pokemon) {
                  var pokemonId = pokemon.url.split("/")[6]; // ID del Pokémon
                  var template = `
                    <div class="star">
                      <a href="detail.html?pid=${pokemonId}">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png" alt="${pokemon.name}" />
                      </a>
                    </div>`;
                  $(".star-container").append(template);
              });
          }, 1000);
      });
  }
  
  }
  
  );