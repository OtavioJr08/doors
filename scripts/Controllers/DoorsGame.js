class DoorsGame{

    constructor(){

        this._title = document.querySelector('h1#title');
        this._bodyModal = document.querySelector('div#bodyModal');
        this._audio = new Audio('audio.mp3');
        // this._image = document.createElement('img');
        this._doors = [
            
            {
                id:1,
                img:document.querySelector('img#door1'),
                random:null,
                fechada:true  
            },

            {
                id:2,
                img:document.querySelector('img#door2'),
                random:null,
                fechada:true    
            },

            {
                id:3,
                img:document.querySelector('img#door3'),
                random:null,
                fechada:true
            }

        ];

        this.initialize();
        

    }

    initialize(){
        this._title = 'Teste sua Sorte! <br> <h3>Escolha uma Porta!</h3>';
        
        this._doors.forEach(door=>{
            door.img.src='imagens/door.png';
        });

        this.random();
    }

    random(){

        

    }

    get title(){
        return this._title.innerHTML;
    }
    set title(value){
        this._title.innerHTML = value;
    }



}