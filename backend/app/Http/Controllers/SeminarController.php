<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SeminarController extends Controller
{
    public $data = [
        [
            'id' => 1,
            'name' => 'Zastavme globálne oteplovanie',
            'place' => 'Fakulta Matematiky fyziky a informatiky, F2',
            'time' => '4.12.2021, 16:30',
            'speakers' => ['Ing. Pavol Novák', 'Ing. Pavol Junák'],
            'organizer' => 'greenpeace',
            'occupiedPlaces' => [],
            'detail' => 'prednáška',
            'nPlaces' => 50,
            'reservations' => []
        ],
        [
            'id' => 2,
            'name' => 'Uhliková stopa',
            'place' => 'Fakulta Elektrotechniky a informatiky, B-212',
            'time' => '8.12.2021, 19:30',
            'speakers' => ['Ing. Pavol Junák'],
            'organizer' => 'greenpeace',
            'occupiedPlaces' => [],
            'detail' => 'seminár',
            'nPlaces' => 20,
            'reservations' => []
        ],
        [
            'id' => 3,
            'name' => 'Inflácia na najbližší rok',
            'place' => 'Fakulta Matematiky fyziky a informatiky, A',
            'time' => '10.12.2021, 12:30',
            'speakers' => ['Ing. Ján Novák'],
            'organizer' => 'finax',
            'occupiedPlaces' => [],
            'detail' => 'seminár',
            'nPlaces' => 30,
            'reservations' => []
        ],
        [
            'id' => 4,
            'name' => 'Účinnosť očkovania proti COVID',
            'place' => 'Zdravotná univerzita, B-130',
            'time' => '11.12.2021, 16:30',
            'speakers' => ['Doc. Adam Ondriška'],
            'organizer' => 'who',
            'occupiedPlaces' => [],
            'detail' => 'prednáška',
            'nPlaces' => 50,
            'reservations' => []
        ],
        [
            'id' => 5,
            'name' => 'Účíme sa investovať',
            'place' => 'Fakulta Matematiky fyziky a informatiky, B',
            'time' => '15.12.2021, 18:30',
            'speakers' => ['Ing. Juraj Kováč', 'Ing. Ján Novák'],
            'organizer' => 'finax',
            'occupiedPlaces' => [],
            'detail' => 'seminár',
            'nPlaces' => 40,
            'reservations' => []
        ]
    ];
    public function index() {
        
        return response()->json($this->data, 200);
    }

    public function makeReservation(Request $request){
        $reservation = $request->all(); //seminar, user, seat
        $seminarId = $reservation['seminar'];
        $seat = $reservation['seat'];
        $userId = $reservation['user'];

        if($this->isFree($seminarId, $seat)){

            $seminar = $this->findSeminar($seminarId)->first();
            
            if($seminar == null || ($seat >= 0 && $seat < $seminar->nPlaces)){ //check seat interval
                return $this->buildResponse(false, "Seat is out of range.");
            }

            $this->addReservation($seminarId, $userId, $seat);
            return $this->buildResponse(true, "Reservation was created.");
        }

        return $this->buildResponse(false, "Seat is taken");
    }

    public function buildResponse($isSuccess, $message){
        $response= [
            'isSuccess' => $isSuccess,
             'message' => $message
        ];

        return response()->json($response, 200);
    }

    public function findSeminar($seminarId){
        return collect($this->data)->filter(function($seminar) use($seminarId){
            return $seminar->id == $seminarId;
        });
    }

    public function findByUser($reservations, $userId){
        return collect($reservations)->filter(function($reseration) use($userId){
            return $reseration->user == $userId;
        });
    }

    public function findBySeat($reservations, $seatId){
        return collect($reservations)->filter(function($reseration) use($seatId){
            return $reseration->seat == $seatId;
        });
    }

    public function isFree($seminarId, $seatId){
        $seminar = $this->findSeminar($seminarId)->first();
        if( $seminar == null){
            return false;
        } 
        return $this->findBySeat($seminar->reservations, $seatId)->isEmpty();
    }

    public function addReservation($seminarId, $userId, $seatId){
        $id = $this->findSeminarIndex($seminarId);
        $res = [
            'seat' => $seatId,
            'user' => $userId
        ];

        array_push($this->data[$id]['reservations'], $res);
    }

    public function findSeminarIndex($seminarId){
        for($i = 0; $i< count($this->data); $i++){
            if($this->data[$i]['id'] == $seminarId){
                return $i;
            }
        }

        return -1;
    }

    public function push(Request $request){
        array_push($this->data,$request);
    }

}
