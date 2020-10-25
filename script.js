    var introduction = ['whats your name?',
    'where are you from?',
    'what is your age?',
    'name of your college or work place',
    'wow,nice to meet you!!:), my bot shows famous things in different catogories who has to known the most.choose your options.',
    ];
    var num = 0;
    var ask = document.querySelector("#point");
    ask.innerHTML = introduction[0];
    var given = document.querySelector("#write");

    function result(){
      var fund = given.value;
      if(given.value == ""){

      }else{
        if (num == 0){
          ask.innerHTML='hello nice to meet you ' + fund + '  :))';
          fund = "";
          given.setAttribute("placeholder","wait for 3 sec");
          num++;
          setTimeout(changeQuestion , 3000);


        }else if(num == 1){
          ask.innerHTML=fund + ' is a fantastic place to live';
          fund ="";
          given.setAttribute("placeholder","wait for 3 sec");
          num++;
          setTimeout(changeQuestion , 3000);

        }else if(num == 2){
          ask.innerHTML='you are born in ' + (2020 - fund) ;
          fund ="";
          given.setAttribute("placeholder","wait for 3 sec");
          num++;
          setTimeout(changeQuestion , 3000);

        }else if(num == 3){
          ask.innerHTML=fund +' is a great working space,it gives more oppurtunities';
          fund = "";
          given.setAttribute("placeholder","wait for 3 sec");
          num++;
          setTimeout(changeQuestion , 3000);

        }
      }
    }
    function changeQuestion(){
      given.setAttribute("placeholder","Enter your response");
      ask.innerHTML = introduction[num];
      if(num == 4){
        given.style.display = "none";
      }
    }

    $(document).on('keypress',function(e){
      if(e.which == 13){
        result();
      }
    })
