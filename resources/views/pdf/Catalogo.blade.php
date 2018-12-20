  @extends('pdf.blankbase')

@section('style')
    .bordered{
        border: 2px solid #fff;
    }      
@endsection
  
@section('content')
  
      
  
  

@foreach ($categories as $category)
    <header>
        <div style=" position:fixed; top:-80px;left:-20px; background-color:pink ; width:100vw ; padding:20px">
                {{$category->name}}
            </div>
            
        </header>  
        <main>
            
            
         
            {{-- @php
                dd($product->images[0]->tobase());
                
                @endphp --}}
              
                 
                <table class=""  >
                  <thead>
                      <tr>
                          <td>Codigo</td>
                          <td>Nombre</td>
                          <td>Precio</td>
                          <td>Llevando mas de</td>
                          <td>Precio X Mayor </td>
                      </tr>
                    
                  </thead>
                  
                  <tbody>
                      
                      @foreach ($category->products as $key => $product)
                  
                      <tr>
                          <td> {{$product->code}} </td>
                          <td> {{$product->name}} </td>
                          @if ($product->price > 0)
                            <td> ${{number_format($product->price,2)}} </td>  
                          @else
                              <td> - </td>
                          @endif

                          @if ($product->pck_units > 1)
                            <td> {{$product->pck_units}} </td>  
                            <td> ${{number_format($product->pck_price,2)}} </td>
                          @else
                              <td> Venta X unidad </td>
                              <td> - </td>
                          @endif
                      </tr>

                     


                      @endforeach
                  </tbody>
              </table>

           
           
                    
            <p style="page-break-before: always;"> - </p>
        </main>
@endforeach
      
     
  @endsection