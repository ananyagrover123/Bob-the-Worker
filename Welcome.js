class Welcome{

    constructor(){

    }

    display(){
        var title=createElement('h1')
        title.html("mine worker")
        title.position(210,250)
        var button=createButton('Press for rules');
        button.position(220,270);
        button.mousePressed(()=>{
            title.hide();
            button.hide();
            var titleRules=createElement('h1')
            titleRules.fontSize=3;
            titleRules.color="white";
            titleRules.html("RULES OF THE GAME")

            titleRules.position(200,0)
            var rules=createElement('h6')
            rules.html('1.Press left and right arrows to move the worker2.Destroy the rocks3.Press enter to destroy the rocks using the hammer4.Score will increase as you destroy the rocks')
            
        })
       
    }
}