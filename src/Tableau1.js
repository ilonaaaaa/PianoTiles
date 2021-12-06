class animation extends Phaser.Scene{

    preload() {

        for (let i = 1; i <= 8; i++) {
            this.load.image('...' + i, 'png/run/run-' + i + '.png');
        }
    }

    create(){
            this.run_anim = this.add.sprite(400, 100, 'boy_run1').setOrigin(0,0);
            this.anims.create({
                key: 'animation_run',
                frames: [
                    {key:'boy_run1'},
                    {key:'boy_run2'}
                ],
                frameRate: 14,
                repeat: -1
            });
            this.run_anim.play('animation_run');
            this.run_anim.scale=1
        }



}