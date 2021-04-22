$(function(){

  var presentTask = [
    "Cucinare",
    "Mangiare",
    "Pulire"
  ]

  // ARROW LINK
  $(".list-header i.open-arrow").click(function(){

    if($(this).hasClass("fa-angle-down")){
      $(".list-header").css("border-bottom","none")
      $(this).removeClass("fa-angle-down")
      $(this).addClass("fa-angle-up")
    }else{
      $(".list-header").css("border-bottom","1px solid black")
      $(this).removeClass("fa-angle-up")
      $(this).addClass("fa-angle-down")
    }
    console.log("clickato ssu arrow");
    $(".list").slideToggle()
  })


  //AGGIUNGO TASK DEFAULT
  for(var i=0;i<presentTask.length;i++){
    insertTask(presentTask[i],false)
  }
  var taskNumbers = presentTask.length

  //CLICK CESTINO
  $(document).on("click",".list ul li i", function(){
    $(this).parent().remove()
    taskNumbers--;
    if(taskNumbers===0){
      alert("Non hai piu tasks")
      $(".list").slideToggle()
      $(".list-header").css("border-bottom","1px solid black")
      $(".list-header i.open-arrow").removeClass("fa-angle-up")
      $(".list-header i.open-arrow").addClass("fa-angle-down")
      //LI DEFAULT
      var noTask ='Non ci sono altri task '
      insertTask(noTask,true);
    }
    console.log("rimosso "+ taskNumbers);
  })


  //AGGIUNTA TASK MANUALE
  $("#input").keyup(function(event){
    if(event.which === 13){
      var toAddTask = $(this).val().trim();
      if(toAddTask.length>3){
        $(".list ul li.default").remove()
      insertTask(toAddTask,false)
      taskNumbers++;
      sendNotification(toAddTask)
      $(this).val('') 
      console.log(taskNumbers);
      }
      
    }
  })

  //FUNZIONI

  function insertTask(str,noTask){
    if(noTask === false){
      var htmlTag = '<li><p class="task-desc">'+str+'</p><i class="fas fa-trash-alt"></i></li>'
      $(".list ul").append(htmlTag)
    } else if(noTask === true){
      var htmlTag = '<li class="default"><p>'+str+'</p></li>'
    $(".list ul").append(htmlTag) 
    }
    
  }

  function sendNotification(str){
    var htmlTag = '<p class="not-text">Hai inserito un nuovo task : '+ str+'</p>'
    $(".notification").html(htmlTag)
    $(".notification").fadeIn(1000)
    $(".notification").delay(3000).fadeOut(1500)
  }

})