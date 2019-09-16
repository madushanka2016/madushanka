function loadProject() {
    var mainGril = document.getElementById("mainGril");
    mainGril.innerHTML = ` 
    <div>
        <div>
            <h1 class="animated tada"
            style="text-align: center;margin-bottom: 40px;margin-top: 20px; font-size: 55px;">Project</h1>
        </div>
        <div>
            <ul>
                <li style="font-size: 20px"><b> Online Shopping System</b>
                    <ul style="list-style-type: none;font-size: 18px">
                        <li>PHP | MySQL | Html | css | JavaScriot</li>
                    </ul>
                </li>
                <li style="font-size: 20px"><b>To Do List</b>
                    <ul style="list-style-type: none;font-size: 18px">
                        <li>Angular | Firebase</li>
                        <li><a href="https://madushanka2016.github.io/To-Do-List/"
                            class="btn btn-outline-secondary" target="_blank">Link</a> </li>
                    </ul>
                </li>
            </ul>
        </div>	
    </div>   
    `;
}