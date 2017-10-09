<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contract extends Model
{
    protected $fillable = [
        'student_id',
        'school_id',
        'active',
        'monthly_payment',
        'payment_day',
        'last_month_paid',
        'year',
        'accumulated_debt',
        'shift',
        'started_at',
        'finished_at',
        'obs'
    ];

    public function student() {
        return $this->belongsTo(Student::class);
    }

    public function school() {
        return $this->belongsTo(School::class);
    }

    public function payments() {
        return $this->hasMany(Payment::class);
    }
}
