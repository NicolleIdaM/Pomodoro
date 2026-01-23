class PomodoroTimer {
    constructor() {
        this.TOTAL_MINUTES = 25; // Total duration of the timer in minutes
        this.TOTAL_IMAGES = 18; // Total number of images to cycle through
        this.IMAGE_NAME = 'T'; // Base name of the images
        this.IMAGE_TYPE = 'png'; // Image file type

        this.TIME = this.TOTAL_MINUTES * 60 * 1000; // Total time in milliseconds
        this.TIME_INTERVAL = this.TIME / this.TOTAL_IMAGES; // Time interval for each image

        this.startTimer = null;
        this.running = false;
        this.IdAnimationFrame = null;
        this.currentImageIndex = 0;

        this.timer = document.getElementById('timer');
        this.imageEl = document.getElementById('current-image');
        this.startBtn = document.getElementById('start');
        this.pauseBtn = document.getElementById('pause');
        this.resetBtn = document.getElementById('reset');

        this.init();
    }

    init() {
        this.loadImage(0);

        // Configura botões
        this.startBtn.addEventListener('click', () => this.start());
        this.pauseBtn.addEventListener('click', () => this.pause());
        this.resetBtn.addEventListener('click', () => this.reset());

        // Atualiza timer inicial
        this.updateTimerDisplay(0);
    }

    start() {
        if (this.running) return;
        this.running = true;
        this.startTimer = Date.now();
        this.update();
    }

    update() {
        if (!this.running) return;

        const currentTime = Date.now();
        const elapsedTime = currentTime - this.startTimer;

        if (this.timer) {
            this.updateTimerDisplay(elapsedTime);
        }

        const newImageIndex = Math.floor(elapsedTime / this.TIME_INTERVAL);

        if (newImageIndex <= this.TOTAL_IMAGES) {
            if (newImageIndex !== this.currentImageIndex) {
                this.currentImageIndex = newImageIndex;
                this.loadImage(this.currentImageIndex);
            }
            this.IdAnimationFrame = requestAnimationFrame(() => this.update());
        } else {
            this.showFinalGif();
        }
    }

    updateTimerDisplay(elapsedTime) {
        if (!this.timer) return;

        const totalSeconds = Math.max(0, this.TIME - elapsedTime);
        const minutes = Math.floor(totalSeconds / 60000);
        const seconds = Math.floor((totalSeconds % 60000) / 1000);
        this.timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    loadImage(index) {
        const imageNumber = index + 1;
        const imagePath = `../../public/assets/images/${this.IMAGE_NAME}${imageNumber}.${this.IMAGE_TYPE}`;

        console.log(`Carregando: ${imagePath}`);

        this.imageEl.src = imagePath;
    }

    showFinalGif() {
        this.running = false;
        cancelAnimationFrame(this.IdAnimationFrame);

        this.imageEl.src = `../../public/assets/gif/Final.gif`;

        if (this.timer) {
            this.timer.textContent = '00:00';
        }
    }

    pause() {
        this.running = false;
        cancelAnimationFrame(this.IdAnimationFrame);
        console.log('Timer pausado');
    }

    resume() {
        if (!this.running) {
            this.running = true;
            this.startTimer = Date.now() - (this.currentImageIndex * this.TIME_INTERVAL);
            this.update();
        }
    }

    reset() {
        this.running = false;
        cancelAnimationFrame(this.IdAnimationFrame);
        this.currentImageIndex = 0;
        this.loadImage(this.currentImageIndex);
        this.updateTimerDisplay(0);
        console.log('Timer resetado');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const pomodoroTimer = new PomodoroTimer();
    window.pomodoroTimer = pomodoroTimer;
});