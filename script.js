let titulo = document.querySelector('h1#titulo');
let audio = document.querySelector('audio');
let footer = document.querySelector('footer');
let bodyModal=document.querySelector('div#bodyModal');
let imagem = document.createElement('img');

const portas = {
    p1: {
        id:1,
        img:document.querySelector('img#door1'),
        random:null,
        fechada:true  
    },
    p2: {
        id:2,
        img:document.querySelector('img#door2'),
        random:null,
        fechada:true    
    },
    p3: {
        id:3,
        img:document.querySelector('img#door3'),
        random:null,
        fechada:true
    }
} 

function inicio() {
    titulo.innerHTML="Teste sua Sorte! <br> <h3>Escolha uma Porta!</h3>";
    portas.p1.img.src="imagens/door.png";
    portas.p2.img.src="imagens/door.png";
    portas.p3.img.src="imagens/door.png";
    sorteia();
}

function acao_porta(id) {
    switch(id){
        case 1:
            if(portas.p1.fechada==true){
                portas.p1.img.src="imagens/door-open.png";
                portas.p1.fechada=false;
                premio(portas.p1.random);
            }else{
                portas.p1.img.src="imagens/door.png";
                portas.p1.fechada=true;

                if(portas.p1.random==1){//paro o áudio
                    audio.pause();
                    audio.currentTime = 0;
                }else if(portas.p1.random==2){//apago a imagem para não repetir quando abrir a porta novamente
                    bodyModal.removeChild(imagem);
                }
            }
            break;
        case 2:
            if(portas.p2.fechada==true){
                portas.p2.img.src="imagens/door-open.png";
                portas.p2.fechada=false;
                premio(portas.p2.random);
            }else{
                portas.p2.img.src="imagens/door.png";
                portas.p2.fechada=true;

                if(portas.p2.random==1){//paro o áudio
                    audio.pause();
                    audio.currentTime = 0;
                }else if(portas.p2.random==2){//apago a imagem para não repetir quando abrir a porta novamente
                    bodyModal.removeChild(imagem);
                }
            }
            break;
        case 3:
            if(portas.p3.fechada==true){
                portas.p3.img.src="imagens/door-open.png";
                portas.p3.fechada=false;
                premio(portas.p3.random);
            }else{
                portas.p3.img.src="imagens/door.png";
                portas.p3.fechada=true;
                if(portas.p3.random==1){//paro o áudio
                    audio.pause();
                    audio.currentTime = 0;
                }else if(portas.p3.random==2){//apago a imagem para não repetir quando abrir a porta novamente
                    bodyModal.removeChild(imagem);
                }
            }
            break;
        default:
            alert('Erro inesperado :(');
    }
}

function premio(random) {

    /*
        1: Gemidão
        2: Foto Vampeta
        3: Prêmio
    */ 

    if(random==1){
        audio.src="gemidao.mp3";
        audio.play();
        audio.loop=true;
    }else if(random==2){

        // Coloca a imagem dinamicamente
        imagem.setAttribute('id','imagemModal');
        imagem.setAttribute('class','img-fluid');
        imagem.style.width="100%";
        imagem.src="imagens/vampeta.jpg";
        bodyModal.appendChild(imagem);
        
        abreModal();
    }else{ //Prêmio
        
        titulo.innerHTML='Você foi "dibrado"! <h4>Não tem prêmio nenhum idiota!</h4>';
        portas.p1.img.src="";
        portas.p2.img.src="";
        portas.p3.img.src="";

        imagem.src="imagens/ronaldinho.gif";
        imagem.setAttribute('css','img-fluid');
        imagem.style.width="50%";
        
        let section = document.querySelector('section#conteudo');
        section.appendChild(imagem);

        setInterval(function(){ 
            location.reload();}, 4000);
    }
}

function abreModal() {
    $("#modalPremio").modal({
      show: true,
    });
}

function sorteia() {

    let sorteados=[];
    let random;

    for(let i=0;i<3;i++){ //loop para gerar um número aleatório 3 vezes
        if(sorteados.length==0){ //se o array estiver vazio, gero um novo número e armazeno.
            random = Math.floor(Math.random()*3)+1;
            sorteados.push(random);
        }else{ //se já estiver preenchido
            do{
                random = Math.floor(Math.random()*3)+1;
            }while(sorteados.indexOf(random)!=-1);//gero um número enquanto eu encontrar o valor armazenado no array
            sorteados.push(random);
        }

        if(i==0)
            portas.p1.random = sorteados[i];
        else if(i==1)
            portas.p2.random = sorteados[i];
        else
            portas.p3.random = sorteados[i];
    }
    
}