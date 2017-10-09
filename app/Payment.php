<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    protected $fillable = [
        'contract_id',
        'amount_paid',
        'date',
        'obs',
    ];

    public function contract() {
        return $this->belongsTo(Contract::class);
    }
}
