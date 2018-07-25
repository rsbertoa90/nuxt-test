{{-- @extends('default')

@section('main') --}}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>-</title>
</head>
<body>
    <style>
        td {border: 1px solid:black; align-text:center}
        table{border:1px solid black}

    </style>
    <div class="d-flex justify-content-center align-items-center flex-column">
    <div>
        <h5>Pedido de confirmacion de presupuesto</h5>
        <br>
         <h5>de : {{$email}}</h5>
        <h5>TEL: {{$phone}}</h5>
    </div>
    <hr>
    @if ($msg)
        <div>
            <h5>Mensaje adjunto:</h5>
                <p>{{$msg}}  </p>
        </div>
        @endif
    <div>
        <table  class="table table-striped table-bordered">
            <thead>
                <th >Codigo</th>
                <th >Nombre</th>
                <th >Precio x unidad</th>
                <th >Unidades x bulto</th>
                <th >Cantidad pedida</th>
            </thead>
            <tbody>
                @foreach ($products as $item)
                <tr>
                    <td >{{$item->code}}</td>            
                    <td >{{$item->name}}</td>            
                    <td> {{$items->units}}</td>                  
                </tr>
                @endforeach
            </tbody>
        </table>
        <span stye="text:red ; font-weight:bold ; font-size :40px ; margin-top:15px">TOTAL: ${{total}} </span>
    </div>
</div>
</body>
</html>
    

{{-- @endsection --}}