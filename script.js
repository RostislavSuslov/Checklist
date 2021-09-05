window.addEventListener('load', function () {

    const createTemplate = ({
            description = '',
            value = "",
            price = ""
        }

    ) => {
        const _block = document.createElement('div')
        _block.classList.add('container')
        
        if (description || value || price) {
            const _text = document.createElement('div')
            _text.classList.add('item')
            _text.innerHTML = (`
            
            <div class="price">${price} грн</div>
            <div class="value">${value}</div>
            <div class="description">${description}</div>
            `)
            
            _block.appendChild(_text)
        }
        
        
        
        return _block
    }
    
    
    class Checklist {
        constructor(description, value, price) {
            this.description;
            this.value;
            this.price;
            
            this.init()
            this.initTemplate()
            this.render()
        }
        
        init() {
            this._wrap = document.querySelector('.wrapper')
        }
        
        
        initTemplate() {
            this.block = createTemplate(
                {
                    description: this.description,
                    value: this.value,
                    price: this.price
                }
                )
                console.log(this.description);

            return this.block
           
        }
        
        render() {
            this._wrap.appendChild(this.initTemplate())
        }
    }
    const tasksArr = [
        {id: 1, name: 'Buzz', tagline: 'A Real Bitter Experience.',},
        {id: 2, name: 'Trashy Blonde', tagline: "You Know You Shouldn't",},
        {id: 3, name: 'Berliner Weisse With Yuzu - B-Sides', tagline: 'Japanese Citrus Berliner Weisse.',},];
        
      tasksArr.map(e=>  new Checklist(e.description, e.value, e.price))
 

     

});