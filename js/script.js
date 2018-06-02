document.onreadystatechange = function () {
    if (document.readyState === "complete") {
    
        // Get the modal
        var modal = document.getElementById('myModal');

        // Get the button that opens the modal
        var btn = document.getElementById("video-img");
        var sendBtn = document.getElementById("send-video-btn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on the button, open the modal 
        btn.onclick = function() {
            modal.style.display = "block";
            modal.style.top = "0px";
            setTimeout(showModal, 300)
        }

        sendBtn.onclick = function() {
            modal.style.display = "block";
            modal.style.top = "0px";
            setTimeout(showModal, 300)
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.className = "modal m-fadeOut";
            modal.style.top = "-800px";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.className = "modal m-fadeOut";
                modal.style.top = "-800px";
                
            }
        }

        var form = document.getElementById("modal-form");
        var name = document.getElementById("name");
        var email = document.getElementById("email");
        form.onsubmit = function(e) {
            e.preventDefault();
            if(name.value == "" || email.value == "") {
                var inValidName = name.value == "" ? name.style.border = "3px solid #b62e22" : name.style.border = "3px solid #c0c0c0";
                var invalidEmail = email.value == "" ? email.style.border = "3px solid #b62e22" : email.style.border = "3px solid #c0c0c0";
            } else {
                location.replace('https://jumpcut.com/1/skz6okb/video-1')
            }
        }

        function showModal() {
            modal.className = "modal m-fadeIn";
        }
    }

}