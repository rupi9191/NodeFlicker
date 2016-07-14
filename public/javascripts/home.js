var template = Handlebars.getTemplate('home');
var imageView = Handlebars.getTemplate('image-view')



showView(null);
function getPhotos() {
    var context = {
      photos: []

    };
    var tag = $(".container input").val();
    $.ajax({
        url:"https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?&tags="+tag,
        method: 'GET',
        dataType: 'jsonp',
        success: function(response){
           $.each(response.items,function(index,value){
               context.photos.push(value.media.m)
           })
           showView(context);
        }
    })
}


function showView(data){
    var html = template(data)
    var mhtml = imageView();
    $("#content").html(html+mhtml)
    bindEvents();
}
function showImageView(img) {
   $("#imageView").modal('show');
   $(".modal-body>img").attr("src",img)
}
function bindEvents() {
    
    $(".photo").click(function(){
        showImageView($(this).attr("src"));
    })
}