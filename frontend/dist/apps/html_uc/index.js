/// Loop from 32 to 126
// let initiate value = 
// condition
// the logic
for( let i = 128512; i < 129324; i++ )
{

    let unicode = "&#"+i+";";

    let h1 = document.createElement('h1');
    h1.innerHTML = unicode;

    document.getElementById('alluc').appendChild( h1 );

    console.log( unicode );
}