

const dummyApiResponse = {
    showLightAndDarkMode: true,
    showTicTacToe: true,
    showRandomColorGenerator: true,
    showAccordion: true,
    showTreeView: true
}
function featureFlagsDataServiceCall() {
    return new Promise((resolve, reject) => {
        if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
        else reject("Some error occurred! Please try again");
    });
}

export default featureFlagsDataServiceCall;