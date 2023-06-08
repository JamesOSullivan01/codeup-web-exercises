'use strict'

// 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
function getLastCommit(owner, repo) {
    return fetch(`https://api.github.com/networks/${owner}/${repo}/events`, {
        headers: {
            'Authorization': 'Bearer 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'
        }
    })
        .then((resp) => resp.json())
        .then((data) => {
            //data is stored in an array and we access the first object of that by using zero and then access the created-at property
            // this only works because the onlly events I have right now are push events. I would have to set up a loop with conditions.
            const created_at = data[0].created_at;
            console.log(`Last github commit for this user was at: ${created_at}.`);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

getLastCommit('JamesOSullivan01', 'codeup-web-exercises');

// getLastCommit('JamesOSullivan01', 'codeup-web-exercises')
//     .then(resp => resp.json()).then(data => console.log(data));

