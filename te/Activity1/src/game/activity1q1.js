var activity1q1 = function (patternsRatio) {};
var input;
var submit;
var attempt = 0;
var inCorrectFeedbackTextAttempt1q2 = "Not quite right. \n Compare the size of the grid in original and scaled up pattern.\n  Try again!" 
;

var inCorrectFeedbackTextAttempt2q2 = "Not quite right.\n You have to create a pattern three times as large as the original one. \n You need to scale the original pattern up by a factor of 3.";

activity1q1.prototype = {
	preload:function(){
		this.load.image('a1q2Background','assets/images/activity1/BACK_GROUND_Q2.png');
	},
	create:function(){
//		adding background image
		var backGround = this.add.image(this.world.centerX,this.world.centerY,'a1q2Background');
		backGround.anchor.setTo(0.5);

//		adding question image
		var question = this.add.image(125,212,'question');	
		
		input = this.add.inputField(420,475,{
												font: '15px Arial',
												fill: '#212121',
												fontWeight: 'bold',
												width: 200,
												placeHolder: "Enter your answer here!!",
												height : 15,
												padding: 8,
												borderWidth: 2,
												borderColor: '#0EC2F5',
												borderRadius: 6,});

//		adding submit button
		submit = this.add.button(520,545,'buttons',this.onSubmit,this,'SUBMIT_OVER.png','SUBMIT_NORMAL.png','SUBMIT_DOWN.png');
		submit.anchor.setTo(0.5);
		
		
		var reset = this.add.button(685,545,'buttons',this.onReset,this,'RESET_OVER_new.png','RESET_NORMAL_new.png','RESET_DOWN_new.png');
		reset.anchor.setTo(0.5);
		
		this.soundButton = this.game.add.button(750,540, 'soundMute',this.toggleMute,this,'',1);
		console.log(!thememusic.mute)
		
//		adding the question text
		var questionText ="ఒరిజినల్ దానితో పోల్చినప్పుడు మీ ఆకారం ఎన్ని రెట్లు\nపెద్దగా ఉన్నది?  " 
		var questionTextStyle = {font: "14px Arial", fill: "black", align:"left"};	
		var questionTextOnDisplay = this.add.text(30,61,questionText,questionTextStyle)
		questionTextOnDisplay.anchor.setTo(0);
		questionTextOnDisplay.lineSpacing = -5;

//		adding the instructional text
		var instructionText = "మీ జవాబుని పూర్ణ సంఖ్య రూపంలో నమోదు చేయండి మరియు మీ\nజవాబు సరైందో కాదో చూసుకొనుటకు సబ్మిట్ క్లిక్ చేయండి."
		var instructionTextStyle = {font: "14px Arial", fill: "blue	", align:"left"};
		var instructionTextOnDisplay = this.add.text(420,440,instructionText,instructionTextStyle)
		instructionTextOnDisplay.anchor.setTo(0);
		instructionTextOnDisplay.lineSpacing =-5;
	
		reg.modal = new gameModal(patternsRatio);
		this.createModals();
		
		
	},
	update:function(){
		this.input.update();
		if (input.value == ""){
			submit.tint = 0x666677;
			submit.inputEnabled = false;
		}
		else{
			submit.tint = 0xffffff;
			submit.inputEnabled = true;
		};
	},
//	This is function is used for debugging the point pixel position
	render: function(){
//		this.game.debug.text('x: '+this.game.input.x + ' y: ' + this.game.input.y,32,32);
//		this.game.debug.geom(gridtile[1], 'rgba(135,0,0,1)') ;
		},	
	toggleMute: function () {
		console.log(!thememusic.mute)
		if (!thememusic.mute) {
			thememusic.mute = true;
			this.soundButton.destroy();
			this.soundButton = this.game.add.button(750,540, 'soundMute', this.toggleMute,this,'',2);
		} else {
			thememusic.mute = false;
			this.soundButton.destroy();
			this.soundButton = this.game.add.button(750,540, 'soundMute', this.toggleMute,this,'',1);
		}
	},
	
//	checkTextInInput: function(){
//		
//	},
	
/******************************************* Modals **********************************************************************/
/********************************Modal Type *****************************************************************************/	
	
	createModals: function(){	
		
/**************************************** feedback correct *****************************************************/
 
		reg.modal.createModal({
            type:"correctAnswer",
            includeBackground: true,
			backgroundOpacity:0.6,
//            modalCloseOnInput: true,
            itemsArr: [	
				{
                    type: "image",
                    content: "feedback2",
                    offsetY: -50,
                    contentScale: 1,
                },
//				 {
//                    type: "button",
//					atlasParent:"popupsItems",
//					content: "close_button_normal.png",
//					buttonHover:"close_button_mouse_over.png",
//                    offsetY: -170,
//					offsetX: 195,
//					contentScale: 1,
//					callback: function(){
//						winningSound2.stop();
//                      reg.modal.hideModal("correctAnswer");
//                    } 
//                },
				
				{
                    type: "sprite",
					atlasParent:"popupsItems",
					content: "SMILEY_HAPPY.png",
                    offsetY: -130,
					offsetX: -180,
                    contentScale: 1
                },
				
				  {
                    type: "text",
                    content: "బాగా చేసారు!",
                    fontFamily: "Arial",
                    fontSize:14,
                    color: "black",
                    offsetY:-130,
                    offsetX:-120
                },
				
				  {
                    type: "text",
                    content: "మీరు తయారు చేసిన ఆకారం ఒరిజినల్ దానికన్నా\nమూడు రెట్లు పెద్దగా ఉన్నది.",
                    fontFamily: "Arial",
                    fontSize:14,
					align: "left",
                    color: "black",
                    offsetY:-90,
                    offsetX:-40
                },		
				  {
                    type: "text",
                    content: "మీరు మీ ఆకారాన్ని కారకం 9 తో పెంచారని దీని అర్థం.",
                    fontFamily: "Arial",
                    fontSize:14,
					align: "left",
                    color: "black",
                    offsetY:-55,
                    offsetX:-30
                },
				{
                    type: "text",
                    content:"టాబ్ను మూసివేసి ముందుకు సాగండి",
                    fontFamily: "Arial",
                    fontSize:14,
                    color: "0xFF0000",
                    offsetY:-10,
                    offsetX:-20
                },
//				  {
//                    type: "text",
//                    content: "Click NEXT to continue.",
//                    fontFamily: "Arial",
//                    fontSize:12,
//                    color: "0xFF0000",
//					align: "left",
//                    offsetY:-30,
//                    offsetX:-105
//                },
//				{
//                    type: "button",
//					atlasParent:"popupButtons",					
//                    content:"NEXT_BUTTON_NORMAL.png",
//					buttonHover:"NEXT_BUTTON_MOUSE_OVER.png",
//					buttonActive:"NEXT_BUTTON_MOUSE_DOWN.png",
//                    offsetY: -10,
//                    offsetX: -10,
//                    contentScale: 1,
//                    callback: function () {	
//					winningSoundScream.stop();
//                    patternsRatio.state.start('activity1q1')
//                 }
//				}
				]
			}),
/****************************************feedback 1 incorrect ***********************************************/ 		
				
		reg.modal.createModal({
            type:"IncorrectAnswerAttempt1",
            includeBackground: true,
			backgroundOpacity:0.6,
//            modalCloseOnInput: true,
            itemsArr: [
              {
                    type: "image",
                    content: "feedback2",
                    offsetY: -50,
                    contentScale: 1
                },
				 {
					type: "button",
					atlasParent:"popupsItems",
					content: "close_button_normal.png",
					buttonHover:"close_button_mouse_over.png",
                    offsetY: -170,
					offsetX: 195,
					contentScale: 1,
					callback: function(){
                      reg.modal.hideModal("IncorrectAnswerAttempt1");
                    } 
                },
				{
                    type: "sprite",
					atlasParent:"popupsItems",
					content: "SMILEY_SAD.png",
                    offsetY: -130,
					offsetX: -180,
                    contentScale: 1
                },
				{
                    type: "text",
                    content:"సరియైనది కాదు.",
                    fontFamily: "Arial",
                    fontSize:14,
                    color: "black",
                    offsetY:-130,
                    offsetX:-110
                },
				{
                    type: "text",
                    content:"ఒరిజినల్‌లో గ్రిడ్ సైజు మరియు స్కేలు పెంచిన ఆకారాన్ని పోల్చండి.\nమళ్ళీ ప్రయత్నించండి!”",
                    fontFamily: "Arial",
                    fontSize:14,
					align:"left",
                    color: "black",
                    offsetY:-80,
                    offsetX:-50
                },			
				{
                    type: "text",
                    content:"గ్రిడ్ క్లియర్ చేసి మరియు మళ్ళీ ప్రయత్నించడానికి రీసెట్ క్లిక్  చేయండి.",
                    fontFamily: "Arial",
                    fontSize:14,
                    color: "0xFF0000",
                    offsetY:-35,
                    offsetX:-36
                },
//				
				
				{
                    type: "button",
					atlasParent:"buttons",
                    content:"RESET_NORMAL_new.png",
					buttonHover:"RESET_OVER_new.png",
					buttonActive:"RESET_DOWN_new.png",
                    offsetY: -0,
                    offsetX: -10,
                    contentScale: 1,
                    callback: function () {
                  		input.value = 0;
						patternsRatio.state.start('activity1q1')      
                 }
				}
		
			]
        });
/****************************************feedback 1 incorrect ***********************************************/ 			
		reg.modal.createModal({
            type:"IncorrectAnswerAttempt2",
            includeBackground: true,
			backgroundOpacity:0.6,
//            modalCloseOnInput: true,
            itemsArr: [
              {
                    type: "image",
                    content: "feedback2",
                    offsetY: -50,
                    contentScale: 1
                },
//				 {
//                    type: "button",
//					atlasParent:"popupsItems",
//					content: "close_button_normal.png",
//					buttonHover:"close_button_mouse_over.png",
//                    offsetY: -170,
//					offsetX: 195,
//					contentScale: 1,
//					callback: function(){
//                      reg.modal.hideModal("IncorrectAnswerAttempt2");
//                    } 
//                },
				{
                    type: "sprite",
					atlasParent:"popupsItems",
					content: "SMILEY_SAD.png",
                    offsetY: -130,
					offsetX: -180,
                    contentScale: 1
                },
				{
                    type: "text",
                    content:"“సరియైనది కాదు.",
                    fontFamily: "Arial",
                    fontSize:14,
                    color: "black",
                    offsetY:-130,
                    offsetX:-110
                },
				{
                    type: "text",
                    content:"మీరు  ఒరిజినల్ దాని కన్నా మూడు రెట్లు పెద్దగా ఉన్న ఆకారాన్ని తయారు\nచేయాలి. మీరు ఒరిజినల్ ఆకారాన్ని కారకం 9 తో స్కేలు పెంచాలి.",
                    fontFamily: "Arial",
                    fontSize:14,
					align:"left",
                    color: "black",
                    offsetY:-70,
                    offsetX:-10
                },		
				{
                    type: "text",
                    content:"టాబ్ను మూసివేసి ముందుకు సాగండి",
                    fontFamily: "Arial",
                    fontSize:14,
                    color: "0xFF0000",
                    offsetY:-10,
                    offsetX:-20
                },
//				
				
//				{
//                    type: "button",
//					atlasParent:"popupButtons",
//                    content:"TRY_AGAIN_BUTTON_NORMAL.png",
//					buttonHover:"TRY_AGAIN_BUTTON_MOUSE_OVER.png",
//					buttonActive:"TRY_AGAIN_BUTTON_MOUSE_DOWN.png",
//                    offsetY: -0,
//                    offsetX: -10,
//                    contentScale: 1,
//                    callback: function () {
//                  		input.value = 0;
//						patternsRatio.state.start('activity1q1')      
//                 }
//				}
		
			]
        });		
	},

	showModalCorrectAttempt: function(){
		reg.modal.showModal("correctAnswer");
		winningSoundScream.play('',0,1);
	},
	
	showModal_InCorrectAttempt_Lessthan_2: function(){
		reg.modal.showModal("IncorrectAnswerAttempt1");
	},
	
	showModal_InCorrectAttempt_Morethan_2: function(){
		reg.modal.showModal("IncorrectAnswerAttempt2");
//		thememusic.play('',0,1);
	},
	
	/***************************************** Validation ***********************************************************************/
	
	onSubmit: function(){
		if (input.value == 3){
			this.showModalCorrectAttempt();
		}
		else if (input.value != 3 && attempt < 2){
			this.showModal_InCorrectAttempt_Lessthan_2();
			attempt ++;
		}
		else if(input.value != 3 && attempt >= 2){
			this.showModal_InCorrectAttempt_Morethan_2();
		}
	},
	
	onReset: function () {
		this.state.start('activity1q1')
	}

	
};
