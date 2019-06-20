<?php

namespace Bambamboole\NovaSettings\Http;

use Illuminate\Http\Request;
use Bambamboole\NovaSettings\NovaSettingsManager;

class FieldController
{
    /**
     * @var NovaSettingsManager
     */
    protected $manager;


    public function __construct(NovaSettingsManager $manager)
    {
        $this->manager = $manager;
    }

    public function update(Request $request, $slug)
    {
        $this->manager->update($slug, $request->input('value'));
        return response()->json(['success' => true]);
    }
}
