
transform((event) => {
    const lowercase_all = {{lowercase_all}};
    const lowercase_array = {{lowercase_array}};
    const prop_names = lowercase_all ? event.data.udo : {{prop_names}};
    let prop, elem, prop_elem;
    try {
        for(prop in prop_names) {
            prop_elem = lowercase_all ? prop : prop_names[prop];
            if(!/tealium\_/.test(prop_elem)) {
                if (typeof event.data.udo[prop_elem] === "string") {
                    console.log('Before Lower Casing: ' + event.data.udo[prop_elem]);
                    event.data.udo[prop_elem] = event.data.udo[prop_elem].toLowerCase ? event.data.udo[prop_elem].toLowerCase() : event.data.udo[prop_elem];
                    console.log('After Lower Casing: ' + event.data.udo[prop_elem]);
                } else if(Array.isArray(event.data.udo[prop_elem]) && lowercase_array) {
                    for(elem in event.data.udo[prop_elem]) {
                        console.log('Before Lower Casing: ' + event.data.udo[prop_elem][elem].toString());
                        event.data.udo[prop_elem][elem] = event.data.udo[prop_elem][elem].toLowerCase ? event.data.udo[prop_elem][elem].toLowerCase() : event.data.udo[prop_elem][elem];
                        console.log('After Lower Casing: ' + event.data.udo[prop_elem].toString());
                    }
                } 
            }          
        }
    } catch (e) {
        console.error(e);
    }
});