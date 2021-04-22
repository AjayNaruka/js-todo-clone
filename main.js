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
    insertTask(presentTask[i])
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
    }
    console.log("rimosso "+ taskNumbers);
  })


  //AGGIUNTA TASK MANUALE
  $("#input").keyup(function(event){
    if(event.which === 13){
      var toAddTask = $(this).val().trim();
      insertTask(toAddTask)
      taskNumbers++;
      sendNotification(toAddTask)
      $(this).val('') 
      console.log(taskNumbers);
    }
  })

  //FUNZIONI

  function insertTask(str){
    var htmlTag = '<li><p class="task-desc">'+str+'</p><i class="fas fa-trash-alt"></i></li>'
    $(".list ul").append(htmlTag) 
  }

  function sendNotification(str){
    var htmlTag = '<p class="not-text">Hai inserito un nuovo task : '+ str+'</p>'
    $(".notification").html(htmlTag)
    $(".notification").fadeIn(1000)
    $(".notification").delay(3000).fadeOut(1500)
  }

})