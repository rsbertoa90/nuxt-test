  @extends('pdf.base')

  @section('content')

 
  <main>
      
     

      @foreach ($categories as $category)
      
         
          <div style="text-align: center ; width :750px; text-decoration:underline">
              <h4> {{strtoupper($category->name)}} </h4>
          </div>
                         
          
              <table class="table table-bordered " style="width:750px ; " >

                  <tbody >
                    @php
                        $max = count($category->products) / 4 ;
                    @endphp      
                      @for ($i = 0; $i < $max; $i++)
                            @php
                            $products = $category->products;
                            if (isset($products[$i*4+0])){ $product1 = $category->products[($i*4)+0];} else {$product1 = null;};
                            if (isset($products[$i*4+1])) {   $product2 = $category->products[($i*4)+1];} else {$product2 = null;};
                             if (isset($products[$i*4+2])) {  $product3 = $category->products[($i*4)+2];} else {$product3 = null;};
                             if (isset($products[$i*4+3]))   {$product4 = $category->products[($i*4)+3];} else {$product4 = null;};
                            @endphp
                          <tr>
                              @if ($product1)
                                  
                                    <td style="width:24%; overflow:hidden">                        
                                            <img  style="width:150px;" src="{{$product1->images[0]->base64}}"> <br>
                                         <span style='font-size: 0.8rem'> Cod: {{$product1->code}} - {{$product1->name}} </span>
                                        @if ($product1->price > 0)
                        
                                            <br> <span style="font-size:.65rem ; color:red"> ${{$product1->price}} - de {{$product1->pck_units}} unidades </span>
                                        @endif
                                        @if ($product1->pck_units > 1)
                        
                                            <br> <span style="font-size:.65rem ; color:blue"> ${{$product1->pck_price}} + de {{$product1->pck_units}} unidades </span>
                                        @endif
                                         
                                    </td>
                              @endif
                              @if ($product2)
                                  
                              <td style="width:24%; overflow:hidden">                        
                                    <img  style="width:150px;" src="{{$product2->images[0]->base64}}"> <br>
                                    <div>
                                        <span style='font-size: 0.8rem'> Cod: {{$product2->code}} - {{$product2->name}} </span>
                                       @if ($product2->price > 0)
                       
                                        <br> <span style="font-size:.65rem ; color:red"> ${{$product2->price}} - de {{$product2->pck_units}} unidades </span>
                                       @endif
                                       @if ($product2->pck_units > 1)
                       
                                        <br> <span style="font-size:.65rem ; color:blue"> ${{$product2->pck_price}} + de {{$product2->pck_units}} unidades </span>
                                       @endif
                                        
                                    </div>
                              </td>
                              @endif
                              @if ($product3)
                                  
                              <td style="width:24%; overflow:hidden">                        
                                    <img style="width:150px;"  src="{{$product3->images[0]->base64}}"> <br>
                                     <span style='font-size: 0.8rem'> Cod: {{$product3->code}} - {{$product3->name}} </span>
                                    @if ($product3->price > 0)
                    
                                        <br> <span style="font-size:.65rem ; color:red"> ${{$product3->price}} - de {{$product3->pck_units}} unidades </span>
                                    @endif
                                    @if ($product3->pck_units > 1)
                    
                                        <br> <span style="font-size:.65rem ; color:blue"> ${{$product3->pck_price}} + de {{$product3->pck_units}} unidades </span>
                                    @endif
                                     
                                </td>
                              @endif
                              @if ($product4)
                                  
                              <td style="width:24%; overflow:hidden ">                        
                                    <img style="width:150px;"  src="{{$product4->images[0]->base64}}"> <br>
                                     <span style='font-size: 0.8rem'> Cod: {{$product4->code}} - {{$product4->name}} </span>
                                    @if ($product4->price > 0)
                    
                                        <br> <span style="font-size:.65rem ; color:red"> ${{$product4->price}} - de {{$product4->pck_units}} unidades </span>
                                    @endif
                                    @if ($product4->pck_units > 1)
                    
                                        <br> <span style="font-size:.65rem ; color:blue"> ${{$product4->pck_price}} + de {{$product4->pck_units}} unidades </span>
                                    @endif
                                    
                                </td>
                              @endif
                          </tr>
                      @endfor
                  </tbody>
              </table>
              <hr>
      @endforeach
  </main>
      
     
  @endsection