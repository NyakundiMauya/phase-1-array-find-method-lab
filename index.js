function superbowlWin(record) {
    let result = record.find((element, index, array) => {
        return element.result === 'W'
    })
    return result ? result.year : result;
}