<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitf4d73e59bfdcf0d4eec30b3945196a43
{
    public static $prefixLengthsPsr4 = array (
        'N' => 
        array (
            'NextcodeGallery\\' => 16,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'NextcodeGallery\\' => 
        array (
            0 => __DIR__ . '/../..' . '/com',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitf4d73e59bfdcf0d4eec30b3945196a43::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitf4d73e59bfdcf0d4eec30b3945196a43::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
