define([
    'core/app'
], function (App) {
    'use strict';

    var Engine = {
        player: undefined,
        cursors: undefined,

        preload: function () {},

        create: function () {
            App.game.add.tileSprite(0, 0, 1920, 1920, 'background');

            App.game.world.setBounds(0, 0, 1920, 1920);

            App.game.physics.startSystem(Phaser.Physics.P2JS);

            this.player = App.game.add.sprite(App.game.world.centerX, App.game.world.centerY, 'player');

            App.game.physics.p2.enable(this.player);

            this.cursors = App.game.input.keyboard.createCursorKeys();

            App.game.camera.follow(this.player);

            App.game.camera.deadzone = new Phaser.Rectangle(100, 100, 600, 400);
        },

        update: function () {
            this.player.body.setZeroVelocity();

            if (this.cursors.up.isDown) {
                this.player.body.moveUp(300);
            } else if (this.cursors.down.isDown) {
                this.player.body.moveDown(300);
            }

            if (this.cursors.left.isDown) {
                this.player.body.velocity.x = -300;
            } else if (this.cursors.right.isDown) {
                this.player.body.moveRight(300);
            }
        },

        render: function () {
            var zone = App.game.camera.deadzone;

            App.game.context.fillStyle = 'rgba(255,0,0,0.6)';
            App.game.context.fillRect(zone.x, zone.y, zone.width, zone.height);
        }
    };

    return Engine;
});
