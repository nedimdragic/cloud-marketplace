import CryptoES from 'crypto-es';

transform((event) => {
    const overwrite = {{overwrite}};
    const prefix = overwrite ? "" : {{prefix}};
    const key = {{key}};
    // demo purposes, before and after
    const before = {};
    const after = {};

    try {
        const pii_names = {{prop_names}};
        if (event?.data?.udo){
            pii_names.forEach((pii)=>{
                if (typeof event.data.udo[pii] == "string"){
                    before[pii] = event.data.udo[pii].toString();
                    event.data.udo[`${prefix}${pii}`] = CryptoES.AES.encrypt(event.data.udo[pii], key).toString();
                    after[pii] = CryptoES.AES.encrypt(event.data.udo[pii], key).toString();
                    // Decrpyt the value using 
                    // CryptoES.AES.decrypt(event.data.udo[pii], key).toString();
                }                
            })
            console.log(`Before Encrypting: \n${JSON.stringify(before, null, 2)}\n`);
            console.log(`After Encrypting: \n${JSON.stringify(after, null, 2)}\n`);
            console.log(`All Data: ${JSON.stringify(event.data, null, 2)}`);
        }
    } catch (e){
        console.log(e)
    }
    console.log(JSON.stringify(event, null, 2));
})
