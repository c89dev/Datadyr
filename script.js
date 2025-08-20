        let currentPet;
        let isDead = false;
        let isHangry = false;
        let isSad = false;
        let health;
        let hunger = 100;
        let mood = 100;


        function startGame(){
            health = 100;
            hunger = 100;
            mood = 100;
        }

        function HangryScale(){
            if (hunger < 50 && isDead != true){
                isHangry = true;
                document.getElementById('petImg').src="Graphics/pet_hungry.png"
            }
            else if (hunger > 50 && mood < 200 && mood > 50){
                isHangry = false;
                document.getElementById('petImg').src="Graphics/pet_neutral.png"
            }
        }

        function HungerOverTime(){
            if (hunger > 0){
            hunger --;
        }
        else{
            isDead = true;
            document.getElementById('hungerDiv').innerText = "DEAD"
            document.getElementById('petImg').src="Graphics/pet_dead.png"
        }
        return hunger;
        }

        function HappyScale(){

            if (mood < 50 && isDead != true){
                isSad = true;
                document.getElementById('petImg').src="Graphics/pet_sad.png"
            }
            else if (mood > 150){
                isSad = false;
                document.getElementById('petImg').src="Graphics/pet_happy.png"
            }
            return mood;
        }

        function MoodOverTime(){
            if (mood > 0){
            mood --;
        }
        // else{
        //     isDead = true;
        //     document.getElementById('hungerDiv').innerText = "DEAD"
        //     document.getElementById('petImg').src="Graphics/pet_dead.png"
        // }
        return mood;
        }

        function FeedPet(){
            hunger = hunger + 20;
        }

        function ComfortPet(){
            mood = mood + 20;
        }

        function refresh(){
            if(isDead != true){
                document.getElementById('moodDiv').innerText = MoodOverTime();
                document.getElementById('moodDiv').innerText = HappyScale();
                document.getElementById('hungerDiv').innerText = HungerOverTime();
                document.getElementById('hangryDiv').innerText = HangryScale();

            }
        }