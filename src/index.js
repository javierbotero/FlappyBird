import Phaser from 'phaser';
import LoadScene from './scenes/LoadScene';
import MenuScene from './scenes/MenuScene';
import MainScene from './scenes/MainScene';
import GameOverScene from './scenes/GameOverScene';
import './style.scss';

const config = {
  type: Phaser.AUTO,
  width: 288,
  height: 512,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  scene: [
    LoadScene,
    MenuScene,
    MainScene,
    GameOverScene,
  ],
};

// eslint-disable-next-line no-unused-vars
const game = new Phaser.Game(config);
