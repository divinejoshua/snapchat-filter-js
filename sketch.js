    // Your code will go here
    // open up your console - if everything loaded properly you should see the latest ml5 version
    console.clear()

    let video = null
    let poses = []
    let noseX = null
    let noseY = null

    // Create a new image element
    var redDotImg = new Image();
    redDotImg.src = 'images/reddot.png'; // Replace with the path to your image


    // On set up 
    function setup() {
        createCanvas(600,500);
        video = createCapture(VIDEO)
        video.size(600, 500)

        let poseFinder = ml5.poseNet(video); 
        // Listen to new 'pose' events
        poseFinder.on('pose', (results) => {
            poses = results;
          });
                    
        video.hide()
    }

    // On camera 
    function draw() {
        background(220);
        image(video,0,0,600,500)
        redDotAnimation() //Red dot animation
        
    }



    //Animations 
    function redDotAnimation(){
        //This animation is a red dot on the nose
        if(poses.length > 0) {
            console.log(poses[0].pose)
            noseX = poses[0].pose.nose.x
            noseY = poses[0].pose.nose.y
            redDotImg.style.position = 'absolute';
            redDotImg.style.left = noseX-17 + 'px';
            redDotImg.style.top = noseY + 'px';
            redDotImg.style.width = 50 + 'px';
            redDotImg.style.height = 50 + 'px';

            // Add the red dot to the dom 
            document.body.appendChild(redDotImg);
             
        }

      

    }
