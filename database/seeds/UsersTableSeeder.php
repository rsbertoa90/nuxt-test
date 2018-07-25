<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Role;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
 

      $employee = new User();
      $employee->name = 'user';
      $employee->email = 'user@gmail.com';
      $employee->password = bcrypt('secret');
      $employee->role_id =3 ;
      $employee->save();

      $manager = new User();
      $manager->name = 'admin';
      $manager->email = 'admin@gmail.com';
      $manager->password = bcrypt('admin');
       $manager->role_id =2 ;
      $manager->save();

      $super = new User();
      $super->name = 'super';
      $super->email = 'super@gmail.com';
      $super->password = bcrypt('super');
       $super->role_id =1 ;
      $super->save();
   
    }
}
