function changeDate(videoJSON){
    for (var i = 0; i < videoJSON.length; i++){
        var date = new Date(videoJSON.recorded_at);
        videoJSON.recorded_at = date;
    }
}