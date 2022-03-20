class Pipe 
{
    constructor() 
    {
        this.spacing = 175;
        this.top = random(height / 2, 3 / 4 * height);
        this.bottom = this.top + this.spacing;

        this.x = width;
        this.w = 80;
        this.speed = 3;

        this.passed = false;
        this.highlight = false;
    }

    hits(bird)
    {
        let halfBirdHeight = bird.height / 2;
        let halfBirdWidth = bird.width / 2;
        if (bird.y - halfBirdHeight < this.top || bird.y + halfBirdHeight > this.bottom)
        {
            if (bird.x + halfBirdWidth > this.x && bird.x - halfBirdWidth < this.x + this.w)
            {
                this.highlight = true;
                this.passed = true;
                return true;
            }
        }
        this.highlight = false;
        return false;
    }
    
    pass(bird)
    {
        if (bird.x > this.x && !this.passed)
        {
            this.passed = true;
            return true;
        }
        return false;
    }

    drawHalf()
    {
        let howManyNeeded;
        let peakRatio = pipePeakSprite.height / pipePeakSprite.width;
        let bodyRatio = pipeBodySprite.height / pipeBodySprite.width;
        
        howManyNeeded = Math.round(height / (this.w * bodyRatio));

        for (let i = 0; i < howManyNeeded; ++i)
        {
            let offset = this.w * (i * bodyRatio + peakRatio);
            image(pipeBodySprite, -this.w / 2, offset, this.w, this.w * bodyRatio);
        }
        image(pipePeakSprite, -this.w / 2, 0, this.w, this.w * peakRatio);
    }

    show()
    {
        push();
            translate(this.x + this.w / 2, this.bottom);
            this.drawHalf();
            translate(0, -this.spacing);
            rotate(PI);
            this.drawHalf();
        pop();
    }

    update() 
    {
        this.x -= this.speed;
    }

    offscreen() 
    {
        return (this.x < -this.w);
    }
}