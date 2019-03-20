  @extends('pdf.base')

  @section('content')

 
  <main>
      
       

      @foreach ($categories as $category)
       {{-- <div class="breakNow"></div> --}}
          <hr>
          <div style="text-align: center ; width :100vw"></div>
              <h2> {{strtoupper($category->name)}} </h2>
          </div>
          <hr>                 
          
              <table class="table table-bordered table-striped"  >
                  <thead>
                      <tr>
                          <td>Codigo</td>
                          <td>Nombre</td>
                          <td>Precio</td>
                          <td>Llevando mas de</td>
                          <td>Precio </td>
                      </tr>
                    
                  </thead>
                  
                  <tbody>
                      
                      @foreach ($category->products as $key => $product)
                        @if (!$product->paused)
                            
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
                        @endif
                      @endforeach
                  </tbody>
              </table>
      @endforeach
  </main>
      
     
  @endsection