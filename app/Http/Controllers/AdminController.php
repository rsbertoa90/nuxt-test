<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
        return FailedJob::all()->orderBy('failed_at','desc');
    }

    public function failedJobs()
    {
        return view('admin.failedJobs');
    }
}
