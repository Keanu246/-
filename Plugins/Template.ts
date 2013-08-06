/// <reference path="../Phaser/Game.ts" />
/// <reference path="../Phaser/core/Plugin.ts" />

/**
* Phaser - Example Plugin
*/

module Phaser.Plugins {

    export class Example extends Phaser.Plugin {

        constructor(game: Phaser.Game, parent) {

            super(game, parent);

            this.active = true;
            this.visible = true;

            this.hasPreUpdate = false;
            this.hasUpdate = false;
            this.hasPostUpdate = false;

            this.hasPreRender = false;
            this.hasRender = false;
            this.hasPostRender = false;

        }

        /**
         * Pre-update is called at the start of the update cycle, before any other updates have taken place.
         * It is only called if active is set to true.
         */
        public preUpdate() {
        }

        /**
         * Pre-update is called at the start of the update cycle, after all the core system updates have taken place, but before the world update.
         * It is only called if active is set to true.
         */
        public update() {
        }

        /**
         * Post-update is called at the end of the objects update cycle, after other update logic has taken place.
         * It is only called if active is set to true.
         */
        public postUpdate() {
        }

        /**
         * Pre-render is called right before the Game Renderer starts and before any custom preRender callbacks have been run.
         * It is only called if visible is set to true.
         */
        public preRender() {
        }

        /**
         * Pre-render is called right before the Game Renderer starts and before any custom preRender callbacks have been run.
         * It is only called if visible is set to true.
         */
        public render() {
        }

        /**
         * Post-render is called after every camera and game object has been rendered, also after any custom postRender callbacks have been run.
         * It is only called if visible is set to true.
         */
        public postRender() {
        }


    }

}
