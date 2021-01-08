div#wrapper>(header>(div.logo>img+)(nav>ul>li*3))+main+footer

<!-- Opdracht 7  -->
            <section>
                <div class="assignments">
                    <h3>Opdracht 7</h3>
                    <p>
                        Zie de onderstaande image met tekst.
                        Kun jij dit namaken? Gebruik zelf een foto van een zonnige bestemming. 
                        Gebruik position, maar je mag geen z-index toepassen.
                    </p>
                    <figure><img src="../res/img/ond3_opdr7_fig.png" alt="Onderdeel 3 Opdracht 7 fig"></figure>
                </div>
                <div id="opdr7" class="results">
                    <img src="../res/img/avila-beach-1.webp" alt="Avila Beach Cura&ccedil;ao">
                    <h1>Greetings from <span class="white">Cura&ccedil;ao</span></h1>
                    <p class="yellow">Even in these COVID-19 times open for The Netherlands</p>
                                        
                </div>
            </section>

            .opdracht5>h3{Opdracht 5}+(.questions>div>p)+(.answers>p)

            (div.card>(div.card_header>img)+(div.card_body>h3+p)+(div.card_footer>(div.footer_btn>a[href="#"]{Play $})))*4
            
            //Eindopdracht Flexbox
            div>div.days>div.day>(p.day_nr+p.day_name+div_tasks>ul>li.task*5)*31

            //Opdracht 6 Transitions
            .deck>(.card>((.card_head>p>lorem3)+(.card_body>h3>{Title of the article}))+.card_footer>lorem2)*5

<​h1​>​Guess the word​</​h1​>   ​<​section​>       ​<​div​ ​class​=​"words"​>           ​<​button​ ​onclick​=​"​guess​(​this​)"​><​divclass​=​"fg"​>​Show​</​div​><​span​>​Together​</​span​></​button​>           ​<​button​ ​onclick​=​"​guess​(​this​)"​><​divclass​=​"fg"​>​Show​</​div​><​span​>​Teamwork​</​span​></​button​>           ​<​button​ ​onclick​=​"​guess​(​this​)"​><​div​ ​class​=​"fg"​>​Show​</​div​><​span​>​Scrum​</​span​></​button​>           ​<​button​ ​onclick​=​"​guess​(​this​)"​><​divclass​=​"fg"​>​Show​</​div​><​span​>​Individual​</​span​></​button​>           ​<​button​ ​onclick​=​"​guess​(​this​)"​><​divclass​=​"fg"​>​Show​</​div​><​span​>​Moments​</​span​></​button​>           ​<​button​ ​onclick​=​"​guess​(​this​)"​><​div​ ​class​=​"fg"​>​Show​</​div​><​span​>​Like​</​span​></​button​>           ​<​button​ ​onclick​=​"​guess​(​this​)"​><​div​ ​class​=​"fg"​>​Show​</​div​><​span​>​Dislike​</​span​></​button​>           ​<​button​ ​onclick​=​"​guess​(​this​)"​><​div​ ​class​=​"fg"​>​Show​</​div​><​span​>​Money​</​span​></​button​>           ​<​button​ ​onclick​=​"​guess​(​this​)"​><​divclass​=​"fg"​>​Show​</​div​><​span​>​Important​</​span​></​button​>       ​</​div​>   ​</​section​>   ​<​div​>       ​<​span​>​The number of wrong guessing: ​<​span​ ​id​=​"count"​>​0​</​span​></​span​>       ​<​p​ ​id​=​"label"​></​p​>   ​</​div​>   ​<​script​>       ​const​ ​words​ = [​"Together"​, ​"Teamwork"​, ​"Scrum"​, ​"Individual"​, ​"Moments"​, ​"Like"​, ​"Dislike"​,"Money"​, ​"Important"​];       ​const​ ​guessingWord​ = ​words​[​Math​.​round​(​Math​.​random​() * ​8​)];
       ​function​ ​guess​(​obj​) {       }   ​</​script​></​body​></​html​>
