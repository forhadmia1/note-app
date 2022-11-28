// export function commonApiCall(url, method, data = {}) {
//     if (method === 'GET' || 'DELETE') {
//         return fetch(url, {
//             method: method,
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//             .then(res => {
//                 console.log(res);
//                 return res.json()
//             })
//             .then(data => data)
//     } else {
//         return fetch(url, {
//             method: method,
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: data
//         })
//             .then(res => res.json())
//             .then(data => data)
//     }
// }

