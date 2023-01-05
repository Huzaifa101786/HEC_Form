 $('document').ready(function () {
    $('#container1').show();
    $('#container2').hide();
    $('#container3').hide();
    $('#container4').hide();
    $('#data_show').hide();

    $('#option1').click(function () {
      $('#container1').show();
      //$('#data_show').show();
      $('#container2').hide();
      $('#container3').hide();
      $('#container4').hide();
      
    })
    $('#option2').click(function () {
      $('#container2').show();
      $('#container1').hide();
      $('#container3').hide();
      $('#container4').hide();
      $('#data_show').hide();
    })
    $('#option3').click(function () {
      $('#container3').show();
      $('#container1').hide();
      $('#container2').hide();
      $('#container4').hide();
      $('#data_show').hide();

    })
    $('#option4').click(function () {
      $('#container4').show();
      $('#container1').hide();
      $('#container2').hide();
      $('#container3').hide();
      $('#data_show').hide();

    })
    $('#education_record').hide();
    $('#add_edu_record').hide();
    


    $('#check_record').click(function()
    {
        $('#education_record').show();
        $('#add_edu_record').hide();
    })

    $('#add_record').click(function()
    {
        $('#education_record').hide();
        $('#add_edu_record').show();
    })

    
  

 
    $('first').val();
  }); 

  var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
  };

  function username() {
  var fir = document.getElementById("first").value;
  var las= document.getElementById("last").value;
  var countr= document.getElementById("country").value;
  
  var city= document.getElementById("city").value;
  var cnic= document.getElementById("cnic").value;
  var f_name= document.getElementById("f_name").value;

  var x = $("#country").val();
  
  var dt =  new Date($("#date").val());
  var year = dt.getFullYear();
  var month = dt.getMonth()+1;
  var day = dt.getDate();
  const date = new Date();
  var c_month = date.getMonth() + 1;
  var c_year = date.getFullYear();
  
  var age_year = eval(c_year - year);
  //var age_month = eval();



  $('#data_show').show();
  $('#full_name').append(fir+ " " +las);
  $('#DOB').append(day+"-"+month+"-"+year);
  $('#cal_age').append(age_year);
  country.innerHTML=countr;
  $('#country').append(country);
  $('#city').append(city);
  $('#cnic').append(cnic);
  $('#f_name').append(f_name);

}


//document.addEventListener('DOMContentLoaded',() => {

//});

const cn = document.getElementById("countryIp");
//const cn = document.getElementById("countryIp");
  let output = [];
  let city_iname =[];

    url = `https://restcountries.com/v3.1/all`;
    fetch(url).then(res=>{
      return res.json();
    }).then(data => {
      data.forEach(country => {
        output += `<option> ${country.name.common} </option>`;
        // console.log(country.name.common);
        // console.log(output, '\n');
      })
      countryIp.innerHTML = output; 
      
    });
    
    // .then(city=>{
      //city_name += `<option> ${city.name.common} </option>`;
      // console.log(city);
    
    //  city_ip.innerHTML = output; 
    // });
  
  

  
  

