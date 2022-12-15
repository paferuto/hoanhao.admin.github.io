$(document).ready(function(){
    addZone();});

function addZone(){
    $.ajax({
        url: 'asset/shippingzone.xml',
        dataType: 'xml',
        success: function(data){
            $("table").children().remove();
            $(data).find('zone').each(function(){
                var zone = $(this).find('name').text();
                var country = $(this).find('location').text();
                var price = $(this).find('thau').text();
                var check = $(this).find('available').text();
                var row = "<tr><td>"+zone+"</td><td>"+country+"</td><td>"+price+"</td><td>"+check+"</td></tr>";
                $("tableData").append(row);
            });
        }});
}