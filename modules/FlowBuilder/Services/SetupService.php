<?php

namespace Modules\FlowBuilder\Services;

use Illuminate\Support\Facades\Artisan;

class SetupService
{
    public function index(){
        //Run migrations
        $migrateOutput = Artisan::call('module:migrate', [
            'module' => 'FlowBuilder',  // Specify the module name as an argument
        ]);
    }
}