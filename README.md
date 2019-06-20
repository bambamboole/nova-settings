# Nova Settings
Add Settings via code and edit with Nova.
## Requirements
* Laravel Nova
## Installation
```
composer require bambamboole/nova-settings
```
## Usage
After installing the tool you need to add it to your nova tools.
```php
    public function tools()
    {
        return [
            //...
            new \Bambamboole\NovaSettings\NovaSettings(),
            //...
        ];
    }
```
Now you can add Sections and Fields in your Service Providers `boot` method.
```php
    public function boot()
    {
        $settingsManager = $this->app->get(NovaSettingsManager::class);

        $settingsManager->addSection('Company', 'Details about the company');
        $settingsManager->addField('Company Name', 'text', 'company', 'the full company name');
    }
```
Current possible types are `text` and `time`.

## Roadmap
* Native Nova Fields
* Validation
* Scopes
