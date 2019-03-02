<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\FailedJob;
class AdminController extends Controller
{
    public function admin(){
        return view('admin.admin');
    }


    public function report(){
        return view('admin.report');
    }


    public function getFailedJobs()
    {
        return FailedJob::orderBy('failed_at','desc')->get();
    }

    public function failedJobs()
    {
        return view('admin.failedJobs');
    }
}
