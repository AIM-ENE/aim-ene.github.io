class Effect {
    move(bean, targetX, targetY) {
        throw new Error("The 'move' method must be implemented in a subclass (es does NOT support abstract classes, so we have to throw an error to prevent the class from being instantiated).");
    }
}

class NoEffect extends Effect {
    move(bean, targetX, targetY) {
        bean.style.left = targetX + 'px';
        bean.style.top = targetY + 'px';
    }
}

class LeafEffect extends Effect {
    constructor() {
        super();
        this.beanX = 0;
        this.beanY = 0;
        this.hop = 0;
        this.rotation = 0;
        setInterval(() => {
            this.hop = Math.random() * 20 - 10; // Update de hop minder vaak
        }, 500);
    }

    move(bean, targetX, targetY) {
        // Bereken de nieuwe posities met een lichte vertraging (0.1)
        this.beanX += (targetX - this.beanX) * 0.1;
        this.beanY += (targetY - this.beanY) * 0.1;

        // Voeg een sinusfunctie toe voor wiegende rotatie en zijwaartse beweging
        const wiggle = Math.sin(Date.now() / 200) * 15; // Rotatie heen en weer
        this.rotation = Math.sin(Date.now() / 300) * 15; // Zacht draaien

        // Toepassen van wiegende beweging en rotatie op het blaadje
        bean.style.left = (this.beanX + wiggle) + 'px';
        bean.style.top = (this.beanY + this.hop) + 'px';
        bean.style.transform = `translate(-50%, -50%) rotate(${this.rotation}deg)`;
    }
}

class BeanEffect extends Effect  {
    constructor() {
        super(); 
        this.beanX = 0;
        this.beanY = 0;
        this.jumpHeight = 0;
    }

    move(bean, targetX, targetY) {
        this.beanX += (targetX - this.beanX) * 0.1;
        this.beanY += (targetY - this.beanY) * 0.1;
        this.jumpHeight = Math.abs(Math.sin(Date.now() / 300) * 15); // springende beweging
        bean.style.left = this.beanX + 'px';
        bean.style.top = (this.beanY - this.jumpHeight) + 'px';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const bean = document.getElementById('bean');
    let targetX = 0, targetY = 0;
    let strategy = new NoEffect();

    // Muispositie bijwerken
    document.addEventListener('mousemove', (e) => {
        targetX = e.pageX;
        targetY = e.pageY;
    });

    // Animatie op basis van de geselecteerde strategie
    function animateBean() {
        strategy.move(bean, targetX, targetY);
        requestAnimationFrame(animateBean);
    }

    // Strategie bijwerken bij selectie van radio button
    document.querySelectorAll('input[name="bean-mode"]').forEach((radio) => {
        radio.addEventListener('change', (e) => {
            const mode = e.target.value;
            if (mode === 'none') {
                bean.textContent = '';
                strategy = new NoEffect();
            }
            if (mode === 'leaf') {
                strategy = new LeafEffect();
                bean.textContent = '🍃';
            }
            if (mode === 'bean') {
                strategy = new BeanEffect();
                bean.textContent = '🫘';
            }
        });
    });

    // Start de animatie
    animateBean();
});