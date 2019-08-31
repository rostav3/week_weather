class DailyComponent {
          constructor(day) {
                    let main = document.getElementById("main");
                    let event = new Event("hello", { bubbles: true }); // (2)
                    main.dispatchEvent(event);

                    // TODO: handle daily view (enter to main.innerHTML)
          }
}