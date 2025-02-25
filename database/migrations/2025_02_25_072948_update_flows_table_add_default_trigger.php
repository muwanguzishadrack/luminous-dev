<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // First create a backup of the table structure
        Schema::table('flows', function (Blueprint $table) {
            // Check if trigger column exists before modifying
            if (Schema::hasColumn('flows', 'trigger')) {
                // Modify the enum column to include the new 'default' value
                DB::statement("ALTER TABLE flows MODIFY COLUMN `trigger` ENUM('new_contact', 'keywords', 'default') NULL");
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Revert the changes by going back to the original enum values
        Schema::table('flows', function (Blueprint $table) {
            if (Schema::hasColumn('flows', 'trigger')) {
                // Revert the enum column to the original values
                DB::statement("ALTER TABLE flows MODIFY COLUMN `trigger` ENUM('new_contact', 'keywords') NULL");
            }
        });
    }
};
