let btn = document.getElementById('add-task');
let title = document.getElementById('title');
let desc = document.getElementById('description');
let user_id = document.getElementById('user_id');

btn.addEventListener('click', function(){

    let data ={
        title: title.value,
        description: desc.value,
        user_id: user_id.value
    }

    enableDisableInputs( true )


    fetch('/tasks/add',{
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },

        body: JSON.stringify( data )
    })
    .then( function(res){
        return res.json();
    })
    .then( function(data){

        enableDisableInputs( false )


        // Empty all inouts
        title.value = '';
        desc.value = '';
        user_id.value = '';

        // Focus the first input
        title.focus();

        // Alert the user
        alert('Task added successfully');


        console.log(data);
    })
    .catch( function(err){

        enableDisableInputs( false )


        // Alert the user
        alert('An error happend, please try again later');

        console.log(err);
    })
    
});

function enableDisableInputs( value )
{
    btn.disabled = value;
    title.disabled = value;
    desc.disabled = value;
    user_id.disabled = value;
}


let arr = [1,2,3,4];


