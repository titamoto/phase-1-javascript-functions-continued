function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}


const mondayWork = function(plan = "go to the office") {
    return `This Monday, I will ${plan}.`;

} 

function wrapAdjective(flair = "*") {

    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!` 
    

    }
}

const encouragingPromptFunction = wrapAdjective("!!!")