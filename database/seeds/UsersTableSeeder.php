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
 

    /*   $employee = new User();
      $employee->name = 'user';
      $employee->email = 'user@gmail.com';
      $employee->password = bcrypt('secret');
      $employee->role_id =3 ;
      $employee->save(); */

      $manager = new User();
      $manager->name = 'Maju';
      $manager->email = 'hipermaju@gmail.com';
      $manager->password = bcrypt('MajuAdmin');
       $manager->role_id =2 ;
      $manager->save();

      $super = new User();
      $super->name = 'Rodrigo Bertoa';
      $super->email = 'rsbertoa90@gmail.com';
      $super->password = bcrypt('rsbertoa90');
       $super->role_id =1 ;
      $super->save();

      $super = new User();
      $super->name = 'Gisella';
      $super->email = 'roominagii@gmail.com';
      $super->password = bcrypt('roominagii');
       $super->role_id =1 ;
      $super->save();
   
    }
}
