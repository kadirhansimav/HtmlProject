const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
        console.log(this.responseText);

        // Parsing the response text
        const response = JSON.parse(this.responseText);

        const temp = "Istanbul(Europe) is " + response["current"]["temp_c"].toString() + " degrees Celsius now. Be careful your health!";

        // Updating the h2 element
        document.getElementById("temperature").textContent = temp;
    }
});

xhr.open('GET', 'https://weatherapi-com.p.rapidapi.com/current.json?q=q-Istanbul');
xhr.setRequestHeader('X-RapidAPI-Key', '193404848bmshbd0cc350cfed68bp116ae1jsn1f894e830a97');
xhr.setRequestHeader('X-RapidAPI-Host', 'weatherapi-com.p.rapidapi.com');

xhr.send();

