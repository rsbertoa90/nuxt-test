@extends('layouts.default')

@section('content')
    <div class="d-flex justify-content-center mb-5">
        <app-category :category_id="{{$id}}" > </app-category>
    </div>
@endsection