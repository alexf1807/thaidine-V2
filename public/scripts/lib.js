export function $(id) { 
    return document.getElementById( id ); 
};



export function $$(type) { 
    return document.createElement( type ); 
};



export function $$$(loc, els) { 
    for(var t = 0 ; t < els.length ; t++){
        loc.appendChild( els[t] )
    }
};