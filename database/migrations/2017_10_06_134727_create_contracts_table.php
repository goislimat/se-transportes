<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContractsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contracts', function (Blueprint $table) {
            $table->increments('id');

            $table->integer('student_id')->unsigned();
            $table->foreign('student_id')->references('id')->on('students');
            $table->integer('school_id')->unsigned();
            $table->foreign('school_id')->references('id')->on('schools');

            $table->boolean('active')->nullable();
            $table->decimal('monthly_payment', 5, 2)->nullable();
            $table->smallInteger('payment_day')->nullable();
            $table->smallInteger('last_month_paid')->nullable();
            $table->decimal('accumulated_debt', 5, 2)->nullable();
            $table->smallInteger('shift')->nullable();

            $table->date('started_at')->nullable();
            $table->date('finished_at')->nullable();

            $table->text('obs')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('contracts');
    }
}
