// import * as jose from 'https://deno.land/x/jose/index.ts'

// // export const generateJWT = ( jsonArr, key ) => {

// //     return new Promise( (resolve, reject) => {

// //         const payload = { jsonArr };

// //         jwt.sign( payload, key, {
// //             expiresIn: '20h'
// //         }, (err, token ) => {

// //             if ( err ){
// //                 console.log(err);
// //                 reject('No se pudo generar el token');
// //             }

// //             resolve( token );

// //         })


// //     })
// // }

// export const jwt =()=> new jose.SignJWT({ 'urn:example:claim': true })
//   .setProtectedHeader({ alg: 'ES256' })
//   .setIssuedAt()
//   .setIssuer('urn:example:issuer')
//   .setAudience('urn:example:audience')
//   .setExpirationTime('2h')
//   .sign("privateKey")

// console.log(jwt)