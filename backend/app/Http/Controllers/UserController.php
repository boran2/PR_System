<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public $users = [
        [
            'id' => 1,
            'name' => 'Ján',
            'surname' => 'Kováč',
            'phone' => '0914675845',
            'mail' => 'kovac@gmail.com',
            'password' => 'kovac1',
        ],
        [
            'id' => 2,
            'name' => 'Pavol',
            'surname' => 'Novotny',
            'phone' => '0912655825',
            'mail' => 'novotny@gmail.com',
            'password' => 'novotny1',
        ],
        [
            'id' => 3,
            'name' => 'Jakub',
            'surname' => 'Maly',
            'phone' => '0912355865',
            'mail' => 'maly@gmail.com',
            'password' => 'maly1',
        ],

    ];
    public function index()
    {
        return response()->json($this->users, 200);;
    }

    public function createUser(Request $request) {
        $newUser = $request->all();

        if($this->isUserInDb($newUser)){
            $response= [ 'message' => "User exist."];

            return response()->json($response, 409);
        }

        array_push($this->users, $newUser);

        $response= [ 'isSuccess' => $this->isUserInDb($newUser)->isNotEmpty()];
        return response()->json($response, 200);

    }

    public function login(Request $request){
        $rUser = $request->all();

        $response= [ 'isSuccess' => $this->isUserInDb($rUser)->isNotEmpty()];
        return response()->json($response, 200);
    }

    private function isUserInDb($rUser){
        return collect($this->users)->filter(function($user) use($rUser) {
            return $rUser['email'] == $user->email && $rUser['password'] == $user->password;
        });
    }
}
