@extends('mails.base')

@section('content')

    <div>
        <p>Hola {{$order->name}}! recibimos tu pedido. 
            En las siguientes 24 hs habiles nos estaremos comunicando con vos. </p>
        </p> 
        <p>
            Te dejamos nuestros nro de contacto por cualquier consulta
            <ul>
                <li>Whatsapp: 11 2708 2683</li>
                <li>Tel fijo: (11) 4951- 6400. Saludos!</li>
            </ul>    
        </p> 
        
        <p>
            Si queres descargar una copia en pdf de tu pedido hace click en el siguiente enlace:
        </p>
        <p>
            <a href="https://mayoristamaju.com/pdf/{{$order->id}}">   Descargar copia de pedido  </a>
        </p>

        <p>
            Gracias por elegir Bazar Mayorista MAJU!
        </p>

    </div>

 
  

   
@endsection