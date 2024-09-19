const nav_dialog=document.getElementById('nav-dialog');
function handlemenubtn(){
    console.log("heello");
   nav_dialog.classList.toggle('hidden');
}

function setupIntersectionObserver(element,isLTR,speed){
    const callbackfunction=(entries)=>{
        const isIntersecting=entries[0].isIntersecting;
        console.log(element,isIntersecting);
        if(isIntersecting){
            document.addEventListener('scroll',scrolhandler);
        }else{
            document.removeEventListener('scroll',scrolhandler);
        }
    }
    const intersectionObserver=new IntersectionObserver(callbackfunction)
    intersectionObserver.observe(element)
    function scrolhandler(){
        const translateX=(window.innerHeight - element.getBoundingClientRect().top)*speed;
        let totaltranslate=0;
        const initialTranslateLTR=-48*4;
        const initialTransalateRTL=36*4;

        if(isLTR){
                totaltranslate=translateX+initialTranslateLTR
        }else{
            totaltranslate=-(translateX+initialTransalateRTL)
        }
        element.style.transform = `translateX(${totaltranslate}px)`;

    }

}

const line1=document.getElementById('line1');
const line2=document.getElementById('line2');
const line3=document.getElementById('line3');

setupIntersectionObserver(line1,true,0.15);
setupIntersectionObserver(line2,false,0.15);
setupIntersectionObserver(line3,true,0.15);
