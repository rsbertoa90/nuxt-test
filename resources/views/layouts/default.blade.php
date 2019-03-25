<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">


    <!-- Chrome, Firefox OS and Opera -->
    <meta name="theme-color" content="#ff0aaf">
    <!-- Windows Phone -->
    <meta name="msapplication-navbutton-color" content="#ff0aaf">
    <!-- iOS Safari -->
    <meta name="apple-mobile-web-app-status-bar-style" content="#ff0aaf">



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

    @if ($meta =  App\Metadata::findOrCreate('home'))
        <title>{{$meta->metatitle }}</title>
        <meta name="description" content="{{$meta->metadescription }}">
    @endif
    <!-- Scripts -->
    <script src="{{ mix('/js/app.js') }}" defer></script>
    {{-- font awesome --}}
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
    {{-- <link  rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
          integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous"> --}}
          <!-- Fonts -->
    <script defer src="https://use.fontawesome.com/releases/v5.7.2/js/all.js" integrity="sha384-0pzryjIRos8mFBWMzSSZApWtPl/5++eIfzYmTgBBmXYdhvxPc+XcFEk+zJwDgWbP" crossorigin="anonymous"></script>
    {{-- <link  rel="dns-prefetch" href="https://fonts.gstatic.com"> --}}
    <!-- Styles -->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet" >
    {{-- animaciones --}}
    {{-- <link  href="{{ asset('css/animate.min.css') }}" rel="stylesheet">
 --}}
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <link rel="preconnect" href="https://www.google-analytics.com">
    <script defer async src="https://www.googletagmanager.com/gtag/js?id=UA-126973762-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-126973762-1');
    </script>

      <!-- Facebook Pixel Code -->
      {{--   <script defer>
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1503901789673451');
        fbq('track', 'PageView');
        </script>
        <noscript><img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=1503901789673451&ev=PageView&noscript=1"
        /></noscript> --}}
        <!-- End Facebook Pixel Code -->

        {{-- Google search panel --}}



   <meta name="google-site-verification" content="y8lLm8a1Q9LWzq7c8pQ8w-01zPjhn-GfdxpOSaKanCM" />
</head>
<body>

    
    


    <div id="app">
        <app-frame></app-frame>
        <header>
            <app-nav></app-nav>
        </header>    
        <main class="py-4">
            @yield('content')
        </main>
    </div>
</body>
</html>
