$(document).ready(function() {
    setTimeout(() => {
        $('#completedPopup, #contactSubmitionModal').modal('show');
    }, 2000);
    
    $('.input-group-password .btn').click(function(){
        $(this).children().toggle();
        $(this).toggleClass('active');

        if($(this).hasClass('active')){
            $(this).siblings('input').attr('type', 'text');
        }else{
            $(this).siblings('input').attr('type', 'password');
        }
    });

    $( "#contact-btn" ).click(function(event) {
        // event.preventDefault();
        if($('.phone-field').hasClass('is-invalid')){
          return false
        }
        // else{
        //   $( "#contact" ).submit();
        // }
    });

    $('.btn-menu').click(function(){
        $(this).children().toggle();
        $('.navigation-menu').toggleClass('show');
    })

    if($('.owl-cards').length > 0){
        $('.owl-cards').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            dots : true,
            navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
            responsiveClass:true,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:3
                },
                992:{
                    items:4
                },
                1000:{
                    items:5
                }
            }
        })
    }

    var form = $("#step-form");
    if(form.length > 0){
        form.validate({
            errorPlacement: function errorPlacement(error, element) { element.before(error); },
            // rules: {
            //     confirm: {
            //         equalTo: "#password"
            //     }
            // }
        });

        form.children("div").steps({
            headerTag: "h3",
            bodyTag: "section",
            transitionEffect: "fade",
            autoFocus: true,
            onStepChanging: function (event, currentIndex, newIndex)
            {
                form.validate().settings.ignore = ":disabled,:hidden";
                return form.valid();
            },
            onFinishing: function (event, currentIndex)
            {
                form.validate().settings.ignore = ":disabled";
                return form.valid();
            },
            onFinished: function (event, currentIndex)
            {
                alert("Submitted!");
            }
        });
    }

    // prev
    $('.actions ul li').eq(0).find('a').html('<i class="fa-solid me-2 fa-chevron-left"></i> <span>Previous</span>');
    $('.actions ul li').eq(1).find('a').html('<span>Next</span> <i class="fa-solid ms-2 fa-chevron-right"></i>');
    $('.actions ul li').eq(2).find('a').html('<span>Submit</span> <i class="fa-solid ms-2 fa-chevron-right"></i>');
    $('.actions ul li a').addClass('btn btn-grad d-inline-flex align-items-center border-0 ls-3 text-uppercase');


    // Circle Check
    $('label.item-circle .item-span').click(function(){
        $(this).parent().toggleClass('active');
        $(this).siblings('input').attr('disabled', false);
        if($(this).parent().hasClass('active')){
            if($(this).parents('section').find('input[type="checkbox"]').filter(':checked').length + 1 > 3){
                alert('Don\'t add more then 3 items. \nPlease remove previous item first.')
                $(this).parent().removeClass('active');
                $(this).siblings('input').attr('disabled', true);
            }
        }
    })

    if($('.scrollSlider').length > 0){
        var swiper = new Swiper(".scrollSlider", {
            slidesPerView: "auto",
            spaceBetween: 15,
            mousewheel: {
              releaseOnEdges: true,
            },
            // scrollbar: {
            //   el: ".swiper-scrollbar",
            //   hide: true,
            // },
            breakpoints:{
                0: {
                    spaceBetween: 10,
                },
                1024: {
                    spaceBetween: 15
                }
            }
        });
    };


    // 28/04
    // Search item
    $('.input-search').on('keyup', function() {
      var value = $(this).val().toLowerCase();
      var data = $(this).data('search');
      console.log(value , data);
      $('.'+data +'-list-items div').filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });

    //dropdown 
    $(".dropdown-menu-notification").click(function(e){
      e.stopPropagation();
    });

    $('.dropdown-menu-notification-header .btn').click(function(){
      var filter = $(this).data('filter');
      console.log(filter);
      if(filter === 'unread'){
        $(this).parents('.dropdown').find('.dropdown-item').parent().fadeOut();
        $(this).parents('.dropdown').find('.dropdown-item.unread').parent().fadeIn();
      }else{
        $(this).parents('.dropdown').find('.dropdown-item').parent().fadeOut().delay(300).fadeIn();
      }
    })

    $('.form-control-limit').on('input', function() {
      // Limit the input to a maximum of 20 characters
      // if ($(this).val().length >= 20) {
      //   $(this).attr('maxlength', '20');
      // } else {
      //   $(this).removeAttr('maxlength');
      // }
      $(this).siblings('.limit-count').find('.lc-num').html($(this).val().length);
    });
});

if($('.form-validate').length > 0){
    $.validator.setDefaults({
        submitHandler: function() {
            alert("submitted!");
        }
    });
    $().ready(function() {
        // validate the comment form when it is submitted
        $('[type="submit"]').click(function(){
            $(this).parents(".form-validate").validate();
        })
    });
}



const draggableElemsShirt = document.querySelectorAll(".draggable[data-id='shirt']");
const draggableElemsPant = document.querySelectorAll(".draggable[data-id='pant']");

const droppableElemsShirt = document.querySelectorAll(".droppable.shirt");
const droppableElemsPant = document.querySelectorAll(".droppable.pant");

const draggableElems = document.querySelectorAll(".draggable");
const droppableElems = document.querySelectorAll(".droppable");

// const clearData = document.getElementById("clear-data");

// clearData.addEventListener("onClick", clearVal);

function clearBoth(){
    draggableElems.forEach((elem) => {
        elem.classList.remove("dragged");
        elem.setAttribute("draggable", "true");
    });
    droppableElems.forEach((elem) => {
        elem.removeAttribute('style');
    });
    document.getElementById('btn-shirt').classList.remove('active');
    document.getElementById('btn-pant').classList.remove('active');
}

function clearShirt(){
    draggableElemsShirt.forEach((elem) => {
        elem.classList.remove("dragged");
        elem.setAttribute("draggable", "true");
    });
    droppableElemsShirt.forEach((elem) => {
        elem.removeAttribute('style');
    });
    document.getElementById('btn-shirt').classList.remove('active');
}

function clearPant(){
    draggableElemsPant.forEach((elem) => {
        elem.classList.remove("dragged");
        elem.setAttribute("draggable", "true");
    });
    droppableElemsPant.forEach((elem) => {
        elem.removeAttribute('style');
    });
    document.getElementById('btn-pant').classList.remove('active');
}

draggableElems.forEach((elem) => {
  elem.addEventListener("dragstart", dragStart);
  // elem.addEventListener("drag", drag);
  // elem.addEventListener("dragend", dragEnd);
});

droppableElems.forEach((elem) => {
  elem.addEventListener("dragenter", dragEnter);
  elem.addEventListener("dragover", dragOver);
  elem.addEventListener("dragleave", dragLeave);
  elem.addEventListener("drop", drop);
});

function dragStart(event) {
  event.dataTransfer.setData("text", event.target.dataset.id);
  event.dataTransfer.setData("src", event.target.src);
  event.dataTransfer.setData("id", event.target.id);
  // console.log(event.target.dataset.id)
  // draggableElems.forEach((elem) => {
  //   elem.classList.remove("dragged");
  //   elem.setAttribute("draggable", "true");
  // });
}

function dragEnter(event) {
  event.target.classList.add("droppable-hover");
}

function dragOver(event) {
  event.preventDefault();
}

function dragLeave(event) {
  event.target.classList.remove("droppable-hover");
}

function drop(event) {
  event.preventDefault();
  // Set unique data for both elements 
  const draggableElemDataId = event.dataTransfer.getData("id");
  const draggableElemDataObj = event.dataTransfer.getData("src");
  const draggableElemData = event.dataTransfer.getData("text");
  const droppableElemData = event.target.dataset.draggableId;
  // Check if element is positioned correctly 
  if (draggableElemData === droppableElemData) {
    // Get elements 
    const droppableElem = event.target;
    // const draggableElem = document.getElementById(draggableElemDataId);
    // console.log(draggableElem.src)
    // Change the state of droppable element
    droppableElem.style.backgroundImage = `url(${draggableElemDataObj})`;
    droppableElem.classList.add("dropped");
    
    // Change the state of draggable element
    // draggableElem.classList.add("dragged");
    // draggableElem.setAttribute("draggable", "false");

    if(droppableElemData === 'pant'){
        // document.getElementById('btn-pant').style.display = 'inline-block';
        document.getElementById('btn-pant').classList.add('active');
        draggableElemsPant.forEach((elem) => {
            elem.classList.add("dragged");
            elem.setAttribute("draggable", "false");
        });
    }
    
    if(droppableElemData === 'shirt'){
        // document.getElementById('btn-shirt').style.display = 'inline-block';
        document.getElementById('btn-shirt').classList.add('active');
        draggableElemsShirt.forEach((elem) => {
          elem.classList.add("dragged");
          elem.setAttribute("draggable", "false");
        });
    }
  } else {
    event.target.classList.remove("droppable-hover");
  }  

}



// const video = document.querySelector('video');
// const canvas = document.querySelector('canvas');
// const button = document.querySelector('#button');

// // Get permission to access the camera and start the video stream
// navigator.mediaDevices.getUserMedia({ video: true })
//   .then((stream) => {
//     video.srcObject = stream;
//     video.play();
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// When the user clicks the button, take a snapshot of the video stream
// button.addEventListener('click', () => {
//   const context = canvas.getContext('2d');
//   context.drawImage(video, 0, 0, canvas.width, canvas.height);
  
//   // Convert the canvas to a data URL and display it in an image element
//   const dataURL = canvas.toDataURL();
//   if(dataURL){
//       document.getElementById('take-photo').style.display = 'block';
//       const image = document.querySelector('.take-photo');
//       image.src = dataURL;
//   }
// });


const video = document.querySelector('#videoPhoto');
const canvas = document.querySelector('#canvasPhoto');
const button = document.querySelector('#button');
const buttonText = document.querySelector('#button-text');
const allow = document.querySelectorAll('#allow');
const scan = document.querySelector('#scan');
const downloadLink = document.querySelector('#download-photo');
const videoScan = document.querySelector('#video');

if(video){
    // Get permission to access the camera and start the video stream
    navigator.mediaDevices.getUserMedia({ video: true, videoScan: true })
      .then((stream) => {
        video.srcObject = stream;
        video.play();

        allow.forEach((element) => {
          element.disabled = false;
        });
    
        // scane
        videoScan ? videoScan.srcObject = stream : '';
        videoScan && videoScan.play();
        videoScan ? videoScan.disabled = false : '';
      })
      .catch((error) => {
        console.error(error);
        // allow.disabled = true;
        allow.forEach((element) => {
          element.disabled = true;
        });
    
        // scan
        scan.disabled = true;
      });
}

  // if(document.querySelector('.take-photo')){
  //     // When the user clicks the button, take a snapshot of the video stream
  //     button.addEventListener('click', () => {
  //       const context = canvas.getContext('2d');
  //       context.drawImage(video, 0, 0, canvas.width, canvas.height);
        
  //       // Convert the canvas to a blob and create a download link
  //       canvas.toBlob((blob) => {
  //         const dataURL = URL.createObjectURL(blob);
  //         console.log(dataURL);
  //         if(dataURL){
  //             document.getElementById('take-photo').style.display = 'block';
  //             const image = document.querySelector('.take-photo');
  //             image.src = dataURL;
  //         }
  //         downloadLink.href = dataURL;
  //         downloadLink.download = 'photo.jpg';
  //         URL.revokeObjectURL(dataURL);
  //       }, 'image/jpeg', 0.95);
  //     });
  // }

if(document.querySelector('.take-photo')){
    button.addEventListener('click', () => {
        buttonText.innerHTML="Retake Photo"
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        // Convert the canvas to a blob and create a download link
        canvas.toBlob((blob) => {
            const dataURL = canvas.toDataURL('image/png');
            if(dataURL){
                document.getElementById('take-photo').style.display = 'block';
                const image = document.querySelector('.take-photo');
                image.src = dataURL;
            }
            downloadLink.href = dataURL;
            downloadLink.download = 'photo.jpg';
            // downloadLink.click();
            URL.revokeObjectURL(dataURL);
            
        }, 'image/jpeg', 5);
    });
}

$('#download-photo').click(function(){
  $('#uploadModal').modal('show');
  $('#takePhotoModal').modal('hide');
})




const canvasScan = document.querySelector('#canvas');
if(canvasScan){
    const context = canvasScan.getContext('2d');
    function captureQRCode() {
      // Copy the video frame to the canvas
      canvasScan.width = video.videoWidth;
      canvasScan.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvasScan.width, canvasScan.height);
      
      // Decode the QR code
      const imageData = context.getImageData(0, 0, canvasScan.width, canvasScan.height);
      const code = jsQR(imageData.data, imageData.width, imageData.height);
      
      if (code) {
        // A QR code was found
        console.log(code.data);
      } else {
        // No QR code was found
        console.log('No QR code found');
      }
    }
}

// Call the captureQRCode function periodically to scan for QR codes
setInterval(captureQRCode, 1000);




var eventsArray = [
    {
      title  : 'event1',
      start  : '2019-07-20'
    },
    {
      title  : 'event2',
      start  : '2019-08-05',
      end    : '2019-08-07'
    },
    {
      title  : 'event3',
      start  : '2019-09-03'
    },
    {
      title  : 'event3',
      start  : '2019-10-05'
    }
  ];

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    if(calendarEl){
      var calendar = new FullCalendar.Calendar(calendarEl, {
          height: 600,
          plugins: [ 'dayGrid', 'interaction' ],
          
          dateClick: function(info) {
              alert('Clicked on: ' + info.dateStr);
            
            eventsArray.push({
              date: info.dateStr,
              title: "test event added from click"
            });
            
            calendar.refetchEvents();
          },
        
          eventClick: function(info) {
            alert(info.event.title)
          },
        
          events: function(info, successCallback, failureCallback) {
            successCallback(eventsArray);
          }
      });
  
      calendar.render();
    }
  });