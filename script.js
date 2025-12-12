main = document.getElementById("main");
currentPage = window.location.hash;

function render() {
    switch (currentPage) {
        case "#home":
            main.innerHTML = `
            <div id="intro" class="section">
                <h1>JDC </h1>
                <h2>Welcome to the best website of all time! (not really)</h2>
                <p>This is a really basic website, made as a test for my coding abilities. 
                The site uses Javascript and SQL for database. This is my first website done with the use of Javascript,
                and probably the first one to be documented on Github since I did not save any of my previous projects. 
                That is truly tragic. As my Computer Science professor once said: "Every programmer is either always 
                doing backups, or will start doing backups soon."</p>
            </div>
            <div id="second">
                <div id="mods" class="section">
                    <h2>Website Moderators</h2>
                    <p>Our dedicated team of moderators maintains the website.</p>
                    <div class="mod">
                        <h3>Jan Czeladko</h3>
                        <p>Lead Moderator</p>
                    </div>
                    <div class="mod">
                        <h3>jasio123</h3>
                        <p>Assistant Moderator</p>
                    </div>
                    <div class="mod">
                        <h3>jasio1212</h3>
                        <p>Marketing Manager</p>
                    </div>
                    <div class="mod">
                        <h3>John Chocolate</h3>
                        <p>Content Reviewer</p>
                    </div>
                </div>
                <div id="button" class="section">
                    <h2>Useless Button</h2>
                    <p>Click the button below to see what happens.</p>
                    <button onclick="alert('You clicked the button!')">Click Me!</button>
                </div>
                <div id="cat" class="section">
                    <h2>Random Cat</h2>
                    <p>Please enjoy this cat picture.</p>
                    <img src="images/cat_photo.jpg" alt="Random Cat">
                </div>
            </div>
            <div id="space" class="section">
                <h1>Quite literally a space for nothing.</h1>
                <p>This section is intentionally left blank.</p>
                <p>Isn't that fascinating?</p>
                <p>Why? You may ask.</p>
                <p>A better question would be: Why not?</p>
            </div>
            `;
            break;
        case "#work":
            main.innerHTML = "<h1>List Page</h1><p>Here is a list of items.</p>";
            break;
        case "#about":
            main.innerHTML = `
            <div id="about-me" class="section">
                <h1>About Me</h1>
                <div id="about-content" class="about">
                    <img src="images/me.jpg" alt="Picture of Me">
                    <p id="first-text">
                    Hello! My name is Jan Czeladko, and I am a Computer Science student at Fordham University.
                    I have a passion for coding, with my favourite types of projects being simple video games I can develop for like 2 weeks just to never touch them again.
                    I also enjoy web development, which is why I created this website as a test of my skills.
                    In my free time, I like to play video games, read books, and explore new technologies.
                    <br>
                    <br>
                    I like talking about a whole lot of nonsense sometimes. You will probably have noticed that on the main page already.
                    I don't really feel like typing anything meaningful here anymore, so I will start rambling.
                    <br>
                    <br>
                    I like the game Geometry Dash. It's seemingly a very simple game, focused on a cube jumping over spikes and on top of platforms to
                    reach the end of a level. However, the levels can get very complex and challenging, requiring precise timing and lots
                    of memorization to complete. While lots of people think the game's main levels are really difficult already, the real fun starts with the
                    user-created levels. While the level's main mechanics stay the same, the level design can get absolutely crazy, and the difficulty can skyrocket.
                    Some of the hardest levels in the game can take the best players months or even over a year to complete. White people. That's like the top 100 players in the game.
                    They're all white. From Kansas. From New York. From New Jersey. That's the top 3 players in the game. Zoink, WPopoff and Trick. I have no idea
                    why I would mention that, but that's basically my rambling. Fun fact, my hardest completions are Volume, Cupid, and Cybersonic. They're all
                    extreme demons, which is the hardest difficulty in the game. Cupid is by far my hardest completion, taking me over 2 entire years to 
                    finally beat it. Super duper hard and fun. I would probably recommend trying out Geometry Dash if you like spending way too much time
                    on games.
                    </p>
                </div>
                <br><br><br><br>
                <div id="about-cat" class="about">
                    <p cat-text>
                    Also, here is a picture of my cat. Her name is Maciejka, which translates to Evening Stock in English. It's
                    a type of field flower that grows in Poland. But I usually call my cat Kocik, which is just a cute way of 
                    saying cat in Polish. She is a very cute and fluffy cat, and she likes to sleep a lot.
                    <br><br>
                    In this picture she is lying in my armchair, refusing to get out of it. She always loves sitting in the
                    places I sit in, even when I change the chairs at my desk. I think that's really cute of her. So, whenever
                    someone says cats are not affectionate, I just know they're wrong. Just because they don't run up to you
                    like dogs do, doesn't mean they don't care about you, and the chair situation is a perfect example of that.
                    </p>
                    <img src="images/cat.jpg" alt="My Cat">
                </div>
            </div>
            <div id="contact-me" class="section">
                <h2>Contact Me</h2>
                <p>
                If you would like to get in touch with me, feel free to reach out via email at:
                <a href="mailto:jdc34@fordham.edu"><strong>
                jdc34@fordham.edu
                </strong></a>
                </p>
            </div>
            `;
            break;
        default:
            currentPage = "#home";
            window.location.hash = "#home";
            break;
    }
}

window.addEventListener("hashchange", () => {
    currentPage = window.location.hash;
    render();
});

render();
