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
            main.innerHTML = `
            <div id="projects" class="section">
                <h1>My Projects</h1>
                <p id="little-note">Click on any project to view its repository on GitHub!!!</p>
                <div class="row">
                    <button class="project" onclick="onclick="window.open('https://github.com/fubaxa/GoodWebsite', '_blank')">
                        <h2>Portfolio Website</h2>
                        <p>
                        This very website you are currently on! Built using HTML, CSS, and JavaScript, 
                        this portfolio website showcases my skills and projects as a developer.
                        It features a clean and modern design, with easy navigation and responsive layout.
                        The website is still a work in progress, but with the addition of new projects and skills, it will get
                        updated regularly.
                        </p>
                    </button>
                    <button class="project" onclick="window.open('https://github.com/fubaxa/2DRPGgame', '_blank')">
                        <h2>2D RPG game</h2>
                        <p>
                        My attempt at creating a 2D RPG game using Python and Pygame. The game features a player character that can move around a map,
                        "some" npcs (I managed to make them appear on the map but there are no iteractions implemented yet),
                        and basic collision detection. The game is very early in development, but it's been a fun learning experience so far
                        and I'm proud of what I've accomplished.
                        </p>
                    </button>
                </div>
                <div class="row">
                    <button id="text-game" class="project" onclick="window.open('https://github.com/fubaxa/text-based-game', '_blank')">
                        <h2>Text-based Story Game</h2>
                        <p>
                        A very simple game with no graphics, just text on the screen. The player makes choices that affect the outcome of
                        the story. Even though the game sounds really basic, and it is, I actually put quite a bit of effort into making 
                        it the best it can be. I added a couple of hand-made graphics for idling screens, and I haven't done much with the story,
                        but that can be fixed really quick. The game uses a separate story-tree file to store the story data,
                        which is accessed by a singular number variable that tracks the player's current position in the story. I 
                        am overall quite proud of this project, I like how it turned out. From all my previous projects, this one
                        has probably the cleanest and most organized code, while also looking decent. Because how can you make white text on 
                        black background look bad?
                        </p>
                    </button>
                </div>
                <div class="row">
                    <button class="project" onclick="alert('Sorry! This project is lost media and there are no backups available. :(')">
                        <h2>An online library system</h2>
                        <p>
                        A web-based library management system built using HTML, CSS, PHP, and SQL for database management.
                        The system allows users to browse and search for books and authors, while administrators can manage book inventory and user accounts.
                        Unfortunately, my access to the project files has been lost with my exit from my previous school,
                        and I have made no backups of the project, apart from the very early stages of development that are missing most of the functionality.
                        </p>
                    </button>
                    <button class="project" onclick="window.open('https://github.com/fubaxa/honestlyjustsomechess', '_blank')">
                        <h2>Chess app</h2>
                        <p>
                        A simple chess application built using Python and Pygame. It allows users to play chess against each other on the same device.
                        I tried implementing an AI opponent, but it turned out to be too complex for my current skill level, so I left it out for now.
                        <br><br>
                        Also turns out I forgot to upload the files to github!!! So for the next few weeks the repository will be empty.
                        </p>
                    </button>
                    <button class="project" onclick="window.open('https://github.com/fubaxa/react-website', '_blank')">
                        <h2>React Website</h2>
                        <p>
                        A little side project where I try to experiment with React. I haven't done much with it yet,
                        but when I do I will probably implement some of the stuff into this website as well. React is a framework
                        which allows for easier and more efficient web development, so I want to learn it properly.
                        </p>
                    </button>
                </div>
            </div>
            `;
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
