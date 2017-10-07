<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $fillable = [
        'name',
        'responsible',
        'contact',
        'street',
        'house_number',
        'neighborhood',
        'obs'
    ];

    public function contracts() {
        return $this->hasMany(Contract::class);
    }
}
