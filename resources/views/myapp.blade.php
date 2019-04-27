<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">


    <!-- Chrome, Firefox OS and Opera -->
    <meta name="theme-color" content="#D52B1E">
    <!-- Windows Phone -->
    <meta name="msapplication-navbutton-color" content="#D52B1E">
    <!-- iOS Safari -->
    <meta name="apple-mobile-web-app-status-bar-style" content="#D52B1E">


    @if ($metadata->metatitle)
        <title>{{$metadata->metatitle}}</title>
    @endif

    @if ($metadata->metadescription)
         <meta name="description" content="{{$metadata->metadescription}}">
    @endif


   <script type="text/javascript">
        WebFontConfig = {
            google: { families: [ 'Niramit' ] }
        };
        (function() {
            var wf = document.createElement('script');
            wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
            wf.type = 'text/javascript';
            wf.async = 'true';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(wf, s);
        })();
    </script>

   
    
    <!-- Scripts -->
    <script src="{{ mix('/js/manifest.js') }}" defer></script>
    <script src="{{ mix('/js/vendor.js') }}" defer></script>
    <script src="{{ mix('/js/app.js') }}" defer></script>
    
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
    <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
    <link rel="preconnect" href="https://ajax.googleapis.com" crossorigin>
    
    
    <!-- Styles -->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet" >
    

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <link rel="preconnect" href="https://www.google-analytics.com">
    <script defer async src="https://www.googletagmanager.com/gtag/js?id=UA-126973762-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-126973762-1');
    </script>

   



   <meta name="google-site-verification" content="y8lLm8a1Q9LWzq7c8pQ8w-01zPjhn-GfdxpOSaKanCM" />
</head>
<body>
    <div id="app">
       <my-app></my-app>
    </div>
</body>
</html>
