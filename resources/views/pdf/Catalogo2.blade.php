@extends('pdf.blankbase')

@section('content')
    <div class="container">
        @foreach ($categories as $category)
            @foreach ($category->products as $product)
               @if (isset($product->images[0]))
                    <div style="width:25%; overflow:hidden; float:left; ">
                        <img src="{{$product->images[0]->tobase()}}">    
                        <span>Cod: {{$product->code}} - </span>
                        <span> {{$product->name}} </span>
                    </div>    
               @endif 

            @endforeach
        @endforeach
        
    </div>
@endsection