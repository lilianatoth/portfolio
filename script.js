function toggle_secret(){
    if (document.getElementById('gomb').innerText=="psszt...") {
        document.getElementById('titkos').className='visible_div';
        document.getElementById('gomb').innerText="magic";
    }
    else {
        document.getElementById('titkos').className='hidden_div';
        document.getElementById('gomb').innerText="psszt...";
    }
    
}
