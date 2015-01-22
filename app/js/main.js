(function (window) {
    'use strict';

    require.config({
        paths: {
            phaser: 'vendor/phaser/phaser'
        }
    });

    require([
        'core/app',
        'core/engine',
        'phaser'
    ], function (App, Engine) {
        App.width = window.innerWidth;
        App.height = window.innerHeight;

        App.game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-test-game', Engine);
    });
}(this));
