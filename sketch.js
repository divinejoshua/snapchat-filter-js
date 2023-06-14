    // Your code will go here
    // open up your console - if everything loaded properly you should see the latest ml5 version
    console.clear()

    let video = null
    let poses = []
    let noseX = null
    let noseY = null

  
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

        // Load the images
        redDotImg = loadImage('images/reddot.png');
        clownHatImg = loadImage('images/clown-hat.png');
    }

    // On camera 
    function draw() {
        background(220);
        translate(width,  0);
        scale(-1, 1);
        image(video,0,0,600,500)
        redDotAnimation() //Red dot animation
        clownHatAnimation() //Red dot animation
        
    }



    //===================Animations ====================

    //This animation is a red dot on the nose
    function redDotAnimation(){
        if(poses.length > 0) {
            noseX = poses[0].pose.nose.x
            noseY = poses[0].pose.nose.y
            image(redDotImg, noseX, noseY, 50, 50);
         
             
        }

    }

    //This animation is for the clown hat
    function clownHatAnimation(){
        if(poses.length > 0) {
            noseX = poses[0].pose.nose.x
            noseY = poses[0].pose.nose.y
            image(clownHatImg, noseX-200, noseY-450, 400, 400);
           

        }

    }
