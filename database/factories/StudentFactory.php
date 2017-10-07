<?php

use Faker\Generator as Faker;

$factory->define(\App\Student::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'responsible' => $faker->name,
        'contact' => $faker->phoneNumber,
        'street' => $faker->streetName,
        'house_number' => $faker->buildingNumber,
        'neighborhood' => $faker->streetSuffix,
        'obs' => $faker->sentence(10, true),
    ];
});
