<?php

namespace Bambamboole\NovaSettings;

use Laravel\Nova\Nova;
use Laravel\Nova\Events\ServingNova;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Bambamboole\NovaSettings\Http\Middleware\Authorize;

class ToolServiceProvider extends ServiceProvider
{


    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->loadMigrationsFrom(__DIR__ . '/../database/migrations');
        $this->loadViewsFrom(__DIR__ . '/../resources/views', 'nova-settings');

        $this->app->booted(function () {
            $this->routes();
        });

        $this->app->get(NovaSettingsManager::class)
            ->addSection('General', 'This is the default section.')
            ->addField('Text Field', 'text', 'general', 'field description')
            ->addField('Time Field', 'time', 'general', 'time field test');

        Nova::serving(function (ServingNova $event) {
        });
    }

    /**
     * Register the tool's routes.
     *
     * @return void
     */
    protected function routes()
    {
        if ($this->app->routesAreCached()) {
            return;
        }

        Route::middleware(['nova', Authorize::class])
            ->prefix('nova-vendor/nova-settings')
            ->group(__DIR__ . '/../routes/api.php');
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(NovaSettingsManager::class, function () {
            $novaSettings = new NovaSettingsManager();

            return $novaSettings;
        });
    }
}
