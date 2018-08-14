@extends('mails.base')

@section('content')

    <div>
        <p>Hola! Gracias por tu pedido. En las siguientes 24 hs hábiles lo estaremos confirmando . Te dejamos nuestros nro de contacto:
            <ul>
                <li>Whatsapp: 11 2708 2683</li>
                <li>Tel fijo: (11) 4951- 6400. Saludos!</li>
            </ul>    
        </p> 
    
    </div>

    <div>
        <table  class="table table-striped table-bordered">
            <thead>
                <tr>
                    <td >Codigo</td>
                    <td >Nombre</td>
                    <td >Cantidad pedida</td>
                    <td>Precio</td>
                    <td>Subtotal</td>
                </tr>
            </thead>
            <tbody>
                @php
                    $total =0;
                @endphp
                @foreach ($order->orderProducts as $item)
                <tr>
                    <td >{{$item->product->code}}</td>            
                    <td >{{$item->product->name}}</td>            
                    <td> {{$item->units}}</td>                  
                    <td> ${{$item->price}}</td>                  
                    <td> ${{$item->price * $item->units}}</td>  
                    @php
                        $total += ($item->price * $item->units);
                    @endphp                
                </tr>
                @endforeach
            </tbody>
        </table>
        <span stye="color:blue ; 
                    font-weight:bold ; 
                    font-size :40px ; 
                    margin-top:15px">
                    TOTAL: ${{$total}} 
        </span>
    </div>
    <hr>
    <div>
        <h5>Informacion Adjunta:</h5>
        <br>
        <h5> De : {{$order->name}}</h5>
         <h5>mail : {{$order->email}}</h5> <br>
         <h5>TEL:  {{$order->phone}}</h5>
    </div>
    <hr>
    @if ($order->message)
        <div>
            <h5>Mensaje adjunto:</h5>
                <p>{{$order->message}}  </p>
        </div>
    @endif
   
@endsection