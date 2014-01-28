      $(document).ready(function(){
  
      $("button#submit").click(function(){ 
    
         if($("#login").val() === "" || $("#password").val() === "")
             $("div#two").html("please enter boh Id AND Password");
         else
             $.post($("#myform").attr("action"),
              $("#myform :input").serializeArray(),
            function(data){
                $("div#two").html(data);
         
            });
            $("#myform").submit(function(){
                return false;
            });
            });
});
