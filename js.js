$(document).ready(function(){
    $(".rules_header").click(function(){
        $(".rules_main").slideToggle(333);
    });

    let currlvl = 0;
    let lvlprog = 0;
    showRebus(rebus0);

    let formInput = document.getElementById("formInput");
    let formBtn = document.getElementById("formBtn");
    let answer = ["4", "8", "1500", "29", "78"]

    function showRebus(classBlock){
        document.getElementById(classBlock);
        classBlock.classList.add('active');   
    }

    let progBarBg = document.getElementById("progBar");


    formBtn.addEventListener('click', function(event){
        event.preventDefault();
        let inputText = formInput.value;
        if(inputText == answer[lvlprog]){
            lvlprog++;
            let temp = document.getElementById(`rebus${lvlprog}`);
            showRebus(temp);

            let numwidht = 100 * lvlprog - 90;
            $('#progBar').css('width', numwidht);


            if(lvlprog == answer.length ){
                $('#winAction').toggle();
            }

        }else{
            alert("Неа, пробуй ещё раз");
        }
    });

function win(){
    let winAc
}


    
});