<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    protected $fillable = [ 'name' ];

    public function contracts() {
        return $this->hasMany(Contract::class);
    }
}
