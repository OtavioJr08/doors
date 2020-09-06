class DoorsGame{

    constructor(){

        this._title = document.querySelector('h1#title');
        this._audio = new Audio('audio.mp3');
        this._imageAward = document.createElement('img');
        this._doors = [
            {
                id:1,
                img:document.querySelector('img#door-1'),
                random:null,
                closed:true  
            },
            {
                id:2,
                img:document.querySelector('img#door-2'),
                random:null,
                closed:true    
            },
            {
                id:3,
                img:document.querySelector('img#door-3'),
                random:null,
                closed:true
            }
        ];

        this.initialize();
        this.initDoorsEvent();

    }

    initialize(){
        
        this.title = 'Teste sua Sorte! <br> <h3>Escolha uma Porta!</h3>';
        
        this._doors.forEach(door=>{
            door.img.src='images/door.png';
        });

        this.randomValues();

    }

    initDoorsEvent(){

        let doors = document.querySelectorAll('.doors > img');   
        
        doors.forEach(d=>{

            d.addEventListener('click',e=>{
                this.actionDoor(parseInt(d.id.replace('door-','')));
            });

        });

    }

    actionDoor(id){

        switch(id){

            case 1:
                
                if(this._doors[0].closed){

                    this.openDoor(0);
                
                }else{

                    this.closeDoor(0);

                    if(this._doors[0].random == 1)
                        this.audioConfig();
                
                }
                
                break;
            case 2:

                if(this._doors[1].closed){

                    this.openDoor(1);

                }else{

                    this.closeDoor(1);

                    if(this._doors[1].random == 1)
                        this.audioConfig();
                    
                }
                break;
            case 3:

                if(this._doors[2].closed){

                    this.openDoor(2);

                }else{

                    this.closeDoor(2);

                    if(this._doors[2].random == 1)
                        this.audioConfig();
                }

                break;
            default:
                this.openDoor(2);
                break;
        }

    }

    openDoor(index){

        this._doors[index].closed = false;
        this._doors[index].img.src = 'images/door-open.png';
        this.award(this._doors[index].random);
   
    }

    closeDoor(index){

        this._doors[index].closed = true;
        this._doors[index].img.src = 'images/door.png';
    
    }

    audioConfig(){
        
        this._audio.pause();
        this._audio.currentTime = 0;
    
    }

    award(random){

        switch(random){

            case 1:
                
                this._audio.play();
                this._audio.loop = true;
                
                break;
            case 2:
                
                this._imageAward.setAttribute('id','imageModal');
                let _bodyModal = document.querySelector('div#bodyModal');
                
                this.imageAwardConfig('images/vampeta.jpg',bodyModal,'100%')
                
                this.openModal();
                
                break;
            case 3:
                
                this.title = 'Você foi "dibrado"! <h4>Não tem prêmio nenhum idiota!</h4>';
                
                this._doors.forEach(d=>{
                    d.img.src = '';
                });
            
                let section = document.querySelector('section#content')
                
                this.imageAwardConfig('images/ronaldinho.gif',section,'50%');

                setInterval(()=>{
                    location.reload();
                },5000);

                break;
        }
    }

    imageAwardConfig(link, dad, size){
        
        this._imageAward.setAttribute('css','img-fluid');
        this._imageAward.src = link;
        this._imageAward.style.width = size;
        dad.appendChild(this._imageAward);
        
    }

    openModal(){

        $("#modalAward").modal({
              show: true,
        });

    }

    random(){
        return Math.floor(Math.random()*3)+1;
    }
    
    randomValues(){

        let values = [];
        let random;

        for(let i=0;i<3;i++){
             
            if(values.length == 0){ 
                
                random = this.random();
                values.push(random);
            
            }else{
                
                do{
                    
                    random = this.random();

                }while(values.indexOf(random)!=-1);
                
                values.push(random);
            }

            this._doors[i].random = values[i];

        } 
    }

    get title(){
        return this._title.innerHTML;
    }
    set title(value){
        this._title.innerHTML = value;
    }

}