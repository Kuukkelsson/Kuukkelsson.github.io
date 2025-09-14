
console.log("TERMINAL HERE");


const input = document.getElementById("command-input");
const output = document.getElementById("command-output");

function clearInput()
{
    input.value = '';
}

input.focus();

document.addEventListener('click', () => {
    input.focus();
});


    input.addEventListener('keydown', (event) =>
    {
        if (event.key == 'Enter' && !event.shiftKey) {
            event.preventDefault();
            const cmd = input.value.trim().toLowerCase();

            switch (cmd) {
                case "info":
                    output.innerHTML += "Terminal website <br> Made by kuukkelsson <br>";
                    clearInput();
                    break;
                case "help":
                    output.innerHTML += "Available commands:<br>  -s [query] : Search DuckDuckGo<br>  help : Show this help<br>  clear : Clear screen<br>";
                    clearInput();
                    break;
                case "clear":
                    output.innerHTML = "";
                    clearInput();
                    break;
                
                default:
                    if (!(cmd.startsWith("-s ")))
                    {
                        output.innerHTML += "Command not found.<br>";
                        clearInput();           
                    }
            }

            if (cmd.startsWith("-s "))
            {
                const query = cmd.substring(3).trim();

                const a = 'https://duckduckgo.com/?q=';
                const b = encodeURIComponent(query);

                if (query) {
                    window.location.href = a.concat("", b);
                    clearInput();
                }    
                else
                {
                    output.innerHTML += "Error: No search term provided.<br>";
                    clearInput();
                };
            }

            /*
            if (cmd) {
                if (cmd == "info") {
                    output.innerHTML += "Terminal website <br> Made by kuukkelsson <br>";
                    clearInput();
                }
                
            }*/
        }
    });


