{{-- @extends('default')

@section('main') --}}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Niramit" rel="stylesheet">
   {{--  <link href="/css/bootstrap.min.css" rel="stylesheet"> --}}
    
</head>
<body>
    <style>
      
      *{
        box-sizing: border-box;
         font-family: 'Niramit',  sans-serif;

      }
      img{
        width:100%;
        border:1px solid #ccc;
      }

      .container, .row{
       
        clear: both;
        width: 95%;
        overflow: hidden;
      }

      .col-3, .col-4{
        padding: 10px;
        float: left;
        overflow: hidden;
      }

      .col-4{
        width: 33%;
      }
      
      .col-3{
        width: 25%;
      }



    @yield('styles')
          

    </style>

  
    
    @yield('content')
    
</body>
</html>
    

{{-- @endsection --}}