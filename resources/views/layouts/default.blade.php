<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    @if ($meta =  App\Metadata::findOrCreate('home'))
        <title>{{$meta->metatitle }}</title>
        <meta name="description" content="{{$meta->metadescription }}">
    @endif
    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    {{-- font awesome --}}
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/animate.min.css') }}" rel="stylesheet">

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-126973762-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-126973762-1');
    </script>

      <!-- Facebook Pixel Code -->
        <script>
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
        /></noscript>
        <!-- End Facebook Pixel Code -->

        {{-- Google search panel --}}



   <meta name="google-site-verification" content="y8lLm8a1Q9LWzq7c8pQ8w-01zPjhn-GfdxpOSaKanCM" />
</head>
<body>

    @if (Auth::check())
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary font-weight-bold">
            <a class="navbar-brand" href="/">MAJU</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Cotizador <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/admin">Administrar Productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/admin/pedidos">Pedidos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/admin/metadata">Metadata</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/logout">Salir</a>
                    </li>
                </ul>
            </div>
        </nav>
    @endif
    @if (!auth::check())
            {{--  NAV user --}}
            <nav class="navbar navbar-expand-lg navbar-dark bg-fucsia font-weight-bold">
                <a class="navbar-brand" href="/">MAJU</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Hace tu pedido <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://hipermaju.com/contactenos">Contactate con nosotros</a>
                        </li>
                    </ul>
                </div>
            </nav>

            {{--/NAV user --}}
    @endif



    <div id="app">
        <main class="py-4">
            @yield('content')
        </main>
    </div>
</body>
</html>
