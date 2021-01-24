
let sideBoxWidth = $(".sideBox").outerWidth(true);


console.log(sideBoxWidth)

$("#open").click(function () {
  $(".sideBar").animate({ left: "0" }, 500);
  $("#open").css("display","none");
  $(".close").css("display","block")
  $(".sideBox").html(`
   <a href="#"> <p onclick="getNowPlayiing()" class="fadeInEffect">Now playing</p></a>
  <a href="#"> <p onclick="getPopular()" class="fadeInEffect" >Popular</p></a>
  <a href="#"> <p onclick="getTopRated()" class="fadeInEffect" >Top Rated</p></a>
  <a href="#"> <p onclick="getTrending()" class="fadeInEffect">Trending</p></a>
  <a href="#"> <p onclick="geUpcoming()" class="fadeInEffect">Upcoming</p></a>
  <a href="#contacts"> <p  class="fadeInEffect" >Contact Us</p></a>

  
<div class="social-icons py-3 text-center fadeInEffect">
<div>
<a href=""><i class="fab fa-facebook-f"></i></a>
<a href="" ><i class="fab fa-twitter mx-3"></i></a>
<a href=""><i class="fas fa-globe"></i></a>
</div>
<div class="copyright py-3 text-left":>
<span>Copyright © 2019 All Rights Reserved</span>
</div>
</div>


  
  `)       
  
      
})


$(".close").click(function () {
  $(".sideBar").animate({ left: `-${sideBoxWidth}` }, 500);
  $(".close").css("display","none");
  $("#open").css("display","block")
});

let allMovies = [];
async function getNowPlayiing()
{
    let movieApi = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=4b49628a8803b64ff4c9405fbef71332&language=en-US&page=1");
    allMovies = await movieApi.json();
    allMovies = allMovies.results;
    displayMovies()
    console.log(allMovies)
}

async function getPopular()
{
    let movieApi = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=4b49628a8803b64ff4c9405fbef71332&language=en-US&page=1");
    allMovies = await movieApi.json();
    allMovies = allMovies.results;
    displayMovies()
    console.log(allMovies)
}


async function getTopRated()
{
    let movieApi = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=4b49628a8803b64ff4c9405fbef71332&language=en-US&page=1");
    allMovies = await movieApi.json();
    allMovies = allMovies.results;
    displayMovies()
    console.log(allMovies)
}

async function getTrending()
{
    let movieApi = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=4b49628a8803b64ff4c9405fbef71332");
    allMovies = await movieApi.json();
    allMovies = allMovies.results;
    displayMovies()
    console.log(allMovies)
}


async function geUpcoming()
{
    let movieApi = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=4b49628a8803b64ff4c9405fbef71332&language=en-US&page=1");
    allMovies = await movieApi.json();
    allMovies = allMovies.results
    displayMovies()
}


async function searchAllMovies(searchTerm)
{
    let movieApi = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=4b49628a8803b64ff4c9405fbef71332&language=en-US&query=${searchTerm}&page=1&include_adult=false`);
    allMovies = await movieApi.json();
    allMovies = allMovies.results
    displayMovies()
}


function displayMovies()
{
    let container = ``;
   
    for (let i = 0; i < allMovies.length; i++) {
       
        container += ` 
        <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12">
          <div class="film shadow-sm mb-5 bg-white rounded position-relative">
          <img class="w-100" src="https://image.tmdb.org/t/p/w500/${allMovies[i].poster_path}">
          <div id="filmDesc" class="img-layer text-center d-flex align-items-center"> 
              <div>
              <h4>${allMovies[i].title}</h4>
              <p>${allMovies[i].overview}</p>

              <p>Rate : ${allMovies[i].vote_average}</p>
              <p>Date : ${allMovies[i].release_date}</p>
            </div>
            </div>
          </div>
        </div>`;
        
    }
    document.getElementById("movies").innerHTML = container;
}



geUpcoming()


function searchMovie(searchTerm) {
    
  let container = ``;
  for (var i = 0; i < allMovies.length; i++) {

      if(allMovies[i].title.toLowerCase().includes(searchTerm.toLowerCase()) == true)
      {

        container += ` 
        <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12">
          <div class="film shadow-sm mb-5 bg-white rounded position-relative">
          <img class="w-100" src="https://image.tmdb.org/t/p/w500/${allMovies[i].poster_path}">
          <div id="filmDesc" class="img-layer text-center d-flex align-items-center"> 
              <div>
              <h4>${allMovies[i].title}</h4>
              <p>${allMovies[i].overview}</p>

              <p>Rate : ${allMovies[i].vote_average}</p>
              <p>Date : ${allMovies[i].release_date}</p>
            </div>
            </div>
          </div>
        </div>`;
      }
      else
      {
        console.log("");
      }
      
  }
  
  document.getElementById("movies").innerHTML = container;
}

let validationStatus = {

  nameInput: false,
  emailInput:false,
  phoneInput:false,
  ageInput: false,
  passInput:false,
  retypeInput:false,

}





$('#nameInput').blur(function() {
  let nameInput = $("#nameInput").val();
  let regex     =/^[A-Za-z ]+$/;
  if(regex.test(nameInput))
  {
      $("#nameAlert").css("display","none");
      validationStatus.nameInput = true;
  validation()


  }else
  {
    $("#nameAlert").css("display","block")
      return false;
  }
});



$('#emailInput').blur(function() {
  let emailInput = $("#emailInput").val();
  let regex     =  /\S+@\S+\.\S+/;
  if(regex.test(emailInput))
  {
      $("#emailAlert").css("display","none");
      validationStatus.emailInput = true;
  validation()


  }else
  {
    $("#emailAlert").css("display","block")
      return false;
  }
});




$('#phoneInput').blur(function() {
  let phoneInput = $("#phoneInput").val();
  let regex     =  /^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  if(regex.test(phoneInput))
  {
      $("#phoneAlert").css("display","none");
      validationStatus.phoneInput = true;
  validation()


  }else
  {
    $("#phoneAlert").css("display","block")
      return false;
  }
});



$('#ageInput').blur(function() {
  let ageInput = $("#ageInput").val();
  let regex     =  /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|100)$/;
  if(regex.test(ageInput))
  {
      $("#ageAlert").css("display","none");
      validationStatus.ageInput = true;
  validation()


  }else
  {
    $("#ageAlert").css("display","block")
      return false;
  }
});


let passInput = $("#passInput");
let retypeInput = $("#retypeInput");

$('#passInput').blur(function() {
   passInput = $("#passInput").val();
  let regex     =  /(?=^.{8,}$)(?=.*\d)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
  if(regex.test(passInput))
  {
      $("#passAlert").css("display","none");
      validationStatus.passInput = true;
  validation()


  }else
  {
    $("#passAlert").css("display","block")
  }
});



$('#retypeInput').blur(function() {
  passInput = $("#passInput").val();
  retypeInput = $("#retypeInput").val();
if(passInput===retypeInput)
{
  $("#retypeAlert").css("display","none");
  validationStatus.retypeInput = true;
  validation()

}else
{
$("#retypeAlert").css("display","block")
  return false;
}
});

function validation()
{
  if (validationStatus.nameInput == true && validationStatus.emailInput == true && validationStatus.ageInput == true && validationStatus.phoneInput == true && validationStatus.passInput == true && validationStatus.retypeInput == true) {
    $("#submit").removeClass("disabled");
  }
}
