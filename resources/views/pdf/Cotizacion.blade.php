
    @extends('pdf.base')    
    
    @section('content')

    <main>
         <div style="width:100% ; text-align : center;">
            <img style="width: 120px" src="data:image/png;base64,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" alt="MAJU" />
        </div>

         @php
            $total = 0;
        @endphp
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <td>Codigo</td>
                    <td>Producto</td>
                    <td>Precio</td>
                    <td>Cantidad</td>
                    <td>Subtotal</td>
                </tr>
            </thead>
            <tbody>
                @foreach($order->orderProducts as $op)
                <tr>
                    <td> {{$op->product->code}} </td>
                    <td> {{$op->product->name}} </td>
                    <td> ${{$op->price}} </td>
                    <td> {{$op->units}} </td>
                    <td> ${{$op->units * $op->price}} </td>
                    @php
                        $total += ($op->units * $op->price);
                    @endphp
                </tr>
                @endforeach
            </tbody>
            <tfoot>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td style="color : blue">TOTAL</td>
                    <td style="color : blue"> ${{$total}} </td>
                    </tr>
            </tfoot>
        </table>
        <hr>
        <div>
            <p>
                Datos Adjuntos:
                <ul>
                    <li>Nombre: {{$order->name}} </li>
                    <li>Telefono: {{$order->phone}} </li>
                    <li>Email: {{$order->email}} </li>
                    <li>Mensaje: {{$order->message}} </li>
                </ul>
            </p>
            @if ($order->shipping)
                <p>
                   Datos de envio:
                   <ul>
                       @if ($order->City)    
                            <li> Provincia: {{$order->City->state->name}} </li> 
                            <li> Ciudad: {{$order->City->name}} </li> 
                       @endif
                        <li> CP: {{$order->cp}} </li> 
                        <li> direccion: {{$order->address}} </li> 
                        <li> transporte: {{$order->transport}} </li> 
                   </ul> 
                </p>
            @endif
        </div>
        
    </main>
    @endsection

    </body>
    </html>


   