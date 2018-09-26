{{-- @extends('default')

@section('main') --}}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
    
</head>
<body>
    <style>
   


.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}


.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,
.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,
.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,
.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,
.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,
.col-xl-auto {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

.col {
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -ms-flex-positive: 1;
  flex-grow: 1;
  max-width: 100%;
}

.col-auto {
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  width: auto;
  max-width: none;
}

.col-1 {
  -ms-flex: 0 0 8.333333%;
  flex: 0 0 8.333333%;
  max-width: 8.333333%;
}

.col-2 {
  -ms-flex: 0 0 16.666667%;
  flex: 0 0 16.666667%;
  max-width: 16.666667%;
}

.col-3 {
  -ms-flex: 0 0 25%;
  flex: 0 0 25%;
  max-width: 25%;
}

.col-4 {
  -ms-flex: 0 0 33.333333%;
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
}

.col-5 {
  -ms-flex: 0 0 41.666667%;
  flex: 0 0 41.666667%;
  max-width: 41.666667%;
}

.col-6 {
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
}

.col-7 {
  -ms-flex: 0 0 58.333333%;
  flex: 0 0 58.333333%;
  max-width: 58.333333%;
}

.col-8 {
  -ms-flex: 0 0 66.666667%;
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
}

.col-9 {
  -ms-flex: 0 0 75%;
  flex: 0 0 75%;
  max-width: 75%;
}

.col-10 {
  -ms-flex: 0 0 83.333333%;
  flex: 0 0 83.333333%;
  max-width: 83.333333%;
}

.col-11 {
  -ms-flex: 0 0 91.666667%;
  flex: 0 0 91.666667%;
  max-width: 91.666667%;
}

.col-12 {
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
}


        table {
        border-collapse: collapse;
        }
        th {
  text-align: inherit;
}

.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
}

.table th,
.table td {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
}

.table tbody + tbody {
  border-top: 2px solid #dee2e6;
}

.table .table {
  background-color: #fff;
}

.table-sm th,
.table-sm td {
  padding: 0.3rem;
}

.table-bordered {
  border: 1px solid #dee2e6;
}

.table-bordered th,
.table-bordered td {
  border: 1px solid #dee2e6;
}

.table-bordered thead th,
.table-bordered thead td {
  border-bottom-width: 2px;
}

.table-borderless th,
.table-borderless td,
.table-borderless thead th,
.table-borderless tbody + tbody {
  border: 0;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}

.table-hover tbody tr:hover {
  background-color: rgba(0, 0, 0, 0.075);
}

.table-primary,
.table-primary > th,
.table-primary > td {
  background-color: #b8daff;
}

.table-hover .table-primary:hover {
  background-color: #9fcdff;
}

.table-hover .table-primary:hover > td,
.table-hover .table-primary:hover > th {
  background-color: #9fcdff;
}

.table-secondary,
.table-secondary > th,
.table-secondary > td {
  background-color: #d6d8db;
}

.table-hover .table-secondary:hover {
  background-color: #c8cbcf;
}

.table-hover .table-secondary:hover > td,
.table-hover .table-secondary:hover > th {
  background-color: #c8cbcf;
}

.table-success,
.table-success > th,
.table-success > td {
  background-color: #c3e6cb;
}

.table-hover .table-success:hover {
  background-color: #b1dfbb;
}

.table-hover .table-success:hover > td,
.table-hover .table-success:hover > th {
  background-color: #b1dfbb;
}

.table-info,
.table-info > th,
.table-info > td {
  background-color: #bee5eb;
}

.table-hover .table-info:hover {
  background-color: #abdde5;
}

.table-hover .table-info:hover > td,
.table-hover .table-info:hover > th {
  background-color: #abdde5;
}

.table-warning,
.table-warning > th,
.table-warning > td {
  background-color: #ffeeba;
}

.table-hover .table-warning:hover {
  background-color: #ffe8a1;
}

.table-hover .table-warning:hover > td,
.table-hover .table-warning:hover > th {
  background-color: #ffe8a1;
}

.table-danger,
.table-danger > th,
.table-danger > td {
  background-color: #f5c6cb;
}

.table-hover .table-danger:hover {
  background-color: #f1b0b7;
}

.table-hover .table-danger:hover > td,
.table-hover .table-danger:hover > th {
  background-color: #f1b0b7;
}

.table-light,
.table-light > th,
.table-light > td {
  background-color: #fdfdfe;
}

.table-hover .table-light:hover {
  background-color: #ececf6;
}

.table-hover .table-light:hover > td,
.table-hover .table-light:hover > th {
  background-color: #ececf6;
}

.table-dark,
.table-dark > th,
.table-dark > td {
  background-color: #c6c8ca;
}

.table-hover .table-dark:hover {
  background-color: #b9bbbe;
}

.table-hover .table-dark:hover > td,
.table-hover .table-dark:hover > th {
  background-color: #b9bbbe;
}

.table-active,
.table-active > th,
.table-active > td {
  background-color: rgba(0, 0, 0, 0.075);
}

.table-hover .table-active:hover {
  background-color: rgba(0, 0, 0, 0.075);
}

.table-hover .table-active:hover > td,
.table-hover .table-active:hover > th {
  background-color: rgba(0, 0, 0, 0.075);
}

.table .thead-dark th {
  color: #fff;
  background-color: #212529;
  border-color: #32383e;
}

.table .thead-light th {
  color: #495057;
  background-color: #e9ecef;
  border-color: #dee2e6;
}

.table-dark {
  color: #fff;
  background-color: #212529;
}

.table-dark th,
.table-dark td,
.table-dark thead th {
  border-color: #32383e;
}

.table-dark.table-bordered {
  border: 0;
}

.table-dark.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(255, 255, 255, 0.05);
}

.table-dark.table-hover tbody tr:hover {
  background-color: rgba(255, 255, 255, 0.075);
}

    
        tbody:before, tbody:after, thead:before,thead:after { display: none; } 
       /*  div.breakNow { page-break-inside:avoid; page-break-after:always; }
        ul, img, table {
            page-break-inside: avoid;
        } */

    thead:before, thead:after, tr:before, tr:after { display: none; }
    tbody:before, tbody:after { display: none; }
    
    thead tr td {font-weight: bold;}
   
       @page {
                margin: 75px 25px;
            }

            header {
                position: fixed;
                top: -60px;
                left: 0px;
                right: 0px;
                height: 50px;

                /** Extra personal styles **/
                /* background-color: #03a9f4; */
                /* color: white; */
                /* text-align: center;
                line-height: 35px; */
            }

            footer {
                position: fixed; 
                bottom: -60px; 
                left: 0px; 
                right: 0px;
                height: 50px; 

                /** Extra personal styles **/
                /* background-color: #03a9f4;
                color: white;
                text-align: center;
                line-height: 35px; */
            }

            .logodiv{
              position : absolute;
              top:0;
              left:10px;
            }
            .datediv{
              position: absolute;
              top:0;
              right: 10px;
            }

    
    </style>

    <header >
      <div class="logodiv" >   
        <span >
            <img style="width: 30px" src="data:image/png;base64,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" alt="MAJU" />
        </span>
        <hr> 
      </div>
      <div class="datediv" > 
        @if (isset($order))
           <span>{{ucfirst($order->seller)}} -- </span>
        @endif
              <span style="text-aling: right">{{$today}}</span> 
      </div>
           
       
  </header>
    
        @yield('content')
    
</body>
</html>
    

{{-- @endsection --}}