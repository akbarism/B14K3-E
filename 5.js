function randomize(input){
    var random = 0;
    var aray = [];
        for(var i=0; i < 100;i++){
            var random = Math.floor(Math.random()*input);
            random++
            
            if(random % 2 == true && aray.length < input){
                aray.push(random)

            }
         }    
    console.log ("array : [" + aray + "]" )
for(var j = 0; j < input; j++){
   random += aray[JSON] 
}
    console.log(random)
}

randomize(5)