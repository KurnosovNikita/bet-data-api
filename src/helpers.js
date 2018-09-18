function formatResponse(err, data, message) {
    return {
        error: { code: err ? (err.code || 1) : 0 },
        message: err ? err.message : message,
        result: data,
        links: [
           {
                href: 'https://kurnosov-nikita-bet.herokuapp.com/',
                rel: 'get full score',
                method: 'GET',
           },
           {
               href: 'https://kurnosov-nikita-bet.herokuapp.com/',
               rel: 'save single score result',
               method: 'POST',
               body: 'username=Nikita&email=randomemail@box.com&score=10',
           }
        ],
    }
}

module.exports = {
    formatResponse,
}