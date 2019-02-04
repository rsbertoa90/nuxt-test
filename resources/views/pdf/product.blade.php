
<td style="width:24%; overflow:hidden; ">                        
    @if (isset($product->images[0]))
        
        <img style="width:150px; "  src="{{public_path().$product->images[0]->url}}"> 
    @endif
    @if (!isset($product->images[0]))
        
        <img style="width:150px; "  src="{{public_path().'/storage/images/app/no-image.png'}}"> 
    @endif
    
    <div style="margin-top:-16px; margin-left:10px;">  <br>
        @if ($product->price > 0)
        
             <span style="width:73px ; height:60px; font-size: .87rem ; color:blue ; display:inline "> ${{number_format($product->price,2)}} </span>
        @endif
        @if ($product->pck_units > 1 && $product->price > 0)
            <span> / </span>
        @endif
        @if ($product->pck_units > 1)
         <span style="width:73px ; height:60px;font-size: .9rem ; color:green ; display:inline ;"> ${{number_format($product->pck_price,2)}}</span>
        @endif
    </div>
   
    <span style='font-size: 0.6rem; font-weight:bold; display:inline; line-height:normal'>
         Cod: {{$product->code}} - {{$product->name}}  
    </span>  <br>
    @if ($product->pck_units > 1)
        <span style="font-size: 0.6rem; display:inline; color:green;">
            Precio especial a partir de {{$product->pck_units}} unidades
        </span>
    @endif
</td>