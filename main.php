<?php
  require_once "config.php";

  // Initialize the session
  session_start();
  
  // Check if the user is logged in, if not then redirect him to login page
  if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    header("location: login.php");
    exit;
  }
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Trippy</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <nav class="navbar navbar-light fixed-top" style="background-color: #147900;">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!--Navbar sliding menu-->
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Nearby</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <!--Unordered Content List-->
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <!--list group-->
              <div class="list-group d-flex vstack gap-3" id="markerlist">

              </div>  
            </ul>
          </div>
        </div>
        <!--Central menu div-->
        <div>
          <span id="sliderhint" class="text-white">Range: </span>
          <input type="range" min="1000" max="5000" value="1000" step="500" class="slider" id="myRange">
          <span id="slidertext" class="text-white">1000m</span>
        </div>
        <!--Sign out button-->
        <div>
          <a class="navbar-brand text-white btn-sm btn-danger" href="logout.php" >Sign Out</a>
        </div>
      </div>
    </nav>
    <!--The div element for the map -->
    <div id="map"></div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="maps.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=_YOUR_KEY_HERE_&libraries=places&callback=initMap"></script>
  </body>
</html>
