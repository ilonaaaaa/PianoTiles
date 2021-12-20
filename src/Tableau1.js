/**
 *
 *
 */
class Tableau1 extends Phaser.Scene{

    preload(){
        //preload les tableaux
        this.load.image("tableauv21","assets/tableau/tv21a.png");
        this.load.image("tableauv22","assets/tableau/tv22a.png");
        this.load.image("tableauv23","assets/tableau/tv23a.png");
        this.load.image("tableauv24","assets/tableau/tv24a.png");
        this.load.image("tableauv25","assets/tableau/tv25a.png");
        this.load.image("tableauv26","assets/tableau/tv26a.png");
        this.load.image("tableauv27","assets/tableau/tv27a.png");
        this.load.image("tableauv28","assets/tableau/tv28a.png");
        this.load.image("tableauv29","assets/tableau/tv29a.png");
        this.load.image("tableauv210","assets/tableau/tv210a.png");
        this.load.image("tableauv211","assets/tableau/tv211a.png");
        this.load.image("tableauv212","assets/tableau/tv212a.png");
        this.load.image("tableauv213","assets/tableau/tv213a.png");
        this.load.image("tableauv214","assets/tableau/tv214a.png");
        this.load.image("tableauv215","assets/tableau/tv215a.png");
        this.load.image("tableauv216","assets/tableau/tv216a.png");

        //preload les scenes
        this.load.image("sceneg","assets/scene/scene.png");
        this.load.image("scenev1g1","assets/scene/scenev1girlclose.png");
        this.load.image("scenev1g2","assets/scene/scenev1girlleft.png");
        this.load.image("scenev1g3","assets/scene/scenev1girlright.png");
        this.load.image("scenev3","assets/scene/scenev3.png");
    }

    create(){
        //fond
        this.scene = this.add.sprite(0,0, 'sceneg').setOrigin(0,0);
        this.scene.scale = 0.25

        //tableaux vivants
        this.tv216a=this.add.image(-80,80, 'tableauv216').setOrigin(-0.092,0.26);
        this.tv216a.scale = 0.25
        this.tv216a.setVisible(false)

        this.tv21a=this.add.image(-80,80, 'tableauv21').setOrigin(-0.081,0.27);
        this.tv21a.scale = 0.26
        this.tv21a.setVisible(false)

        this.tv22a=this.add.image(-80,80, 'tableauv22').setOrigin(-0.092,0.263);
        this.tv22a.scale = 0.249
        this.tv22a.setVisible(false)

        this.tv23a=this.add.image(-80,80, 'tableauv23').setOrigin(-0.096,0.258);
        this.tv23a.scale = 0.247
        this.tv23a.setVisible(false)

        this.tv24a=this.add.image(-80,80, 'tableauv24').setOrigin(-0.097,0.265);
        this.tv24a.scale = 0.247
        this.tv24a.setVisible(false)

        this.tv25a=this.add.image(-80,80, 'tableauv25').setOrigin(-0.090,0.265);
        this.tv25a.scale = 0.251
        this.tv25a.setVisible(false)

        this.tv26a=this.add.image(-80,80, 'tableauv26').setOrigin(-0.090,0.265);
        this.tv26a.scale = 0.251
        this.tv26a.setVisible(false)

        this.tv27a=this.add.image(-80,80, 'tableauv27').setOrigin(-0.090,0.265);
        this.tv27a.scale = 0.251
        this.tv27a.setVisible(false)

        this.tv28a=this.add.image(-80,80, 'tableauv28').setOrigin(-0.089,0.265);
        this.tv28a.scale = 0.251
        this.tv28a.setVisible(false)

        this.tv29a=this.add.image(-80,80, 'tableauv29').setOrigin(-0.089,0.265);
        this.tv29a.scale = 0.251
        this.tv29a.setVisible(false)

        this.tv210a=this.add.image(-80,80, 'tableauv210').setOrigin(-0.089,0.265);
        this.tv210a.scale = 0.251
        this.tv210a.setVisible(false)

        this.tv211a=this.add.image(-80,80, 'tableauv211').setOrigin(-0.088,0.265);
        this.tv211a.scale = 0.251
        this.tv211a.setVisible(false)

        this.tv212a=this.add.image(-80,80, 'tableauv212').setOrigin(-0.088,0.265);
        this.tv212a.scale = 0.251
        this.tv212a.setVisible(false)

        this.tv213a=this.add.image(-80,80, 'tableauv213').setOrigin(-0.088,0.265);
        this.tv213a.scale = 0.251
        this.tv213a.setVisible(false)

        this.tv214a=this.add.image(-80,80, 'tableauv214').setOrigin(-0.088,0.265);
        this.tv214a.scale = 0.251
        this.tv214a.setVisible(false)

        this.tv215a=this.add.image(-80,80, 'tableauv215').setOrigin(-0.088,0.265);
        this.tv215a.scale = 0.251
        this.tv215a.setVisible(false)

        //fille en mouvement
        this.scenev1girlclose = this.add.sprite(0,0, 'scenev1g1').setOrigin(0,0);
        this.scenev1girlclose.scale = 0.25
        this.scenev1girlclose.setVisible(false)

        this.scenev1girlleft = this.add.sprite(0,0, 'scenev1g2').setOrigin(0,0);
        this.scenev1girlleft.scale = 0.25
        this.scenev1girlleft.setVisible(false)

        this.scenev1girlright = this.add.sprite(0,0, 'scenev1g3').setOrigin(0,0);
        this.scenev1girlright.scale = 0.25
        this.scenev1girlright.setVisible(false)

        //ombres
        this.scenev3 = this.add.sprite(0,0, 'scenev3').setOrigin(0,0);
        this.scenev3.scale = 0.25
        this.scenev3.setVisible(false)


        this.initKeyboard()

    }
    getFrames(prefix,length){
        let frames=[];
        for (let i=1;i<=length;i++){
            frames.push({key: prefix+i});
        }
        return frames;
    }
    initKeyboard(){
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.A:
                    me.scenev1girlleft.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Z:
                    me.scenev1girlclose.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.E:
                    me.scenev1girlright.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Q:
                    me.tv21a.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.S:
                    me.tv22a.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.D:
                    me.tv23a.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.F:
                    me.tv24a.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.G:
                    me.tv25a.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.H:
                    me.tv26a.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.J:
                    me.tv27a.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.K:
                    me.tv28a.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.L:
                    me.tv29a.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.M:
                    me.tv210a.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.X:
                    me.tv212a.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.C:
                    me.tv213a.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.V:
                    me.scenev3.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.N:
                    me.tv215a.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.B:
                    me.tv216a.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.W:
                    me.tv211a.visible=false
                    break;
            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.A:
                    me.scenev1girlleft.visible=false
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Z:
                    me.scenev1girlclose.visible=false
                    break;
                case Phaser.Input.Keyboard.KeyCodes.E:
                    me.scenev1girlright.visible=false
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Q:
                    me.tv21a.visible=false
                    break;
                case Phaser.Input.Keyboard.KeyCodes.S:
                    me.tv22a.visible=false
                    break;
                case Phaser.Input.Keyboard.KeyCodes.D:
                    me.tv23a.visible=false
                    break;
                case Phaser.Input.Keyboard.KeyCodes.F:
                    me.tv24a.visible=false
                    break;
                case Phaser.Input.Keyboard.KeyCodes.G:
                    me.tv25a.visible=false
                    break;
                case Phaser.Input.Keyboard.KeyCodes.H:
                    me.tv26a.visible=false
                    break;
                case Phaser.Input.Keyboard.KeyCodes.J:
                    me.tv27a.visible=false
                    break;
                case Phaser.Input.Keyboard.KeyCodes.K:
                    me.tv28a.visible=false
                    break;
                case Phaser.Input.Keyboard.KeyCodes.L:
                    me.tv29a.visible=false
                    break;
                case Phaser.Input.Keyboard.KeyCodes.M:
                    me.tv210a.visible=false
                    break;
                case Phaser.Input.Keyboard.KeyCodes.X:
                    me.tv212a.visible=false
                    break;
                case Phaser.Input.Keyboard.KeyCodes.C:
                    me.tv213a.visible=false
                    break;
                case Phaser.Input.Keyboard.KeyCodes.V:
                    me.scenev3.visible=false
                    break;
                case Phaser.Input.Keyboard.KeyCodes.N:
                    me.tv215a.visible=false
                    break;
                case Phaser.Input.Keyboard.KeyCodes.B:
                    me.tv216a.visible=false
                    break
                case Phaser.Input.Keyboard.KeyCodes.W:
                    me.tv211a.visible=true
                    break;
            }
        });
    }

    update(){
    }

}