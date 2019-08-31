class WeatherComponent{
          constructor(week){
                    let main = document.getElementById("main");
                    main.addEventListener("hello", function(event) { // (1)
                              alert("Hello from " + event.target.tagName); // Hello from H1
                            });
                          
                    for (let i = 0; i < week.length; i++) {
                              new DailyComponent(week[i]);
                    }
          }
}