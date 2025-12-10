main = document.getElementById("main");
currentPage = window.location.hash;

function render() {
    switch (currentPage) {
        case "#home":
            main.innerHTML = `
            <div id="intro">
                <h1>JDC </h1>
                <h2>Welcome to the best website of all time! (not really)</h2>
                <p>This is a really basic website, made as a test for my coding abilities. 
                The site uses Javascript and SQL for database. This is my first website done with the use of Javascript,
                and probably the first one to be documented on Github since I did not save any of my previous projects. 
                That is truly tragic. As my Computer Science professor once said: "Every programmer is either always 
                doing backups, or will start doing backups soon."</p>
            </div>
            <div id="second">
                <div id="mods">
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
                <div id="button">
                    <h2>Useless Button</h2>
                    <p>Click the button below to see what happens.</p>
                    <button onclick="alert('You clicked the button!')">Click Me!</button>
                </div>
                <div id="cat">
                    <h2>Random Cat</h2>
                    <p>Please enjoy this cat picture.</p>
                    <img src="images/cat_photo.jpg" alt="Random Cat">
                </div>
            </div>
            `;
            break;
        case "#work":
            main.innerHTML = "<h1>List Page</h1><p>Here is a list of items.</p>";
            break;
        case "#about":
            main.innerHTML = "<h1>Leaderboard Page</h1><p>Check out the top scores!</p>";
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
