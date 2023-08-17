function fetchGitHubInformation(event){

    var username = $("#gh-username").val();
    if(!username) {
        $("#gh-username").html(`<h2>Please enter a GitHub username</h2>`);
        return;
    }
    
}