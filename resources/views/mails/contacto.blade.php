@extends('mails.base')

@section('content')

    <div>
        {{-- <p>
            Este mail fue creado por www.mayoristamaju.com
            en respuesta a una solicitud desde la pagina Contacto.
            No Responda este mail. 
        </p> --}}
       
       
        @if ($data['name'])
            <p>Nombre: {{$data['name']}}</p>
       @endif

       @if ($data['email'])
            <p>Email: {{$data['email']}}</p>
       @endif


       @if ($data['phone'])
            <p>Telefono: {{$data['phone']}}</p>
       @endif

        @if ($data['message'])
            <p>Mensaje: {{$data['message']}}</p>
       @endif

        @if ($city)
            <p>Cidudad: {{$city->state->name}} - {{$city->name}}</p>
       @endif
       

    </div>

 
  

   
@endsection