function myFunction(){
  var x = document.getElementById("fname");

  //x.value = x.value.toUpperCase();
  document.getElementById("search").onclick =famous; 


var  famous_things = [  ["FAMOUS PLACES IN THE WORLD","1.The Statue of Liberty, New York, USA","2. Eiffel Tower, Paris, France","3. Great Wall of China, Beijing, China","4. Taj Mahal, Agra, Uttar Pradesh, India","5. The Colosseum, Rome, Italy","6. The Pyramids of Giza and The Sphinx, Egypt","7. Sydney Opera House, Sydney, Australia","8. Golden Gate Bridge, San Francisco, USA","9. Mount Fuji, Honshu Island, Japan","10. Christ The Redeemer, Rio de Janeiro, Brazil" ],     [ "FAMOUS PERSONALITIES IN THE WORLD","1. Micheal Jackson,American", "2. Bill gates,American", "3. Barack Hussein Obama II,American politician", "4,justin bieber,a Canadian singer","5. Sachin tendolker ,an Indian cricketer,Bombay, India","6.Tiger woods,Cypress, California","7. the Under taker,an American professional wrestler","8. John cena, Los Angeles, California", "9.QUAID-E-AZAM MOHAMMAD ALl JINNAH,was a barrister, politician and the founder of Pakistan", "10. Roger federer,Basel, Switzerland" ],    ["FAMOUS AUTHORS IN THE WORLD","1. William Shakespeare,tratford-upon-Avon on April 23, 1564.","2. George Orwell, 25th June, 1903 in Motihari, Bihar, in British India","3. J.K. Rowling,31 July 1965 Yate, Gloucestershire, England","5. Virginia Woolf,born January 25, 1882, London, England—died March 28, 1941, near Rodmell, Sussex","6. Ernest Hemingway, (1899-1961), born in Oak Park, Illinois","7. William Faulkner,born September 25, 1897, New Albany, Mississippi, U.S.—died July 6, 1962, Byhalia, Mississippi"] , ["FAMOUS WEBSITES IN THE WORLD","1.Google","2.YouTube","3.YouTube","4.Baidu","5.Wikipedia","6.Amazon","7.Twitter","8.Instagram","9.Yahoo!","10.amazon"] , ["FAMOUS TUTORIALS IN THE WORLD","Python","JavaScript","Java","Swift","GoLang","C#","Scala","Kotlin","Ruby"] ,    ["SEVEN WONDERS IN THE WORLD","Great Pyramid of Giza","1.Great Wall of China","2.Petra","3.Colosseum","4.Chichen Itza","5.Machu Picchu","6.Taj Mahal","7.Christ the Redeemer"],["FAMOUS UNIVERSITIES IN THE WORLD","Massachusetts Institute of Technology (MIT) :United States","Stanford    UniversitY UnitedStates","Harvard University United States ","California Institute of Technology (Caltech)United States","University of Oxford United Kingdom","ETH Zurich (Swiss Federal Institute of Technology) Switzerland","University of Cambridge United Kingdom","Imperial College London United Kingdom","University of Chicago  United States","UCL (University College London) United Kingdom"],["FAMOUS ELECTRONIC GADJECTS IN THE WORLD","Apple iPhone","Sony Trinitron","Apple Macintosh","Sony Walkman",
"Victrola Record Player","Regency TR-1 Transistor Radio","Kodak Brownie Camera","Magic Wand"],["FAMOUS DISCOVERIES THAT CHANGES THE WORLD","The Copernicum System :Nicholas Copernicus","Gravity :Isaac Newton ","Electricity: Michael Faraday.","Evolution: Charles Darwin",
"Louis Pasteur:discovered that disease came from microorganisms","Theory of Relativity:Albert Einstein","The Big Bang Theory:, Georges Lemaître ","Penicillin: Alexander Fleming","DNA:James Watson","Atomic Bomb:Atomic Bomb","HIV/AIDS:Luc Montagnier of France and Robert Gallo"]]


  function famous(){
    var text = "";
    for (var i=0; i<famous_things[0].length;i++){
      text+=famous_things[x.value - 1][i]+ "<br>"+"<br>";

    } 
     document.getElementById("content").innerHTML =text ;
    
  }
 
}
