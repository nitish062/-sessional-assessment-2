document.querySelector("#search-button").addEventListener('click',(e)=>{
  e.preventDefault();
  var xhr=new XMLHttpRequest();
  var input=document.querySelector("#idinput").value;
  const url=`https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`;
  xhr.open('GET',url);
  xhr.onreadystatechange=()=>{
      if(xhr.status==200 && xhr.readyState==4){
          var result=JSON.parse(xhr.responseText);
          var address=`<span>${result[input-1].address.suite} ${result[input-1].address.street} ${result[input-1].address.city}</span>`; 
          var phone=`<span>${result[input-1].phone.substr(0,14)}</span>`
          var email=`<span>${result[input-1].email}</span>`
          var website=`<span>${result[input-1].website}</span>`
          
          document.querySelector("#address").innerHTML=address;
          document.querySelector("#phone").innerHTML=phone;
          document.querySelector("#email").innerHTML=email;
          document.querySelector("#website").innerHTML=website;
          document.querySelector("#fullname").value=result[input-1].name;
          document.querySelector("#username").value=result[input-1].username;
          document.querySelector("#zipcode").value=result[input-1].address.zipcode;
          document.querySelector("#companyname").value=result[input-1].company.name;
          document.querySelector("#phrase").value=result[input-1].company.catchPhrase;
  }
  
}
xhr.send();
})
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 

