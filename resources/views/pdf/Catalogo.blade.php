  @extends('pdf.blankbase')

  @section('content')

 
  <main>
      
       

      @foreach ($categories as $category)
       {{-- <div class="breakNow"></div> --}}
          <hr>
          {{-- <div style="text-align: center ; width :100vw"></div>
              <h2> {{strtoupper($category->name)}} </h2>
          </div> --}}
          <hr>                 
          
              <table class=""  >
             
                  
                  <tbody>
                      
                      @foreach ($category->products as $key => $product)
                    @if (isset($product->images[0]))
                        
                    
                      <tr>
                        <td> <img width="200px" src="{{$product->images[0]->base64}}" > </td>
                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td style="font-size:1.3rem ;  font-weight:bold"> {{$product->name}} </td>
                                    </tr>
                                    <tr>
                                        <td> <br> </td>
                                    </tr>
                                    <tr>
                                        <td style="font-size:1.3rem ">
                                            @if ($product->price > 0)
                                                <span> ${{$product->price}} </span> /
                                            @endif
                                            @if ($product->pck_units > 1)
                                                 <br>
                                                <span> {{$product->pck_price}} llevando MAS de {{$product->pck_units}} </span>
                                            @endif

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            @foreach ($product->images as $key => $image)
                                                @if ($key > 0)
                                                   <img width="90px" style="margin-left:10px ; margin-top: 10px" src="{{$image->tobase()}}" /> 
                                                     
                                                @endif
                                            @endforeach
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                      </td>    
                     </tr>
                     @endif
                      @endforeach
                  </tbody>
              </table>
      @endforeach
  </main>
      
     
  @endsection