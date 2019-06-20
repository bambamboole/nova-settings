<?php


namespace Bambamboole\NovaSettings;


use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;

class NovaSettingsManager
{
    /**
     * @var array
     */
    protected $sections;

    /**
     * @var array
     */
    protected $fields;

    public function __construct()
    {
        $this->addSection('General', 'This is the default section.');
        $this->addField('Text Field', 'text', 'general', 'field description');
    }

    public function addSection(string $name, string $description = '')
    {
        $this->sections[Str::slug($name)] = [
            'name' => $name,
            'slug' => Str::slug($name),
            'description' => $description,
        ];

        return $this;
    }

    public function addField(string $name, string $type, string $section = 'general', string $description = '')
    {
        if (!isset($this->sections[$section])) {
            $this->addSection($section);
        }

        $this->sections[$section]['fields'][] = [
            'name' => $name,
            'slug' => Str::slug($section) . '_' . Str::slug($name),
            'type' => $type,
            'description' => $description,
        ];

        return $this;
    }


    public function getSection($slug = null)
    {
        if (!$slug) {
            return $this->sections;
        }
        $section = $this->sections[$slug];

        $section['fields'] = collect($section['fields'])->map(function ($field) {
            return Field::firstOrCreate([
                'name' => $field['name'],
                'slug' => $field['slug'],
                'type' => $field['type'],
                'description' => $field['description'],
            ]);
        })->toArray();

        return $section;
    }

    public function update(string $slug, $value)
    {
        $field = Field::where('slug', $slug)->firstOrFail();
        $field->value = $value;
        $field->save();
        Cache::forget('nova_settings');
    }

    public function get($slug = null)
    {
        $fields = Cache::rememberForever('nova_settings', function () {
            return Field::all();
        });

        if (!$slug) {
            return $fields;
        }

        return $fields->first(function ($field) use ($slug) {
            return $field->slug === $slug;
        });
    }
}
