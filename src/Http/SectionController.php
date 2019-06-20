<?php

namespace Bambamboole\NovaSettings\Http;

use Bambamboole\NovaSettings\FieldManager;
use Bambamboole\NovaSettings\NovaSettingsManager;
use Illuminate\Routing\Controller;

class SectionController extends Controller
{
    /**
     * @var NovaSettingsManager
     */
    protected $manager;


    public function __construct(NovaSettingsManager $manager)
    {
        $this->manager = $manager;
    }

    public function index()
    {
        return response()->json($this->manager->getSection());
    }

    public function show($slug)
    {
        return response()->json($this->manager->getSection($slug));
    }
}
