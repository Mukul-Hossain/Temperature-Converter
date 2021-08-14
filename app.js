const submit = document.getElementById('temperature-form');
submit.addEventListener('submit', function(e){
    e.preventDefault();

    //Show Loader
    const loading = document.getElementById('loading');
    loading.style.display = 'block';


    setTimeout(showResult, 500);
});

function showResult(){

    //Hide Loader
    const loading = document.getElementById('loading');
    loading.style.display = 'none';

    //Show Result
    const result = document.getElementById('result');
    result.style.display = 'block';
    

    const fahrenheit = document.getElementById('fahrenheit').value;
    const celsius = document.getElementById('celsius');

    //Calculation
    if(fahrenheit == ''){
        showError("This Field Shoudn't Empty!");
    }else{
        const c = ((fahrenheit - 32)*5)/9;
        celsius.value = c.toFixed(2);
    }

}

function showError(error){

    //Hide Result
    const result = document.getElementById('result');
    result.style.display = 'none';


    const errorDiv = document.createElement('div');
    errorDiv.className = 'text-warning text-left';

    errorDiv.appendChild(document.createTextNode(error));

    const showEr = document.querySelector('.showEr');
    const textDanger = document.querySelector('.t-danger');

    showEr.insertBefore(errorDiv, textDanger);
    setTimeout(hideError, 2000);
}

function hideError(){
    document.querySelector('.text-warning').remove();
}