import CryptoES from 'crypto-es';

// "transform" function allows you to access event and apply changes
transform((event) => {
    const overwrite = {{overwrite}};
    const prefix = overwrite ? "" : {{prefix}};
    // demo purposes, before and after
    const before = {};
    const after = {};

    try {
        const pii_names = {{prop_names}};

        if (event?.data?.udo){
            pii_names.forEach((pii)=>{
                if (typeof event.data.udo[pii] == "string"){
                    before[pii] = event.data.udo[pii].toString();
                    event.data.udo[`${prefix}${pii}`] = CryptoES.SHA256(event.data.udo[pii]).toString()
                    after[pii] = CryptoES.SHA256(event.data.udo[pii]).toString();
                    
                }                
            })
            console.log(`Before Hashing: \n${JSON.stringify(before, null, 2)}\n`);
            console.log(`After Hashing: \n${JSON.stringify(after, null, 2)}\n`);
            console.log(`All Data: ${JSON.stringify(event.data, null, 2)}`);
        }
    } catch (e){
        console.log(e)
    }
    console.log(JSON.stringify(event, null, 2));
})
